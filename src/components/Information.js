function Information({props}) {
    return(
        <>
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Reservation Information</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-2"><strong>Name:</strong> <span id="name_">{ props.name }</span></p>
                            <p className="mb-2"><strong>Date/Time:</strong> <span id="date_time_">{ props.datetime }</span></p>
                            <p className="mb-2"><strong>Email:</strong> <span id="email_">{ props.email }</span></p>
                            <p className="mb-2"><strong>Phone No:</strong> <span id="phoneNo_">{ props.phone_no }</span></p>
                            <p className="mb-2"><strong>Table No:</strong> <span id="tableNo_"></span></p>
                            <p className="mb-2"><strong>No. of Diners:</strong> <span id="noOfDiners_">{ props.no_of_diners }</span></p>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-warning btn-lg me-md-2" id="informBackButton"><a href="{% url 'web' %}" className="text-decoration-none">Edit</a></button>
                        <button className="btn btn-warning btn-lg" id="informButton" onclick="myFun()"><a href="{% url 'confirm' %}" className="text-decoration-none">Confirm</a></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Information