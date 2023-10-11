<template>
    <div class="flex flex-col text-center rounded-lg w-[14vw]">
        <div class="flex flex-col gap-4">
            <button
                class="text-slate-900 flex items-center hover:bg-slate-200 bg-slate-200/30 py-2 px-4 rounded-xl gap-4"><svg
                    width="30" fill="none" viewBox="0 0 24 24">
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2 20h2m0 0h6m-6 0v-8.55c0-.53 0-.8.06-1.05a2 2 0 0 1 .29-.62c.14-.2.34-.38.74-.74l4.8-4.2c.75-.65 1.12-.98 1.54-1.1a2 2 0 0 1 1.14 0c.42.12.8.45 1.54 1.1l4.8 4.2c.4.36.6.53.74.74a2 2 0 0 1 .28.62c.07.25.07.52.07 1.05V20m-10 0h4m-4 0v-4a2 2 0 1 1 4 0v4m0 0h6m0 0h2" />
                </svg><span class="font-bold text-lg">Home</span></button>

            <button
                class="text-slate-900 flex items-center  hover:bg-slate-200 bg-slate-200/30 py-2 px-4 rounded-xl gap-4"><svg
                    width="30" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    aria-labelledby="exploreIconTitle" color="#000" viewBox="0 0 24 24">
                    <path d="m14.12 14.12-7.07 2.83 2.83-7.07 7.07-2.83z" />
                    <circle cx="12" cy="12" r="10" />
                </svg><span class="font-bold text-lg">Explore</span></button>

            <button
                class="text-slate-900 flex items-center hover:bg-slate-200 bg-slate-200/30 py-2 px-4 rounded-xl gap-4"><svg
                    width="30" fill="none" viewBox="0 0 24 24">
                    <path fill="#000" fill-rule="evenodd"
                        d="M9.3 4.73v.52c-2.7 1.1-4.57 4.73-4.5 7.87v1.74c-1.38 1.77-1.3 4.41 2.14 4.41H9.3c0 .73.28 1.42.78 1.93a2.65 2.65 0 0 0 3.78 0c.5-.51.79-1.2.79-1.93h2.37c3.42 0 3.47-2.64 2.1-4.41l.04-1.74c.06-3.14-1.82-6.77-4.51-7.87v-.52c0-.73-.28-1.42-.79-1.93a2.65 2.65 0 0 0-3.78 0c-.5.51-.78 1.2-.78 1.93Zm3.56 0v.05a7.12 7.12 0 0 0-1.78 0v-.05c0-.24.1-.48.26-.65a.88.88 0 0 1 1.26 0c.17.17.26.4.26.65Zm-1.78 14.54c0 .24.1.48.26.65a.88.88 0 0 0 1.26 0 .9.9 0 0 0 .26-.65h-1.78Zm5.94-1.82c.76 0 1.17-.9.67-1.5a1.54 1.54 0 0 1-.36-1.02l.04-1.85c.07-3.09-2.37-6.53-5.4-6.53-3.02 0-5.46 3.44-5.4 6.53l.05 1.85c0 .37-.12.74-.36 1.02-.5.6-.09 1.5.68 1.5h10.08ZM16.98 3.2a1 1 0 0 1 1.4-.25c1.14.8 2.52 2.7 3.27 4.96a1 1 0 0 1-1.9.63c-.66-1.98-1.83-3.47-2.52-3.95a1 1 0 0 1-.25-1.39ZM5.43 2.95a1 1 0 1 1 1.14 1.64c-.69.48-1.86 1.97-2.52 3.95a1 1 0 0 1-1.9-.63c.76-2.26 2.13-4.16 3.28-4.96Z"
                        clip-rule="evenodd" />
                </svg><span class="font-bold text-lg">Notifications</span></button>

            <button
                class="text-slate-900 flex items-center  hover:bg-slate-200 bg-slate-200/30 py-2 px-4 rounded-xl gap-4"><svg
                    width="30" xml:space="preserve" viewBox="0 0 24 24">
                    <path
                        d="M22 13.5c0-2.3-1.8-4.2-4-4.5-.2-2.8-2.6-5-5.4-5H7.5C6 4 4.6 4.6 3.6 5.6S2 8 2 9.5c0 1.2.4 2.3 1 3.2l-1 3c-.1.4 0 .8.3 1.1.2.1.5.2.7.2.2 0 .3 0 .4-.1l4-2h1.8c.2.5.4 1 .7 1.4a4.4 4.4 0 0 0 3.5 1.7h2.3l3.8 1.9c.2.1.3.1.5.1s.5-.1.7-.2c.3-.3.4-.7.3-1.1l-.6-1.7.3-.3c.8-.9 1.3-2 1.3-3.2zm-14.7-.6c-.2 0-.4 0-.6.1l-2.1 1 .4-1.3c.1-.3 0-.7-.2-1-.5-.6-.8-1.4-.8-2.2 0-1 .4-1.8 1-2.5.7-.7 1.5-1 2.4-1h5.1c1.8 0 3.2 1.3 3.4 3h-2.5c-1.2 0-2.3.5-3.2 1.3-.7.7-1.1 1.5-1.3 2.4v.2H7.3zm12 2.4c-.2.2-.4.3-.6.4-.4.2-.6.7-.5 1.2l.1.2-1.8-.9c-.2-.2-.3-.2-.5-.2h-2.5c-.8 0-1.5-.3-2-1-.3-.4-.5-.8-.5-1.2v-.7c.1-.5.3-1 .7-1.3.5-.5 1.1-.7 1.8-.7h4c1.4 0 2.5 1.1 2.5 2.5 0 .6-.3 1.2-.7 1.7z" />
                </svg><span class="font-bold text-lg">Messages</span></button>

            <button
                class="text-slate-900 flex items-center  hover:bg-slate-200 bg-slate-200/30 py-2 px-4 rounded-xl gap-4"><svg
                    width="30" fill="none" viewBox="0 0 24 24">
                    <path fill="#000" fill-rule="evenodd"
                        d="M4 4.5c0 .52.12 1.04.34 1.5H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2.34a3.5 3.5 0 0 0-3.16-5c-1.32 0-2.38.37-3.2.98-.56.42-.98.92-1.3 1.44a5.04 5.04 0 0 0-1.3-1.44A5.24 5.24 0 0 0 7.5 1 3.5 3.5 0 0 0 4 4.5ZM7.5 3a1.5 1.5 0 0 0 0 3h3.37a5.4 5.4 0 0 0-.34-1.09A3.3 3.3 0 0 0 9.5 3.58a3.25 3.25 0 0 0-2-.58Zm5.63 3h3.37a1.5 1.5 0 0 0 0-3c-.93 0-1.56.25-2 .58a3.3 3.3 0 0 0-1.03 1.33A5.4 5.4 0 0 0 13.13 6ZM13 8v3h8V8h-8Zm-2 0v3H3V8h8Zm2 12h6v-7h-6v7Zm-2-7v7H5v-7h6Z"
                        clip-rule="evenodd" />
                </svg><span class="font-bold text-lg">Rewards</span></button>

            <button
                class="text-slate-900 flex items-center hover:bg-slate-200 bg-slate-200/30 py-2 px-4 rounded-xl gap-4"><svg
                    width="30" viewBox="0 0 24 24">
                    <path
                        d="M12 11a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM4 23h16a1 1 0 0 0 1-1v-4a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v4a1 1 0 0 0 1 1Zm1-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3H5Z" />
                </svg><span class="font-bold text-lg">Profile</span></button>
        </div>
    </div>
</template>