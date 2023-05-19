import { Strategy, ExtractJwt } from 'passport-jwt';

//https://github.com/paulocoronado/intro_express

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
};

const myStrategy:Strategy = new Strategy(opts, (payload, done) => {
  
  // Replace this fictitious user with the user from your database
  const user = {
    id: payload.id,
    username: payload.username,
  };

  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }



});

export default myStrategy;