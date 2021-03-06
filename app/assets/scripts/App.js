
import $ from 'jquery';

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import OpenModal from "./modules/OpenModal";
import SideBarFixed from "./modules/SideBarFixed";

var mobileMenu = new MobileMenu();

new RevealOnScroll($('.reveal-section'), '85%');

var stickyHeader = new StickyHeader();

var openModal = new OpenModal();

var sideBarFixed = new SideBarFixed();  
