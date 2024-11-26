import React from "react";
import { TreeNode } from "./Treenodee";
import { OSINTNode } from "../types/osint-types";

const osintData: OSINTNode = {
  id: "root",
  label: "OSINT Framework",
  children: [
    {
      id: "username",
      label: "Username",
      children: [
        {
          id: "username-search",
          label: "Username Search Engines",
          url: "https://example.com/username-search",
        },
        {
          id: "specific-sites",
          label: "Specific Sites",
          children: [
            {
              id: "amazon",
              label: "Amazon Usernames (M)",
              url: "https://example.com/amazon-usernames",
            },
            {
              id: "github",
              label: "Github User (M)",
              url: "https://example.com/github-users",
            },
            {
              id: "tinder",
              label: "Tinder Usernames (M)",
              url: "https://example.com/tinder-usernames",
            },
            {
              id: "keybase",
              label: "Keybase",
              url: "https://example.com/keybase",
            },
            {
              id: "mit-pgp",
              label: "MIT PGP Key Server",
              url: "https://example.com/mit-pgp",
            },
          ],
        },
      ],
    },
    {
      id: "email",
      label: "Email Address",
      url: "https://example.com/email-search",
    },
    {
      id: "domain",
      label: "Domain Name",
      url: "https://example.com/domain-search",
    },
    {
      id: "ip-mac",
      label: "IP & MAC Address",
      url: "https://example.com/ip-mac-search",
    },
    {
      id: "images-videos-docs",
      label: "Images / Videos / Docs",
      url: "https://example.com/media-search",
    },
    {
      id: "social-networks",
      label: "Social Networks",
      url: "https://example.com/social-networks",
    },
    {
      id: "instant-messaging",
      label: "Instant Messaging",
      url: "https://example.com/instant-messaging",
    },
    {
      id: "people-search",
      label: "People Search Engines",
      url: "https://example.com/people-search",
    },
    // Add more nodes here to match the full OSINT framework
  ],
};

export const OSINTFramework: React.FC = () => {
  return (
    <div className="p-6 bg-black rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">OSINT Framework</h1>
      <div className="overflow-x-auto">
        <TreeNode node={osintData} depth={0} />
      </div>
    </div>
  );
};
