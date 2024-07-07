/**
 * Invoice Ninja (https://invoiceninja.com)
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license 
 */class n{constructor(e,t){this.publicKey=e,this.loginId=t,this.cardHolderName=document.getElementById("cardholder_name"),this.cardButton=document.getElementById("card_button")}handleAuthorization(){if(s=="1"&&document.getElementById("cvv").value.length<3){var e=$("#errors");e.show().html("<p>CVV is required</p>"),document.getElementById("card_button").disabled=!1,document.querySelector("#card_button > svg").classList.add("hidden"),document.querySelector("#card_button > span").classList.remove("hidden");return}var t=$("#my-card"),a={};a.clientKey=this.publicKey,a.apiLoginID=this.loginId;var d={};d.cardNumber=t.CardJs("cardNumber").replace(/[^\d]/g,""),d.month=t.CardJs("expiryMonth").replace(/[^\d]/g,""),d.year=t.CardJs("expiryYear").replace(/[^\d]/g,""),d.cardCode=document.getElementById("cvv").value.replace(/[^\d]/g,"");var r={};return r.authData=a,r.cardData=d,document.getElementById("card_button").disabled=!0,document.querySelector("#card_button > svg").classList.remove("hidden"),document.querySelector("#card_button > span").classList.add("hidden"),Accept.dispatchData(r,this.responseHandler),!1}responseHandler(e){if(e.messages.resultCode==="Error"){var t=0,a=$("#errors");a.show().html("<p>"+e.messages.message[t].code+": "+e.messages.message[t].text+"</p>"),document.getElementById("card_button").disabled=!1,document.querySelector("#card_button > svg").classList.add("hidden"),document.querySelector("#card_button > span").classList.remove("hidden")}else e.messages.resultCode==="Ok"&&(document.getElementById("dataDescriptor").value=e.opaqueData.dataDescriptor,document.getElementById("dataValue").value=e.opaqueData.dataValue,document.getElementById("server_response").submit());return!1}handle(){return this.cardButton.addEventListener("click",()=>{this.cardButton.disabled=!this.cardButton.disabled,this.handleAuthorization()}),this}}const c=document.querySelector('meta[name="authorize-public-key"]').content,o=document.querySelector('meta[name="authorize-login-id"]').content,s=document.querySelector('meta[name="authnet-require-cvv"]').content;new n(c,o).handle();