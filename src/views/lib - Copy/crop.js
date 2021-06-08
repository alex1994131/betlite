import React from 'react'
import Cropper from 'react-easy-crop'
import Slider from "rc-slider"
import {CustomInput, Modal,ModalHeader,ModalBody,ModalFooter,Button,Col,Row} from "reactstrap"
import "rc-slider/assets/index.css"
import "../../assets/scss/plugins/extensions/slider.scss"
import { getCroppedImg } from './canvasUtils'
import { toast } from 'react-toastify'


class App extends React.Component {
  state = {
    imageSrc:"",
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 5 / 2,
    croppedImage : null,
    rotation : 0,
    blob : null
  }

  onCropChange = crop => {
    this.setState({ crop })
  }

  onCropComplete =async (croppedArea, croppedAreaPixels) => {
    
    if(isNaN(croppedArea.x)){
      croppedArea.x = 0
    }
    if(isNaN(croppedArea.y)){
      croppedArea.y = 0
    }

    if(isNaN(croppedAreaPixels.x)){
      croppedAreaPixels.x = 0
    }
    if(isNaN(croppedAreaPixels.y)){
      croppedAreaPixels.y = 0
    }
    const croppedImage = await getCroppedImg(this.state.imageSrc,croppedAreaPixels,this.state.rotation,"newfile.png");
    this.setState({croppedImage : croppedImage.fileUrl,blob:croppedImage.blob});
  }

  onZoomChange = zoom => {
    this.setState({ zoom })
  }

  onFileChange = async( e )=> {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await this.readFile(file)

      // apply rotation if needed
      // const orientation = await getOrientation(file)
      // const rotation = ORIENTATION_TO_ANGLE[orientation]
      // if (rotation) {
      //   imageDataUrl = await getRotatedImage(imageDataUrl, rotation,"newfile.png");
      //   this.setState({croppedImage : croppedImage.fileUrl,blob:croppedImage.blob});
      // }
      this.setState({imageSrc :imageDataUrl })
    }
  }

  getRadianAngle =(degreeValue)=> {
    return (degreeValue * Math.PI) / 180
  }

   readFile = (file)=> {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
  }

  setRotationchange =(rotation)=>{
    this.setState({ rotation })
  }

  toggleModal = ()=>{
    this.props.modalflg(!this.props.modal)
  }

  cropfileupload= ()=>{
    if(!this.state.croppedImage){
      toast.error("please select img")
    }else{
      this.props.modalflg(!this.props.modal)
      this.props.filedupload(this.state.blob)
    }
  }
  
  render() {
    return (
      <Modal isOpen={this.props.modal}  toggle={this.toggleModal} className="modal-dialog-centered modal-lg" fade={true}>
        <ModalHeader className='p-2' toggle={this.toggleModal}>
          Basic Modal
        </ModalHeader>
        <ModalBody>
          <Row className='p-2'>
            <Col lg='10' sm='10' xs='10'>
              <Row>
                <Col md="12">
                  <div className="crop-container" style={{width:'300px',height:"300px"}} >
                    {
                      this.state.imageSrc !== "" ?  
                      <Cropper
                      image={this.state.imageSrc}
                      // style={this.props.style}                
                      crop={this.state.crop}
                      zoom={this.state.zoom}
                      aspect={this.props.aspect}
                      onCropChange={this.onCropChange}
                      onCropComplete={this.onCropComplete}
                      onZoomChange={this.onZoomChange}
                      onRotationChange={this.setRotationchange}
                      rotation={this.state.rotation}
                      /> :""
                    }
                  </div>
                </Col>
                <Col md="12" >
                  <div style={{textAlign:'center'}}>
                    {
                      this.state.croppedImage ? <img src={this.state.croppedImage}  style={this.props.style} alt="Cropped" />: ""
                    }
                    </div>
                </Col>
                <Col md="12">
                  <CustomInput type="file" label="choose" id="fp_imgupload_logoimgssss" accept="image/png" onChange={this.onFileChange} name="fp_imgupload_logoimgssss" />
                </Col>
              </Row>
            </Col>
            <Col lg='2' sm='2' xs='2'>
              <Row>
                <Col md="6" style={{height:'300px'}}>
                  <h4>Z</h4>
                  <Slider vertical min={1} max={3} step={0.1} value={this.state.zoom} onChange={this.onZoomChange} />
                </Col>
                <Col md="6" style={{height:'300px'}}>
                  <h4>R</h4>
                  <Slider vertical min={0} max={360} step={1} value={this.state.rotation} onChange={this.setRotationchange} />
                </Col>
              </Row>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className='p-2'>
          <Button color="primary" onClick={()=>this.cropfileupload()}>Accept</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
export default App 
