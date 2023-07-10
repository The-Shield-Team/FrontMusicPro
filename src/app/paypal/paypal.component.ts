import { Component, OnInit } from "@angular/core";
import { ICreateOrderRequest, IPayPalConfig, NgxPayPalModule } from "ngx-paypal";

@Component({
  selector: "app-paypal",
  templateUrl: "./paypal.component.html",
  styleUrls: ["./paypal.component.css"]
})
export class PaypalComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  // public showPaypalButtons = false;


  ngOnInit() {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: "USD",
      clientId: "AQ7SXsaf2IiNjFYPOBGZdFDpdCNZcyUS3c3MDpnCq4gYKQm5w4kWAHXUt9ifiV-9ndgmTiK98A5jEex4",
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: "150000",
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: "150000"
                  }
                }
              },
              items: [
                {
                  name: "Enterprise Subscription",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "USD",
                    value: "150000"
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data, actions) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: (data: any) => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
        // this.showSuccess = true;
      },
      onCancel: (data: any, actions: any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err: any) => {
        console.log("OnError", err);
      },
      onClick: (data: any, actions: any) => {
        console.log("onClick", data, actions);
      }
    };
  }

  // pay() {
  //   this.showPaypalButtons = true;
  // }

  // back() {
  //   this.showPaypalButtons = false;
  // }
}
