var Ellipsoid = /** @class */ (function () {
    function Ellipsoid() {
        this.bindHtml();
        this.handleEvent();
    }
    Ellipsoid.prototype.bindHtml = function () {
        this.cheese = document.querySelector("#cheese");
        this.cheesed = document.querySelector("#cheesed");
        this.cheesee = document.querySelector("#cheesee");
        this.cheesef = document.querySelector("#cheesef");
        this.calcButton = document.querySelector("#calcButton");
    };
    Ellipsoid.prototype.handleEvent = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.startCalc();
        });
    };
    Ellipsoid.prototype.startCalc = function () {
        var _a, _b, _c;
        var cheese = Number((_a = this.cheese) === null || _a === void 0 ? void 0 : _a.value);
        var cheesed = Number((_b = this.cheesed) === null || _b === void 0 ? void 0 : _b.value);
        var cheesee = Number((_c = this.cheesee) === null || _c === void 0 ? void 0 : _c.value);
        var volume = this.calcVolume(cheese, cheesed, cheesee);
        this.renderResult(volume);
    };
    Ellipsoid.prototype.calcVolume = function (cheese, cheesed, cheesee) {
        return (4 / 3) * Math.PI * cheese * cheesed * cheesee;
    };
    Ellipsoid.prototype.renderResult = function (volume) {
        if (this.cheesef) {
            this.cheesef.value = String(volume);
        }
    };
    return Ellipsoid;
}());
new Ellipsoid();
