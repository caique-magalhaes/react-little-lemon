import Header from "../Header/Header";
import './CustomerInfo.css'
import { Field ,Input, Button, Textarea} from "@chakra-ui/react";
import Footer from '../Footer/Footer'
import { useFormik } from "formik";
import * as Yup from "yup"


export default function CustomerInfo(){
    const ukPhoneRegex = /^(?:(?:\+44\s?|0)(?:1\d{9}|[23]\d{9}|7\d{9}|8\d{9}))$/;

    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName: "",
            email:"",
            phoneNumber: "",
            specialRequest: ""
        },

        validationSchema: Yup.object({
            firstName:Yup.string().min(1,"Must be at least 1 characters").max(50, "Must be at max 50 characters").required("Required"),
            lastName:Yup.string().min(1,"Must be at least 1 characters").max(50, "Must be at max 50 characters").required("Required"),
            email:Yup.string().email("Invalid Email address").required("Required"),
            phoneNumber: Yup.string().matches(ukPhoneRegex, "Please enter a valid UK phone number").required("Phone number is required"),
            specialRequest:Yup.string().min(10, "The special request must contain at least 10 characters.").max(400,"The special request must contain at max 400 characters.")
        })

    })

    return(
        <>
            <Header />
            <main className="reservation">
                <section className="reservation-content">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Customer Detail</p>
                </section>

                <section className="wrapper-form">
                    <form>
                            <Field.Root  invalid={formik.touched.firstName && !!formik.errors.firstName} >
                                <Input type="text" id="firstName" name="firstName" borderRadius="8px" backgroundColor="#FFFFFF" placeholder="First Name" {...formik.getFieldProps("firstName")} />
                                 <Field.ErrorText>{formik.errors.firstName}</Field.ErrorText>
                            </Field.Root>
                            <Field.Root invalid={formik.touched.lastName && !!formik.errors.lastName}>
                                <Input type="text" id="lastName" name="lastName" display="inline-block" backgroundColor="#FFFFFF" borderRadius="8px" mt="20px" placeholder="Last Name" {...formik.getFieldProps("lastName")} />
                                <Field.ErrorText>{formik.errors.lastName}</Field.ErrorText>
                            </Field.Root>
                        <Field.Root invalid={formik.touched.phoneNumber && !!formik.errors.phoneNumber}>
                            <Input type="tel" id="phoneNumber" name="phoneNumber" placeholder="+44 0000000000" backgroundColor="#FFFFFF"mt="20px" {...formik.getFieldProps("phoneNumber")} borderRadius="8px" />
                            <Field.ErrorText>{formik.errors.phoneNumber}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root invalid={formik.touched.email && !!formik.errors.email}>
                            <Input type="email" id="email" name="email" placeholder="Email" backgroundColor="#FFFFFF"mt="20px" {...formik.getFieldProps("email")} borderRadius="8px"  />
                             <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root invalid={formik.touched.specialRequest && !!formik.errors.specialRequest}>
                            <Textarea size="lg" mt="20px" id="specialRequest" name="specialRequest" backgroundColor="#FFFFFF" placeholder="Add a special Request (optional)" {...formik.getFieldProps("specialRequest")} borderRadius="8px"></Textarea>
                            <Field.ErrorText>{formik.errors.specialRequest}</Field.ErrorText>
                        </Field.Root>

                        <Button size="lg" mt="20px" mb="20px" width="15%" backgroundColor="#FACE14" color="#000000">Continue</Button>
                    </form>
                </section>


            </main>

            <Footer />
        </>
    )
}