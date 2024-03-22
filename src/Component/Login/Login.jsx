import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  
  import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/Slices/AuthSlice";
  
  const initialState = {
    name: "",
    password: "",
    image: "",
  };
  
  export function LoginCard() {
    const [values, setValues] = useState(initialState);
  
   const dispatch=useDispatch()

    function onChange(e) {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    }
  
  
   function handleClick(){
      dispatch(login(values))
   }


    return (
      <Card className="w-96 h-screen grid items-center mx-auto">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 ">
          <Input
            label="Email"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
  
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange} // corrected from onchange to onChange
          />
  
          <p className="mt-10">Image is Optional</p>
          <Input
            label="ImageUrl"
            size="lg"
            name="image"
            value={values.image}
            onChange={onChange} // corrected from onchange to onChange
          />
  
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleClick}>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    );
  }
  