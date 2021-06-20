import React from 'react';
// import './Cards.css';
// import CardItem from './CardItem';
import Carousel from './Carousel'

function Cards() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
         <h2>Nos Réferences</h2>   
          <Carousel
                show={4}
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/warda.jpg")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/zimota.png")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/taamir.jpg")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/steg.png")}alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/QG.jpg")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/permaflex.png")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/un.png")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/mirage.jpg")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/marhaba.png")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/legends.png")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/isuzu.jpg")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/hutchinson.jpg")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/ecovillage.jpg")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/comet.png")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src={require("./bsn/cnp.jpg")} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                
            </Carousel>
        </div>
  );
}

export default Cards;
