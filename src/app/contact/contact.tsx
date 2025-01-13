import React from "react";
import { SocialIcon } from "react-social-icons";

const ContactPage = () => (
  <div className="min-h-screen p-8">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <p className="text-lg">Get in touch with the CAIS team.</p>
    <div>
      <a
        className="Sing-up-forum-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLSe2Bvvr6NCrHmb9fdtqRxR3v-6QmGqi2E-4p112TNFDZrcX5w/viewform?pli=1"
      >
        Sign Up Form
      </a>
    </div>
    <div>
      <SocialIcon url="https://instagram.com" />
      <a
        className="Instagram-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/carletonaisociety/"
      >
        Instagram
      </a>
      <a> </a>
      <SocialIcon url="https://discord.com" />
      <a
        className="Discord-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.gg/nsvsMJaSRJ"
      >
        Discord
      </a>
      <a> </a>
      <SocialIcon url="https://linkedin.com" />
      <a
        className="Linkedin-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/company/carleton-ai"
      >
        Linkedin
      </a>
      <a> </a>
      <SocialIcon url="https://youtube.com" />
      <a
        className="Youtube-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/channel/UCWKRnTa68hlHrW6WYCgCNaw"
      >
        YouTube
      </a>
    </div>
  </div>
);

export default ContactPage;
