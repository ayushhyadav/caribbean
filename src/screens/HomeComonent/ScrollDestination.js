import React, { Component } from 'react';

export default class ScrollDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          img: require('../../assets/Rectangle6.png'),
          title: 'Uptown'
        },
        {
          img: require('../../assets/Rectangle7.png'),
          title: 'Downtown'
        },
        {
          img: require('../../assets/Rectangle8.png'),
          title: 'Mountains'
        },
        {
          img: require('../../assets/Rectangle9.png'),
          title: 'Beach'
        },
        {
          img: require('../../assets/Rectangle10.png'),
          title: 'River'
        },
        {
          img: require('../../assets/Ecotourism.jpeg'),
          title: 'Ecotourism'
        },
        
      ],
      currentIndex: 0,
      visibleImages: 5,
    };
  }


  componentDidMount() {
  
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  }

  componentWillUnmount() {
  
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
   
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.setState({ visibleImages: 1 }); 
    } else {
      this.setState({ visibleImages: 5 });
    }
  };

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1 >= 0 ? prevState.currentIndex - 1 : 0,
    }));
  };

  handleNextClick = () => {
    const { list, currentIndex, visibleImages } = this.state;
    const lastIndex = list.length - visibleImages;
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1 <= lastIndex ? prevState.currentIndex + 1 : lastIndex,
    }));
  };

  render() {
    const { list, currentIndex, visibleImages } = this.state;

    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 25 }}>
        <div style={{ width: '85%' }}>
          <h1>Most popular Caribbean destinations</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25, width: '100%' }}>
            <button style={{ width: 60,height:60,background:'white',borderRadius:30 }} onClick={this.handlePrevClick}>

            </button>
            {list.slice(currentIndex, currentIndex + visibleImages).map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 20px',
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '300px',
                  height: '300px',
                  position: 'relative',
                }}
              >
                <label style={{ position: 'absolute', color: 'white', fontSize: 28, fontWeight: '600' }}>{item.title}</label>
              </div>
            ))}
            <button style={{ width: 60,height:60,background:'white',borderRadius:30, }} onClick={this.handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}
