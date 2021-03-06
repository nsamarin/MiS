define([], function () {

    var Helpers = {
        _populateEventNames: function (events) {
            var self = this;
            this.$event = $("#event");
            this.$date = $("#date");
            this.$time = $("#time");
            this.$discount = $("#discount");
            this.$minppl = $("#minppl");
            this.$expiry = $("#expiry");

            this.events = events;


            $.each(this.events.toJSON(), function (index, item) {
                self.$event.append($('<option>', {
                    value: item.name,
                    text: item.name
                }));
            });

            this.$event.change(function () {
                    self._populateEventDates();
                }
            )
        },

        _populateEventDates: function () {
            var self = this;
            this.$date.unbind(); //important

            this.$date.html('<option selected value="default">Select Date</option>');
            this.$time.html('<option selected value="default">Select Time</option>');

            //set defaults
            this.$discount.removeAttr("value");
            this.$minppl.removeAttr("value");
            this.$expiry.html("x");

            var eventName = this.$event.val();

            this.event = this.events.find(function (item) {
                return item.get("name") == eventName;
            });

            if (!this.event) return;

            for (var property in this.event.toJSON().dates) {
                self.$date.append($('<option>', {
                    value: property,
                    text: property
                }));
            }

            this.$discount.attr("value", this.event.toJSON().discount);
            this.$minppl.attr("value", this.event.toJSON().number);
            this.$expiry.html(this.event.toJSON().expires);

            //this.$discount.html($('<option>', {
            //    value: self.event.toJSON().discount,
            //    text: self.event.toJSON().discount
            //}));


            this.$date.change(function () {
                    self._populateEventTimes();
                }
            )
        },
        _populateEventTimes: function () {
            var self = this;
            this.$time.html('<option selected value="default">Select Time</option>');
            var eventDate = this.$date.val();
            if (!this.event.toJSON().dates[eventDate]) return;

            $.each(this.event.toJSON().dates[eventDate], function (index, item) {
                self.$time.append($('<option>', {
                    value: item,
                    text: item
                }));
            });
        }
    };

    return Helpers;
});

