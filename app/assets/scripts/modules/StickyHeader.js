import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader { 
    constructor() {
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('#main-content');
        this.createHeaderWaypoints();
    }
    
    createHeaderWaypoints() {
        var that = this;
        var headerWaypoint = new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function() {       
                that.siteHeader.toggleClass('site-header--fixed');
            }
        });
    }
    
    
}

export default StickyHeader;