class Question {
    constructor(content, answer, correctAnswer, money) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.money = money;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

function music() {
    musicBackground = new Audio("sound/bg.mp3");
}

let timeCount;
let message;

let timeID = setInterval(function () {
    document.getElementById('timeCountDown').innerHTML = timeCount + " giây";
    timeCount--;
    countdown();
}, 1000);

function countdown() {
    if (timeCount < 0) {
        clearInterval(timeID);
        message = window.confirm('HẾT GIỜ RỒI BẠN EEI!');
        reload()
    }
}

let question1 = new Question("Câu 1:Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì? ", ["A.Phần mặt đường và lề đường.", "B.Phần đường xe chạy.", "C.Phần đường xe cơ giới.", "D.Phần đường để đi"], "A.Phần mặt đường và lề đường.", "1.000.000 VNĐ");
let question2 = new Question("Câu 2:Bạn đang lái xe phía trước có một xe cứu thương đang phát tín hiệu ưu tiên bạn có được phép vượt hay không?", ["A.Được vượt khi đang đi trên cầu.", "B.Không được vượt.", "C.Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.", "D.Được vượt khi đảm bảo an toàn"], "B.Không được vượt.");
let question3 = new Question("Câu 3:“Làn đường” là gì?", ["A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.", "B.Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn. ", "C. Là đường cho xe ô tô chạy, dừng, đỗ an toàn.", "D. Một chiếc đồng hồ"], "B. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.");
let question4 = new Question("Câu 4:Theo Luật phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu bia khi tham gia giao thông?", ["A.Người điều khiển: Xe ô tô, xe mô tô, xe đạp, xe gắn máy.", "B. Người ngồi phía sau người điều khiển xe cơ giới.", "C. Người đi bộ.", "D. Cả ý 1 và ý 2."], "A.Người điều khiển: Xe ô tô, xe mô tô, xe đạp, xe gắn máy.");
let question5 = new Question("Câu 5: Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?", ["A.Được phép.", "B. Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.", "C. Tuỳ trường hợp.", "D. Không được phép."], "D. Không được phép.");
let question6 = new Question("Câu 6:Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?", ["A. Bị nghiêm cấm tuỳ từng trường hợp.", "B.Không bị nghiêm cấm.", "C. Bị nghiêm cấm.", "D. Được khuyến khích "], "C. Bị nghiêm cấm.");
let question7 = new Question("Câu 7:Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh từ 50 cm3 trở lên", ["A. 16 tuổi.", "B. 17 tuổi. ", "C. 18 tuổi", "D. 19 tuổi."], "C. 18 tuổi.");
let question8 = new Question("Câu 8:Người điểu khiển xe mô tô hai bánh, xe gắn máy được phép chở tối đa 2 người trong những trường hợp nào?", ["A.Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi.", "B. Áp giải người có hành vi vi phạm pháp luật.", "C. Cả ý 1 và ý 2.", "D. Khi di chơi"], "C.Cả ý 1 và ý 2.");
let question9 = new Question("Câu 9:Để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?", ["A. Tăng ga thật nhanh, giảm ga từ từ.", "B. Tăng ga thật nhanh, giảm ga thật nhanh.", "C. Tăng ga từ từ, giảm ga thật nhanh.", "D.Tăng ga từ từ, giảm ga từ từ."], "D.Tăng ga từ từ, giảm ga từ từ.");
let question10 = new Question("Câu 10:Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?", ["A. Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên.", "B. Xe gắn máy có dung tích xi-lanh dưới 50 cm3.", "C. Xe ô tô tải dưới 3,5 tấn; xe chở người đến 9 chỗ ngồi", "B. Xe gắn máy có dung tích xi-lanh dưới 50 cm3."], "D. Katanashi");

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let getQuestion = document.getElementById('question');
showQuestion(question1);

function next(index) {
    index++;
    showQuestion(questions[index]);
}

function showQuestion(question_1) {
    timeCount = 15;
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("questionScreen", questions.indexOf(question_1));
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('answer_' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];
    }
    music();
    musicBackground.play();
}

showQuestion(question1);
let index = 0;

function checkAnswer(id) {
    console.log(index);
    let answer = document.getElementById(id).innerHTML;
    let getQuestionId = document.getElementById('question');
    if (!confirm("Bạn chắc chắn phương án này chứ?")) {
        return true;
    }
    if (questions[index].checkAnswer(answer)) {
        alert('Chúc mừng bạn đã trả lời đúng');
        if (index === 9) {
            alert("Bạn thật xuất sắc, chúc mừng bạn đã vượt qua toàn bộ câu hỏi <3");
            timeCount = 1;
            reload();
        }

        next(index);
        index++;
        console.log(index);
    } else {
        alert('Sai mất rồi! Thi lại nhé:)');
        reload();
    }
}

function reload() {
    location.replace("index.html");
}
