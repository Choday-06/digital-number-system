const topics = {
  binary: {
    name: "Binary Number System", base: "Base 2", tagline: "The language of computers",
    intro: "The binary number system uses only two digits: 0 and 1. Each digit is called a bit. Computers use binary because digital circuits can represent two states, such as OFF and ON.",
    video: "Binary lesson video", videoFile: "assets/videos/binary-video.mp4", quizUrl: "https://view.genially.com/6ab605b8f770db06549f09bb",
    sections: [
      ["What is binary?", "Binary is a base-2 number system. It uses the digits 0 and 1 to represent values."],
      ["Place values", "From right to left, the place values are powers of 2: 1, 2, 4, 8, 16, 32, and so on."],
      ["Example: 1011₂", "1011₂ = (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1) = 11₁₀."]
    ],
    questions: [
      {q:"Which two digits are used in the binary number system?", o:["0 and 1","0 and 2","1 and 2","0 and 9"], a:0, e:"Binary is base 2, so it uses only 0 and 1."},
      {q:"What is the decimal value of 101₂?", o:["3","4","5","6"], a:2, e:"101₂ = 4 + 0 + 1 = 5₁₀."},
      {q:"What is the place value of the third digit from the right in binary?", o:["2","4","8","16"], a:1, e:"The third position from the right is 2², which equals 4."},
      {q:"Convert 1001₂ to decimal.", o:["7", "8", "9", "10"], a:2, e:"1001₂ = 8 + 0 + 0 + 1 = 9₁₀."},
      {q:"Which binary place value is directly to the left of 2²?", o:["2¹", "2³", "2⁴", "2⁰"], a:1, e:"Moving left increases the exponent by one, so the next place is 2³ = 8."},
      {q:"Convert 6₁₀ to binary.", o:["101₂", "110₂", "111₂", "100₂"], a:1, e:"6 = 4 + 2, so the binary digits are 110₂."},
      {q:"How many bits are in one byte?", o:["4", "8", "10", "16"], a:1, e:"One byte contains 8 bits."},
      {q:"Which binary number represents decimal 12?", o:["1010₂", "1100₂", "1110₂", "1001₂"], a:1, e:"1100₂ = 8 + 4 + 0 + 0 = 12₁₀."},
      {q:"What is the decimal value of 111₂?", o:["5", "6", "7", "8"], a:2, e:"111₂ = 4 + 2 + 1 = 7₁₀."},
      {q:"Which number is NOT a valid binary number?", o:["10101₂", "1100₂", "1021₂", "111₂"], a:2, e:"Binary only allows 0 and 1, so 2 is not a valid digit."}
    ]
  },
  decimal: {
    name: "Decimal Number System", base: "Base 10", tagline: "The number system we use every day",
    intro: "The decimal number system uses ten digits, from 0 to 9. It is a positional number system, meaning a digit's value depends on its position.",
    video: "Decimal lesson video", videoFile: "assets/videos/decimal-video.mp4", quizUrl: "https://view.genially.com/6ab93d3352b316d44ffc4d63",
    sections: [
      ["What is decimal?", "Decimal is a base-10 number system that uses the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9."],
      ["Place values", "From right to left, the place values are ones, tens, hundreds, thousands, and so on."],
      ["Example: 352", "352 = (3 × 100) + (5 × 10) + (2 × 1) = 300 + 50 + 2."]
    ],
    questions: [
      {q:"How many digits are used in the decimal number system?", o:["2","8","10","16"], a:2, e:"Decimal is base 10 and uses ten digits, 0 through 9."},
      {q:"What is the value of digit 7 in 472?", o:["7","70","700","7000"], a:1, e:"In 472, 7 is in the tens position, so its value is 70."},
      {q:"Which digit is not used in the decimal system?", o:["0","5","9","A"], a:3, e:"Decimal uses only the digits 0 through 9; A is used in hexadecimal."},
      {q:"What is the place value of 6 in 6,482?", o:["6", "60", "600", "6,000"], a:3, e:"6 is in the thousands place, so its value is 6,000."},
      {q:"Write 5,306 in expanded form.", o:["5,000 + 300 + 6", "500 + 30 + 6", "5,000 + 30 + 6", "5,000 + 300 + 60"], a:0, e:"5,306 = 5,000 + 300 + 0 + 6."},
      {q:"What is the value of the digit 4 in 2,745?", o:["4", "40", "400", "4,000"], a:1, e:"4 is in the tens position, so its value is 40."},
      {q:"Which number is the greatest?", o:["0.8", "0.08", "0.808", "0.88"], a:3, e:"0.88 is greater than 0.808, 0.8 and 0.08."},
      {q:"How many ones are equal to one hundred?", o:["10", "50", "100", "1,000"], a:2, e:"One hundred contains 100 ones."},
      {q:"What is 3 × 1,000 + 2 × 100 + 4 × 10 + 5?", o:["3,245", "3,425", "3,254", "3,524"], a:0, e:"The contributions are 3,000 + 200 + 40 + 5 = 3,245."},
      {q:"Which digit is in the hundreds place in 8,631?", o:["8", "6", "3", "1"], a:1, e:"In 8,631, 6 is in the hundreds place."}
    ]
  },
  octal: {
    name: "Octal Number System", base: "Base 8", tagline: "A compact way to represent binary values",
    intro: "The octal number system uses eight digits: 0 to 7. Each position represents a power of 8. Octal can provide a shorter way to write groups of binary digits.",
    video: "Octal lesson video", driveId: "1eubI9XIe23Zeht8UJFUeo-0LVnP5QWf4", quizUrl: "https://view.genially.com/6ab949bc537d84c24c14e592",
    sections: [
      ["What is octal?", "Octal is a base-8 number system. Its allowed digits are 0, 1, 2, 3, 4, 5, 6 and 7."],
      ["Place values", "From right to left, octal place values are 1, 8, 64, 512, and so on."],
      ["Example: 25₈", "25₈ = (2 × 8) + (5 × 1) = 16 + 5 = 21₁₀."]
    ],
    questions: [
      {q:"Which is the largest single digit in the octal system?", o:["7","8","9","F"], a:0, e:"Octal uses digits 0 to 7, making 7 its largest digit."},
      {q:"What is the decimal value of 10₈?", o:["2","8","10","16"], a:1, e:"10₈ = (1 × 8) + 0 = 8₁₀."},
      {q:"What is the base of the octal number system?", o:["2","8","10","16"], a:1, e:"Octal is base 8."},
      {q:"Which number is NOT a valid octal number?", o:["127₈", "705₈", "286₈", "34₈"], a:2, e:"Octal uses digits 0 to 7, so 8 and 9 are not allowed."},
      {q:"Convert 17₈ to decimal.", o:["13", "14", "15", "16"], a:2, e:"17₈ = (1 × 8) + 7 = 15₁₀."},
      {q:"What is the place value of the second digit from the right in octal?", o:["1", "8", "16", "64"], a:1, e:"The second position from the right is 8¹ = 8."},
      {q:"Convert 45₁₀ to octal.", o:["55₈", "56₈", "65₈", "54₈"], a:0, e:"45 ÷ 8 = 5 remainder 5; 5 ÷ 8 = 0 remainder 5. Therefore 55₈."},
      {q:"What is the decimal value of 23₈?", o:["17", "18", "19", "20"], a:2, e:"23₈ = (2 × 8) + 3 = 19₁₀."},
      {q:"How many binary bits correspond to one octal digit?", o:["2", "3", "4", "8"], a:1, e:"Since 8 = 2³, one octal digit corresponds to three binary bits."},
      {q:"Convert 111₂ to octal.", o:["5₈", "6₈", "7₈", "8₈"], a:2, e:"111₂ equals 7₁₀, which is 7₈."}
    ]
  },
  hexadecimal: {
    name: "Hexadecimal Number System", base: "Base 16", tagline: "Sixteen symbols for representing values",
    intro: "The hexadecimal number system uses sixteen symbols: 0 to 9 and A to F. The letters represent values from 10 to 15.",
    video: "Hexadecimal lesson video", driveId: "1FtXm6uWuPcJrN_BSq9CxQdXxAjcoSjTd", quizUrl: "https://view.genially.com/6ad5fdeec5f9fd24c6f13226",
    sections: [
      ["What is hexadecimal?", "Hexadecimal is a base-16 number system. It uses 0–9 and A, B, C, D, E and F."],
      ["Letter values", "A = 10, B = 11, C = 12, D = 13, E = 14 and F = 15."],
      ["Example: 1A₁₆", "1A₁₆ = (1 × 16) + 10 = 26₁₀."]
    ],
    questions: [
      {q:"What is the base of the hexadecimal system?", o:["8","10","12","16"], a:3, e:"Hexadecimal is base 16."},
      {q:"What value does A represent in hexadecimal?", o:["9","10","11","12"], a:1, e:"In hexadecimal, A represents decimal 10."},
      {q:"Which symbol represents decimal 15 in hexadecimal?", o:["D","E","F","G"], a:2, e:"F represents decimal 15; G is not a hexadecimal digit."},
      {q:"Which of these is NOT a valid hexadecimal digit?", o:["B", "E", "G", "9"], a:2, e:"Hexadecimal uses 0–9 and A–F. G is not included."},
      {q:"What decimal value does C represent?", o:["10", "11", "12", "13"], a:2, e:"C represents decimal 12 in hexadecimal."},
      {q:"Convert 2F₁₆ to decimal.", o:["45", "46", "47", "48"], a:2, e:"2F₁₆ = (2 × 16) + 15 = 47₁₀."},
      {q:"What is the place value of the second position from the right in hexadecimal?", o:["1", "8", "16", "256"], a:2, e:"The second position is 16¹ = 16."},
      {q:"Convert 31₁₀ to hexadecimal.", o:["1D₁₆", "1E₁₆", "1F₁₆", "2A₁₆"], a:2, e:"31 ÷ 16 = 1 remainder 15; 15 is F, so the answer is 1F₁₆."},
      {q:"How many binary bits correspond to one hexadecimal digit?", o:["2", "3", "4", "8"], a:2, e:"Since 16 = 2⁴, one hexadecimal digit represents four bits."},
      {q:"What is the decimal value of 10₁₆?", o:["10", "12", "16", "20"], a:2, e:"10₁₆ = (1 × 16) + 0 = 16₁₀."}
    ]
  }
};


const learningNotes = {
  binary: {
    sections: [
      ["1. Meaning of the binary number system", `<p>The <strong>binary number system</strong> is a number system with base 2. It uses only two digits: <strong>0 and 1</strong>. Each binary digit is called a <em>bit</em> (short for binary digit). A group of eight bits is called a <strong>byte</strong>.</p><p>Computers use binary because electronic circuits can represent two clear states, such as OFF and ON, low and high voltage, or false and true. These states can be represented using 0 and 1.</p>`],
      ["2. Binary place values", `<p>Binary is a <strong>positional number system</strong>. A digit's value depends on its position. Since binary is base 2, each place is a power of 2. Start at the right: 2⁰ = 1. Move left and multiply by 2 each time.</p><div class="place-value-table"><table><tr><th>Place</th><td>4th from right</td><td>3rd from right</td><td>2nd from right</td><td>1st from right</td></tr><tr><th>Power</th><td>2³</td><td>2²</td><td>2¹</td><td>2⁰</td></tr><tr><th>Place value</th><td>8</td><td>4</td><td>2</td><td>1</td></tr><tr><th>Example digit</th><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><th>Digit × value</th><td>1 × 8</td><td>0 × 4</td><td>1 × 2</td><td>1 × 1</td></tr><tr><th>Contribution</th><td>8</td><td>0</td><td>2</td><td>1</td></tr></table></div><p><strong>Understand the example:</strong> The digits make 1011₂. Multiply each digit by its place value, then add: 8 + 0 + 2 + 1 = 11₁₀. A zero contributes nothing, but its place is still important.</p>`],
      ["3. Converting binary to decimal", `<p>To convert a binary number into decimal, multiply each digit by its place value and add the results.</p><div class="worked-example"><strong>Example: Convert 1011₂ to decimal.</strong><p>Place values: &nbsp; 8 &nbsp; 4 &nbsp; 2 &nbsp; 1</p><p>Digits: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp; 0 &nbsp; 1 &nbsp; 1</p><p>= (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)</p><p>= 8 + 0 + 2 + 1</p><strong>= 11₁₀</strong></div>`],
      ["4. Converting decimal to binary", `<p>To convert a whole decimal number to binary, repeatedly divide the number by 2. Record each remainder. Continue until the quotient becomes 0, then read the remainders from bottom to top.</p><div class="worked-example"><strong>Example: Convert 13₁₀ to binary.</strong><p>13 ÷ 2 = 6 remainder 1</p><p>6 ÷ 2 = 3 remainder 0</p><p>3 ÷ 2 = 1 remainder 1</p><p>1 ÷ 2 = 0 remainder 1</p><strong>Read upwards: 1101₂</strong></div>`],
      ["5. Uses of binary", `<ul><li>Storing and processing information inside computers.</li><li>Representing text, images, sound and videos in digital form.</li><li>Controlling digital devices and electronic circuits.</li><li>Representing computer instructions and data.</li></ul>`]
    ],
    practice: [
      ["Which digits are allowed in binary numbers?", "Only 0 and 1."],
      ["What is the place value of the fourth position from the right in binary?", "2³ = 8."],
      ["Convert 1101₂ into decimal.", "8 + 4 + 0 + 1 = 13₁₀."],
      ["Convert 9₁₀ into binary.", "9 ÷ 2 remainders are 1, 0, 0, 1. Read upwards: 1001₂."],
      ["Why do computers use binary?", "Electronic circuits can represent two states, commonly represented by 0 and 1."]
    ]
  },
  decimal: {
    sections: [
      ["1. Meaning of the decimal number system", `<p>The <strong>decimal number system</strong> is the number system used in everyday counting, measuring and calculations. It has base 10 and uses ten digits: <strong>0, 1, 2, 3, 4, 5, 6, 7, 8 and 9</strong>.</p><p>When we count beyond 9, we combine digits to make numbers such as 10, 25, 100 and 1,000. Decimal is also called the denary number system.</p>`],
      ["2. Decimal place values", `<p>Decimal is a <strong>positional number system</strong> with base 10. Each place is ten times greater than the place to its right. From right to left, the places are ones, tens, hundreds, thousands, and so on.</p><div class="place-value-table"><table><tr><th>Place</th><td>Thousands</td><td>Hundreds</td><td>Tens</td><td>Ones</td></tr><tr><th>Power</th><td>10³</td><td>10²</td><td>10¹</td><td>10⁰</td></tr><tr><th>Place value</th><td>1,000</td><td>100</td><td>10</td><td>1</td></tr><tr><th>Example digit</th><td>4</td><td>5</td><td>8</td><td>2</td></tr><tr><th>Digit × value</th><td>4 × 1,000</td><td>5 × 100</td><td>8 × 10</td><td>2 × 1</td></tr><tr><th>Contribution</th><td>4,000</td><td>500</td><td>80</td><td>2</td></tr></table></div><p><strong>Understand the example:</strong> In 4,582, 4 means four thousands, 5 means five hundreds, 8 means eight tens and 2 means two ones. Add 4,000 + 500 + 80 + 2 to get 4,582. Face value is the digit itself; place value is the digit multiplied by its position value.</p>`],
      ["3. Expanded form of a decimal number", `<p>Expanded form shows the contribution of every digit according to its place value.</p><div class="worked-example"><strong>Example: Expand 4,582.</strong><p>4 is in the thousands place = 4 × 1,000 = 4,000</p><p>5 is in the hundreds place = 5 × 100 = 500</p><p>8 is in the tens place = 8 × 10 = 80</p><p>2 is in the ones place = 2 × 1 = 2</p><strong>4,582 = 4,000 + 500 + 80 + 2</strong></div>`],
      ["4. Converting decimal to other number systems", `<p>Decimal numbers can be converted into binary, octal or hexadecimal. For whole numbers, divide repeatedly by the target base and record the remainders. Read the remainders from bottom to top.</p><p>For example, to convert 18₁₀ to octal, divide by 8: 18 ÷ 8 = 2 remainder 2; then 2 ÷ 8 = 0 remainder 2. Therefore, 18₁₀ = 22₈.</p>`],
      ["5. Uses of decimal", `<ul><li>Everyday counting and arithmetic.</li><li>Money, prices, distance, mass and time measurements.</li><li>School mathematics and scientific calculations.</li><li>Communicating quantities in daily life.</li></ul>`]
    ],
    practice: [
      ["How many digits are used in the decimal system?", "Ten digits: 0 to 9."],
      ["What is the value of 6 in 3,642?", "600, because 6 is in the hundreds place."],
      ["Write 7,305 in expanded form.", "7,000 + 300 + 0 + 5."],
      ["Convert 25₁₀ to binary.", "25 ÷ 2 remainders read upwards give 11001₂."],
      ["What is another name for the decimal number system?", "The denary number system."]
    ]
  },
  octal: {
    sections: [
      ["1. Meaning of the octal number system", `<p>The <strong>octal number system</strong> is a positional number system with base 8. It uses eight digits only: <strong>0, 1, 2, 3, 4, 5, 6 and 7</strong>. The digits 8 and 9 are not allowed in an octal number.</p><p>Octal is useful because it provides a shorter way to write binary values. Every octal digit corresponds to a group of three binary bits.</p>`],
      ["2. Octal place values", `<p>Octal is a <strong>positional number system</strong> with base 8. Each place is eight times the place to its right. Starting at the right, the place values are 8⁰ = 1, 8¹ = 8, 8² = 64 and 8³ = 512.</p><div class="place-value-table"><table><tr><th>Place</th><td>4th from right</td><td>3rd from right</td><td>2nd from right</td><td>1st from right</td></tr><tr><th>Power</th><td>8³</td><td>8²</td><td>8¹</td><td>8⁰</td></tr><tr><th>Place value</th><td>512</td><td>64</td><td>8</td><td>1</td></tr><tr><th>Example digit</th><td>0</td><td>1</td><td>5</td><td>7</td></tr><tr><th>Digit × value</th><td>0 × 512</td><td>1 × 64</td><td>5 × 8</td><td>7 × 1</td></tr><tr><th>Contribution</th><td>0</td><td>64</td><td>40</td><td>7</td></tr></table></div><p><strong>Understand the example:</strong> The number 0157₈ is usually written 157₈. Its decimal value is 0 + 64 + 40 + 7 = 111₁₀. The zero at the left does not change the value. Octal digits can only be 0 through 7.</p>`],
      ["3. Converting octal to decimal", `<p>Multiply each octal digit by its place value and add the products.</p><div class="worked-example"><strong>Example: Convert 157₈ to decimal.</strong><p>= (1 × 64) + (5 × 8) + (7 × 1)</p><p>= 64 + 40 + 7</p><strong>= 111₁₀</strong></div>`],
      ["4. Converting decimal to octal", `<p>Divide the decimal number repeatedly by 8. Write down each remainder and read the remainders from bottom to top.</p><div class="worked-example"><strong>Example: Convert 83₁₀ to octal.</strong><p>83 ÷ 8 = 10 remainder 3</p><p>10 ÷ 8 = 1 remainder 2</p><p>1 ÷ 8 = 0 remainder 1</p><strong>Read upwards: 123₈</strong></div>`],
      ["5. Relationship between binary and octal", `<p>Since 8 = 2³, one octal digit represents exactly three binary bits. To convert binary to octal, group the binary digits into sets of three from the right. Add leading zeros to the left if needed.</p><div class="worked-example"><strong>Example: Convert 110101₂ to octal.</strong><p>Group: 110 &nbsp; 101</p><p>110₂ = 6 and 101₂ = 5</p><strong>Therefore, 110101₂ = 65₈</strong></div>`],
      ["6. Uses of octal", `<ul><li>Compact representation of binary data.</li><li>Some computer systems and digital applications.</li><li>Unix and Linux file permissions, which are commonly written using octal digits.</li></ul>`]
    ],
    practice: [
      ["Which digits are allowed in octal?", "Digits 0 to 7."],
      ["What is the place value of the third position from the right in octal?", "8² = 64."],
      ["Convert 34₈ to decimal.", "(3 × 8) + 4 = 28₁₀."],
      ["Convert 20₁₀ to octal.", "20 ÷ 8 = 2 remainder 4; 2 ÷ 8 = 0 remainder 2. Answer: 24₈."],
      ["Convert 111 000₂ to octal.", "111₂ = 7 and 000₂ = 0. Answer: 70₈."]
    ]
  },
  hexadecimal: {
    sections: [
      ["1. Meaning of the hexadecimal number system", `<p>The <strong>hexadecimal number system</strong> is a positional number system with base 16. It uses sixteen symbols: the digits <strong>0 to 9</strong> and the letters <strong>A, B, C, D, E and F</strong>.</p><p>The letters represent values that are needed after 9: A = 10, B = 11, C = 12, D = 13, E = 14 and F = 15. Therefore, G is not a valid hexadecimal digit.</p>`],
      ["2. Hexadecimal place values", `<p>Hexadecimal is a <strong>positional number system</strong> with base 16. Each place is sixteen times the place to its right. Starting at the right, the place values are 16⁰ = 1, 16¹ = 16, 16² = 256 and 16³ = 4,096.</p><p>Hexadecimal uses 0–9 and A–F. The letters represent values after 9: A = 10, B = 11, C = 12, D = 13, E = 14 and F = 15.</p><div class="place-value-table"><table><tr><th>Place</th><td>3rd from right</td><td>2nd from right</td><td>1st from right</td></tr><tr><th>Power</th><td>16²</td><td>16¹</td><td>16⁰</td></tr><tr><th>Place value</th><td>256</td><td>16</td><td>1</td></tr><tr><th>Example digit</th><td>0</td><td>2</td><td>A (10)</td></tr><tr><th>Digit × value</th><td>0 × 256</td><td>2 × 16</td><td>10 × 1</td></tr><tr><th>Contribution</th><td>0</td><td>32</td><td>10</td></tr></table></div><p><strong>Understand the example:</strong> 02A₁₆ is usually written 2A₁₆. Since A means ten, calculate (2 × 16) + (10 × 1) = 32 + 10 = 42₁₀. A is a digit with a numerical value, not just a letter.</p>`],
      ["3. Converting hexadecimal to decimal", `<p>Replace any letters with their decimal values, multiply each digit by its place value and add the results.</p><div class="worked-example"><strong>Example: Convert 2A₁₆ to decimal.</strong><p>A = 10</p><p>= (2 × 16) + (10 × 1)</p><p>= 32 + 10</p><strong>= 42₁₀</strong></div>`],
      ["4. Converting decimal to hexadecimal", `<p>Divide the decimal number repeatedly by 16. Remainders from 10 to 15 must be written as A to F. Read the remainders from bottom to top.</p><div class="worked-example"><strong>Example: Convert 175₁₀ to hexadecimal.</strong><p>175 ÷ 16 = 10 remainder 15 (F)</p><p>10 ÷ 16 = 0 remainder 10 (A)</p><strong>Read upwards: AF₁₆</strong></div>`],
      ["5. Relationship between binary and hexadecimal", `<p>Since 16 = 2⁴, one hexadecimal digit represents four binary bits. To convert binary to hexadecimal, group the bits into sets of four from the right. Add leading zeros to the left when necessary.</p><div class="worked-example"><strong>Example: Convert 1101 1010₂ to hexadecimal.</strong><p>1101₂ = 13 = D</p><p>1010₂ = 10 = A</p><strong>Therefore, 11011010₂ = DA₁₆</strong></div>`],
      ["6. Uses of hexadecimal", `<ul><li>HTML and CSS colour codes, such as #FF0000 for red.</li><li>Representing memory addresses and machine-level data.</li><li>Debugging and programming tools.</li><li>Compactly representing binary values.</li></ul>`]
    ],
    practice: [
      ["What are the six letters used in hexadecimal?", "A, B, C, D, E and F."],
      ["What decimal value does E represent?", "14."],
      ["Convert 3F₁₆ to decimal.", "(3 × 16) + 15 = 63₁₀."],
      ["Convert 64₁₀ to hexadecimal.", "64 ÷ 16 = 4 remainder 0; 4 ÷ 16 = 0 remainder 4. Answer: 40₁₆."],
      ["Convert 1010 1111₂ to hexadecimal.", "1010₂ = A and 1111₂ = F. Answer: AF₁₆."]
    ]
  }
};

const app = document.getElementById("app");
const nav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");

function normaliseRoute(route) {
  const clean = String(route || "home").replace(/^#/, "").trim().toLowerCase();
  const allowed = ["home", "about", "videos", "learning-materials", "quizzes", "history"];
  for (const topic of Object.keys(topics)) {
    allowed.push(`videos-${topic}`, `learning-materials-${topic}`, `quizzes-${topic}`);
  }
  return allowed.includes(clean) ? clean : "home";
}

let currentRoute = normaliseRoute(window.location.hash.slice(1) || "home");

function navigate(route) {
  const nextRoute = normaliseRoute(route);
  currentRoute = nextRoute;

  // pushState changes the URL without triggering a second render.
  const nextUrl = `${window.location.pathname}${window.location.search}#${nextRoute}`;
  window.history.pushState({ route: nextRoute }, "", nextUrl);

  render(nextRoute);
  window.scrollTo({ top: 0, behavior: "auto" });
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("popstate", () => {
  currentRoute = normaliseRoute(window.location.hash.slice(1) || "home");
  render(currentRoute);
  window.scrollTo({ top: 0, behavior: "auto" });
});

window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 450);
});

const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
  backToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// One delegated handler works for all buttons rendered on every page.
document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest("[data-route]") : null;
  if (!target) return;
  event.preventDefault();
  navigate(target.getAttribute("data-route"));
});

function homePage() {
  return `
    <section class="hero" aria-label="Bhutan-inspired digital learning banner"></section>
    <section class="section home-welcome-section">
      <div class="intro-layout">
        <div class="info-panel">
          <span class="eyebrow" style="color:#a87916">Welcome learners</span>
          <h2>Your journey into the world of numbers begins here</h2>
          <p>Number systems are the foundation of digital technology. In this learning space, you will explore how information is represented, stored and processed by computers.</p>
          <p>Choose one of the four number systems below. Each topic card gives you direct access to its video lesson, reading material and quiz.</p>
          <button class="btn btn-dark" data-route="home">Explore the topics</button>
        </div>
        <div class="welcome-video-card">
          <span class="eyebrow" style="color:#a87916">A message to learners</span>
          <h2>Welcome to Digital Number Systems</h2>
          <p>Start your learning journey with this welcome video.</p>
          <video class="video-player" controls preload="metadata" playsinline>
            <source src="assets/videos/welcome-video.mp4" type="video/mp4">
            Your browser does not support this video.
          </video>
        </div>
      </div>
    </section>
    <section class="feature-strip">
      <div class="section">
        <div class="section-heading"><span class="eyebrow" style="color:#a87916">Learn your way</span><h2>One platform, three ways to learn</h2></div>
        <div class="feature-grid">
          <div class="feature"><div class="symbol">▶</div><h3>Watch</h3><p>Learn through clear and engaging video lessons.</p></div>
          <div class="feature"><div class="symbol">▤</div><h3>Read</h3><p>Review explanations, place values and worked examples.</p></div>
          <div class="feature"><div class="symbol">✎</div><h3>Practise</h3><p>Answer quizzes and receive instant feedback.</p></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-heading"><span class="eyebrow" style="color:#a87916">Begin here</span><h2>Explore Number Systems</h2><p>Select one of the four number systems to begin your learning journey.</p></div>
      ${topicCards()}
    </section>`;
}
function topicCards() {
  return `<div class="topic-grid">${Object.entries(topics).map(([key,t],i)=>`
    <article class="topic-card topic-home-card">
      <span class="topic-number">TOPIC 0${i+1} · ${t.base.toUpperCase()}</span>
      <div><h3>${t.name}</h3><p>${t.tagline}</p><p class="topic-description">${t.intro}</p></div>
      <div class="topic-card-actions">
        <button class="btn btn-dark" data-route="videos-${key}">▶ Watch Video</button>
        <button class="btn btn-outline-dark" data-route="learning-materials-${key}">▤ Read Notes</button>
        <button class="btn btn-outline-dark" data-route="quizzes-${key}">✎ Start Quiz</button>
      </div>
    </article>`).join("")}</div>`;
}
function explorePage() {
  return `<section class="page-banner"><span class="eyebrow">Choose your learning path</span><h1>Explore Number Systems</h1><p>Four number systems, each with a video lesson, reading material and interactive quiz.</p></section>
    <div class="section"><div class="section-heading"><h2>Select a topic</h2><p>Start with any topic. You can return to this page whenever you are ready to explore another.</p></div>${topicCards()}</div>`;
}
function topicPage(key) {
  const t = topics[key];
  return `<section class="page-banner"><span class="eyebrow">${t.base}</span><h1>${t.name}</h1><p>${t.tagline}. Choose an activity below to continue learning.</p></section>
    <div class="breadcrumb"><button data-route="home">Home</button> / <button data-route="explore">Explore</button> / ${t.name}</div>
    <section class="section">
      <div class="info-panel"><h2>About this topic</h2><p>${t.intro}</p></div>
      <div class="learning-actions">
        <div class="action-card"><div class="icon">▶</div><h3>Video Lesson</h3><p>Watch the explanation and worked examples.</p><button class="btn btn-dark" data-route="${key}-video">Watch Video</button></div>
        <div class="action-card"><div class="icon">▤</div><h3>Reading Material</h3><p>Read the key concepts, place values and examples.</p><button class="btn btn-dark" data-route="${key}-reading">Read Notes</button></div>
        <div class="action-card"><div class="icon">✎</div><h3>Interactive Quiz</h3><p>Check what you have learned and see your score.</p><button class="btn btn-dark" data-route="${key}-quiz">Start Quiz</button></div>
      </div>
      <div class="back-row"><button class="btn btn-outline-dark btn-dark" data-route="explore">← Back to all topics</button></div>
    </section>`;
}
function activityPage(key, type, sectionTitle = "") {
  const t = topics[key];
  const title = sectionTitle || (type === "video" ? "Video Lesson" : type === "reading" ? "Learning Materials" : "Interactive Quiz");
  let body = "";
  if (type === "video") {
    if (t.videoFile) {
      body = `<video class="video-player" controls preload="metadata" playsinline aria-label="${t.name} lesson video"><source src="${t.videoFile}" type="video/mp4">Your browser does not support this video. Please use a recent version of Chrome or Safari.</video>`;
    } else {
      const embed = `https://drive.google.com/file/d/${t.driveId}/preview`;
      body = `<iframe class="video-frame" src="${embed}" title="${t.name} video lesson" allow="autoplay; fullscreen" allowfullscreen></iframe><p class="empty-note">Use the player controls to play, pause, replay and seek through the lesson. Google Drive access must be set to “Anyone with the link”.</p>`;
    }
  } else if (type === "reading") {
    const notes = learningNotes[key];
    body = `<div class="reading-sheet"><div class="reading-ribbon">BHUTAN • DIGITAL LEARNING · EXPANDED NOTES</div><p class="reading-lead">${t.intro}</p><div class="reading-facts"><div><small>NUMBER SYSTEM</small><strong>${t.name}</strong></div><div><small>BASE</small><strong>${t.base.replace("Base ","")}</strong></div></div>
      <div class="notes-intro"><h3>Learning objectives</h3><p>After studying this material, you should be able to explain the number system, identify its valid digits, describe place values, and solve basic conversion problems.</p></div>
      ${notes.sections.map(([h,html],i)=>`<article class="detailed-note-section"><span class="reading-index">${String(i+1).padStart(2,"0")}</span><div><h3>${h}</h3>${html}</div></article>`).join("")}
      <div class="example-box"><strong>Remember:</strong> The base tells you how many different digits or symbols are used in a number system. Always check that every digit in a number is valid for its base.</div>
      <section class="practice-section"><span class="eyebrow">CHECK YOUR UNDERSTANDING</span><h2>Practice Questions</h2><p>Try answering each question in your notebook before opening the answer.</p>
      ${notes.practice.map(([q,a],i)=>`<details class="practice-item"><summary><span>Question ${i+1}</span>${q}</summary><div class="practice-answer"><strong>Suggested answer:</strong> ${a}</div></details>`).join("")}
      </section>
      <section class="ppt-resource-card">
        <div class="ppt-resource-icon">▤</div>
        <div class="ppt-resource-copy">
          <span class="eyebrow">ADDITIONAL READING RESOURCE</span>
          <h2>Place Value Charts – Learning Guide</h2>
          <p>Download the PowerPoint guide to study detailed place-value tables for Binary, Decimal, Octal and Hexadecimal. It includes worked examples, explanations, practice questions and answers.</p>
          <a class="btn btn-dark" href="assets/learning-materials/Number_System_Place_Value_Charts_Learning_Guide.pptx" download>⬇ Download PowerPoint Reading Material</a>
        </div>
      </section>
      </div>`;
  } else {
    body = `<div class="quiz-intro"><span class="quiz-emblem">✦</span><h2>${t.name} Challenge</h2><p>Answer the practice questions below, review your explanations, and then try the interactive game.</p><div class="quiz-perks"><span>✎ ${t.questions.length} practice questions</span><span>✓ Instant score and explanations</span><span>🎮 Interactive game challenge</span></div></div>
      <form id="quizForm" class="practice-quiz-form">
        ${t.questions.map((question,index)=>`<article class="quiz-question"><p>${index+1}. ${question.q}</p>${question.o.map((option,optIndex)=>`<label class="quiz-option"><input type="radio" name="q${index}" value="${optIndex}" required> ${option}</label>`).join("")}<div class="quiz-feedback" id="feedback${index}"></div></article>`).join("")}
        <div class="quiz-controls"><button class="btn btn-dark" type="submit">Submit Answers</button><button class="btn btn-outline-dark" type="reset">Try Again</button></div>
        <div class="result" id="quizResult" aria-live="polite"></div>
      </form>
      <div class="genially-extra"><h2>Extra interactive game</h2><p>After completing the practice questions, challenge yourself with the topic game.</p><iframe class="genially-frame" src="${t.quizUrl}/embedded" title="${t.name} interactive quiz" allowfullscreen></iframe><p class="empty-note">If the game does not load, <a href="${t.quizUrl}" target="_blank" rel="noopener">open it directly in Genially</a>.</p></div>`;
  }
  return `<section class="page-banner"><span class="eyebrow">${t.base} · ${t.name}</span><h1>${title}</h1><p>${type === "video" ? "Watch the lesson and use the player controls to pause, replay and move through the video." : type === "reading" ? "Explore the designed learning notes, concepts and worked examples." : "Play the topic game and test what you have learned."}</p></section>
    <div class="breadcrumb"><button data-route="home">Home</button> / ${t.name} / ${title}</div>
    <section class="section"><div class="content-card"><div class="activity-back"><button class="back-arrow" id="returnButton" aria-label="Back to topic options" title="Back to topic options">←</button><span>Back to Home and all topic options</span></div><h2>${title}: ${t.name}</h2>${body}</div></section>`;
}

function historyPage() {
  return `<section class="page-banner"><span class="eyebrow">Website activity</span><h1>Learning History & Analytics</h1><p>See how learners are using videos, reading materials and quizzes.</p></section>
    <section class="section history-section">
      <div class="history-heading"><div><span class="eyebrow" style="color:#a87916">ADMIN OVERVIEW</span><h2>Website Activity Dashboard</h2><p>Activity is recorded from the day this feature is installed.</p></div><button class="btn btn-dark" id="refreshHistory">↻ Refresh data</button></div>
      <div id="historyStatus" class="history-status">Loading website activity…</div>
      <div id="historyDashboard" hidden>
        <div class="history-stat-grid">
          <article class="history-stat"><span>Unique visitors</span><strong id="statVisitors">0</strong><small>Browsers / devices seen</small></article>
          <article class="history-stat"><span>Page views</span><strong id="statPages">0</strong><small>Total page visits</small></article>
          <article class="history-stat"><span>Video views / starts</span><strong id="statVideos">0</strong><small>Video starts and lesson opens</small></article>
          <article class="history-stat"><span>Learning material views</span><strong id="statMaterials">0</strong><small>Reading pages opened</small></article>
          <article class="history-stat"><span>Quiz attempts</span><strong id="statQuizzes">0</strong><small>Submitted practice quizzes</small></article>
          <article class="history-stat"><span>Average quiz score</span><strong id="statAverage">0%</strong><small>Across submitted quizzes</small></article>
        </div>
        <div class="history-grid">
          <article class="history-panel"><h3>Video activity</h3><div id="videoHistory"></div></article>
          <article class="history-panel"><h3>Learning materials</h3><div id="materialHistory"></div></article>
          <article class="history-panel"><h3>Quiz performance</h3><div id="quizHistory"></div></article>
        </div>
        <article class="history-panel history-recent"><h3>Recent activity (latest 30 events)</h3><div class="history-table-wrap"><table class="history-table"><thead><tr><th>Activity</th><th>Topic / page</th><th>Result</th><th>Date & time (UTC)</th></tr></thead><tbody id="recentHistory"></tbody></table></div></article>
      </div>
      <p class="history-privacy">Privacy note: this dashboard stores a random browser identifier and learning activity only. It does not collect students’ names or email addresses. Unique visitor counts are approximate because clearing browser data or using another device creates a new identifier.</p>
    </section>`;
}

function getVisitorId() {
  try {
    let id = localStorage.getItem('dns_visitor_id');
    if (!id) { id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `v-${Date.now()}-${Math.random().toString(16).slice(2)}`; localStorage.setItem('dns_visitor_id', id); }
    return id;
  } catch (_) { return `session-${Date.now()}`; }
}
function trackActivity(eventType, page, topic = '', score = null, total = null) {
  fetch('/api/track', { method:'POST', headers:{'Content-Type':'application/json'}, keepalive:true,
    body:JSON.stringify({visitor_id:getVisitorId(), event_type:eventType, page, topic, score, total})
  }).catch(() => {});
}
function loadHistoryDashboard() {
  const status = document.getElementById('historyStatus');
  const dashboard = document.getElementById('historyDashboard');
  if (!status || !dashboard) return;
  const labels = {binary:'Binary',decimal:'Decimal',octal:'Octal',hexadecimal:'Hexadecimal',introduction:'Introduction',welcome:'Welcome video'};
  const listHtml = (items, valueKey, suffix) => items.length ? `<ul class="history-list">${items.map(item=>`<li><span>${labels[item.topic] || item.topic || 'General'}</span><strong>${item[valueKey]} ${suffix}</strong></li>`).join('')}</ul>` : '<p class="empty-note">No activity recorded yet.</p>';
  const refresh = () => {
    status.textContent = 'Loading website activity…'; dashboard.hidden = true;
    fetch('/api/history').then(r=>{if(!r.ok) throw new Error('Could not load history.'); return r.json();}).then(data=>{
      const s=data.summary;
      document.getElementById('statVisitors').textContent=s.visitors;
      document.getElementById('statPages').textContent=s.page_views;
      document.getElementById('statVideos').textContent=s.video_plays;
      document.getElementById('statMaterials').textContent=s.material_views;
      document.getElementById('statQuizzes').textContent=s.quiz_attempts;
      document.getElementById('statAverage').textContent=`${s.average_quiz_percent || 0}%`;
      document.getElementById('videoHistory').innerHTML=listHtml(data.videos,'views','views');
      document.getElementById('materialHistory').innerHTML=listHtml(data.materials,'views','views');
      document.getElementById('quizHistory').innerHTML=data.quizzes.length?`<ul class="history-list">${data.quizzes.map(item=>`<li><span>${labels[item.topic]||item.topic}</span><strong>${item.attempts} attempts · ${item.average ?? 0}% avg.</strong></li>`).join('')}</ul>`:'<p class="empty-note">No quiz attempts recorded yet.</p>';
      const eventLabels={page_view:'Page visit',video_play:'Video started',video_open:'Video lesson opened',learning_material_view:'Learning material opened',quiz_attempt:'Quiz submitted'};
      document.getElementById('recentHistory').innerHTML=data.recent.length?data.recent.map(item=>`<tr><td>${eventLabels[item.event_type]||item.event_type}</td><td>${labels[item.topic]||item.topic||item.page}</td><td>${item.event_type==='quiz_attempt'?`${item.score}/${item.total}`:'—'}</td><td>${new Date(item.created_at).toLocaleString()}</td></tr>`).join(''):'<tr><td colspan="4">No activity recorded yet. Browse the website and complete a quiz to generate data.</td></tr>';
      status.textContent='Analytics updated.'; dashboard.hidden=false;
    }).catch(()=>{status.textContent='Unable to load analytics. Make sure the Flask server is running.';});
  };
  refresh();
  document.getElementById('refreshHistory')?.addEventListener('click',refresh);
}

function aboutPage() {
  const members = [
    ["Sujal Gurung", "assets/team/sujal-gurung.jpg"],
    ["Kinley Yangden", "assets/team/kinley-yangden.jpg"],
    ["Dechen Choden", "assets/team/dechen-choden.jpg"],
    ["Tshering Dolkar", "assets/team/tshering-dolkar.jpg"]
  ];
  return `<section class="page-banner"><span class="eyebrow">Meet the team</span><h1>About Us</h1><p>We are the team behind this Digital Number System learning website.</p></section>
    <section class="section"><div class="section-heading"><span class="eyebrow" style="color:#a87916">Our team</span><h2>Meet the Creators</h2><p>Working together to make learning digital number systems engaging, accessible and enjoyable.</p></div>
    <div class="team-grid">${members.map(([name,photo]) => `<article class="team-card"><img src="${photo}" alt="${name}"><div class="team-card-info"><span class="team-kicker">DIGITAL NUMBER SYSTEM</span><h3>${name}</h3></div></article>`).join("")}</div>
    <div class="about-note"><span>✦</span><p>Inspired by Bhutanese art, culture and the spirit of collaborative learning.</p></div></section>`;
}
function sectionHubPage(section) {
  const cfg = {
    videos: ["Videos", "Watch the introduction and topic-based video lessons."],
    "learning-materials": ["Learning Materials", "Choose a number system to explore its designed reading materials."],
    quizzes: ["Quizzes", "Choose a number system and play its interactive quiz."]
  }[section];
  const intro = section === "videos" ? `<div class="content-card"><h2>Introduction to Number Systems</h2><p>Begin with this introduction before exploring the four number systems.</p><video class="video-player" controls preload="metadata" playsinline><source src="assets/videos/introduction-video.mp4" type="video/mp4">Your browser does not support this video.</video></div>` : "";
  return `<section class="page-banner"><span class="eyebrow">Digital Number System</span><h1>${cfg[0]}</h1><p>${cfg[1]}</p></section><section class="section">${intro}${section === "quizzes" ? `<div class="content-card general-quiz"><h2>Number Systems: General Challenge</h2><p>Try this overall quiz to review all four number systems.</p><iframe class="genially-frame" src="https://view.genially.com/6aafc9f536c740f6b5b8b3e2/embedded" title="General number systems quiz" allowfullscreen></iframe></div>` : ""}<div class="section-heading"><h2>Choose a number system</h2></div>${topicCards()}</section>`;
}

function render(route) {
  const safeRoute = normaliseRoute(route);
  const sectionMatch = safeRoute.match(/^(videos|learning-materials|quizzes)-(binary|decimal|octal|hexadecimal)$/);

  if (safeRoute === "home" || safeRoute === "explore") {
    app.innerHTML = homePage();
  } else if (safeRoute === "about") {
    app.innerHTML = aboutPage();
  } else if (safeRoute === "history") {
    app.innerHTML = historyPage();
  } else if (sectionMatch) {
    const [, section, topicKey] = sectionMatch;
    const type = section === "videos" ? "video" : section === "learning-materials" ? "reading" : "quiz";
    const title = section === "videos" ? "Videos" : section === "learning-materials" ? "Learning Materials" : "Quizzes";
    app.innerHTML = activityPage(topicKey, type, title);
  } else if (["videos", "learning-materials", "quizzes"].includes(safeRoute)) {
    app.innerHTML = sectionHubPage(safeRoute);
  } else {
    app.innerHTML = homePage();
  }

  const activeSection = sectionMatch ? sectionMatch[1] : safeRoute;
  const topicForEvent = sectionMatch ? sectionMatch[2] : '';
  trackActivity('page_view', safeRoute, topicForEvent);
  if (sectionMatch && sectionMatch[1] === 'learning-materials') trackActivity('learning_material_view', safeRoute, topicForEvent);
  if (sectionMatch && sectionMatch[1] === 'videos') {
    const videoTopic = topicForEvent;
    const hasNativeVideo = app.querySelector('video.video-player');
    if (!hasNativeVideo) trackActivity('video_open', safeRoute, videoTopic);
  }
  app.querySelectorAll('video.video-player').forEach(video => {
    if (video.dataset.analyticsBound) return;
    video.dataset.analyticsBound = 'true';
    video.addEventListener('play', () => trackActivity('video_play', safeRoute, safeRoute === 'home' ? 'welcome' : (topicForEvent || 'introduction')));
  });
  if (safeRoute === 'history') loadHistoryDashboard();
  // Apply page-specific scenic backgrounds only on these three sections.
  // The existing page content, cards, spacing and interactions remain unchanged.
  document.body.dataset.page = ["videos", "learning-materials", "quizzes"].includes(activeSection)
    ? activeSection
    : "";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeSection}`);
  });

  const backButton = document.getElementById("returnButton");
  if (backButton) backButton.addEventListener("click", () => navigate("home"));

  const quizForm = document.getElementById("quizForm");
  if (quizForm && sectionMatch && sectionMatch[1] === "quizzes") {
    const topicKey = sectionMatch[2];
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let score = 0;
      topics[topicKey].questions.forEach((question, index) => {
        const selected = quizForm.querySelector(`input[name="q${index}"]:checked`);
        const feedback = document.getElementById(`feedback${index}`);
        if (selected && Number(selected.value) === question.a) {
          score++;
          feedback.textContent = "✓ " + question.e;
          feedback.style.color = "#17683a";
        } else {
          feedback.textContent = "✗ " + question.e;
          feedback.style.color = "#a33a2b";
        }
      });
      const result = document.getElementById("quizResult");
      result.style.display = "block";
      const total = topics[topicKey].questions.length;
      const percent = Math.round((score / total) * 100);
      trackActivity('quiz_attempt', `quizzes-${topicKey}`, topicKey, score, total);
      result.textContent = `Your score: ${score} / ${total} (${percent}%). ${score === total ? "Excellent work! You have mastered this topic." : score >= total * 0.7 ? "Good effort! Review the explanations for the questions you missed." : "Keep practising. Read the notes and try the quiz again."}`;
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    quizForm.addEventListener("reset", () => {
      window.setTimeout(() => {
        quizForm.querySelectorAll(".quiz-feedback").forEach((item) => { item.textContent = ""; });
        const result = document.getElementById("quizResult");
        result.style.display = "none";
        result.textContent = "";
      }, 0);
    });
  }
}
render(currentRoute);
