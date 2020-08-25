import AbstactView from "./AbstractView.js";

export default class extends AbstactView {
    constructor() {
        super();
        this.setTitle("Florian Moldenhauer - Portfolio");
    }

    async getHtml() {
        return `
        <span class="avatar"><img src="./static/images/avatar.jpg" alt="" /></span>
        <h1>Welcome to <strong>my</strong> Portfolio<br />
        I'm a Software Developer from Leipzig, Germany and I'm always interested in learing new tech related things.<br />
        Connect with me:</h1>
        <ul class="icons">
            <li><a href="https://twitter.com/devildracus" class="icon style2 fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="https://www.xing.com/profile/Florian_Moldenhauer7/cv" class="icon style2 fa-xing"><span class="label">Xing</span></a></li>
            <li><a href="https://github.com/DevilDracus" class="icon style2 fa-github"><span class="label">Github</span></a></li>
        </ul>
        `;
    }
}