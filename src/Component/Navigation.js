import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


// const Navigation = () => {
//   return (<Navbar bg="dark" variant="dark">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link className="smoothscroll" href="/about">About</Nav.Link>
//       <Nav.Link className="smoothscroll" href="/project/:id">Resume</Nav.Link>
//       <Nav.Link className="smoothscroll" href="/projects">Projects</Nav.Link>
//       <Nav.Link className="smoothscroll" href="/projects">Contact</Nav.Link>
//     </Nav>
//       {/*<Form inline>
//         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//         <Button variant="outline-info">Search</Button>
//       </Form>*/}
//   </Navbar>)
// }

const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="smoothscroll" href="#about">About</Nav.Link>
        <Nav.Link className="smoothscroll" href="#resume">Resume</Nav.Link>
        <Nav.Link className="smoothscroll" href="#portfolio">Projects</Nav.Link>
        <Nav.Link className="smoothscroll" href="#contact">Contact</Nav.Link>
    </Nav>
      </Navbar>
    </React.Fragment>
  )
}

export default Navigation
