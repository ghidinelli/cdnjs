(function () {
    var lang = {
            months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            longDateFormat : {
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY HH:mm",
                LLLL : "dddd D MMMM YYYY HH:mm"
            },
            meridiem : {
                AM : 'AM',
                am : 'am',
                PM : 'PM',
                pm : 'pm'
            },
            relativeTime : {
                future : "dans %s",
                past : "il y a %s",
                s : "quelques secondes",
                m : "une minute",
                mm : "%d minutes",
                h : "une heure",
                hh : "%d heures",
                d : "un jour",
                dd : "%d jours",
                M : "un mois",
                MM : "%d mois",
                y : "une année",
                yy : "%d années"
            },
            ordinal : function (number) {
                return number === 1 ? 'er' : 'ème';
            }
        };

    // Node
    if (typeof module !== 'undefined') {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('fr', lang);
    }
}());
