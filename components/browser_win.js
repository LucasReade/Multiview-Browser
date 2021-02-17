
export class BrowserWindow extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                .win_outer {
                    display:flex;
                    flex-direction:column;
                    height: 100%;
                }
                .navbar {
                    width: 100%;
                    height: 35px;
                    background-color: #07064D;
                    border-radius: 5px 5px 0 0;
                    display: flex;
                    flex-direction: row;
                }
                    .navbar > .btn {
                        width: 35px;
                        border: none;
                        background: transparent;
                        transition: background 0.25s;
                        outline: none;
                        color: #fff;
                    }
                        .navbar > .btn:not(.hidden):hover{
                            background: rgb(255 255 255 / 35%);
                        }      
                    .navbar > .center {
                        flex: auto;
                    }
    
                .view {
                    flex: auto;
                }
            </style>
            <div class='win_outer'>
                <div class="navbar">
                    <button id="back" class="btn back"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                    <button id="refresh" class="btn refresh"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-cw"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></button>
                    <button id="forward" class="btn forward"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                    <div class="center">
                    </div>
                    <button class="btn hidden"></button>
                    <button class="btn hidden"></button>
                    <button id="close" class="btn close"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                </div>
                <webview class="view" src="https://www.google.com/">
                </webview>
            </div>
        `;
        this.webview = this.shadowRoot.querySelector('webview');

        this.shadowRoot.querySelector('#back').addEventListener('click', () => {
            this.webview.goBack();
        });
        this.shadowRoot.querySelector('#refresh').addEventListener('click', () => {
            this.webview.reload();
        });
        this.shadowRoot.querySelector('#forward').addEventListener('click', () => {
            this.webview.goForward();
        });

        this.shadowRoot.querySelector('#close').addEventListener('click', () => {

            this.dispatchEvent(new CustomEvent('close'));
        });

        this.webview.addEventListener('focus', () => {
            this.dispatchEvent(new CustomEvent('focused'));
        });
    }

}