// تحديد جميع العناصر التي تحتوي على المنتج
const products = document.querySelectorAll('.product');

// إضافة حدث عند الضغط على أي منتج
products.forEach((product) => {
    product.addEventListener('click', () => {
        const productName = product.querySelector('h2').innerText;
        alert(`You clicked on ${productName}`);
    });

    // تغيير الخلفية عند تمرير الماوس فوق المنتج
    product.addEventListener('mouseover', () => {
        product.style.backgroundColor = '#f0f8ff'; // لون خلفية فاتح
    });

    // إعادة الخلفية الأصلية عند خروج الماوس
    product.addEventListener('mouseout', () => {
        product.style.backgroundColor = ''; // إزالة لون الخلفية
    });
});
