import Header from "../Header/Header";
import './Reservation.css'
import restaurant_img from '../../assets/restaurant.jpg'
import chef_img from '../../assets/restaurant chef B.jpg'
import Footer from '../Footer/Footer'
import { useFormik } from "formik";
import * as Yup from "yup"
import {updateTimes, initializeTimes} from "../../reducers/bookingReducer"
import { useReducer } from "react";
import { submitAPI } from "../../api";
import { useNavigate } from "react-router-dom";


export default function Reservation(){
    const navigate = useNavigate()
    const [availableTimes, dispatch] = useReducer(updateTimes,[],initializeTimes)
    const formik = useFormik({
        initialValues:{
            resDate:"",
            resTime:"",
            guests:"",
            occasion:"",
        },

        onSubmit:(values) =>{
            const isSubmitted = submitAPI(values)
            if(isSubmitted){
                navigate('/booking-confirmed', {state: {bookingData: values}})
            }
        },

        validationSchema: Yup.object({
            resDate: Yup.date().required("You must choose the date."),
            resTime: Yup.string().required("You must choose the Time."),
            guests: Yup.number().min(1,"You must have at least one table reserved.").max(10,"A maximum of 10 guests allowed.").required("You must choose the number of diners"),
            occasion:Yup.string().optional()
        })
    })

    const handleDateChange = (e) => {
        formik.handleChange(e);
        console.log(e)
        dispatch({type: "UPDATE_TIMES", payload: e.target.value})
    }

    return(
        <>
            <Header />
            <main className="reservation">
                <section className="reservation-content">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Find a table for any occasion</p>
                    <div className="content-img-reservation">
                        <img className="restaurant-img" src={restaurant_img} alt="outdoor restaurant tables" />
                        <img className="chef-img" src={chef_img} alt="Chef seasoning the salad" />
                    </div>
                </section>

                <section className="wrapper-form">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="date-time">
                            <div className="form-field">
                                <label htmlFor="resDate">Choose Date</label>
                                <input required className={formik.touched.resDate && !!formik.errors.resDate ? "error-input":"form-field-select"} type="date" id="resDate" name="resDate" {...formik.getFieldProps("resDate")} onChange={handleDateChange} />
                                {formik.touched.resDate && formik.errors.resDate && (
                                    <span className="error-text">{formik.errors.resDate}</span>
                                    )}
                            </div>

                            <div className="form-field">
                                <label htmlFor="resTime">Choose time</label>
                                <select required className={formik.touched.resTime && !!formik.errors.resTime ? "error-input":"form-field-select"} id="resTime" name="resTime" {...formik.getFieldProps("resTime")}>
                                    <option>Choose time</option>
                                    {availableTimes?.map((time)=>(<option key={time} value={time}>{time}</option>))}
                                </select>
                                 {formik.touched.resTime && formik.errors.resTime && (
                                    <span className="error-text">{formik.errors.resTime}</span>
                                )}
                            </div>
                        </div>

                        <div className="form-field">
                        <label htmlFor="guests" >Number of guests</label>
                            <input required className={formik.touched.guests && !!formik.errors.guests ? "error-input":"form-field-input"} type="number" id="guests" name="guests" placeholder="1" {...formik.getFieldProps("guests")} min="1" max="10" />
                            {formik.touched.guests && formik.errors.guests && (
                                <span className="error-text">{formik.errors.guests}</span>
                            )}
                        </div>

                        <div className="form-field">
                            <label htmlFor="occasion">Occasion</label>
                                <select
                                id="occasion"
                                name="occasion"
                                placeholder="Occasion"
                                className="form-field-select"
                                {...formik.getFieldProps("occasion")}>
                                    <option>Occasion</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                        </div>

                        <button type="submit" className="submit-btn">Make Your reservation</button>
                    </form>
                </section>


            </main>

            <Footer />
        </>
    )
}