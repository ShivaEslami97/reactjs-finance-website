import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-16 px-4 grid lg:grid-cols-3 gap-20 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-primary">Finacia.</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-3/4 my-6">
            <FaFacebookSquare size={30} className="footer-icon" />
            <FaInstagram size={30} className="footer-icon" />
            <FaTwitterSquare size={30} className="footer-icon" />
            <FaGithubSquare size={30} className="footer-icon" />
            <FaDribbbleSquare size={30} className="footer-icon" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-footer gap-4 lg:justify-items-center lg:col-span-2 lg:gap-0">
          <div>
            <h6 className="font-medium text-gray-400 mb-1">Solutions</h6>
            <ul>
              <li className="footer-list">Analytics</li>
              <li className="footer-list">Marketing</li>
              <li className="footer-list">Commerce</li>
              <li className="footer-list">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-1">Support</h6>
            <ul>
              <li className="footer-list">Pricing</li>
              <li className="footer-list">Documentation</li>
              <li className="footer-list">Guides</li>
              <li className="footer-list">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-1">Company</h6>
            <ul>
              <li className="footer-list">About</li>
              <li className="footer-list">Blog</li>
              <li className="footer-list">Jobs</li>
              <li className="footer-list">Press</li>
              <li className="footer-list">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-1">Legal</h6>
            <ul>
              <li className="footer-list">Claim</li>
              <li className="footer-list">Policy</li>
              <li className="footer-list">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
