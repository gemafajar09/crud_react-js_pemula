import axios from 'axios';
import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class Tampil extends Component {
    constructor(props) {
        super(props)
        this.state = {
        // inisialisasi variable penampung nilai dari json yang diberi nama alldata
            alldata: []
        }
    }

    // cara mendapatkan data json menggunaka axios
    componentDidMount() {
        axios.get('http://192.168.1.12/crud-react-api/tampil.php').then(res=>{
            this.setState({
                alldata:res.data
            })
        }).catch(function(err){
            console.log(err);
        })
    }

    remove = (event, id) => {
        event.preventDefault();
        event.persist();
        axios.get('http://192.168.1.12/crud-react-api/hapus.php?id='+id).then((res)=>{
            alert('Terhapussss')
            window.location.reload(); 
        })
    }
    
    render() {
        return(
            <div>
                <h3>Semua Data</h3>
                <hr/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>No Hp</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.alldata.map(alldata =>
                            <tr key={alldata.id}>
                                <td>{alldata.nama}</td>
                                <td>{alldata.no_hp}</td>
                                <td>{alldata.alamat}</td>
                                <td>
                                    <Link to={"/edit/"+alldata.id} className="btn btn-success">Edit</Link>&nbsp;
                                    <button className="btn btn-danger" onClick={(event) => this.remove(event,alldata.id)}>Hapus</button>
                                </td>
                            </tr> 
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tampil;