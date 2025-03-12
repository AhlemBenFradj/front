import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import { Col, Row } from 'react-bootstrap';
import { Imagesdata } from './commonimages';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

//Images
import photos1 from '../assets/img/photos/1.jpg';
import photos2 from '../assets/img/photos/2.jpg';
import photos3 from '../assets/img/photos/3.jpg';
import photos4 from '../assets/img/photos/4.jpg';
import photos5 from '../assets/img/photos/5.jpg';
import photos6 from '../assets/img/photos/6.jpg';
import photos7 from '../assets/img/photos/7.jpg';
import photos8 from '../assets/img/photos/8.jpg';
import photos9 from '../assets/img/photos/9.jpg';
import photos10 from '../assets/img/photos/10.jpg';
import photos11 from '../assets/img/photos/11.jpg';
import photos12 from '../assets/img/photos/12.jpg';
import photos22 from '../assets/img/photos/22.jpg';
import photos20 from '../assets/img/photos/20.jpg';
import media9 from '../assets/img/media/9.jpg';
import media10 from '../assets/img/media/10.jpg';
import media5 from '../assets/img/media/5.jpg';
import media6 from '../assets/img/media/6.jpg';
import media7 from '../assets/img/media/7.jpg';
import media8 from '../assets/img/media/8.jpg';



//*** Galery Data ***//
export const LightboxGallery1 = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row className="masonry">
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos1')} alt='photos1' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos2')} alt='photos2' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos3')} alt='photos3' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos4')} alt='photos4' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos5')} alt='photos5' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos6')} alt='photos6' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos7')} alt='photos7' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos8')} alt='photos8' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="brick mb-3 border-bottom-0 col-12">
          <img src={Imagesdata('photos9')} alt='photos9' onClick={() => setOpen(true)} />
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
        slides={[{ src: photos1 }, { src: photos2 }, { src: photos3 }, { src: photos4 }, { src: photos5 }, { src: photos6 }, { src: photos7 }, { src: photos8 }, { src: photos9 }]} />
    </div>
  )
};

//*** FileDetails ***//

export const LightboxGalleryChat = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row className="masonry">
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-3 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos22')} alt='files1' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-3 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos20')} alt='files2' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-3 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('media9')} alt='files3' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-3  col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('media10')} alt='files4' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-3 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('media5')} alt='files5' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-3 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('media6')} alt='files6' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-3 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('media7')} alt='files6' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-3 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('media8')} alt='files6' onClick={() => setOpen(true)} />
        </Col>

      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
        slides={[{ src: photos22 }, { src: photos20 }, { src: media9 }, { src: media10 }, { src: media5 }, { src: media6 }, { src: media7 }, { src: media8 }]} />
    </div>
  )
};

//** Profile Data **//

export const LightboxGalleryChat1 = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row className="masonry">
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos1')} alt='files1' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos2')} alt='files2' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos3')} alt='files3' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0  col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos4')} alt='files4' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos5')} alt='files5' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos6')} alt='files6' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos7')} alt='files6' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos8')} alt='files6' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos9')} alt='files6' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos10')} alt='files6' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos11')} alt='files6' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos12')} alt='files6' onClick={() => setOpen(true)} />
          <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
          <div className="ga-border"></div>
          <p className="text-muted text-center"><small>Photography</small></p>
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
        slides={[{ src: photos1 }, { src: photos2 }, { src: photos3 }, { src: photos4 }, { src: photos5 }, { src: photos6 }, { src: photos7 }, { src: photos8 }, { src: photos9 }, { src: photos10 }, { src: photos11 }, { src: photos12 }]} />
    </div>
  )
};

//** Blog Details Data **//

export const LightboxGalleryChat2 = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row className="masonry">
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos1')} alt='files1' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos2')} alt='files3' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos3')} alt='files3' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0  col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos4')} alt='files4' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos5')} alt='files5' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos6')} alt='files6' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos7')} alt='files6' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos8')} alt='files6' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} xl={4} className=" border-bottom-0 mt-2 col-12">
          <img className='img-responsive rounded-5' src={Imagesdata('photos9')} alt='files6' onClick={() => setOpen(true)} />
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
        slides={[{ src: photos1 }, { src: photos2 }, { src: photos3 }, { src: photos4 }, { src: photos5 }, { src: photos6 }, { src: photos7 }, { src: photos8 }, { src: photos9 }, { src: photos10 }, { src: photos11 }, { src: photos12 }]} />
    </div>
  )
};