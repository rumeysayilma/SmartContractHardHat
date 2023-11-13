import { useState } from "react";
import { ethers } from "ethers";

function App() {
  /*
  let [name, setName] = useState("");
  let [balance, setBalance] = useState();
  let [symbol, setSymbol] = useState();
  let [decimals, setDecimals] = useState();
  let [connected, setConnected] = useState(false);
  let [tokenAddress, setTokenAddress] = useState();
  let [connectedAddress, setConnectedAddress] = useState();
  let [transferAmount, setTransferAmount] = useState();
  let [owner, setOwner] = useState();
  let [totalSupply, setTotalSupply] = useState();
  */
  let [connected, setConnected] = useState(false);
  let [tokenAddress, setTokenAddress] = useState();
  let [connectedAddress, setConnectedAddress] = useState();
  //let [createUser, setCreateUser] = useState("");
  //let [addProperty, setAddProperty] = useState();
  //let [contractStart, setContractStart] = useState();
  //let [contractTerminate, setContractTerminate] = useState();
  //let [contractTerminateManage, setContractTerminateManage] = useState();
  //let [complainUser, setComplainUser] = useState();
  //let [complainUserManage, setComplainUserManage] = useState();
  //let [getBlackListStatus, setGetBlackListStatus] = useState();
  //let [getComplains, setGetComplains] = useState();
  //let [getTerminateRequest, setGetTerminateRequest] = useState();
  //let [getContractId, setGetContractId] = useState();

  const [userName, setUserName] = useState('');
  const [isOwner, setIsOwner] = useState(false);
  const [propertyAddress, setPropertyAddress] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [tenantAddress, setTenantAddress] = useState('');
  const [contractStartDate, setContractStartDate] = useState('');
  const [contractFinishDate, setContractFinishDate] = useState('');
  const [contractID, setContractID] = useState('');
  const [legitimate, setLegitimate] = useState(false);
  const [reason, setReason] = useState('');
  const [approve, setApprove] = useState(false);
  const [complainReason, setComplainReason] = useState('');
  const [approveComplain, setApproveComplain] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [blackListStatus, setBlackListStatus] = useState(false);
  const [complainData, setComplainData] = useState({});
  const [terminateRequest, setTerminateRequest] = useState({});


  let { ethereum } = window;
  let tokenContract = null;
  let signer = null;
  //let tokenAbi = JSON.parse('[{"inputs": [],"stateMutability": "nonpayable", "type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "_from","type": "address"},{"indexed": true,"internalType": "address","name": "_to","type": "address"},{"indexed": false,"internalType": "uint256","name": "_value","type": "uint256"}],"name": "Transfer","type": "event"},{"inputs": [{ "internalType": "address","name": "account","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view","type": "function"},{"inputs": [],"name": "decimals","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}, {"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "transfer","outputs": [],"stateMutability": "nonpayable","type": "function"}]');
  /*
  let tokenAbi = [
    "function transfer(address, uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
    "function name() public view returns (string)",
    "function owner() view returns (address)",
    "function totalSupply() view returns (uint256)",
  ];
  */
//human readeble abi:
  let tokenAbi = [
    "function createUser(string, bool) public",
    "function addProperty(string, string) public" ,
    "function contractStart(address, string, string, uint, uint,) public",
    "function contractTerminate(uint, bool, string) public",
    "function contractTerminateManage(uint, bool) public ",
    "function complainUser(uint, string) public",
    "function complainUserManage(uint, bool) public",
    "function getBlackListStatus(address) public view returns (bool)",
    "function getComplains(uint) public view returns (uint, address, address, string)",
    "function getTerminateRequest(uint) public view returns (uint, address, string)",
    "function getContractId(address) public view returns (uint)",
  ];


  const transferAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"; //metamusk adres


  if (ethereum) {
    let address = "0xAb6390D5716F28AFa630078d705235336Cb51d9F"; //remix contraxt / sepolia address
    let provider = new ethers.providers.Web3Provider(ethereum); //metamusk ile etkileşime girmeyi ve bu websitesi için baglanmayı saglar
    signer = provider.getSigner(); //bu site icerisinde baglı olan hesap bilgisi
    tokenContract = new ethers.Contract(address, tokenAbi, signer);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await rentContract.methods.createUser(userName, isOwner).send({ from: accounts[0] });
      console.log('Kullanıcı oluşturuldu:', userName);
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  const handleAddProperty = async () => {
    if (rentContract) {
      try {
        await rentContract.methods.addProperty(propertyAddress, propertyType).send({ from: accounts[0] });
        console.log('Mülk eklendi:', propertyAddress);
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

  const handleContractStart = async () => {
    if (rentContract) {
      try {
        await rentContract.methods.contractStart(
          tenantAddress,
          propertyAddress,
          propertyType,
          contractStartDate,
          contractFinishDate
        ).send({ from: accounts[0] });
        console.log('Sözleşme başlatıldı');
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

  const handleContractTerminate = async () => {
    if (rentContract) {
      try {
        await rentContract.methods.contractTerminate(
          contractID,
          legitimate,
          reason
        ).send({ from: accounts[0] });
        console.log('Sözleşme sonlandırıldı');
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

  const handleContractTerminateManage = async () => {
    if (rentContract) {
      try {
        await rentContract.methods.contractTerminateManage(contractID, approve).send({ from: accounts[0] });
        console.log('Sözleşme yönetildi');
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

  const handleComplainUser = async () => {
    if (rentContract) {
      try {
        await rentContract.methods.complainUser(contractID, complainReason).send({ from: accounts[0] });
        console.log('Şikayette bulunuldu');
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

  const handleComplainUserManage = async () => {
    if (rentContract) {
      try {
        await rentContract.methods.complainUserManage(contractID, approveComplain).send({ from: accounts[0] });
        console.log('Şikayet onaylandı veya reddedildi');
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

  const handleGetBlackListStatus = async () => {
    if (rentContract) {
      try {
        const status = await rentContract.methods.getBlackListStatus(userAddress).call();
        setBlackListStatus(status);
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

  const handleGetComplains = async () => {
    if (rentContract) {
      try {
        const result = await rentContract.methods.getComplains(contractID).call();
        setComplainData({
          ID: result[0],
          user: result[1],
          target: result[2],
          reason: result[3]
        });
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };



  const handleGetTerminateRequest = async () => {
    if (rentContract) {
      try {
        const result = await rentContract.methods.getTerminateRequest(contractID).call();
        setTerminateRequest({
          ID: result[0],
          user: result[1],
          reason: result[2]
        });
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };



  const handleGetContractId = async () => {
    if (rentContract) {
      try {
        const result = await rentContract.methods.getContractId(tenantAddress).call();
        setContractID(result);
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };



  return (
    <div className="App">


      <h1>Kullanıcı Oluştur</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Kullanıcı Adı:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <br />
        <label>
          Kullanıcı Türü:
          <select value={isOwner} onChange={(e) => setIsOwner(e.target.value)}>
            <option value={true}>Ev Sahibi</option>
            <option value={false}>Kiracı</option>
          </select>
        </label>
        <br />
        <button type="submit">Kullanıcı Oluştur</button>
      </form>

      <h1>Mülk Ekle / Ev veya Dükkan</h1>
      <input
        type="text"
        placeholder="Mülk Adresi"
        value={propertyAddress}
        onChange={(e) => setPropertyAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mülk Tipi"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      />
      <button onClick={handleAddProperty}>Mülk Ekle</button>


      <h1>Kira Sözlesme Baslat</h1>
      <input
        type="text"
        placeholder="Kiracı Adresi"
        value={tenantAddress}
        onChange={(e) => setTenantAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mülk Adresi"
        value={propertyAddress}
        onChange={(e) => setPropertyAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mülk Tipi"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sözleşme Başlangıç Tarihi"
        value={contractStartDate}
        onChange={(e) => setContractStartDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sözleşme Bitiş Tarihi"
        value={contractFinishDate}
        onChange={(e) => setContractFinishDate(e.target.value)}
      />
      <button onClick={handleContractStart}>Sözleşme Başlat</button>


      <div>
        <button
          onClick={async () => {
            if (tokenContract && !connected) { //contract sepolia da kayıtlı mı ve baglı mı
              ethereum
                .request({ method: "eth_requestAccounts" })
                .then((accounts) => {
                  setConnected(true);
                  setConnectedAddress(accounts[0]);
                });
              setTokenAddress(await tokenContract.address);
            }
          }}
        >
          {!connected ? "Connect wallet" : "Connected"}
        </button>
        <span>Connected Address: {connectedAddress}</span>
      </div>
      <span>Connected Token Address: {tokenAddress}</span>

      
      <h1>Kira Sozlesme Sonlandır</h1>
      <input
        type="text"
        placeholder="Sözleşme ID'si"
        value={contractID}
        onChange={(e) => setContractID(e.target.value)}
      />
      <select onChange={(e) => setLegitimate(e.target.value)}>
        <option value="true">Haklı</option>
        <option value="false">Haksız</option>
      </select>
      <input
        type="text"
        placeholder="Sebep"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <button onClick={handleContractTerminate}>Sözleşme Sonlandır</button>
   
      <h1>Kira Sozlesme Sonlandır Yonetim</h1>
      <input
        type="text"
        placeholder="Sözleşme ID'si"
        value={contractID}
        onChange={(e) => setContractID(e.target.value)}
      />
      <select onChange={(e) => setApprove(e.target.value)}>
        <option value="true">Onayla</option>
        <option value="false">Onaylama</option>
      </select>
      <button onClick={handleContractTerminateManage}>Sözleşme Yönet</button>
  

      <h1>Kullanıcı Sikayet Et</h1>
      <input
        type="text"
        placeholder="Sözleşme ID'si"
        value={contractID}
        onChange={(e) => setContractID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Şikayet Nedeni"
        value={complainReason}
        onChange={(e) => setComplainReason(e.target.value)}
      />
      <button onClick={handleComplainUser}>Şikayet Et</button>
  

      <h1>Kullanıcı Sikayet Manage</h1>
      <input
        type="text"
        placeholder="Sözleşme ID'si"
        value={contractID}
        onChange={(e) => setContractID(e.target.value)}
      />
      <label>
        Şikayeti Onayla:
        <input
          type="checkbox"
          checked={approveComplain}
          onChange={() => setApproveComplain(!approveComplain)}
        />
      </label>
      <button onClick={handleComplainUserManage}>Şikayeti Yönet</button>
 
      <h1>Blacklist Durumu Kontrol</h1>
      <input
        type="text"
        placeholder="Kullanıcı adresi"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <button onClick={handleGetBlackListStatus}>Blacklist Durumunu Al</button>
    

      <div>
      <h1>Sikayetleri Goruntule</h1>
      <input
        type="text"
        placeholder="Sözleşme ID'si"
        value={contractID}
        onChange={(e) => setContractID(e.target.value)}
      />
      <button onClick={handleGetComplains}>Şikayetleri Al</button>
      <p>ID: {complainData.ID}</p>
      <p>User Address: {complainData.user}</p>
      <p>Target Address: {complainData.target}</p>
      <p>Reason: {complainData.reason}</p>
      </div>



      <div>
      <h1>RSozlesme Sonlandırma taleplerini goruntule</h1>
      <input
        type="text"
        placeholder="Sözleşme ID'si"
        value={contractID}
        onChange={(e) => setContractID(e.target.value)}
      />
      <button onClick={handleGetTerminateRequest}>Sonlandırma İsteği Al</button>
      <p>ID: {terminateRequest.ID}</p>
      <p>User Address: {terminateRequest.user}</p>
      <p>Reason: {terminateRequest.reason}</p>
      </div>


      <div>
      <h1>RContract ID Goruntule</h1>
      <input
        type="text"
        placeholder="Kiracı Adresi"
        value={tenantAddress}
        onChange={(e) => setTenantAddress(e.target.value)}
      />
      <button onClick={handleGetContractId}>Sözleşme ID'sini Getir</button>
      <p>Sözleşme ID: {contractID}</p>
      </div>



      <div>
        <button
          onClick={async () => {
            if (tokenContract && connected) {
              const _name = await tokenContract.name();
              setName(_name);
            }
          }}
        >
          Get Name
        </button>

        <span>Name: {name}</span>
      </div>




      <div>
        <button
          onClick={async () => {
            if (tokenContract && connected) {
              const _symbol = await tokenContract.symbol();
              setSymbol(_symbol);
            }
          }}
        >
          Get Symbol
        </button>

        <span>Symbol: {symbol}</span>
      </div>




      <div>
        <button
          onClick={async () => {
            if (tokenContract && connected) {
              const _owner = await tokenContract.owner();
              setOwner(_owner);
            }
          }}
        >
          Get Owner
        </button>

        <span>Owner: {owner}</span>
      </div>




      <div>
        <button
          onClick={async () => {
            if (tokenContract && connected) {
              const _decimals = await tokenContract.decimals();
              setDecimals(_decimals);
            }
          }}
        >
          Get Decimals
        </button>

        <span>Decimals: {decimals}</span>
      </div>


      <div>
        <h1>Ethereum Akıllı Sözleşme Etkileşimi</h1>
        <button onClick={() => callTerminateFunction(1, true, 'Legitimate termination reason')}>Sözleşmeyi Feshet</button>
        


        <span>Decimals: {decimals}</span>
      </div>


     


    </div>
  );
}

export default App;