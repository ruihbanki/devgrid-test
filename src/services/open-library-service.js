export function search(keywords) {
    const url = `http://openlibrary.org/search.json?title=${keywords}`;
    return new Promise( (resolve, reject) => {
        fetch(url).then(
            (response) => {
                return response.json();
            }
        ).then(
            (data) => {
                resolve(data);
            }
        );
    });
};

export function getBookSrcImage(coverI) {
    return `https://covers.openlibrary.org/b/id/${this.props.book.cover_i}-S.jpg`;
}

// TODO problem: https://github.com/internetarchive/openlibrary/issues/220
export function findByIsbn(isbn) {
    const url = `https://openlibrary.org/api/books?jscmd=data&bibkeys=ISBN:${isbn}`;
    return new Promise( (resolve, reject) => {
        fetch(url).then(
            (response) => {
                return response.json();
            }
        ).then(
            (data) => {
                resolve(data);
            }
        );
    });
};