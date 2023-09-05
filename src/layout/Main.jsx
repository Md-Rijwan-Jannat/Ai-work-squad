import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Container from "../components/container/Container";


const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
        </Container>
    );
};

export default Main;