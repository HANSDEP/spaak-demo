// The Neople Chat widget, the way a customer embeds it: one script tag from the widget's admin page.
const WIDGET_KEY = "";
if (WIDGET_KEY) {
    const script = document.createElement("script");
    script.src = "https://chat.endpoints.neople-chat.cloud.goog/v1/widget.js";
    script.dataset.widget = WIDGET_KEY;
    script.async = true;
    document.head.append(script);
}
