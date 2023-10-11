<template>
    <BoxObjects>
        <div class="flex justify-center text-center p-2">
            <div class="flex justify-around items-center gap-8 w-full">
                <div class="w-[40px]">
                <img class="border rounded-full" width="52"
                    src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source&w=120"
                    alt="profile picture">
                </div>
                <div class="flex flex-col">
                    <span class="text-[#558EF4]">User</span><span class="font-bold ">Jose</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#558EF4]">Wallet</span><span class="font-bold">0xEabc...02B0</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#558EF4]">Item</span><span class="font-bold">Sunglasses</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#558EF4]">Seller City</span><span class="font-bold">New York </span>
                </div>

                <div class="flex flex-col">
                    <span class="text-[#558EF4]">Initial Pixel Price</span><span class="font-bold">0.01ETH</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#558EF4]">Actual Pixel Price</span><span class="font-bold">0.5ETH</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#558EF4]">Pixel Holders</span><span class="font-bold">250</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#558EF4]">Total Pixels</span><span class="font-bold">1800</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#558EF4]">Pixel Unsold</span><span class="font-bold">600</span>
                </div>
                
                    <img class=" rounded-full" width="48" src="https://chemasport.es/45125-home_default/slip-on-platform-vans-cuadros-mujer.jpg"
                        alt="photo object">
            </div>
        </div>
    </BoxObjects>
</template>
<script>
// @ is an alias to /src

import BoxObjects from '@/components/BoxObjects.vue';



export default {
    name: 'ItemsView',
    components: {
        BoxObjects,
    },
};
</script> 
  