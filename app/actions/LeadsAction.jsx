'use server';

const newLead = async(formData) => { 
    const lead = {
        name: formData.get('name'),
        email: formData.get('email'),
        number: formData.get('number'),
        location: formData.get('location'),
        property_type: formData.get('property_type'),
        bedrooms: formData.get('bedrooms'),
        message: formData.get('message'),
    }
    console.log(lead.name);

    const req = await fetch('http://127.0.0.1:8000/api/leads', {
        method: 'POST',
        body: JSON.stringify({
            name: lead.name,
            email: lead.email,
            phone: lead.number,
            location: lead.location,
            property_type: lead.property_type,
            bedrooms: lead.bedrooms,
            message: lead.message,
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const res = await req.json();
    console.log(res);
}

export default newLead;