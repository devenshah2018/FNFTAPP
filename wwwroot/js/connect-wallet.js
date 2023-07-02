
import onboarding from '@metamask/onboarding';



const btn = document.querySelector('.create-event');
console.log("Test");


const isMetaMaskInstalled = () =>
{
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
}

let connected = (accounts) =>
{
    btn.style.display = 'none';
}

async function connectWallet()
{
    return await ethereum.request({ method: 'eth_accounts' });
}

const onClickInstallMetaMask = () =>
{
    onboarding.startOnboarding();
}

btn.addEventListener('click',async () =>
{

    try
    {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        connected(accounts)
    } catch (error)
    {
        console.error(error);
    }
})

const MetaMaskClientCheck = () =>
{
    if (!isMetaMaskInstalled())
    {
        btn.innerText = 'Install MetaMask'
        btn.onclick = onClickInstallMetaMask;
    } else
    {

        connectWallet().then((accounts) =>
        {
            if (accounts && accounts[0] > 0)
            {
                connected(accounts)
            } else
            {
                btn.innerText = 'Connect MetaMask'
            }
        })
    }
}

MetaMaskClientCheck()