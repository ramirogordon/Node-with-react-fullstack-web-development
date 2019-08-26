const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// nos traemos especificamente nuestro modelo de users
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // user.id = id de la tabla en mongoDB, es distinto al googleId
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: profile.id,
        name: `${profile.name.familyName}, ${profile.name.givenName}`
      }).save();
      done(null, user);
    }
  )
);
