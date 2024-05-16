// Step 1: Create a variable to hold the NFTs
const NFTs = [];

// Step 2: Define a function to create (mint) a new NFT

function mintNFT(_name, _eyeColor, _shirtType, _blingType) {
  const nft = {
    name: _name,
    eyeColor: _eyeColor,
    shirtType: _shirtType,
    blingType: _blingType,
  };

  // Add the NFT object to the NFTs array
  NFTs.push(nft);
  // Print a message to confirm the NFT has been minted
  console.log("Minted: " + _name);
}

// Step 3: Define a function to list all minted NFTs
function listNFTs() {
  // Loop through each NFT in the NFTs array
  for (let i = 0; i < NFTs.length; i++) {
    // Print details of each NFT
    console.log("\nNFT        :\t" + (i + 1));
    console.log("Name       : \t" + NFTs[i].name);
    console.log("Eye Color  : \t" + NFTs[i].eyeColor);
    console.log("Shirt Type : \t" + NFTs[i].shirtType);
    console.log("Bling      : \t" + NFTs[i].blingType);
    console.log("---------------------------------");
  }
}

// Step 4: Define a function to get the total number of NFTs
function getTotalSupply() {
  // Print the total count of NFTs in the NFTs array
  console.log("\nTotal NFTs: " + NFTs.length);
}

// Step 5: Mint a few NFTs by calling the mintNFT function
mintNFT("Zim", "Blue", "Shirt", "Silver Chain");
mintNFT("Apollo", "Red", "Shirt", "Gold Chain");
mintNFT("Maxim", "Black", "Hoodie", "Gold Piercing");

// Step 6: List all the minted NFTs
listNFTs();

// Step 7: Print the total supply of NFTs
getTotalSupply();
