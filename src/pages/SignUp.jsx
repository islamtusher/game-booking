import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import AuthPageContain from '../components/FormCard';
import { CardText } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormCard from '../components/FormCard';
import axios from 'axios';

const SignUp = () => {
     const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        // axios.post('http://localhost:5000/user', data)
        //     .then(function (response) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });
        fetch(`http://localhost:5000/user`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log(res.json()))
            .catch(function (error) {
                    // handle error
                console.log(error);
            })
            
    }
    return (
        <div id="auth-page">
            <FormCard header="SIGN UP">  
                <Form onSubmit={handleSubmit(onSubmit)}>                
                    <Form.Group className="mb-3">
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control type="number" />
                        <Form.Text className="text-muted">
                            Well never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            {...register("password", {
                                required: 'This Is Required',
                            })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="text"
                                {...register("passwordConfirmation", {
                                    required : 'This is Required',
                            })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.passwordConfirmation?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>

                    <CardText className='d-flex justify-content-between pt-2 '>
                        Have an account?
                        <Link to="/login">Login</Link>
                    </CardText>
                </Form>
            </FormCard>
        </div>
    );
};

export default SignUp;