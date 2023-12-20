import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

// declare var $: any;

@Component({
    selector: "app-root",
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: "./app.html",
    styleUrl: "./app.sass"
})
export class AppComponent {
    public title = "PizzeriaExampleFrontend";

    public constructor()
    {
        // jQuery test

        $(() =>
        {
            // It works.
            console.log("jQuery version: " + $().jquery);
            jQuery("#navbarText span").text("Span text changed via jQuery!");
            // console.log(jQuery("#testjQuery"));
            // jQuery("#testjQuery").text("value changed!");
        });
    }
}
