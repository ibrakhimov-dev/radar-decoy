import React from "react";
import AddCar from "./AddCar";

class Table extends React.Component {
    state = {
        cars: [],
        isAgreeAddCar: false,
        currentData: "",    
    };

    componentDidMount () {
        const cars = [
            {
                carModel: "Malibu",
                color: "Black",
                region: "Bukhara",
                carNumber: "80FCB010",
                speed: 160
            },
            {
                carModel: "Spark",
                color: "White",
                region: "Tashkent",
                carNumber: "01AB789C",
                speed: 100
            },
            {
                carModel: "Nexia",
                color: "Silver",
                region: "Samarkand",
                carNumber: "30FB566A",
                speed: 105
            },
            {
                carModel: "Captiva",
                color: "Black",
                region: "Bukhara",
                carNumber: "80TY080R",
                speed: 120
            },
        ];
        this.setState({
            cars,
        });
    }

    delete = (index) => {
        const cars = this.state.cars;
        cars.splice (index, 1);
        this.setState({
            cars,
        });
    }

    openAddCar = () => {
        this.setState({
            isAgreeAddCar: true,
        });
    }

    closeAddCar = () => {
        this.setState({
            isAgreeAddCar: false,
        });
    }

    changeCurrentData = (type, isInc) => {
        const newCurrentData = this.state.currentData
        ? this.state.currentData
        : {carModel: "none",
            color: "none",
            region: "none",
            carNumber: "none",
            speed: 0,};

        if (type === "speed"){
            if (isInc) {
                newCurrentData.speed++;
            } else if (newCurrentData.speed < 1){
                newCurrentData.speed = 0;
            } else {
                newCurrentData.speed--;
            }
        };
        this.setState({
            currentData: newCurrentData,
        })
    }

    save = () => {
        const {cars, currentData} = this.state;
        currentData.carModel = document.querySelector("#car-model").value;
        currentData.color = document.querySelector("#color").value;
        currentData.region = document.querySelector("#region").value;
        currentData.carNumber = document.querySelector("#car-number").value;
        cars.push(currentData);
        cars.sort(function(a, b){return b.speed - a.speed});
        this.setState({
            cars,
            isAgreeAddCar: false,
        })
    }

    clear = () => {
        this.setState({
            currentData: "",
        })
    }

    render () {
        const {cars, isAgreeAddCar, currentData} = this.state;
        return (
            <div className="container">
                {/* title */}
                <div className="row my-3">
                    <div className="col-12">
                        <h1>📸 Radar Decoy</h1>
                    </div>
                </div>
                {/* table */}
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover table-dark table-striped text-center rounded fs-4">
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Car Model</td>
                                    <td>Color</td>
                                    <td>Region</td>
                                    <td>Car Number</td>
                                    <td>Speed</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cars.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{item.carModel}</td>
                                                <td>{item.color}</td>
                                                <td>{item.region}</td>
                                                <td>{item.carNumber}</td>
                                                <td>🚗 {item.speed} km/h</td>
                                                <td>
                                                    <button type="button" onClick={() => this.delete(index)} className="btn btn-danger fs-4 delete">Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* add player button */}
                <div className="row my-3">
                    <div className="col-12">
                        <button type="button" onClick={this.openAddCar} className="btn btn-success fs-3 add-car">🚗 Add a Car</button>
                    </div>
                </div>
                {/* add  player */}
                <div className="row my-4">
                    <div className="col-12">
                        {
                            isAgreeAddCar ? <AddCar
                            closeAddCar = {this.closeAddCar}
                            currentData = {currentData}
                            changeCurrentData = {this.changeCurrentData}
                            save = {this.save}
                            clear = {this.clear}/> : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;