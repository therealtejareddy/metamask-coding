const connectBtn = document.querySelector('#connect-btn');
// const disconnectBtn = document.querySelector('#disconnect-btn');

const accountId = document.querySelector("#account-id");

let account, balance;

const connectMetaMask = async () => {
    if(window.ethereum){
        account = await window.ethereum.request({method: "eth_requestAccounts"})
        balance = await window.ethereum.request({method: "eth_getBalance", params: [account[0], "latest"]})
        connectBtn.textContent = "Disconnect"
        accountId.textContent = parseInt(balance,16)/10**18 + " Ether";
        connectBtn.removeEventListener("click",connectMetaMask)
        connectBtn.addEventListener("click",dissconnectMetaMask)
    } else {
        accountId.textContent = "Download Metamask";
    }
}

const dissconnectMetaMask = () => {
    account = null;
    accountId.textContent = account;
    connectBtn.textContent = "Connect Metamask"
    connectBtn.removeEventListener("click",dissconnectMetaMask)
    connectBtn.addEventListener("click",connectMetaMask)
}

connectBtn.addEventListener("click",connectMetaMask)
