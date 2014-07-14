(function() {
    var 
    config_data = {
        default_language : "en",
        LOCALIZATION: {
            languages : ["en", "ar"],
            translations: {
                ar: {
                    "Settings" : "الإعدادات",
                    "Arabic Language" : "تفعيل اللغة العربية",
                    "Home": " الرئيسية",
                    "Announcements": " الإعلانات",
                    "Regulations":" اللوائح التنفيذية",
                    "Prospectuses": " نشرات الإصدار",
                    "Publications": " مركز توعية المستثمر",
                    "Media Center": " الملفات الإعلامية",
                    "CMA TV" : " قناة السوق المالية",
                    "Authorized persons" : " الأشخاص المرخص لهم",
                    "Annual reports" : " التقارير السنوية",
                    "CML" : " نظام السوق المالية",
                    "Forms" : " النماذج",
                    "About CMA" : " هيئة السوق المالية",
                    "Contact us" : " اتصل بنا",
                    "Feedback" : " التقييم",
                    "Capital Market Authority" : " هيئة السوق المالية"
                },
                en: {
                    "Settings" : "Settings",
                    "Arabic Language" : "Arabic language",
                    "Home" : "Home",
                    "Announcements" : "Announcements",
                    "Regulations" : "Regulations",
                    "Prospectuses" : "Prospectuses",
                    "Publications" : "Publications",
                    "Media Center" : "Media center",
                    "CMA TV" : "CMA TV",
                    "Authorized persons" : "Authorized persons",
                    "Annual reports" : "Annual reports",
                    "CML" : "CML",
                    "Forms" : "Forms",
                    "About CMA" : "About CMA",
                    "Contact us" : "Contact us",
                    "Feedback" : "Feedback",
                    "Capital Market Authority" : "Capital Market Authority",
                    
                    "Change font-size" : "Change font-size",
                    "Dark Theme": "Dark Theme"
                }
            }
        }
    };
    
    angular.module('angular-language-module.localization', [])
        .constant("LOCALIZATION", config_data.LOCALIZATION)
        .value("CURRENT_LANGUAGE", config_data.default_language);
}());