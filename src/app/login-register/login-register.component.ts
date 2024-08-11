import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {faFacebook, faGithub, faGoogle, faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent implements OnInit {
  protected readonly faGoogle = faGoogle;
  protected readonly faFacebook = faFacebook;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;

  isActive = false; // Track container activation state
  isSignInFormVisible = true; // Track sign-in form visibility
  isForgetPasswordFormVisible = false; // Track forget password form visibility

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (window.innerWidth > 768) {
      this.isActive = false;
      this.isSignInFormVisible = true;
    }
    this.route.url.subscribe(urlSegments => {

      if (urlSegments.length > 0) {
        const routePath = urlSegments[0].path;

        if (routePath === 'login-register') {
          console.log("login-register")
          this.isActive = false;
        } else if (routePath === 'forgot-password') {
          console.log("forgetpassword")
          this.isSignInFormVisible = false;
          this.isForgetPasswordFormVisible = true;
        } else if (routePath === 'register') {
          console.log("register")
          this.isActive = true;
        }
      }
    });
  }

  toggle() {
    this.isActive = !this.isActive;
  }

  showSignInForm() {
    this.isSignInFormVisible = true;
    this.isForgetPasswordFormVisible = false;
  }


  handleSignUp() {
    // Handle sign-up form submission in your Angular way
    // (e.g., call a service to send data to your backend)
  }

  handleSignIn() {
    // Handle sign-in form submission in your Angular way
    // (e.g., call a service to authenticate the user)
  }

  handleForgetPassword() {
    // Handle forget password form submission in your Angular way
    // (e.g., call a service to send a password reset link)
  }
}
