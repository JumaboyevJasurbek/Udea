'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">udea documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConnectionModule.html" data-type="entity-link" >ConnectionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ConnectionModule-50b1734cdd34fefd5813fed5c8aef2e957286d0e8d4950f9ee691d47e69ad3f3615eb7e2793f749df5eddf7473c8eefc00af708fd7aeb50380c4170dc2f2dc17"' : 'data-target="#xs-controllers-links-module-ConnectionModule-50b1734cdd34fefd5813fed5c8aef2e957286d0e8d4950f9ee691d47e69ad3f3615eb7e2793f749df5eddf7473c8eefc00af708fd7aeb50380c4170dc2f2dc17"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ConnectionModule-50b1734cdd34fefd5813fed5c8aef2e957286d0e8d4950f9ee691d47e69ad3f3615eb7e2793f749df5eddf7473c8eefc00af708fd7aeb50380c4170dc2f2dc17"' :
                                            'id="xs-controllers-links-module-ConnectionModule-50b1734cdd34fefd5813fed5c8aef2e957286d0e8d4950f9ee691d47e69ad3f3615eb7e2793f749df5eddf7473c8eefc00af708fd7aeb50380c4170dc2f2dc17"' }>
                                            <li class="link">
                                                <a href="controllers/ConnectionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConnectionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConnectionModule-50b1734cdd34fefd5813fed5c8aef2e957286d0e8d4950f9ee691d47e69ad3f3615eb7e2793f749df5eddf7473c8eefc00af708fd7aeb50380c4170dc2f2dc17"' : 'data-target="#xs-injectables-links-module-ConnectionModule-50b1734cdd34fefd5813fed5c8aef2e957286d0e8d4950f9ee691d47e69ad3f3615eb7e2793f749df5eddf7473c8eefc00af708fd7aeb50380c4170dc2f2dc17"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConnectionModule-50b1734cdd34fefd5813fed5c8aef2e957286d0e8d4950f9ee691d47e69ad3f3615eb7e2793f749df5eddf7473c8eefc00af708fd7aeb50380c4170dc2f2dc17"' :
                                        'id="xs-injectables-links-module-ConnectionModule-50b1734cdd34fefd5813fed5c8aef2e957286d0e8d4950f9ee691d47e69ad3f3615eb7e2793f749df5eddf7473c8eefc00af708fd7aeb50380c4170dc2f2dc17"' }>
                                        <li class="link">
                                            <a href="injectables/ConnectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConnectionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DescriptionModule.html" data-type="entity-link" >DescriptionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DescriptionModule-77ba90d219e8aa77f8a05625c1f617debe609e3df0945fb995d0235cf70146bd9db0edb82a0d1176a65c520f3db9e9d87632cf030ea399a53a1435d2fab3d7ca"' : 'data-target="#xs-controllers-links-module-DescriptionModule-77ba90d219e8aa77f8a05625c1f617debe609e3df0945fb995d0235cf70146bd9db0edb82a0d1176a65c520f3db9e9d87632cf030ea399a53a1435d2fab3d7ca"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DescriptionModule-77ba90d219e8aa77f8a05625c1f617debe609e3df0945fb995d0235cf70146bd9db0edb82a0d1176a65c520f3db9e9d87632cf030ea399a53a1435d2fab3d7ca"' :
                                            'id="xs-controllers-links-module-DescriptionModule-77ba90d219e8aa77f8a05625c1f617debe609e3df0945fb995d0235cf70146bd9db0edb82a0d1176a65c520f3db9e9d87632cf030ea399a53a1435d2fab3d7ca"' }>
                                            <li class="link">
                                                <a href="controllers/DescriptionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DescriptionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DescriptionModule-77ba90d219e8aa77f8a05625c1f617debe609e3df0945fb995d0235cf70146bd9db0edb82a0d1176a65c520f3db9e9d87632cf030ea399a53a1435d2fab3d7ca"' : 'data-target="#xs-injectables-links-module-DescriptionModule-77ba90d219e8aa77f8a05625c1f617debe609e3df0945fb995d0235cf70146bd9db0edb82a0d1176a65c520f3db9e9d87632cf030ea399a53a1435d2fab3d7ca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DescriptionModule-77ba90d219e8aa77f8a05625c1f617debe609e3df0945fb995d0235cf70146bd9db0edb82a0d1176a65c520f3db9e9d87632cf030ea399a53a1435d2fab3d7ca"' :
                                        'id="xs-injectables-links-module-DescriptionModule-77ba90d219e8aa77f8a05625c1f617debe609e3df0945fb995d0235cf70146bd9db0edb82a0d1176a65c520f3db9e9d87632cf030ea399a53a1435d2fab3d7ca"' }>
                                        <li class="link">
                                            <a href="injectables/DescriptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DescriptionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventsModule.html" data-type="entity-link" >EventsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventsModule-a4c199e35b49900f0e98563ae6638d309ae224e9faeb6db2d0ee6faf413d75d93c616ba80df51db135df082acb57ff32dbd6d81a3bd41389623a8f93ad0b9e78"' : 'data-target="#xs-controllers-links-module-EventsModule-a4c199e35b49900f0e98563ae6638d309ae224e9faeb6db2d0ee6faf413d75d93c616ba80df51db135df082acb57ff32dbd6d81a3bd41389623a8f93ad0b9e78"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventsModule-a4c199e35b49900f0e98563ae6638d309ae224e9faeb6db2d0ee6faf413d75d93c616ba80df51db135df082acb57ff32dbd6d81a3bd41389623a8f93ad0b9e78"' :
                                            'id="xs-controllers-links-module-EventsModule-a4c199e35b49900f0e98563ae6638d309ae224e9faeb6db2d0ee6faf413d75d93c616ba80df51db135df082acb57ff32dbd6d81a3bd41389623a8f93ad0b9e78"' }>
                                            <li class="link">
                                                <a href="controllers/EventsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventsModule-a4c199e35b49900f0e98563ae6638d309ae224e9faeb6db2d0ee6faf413d75d93c616ba80df51db135df082acb57ff32dbd6d81a3bd41389623a8f93ad0b9e78"' : 'data-target="#xs-injectables-links-module-EventsModule-a4c199e35b49900f0e98563ae6638d309ae224e9faeb6db2d0ee6faf413d75d93c616ba80df51db135df082acb57ff32dbd6d81a3bd41389623a8f93ad0b9e78"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventsModule-a4c199e35b49900f0e98563ae6638d309ae224e9faeb6db2d0ee6faf413d75d93c616ba80df51db135df082acb57ff32dbd6d81a3bd41389623a8f93ad0b9e78"' :
                                        'id="xs-injectables-links-module-EventsModule-a4c199e35b49900f0e98563ae6638d309ae224e9faeb6db2d0ee6faf413d75d93c616ba80df51db135df082acb57ff32dbd6d81a3bd41389623a8f93ad0b9e78"' }>
                                        <li class="link">
                                            <a href="injectables/EventsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewsModule.html" data-type="entity-link" >NewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NewsModule-e6c6738f9a074ced184aa529c3e07aeb54e7e19668589f374ebb78bf93a87f0d69ea0da70b151e7e57984261646846c5d5b4a1280c0ee9f9fa8e2397c794b8ab"' : 'data-target="#xs-controllers-links-module-NewsModule-e6c6738f9a074ced184aa529c3e07aeb54e7e19668589f374ebb78bf93a87f0d69ea0da70b151e7e57984261646846c5d5b4a1280c0ee9f9fa8e2397c794b8ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NewsModule-e6c6738f9a074ced184aa529c3e07aeb54e7e19668589f374ebb78bf93a87f0d69ea0da70b151e7e57984261646846c5d5b4a1280c0ee9f9fa8e2397c794b8ab"' :
                                            'id="xs-controllers-links-module-NewsModule-e6c6738f9a074ced184aa529c3e07aeb54e7e19668589f374ebb78bf93a87f0d69ea0da70b151e7e57984261646846c5d5b4a1280c0ee9f9fa8e2397c794b8ab"' }>
                                            <li class="link">
                                                <a href="controllers/NewsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NewsModule-e6c6738f9a074ced184aa529c3e07aeb54e7e19668589f374ebb78bf93a87f0d69ea0da70b151e7e57984261646846c5d5b4a1280c0ee9f9fa8e2397c794b8ab"' : 'data-target="#xs-injectables-links-module-NewsModule-e6c6738f9a074ced184aa529c3e07aeb54e7e19668589f374ebb78bf93a87f0d69ea0da70b151e7e57984261646846c5d5b4a1280c0ee9f9fa8e2397c794b8ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NewsModule-e6c6738f9a074ced184aa529c3e07aeb54e7e19668589f374ebb78bf93a87f0d69ea0da70b151e7e57984261646846c5d5b4a1280c0ee9f9fa8e2397c794b8ab"' :
                                        'id="xs-injectables-links-module-NewsModule-e6c6738f9a074ced184aa529c3e07aeb54e7e19668589f374ebb78bf93a87f0d69ea0da70b151e7e57984261646846c5d5b4a1280c0ee9f9fa8e2397c794b8ab"' }>
                                        <li class="link">
                                            <a href="injectables/NewsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ConnectionController.html" data-type="entity-link" >ConnectionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DescriptionController.html" data-type="entity-link" >DescriptionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventsController.html" data-type="entity-link" >EventsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NewsController.html" data-type="entity-link" >NewsController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Connection.html" data-type="entity-link" >Connection</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Description.html" data-type="entity-link" >Description</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Event.html" data-type="entity-link" >Event</a>
                                </li>
                                <li class="link">
                                    <a href="entities/News.html" data-type="entity-link" >News</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppConfig.html" data-type="entity-link" >AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateConnectionDto.html" data-type="entity-link" >CreateConnectionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDescriptionDto.html" data-type="entity-link" >CreateDescriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEventDto.html" data-type="entity-link" >CreateEventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNewsDto.html" data-type="entity-link" >CreateNewsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorHandler.html" data-type="entity-link" >ErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateConnectionDto.html" data-type="entity-link" >UpdateConnectionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDescriptionDto.html" data-type="entity-link" >UpdateDescriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEventDto.html" data-type="entity-link" >UpdateEventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNewsDto.html" data-type="entity-link" >UpdateNewsDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConnectionService.html" data-type="entity-link" >ConnectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DescriptionService.html" data-type="entity-link" >DescriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventsService.html" data-type="entity-link" >EventsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsService.html" data-type="entity-link" >NewsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});