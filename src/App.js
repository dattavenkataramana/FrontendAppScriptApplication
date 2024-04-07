import { LuLayoutDashboard } from "react-icons/lu";
import { LuSignalHigh } from "react-icons/lu";
import { RiSignalWifi3Fill } from "react-icons/ri";
import { IoIosAlarm } from "react-icons/io";
import { FaBluetoothB } from "react-icons/fa";
import { IoIosBatteryCharging } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { TbShoppingBagMinus } from "react-icons/tb";
import { FaHelicopterSymbol } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
import { FaApplePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { BiRectangle } from "react-icons/bi";
import { MdOutlineCopyright } from "react-icons/md";
import './App.css';
import { useEffect, useState } from "react";
 

function App() {
      const [products,setProducts]   = useState([])

    useEffect(() => {
      async function getData() {
          try {
              const response = await fetch('https://appcriptbackend-2.onrender.com/productList');
              if (!response.ok) {
                  throw new Error('Failed to fetch data');
              }
              const result = await response.json();
              const { ProductList } = result;
              setProducts(ProductList); 
              console.log(ProductList);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      }
  
      getData();
  
  }, []);
    

  return (
    <> 
    <div className="header-container">
          <nav className="mobile-view-container">
               <div className="mobile"> 
                  <LuSignalHigh style={{ paddingLeft:"10px"}} className="iconHeight" />
                  <p style={{fontSize:'7px'}}>Figma</p>
                  <RiSignalWifi3Fill className="iconHeight"  />
               </div>
               <div className="time">
                  <p style={{fontSize:'12px'}}>9:41 AM</p>
               </div>
               <div className="charge">
                   <IoIosAlarm className="iconHeight"   />
                    <FaBluetoothB className="iconHeight" />
                    <p style={{fontSize:'7px',paddingRight:"3px"}}>100%</p>
                    <IoIosBatteryCharging style={{ paddingRight:"10px"}}/>
               </div>
          </nav>
          <nav class="nav-container1">
            <div className="icon-container icon-cotainer-first">
              <LuLayoutDashboard style={{color:'red', height:"10px"}}/>
              <p style={{color:'red', fontSize:"10px"}}>Lorem ipsum dolor</p>
            </div>
            <div className="icon-container">
              <LuLayoutDashboard style={{color:'red',height:"10px"}}/>
              <p style={{color:'red',fontSize:"10px"}}>Lorem ipsum dolor</p>
            </div>
            <div className="icon-container icon-cotainer-last">
              <LuLayoutDashboard style={{color:'red',height:"10px"}}/>
              <p style={{color:'red',fontSize:"10px"}}>Lorem ipsum dolor</p>
            </div>
          </nav>
          <nav className='nav-container2'>
            <div className="sub-diviser-of-logo-and-skills">
                <div className="dropdown">
                    <GiHamburgerMenu className="hiden-hamburger-menu" style={{height:"30px",width:'20px',paddingRight:"10px",color:'#292D32'}}/>
                    <FaHelicopterSymbol  style={{height:"30px",width:'20px',paddingRight:"10px",color:'#292D32'}}/>
                </div>
                <div className="logo">
                    <div> 
                      <h1 style={{fontSize:"15px"}}>LOGO</h1>
                    </div>
                </div>
                <div className="searchicons">
                    <FiSearch style={{height:"30px",width:'20px',paddingRight:"10px"}}/>
                    <IoHeartOutline  style={{height:"30px",width:'20px',paddingRight:"10px"}} />
                    <TbShoppingBagMinus  style={{height:"30px",width:'20px',paddingRight:"10px"}}/>
                    <MdOutlinePerson className="eng"  style={{height:"30px",width:'20px',paddingRight:"10px"}}/>
                    <p className="eng">ENG</p>
                    <RiArrowDownSLine className="eng" style={{height:"30px",width:'20px'}}/>
                </div>
            </div>
            <div className="second-shop-Skills-container">
                    <h2 className="h2-of-shop" style={{fontSize:'10px'}}>SHOP</h2>
                    <h2  className="h2-of-shop2" style={{fontSize:'10px'}}>SKILLS</h2>
                    <h2  className="h2-of-shop3" style={{fontSize:'10px'}}>STORIES</h2>
                    <h2  className="h2-of-shop4" style={{fontSize:'10px'}}>ABOUT</h2>
                    <h2  className="h2-of-shop5" style={{fontSize:'10px'}}>CONTACT US</h2>
            </div>
          </nav>
    </div>
    <div className="home-contaoner">
           <div className="h2-home-color">
              <h2 className="home-and-para">HOME</h2> 
           </div>
           <hr className="hr-tag"/>
           <div >
            <h2 className="home-and-para2">SHOP</h2>
           </div>
    </div>
    <div  className="dicover-products">
           <h2 className="dicover-heding" >DISCOVER OUR PRODUCTS</h2>
           <p className="para-of-para para-of-paragragh">
            Lorem ipsum dolor sit amet consectetur.Amet est<br/>
            Posuere rthoncus scelerisque.Dolor integer<br/>
            scelerisque nibh amet mi ut elementum dolor.
           </p>
    </div>
     <div className="d3425items">
          <div className="d3425-ITEMS-icons-container">
            <h2 className="times-con" style={{fontSize:'15px'}}>3425 ITEMS</h2>
            <div className="keyarrow-container">
               <MdKeyboardArrowLeft  className="times-con  anothertimes-on"/>
              <p className="times-con   anothertimes-on" style={{fontSize:'15px'}}>HIDE FILTERS</p>
              <MdKeyboardArrowRight className="times-con fiter"/>
              <p className="fiter times-con" style={{fontSize:'15px'}}>SHOW FILTERS</p>
            </div>
             <h2 className="fiter anothertimes-on" style={{fontSize:'15px'}}>FILTER</h2>
          </div>
          <hr className="hr-tag-of-devided"/>
          <div className="recommended-icon-design"> 
              <h2 style={{fontSize:'15px'}}>RECOMMENDED</h2> 
              <MdKeyboardArrowDown className="times-con  "/>
          </div>
     </div>
     <div className="main-container-of-customer-deatils-and-producs">
           <div  className="container-of-custyomers-list">
                <div className="customer">
                     <input type='checkbox' style={{height:"20px",width:'20px'}}/>
                     <h2>CUSTOMER</h2>
                </div>
                <div className="ideal">
                     <div  className="arrow-down">
                           <h3 style={{fontSize:'15px'}}>IDEAL FOR</h3>
                           <MdKeyboardArrowDown style={{position:'relative',left:"140px"}} className="arrowDown" /> 
                     </div>
                     <div className="all">
                        <p>ALL</p>
                     </div>
                     <div className="unselected-all">
                        <h2 style={{color:"#BFC8CD",textDecoration: "underline"}}>Unselect all</h2>
                         <div  className="men-women-baby-kids">
                               <input type="checkbox" />
                               <p>Men</p>
                         </div>
                         <div  className="men-women-baby-kids">
                               <input type="checkbox" />
                               <p>Women</p>
                         </div>
                         <div  className="men-women-baby-kids">
                               <input type="checkbox" />
                               <p>Baby & Kids</p>
                         </div>
                     </div>
                </div>
                <div className="ideal">
                     <div  className="arrow-down">
                           <h3 style={{fontSize:'15px'}}>OCCASION</h3>
                           <MdKeyboardArrowDown className="arrowDown"  style={{position:'relative',left:"140px"}}/> 
                     </div>
                     <div className="all">
                        <p>ALL</p>
                     </div>
                </div>
                <div className="ideal">
                     <div  className="arrow-down">
                           <h3 style={{fontSize:'15px'}}>WORK</h3>
                           <MdKeyboardArrowDown className="arrowDown" style={{position:'relative',left:"173px"}}/> 
                     </div>
                     <div className="all">
                        <p>ALL</p>
                     </div>
                </div>
                <div className="ideal">
                     <div  className="arrow-down">
                           <h3 style={{fontSize:'15px'}}>FABRIC</h3>
                           <MdKeyboardArrowDown className="arrowDown" style={{position:'relative',left:"166px"}}/> 
                     </div>
                     <div className="all">
                        <p>ALL</p>
                     </div>
                </div>
                <div className="ideal">
                     <div  className="arrow-down">
                           <h3 style={{fontSize:'15px'}}>SEGMENT</h3>
                           <MdKeyboardArrowDown className="arrowDown" style={{position:'relative',left:"148px"}}/> 
                     </div>
                     <div className="all">
                        <p>ALL</p>
                     </div>
                </div>
                <div className="ideal">
                     <div  className="arrow-down">
                           <h3 style={{fontSize:'15px'}}>SUITABLE FOR</h3>
                           <MdKeyboardArrowDown className="arrowDown"  style={{position:'relative',left:"120px"}}/> 
                     </div>
                     <div className="all">
                        <p>ALL</p>
                     </div>
                </div>
                <div className="ideal">
                     <div  className="arrow-down">
                           <h3 style={{fontSize:'15px'}}>RAW METIRIAL</h3>
                           <MdKeyboardArrowDown className="arrowDown" style={{position:'relative',left:"120px"}} /> 
                     </div>
                     <div className="all">
                        <p>ALL</p>
                     </div>
                </div>
                <div className="ideal">
                     <div  className="arrow-down">
                           <h3 style={{fontSize:'15px'}}>PATTREN</h3>
                           <MdKeyboardArrowDown className="arrowDown" style={{position:'relative',left:"160px"}}/> 
                     </div>
                     <div className="all">
                        <p>ALL</p>
                     </div>
                </div>
           </div>
           <div className="container-of-products-list">
                    <ul  className="ui-container">
                             {products.map(product => (
                                  <li  className="list-li" key={product.id}>
                                      <img className="image-size" src={product.image} alt={product.productHeding}/>
                                      <p>{product.productHeding}</p>
                                      <p>Price $20.00</p>
                                      <FaRegHeart className={`list-li ${product.id === 3 ? 'special-product' : ''}`}/>
                                 </li>
                                ))}
                    </ul>
           </div>
     </div>
     <footer className="footer-container"> 
          <div className="First-to-Know-container">
                <div   className="input-container">
                      <h2>BE THE FIRST TO KNOW</h2>
                      <p>Sign Up for updates from metta muse</p>
                      <div className="button-input-container">
                              <input type="text" placeholder="Enter your e-mail...."  style={{border:'none',marginRight:'10px'}} />
                              <button type="button" className="button-of-subcribe">SUBSCRIBE</button>
                      </div>
                </div>
                <hr className="container-of-hr" style={{width:"100%"}}/>
                <div className="hiden-contaner-of-usd-matter">
                      <h2>CALL US</h2>
                      <div className="call-us-container">
                        <p>+44 221 133 5360</p>
                        <BiRectangle/>
                        <p>Customercare@mettamuse.com</p>
                      </div>
                </div>
                <hr className="container-of-hr" style={{width:"100%"}}/>
                <div  className="hidden-currency-con">
                      <h2>CURRENCY</h2>
                      <div  className="use-currency-icon-container">
                              <LiaFlagUsaSolid />
                              <BiRectangle/>
                              <h2>USD</h2>
                      </div>
                </div>
                 <div className="contact-us-container">
                      <h2>CONTACT US</h2>
                      <p>+44 221 133 5360</p>
                      <p>Customercare@mettamuse.com</p>
                      <h2>CURRENCY</h2>
                      <div  className="use-currency-icon-container">
                              <LiaFlagUsaSolid />
                              <BiRectangle/>
                              <h2>USD</h2>
                      </div>
                      <p>Transactions will be compleated in Eurros and a currency reference is available on hover</p>
                 </div>
          </div>
          <hr  style={{width:"100%"}}/>
          <div className="mettamuse-container">
                <div className="mettamuse">
                    <h2 style={{fontSize:'15px' ,paddingRight:'400px'}}>mettamuse</h2>
                    <MdKeyboardArrowDown />
                </div>
                <hr className="container-of-hr" style={{width:"100%"}}/>
                 <div className="about-container">
                    <h2>mettamuse</h2>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Astisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                 </div>
                 <div className="mettamuse">
                    <h2 style={{fontSize:'15px' ,paddingRight:'400px'}}>Quick Links</h2>
                    <MdKeyboardArrowDown />
                </div>
                <hr className="container-of-hr" style={{width:"100%"}}/>
                 <div className="order-container">
                        <h2>Quick Links</h2>
                        <p>Order & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy & Policy</p>
                        <p>Terms & Conditions</p>
                 </div>
                 <div className="mettamuse">
                    <h2 style={{fontSize:'15px' ,paddingRight:'400px'}}>FOLLOW US</h2>
                    <MdKeyboardArrowDown />
                </div>
                <hr className="container-of-hr" style={{width:"100%"}}/>
                <div className="payments-icons-containers">
                <p>metta muse ACCEPTS</p>
                                 <button style={{textAlign:'center',color:'lightblue',margin:"10px",border:'none'}} type="button"><FaGooglePay/></button>
                                 <button style={{textAlign:'center',color:'red',margin:"10px",border:'none'}} type="button"><RiMastercardFill /></button>
                                 <button style={{textAlign:'center',color:'darkblue',margin:"10px",border:'none'}} type="button"><FaPaypal /></button>
                                 <button style={{textAlign:'center',color:'green',backgroundColor:'#006FCF',margin:"10px",border:'none'}} type="button"><GrAmex /></button>
                                 <button style={{textAlign:'center',margin:"10px",border:'none'}} type="button"><FaApplePay /></button>
                                 <button style={{textAlign:'center',color:'#ffffff',backgroundColor:'#5A31F4',margin:"10px",border:'none'}} type="button"><FaAmazonPay /></button>
                         </div>
                 <div className="Fallow-us-section-con">
                        <h2>FOLLOW US</h2>
                         <div className="follow-icon-container">
                               <div className="insta-icon">
                                    <RiInstagramFill />
                               </div>
                               <div className="insta-icon">
                                    <IoLogoLinkedin />
                               </div>
                         </div>
                         <p>metta muse ACCEPTS</p>
                         <div className="payments-icons-container">
                                 <button style={{textAlign:'center',color:'lightblue',margin:"10px",border:'none'}} type="button"><FaGooglePay/></button>
                                 <button style={{textAlign:'center',color:'red',margin:"10px",border:'none'}} type="button"><RiMastercardFill /></button>
                                 <button style={{textAlign:'center',color:'darkblue',margin:"10px",border:'none'}} type="button"><FaPaypal /></button>
                                 <button style={{textAlign:'center',color:'green',backgroundColor:'#006FCF',margin:"10px",border:'none'}} type="button"><GrAmex /></button>
                                 <button style={{textAlign:'center',margin:"10px",border:'none'}} type="button"><FaApplePay /></button>
                                 <button style={{textAlign:'center',color:'#ffffff',backgroundColor:'#5A31F4',margin:"10px",border:'none'}} type="button"><FaAmazonPay /></button>
                         </div>
                 </div>
          </div>
          <div className="last-container">
            <p>Copyright <MdOutlineCopyright/> 2023 mwttamuse.All rights reserved </p>
          </div>
     </footer> 
      
    </>
  );
}

export default App;
