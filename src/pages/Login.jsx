import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import FormCard from "../components/FormCard";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div id="auth-page">
            <FormCard header="LOGIN UP">  
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    
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

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </FormCard>
        </div>        
    );
};

export default Login;