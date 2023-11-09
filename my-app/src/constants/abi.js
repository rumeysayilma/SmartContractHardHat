export const LOCK_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ContractAdmin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_propertyAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_propertyType",
          "type": "string"
        }
      ],
      "name": "addProperty",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "blackList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_contractID",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_complainReason",
          "type": "string"
        }
      ],
      "name": "complainUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_contractID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_approve",
          "type": "bool"
        }
      ],
      "name": "complainUserManage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "contractComplainReasons",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "contractID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "targetAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ComplainReason",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "willApprove",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "contractIDTenants",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "contractInformations",
      "outputs": [
        {
          "internalType": "address",
          "name": "ownerAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tenantAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "propertyAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "propertyType",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "contractStartDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "contractFinishDate",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "validityStatus",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "earlyTerminate",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tenantAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_propertyAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_propertyType",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_contractStartDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_contractFinishDate",
          "type": "uint256"
        }
      ],
      "name": "contractStart",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_contractID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_legitimate",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "_reason",
          "type": "string"
        }
      ],
      "name": "contractTerminate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_contractID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_approve",
          "type": "bool"
        }
      ],
      "name": "contractTerminateManage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "contractTerminateReasons",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "contractID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "TerminationReason",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "willApprove",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_isOwner",
          "type": "bool"
        }
      ],
      "name": "createUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "getBlackListStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_contractID",
          "type": "uint256"
        }
      ],
      "name": "getComplains",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tenantAddress",
          "type": "address"
        }
      ],
      "name": "getContractId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_contractID",
          "type": "uint256"
        }
      ],
      "name": "getTerminateRequest",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "propertyInformations",
      "outputs": [
        {
          "internalType": "address",
          "name": "ownerAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "propertyAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "propertyType",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "contractValidityStatus",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "contractID",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userInformations",
      "outputs": [
        {
          "internalType": "string",
          "name": "Name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "UserAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isOwner",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]