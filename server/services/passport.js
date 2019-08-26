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

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // findOne es una promesa
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // este usuario ya existe
          console.log(
            "existe --------------------------------------------------------------"
          );
          done(null, existingUser);
        } else {
          // este usuario no existe
          console.log(
            "no existe ------------------------------------------------------------"
          );
          new User({
            googleId: profile.id,
            name: `${profile.name.familyName}, ${profile.name.givenName}`
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
