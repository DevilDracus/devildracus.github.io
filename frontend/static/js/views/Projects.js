import AbstactView from "./AbstractView.js";

export default class extends AbstactView {
    constructor() {
        super();
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
        <h1>Public projects</h1>
        <!-- Thumbnails -->
        <section class="thumbnails">
            <div>
                <a href="https://github.com/DevilDracus/rust_concepts">
                    <img src="static/images/thumbs/01.png" alt="" />
                    <h3>Basic Rust concepts to get familiar with the language</h3>
                </a>

            </div>
            <div>
                <a href="https://github.com/DevilDracus/JS-SPA">
                    <img src="static/images/thumbs/02.png" alt="" />
                    <h3>Vanilla JS Single Page Application</h3>
                </a>
            </div>
            <!--<div>
                <a href="/">
                    <img src="static/images/thumbs/03.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>
                <a href="/">
                    <img src="static/images/thumbs/04.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>
                <a href="/">
                    <img src="static/images/thumbs/05.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>
            </div>
            <div>
                <a href="/">
                    <img src="static/images/thumbs/06.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>
                <a href="/">
                    <img src="static/images/thumbs/07.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>
            </div>-->
        </section>
        `;
    }
}