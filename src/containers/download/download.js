/* import component */
import React, {Component} from "react";
import { connect } from "react-redux";

class Download extends Component{

    downloadFile(file, dataFile){
        const btnDownloadCSV = document.querySelector(".btn_download_data");
        const dataStore = dataFile.map(data => {
            return JSON.stringify(
                `id : ${data.id}, Nom : ${data.name}, Arrondissement : ${data.arrondissement}, Image : ${data.img}`
            );
        });

        if(this.props.selectMicromania.length > 0){
            btnDownloadCSV.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(dataStore));
            btnDownloadCSV.setAttribute('download', file);
        } else{
            alert("Veuillez selectionner un ou plusieurs stores :-)");
        }
    }

    render(){
        return(
            <a className={this.props.selectMicromania.length > 0 ? "btn_download_data btn_download_data_active" : "btn_download_data"}  onClick={() => {this.downloadFile("micromania.csv", this.props.selectMicromania)}}>
                Téléchargez votre liste {this.props.selectMicromania.length > 0 ? <b>({this.props.selectMicromania.length})</b> : null}
            </a>
        )
    }
}

function mapStateToProps(state){
    return{
        store: state.store,
        selectMicromania: state.selectMicromania
    }
}

/* exportation of the class */
export default connect(mapStateToProps)(Download);
