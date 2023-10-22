export default function Contact(){

    return(
        <section>
            <form action="">
                <div className="container-fluid p-2 ">
                    <div className="row">

                        <div className="col-md-12">
                            <h1 className="fw-bold">Contact Us!</h1>
                            <label className="form-label mt-3" htmlFor="">Name:</label>
                            <input className="form-control mb-3" type="text" />
                            <label className="form-label" htmlFor="">Email:</label>
                            <input className="form-control mb-3" type="email" />
                            <label className="form-label" htmlFor="">How can we help you?:</label>
                            <textarea className="form-control mb-3" name="" id="" cols="30" rows="5"></textarea>
                            <button type="submit" className="btn btn-info text-white float-end">Submit</button>
                        </div>
                        
                    </div>
                </div>
            </form>
        </section>
    )
}
