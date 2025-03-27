import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce web app is an online platform that enables users to buy and sell products or services
                    . It typically includes features for browsing products, adding items to a cart,
                    making secure payments, and managing orders.</p>
                <p> Users can create accounts to track orders, save items to wishlists, and manage personal details,
                    while administrators can oversee inventory, process orders, and analyze sales through a dedicated
                    dashboard. With search functionality, filters, and secure payment gateways, an e-commerce web app
                    provides a seamless shopping experience for both customers and store owners.</p>
            </div>
        </div>
    )
}

export default DescriptionBox;