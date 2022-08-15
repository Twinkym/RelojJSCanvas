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
        minut = d.getMinutes();
        if (minut <= 9) minut = "0" + minut;
        segon = d.getSeconds();
        if (segon <= 9) segon = "0" + segon;
        return hora + ":" + minut + ":" + segon;

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
        t.hora = pinta_agulla(50, ah);
        t.minuto = pinta_agulla(60, am);
        t.segon = pinta_agulla(70, as);
        t.hora.attr({ "stroke-width": 7, stroke: "#ac360b" });
        t.minut.attr({ "stroke-width": 5, stroke: "#a0573c" });
        t.segon.attr({ "stroke-width": 3, stroke: "#666666" });
      };
      let neteja = function () {
        if (t.hora) {
          t.hora.remove();
          if (t.minut) {
            t.minut.remove();
          }
        }
      };
    };
  }
});
