import {useEffect} from "react"

const EndClass = ({className}) => {
    return (
        <div className={className}>
            <button className="btn btn-danger text-color-light text-nowrap text-white-50"
                    data-bs-toggle="modal"
                    data-bs-target="#endClassModal" data-content="">End class
            </button>
            <Modal/>
        </div>
    )
}

const Modal = () => {
    useEffect(() => {
        console.log("Modal")
    })
    return (
        <div className="modal" id="endClassModal" tabIndex="-1" data-bs-backdrop="static" role="dialog"
             aria-labelledby="endClassModal"
             aria-hidden="true">
            <div className="modal-dialog">
                role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select a reason to end class</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <button>Class completed</button>
                        <button>Class interrupted/aborted</button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">End class</button>
                        <button type="button" className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EndClass