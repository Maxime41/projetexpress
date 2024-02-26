// passport.js
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt; 
const User = require('./models/User');

passport.use('login', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, async (jwtPayload, done) => {
    try {
        console.log('JWT Token:', ExtractJWT.fromAuthHeaderAsBearerToken()(req));
        console.log('JWT Payload:', jwtPayload);

        const user = await User.findByPk(jwtPayload.id);
        if (!user) {
            return done(null, false, { message: 'User not found' });
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));