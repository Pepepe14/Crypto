<template>
  <div class="flex flex-col justify-between w-full font-bold items-center gap-20 mt-[100px]">
    <div class="flex flex-col items-center ">
    <div class="flex text-[70px] ">
      <div class="flex items-center">
        <p class="text-slate-900">Crypto</p>
        <div class="flex flex-col items-center gap-3 m-5">
          <div class="flex gap-2">
            <div class="w-3.5 h-3.5 bg-[#DDDDDD] rounded-full"></div>
            <div
              class="w-0 h-0 border-t-[15px] border-t-[#0F172A] border-t-solid border-l-[7.5px] border-l-transparent border-l-solid border-r-[7.5px] border-r-transparent border-r-solid">
            </div>
            <div class="w-3.5 h-3.5 bg-[#DDDDDD] rounded-full"></div>
          </div>
          <div class="flex gap-2 ml-[-15px]">
            <div
              class="w-0 h-0 border-b-[15px] border-b-[#0F172A] border-b-solid border-l-[7.5px] border-l-transparent border-l-solid border-r-[7.5px] border-r-transparent border-r-solid">
            </div>
            <div class="w-3.5 h-3.5 bg-[#DDDDDD] rounded-full"></div>
            <div class="w-3.5 h-3.5 bg-[#DDDDDD] rounded-full"></div>
          </div>
        </div>
      </div>
      <div class="text-right">
        <p class="text-[70px] font-bold text-slate-900">All in one platform</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <p class="text-[20px] text-slate-900">Post's</p>
      <div class="w-2 h-2 bg-[#DDDDDD] rounded-full"></div>
      <p class="text-[20px] text-slate-900">Share's</p>
      <div class="w-2 h-2 bg-[#DDDDDD] rounded-full"></div>
      <p class="text-[20px] text-slate-900"> Items and other things!</p>
    </div>
    <div class="flex justify-between items-center mt-[5vw] gap-10">
      <div class="bg-[#CCE5E3] rounded-br-lg rounded-tl-lg w-1/1 p-4 h-full">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div class="flex items-center rounded-xl bg-[#000] h-full p-2">
        <button class="w-full">
          <svg width="35" fill="none" viewBox="0 0 24 24">
            <path stroke="#DDDDDD" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 3.51a9 9 0 1 0 6 0" />
          </svg>
        </button>
      </div>
      <div class="bg-[#E2E8F0] rounded-br-lg rounded-tl-lg w-1/1 p-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  </div>
    <div class="flex justify-between w-full">
      <div class="flex flex-col gap-5 w-full">
        <p class="text-[40px]">Your feedback helps us improve</p>
        <div class="flex flex-col text-slate-500/95 gap-2">
          <div>
            <p>We are here to help you and and we'd love to connect with you.</p>
          </div>
          <div>
            <p>We'll get back in 24h.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="flex flex-col  text-slate-500/95">
          <p class="">Topic</p><input class="bg-slate-200/30 placeholder:font-normal border rounded-xl p-2 w-[30vw]"
            placeholder="Enter a topic">
        </div>
        <div class="text-slate-500/95">
          <p>Wallet</p><input class="bg-slate-200/30 placeholder:font-normal border rounded-xl p-2 w-[30vw]"
            placeholder="Enter a topic">
        </div>
        <div class="text-slate-500/95">
          <p>Email</p><input class="bg-slate-200/30 placeholder:font-normal border rounded-xl p-2 w-[30vw]"
            placeholder="Enter a topic">
        </div>
        <div class="text-slate-500/95">
          <p>Message</p><input
            class="bg-slate-200/30 placeholder:font-normal border rounded-xl p-2 w-[30vw] h-[10vh]"
            placeholder="Enter a topic">
        </div>
      </div>
      <div><button></button></div>
    </div>
  </div>
</template>


<!-- <script>
export default {
  data() {
    return {
      account: null,
      expectedChainId: '0x1', // Cambia esto al ID de la red Ethereum que deseas usar (por ejemplo, '0x1' para Mainnet).
      chainMismatch: false // Variable para controlar si hay una incompatibilidad de cadena
    };
  },
  methods: {
    async connectToMetaMask() {
      try {
        if (!window.ethereum) {
          console.log('MetaMask is not installed.');
          return;
        }

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });

        if (chainId !== this.expectedChainId) {
          // Establecer la variable chainMismatch en true si hay una incompatibilidad de cadena
          this.chainMismatch = true;
          return;
        } else {
          // Restablecer la variable chainMismatch si la cadena es correcta
          this.chainMismatch = false;
        }

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.account = accounts[0];

        await this.requestPermissions();
      } catch (err) {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      }
    },
    async requestPermissions() {
      // Código para solicitar permisos
    }
  },
  created() {
    // Manejar cambios en la cadena Ethereum
    window.ethereum.on('chainChanged', (newChainId) => {
      if (newChainId !== this.expectedChainId) {
        // Establecer la variable chainMismatch en true si hay una incompatibilidad de cadena al cambiar
        this.chainMismatch = true;
        window.location.reload(); // Recargar la página si la cadena cambia.
      } else {
        // Restablecer la variable chainMismatch si la cadena es correcta al cambiar
        this.chainMismatch = false;
      }
    });
  }
};
@click="connectToMetaMask"
</script> -->