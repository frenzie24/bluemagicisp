
import BMSpinBanner from "../components/BMSpinBanner"
import AboutUs from "../components/AboutUs";
import Header from "../components/Header.jsx"
import FaqComponent from "../components/FaqComponent.jsx";

const h3classes = `p-2 border-4 border-solid bg-slate-200 hover:border-slate-200 rounded-3xl`;

const Faq = () => {
    return (
        <div className="w-full h-full flex flex-col bg-slate-100 text-slate-700">
            <Header />
            <BMSpinBanner />
            <div className="flex flex-col items-center p-8 w-screen">
                <h1 ><strong>Frequently Asked Questions</strong></h1>
                <h2 ><span >ABOUT THE SERVICE</span></h2>
               <article className="max-w-6xl grid md:grid-cols-2 gap-8 py-8 px-20 [&_p]:indent-4 " >
                    <FaqComponent title={<h3 className={h3classes}><span >ARE THERE ANY HARD DATA LIMITS?</span></h3>}
                        paragraph={[<p><span >&nbsp;BMI Blue LTE 300 lets you stream at the highest speeds available in your area for up to 300GB. Once you reach this limit, you will be shut off until your next due date.</span></p>,
                        <p>BMI Black LTE 450 will allow up to 450GB of data to be used before you are capped. Once you reach this limit, you will be shut off until your next due date.</p>,
                        <p><span >For additional information, please contact one of our representatives to help optimize the experience for you.</span></p>,
                        <p>&nbsp;</p>]} />

                    <FaqComponent title={<h3 className={h3classes}><span >HOW MUCH DATA DO YOU GET IN YOUR DATA PLAN?</span></h3>}
                        paragraph={[<p><span >BMI Blue LTE 300 will cap at 300 GB. Once you reach this limit, you will be shut off until your next due date.</span></p>,
                        <p>BMI Black LTE 450 will cap at 450 GB. Once you reach this limit, you will be shut off until your next due date.</p>,
                        <p><span > For additional information, please contact one of our representatives to help optimize the experience for you.</span></p>,
                        <p>&nbsp;</p>
                        ]} />

                    <FaqComponent title={<h3 className={h3classes}><span >WHAT NETWORKS DO YOU USE?</span></h3>}
                        paragraph={<p><span >Blue Magic internet operates off of GSM networks and their participating towers.</span></p>}
                    />

                    <FaqComponent title={<h3 className={h3classes}><span >HOW DO I GO ABOUT CHECKING TO SEE IF I CAN GET SERVICE IN MY AREA?</span></h3>}
                        paragraph={<p><span >Please use the chat function available on the website, so a representative may help you check the availability in your area. &nbsp;You can also visit the Contact Us tab at the top and send us your information, so a representative can look that up for you.</span></p>}
                    />

                    <FaqComponent title={<h3 className={h3classes}><span >HOW DO I ACTIVATE MY SERVICE ONCE I RECEIVE MY PRODUCTS?</span></h3>}
                        paragraph={<p><span >Please refer to the included activation card that was shipped with your device, for full step by step instructions. We have 3 options to help with account activation.</span></p>}
                        list={[
                            <><span >Customers can call (850) 372-4284 Monday through Friday 9am-6 pm CST or Saturday 10 am-2pm CST. &nbsp;</span></>,
                            <><span >For help through email, you can send an email to bmagicisp@gmail.com. Please include your name, contact phone number, device IMEI (located behind the battery) and sim ICCID (begins with 89 and is 20 digits long). &nbsp;</span></>,
                            <><span >Customers may also utize the chat feature on the website for activation.&nbsp;</span></>]} />


                    <FaqComponent title={<h3 className={h3classes}><span >HOW DO I MAKE A PAYMENT?</span></h3>}
                        paragraph={<p><span >For our Blue Magic customers to set up recurring payments:</span></p>}
                        list={[
                            <>You can call (850) 372-4284 Monday through Friday 9am-6pm CST and Saturday 10am-2pm CST to have a rep assist in setting you up on our AUTO PAY system.</>,
                            <>You may also use the chat feature on website to have help setting up recurring payments.</>
                        ]} />
                </article>
                <h2 ><span >ABOUT THE EQUIPMENT</span></h2>
                 <article className="max-w-6xl grid md:grid-cols-2 gap-8 py-8 px-20" >
                    <FaqComponent title={<h3 className={h3classes}>TELL ME MORE ABOUT THE BRING YOUR OWN DEVICE PROGRAM?</h3>}
                        paragraph={[<p >Customers now have the ability to bring specific devices to our service. There are many compatible unlocked AT&amp;T GSM devices that may be used with this program. However, we can only guarantee devices that are found under the "SHOP" tab of our website to work with this device program. If your device is found to be compatible, it will be placed on BMI Blue LTE 300. &nbsp;Please check with one of our representatives via the chat function on website to see if your unlocked AT&amp;T GSM device may be compatible with our service.&nbsp;</p>,
                        <p>Make sure you have the "Bring Your Own Device" Kit and Data Plan in your cart at checkout.</p>,
                        <h6>*NO REFUND(S) AVAILABLE FOR THE BRING YOUR OWN DEVICE PROGRAM AS WE CANNOT GUARANTEE ANY DEVICE NOT SOLD BY BLUEMAGICISP*</h6>
                        ]}
                    />
                    <FaqComponent title={<h3 className={h3classes}>WHAT IS THE DIFFERENCE BETWEEN THE NETGEAR NIGHTHAWK AND THE MASTER ROAM?</h3>}
                        paragraph={[<p>Each device is different depending on the needs for the particular customer.</p>,
                        <p>The Master Roam device is designed for individual or personal use. You can have 15 different connections and it includes 2 internal antennas. This device is great for a traveling business person or student. One noticeable difference with this device is the use of cloud based sims. There is, however, an option to place a physical sim in this device if you wish.</p>,
                        <p>The Nighthawk is designed to support more devices at once. With the nighthawk you can have up to 20 devices connected. You can also attach an ethernet port to this device to hard wire into your home or business. This device is perfect for anyone looking for high performance in a small package.</p>,
                        <p>If you need any help, please use the chat feature on our website so one of our highly trained representatives can help you decide which would be the best for you.</p>]}
                    />
                </article>
                <h2 ><span >TROUBLESHOOTING</span></h2>
                <article className="max-w-6xl grid md:grid-cols-2 gap-8 py-8 px-20" >
                    <FaqComponent title={<h3 className={h3classes}>MY BOX IS BLINKING AN ORANGE LIGHT AND I JUST PAID MY BILL?</h3>}
                        paragraph={[<p>Occasionally there can be an error in the application of a monthly payment.&nbsp; If this happens, use one of the following options to help get your services restored.&nbsp; *Please note to help expedite restoring your service, make sure to have your MDN or account number. &nbsp;</p>]}
                        list={[
                            <><span >Customers can call (850) 372-4284 Monday through Friday 9am-6 pm CST or Saturday 10 am-2pm CST. &nbsp;</span></>,
                            <><span >For help through email you can send an email to bmagicisp@gmail.com, please include your name, contact phone number, device IMEI (located behind the battery) and sim ICCID (begins with 89 and is 20 digits long). &nbsp;</span></>,
                            <><span >Customers may also utilize the chat feature on the website for help.</span></>
                        ]}
                    />
                    <FaqComponent title={<h3 className={h3classes}>MY BOX IS BLINKING AN ORANGE LIGHT AND I STILL HAVE TWO WEEKS TIL MY PAYMENT IS DUE.</h3>}
                        paragraph={<p>You can try restarting your jetpack by taking the battery out for one minute and putting it back in. If that still does not work, plug the unit into the wall and reboot the device.</p>}
                    />
                    <FaqComponent title={<h3 className={h3classes}>MY BOX KEEPS REBOOTING AND WON'T CONNECT TO ANY OF MY OTHER DEVICES</h3>}
                        paragraph={<p>Try taking the battery out of the device and rebooting your equipment. If the problem persists, please contact our customer support team for further troubleshooting solutions.</p>}
                    />
                    <FaqComponent title={<h3 className={h3classes}>WHAT IS <strong>NOT</strong> COVERED BY THE WARRANTY?</h3>}
                        paragraph={<p>Unfortunately, Blue Magic ISP is not responsible for any misuse on the device itself. &nbsp;We offer a lifetime warranty on Netgear Nighthawk, if you buy from us. &nbsp; However, our lifetime warranty does not cover any problems that include improper use, abuse, improper storage or maintenance, accident or neglect such as physical damage (cracks, scratches etc.), contact with liquid, water, rain, extreme humidity, sand, dirt or the like, extreme heat or food, and any other type of misuse, damage or other acts not resulting from defects in material or workmanship. The Lifetime Warranty is also voided if you modify, repair or alter the device in any way.&nbsp;</p>}
                    />
                </article>
                <h2 ><span >SHIPPING &amp; RETURNS</span></h2>
                <article className="max-w-6xl grid md:grid-cols-2 gap-8 py-8 px-20" >
                    <FaqComponent title={<h3 className={h3classes}>HOW LONG DOES IT TAKE FOR THE PRODUCT TO SHIP?</h3>}
                        paragraph={<p>Our online department is available Monday-Friday and can take up to 1-2 business days to ship the product.</p>}
                    />
                    <FaqComponent title={<h3 className={h3classes}>WHAT IS THE RETURN POLICY?</h3>}
                        paragraph={<p>A 24 hour trial period is implemented for all customers. If the customer is not truly satisfied, they can return the device and receive a full refund if returned within the 24 hours of purchasing. &nbsp;Please note the full refund will not include the $35 restocking fee. &nbsp;Refund not including the $35 restocking fee will be given once the device is returned to the business. Return policy will only work for guaranteed device that are sold through Blue Magic ISP and/or its affiliates. &nbsp;All rights reserved.&nbsp;</p>}
                    />
                    <FaqComponent title={<h3 className={h3classes}>HOW LONG DOES IT TAKE FOR THE PRODUCT TO BE DELIVERED TO ME?</h3>}
                        paragraph={<p>Our customers can expect their package anywhere between 2-5 business days once the product is ready to ship. &nbsp;Please note this timeline can vary depending on the method of shipping chosen at checkout. &nbsp;A tracking number can be acquired within 24 hours after your items have been shipped.</p>}
                    />
                    <FaqComponent title={<h3 className={h3classes}>HOW WILL I KNOW THIS WILL WORK FOR ME?</h3>}
                        paragraph={<p>Blue Magic ISP offers a satisfaction guarantee or your money back. &nbsp;We have success with thousands of customers nationwide and are confident in our services. We back our product and service, but for those that Blue Magic ISP may not work for, please see our return policy prior to purchase.</p>}
                    />
                </article>
            </div>
        </div>
    )
}

export default Faq;