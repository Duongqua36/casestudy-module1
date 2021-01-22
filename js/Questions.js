class Question {
    constructor(content, answer, correctAnswer,) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
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

let question1 = new Question("Câu 1:Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì? ", ["A.Phần mặt đường và lề đường.", "B.Phần đường xe chạy.", "C.Phần đường xe cơ giới.", "D.Phần đường để đi"], "A.Phần mặt đường và lề đường.");
let question2 = new Question("Câu 2:Bạn đang lái xe phía trước có một xe cứu thương đang phát tín hiệu ưu tiên bạn có được phép vượt hay không?", ["A.Được vượt khi đang đi trên cầu.", "B.Không được vượt.", "C.Được phép vượt khi đường vắng.", "D.Được vượt khi đảm bảo an toàn"], "B.Không được vượt.");
let question3 = new Question("Câu 3:Hành vi đi xe lạng lách đánh võng , bốc đầu có bị nghiêm cấm không ...?", ["A. Được phép ", "B. Được khuyến khích ", "C. Được phép khi đường vắng", "D. Bị nghiêm cấm"], "D. Bị nghiêm cấm");
let question4 = new Question("Câu 4:Theo Luật phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu bia khi tham gia giao thông?", ["A.Người điều khiển: Xe ô tô, xe mô tô, xe gắn máy.", "B. Người ngồi phía sau người điều khiển xe cơ giới.", "C. Người đi bộ.", "D. Cả ý 1 và ý 2."], "A.Người điều khiển: Xe ô tô, xe mô tô, xe gắn máy.");
let question5 = new Question("Câu 5: Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?", ["A.Là người điều khiển xe máy.", "B. Là người điều khiển xe có súc vật kéo.", "C. Là người điều khiển xe thô sơ.", "D.Là người điều khiển xe cơ giới."], "D.Là người điều khiển xe cơ giới.");
let question6 = new Question("Câu 6:Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?", ["A. Bị nghiêm cấm tuỳ từng trường hợp.", "B.Không bị nghiêm cấm.", "C. Bị nghiêm cấm.", "D. Được khuyến khích "], "C. Bị nghiêm cấm.");
let question7 = new Question("Câu 7:Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh trên 50 cm3 ", ["A. 17 tuổi", "B. 19 tuổi ", "C. 18 tuổi", "D. 20 tuổi"], "C. 18 tuổi");
let question8 = new Question("Câu 8:Người điểu khiển xe mô tô hai bánh, xe gắn máy được phép chở tối đa 2 người trong những trường hợp nào?", ["A. Cả ý B và ý C.", "B.Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi.", "C. Áp giải người có hành vi vi phạm pháp luật.", "D. Khi đi chơi"], "A. Cả ý B và ý C.");
let question9 = new Question("Câu 9:Để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?", ["A. Tăng ga thật nhanh, giảm ga từ từ.", "B. Tăng ga thật nhanh, giảm ga thật nhanh.", "C. Tăng ga từ từ, giảm ga thật nhanh.", "D.Tăng ga từ từ, giảm ga từ từ."], "D.Tăng ga từ từ, giảm ga từ từ.");
let question10 = new Question("Câu 10:Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?", ["A. Xe mô tô 2 bánh có dung tích xi-lanh từ trên 50 cm3 .", "B. Xe gắn máy có dung tích xi-lanh dưới 50 cm3.", "C. Xe ô tô tải dưới 3,5 tấn; xe chở người đến 9 chỗ ngồi", "B. Xe gắn máy có dung tích xi-lanh dưới 50 cm3."], "B. Xe gắn máy có dung tích xi-lanh dưới 50 cm3.");

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let getQuestion = document.getElementById('question');
showQuestion(question1);

function next(index) {
    index++;
    showQuestion(questions[index]);
}

function showQuestion(question_1) {
    timeCount = 30;
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("questionScreen", questions.indexOf(question_1));
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('answer_' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];
    }
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
            alert("Bạn thật xuất sắc, chúc mừng bạn đã vượt qua toàn bộ câu hỏi <3 ");
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
