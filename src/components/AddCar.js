import React from "react";

class AddCar extends React.Component {
    state = {

    };

    closeBtn = () => {
        this.props.closeAddCar();
    };

    changeCurrentData = (type, isInc) => {
        this.props.changeCurrentData(type, isInc)
    }

    save = () => {
        this.props.save();
    }

    componentWillUnmount () {
        this.props.clear();
    }

    render () {
        return (
            <div className="card">
                <div className="card-header">
                    <h1 className="mt-2">Add a Car 🚗</h1>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-3">
                            <form action="#">
                                <div className="form-group">
                                    <label htmlFor="car-model" className="fs-3">Cars Model</label>
                                    <input type="text" placeholder="Cars Model..." className="form-control" name="car-model" id="car-model" />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="color" className="fs-3">Cars Color</label>
                                    <input type="text" placeholder="Color..." className="form-control" name="color" id="color" />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="region" className="fs-3">Region</label>
                                    <input type="text" placeholder="Region..." className="form-control" name="region" id="region" />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="car-number" className="fs-3">Car Number</label>
                                    <input type="text" placeholder="Car Number..." className="form-control" name="car-number" id="car-number" />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-3">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img src="https://www.pngall.com/wp-content/uploads/2018/04/Sports-Car-PNG.png" className="w-50" alt="Cars" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 offset-3 text-center">
                                    <h3>Cars Speed</h3>
                                    <div className="btn-group">
                                        <button type="button" onClick={() => this.changeCurrentData("speed", false)} className="btn btn-danger add-btn">km/h -</button>
                                        <button type="button" className="btn btn-white add-btn fs-3">
                                            🚗
                                            {
                                                this.props.currentData ? this.props.currentData.speed : 0
                                            } km/h
                                        </button>
                                        <button type="button" onClick={() => this.changeCurrentData("speed", true)} className="btn btn-primary add-btn">km/h +</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row mt-2">
                        <div className="col-6">
                            <h3>Whether you add the Car or not 🤔</h3>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <button type="button" onClick={this.closeBtn} className="btn btn-warning btn-add-control fs-4">Cancel</button>
                            <button type="button" onClick={this.save} className="btn btn-success btn-add-control fs-4">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCar;