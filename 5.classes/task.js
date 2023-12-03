class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
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
    constructor (name,releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name,releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
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
    constructor (name) {
      this.name = name;
      this.books = [];
    }

    addBook(book)  {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
   
    findBookBy(type, value) {
       let findBook = this.books.find((element) => element[type]=== value);
        if(!findBook[type] === 0) {
            return findBook.name;
        } else
            return null;

    }

    giveBookByName(bookName){
       
        if (this.books.find((el) => el[bookName] === bookName)){
            delete this.books[el];
        } else
         return null;

    }
}
