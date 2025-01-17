class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(number) {
		this._state = number;
		if (this._state < 0) {
			this._state = 0;
		}
		if (this._state > 100) {
			this._state = 100;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {

	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
    }
}

class NovelBook extends Book {
	type = "novel";
}

class FantasticBook extends Book {
	type = "fantastic";
}

class DetectiveBook extends Book {
	type = "detective";
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let findBook = this.books.find((element) => element[type] === value);
		if (findBook) {
			return findBook;
		} else {
			return null;
		}
	}

	giveBookByName(bookName) {

		let findBookDel = this.books.find((el) => el.name === bookName);
		let index = this.books.indexOf(findBookDel);

		if (findBookDel) {
			this.books.splice(index, 1);
			return findBookDel;
		} else {
			return null;
		}
	}

}


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}


	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		};

		if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = [mark];
		} else {
			this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		} else {
			let sumMarks = this.marks[subject].reduce((acc, item) => acc + item, 0);
			return sumMarks / this.marks[subject].length;
		}
	}

	getAverage() {

		if (Object.keys(this.marks).length === 0) {
			return 0;
		}

		let sum = 0;
		for (let i = 0; i < Object.keys(this.marks).length; i++) {
			sum += this.getAverageBySubject(Object.keys(this.marks)[i])
		}
		return sum / Object.keys(this.marks).length;

	}
}


