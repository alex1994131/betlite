import React, { useState, useEffect } from "react"
import { Row, Col, Table, Button, Card} from "reactstrap"
import Select from "react-select"
import { Root} from "../../../authServices/rootconfig"
import { connect } from "react-redux";
import { get_documnets, get_users} from "../../../redux/actions/profile"
import { history } from "../../../history"
import { useDropzone } from "react-dropzone"
import { UploadCloud } from "react-feather"
import { toast } from "react-toastify"


const verify_options = [
  { value: 1, label: "BankSlip" },
  { value: 2, label: "IdentityDocument" },
  { value: 3, label: "passport" },
  { value: 4, label: "DriversLicense" },
  { value: 5, label: "IBAN" },
  { value: 6, label: "SocialId" },
  { value: 7, label: "other" }
]

const status = [
  { value: 0, label: "Pending" },
  { value: 1, label: "Reject" },
  { value: 2, label: "Allow" },
]


function BasicDropzone(props) {
  const [files, setFiles] = useState([])
  const [verify_id, setverify_id] = useState(0)
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            prevew: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  const thumbs = files.map(file => (
    <Col key={file.name} lg={6} sm={12} xs={12} style={{padding: '10px'}}>
      <div className="dz-thumb">
        <div className="dz-thumb-inner">
          <img src={file.prevew} className="dz-img" alt={file.name} />
        </div>
      </div>
    </Col>
  ))

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.prevew))
    },
    [files]
  )

  const upload_image = function() {
    if(!files.length||files.length>2){
      toast.error('You cannot upload more than two files at a time.')
    }else if(!verify_id){
      toast.error("please input correct type.");
    }else if(!props.email){
      toast.error('please input correct email.')
    }
    else{
      const xhr = new XMLHttpRequest();
      const formData = new FormData();
      formData.append("verifyId", verify_id-1);
      formData.append("email", props.email);
      for(var i in files){
        formData.append('image'+i, files[i]);
      }
      xhr.open('POST', BASEURL + 'profile/set_document/');
      xhr.send(formData);
      xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        if(response.status === true){
          props.setData(response.data);
          toast.success('Upload Success.')
        }else{
          toast.error('Upload failure.')
        }
      };
      xhr.onerror = (e) => { 
        toast.error('Upload failure.')    
      };
      xhr.ontimeout = (e) => {
        toast.error('Upload failure.')    
      };
    }
  };

  return (
    <section style={{height:'100%'}}>
      <Row style={{padding:'10px'}}>
        <Col md="10" sm="12" style={{height:'40px'}}>
          <Select
            className="React"
            classNamePrefix="select"
            options={verify_options}
            onChange={e => setverify_id(e.value)}
            required
          />
        </Col>
        <Col style={{textAlign:'center', height:'40px', padding:'0px'}} md="2" sm="12" >
          <Button style={{margin:'0px'}}  color="primary" onClick={()=>upload_image()}>
            Upload
          </Button>
        </Col>
      </Row>
      <div style={{height:'100%'}} {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {
          thumbs.length ? (
            <Row className="thumb-container" style={{margin:'0px'}}>{thumbs}</Row>
          ):(
            <div style={{height:'39vh', display:'flex', flex:1, justifyContent:'center', textAlign:'center', alignItems:'center'}}>
              <div>
                <UploadCloud style={{width:'100%',display:'block', textAlign:'center'}} color='white' size={100}/>
                <p style={{display:'block', textAlign:'center'}}>Drag & drop Files here </p>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

const BASEURL = Root.adminurl;

class Document extends React.Component {
  state = {
    verify_id: '',
    files : null,
    user : '',
    email : '',
    document : []
  }

  async componentWillMount(){
    var user = get_users();
    if(user){
      await this.setState({user : user})
      this.props.get_documnets(this.state.user.email);
    }else{
      history.push("/")
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.user !== this.props.user){
      this.setState({email : this.props.user.values.email})
    }else if(prevProps.document !== this.props.document){
      this.setState({document : this.props.document})
    }
  }

  render() {
    return (
      <div style={{padding:"2% 10%"}}>
        <Row>
          <span style={{padding:"2%"}}>
            Dear user, in order to validate your account you need to upload a personal identification document. While uploading, make sure it corresponds to the following criteria: • The file is in JPG, PNG, GIF or PDF format and doesn't exceed 3MB.• The document in its validity period. • The picture should be in real colors, not black and white. • The picture should be taken from the original document, it is not allowed to do any digital photo montage. • The document picture, personal data, signature, seal and other information should be clearly readable. • If necessary the company can ask you to present other documents.
          </span>
        </Row>
        
        <Row>
          <Col lg="12" md="12" style={{minHeight:'40vh', width:'100%', padding:'0.5% 10%'}}>
            <Card >
              <BasicDropzone email={this.state.email} setData={(data)=>this.setState({document:data})}/>
            </Card>
          </Col>
        </Row>
        <Row id='document_table' style={{padding:"0% 2%"}}>
          <h4 style={{padding:"1% 0px"}}>Uploaded Documents</h4>
          <Table bordered responsive style={{margin:'0px'}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.document.length ? 
                this.state.document.map( (item,i) =>{
                  return( 
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.name.replace(/#\|@\|#/gi, "    ")}</td>
                        <td>{verify_options[item.verifyId].label}</td>
                        <td>{(new Date(item.date)).toLocaleString((new Date()).getTimezoneOffset(),{hour12 : false}).replace(",", "")}</td>
                        <td>{status[item.status].label}</td>
                      </tr>
                    )
                }) : null
              }
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}

const get_user = (state) =>{
  return {
    user : state.auth.login,
    document : state.profile.document.values
  }
}

export default connect(get_user,{get_documnets})(Document)
