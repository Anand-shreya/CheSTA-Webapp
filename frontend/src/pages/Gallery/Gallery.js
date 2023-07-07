import Footer from '../../components/footer/footer';
import Curtain from '../../components/curtain/curtain';
import ImageCol from './comp/ImageCol';
import ImageColM from './comp/imageColM';
import './Gallery.css';

const Gallery = () => {
    return (<div>
        <div className='GalleryBody'>
        <Curtain />
        <div className='midSection'>
            <div className='headerGallery'>
                <div className='headerText'>
                    <div className='headerTextB'>‘the alchemical palette’</div>
                    <div className='headerTextS'> ~ CheSTA Gallery</div>
                </div>
                <div className='arrowImage'></div>
            </div>
            <div className='imageContainer'>
                <ImageCol />
                <ImageColM />
                <ImageCol />
            </div>
            <div className='footerText'>
                <div className='footerTextB'>No, this isn’t it.</div>
                <div className='footerTextS'> Memories know no bounds.</div>
            </div>
        </div>
        </div>
        <Footer />
    </div>)
}

export default Gallery;