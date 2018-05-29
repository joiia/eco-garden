import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class SideBarFixed {
    constructor() {
        this.sidebar = $('.sidebar--nav');
        this.topTriggerElement = $('#main-content');
        this.bottomTriggerElement = $('.other-products');
        this.offcetTop = 80 - ($('.sidebar-area').innerHeight());
        this.offcetBottom = $('.sidebar--nav').innerHeight() + 140;
        this.sidebarWidth = $('.sidebar-area').width();
        this.createWaypoints();
        this.setSidebarWidth();
    }
    
    createWaypoints() {
        var that = this;
        var topWaypoint = new Waypoint({
            element: this.topTriggerElement[0],
            handler: function() {
               that.sidebar.toggleClass('sidebar--nav--fixed');
            },
            offset: this.offcetTop
        });
        var bottomWaypoint = new Waypoint({
            element: this.bottomTriggerElement[0],
            handler: function() {
               that.sidebar.toggleClass('sidebar--nav--fixed');
            },
            offset: this.offcetBottom
        });
    }
    
    setSidebarWidth() {
        
        if ($(window).width() > 991) {
            this.sidebar.innerWidth(this.sidebarWidth);
        }
        
    }
}

export default SideBarFixed;