let sql = require('../config/config.js');

let BookingInfo = function (booking) {
    this.BookingID = booking.BookingID
    this.firstname = booking.firstname;
    this.lastname = booking.lastname;
    this.email = booking.email;
    this.bookingDate = new Date, booking.bookingDate;
    this.startTime = booking.startTime;
    this.endTime = booking.endTime;
    this.username = booking.username;
};

BookingInfo.createBooking = function createBooking(new_booking, result) {
    sql.query('INSERT INTO booking set ?', new_booking, function (err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res.new_booking);
            result(null, res.new_booking);
        }//End if else
    });
};

BookingInfo.getAllBookingInfo = function (username, result) {
    sql.query('SELECT * from booking where username = ?', [username], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

BookingInfo.delete = function (username, BookingID, result) {
    sql.query('DELETE from booking WHERE username = ? AND BookingID= ?', [username, BookingID], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res)
        }
    });
};

module.exports = BookingInfo;