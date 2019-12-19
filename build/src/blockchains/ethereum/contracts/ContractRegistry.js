"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRegistry = [{ "constant": true, "inputs": [{ "name": "_contractName", "type": "bytes32" }], "name": "getAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_contractName", "type": "bytes32" }], "name": "unregisterAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "contractNames", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_contractName", "type": "bytes32" }, { "name": "_contractAddress", "type": "address" }], "name": "registerAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "itemCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_contractName", "type": "bytes32" }], "name": "addressOf", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "newOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_contractName", "type": "bytes32" }, { "indexed": false, "name": "_contractAddress", "type": "address" }], "name": "AddressUpdate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_prevOwner", "type": "address" }, { "indexed": true, "name": "_newOwner", "type": "address" }], "name": "OwnerUpdate", "type": "event" }];
