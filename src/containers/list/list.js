import React, { Component } from 'react';
import Download from "../download/download";
import { connect } from "react-redux";

class List extends Component{

     storeList(){
         return(
            this.props.store.map(data => {
                    return(
                        <article key={data.id} className="bloc_list" style={this.props.selectMicromania !== null ? data.id === this.props.selectMicromania.id ? {borderBottom: "4px solid #fda85e"} : null : null}>
                             <img src={data.img} alt={"qefqefqe" + data.name} />
                             <div className="bloc_infos_list">
                                  <h2 className="title_bloc_list">{data.name}</h2>
                                  <p className="region_bloc_list">{data.arrondissement}</p>
                             </div>
                        </article>
                    )
            })
        )
     }

     render(){
         return(
            <section className="list_map">
                {this.storeList()}
                <footer>
                    <Download/>
                </footer>
            </section>
        )
     }
}

function mapStateToProps(state){
    return{
        store: state.store,
        selectMicromania: state.selectMicromania
    }
}


/* export class */
export default connect(mapStateToProps)(List);