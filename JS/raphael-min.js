$(document).ready(function () {
  {
    function Rellotge() {
      $(document).trigger("tiempo", [new Date()]);
      setInterval(() => {
        $(document).trigger("tiempo", [new Date()]);
      }, 1000);
    }
    let TextVisor = function () {
      let t = (this.t = this);
      let tick = function (event, extra) {
        t.pinta(event, extra);
      };
      this.pinta = function (event, extra) {
        $("#rellotge").html(t.format_string(extra));
      };
      this.format_string = function (dat) {
        d = dat;
        hora = d.getHours();
        minuto = d.getMinutes();
        if (minuto <= 9) minuto = "0" + minuto;
        segundo = d.getSeconds();
        if (segundo <= 9) segundo = "0" + segundo;
        return hora + ":" + minuto + ":" + segundo;

        $(document).bind("tiempo", tick);
      };
    };
    let RaphaelVisor = function (object_id) {
      let t = (this.t = this);
      let pt = (this.pt = new Raphael(
        document.getElementById(object_id),
        200,
        200
      ));
      //dibujamos el reloj;
      let PX = 100;
      let PY = 100;
      let tick = function (event, d) {
        h = d.getHours();
        if (h > 12) h = h / 2;
        m = d.getMinutes();
        // añadimos a la hora la parte proporcional en minutos
        h += (m * 100) / 60 / 100;
        // transformamos hora a ángulos
        s = d.getseconds();
        ah = (h * 360) / 12;
        am = (m * 360) / 60;
        as = (s * 360) / 60;
        neteja();
        // console.info(h,m,s, ">>>", ah, am, as)
      };
    };
  }
});
