// BÀI 1
/**
 * Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
 * Input: 
 * Handle: - Tạo biến tong1 và biến n1
 *         - dùng vòng lặp while kiểm tra nếu tong1 <= 10000 thì sẽ cho n1++ và tong1+=n 
 * Output: xuất ra số nguyên dương nhỏ nhất
 */

var getEle = function (id) {
    return document.getElementById(id);
}

var tong1 = 0;
var n1 = 0;

while (tong1 <= 10000) {
    n1++;
    tong1 += n1;
}
getEle('opBai1').innerHTML = 'Số nguyên dương nhỏ nhất: ' + n1;


// BÀI 2
var getEle = function (id) {
    return document.getElementById(id);
}
// Hàm tính tổng Sn
var tinhTongSn = function (x, n) {
    var tong = 0;
    for (i = 1; i <= n; i++) {
        tong += Math.pow(x, i);
        console.log(Math.pow(x, i));
    }
    return tong;
}

var btnTinhTong = getEle('btnTinhTong');
btnTinhTong.onclick = function () {
    // Lây giá trị người dùng nhập
    var x = parseInt(getEle('ipSoX').value);
    var n2 = parseInt(getEle('ipSoN').value);

    // tạo biến tong2 = kết quả truyền giá trị x và n2 vào hàm tinhTongSn
    var tong2 = tinhTongSn(x, n2);

    // Xuất kết quả ra màn hình
    getEle('xuatTinhTong').innerHTML = tong2;
}


// BÀI 3
var getEle = function (id) {
    return document.getElementById(id);
}
// Hàm tính giai thừa
var tinhGiaiThua = function (n) {
    var giaiThua = 1;
    for (i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    return giaiThua;
}

var btnTinhGiaiThua = getEle('btnTinhGiaiThua');
btnTinhGiaiThua.onclick = function () {
    // Lấy giá trị user nhập
    var n3 = parseInt(getEle('ipN').value);

    // tạo biến giaiThua = kết quả truyền giá trị n vào hàm tinhGiaiThua
    var giaiThua = tinhGiaiThua(n3);

    // Xuất kết quả ra màn hình
    getEle('xuatGiaiThua').innerHTML = giaiThua;
}

//BÀI 4
var getEle = function (id) {
    return document.getElementById(id);
}
// Hàm tạo div chẵn màu đỏ
var taoDivChan = function () {
    var newDiv = document.createElement("div");
    newDiv.style.background = "red";
    return newDiv
}
// Hàm tạo div lẻ màu xanh
var taoDivLe = function () {
    var newDiv = document.createElement("div");
    newDiv.style.background = "blue";
    return newDiv;
}
//DOM div bao ngoài
var divN = getEle('divN');

// Tạo click event
var btnTaoDiv = getEle('btnTaoDiv');
btnTaoDiv.onclick = function () {

    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            var newDiv = taoDivChan();
            var newContent = document.createTextNode("Div chẵn " + i);
            newDiv.appendChild(newContent);
            divN.appendChild(newDiv);
        } else {
            var newDiv = taoDivLe();
            var newContent = document.createTextNode("Div lẻ " + i);
            newDiv.appendChild(newContent);
            divN.appendChild(newDiv);
        }
    }
}