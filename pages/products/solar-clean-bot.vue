<template>
  <div>
    <section>
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <div class="col-span-1" v-for="item in featuresBenefits.section_1">
              <div>
                <img :src="item.image" alt="Solar Clean Bot" class="w-full h-auto">
                <div class="text-center text-sm md:text-base font-medium whitespace-pre-line">{{ item.benefits }}</div>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <!-- carousel -->
            <div class="h-[500px] bg-gray-200"></div>
          </div>
        </div>
      </div>
      <div class="mt-10 space-y-4">
        <div class="bg-orange-500 py-4 text-white">
          <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_2.title') }}</h1>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="aspect-w-16 aspect-h-9">
              <iframe class="w-full h-[651px]" src="https://www.youtube.com/embed/w95_lWB-OFg" title="Vì sao cần vệ sinh định kỳ tấm pin năng lượng mặt trời?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="text-center text-sm md:text-base font-medium whitespace-pre-line">
              <img src="/products/solar-clean-bot/features-benefits/section_2/hieu_suat.png" alt="Play">
            </div>
            <div class="text-center text-sm md:text-base mt-6">
              <div>{{ t('features_benefits.section_2.altChart') }}</div>
            </div>
            <div class="text-start text-sm md:text-base pt-6">
              <div>{{ t('features_benefits.section_2.description1') }}</div>
              <div>{{ t('features_benefits.section_2.description2') }}</div> 
            </div>
          </div>
        </div>
        <div class="bg-orange-500 py-4 text-white">
          <div class="container mx-auto px-4">
            <div class="max-w-7xl mx-auto">
              <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_3.title') }}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="mt-10">
            <!-- carousel -->
              <div class="h-[500px] bg-gray-200"></div>
            </div>
          </div>
        </div>
        <div class="bg-orange-500 py-4 text-white">
          <div class="container mx-auto px-4">
            <div class="max-w-7xl mx-auto">
              <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_4.title') }}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="w-full flex flex-col items-center" v-for="item in featuresBenefits.section_4">
                <img :src="item.image" alt="Solar Clean Bot" class="w-full h-auto max-w-[200px]">
                <div class="text-center text-sm md:text-xl font-bold whitespace-pre-line mt-4">{{ item.benefits }}</div>
                <div class="text-center text-sm md:text-base font-medium whitespace-pre-line mt-2">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

const {t} = useI18n({
  messages: {
    en: {
      features_benefits: {
        section_1: {
          benefits1: "Double cleaning capacity",
          benefits2: "Ability to clean dirt",
          benefits3: "Made in Vietnam\nTechnical support 24/7",
          benefits4: "1-year warranty",
        },
        section_2: {
          title: "Why is it necessary to periodically clean solar panels?",
          altChart: "Graph of rate of loss of power generation capacity due to dirt over time",
          description1: "Suppose electricity sales revenue : 300 mililon VND/month/MW => revenue/day/MW =10 million VND.",
          description2: "Revenue decreased due to dust and dirt/day= (revenue/day)*30% [Attenuation rate due to dirt] = 3 million VND/day/MW"
        },
        section_3: {
          title: "Depending on operating environmental conditions, the system's power generation efficiency can decrease up to 30% after about 60 days of not cleaning the solar panel surface.", 
        },
        section_4: {
          title: "Benefits of performing regular cleaning", 
          benefits1: "Optimize power generation efficiency",
          description1: "Increase revenue by 60-90 million VND/MW/month",
          benefits2: "Optimize investment costs",
          description2: "Guaranteed payback period",
          benefits3: "Maintain system lifespan",
          description3: "Guaranteed exploitation period of 20-25 years",
        }
      }
    },
    vi: {
      features_benefits: {
        section_1: {
          benefits1: "Công suất vệ sinh gấp đôi",
          benefits2: "Khả năng làm sạch bụi bẩn",
          benefits3: "Sản xuất tại Việt Nam\nHỗ trợ kỹ thuật 24/7",
          benefits4: "Bảo hành 01 năm",
        },
        section_2: {
          title: "Vì sao cần phải vệ sinh định kỳ tấm pin năng lượng mặt trời?",
          altChart: "Tỷ lệ suy hao khả năng phát điện do bụi bẩn theo thời gian",
          description1: "Giả sử doanh thu bán điện là 300 triệu/tháng/MW => doanh thu/ngày/MW = 10 triệu đồng.",
          description2: "Doanh thu giảm do bụi bẩn/ngày = (doanh thu/ngày) *30% [tỷ lệ suy hao do bụi bẩn] = 3 triệu đồng/ngày/MW"
        },
        section_3: {
          title: "Tuỳ thuộc vào điều kiện môi trường hoạt động mà hiệu suất phát điện của hệ thống có thể giảm đến 30% sau khoảng 60 ngày không thực hiện vệ sinh bề mặt tấm pin.", 
        },
        section_4: {
          title: "Những lợi ích khi thực hiện vệ sinh định kỳ",
          benefits1: "Tối ưu hiệu suất phát điện",
          description1: "Tăng doanh thu 60-90 triệu/MW/tháng",
          benefits2: "Tối ưu chi phí đầu tư",
          description2: "Đảm bảo thời gian hoàn vốn",
          benefits3: "Duy trì tuổi thọ hệ thống",
          description3: "Đảm bảo thời gian khai thác 20-25 năm",
        }
      }
    },
  },
});

const featuresBenefits = computed(() => ({
  section_1: [
    {
      image: "/products/solar-clean-bot/features-benefits/section_1/2x.png",
      benefits: t('features_benefits.section_1.benefits1'),  
    },
    {
      image: "/products/solar-clean-bot/features-benefits/section_1/90.png",
      benefits: t('features_benefits.section_1.benefits2'),
    },
    {
      image: "/products/solar-clean-bot/features-benefits/section_1/vietnam.png",
      benefits: t('features_benefits.section_1.benefits3'),
    },
    {
      image: "/products/solar-clean-bot/features-benefits/section_1/1year.png",
      benefits: t('features_benefits.section_1.benefits4'),
    },
  ],
  section_4: [
    {
      "image": "/products/solar-clean-bot/features-benefits/section_4/doanh_thu.png",
      "benefits": t('features_benefits.section_4.benefits1'),
      "description": t('features_benefits.section_4.description1')
    },
    {
      "image": "/products/solar-clean-bot/features-benefits/section_4/toi_uu_chi_phi.png",
      "benefits": t('features_benefits.section_4.benefits2'),
      "description": t('features_benefits.section_4.description2')
    },
    {
      "image": "/products/solar-clean-bot/features-benefits/section_4/tuoi_tho_he_thong.png",
      "benefits": t('features_benefits.section_4.benefits3'),
      "description": t('features_benefits.section_4.description3')
    }
  ]
}));
</script>
