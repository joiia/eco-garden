import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader { 
    constructor() {
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('#main-content');
        this.createHeaderWaypoints();
        this.pageBanner = $('#page-banner');
        this.addSmoothScroll();
    }
    
    addSmoothScroll() {
        
      $(document).one('scroll', function() {
          
          console.log($(document).scrollTop());
          
      if ($(document).scrollTop() <= $(window).height()) {
            $.smoothScroll({
            scrollTarget: '#main-content',
            offset: -80
        });
      }
      return false;
      });
       
    };
    
    createHeaderWaypoints() {
        var that = this;
        var headerWaypoint = new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function() {       
                that.siteHeader.toggleClass('site-header--fixed');
            },
            offset: 80
        });
    }
    
    
    
    
}

export default StickyHeader;