import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CDBRating, CDBContainer } from 'cdbreact';

function EditJobForm() {
    return (
        <main>
			<h1>Edit Job</h1>
			{/* <form onSubmit={handleSubmit}> */}
            <InputGroup className="mb-3">
                <InputGroup.Text id="comapny_name">Company Name</InputGroup.Text>
                <Form.Control
                
                aria-label="comapny_name"
                aria-describedby="comapny_name"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="comapny_location">Company Location</InputGroup.Text>
                <Form.Control
                
                aria-label="company_location"
                aria-describedby="company_location"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="comapny_lament">Your Lament</InputGroup.Text>
                <Form.Control
                id="lament_input"
                aria-label="comapny_lament"
                aria-describedby="comapny_lament"
                />
            </InputGroup>
            <InputGroup.Text id="company_rating">Your Review</InputGroup.Text>
            <CDBContainer>
                <CDBRating feedback />
            </CDBContainer>
			{/* </form> */}
		</main>
	)
}

export default EditJobForm
