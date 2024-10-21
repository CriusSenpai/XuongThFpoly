type menu = {
    string: string;
    link: string;
}
type Ttestimonials = {
    customerName: string;
    customerComment: string;
}
type Tservice = {
    serviceName: string;
    serviceDescription: string;
}

const menu_arr: menu[] = [
    { string: "Giới thiệu", link: "#about" },
    { string: "Dịch vụ", link: "#services" },
    { string: "Cảm nhận", link: "#testimonials" },
    { string: "Liên hệ", link: "#contact" },
]

const testimonials_arr: Ttestimonials[] = [
    {
        customerName: "Nguyễn Văn A", customerComment: "Unstoppable Gym đã giúp tôi có được thân hình như mong muốn. Huấn luyện viên rất tận tình và chuyên nghiệp."
    },
    { customerName: "Trần Thị B", customerComment: "Trang thiết bị hiện đại và không gian thoải mái đã khiến tôi cảm thấy rất hài lòng khi luyện tập tại đây." }

]

const service_arr: Tservice[] = [
    { serviceName: "Huấn luyện cá nhân", serviceDescription: "Đội ngũ huấn luyện viên sẽ tạo kế hoạch tập luyện cá nhân hóa theo mục tiêu của bạn." },
    { serviceName: "Lớp nhóm", serviceDescription: "Tham gia các lớp nhóm như yoga, pilates, và Zumba để thêm động lực luyện tập" },
    { serviceName: "Chăm sóc dinh dưỡng", serviceDescription: "Chuyên gia dinh dưỡng tư vấn chế độ ăn uống giúp bạn đạt kết quả tốt nhất." },
]
export{menu, Ttestimonials, Tservice}
export{menu_arr, testimonials_arr, service_arr}