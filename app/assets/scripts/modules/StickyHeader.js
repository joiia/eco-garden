import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader { 
    constructor() {
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('#main-content');
        this.createHeaderWaypoints();
        this.pageSection = $('#main-content');
        this.createPageSectionWaypoints();
        this.primaryNavLink = $('.primary-nav__link');
        this.addSmoothScroll();
    }
    
    addSmoothScroll() {
        this.primaryNavLink.smoothScroll();
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
    
    createPageSectionWaypoints() {
        var that = this;
        this.pageSection.each(function(){
            var currentSection = this;
            
            var pageSectionWaypointDown = new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if(direction == "down") {
                        var currentSectionLink = currentSection.getAttribute('data-matching-link');
                        that.primaryNavLink.removeClass('is-current-link');
                        $(currentSectionLink).addClass('is-current-link');
                    }
                },
                offset: "18%"
            });
            
             var pageSectionWaypointUp = new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if(direction == "up") {
                        var currentSectionLink = currentSection.getAttribute('data-matching-link');
                        that.primaryNavLink.removeClass('is-current-link');
                        $(currentSectionLink).addClass('is-current-link');
                    }
                },
                offset: "-40%"
            });
            
        });
       
    }
    
    
    
}

export default StickyHeader;