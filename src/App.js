import './App.css';
import './assests/wave.png'
import Logo from "./assests/logo.png"
import getanintervention from "./assests/getanintervention.png"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import coupleImage from "./assests/couple-img.png"
import friendsImage from "./assests/friends-img.png"
import oldAgeHomeImage from "./assests/old-age home.png"
import Slider from "react-slick";
import Card from './components/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo (Congo-Brazzaville)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czechia (Czech Republic)',
  'Democratic Republic of the Congo (Congo-Kinshasa)',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor-Leste)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Holy See',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Mozambique',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine State',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M11.76 8.24L27.52 24L11.76 39.76L16 44L36 24L16 4L11.76 8.24Z" fill="#EAEAEA" />
    </svg>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M36.24 39.76L20.48 24L36.24 8.24L32 4L12 24L32 44L36.24 39.76Z" fill="#EAEAEA" />
    </svg>
  );
}

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    company: '',
    country: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    // Perform your validation here
    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }
    // Add more validation rules for other fields

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    }
  };
  const settings = {
    dots: true
  };

  const playVideo = () => {
    setIsPlaying(true);
  };

  const videoEnded = () => {
    setIsPlaying(false);
  };
  return (

        <div className="App">
      <header className="background">
        <nav>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul>
            <li><a href="#" id="home">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
          <div className="call-now">CALL NOW FOR A CONSULT <span>123.456.7890</span></div>
        </nav>
      </header>
      <section className="hero">
        <div className="content">
          {/* <h1><span>GET AN</span>INTERVENTION</h1> */}
          <div>
            <img src={getanintervention} alt='GET AN INTERVENTION' />
          </div>
          <p>Showing greater respect to older adults can be done in several ways :
            acknowledging and putting to use the talents and skills of older adults; creating
            intergenerational initiatives; and allowing older adults to stay active and independent
            for as long as possible.</p>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <div className="form-row">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '22ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField FormHelperTextProps={{
                classes: {
                  root: 'helper-text',
                },
              }}
                InputProps={{
                  classes: {
                    notchedOutline: 'input-border',
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: 'inputLabel',
                    focused: 'inputLabel',
                  },
                }} id="outlined-basic" className="textfield" value={formData.firstName} onChange={handleChange} label="First Name" variant="outlined" />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '22ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField FormHelperTextProps={{
                classes: {
                  root: 'helper-text',
                },
              }}
                InputProps={{
                  classes: {
                    notchedOutline: 'input-border',
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: 'inputLabel',
                    focused: 'inputLabel',
                  },
                }} id="outlined-basic" label="Last Name"   value={formData.lastName}   onChange={handleChange} variant="outlined" />
            </Box>

          </div>
          <div className="form-row">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '22ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField FormHelperTextProps={{
                classes: {
                  root: 'helper-text',
                },
              }}
                InputProps={{
                  classes: {
                    notchedOutline: 'input-border',
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: 'inputLabel',
                    focused: 'inputLabel',
                  },
                }} id="outlined-basic" label="Business Email"  value={formData.businessEmail} onChange={handleChange} variant="outlined" />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '22ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField FormHelperTextProps={{
                classes: {
                  root: 'helper-text',
                },
              }}
                InputProps={{
                  classes: {
                    notchedOutline: 'input-border',
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: 'inputLabel',
                    focused: 'inputLabel',
                  },
                }} id="outlined-basic" label="Company"  value={formData.company} onChange={handleChange} variant="outlined" />
            </Box>
          </div>
          <div className="form-row dropdown">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  sx={{
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff !important',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff !important',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff !important',
                    },
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.country}
                  label="Country"
                  onChange={handleChange}
                >
                {
                  COUNTRIES.map((country) => (
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))
                }
                </Select>
              </FormControl>
            </Box>

          </div>
          <div className="form-row" onClick={handleSubmit}>

            <div id='form-row-button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_1_118)">
                  <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_118">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>Submit</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <svg className="wave" width="1440" height="90" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 55.1705C310 -118.33 926 184.67 1440 55.1705V89.1704H0V55.1705Z" fill="#F5F5F5" />
        </svg>
        <svg className="wave2" width="1440" height="111" viewBox="0 0 1440 111" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 68.6766C310 -147.298 926 229.879 1440 68.6766V111H0V68.6766Z" fill="#F5F5F5" fillOpacity="0.3" />
        </svg>


      </div>

      {/* main content img */}
      <div className='main-content-img-container'>
        <div className='image-panel-1'>
          <img src={coupleImage} alt='coupleImage' />
        </div>
        <div className='image-panel-1'>
          <img src={friendsImage} alt='friendsImage' />
        </div>
        <div className='image-panel-1'>
          <img src={oldAgeHomeImage} alt='OldAgeHomeImage' />
        </div>
      </div>

      {/* main content description */}
      <div className='main-content-description-container'>
        <h1><span>WE</span> UNDERSTAND</h1>
        <div className='main-content-description'>
          <div><p>Older adults want to play active and meaningful roles in their lives, including as part of a social network, a neighborhood, and a community. Service providers and policymakers must consider that a lack of sense of purpose can become problematic as people age. Engaging them in leisure activities and volunteer work is important.</p></div>
          <div><p>Older adults want to stay active and contribute to society in a reciprocal manner (meaning that they want to exchange their services and skills with others for the mutual benefit of the neighborhood or community). Qualitative and quantitative studies published from 2005 to 2016 examining the social needs of older adults were eligible for inclusion.</p></div>
          <div><p>To stimulate social contacts, neighborhood initiatives can be developed. Social meeting places, such as pubs and churches can help to foster the development of close and peripheral relationships.</p><div><p>92% Success Rate</p><svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.3431 0.92888L16.7071 6.29284C17.0976 6.68336 17.0976 7.31653 16.7071 7.70705L11.3431 13.071C10.9526 13.4615 10.3195 13.4615 9.92893 13.071C9.53841 12.6805 9.53841 12.0473 9.92893 11.6568L13.5858 7.99995H0V5.99995H13.5858L9.92893 2.34309C9.53841 1.95257 9.53841 1.3194 9.92893 0.92888C10.3195 0.538355 10.9526 0.538355 11.3431 0.92888Z" fill="#5BC8AF" />
          </svg></div></div>
        </div>
      </div>

      {/* slider-content */}
      <div className="slider-container">
        <Slider {...settings}>

          <Card />
          <Card />
          <Card />
        </Slider>
      </div>

      {/* secondary content  */}
      <div className='secondary-content-container'>
        <h1><span>WE</span> CAN ORGANIZE EVERYTHING</h1>
        <div className='secondary-content'>
          <div>
            Interventions should focus on older adult’s desire for connectedness, participation and independence.
          </div>
          <div>
            Loneliness and social isolation are growing public health concerns in our aging society. Whilst these experiences occur across the life span, 50% of individuals aged over 60 are at risk of social isolation and one-third will experience some degree of loneliness later in life. It is vital to reduce loneliness and social isolation among older adults.
          </div>
          <div>
            The methodology framework proposed by Arskey and O’Malley and further developed by Levac, et al. was used to guide the scoping review process. A total of 33 reviews met the inclusion criteria, evaluating a range of interventions targeted at older people residing in the community or institutionalised settings.
          </div>
        </div>
        <div className='secondary-button-container'>
          <div>Needs Assesment</div>
          <div>Treatment Planning & Placement</div>
          <div>Transportation & Logistics</div>
          <Tooltip title="We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically." arrow>
            <Button>Insurance Advocacy</Button>
          </Tooltip>
          <div>Employment Advocacy</div>
          <div>Aftercare Planning</div>
        </div>
      </div>

      {/* video content */}
      <div className='video-content-container'>
        <div className='video-content'>
          <h1><span>WATCH</span>THE VIDEO</h1>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z" fill="#5BC8AF" />
            </svg>
            <div>
              <h3>Needs Assessment</h3>
              <p>The Advocacy Evaluation Toolkit contains the instruments used to collect data for evaluating the Consumer Voices for Coverage program.</p>
            </div>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z" fill="#5BC8AF" />
            </svg>
            <div>
              <h3>Insurance Advocacy</h3>
              <p>We are committed to advocating for appropriate coverage and payment policies.</p>
            </div>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z" fill="#5BC8AF" />
            </svg>
            <div>
              <h3>Treatment Planning & Placement</h3>
              <p>Patients can better understand medical procedures, discharge instructions, etc.</p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="779" height="648" viewBox="0 0 779 648" fill="none">
          <path d="M0 0H742.597C655.445 274 857.597 323.5 742.597 648H0V0Z" fill="white" fill-opacity="0.2" />
        </svg>
        <div className='video-container'>
          {isPlaying ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              onEnded={() => setIsPlaying(true)} // Loop the video
              src="https://video-previews.elements.envatousercontent.com/files/e4ccc12e-26e4-483c-88da-82b5274ff9b6/video_preview_h264.mp4"
            />
          ) : (
            <>
              <video
                muted
                src="https://video-previews.elements.envatousercontent.com/files/e4ccc12e-26e4-483c-88da-82b5274ff9b6/video_preview_h264.mp4"
              />
              <div className="play-button" onClick={playVideo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="208" height="208" viewBox="0 0 208 208" fill="none">
                  <circle cx="104" cy="104" r="104" fill="#5BC8AF" fill-opacity="0.1" />
                  <circle cx="104" cy="104" r="103" stroke="white" stroke-opacity="0.3" stroke-width="2" />
                  <circle cx="104" cy="104" r="59.2692" fill="#5BC8AF" fill-opacity="0.8" stroke="white" stroke-width="2" />
                  <path d="M120.123 101.149C122.209 102.353 122.209 105.363 120.123 106.567L95.7847 120.619C93.6995 121.823 91.093 120.318 91.093 117.91L91.093 89.8061C91.093 87.3983 93.6995 85.8935 95.7847 87.0974L120.123 101.149Z" fill="white" />
                </svg>
              </div>
            </>
          )}
          <img src={Logo} alt="logo" />
        </div>
      </div>

      {/* footer */}
      <div className='footer'>
        <div>
          <p><span>@2021 Get an Intervention Inc. All rights reserved.</span></p>
        </div>
        <div>
          <p><span>Privacy Policy </span>| <span>Terms of use</span> | <span>Site Map</span></p>
        </div>
      </div>
    </div>


  );
}

export default App;
