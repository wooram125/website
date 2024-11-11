    var checkinCount = 0;
    function checkIn() {
        checkinCount += 1;
        alert("총 " + checkinCount + "번 엉덩이를 만졌습니다.");
    }

    function showBig(imageElement) {
        var bigImage = document.getElementById('big');
        bigImage.src = imageElement.src;
    }
