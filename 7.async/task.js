class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		}

		let findClock = this.alarmCollection.some((alarm) => alarm.time === time);

		if (findClock) {
			console.warn('Уже присутствует звонок на это же время')
		}
		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true,
		});
	}

	removeClock(time) {

		this.alarmCollection.forEach(() => {
			this.alarmCollection.filter((el) => {
				if (el.time === time) {
					let index = this.alarmCollection.indexOf(el);
					this.alarmCollection.splice(index, 1);
				}

			})
		})


	}

	getCurrentFormattedTime() {

		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}

		let intervalId = setInterval(() =>
			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
					alarm.canCall === false;
					alarm.callback();
				}
			}), 1000);

		this.intervalId = intervalId;
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((alarm) => {
			alarm.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}


// clock = new AlarmClock();

// const callback = f => f;
// clock.addClock("16:45", callback);
// clock.addClock("16:45", callback);
// clock.addClock("16:46", callback);
// clock.removeClock("16:45");



// clock.getCurrentFormattedTime();
// clock.start();