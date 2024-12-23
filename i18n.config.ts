export default defineI18nConfig(() => ({
  legacy: false,
  locale: "vi",
  messages: {
    en: {
      about: {
        description:
          "Uni Design Factory Co., Ltd. is a company that researches, develops and manufactures equipment in the fields of Robotics, IoT, Factory Automation and Training Equipmennt. Providing R&D services for businesses, system operation and maintenance services, consulting on Automation and Information Technology solutions.",
      },
      products: {
        solarCleanBot: {
          name: "Solar Clean Bot",
          description: "Automatic solar panel cleaning robot",
        },
        componentsTester: {
          name: "Components Tester",
          description: "Automatic components testing equipment",
        },
        factoryAutomation: {
          name: "Factory Automation",
          description: "Automation solutions for manufacturing",
        },
        trainingEquipment: {
          name: "Training Equipment",
          description: "Technical training equipment",
        },
      },
    },
    vi: {
      about: {
        description:
          "Công ty TNHH Uni Design Factory là đơn vị nghiên cứu, phát triển và sản xuất các thiết bị trong lĩnh vực Robot, IoT, Tự động hóa dây chuyền sản xuất và Thiết bị đào tạo. Cung cấp dịch vụ R&D cho các doanh nghiệp, dịch vụ vận hành và bảo trì hệ thống, tư vấn các giải pháp về Tự động hóa và Công nghệ thông tin.",
      },
      products: {
        solarCleanBot: {
          name: "Robot vệ sinh solar",
          description: "Robot tự động vệ sinh tấm pin năng lượng mặt trời",
        },
        componentsTester: {
          name: "Thiết bị kiểm tra linh kiện",
          description: "Thiết bị kiểm tra linh kiện tự động",
        },
        factoryAutomation: {
          name: "Tự động hoá sản xuất",
          description: "Giải pháp tự động hóa cho nhà máy sản xuất",
        },
        trainingEquipment: {
          name: "Thiết bị đào tạo",
          description: "Thiết bị phục vụ đào tạo kỹ thuật",
        },
      },
    },
  },
}));
