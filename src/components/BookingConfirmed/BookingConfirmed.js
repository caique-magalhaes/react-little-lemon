import { Link, useLocation } from "react-router-dom"
import './BookingConfirmed.css'
export default function BookingConfirmed(){
    const location = useLocation()
    const bookingData = location.state?.bookingData
    return(
        <div className="wrapper-confirmed-booking">
            {
                bookingData ?  (
                <section className="confirmed-booking-container">
                <h2>Booking Confirmed!</h2>
                <p>We look forward to hosting you at Little Lemon.</p>
                <div className="summary-booking">
                    <h3>Reservation Details</h3>
                    <p>Date: {bookingData.resDate}</p>
                    <p>Time: {bookingData.resTime}</p>
                    <p>Guest: {bookingData.guests}</p>
                    {bookingData.occasion ? (<p>Occasion: {bookingData.occasion}</p>) :""}
                </div>
            </section>)
            : (<p>Reservation not Found</p>)
        }
        <Link to="/" className="home-btn" >Return To Home</Link>
        </div>
    )
}