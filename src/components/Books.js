import './books.css'

function Books() {
  return (
    <div className='books'>
      
      <div class="heading-block">
      <img class="bookIcon" src="https://cdn-icons-png.flaticon.com/128/29/29302.png" alt="BOOK ICON" />
      <h1 class="heading"> My favourite books:</h1>
    </div>
 
  <section class="book-show">
    <div class="book-container">
      <a target="_blank" href="https://books.google.co.in/books/about/Programming_In_C_A_Practical_Approach.html?id=R1zOngEACAAJ&redir_esc=y"><img class="book"
          src="https://images-eu.ssl-images-amazon.com/images/I/41L8Qz69cxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="C Programming- by Ajay Mittal" /></a>
    </div>
    <div class="description-container">
      <h3>"Programming In C :A Practical Approach"</h3>
      <h3 class="publisherName">-Written By Ajay Mittal, Pearson Education India, 2010.</h3>
      <p class="views">This book on C Programming has a perfect blend of theory as well as practicals.</p>
      <p class="views">The book contains over 200 find the output, 300 MCQs, 60 programming exercises and over 450 test yourself questions to test the student's understanding. </p>
      <p class="views">This Book covers a lot of concept and syntatical rule about C Programming. I have learned a lot about how actually programming language works ,internally ,by this book. </p>
      <p class="views">This book discusses the behavior of the programs with regards to compilers like Borland Turbo C 3.0, Borland Turbo C 4.5 and MS VC++ 6.0</p>
    </div>
  </section>
  <section class="book-show">
    <div class="book-container">
      <a target="_blank" href="https://eloquentjavascript.net/"><img class="book" src="https://images-eu.ssl-images-amazon.com/images/I/51InjRPaF7L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript Book Image" /></a>
    </div>
    <div class="description-container">
      <h3>"Eloquent JavaScript"</h3>
      <h3 class="publisherName">-Written by Marijn Haverbeke.</h3>
      <p class="views">This is a book about JavaScript programming.</p>
      <p class="views">A concise and balanced mix of principles and pragmatics. </p>
      <p class="views">Eloquent JavaScript goes beyond the cut-and-paste scripts of the recipe books and teaches you to write code that's elegant and effective.</p>
      <p class="views">This book start with the basics of programming, and have a knowledgable content of how to use variables, control structures, functions, and data structures.</p>
      <p class="views">It also covers real JavaScript artistry: higher-order functions, closures, and object-oriented programming.</p>
    </div>
  </section>
  <section class="book-show">
    <div class="book-container">
      <a target="_blank" href="https://books.google.co.in/books/about/Data_Structures_and_Algorithms_Made_Easy.html?id=Mes0nwEACAAJ&redir_esc=y"><img class="book"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473390844l/31923984.jpg" alt="Data Structures and Algorithms Made Easy" /></a>
    </div>
    <div class="description-container">
      <h3>"Data Structures and Algorithms Made Easy"</h3>
      <h3 class="publisherName">-Written By Karumanchi Narasimha.</h3>
      <p class="views">Data Structures and Algorithms Made Easy is a book that offers solutions to complex data structures and algorithms.</p>
      <p class="views">There are multiple solutions for each problem and the book is coded in C/C++, it comes handy as an interview and exam guide .</p>
      <p class="views">A great book with respect to topics like DP and Greedy Algorithms.</p>
    </div>
  </section>
    </div>
  );
}

export default Books
