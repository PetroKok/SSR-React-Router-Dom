import mongoose from 'mongoose';

let db = mongoose.connection;

let state = {
    database: null
};

exports.connect = (url, done) => {
    if (state.database) return done();
    mongoose.connect(url, (err, database) => {
        if (err) return done(err);
        state.database = database;
        done();
    });
};

exports.get = () => {
    return state.database;
};

exports.getStatus = () => {
    if (state.database) return "Connected!";
    return "Disconnected!";
};


