import React , {Component} from 'react';
import axios from 'axios';

class Input extends Component {
    state={
        nama :'',
        no_hp :'',
        alamat : ''
    }

    inputdata = (event, nama, no_hp, alamat) => {
        event.preventDefault();
        axios.post('http://192.168.1.12/crud-react-api/input.php',{
            nama:nama,
            no_hp:no_hp,
            alamat:alamat
        }).then(function(res){
            var data = res.data
            console.log(data);
            if(data.status === 200){
                alert(data.msg);
                window.location.href='/tampil'
            }else{
                alert(data.msg);
            }
        }).catch(function(err){
            console.log(err);
        })
    }

    submit = (event) => {
        this.inputdata(event, this.nama.value, this.no_hp.value, this.alamat.value);
    }
    render(){
        return(
            <div className="container">
                <h1>Tambah Data</h1>
               <form onSubmit={this.submit}>
                   <input type="text" className="form-control" ref={(val) => this.nama = val} name="nama" placeholder="nama" /><br/>
                   <input type="number" className="form-control" ref={(val) => this.no_hp = val} name="no_hp" placeholder="No Hp" /><br/>
                   <input type="text" className="form-control" ref={(val) => this.alamat = val} name="alamat" placeholder="alamat" /><br/>
                   <input type="submit" value="simpan" className="btn btn-primary" />
               </form>
            </div>
        )
    }
}

export default Input;