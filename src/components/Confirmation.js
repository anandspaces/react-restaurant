function Confirmation() {
    return(
        <>
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Reservation Confirmation</h2>
                    <hr/>
                    <p><strong>Reservation ID:</strong> {/* RID */}</p>
                    <p>We will notify you one day in advance.</p>
                    <p>Hope to see you soon!</p>
                    <p><strong>For more information:</strong></p>
                    <p>patliputra.palate@gmail.com</p>
                    <button className="btn btn-warning btn-lg mt-3" id="goBackHomeButton"><a href="{% url 'web' %}" className="text-decoration-none">Go Back Home</a></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Confirmation