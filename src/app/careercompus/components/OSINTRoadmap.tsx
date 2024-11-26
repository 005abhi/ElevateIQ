import React from "react";
import { TreeNode } from "./TreeNode";

export const OSINTRoadmap: React.FC = () => {
  return (
    <div className="p-4 bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">OSINT Framework</h1>
      <div className="relative">
        <TreeNode label="OSINT Framework" depth={0}>
          <TreeNode label="Username" depth={1}>
            <TreeNode label="Username Search Engines" depth={2} />
            <TreeNode label="Specific Sites" depth={2}>
              <TreeNode label="Amazon Usernames (M)" depth={3} />
              <TreeNode label="Github User (M)" depth={3} />
              <TreeNode label="Tinder Usernames (M)" depth={3} />
              <TreeNode label="Keybase" depth={3} />
              <TreeNode label="MIT PGP Key Server" depth={3} />
            </TreeNode>
          </TreeNode>
          <TreeNode label="Email Address" depth={1} />
          <TreeNode label="Domain Name" depth={1} />
          <TreeNode label="IP & MAC Address" depth={1} />
          <TreeNode label="Images / Videos / Docs" depth={1} />
          <TreeNode label="Social Networks" depth={1} />
          <TreeNode label="Instant Messaging" depth={1} />
          <TreeNode label="People Search Engines" depth={1} />
          <TreeNode label="Dating" depth={1} />
          <TreeNode label="Telephone Numbers" depth={1} />
          <TreeNode label="Public Records" depth={1} />
          <TreeNode label="Business Records" depth={1} />
          <TreeNode label="Transportation" depth={1} />
          <TreeNode label="Geolocation Tools / Maps" depth={1} />
          <TreeNode label="Search Engines" depth={1} />
          <TreeNode label="Forums / Blogs / IRC" depth={1} />
          <TreeNode label="Archives" depth={1} />
          <TreeNode label="Language Translation" depth={1} />
          <TreeNode label="Metadata" depth={1} />
          <TreeNode label="Mobile Emulation" depth={1} />
          <TreeNode label="Terrorism" depth={1} />
          <TreeNode label="Dark Web" depth={1} />
          <TreeNode label="Digital Currency" depth={1} />
          <TreeNode label="Classifieds" depth={1} />
          <TreeNode label="Encoding / Decoding" depth={1} />
          <TreeNode label="Tools" depth={1} />
          <TreeNode label="AI Tools" depth={1} />
          <TreeNode label="Malicious File Analysis" depth={1} />
          <TreeNode label="Exploits & Advisories" depth={1} />
          <TreeNode label="Threat Intelligence" depth={1} />
          <TreeNode label="OpSec" depth={1} />
          <TreeNode label="Documentation / Evidence Capture" depth={1} />
        </TreeNode>
      </div>
    </div>
  );
};
