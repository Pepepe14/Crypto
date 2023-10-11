<template>
    <div class="flex flex-col gap-4">
        <div class="flex justify-between mt-[30px]">
            <div class="flex flex-col w-full">
                <p class=" font-bold text-xl">Publish a New Item</p>
                <p class="text-slate-500/95">Please fill in all the details of your item.</p>
            </div>
            <div class="flex items-center justify-center bg-black text-white rounded-xl w-1/6"> <button class="font-bold w-full">Send</button></div>
            </div>
            <div class=" flex gap-4 mt-[50px]">
                    <div class="flex flex-col w-full">
                        <div class="flex flex-col w-full">
                            <div class="w-full bg-slate-50 rounded-xl p-5">
                                <div class="flex flex-col gap-8">

                                    <p class="font-bold">Put the items characteristics</p>

                                    <div class="flex flex-col gap-4">
                                        <p>Put the item you are going to want
                                            to sell.</p>
                                        <input
                                            class="hover:bg-slate-200 bg-slate-200/30 p-3 border rounded-xl outline-none">
                                        <p class="">Put a text to explain the item you
                                            want to sell.</p>
                                        <input
                                            class="hover:bg-slate-200 bg-slate-200/30 p-3 border rounded-xl outline-none">
                                        <p class="">Put the price you want to sell.</p>
                                        <input
                                            class="hover:bg-slate-200 bg-slate-200/30 p-3 border rounded-xl outline-none">
                                        <button class="">
                                            <div
                                                class="flex flex-col justify-center items-center border-slate-200 rounded-xl border-2 border-dashed gap-5 p-10">
                                                <div>
                                                    <svg width="80" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="m14.26 15.94-1.71-1.7c-.8-.79-1.19-1.18-1.64-1.33a2 2 0 0 0-1.23 0c-.46.15-.85.54-1.64 1.32l-4 4.03m10.22-2.32.35-.34c.8-.8 1.2-1.2 1.67-1.35a2 2 0 0 1 1.24.02c.46.16.86.56 1.64 1.38l.84.85m-5.74-.56 3.96 4.02m0 0c-.35.04-.8.04-1.42.04H7.2c-1.12 0-1.68 0-2.1-.22a1.87 1.87 0 0 1-1.05-1.52m14.17 1.7c.28-.03.5-.08.69-.18a2 2 0 0 0 .87-.87c.22-.43.22-.99.22-2.11V13m-9-9H7.2c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C4 5.52 4 6.08 4 7.2v9.6c0 .65 0 1.1.04 1.46M18 9V6m0 0V3m0 3h3m-3 0h-3" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p class="font-bold text-xl">Drag and drop an image</p>
                                                    <p class="text-slate-500/95">Max 5 photos, 6MB each</p>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
</template>

