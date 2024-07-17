function findStudentIndex(students, searchStudent) {
  let left = 0;
  let right = students.length - 1;
  let result = -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (students[middle] === searchStudent) {
      result = middle;
      break;
    } else if (students[middle] < searchStudent) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return result;
}

let studentsArray = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

console.log(findStudentIndex(studentsArray, "John"));

// ตอบคำถามตรงนี้จ้า

// Big O ของ Alogorithm นี้คือ O(log n) ซึ่งจะลดจำนวนการลูปลงไปครึ่งหนึ่งทุกครั้งที่ลูปเสร็จ โดยจะเป็น Time complexity ที่เห็นได้ชัดบน Binary Search ที่ทำไปในข้อนี้

// ซึ่งนอกจาก O(log n) แล้ว ในส่วนการทำงานของ function ก็จะประกอบด้วย O(1) หรือแบบ constant time ที่เกิดขึ้นจากการประกาศตัวแปร left, right, middle, result อีกด้วย

// แต่เนื่องจาก O(log n) เป็น Time Complexity ของทั้ง process และกินเวลามากที่สุด จึงเป็นเหตุผลที่ตอบว่า Big O ของ Alogorithm นี้คือ O(log n)
