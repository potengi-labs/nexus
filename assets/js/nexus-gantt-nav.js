let activeSlideNumber = 0;

webix.protoUI(
  {
    name: "navbar",
    defaults: {
      height: 112,
      css: "navbar",
      template: function (obj) {
        var readMore = obj.readmore
          ? "<span><a class='btn-contour' href='" +
            obj.readmore +
            "' target='_blank'>Read More</a></span>"
          : "";

        var navigation = "";
        for (var i = 0; i < obj.allDemos.length; i++) {
          var active;
          
          if(obj.allDemos[i].name == obj.name){
            active = "nav-dot-active";

            activeSlideNumber = i;
          } else{

            active = "";

          }

          navigation +=
            "<div class='swiper-slide " + active + "'><a href='../" +
            obj.allDemos[i].name +
            "/' class='nav-dot " +
            active +
            "'><span class='nav-dot__picture'><picture><source srcset='/assets/demos/nav/" + obj.allDemos[i].name + ".webp' /><img src='/assets/demos/nav/" + obj.allDemos[i].name + ".png' alt='' class='nav-dot__img' /></picture></span>\
									<span class='nav-tooltip'>" +
            obj.allDemos[i].title +
            "</span>\
								</a></div>";
        }

        return (
          "<div class='nav-inner'>\
						<div class='nav-panel-wrapper'>\
              <div class='nav-panel js-nav'>\
                <div class='nav-dots-wrap swiper-wrapper'>" + navigation + "</div>\
              </div>\
              <div class='slider-arrow prev'><svg class='arrow' xmlns='http://www.w3.org/2000/svg' ><path class='arrow line' d='M17.125 10c0 .4-.396.791-.792.784H5.217l3.988 4.03a.665.665 0 0 1 .002.93.642.642 0 0 1-.844.066l-.072-.064-5.226-5.28a.665.665 0 0 1-.062-.858l.062-.073 5.226-5.281a.641.641 0 0 1 .916.002c.23.234.25.6.06.856l-.062.074-3.98 4.022h11.108c.462 0 .792.355.792.792Z'/></svg></div>\
              <div class='slider-arrow next'><svg class='arrow' xmlns='http://www.w3.org/2000/svg' ><path class='arrow line' d='M17.125 10c0 .4-.396.791-.792.784H5.217l3.988 4.03a.665.665 0 0 1 .002.93.642.642 0 0 1-.844.066l-.072-.064-5.226-5.28a.665.665 0 0 1-.062-.858l.062-.073 5.226-5.281a.641.641 0 0 1 .916.002c.23.234.25.6.06.856l-.062.074-3.98 4.022h11.108c.462 0 .792.355.792.792Z'/></svg></div>\
            </div>\
						<div class='nav-buttons'>" + readMore + "<span><a class='btn' href='" + obj.link + "' target='_blank'>Download</a></span></div>\
					</div>"
        );
      },
    },

    value_setter: function (value) {
      var index = 0;
      for (var i = 0; i < this.demos.length; i++)
        if (this.demos[i].name == value) index = i;

      this.data = this.demos[index];
      this.data.allDemos = this.demos;
      this.data.next = this.demos[(index + 1) % this.demos.length];
      this.data.prev = this.demos[
        (index - 1 + this.demos.length) % this.demos.length
      ];
    },

    demos: [
      {
        name: "scheduler",
        title: "Scheduler",
        link: "/scheduler/download.html",
        readmore: "/scheduler/"
      },
      {
        name: "gantt",
        title: "Gantt",
        link: "/gantt/download.html",
        readmore: "/gantt/"
      },
      {
        name: "spreadsheet",
        title: "Spreadsheet",
        link: "/spreadsheet/download.html",
        readmore: "/spreadsheet/"
      },
      { 
        name: "kanban",
        title: "Kanban", 
        link: "/kanban/download.html",
        readmore: "/kanban/"
      },
      { 
        name: "pivot", 
        title: "Pivot", 
        link: "/pivot/download.html",
        readmore: "/pivot/" 
      },      
      {
        name: "filemanager",
        title: "File Manager",
        link: "/filemanager/download.html",
        readmore: "/filemanager/"
      },
      {
        name: "document-manager",
        title: "Document Manager",
        link: "/widgets/document-manager/download.html",
        readmore: "/widgets/document-manager/"
      },
      {
        name: "rich-text-editor",
        title: "Rich Text Editor",
        link: "/rich-text-editor/download.html",
        readmore: "/rich-text-editor/"
      },
      {
        name: "report-manager",
        title: "Report Manager",
        link: "/widgets/report-manager/download.html",
        readmore: "/widgets/report-manager/"
      },
      {
        name: "chat-messenger",
        title: "Chat / Messenger",
        link: "/widgets/chat-messenger/download.html",
        readmore: "/widgets/chat-messenger/"
      },
      {
        name: "user-manager",
        title: "User Manager",
        link: "/widgets/user-manager/download.html",
        readmore: "/widgets/user-manager/"
      },
      {
        name: "query",
        title: "Query",
        link: "/widget/querybuilder/download.html",
        readmore: "/widget/querybuilder/"
      },
      {
        name: "js-diagram",
        title: "Diagram Library",
        link: "/js-diagram/download.html",
        readmore: "/js-diagram/"
      },
      {
        name: "desktop",
        title: "Desktop",
        link: "/desktop/download.html",
        readmore: "/desktop/"
      },
      {
        name: "todolist",
        title: "To Do List",
        link: "/todolist/download.html",
        readmore: "/todolist/"
      },
      {
        name: "bank-app",
        title: "Bank App",
        link: "/download/",
        readmore: "/demo/bank-app/",
      },
      {
        name: "booking-app",
        title: "Booking App",
        link: "/download/",
        readmore: "/demo/booking-app/",
      },
      {
        name: "team-progress",
        title: "Team Progress App",
        link: "/download/",
        readmore: "/demo/team-progress/",
      },
      {
        name: "student-dashboard",
        title: "Student Dashboard",
        link: "/download/",
        readmore: "/demo/student-teachers-dashboard/",
      },
      {
        name: "qa-dashboard",
        title: "QA Dashboard",
        link: "/download/",
        readmore: "/demo/qa-dashboard/",        
      },      
      {
        name: "web-desktop",
        title: "Web Desktop UI",
        link: "/download/",
        readmore: "/demo/web-desktop/",
      },
      {
        name: "geo-explorer",
        title: "Geo Explorer",
        link: "/download/",
        readmore: "/demo/geo-explorer/",
      },
    ],

    $init: function(config) {
      setTimeout(function(){
        let swiperTitleIntro = new Swiper(".js-nav", {
          observer: true,
          observeParents: true,
          slidesPerView: "auto",
          navigation: {
            prevEl: ".slider-arrow.prev",
            nextEl: ".slider-arrow.next"
          },
          initialSlide: activeSlideNumber
        });

        //console.log(activeSlideNumber);

        //swiperTitleIntro.slideTo(activeSlideNumber);
      }, 1);
      
    },
  },
  webix.ui.template
);
