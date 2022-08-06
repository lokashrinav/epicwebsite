(function() {
 const messages = JSON.parse("{\"uro5mA\":\"Blur\",\"TcphGg\":\"Timer played with {0, plural, one {# minute} other {# minutes}} and {1, plural, one {# second} other {# seconds}} remaining\",\"wXGXXA\":\"Start timer\",\"enXwmA\":\"Quiet\",\"24/B0Q\":\"Close\",\"Df0GgQ\":\"Time is up\",\"unwCJw\":\"Bubbles\",\"nhc/4g\":\"Comment\",\"RS32iw\":\"Mic drop\",\"YsJd7Q\":\"{0, number} / {1, number}\",\"MrgF4w\":\"Next page\",\"kCJlrA\":\"Timer\",\"WwdX8A\":\"Timer set for {0, plural, one {# minute} other {# minutes}} and {1, plural, one {# second} other {# seconds}}\",\"R7Fh2Q\":\"Stop drumroll\",\"r/ivVA\":\"Close blur\",\"odq/sw\":\"Open presenter view\",\"jdPy5g\":\"Magic Shortcuts\",\"N+zewA\":\"Close\",\"PYbvjQ\":\"LIVE\",\"UpbIwg\":\"Share\",\"GWea5Q\":\"Go to next page\",\"L2qZMA\":\"Timer played with {0, plural, one {# second} other {# seconds}} remaining\",\"yJA10A\":\"Close timer\",\"3JtHQw\":\"Confetti\",\"uq2EBw\":\"Curtain call\",\"drIEIQ\":\"Pause timer\",\"SjaqRg\":\"Exit full screen\",\"o6BA1Q\":\"Confetti effect plays\",\"R4SSJw\":\"Timer set for {0, plural, one {# second} other {# seconds}}\",\"8Gn/GQ\":\"Close\",\"ssVZuQ\":\"Timer paused with {0, plural, one {# second} other {# seconds}} remaining\",\"umVUwA\":\"Back to first page\",\"GiTizQ\":\"Timer paused with {0, plural, one {# minute} other {# minutes}} and {1, plural, one {# second} other {# seconds}} remaining\",\"laV+eg\":\"Pause autoplay\",\"KAcj/w\":\"Reset timer\",\"iaHyog\":\"Previous page\",\"j9W7Cg\":\"Unveil curtain\",\"3UeoJw\":\"Go to previous page\",\"ctIE0w\":\"Thumbnail view\",\"4wxcrQ\":\"Start autoplay\",\"Q5EQOg\":\"Present full screen\",\"sw+stg\":\"Page {0, number} of {1, number}.\",\"qso+5Q\":\"Drumroll\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["en"] = strings["en"] ? Object.assign(strings["en"], messages) : messages;
})();