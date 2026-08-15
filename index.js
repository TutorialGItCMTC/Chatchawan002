function processPayment(price: number, qty: number) {
    if (price <= 0 || qty <= 0) {
        console.log("ข้อมูลไม่ถูกต้อง");
        return;
    }

    const subTotal = price * qty;
    const fee = subTotal * 0.05;
    const grandTotal = subTotal + fee;

    console.log(`ยอดที่ต้องชำระทั้งหมด: ${grandTotal} บาท`);
}