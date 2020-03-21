let sql = require('../config/config.js');

let BookingInfo = function (booking) {
    this.firstname = booking.firstname;
    this.lastname = booking.lastname;
    this.email = booking.email;
    this.bookingDate = new Date, booking.bookingDate;
    this.startTime = booking.startTime;
    this.endTime = booking.endTime;
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

module.exports = BookingInfo;