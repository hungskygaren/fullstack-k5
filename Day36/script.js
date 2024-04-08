const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

// Tạo một thể hiện mới của SpeechRecognition
const recognition = new SpeechRecognition();

// Đặt một số thuộc tính cho việc nhận diện
recognition.continuous = false;
recognition.lang = "vi-VN"; // Sử dụng tiếng Việt
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Bắt đầu nhận diện khi màn hình được nhấp vào
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const action = document.querySelector(".action");
btn.onclick = () => {
  recognition.start();
  console.log("Sẵn sàng nhận lệnh bằng giọng nói.");
};
function openWebsiteWithMessage(url, message) {
  action.textContent = message;

  setTimeout(() => {
    window.open(url, "_blank");
  }, 1500);
}
// Xử lý sự kiện kết quả
recognition.onresult = (event) => {
  // Lấy chuỗi văn bản đã nhận diện được
  const text = event.results[0][0].transcript;
  // Xử lý chuỗi văn bản để biết được người dùng vừa đọc gì
  console.log(`Kết quả nhận được: ${text}.`);
  result.textContent = text;

  if (text.toLowerCase().trim() === "facebook") {
    openWebsiteWithMessage("https://www.facebook.com", "Opening Facebook...");
  } else if (text.toLowerCase().trim() === "google") {
    openWebsiteWithMessage("https://www.google.com", "Opening Google...");
  } else if (text.toLowerCase().trim() === "youtube") {
    openWebsiteWithMessage("https://www.youtube.com", "Opening Youtube...");
  } else if (text.toLowerCase().trim() === "google drive") {
    openWebsiteWithMessage(
      "https://drive.google.com/drive/my-drive",
      "Opening Google drive..."
    );
  } else if (text.toLowerCase().trim() === "google maps") {
    window.open("https://www.google.com/maps", "_blank");
  } else if (
    text.toLowerCase().includes("mở video") ||
    text.toLowerCase().includes("video") ||
    text.toLowerCase().includes("xem video")
  ) {
    // Tách từ khóa "video" để lấy phần còn lại của câu yêu cầu
    const videoKeywordIndex = text.toLowerCase().indexOf("video");
    const videoRequest = text.slice(videoKeywordIndex + 6).trim();

    // Kiểm tra xem người dùng yêu cầu mở video nào
    switch (videoRequest) {
      case "ai chung tình được mãi":
        openWebsiteWithMessage(
          "https://www.youtube.com/watch?v=eZpJdO22jZ0",
          "Opening Video ai chung tình được mãi..."
        );
        break;

      default:
        console.log("Không thực hiện yêu cầu");
    }
  } else if (
    text.toLowerCase().includes("mở bài hát") ||
    text.toLowerCase().includes("bài hát") ||
    text.toLowerCase().includes("nghe bài hát")
  ) {
    // Tách từ khóa "video" để lấy phần còn lại của câu yêu cầu
    const videoKeywordIndex = text.toLowerCase().indexOf("bài hát");
    const videoRequest = text.slice(videoKeywordIndex + 8).trim();

    // Kiểm tra xem người dùng yêu cầu mở video nào
    switch (videoRequest) {
      case "ai chung tình được mãi":
        openWebsiteWithMessage(
          "https://zingmp3.vn/album/Ai-Chung-Tinh-Duoc-Mai-Single-Dinh-Tung-Huy-ACV/699A9WO9.html",
          "Opening bài hát ai chung tình được mãi..."
        );
        break;

      default:
        console.log("Không thực hiện yêu cầu");
    }
  } else if (
    text.toLowerCase().includes("chỉ đường") ||
    text.toLowerCase().includes("chỉ đường tới") ||
    text.toLowerCase().includes("tới") ||
    text.toLowerCase().includes("đường tới")
  ) {
    const locationKeyword = "Vinhomes Smart city Tây Mỗ";
    const startIndex = text
      .toLowerCase()
      .indexOf(locationKeyword.toLowerCase());

    if (startIndex !== -1) {
      // Kiểm tra xem từ khóa có tồn tại trong chuỗi không
      const location = text.slice(startIndex).trim();
      switch (location.toLowerCase()) {
        case "vinhomes smart city tây mỗ":
          openWebsiteWithMessage(
            "https://www.google.com/maps/place/Vinhomes+Smart+City+T%C3%A2y+M%E1%BB%97/@21.0046874,105.7412839,17z/data=!3m1!4b1!4m6!3m5!1s0x313453d4ead47a63:0x9af352cfc1f411a1!8m2!3d21.0046874!4d105.7412839!16s%2Fg%2F11kb0nm6zm?entry=ttu",
            "Đang mở chỉ dẫn tới Vinhomes Smartcity Tây Mỗ..."
          );
          break;

        default:
          console.log("Không thực hiện yêu cầu");
      }
    }
  } else {
    action.textContent = "Chưa thực hiện được yêu cầu";
    console.log("Không thực hiện được yêu cầu");
  }
};

// Dừng nhận diện khi giọng nói kết thúc
recognition.onspeechend = () => {
  recognition.stop();
};
