import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './shared';
import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(
            {
                apiKey: "AIzaSyBMi-6kwkd-HvNKpU7lCaSwTPlkJhov3PU",
                authDomain: "myrpgt.firebaseapp.com",
                databaseURL: "https://myrpgt.firebaseio.com",
                projectId: "myrpgt",
                storageBucket: "",
                messagingSenderId: "2948701179"
            }
        ),
        
        AngularFireAuthModule
        
    ],
    declarations: [AppComponent],
    providers: [AuthGuard , LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {}

