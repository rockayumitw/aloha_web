import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export const stickyMixins =  {
    data (){
        return {
            stickyPos: 500,
            limitPos: 1000,
            scrolled: false,
            lastPos: 0,
            isActive: false,        // 判斷卷軸滑道位置
        }
    },
    mounted(){
        this.Resize()
    },
    methods: {
        Resize (){
            // lg | md | sm | xs
            if(window.innerWidth > 992 ){
                this.openInput = false
                this.isDev = 'lg'
            }
            if(window.innerWidth < 992 && window.innerWidth > 767){
                this.isDev = 'md'
                this.isOpenShareBtn = true
            }
            if(window.innerWidth < 767 && window.innerWidth > 575){
                this.openInput = false
                this.isDev = 'sm'
            }
            if(window.innerWidth < 575 && window.innerWidth > 321){
                this.openInput = false
                this.isDev = 'xs'
            }
            if(window.innerWidth < 321){
                this.openInput = false
                this.isDev = 'xxs'
            }
            this.stickyButtonPos()
        },
        ScrollAnimation (){
            this.scrollY = window.scrollY;
            this.stickyButtonPos()
            if (window.scrollY > 100) {
                this.isActive = true;
            }
            if (window.scrollY < 100) {
                this.isActive = false;
            }
            if (this.lastPos < window.scrollY && this.stickyPos < window.scrollY) {
                this.isActive = true;
            }
            if (this.lastPos < window.scrollY && this.limitPos < window.scrollY) {
                if (window.innerWidth < 992 ) {
                    return false;
                }
                this.scrolled = true;
            }
            if (this.lastPos > window.scrollY) {
                this.scrolled = false;
            }
            this.lastPos = window.scrollY;
        },
    },
    created (){
        if (process.client) {
            window.addEventListener("scroll", this.ScrollAnimation);
            window.addEventListener("resize", this.Resize);
        }
    },
    destroyed (){
        if (process.client) {
            window.addEventListener("scroll", this.ScrollAnimation);
            window.addEventListener("resize", this.Resize);
            // window.removeEventListener("scroll", this.ScrollAnimation);
        }
    },
}