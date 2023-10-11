<template>
    <div class="flex justify-between  mt-[50px]">
        <div class="flex flex-col text-center rounded-lg w-[14vw]">
            <PartsShare></PartsShare>
            <div class="rounded-lg bg-[#CCE5E3] text-slate-900 text-lg font-bold p-3 gap-4 w-full mt-[40px]">
                <button class="w-full"><span>Write a Post</span></button>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2">
            <div
                class="flex flex-row border border-[#CCE5E3] rounded-lg justify-center text-center w-[28.385vw] ml-[3.5vw]">
                <div class="flex flex-col h-[40vw]">
                </div>
            </div>
            <button class="bg-[#CCE5E3] rounded-full  ml-[3.5vw]">
                <svg width="40" fill="none" viewBox="0 0 24 24">
                    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v12m0-12-5 5m5-5 5 5" />
                </svg></button>
        </div>
        <div class="flex flex-col items-center max-w-[25vw] ">
            <div class="flex flex-col items-center bg-slate-200/30 rounded-lg w-4/4 p-5 ">
                <div class="font-bold">
                    <p>Popular Shares</p>
                </div>
                <div class="flex flex-col justify-between text-slate-900 mt-[-5px]">
                    <div class="flex items-center gap-10 mt-[25px]">
                        <div class="flex items-center gap-1"><img class="max-w-[50px] max-h-[50px] rounded-full"
                                src="https://placehold.co/50x50" alt="Profile Picture">
                            <a href="#">
                                <p>@VirtualLand</p>
                            </a>
                        </div>
                        <div>
                            <button class="bg-[#CCE5E3] font-bold rounded-lg p-2 w-[5vw]">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center bg-slate-200/30 rounded-lg w-4/4 p-5 mt-[40px]">
                <div class="font-bold">
                    <p>Trade History</p>
                </div>
                <div class="flex flex-col justify-between mt-[-5px]">
                    <div class="flex items-center gap-10 mt-[25px]">
                        <div class="flex items-center gap-1"><img class="max-w-[50px] max-h-[50px] rounded-full"
                                src="https://placehold.co/50x50" alt="Profile Picture">
                            <p>@VirtualLand</p>
                        </div>
                        <div>
                            <button class="bg-[#CCE5E3] font-bold rounded-lg p-2 w-[5vw]">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import PartsShare from '@/components/PartsShares'

export default {
    components: {
        PartsShare,
    },
    mounted() {
        console.log(this.$route)
    }

}
</script> 
