const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let status=0;

	for(let i=0;i<library.length;i++)
		{
			if (library[i].readingStatus===true) {

				status++;
				
			}
		}
	return status;
};

const booksRead = numberOfBooksRead();

console.log(`Number of books read: ${booksRead}`);



// Do not change the code below

alert(numberOfBooksRead());
