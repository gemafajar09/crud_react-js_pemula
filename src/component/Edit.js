import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
    state = {
        nama: '',
        no_hp: '',
        alamat: ''
    }

    componentDidMount() {
        // variable id dibawah berfungsi ungtuk mengambil nilai dari parameter router
        const id = this.props.match.params.id
        axios.get("http://192.168.1.12/crud-react-api/edit.php?id="+id).then((res)=>{
            this.setState({
                nama : res.data.nama,
                no_hp : res.data.no_hp,
                alamat : res.data.alamat
            })
            console.log(this.state)
        })
    }

    editdata = (event, id, nama, no_hp, alamat) => {
        event.preventDefault();
        event.persist();
        axios.post('http://192.168.1.12/crud-react-api/saveedit.php',{
            id:id,
            nama:nama,
            no_hp:no_hp,
            alamat:alamat
        }).then(function(res){
            var data = res.data
            console.log(data);
            if(data.status === 200){
                alert(data.msg);
                event.target.reset();
            }else{
                alert(data.msg);
            }
        }).catch(function(err){
            console.log(err);
        })
    }

    // update adalah action submit yang akan mengirmkan data ke function editdata
    update = (event) => {
        this.editdata(event,this.id.value, this.nama.value, this.no_hp.value, this.alamat.value);
    }

    render() {
        return(
            <div className="container">
                <h1>Edit Data</h1>
                <form onSubmit={this.update}>
                    <input type="hidden" className="form-control" name="nama" value={this.state.id} /><br/>
                    <input type="text" className="form-control" name="nama" value={this.state.nama} /><br/>
                    <input type="number" className="form-control" name="no_hp" value={this.state.no_hp} /><br/>
                    <input type="text" className="form-control" name="alamat" value={this.state.alamat} /><br/>
                    <input type="submit" value="Edit" className="btn btn-info" />
                </form>
            </div>
        )
    }
}

export default Edit;