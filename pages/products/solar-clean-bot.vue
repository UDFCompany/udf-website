<template>
  <div>
    <section>
      <!-- SECTION 1 -->
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <div class="col-span-1" v-for="item in featuresBenefits.section_1">
              <div>
                <img :src="item.image" alt="Solar Clean Bot" class="w-full h-auto">
                <div class="text-center text-sm md:text-base font-semibold whitespace-pre-line">{{ item.benefits }}
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <!-- carousel -->
            <div class="h-[500px] bg-gray-200"></div>
          </div>
        </div>
      </div>
      <!-- SECTION 2 -->
      <div class="mt-10 space-y-4">
        <div class="bg-orange-500 py-4 text-white">
          <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_2.title') }}</h1>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="aspect-w-16 aspect-h-9">
              <iframe class="w-full h-[651px]" src="https://www.youtube.com/embed/w95_lWB-OFg"
                title="Vì sao cần vệ sinh định kỳ tấm pin năng lượng mặt trời?" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
        <!-- SECTION 3 -->
        <div class="bg-orange-500 py-4 text-white">
          <div class="container mx-auto px-4">
            <div class="max-w-7xl mx-auto">
              <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_3.title') }}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div>
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
                <div class="text-center text-sm md:text-base mt-2">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION 5 -->
        <div class="bg-orange-500 py-4 text-white">
          <div class="container mx-auto px-4">
            <div class="max-w-7xl mx-auto">
              <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_5.title') }}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="w-full flex flex-col items-center" v-for="item in featuresBenefits.section_5">
                <img :src="item.image" alt="Solar Clean Bot"
                  class="w-full h-auto max-w-full rounded-xl overflow-hidden">
                <div class="text-center text-sm md:text-2xl font-bold whitespace-pre-line mt-4">{{ item.benefits }}
                </div>
                <div class="mt-4 px-4">
                  <ul class="list-disc text-sm md:text-base font-medium whitespace-pre-line mt-2">
                    <li class="pb-2" v-for="description in item.descriptions" :key="description">{{ description }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="py-4">
              <div class="rounded-xl overflow-hidden">
                <img src="/products/solar-clean-bot/features-benefits/section_5/vi_tri_khong_an_toan.jpg"
                  alt="Solar Clean Bot" class="w-full h-auto max-w-full">
              </div>
              <div class="py-3">
                <div class="text-center text-sm md:text-2xl font-bold">
                  {{ t('features_benefits.section_5.efficiency.vi_tri_khong_an_toan') }}
                </div>
              </div>
            </div>
            <div class="py-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="w-full flex flex-col items-center">
                  <img src="/products/solar-clean-bot/features-benefits/section_5/safety.png" alt="Solar Clean Bot"
                    class="w-full h-auto max-w-full">
                  <div class="text-center text-sm md:text-2xl font-bold whitespace-pre-line mt-4">
                    {{ t('features_benefits.section_5.efficiency.an_toan_title') }}
                  </div>

                  <div class="mt-4 px-4">
                    <div class="text-sm md:text-xl font-semibold whitespace-pre-line">
                      {{ t('features_benefits.section_5.efficiency.an_toan_lao_dong.title') }}
                    </div>
                    <ul class="list-disc text-sm md:text-base font-medium whitespace-pre-line mt-2">
                      <li>{{ t('features_benefits.section_5.efficiency.an_toan_lao_dong.description1') }}</li>
                    </ul>
                  </div>
                  <div class="mt-4 px-4">
                    <div class="text-sm md:text-xl font-semibold whitespace-pre-line">
                      {{ t('features_benefits.section_5.efficiency.an_toan_he_thong.title') }}
                    </div>
                    <ul class="list-disc text-sm md:text-base font-medium whitespace-pre-line mt-2 space-y-2">
                      <li>{{ t('features_benefits.section_5.efficiency.an_toan_he_thong.description1') }}</li>
                      <li>{{ t('features_benefits.section_5.efficiency.an_toan_he_thong.description2') }}</li>
                    </ul>
                  </div>
                </div>
                <div class="w-full flex flex-col items-center">
                  <img src="/products/solar-clean-bot/features-benefits/section_5/stonk.png" alt="Solar Clean Bot"
                    class="w-full h-auto max-w-full">
                  <div class="text-center text-sm md:text-2xl font-bold whitespace-pre-line mt-4">
                    {{ t('features_benefits.section_5.efficiency.hieu_qua_kinh_te_title') }}
                  </div>
                  <div class="mt-4 px-4 space-y-2">
                    <div class="text-sm md:text-xl font-semibold whitespace-pre-line">
                      {{ t('features_benefits.section_5.efficiency.hieu_qua_kinh_te.title') }}
                    </div>
                    <ul class="list-disc text-sm md:text-base font-medium whitespace-pre-line mt-2 space-y-2">
                      <li>{{ t('features_benefits.section_5.efficiency.hieu_qua_kinh_te.description1') }}</li>
                      <li>{{ t('features_benefits.section_5.efficiency.hieu_qua_kinh_te.description2') }}</li>
                    </ul>
                    <div class="text-sm md:text-base font-medium whitespace-pre-line">
                      {{ t('features_benefits.section_5.efficiency.hieu_qua_kinh_te.summary') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION 6 -->
        <div class="bg-orange-500 py-4 text-white">
          <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_6.title') }}</h1>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="text-center text-sm md:text-base font-medium whitespace-pre-line">
              <img src="/products/solar-clean-bot/features-benefits/section_6/so_sanh_hieu_qua.jpg"
                class="rounded-xl overflow-hidden" alt="Play">
              <div class="text-center text-sm md:text-2xl mt-6">
                <div>{{ t('features_benefits.section_6.image_title') }}</div>
              </div>
            </div>
            <div class="text-start text-sm md:text-base pt-6 px-4">
              <ul class="list-disc text-sm md:text-base font-medium whitespace-pre-line mt-2 space-y-2">
                <li>{{ t('features_benefits.section_6.description1') }}</li>
                <li>{{ t('features_benefits.section_6.description2') }}</li>
                <li>{{ t('features_benefits.section_6.description3') }}</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- SECTION 7 -->
        <div class="bg-orange-500 py-4 text-white">
          <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_7.title') }}</h1>
        </div>
        <div class="container mx-auto p-4">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="w-full flex flex-col items-center">
                <img src="/products/solar-clean-bot/features-benefits/section_7/power15.png"
                  alt="Power generation capacity is reduced" class="w-full h-auto max-w-full">
                <div class="text-center text-sm md:text-2xl font-bold whitespace-pre-line mt-4">
                  {{ t('features_benefits.section_7.power') }}
                </div>
              </div>
              <div class="w-full flex flex-col items-center">
                <img src="/products/solar-clean-bot/features-benefits/section_7/23month.png" alt="Operating time"
                  class="w-full h-auto max-w-full">
                <div class="text-center text-sm md:text-2xl font-bold whitespace-pre-line mt-4">
                  {{ t('features_benefits.section_7.operating_time') }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION 8 -->
        <div class="py-4 text-black">
          <div class="container mx-auto px-4 mt-10">
            <div class="max-w-7xl mx-auto">
              <h1 class="md:text-xl font-bold text-justify">{{ t('features_benefits.section_8.title') }}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="text-center text-sm md:text-base font-medium whitespace-pre-line">
              <img src="/products/solar-clean-bot/solar_hero.png" class="rounded-xl overflow-hidden"
                alt="Solar Clean Bot">
            </div>
          </div>
        </div>
        <!-- SECTION 9 -->
        <div class="bg-orange-500 py-4 text-white">
          <div class="container mx-auto px-4">
            <div class="max-w-7xl mx-auto">
              <h1 class="md:text-2xl font-bold text-center">{{ t('robots.section_9.title') }}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div @click="scrollToRobot(item.id)" class="w-full flex flex-col items-center cursor-pointer"
                v-for="item in robots" :key="item.id">
                <img :src="item.image" alt="Solar Clean Bot" class="w-full h-auto">
                <div class="text-center text-sm md:text-base font-semibold whitespace-pre-line mt-4">{{
                  item.overview_description }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- DETAILS ROBOTS -->
        <div :id="robot.id" class="py-4 text-gray-800" :class="robot.background_color" v-for="robot in robots"
          :key="robot.id">
          <div class="container mx-auto px-4 mt-10">
            <div class="max-w-7xl mx-auto">
              <div class="flex flex-col md:flex-row md:justify-center gap-4"
                :class="robot.flip ? 'md:flex-row-reverse' : 'md:flex-row'">
                <div class="w-full flex justify-center rounded-xl overflow-hidden md:w-1/4">
                  <img :src="robot.image_specs" alt="Solar Clean Bot" class="w-full h-auto">
                </div>
                <div class="w-full text-sm md:text-sm rounded-xl overflow-hidden md:w-1/2">
                  <div class="text-xl md:text-2xl text-center font-semibold whitespace-pre-line mb-4">
                    {{ t('robots.section_9.thong_so_ky_thuat') }}
                  </div>
                  <ul
                    class="list-disc list-inside text-sm md:text-base font-medium whitespace-pre-line mt-2 space-y-1 p-4">
                    <li v-for="item in robot.specs" :key="item">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION 10 -->
        <div class="py-4 bg-orange-500 text-white">
          <div class="container mx-auto px-4">
            <div class="max-w-7xl mx-auto">
              <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_10.title') }}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="flex justify-center">
              <img src="/products/solar-clean-bot/features-benefits/section_10/thao_roi.png"
                class="rounded-xl overflow-hidden" alt="Solar Clean Bot">
            </div>
          </div>
        </div>
        <!-- SECTION 11 -->
        <div class="py-4 bg-orange-500 text-white">
          <div class="container mx-auto px-4">
            <div class="max-w-7xl mx-auto">
              <h1 class="md:text-2xl font-bold text-center">{{ t('features_benefits.section_10.title') }}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="flex justify-center">
              <img src="/products/solar-clean-bot/features-benefits/section_10/thao_roi.png"
                class="rounded-xl overflow-hidden" alt="Solar Clean Bot">
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-7xl mx-auto">
            <div class="flex justify-center">
              <img src="/products/solar-clean-bot/features-benefits/section_10/thao_roi.png"
                class="rounded-xl overflow-hidden" alt="Solar Clean Bot">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const scrollToRobot = (id) => {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.offsetTop - 68,
    behavior: 'smooth'
  });
};

const { t } = useI18n({
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
        },
        section_5: {
          title: "Methods of cleaning",
          efficiency: {
            vi_tri_khong_an_toan: "The location is not safe when performing manual cleaning",
            an_toan_title: "More safety when using Robot",
            hieu_qua_kinh_te_title: "More economic efficiency when cleaning time is shortened and labor is reduced",
            an_toan_lao_dong: {
              title: "Labor safety",
              description1: "Robot operators can choose safe, convenient positions for remote observation and control, operate gently without having to constantly waste effort, avoid fatigue and avoid losing balance, which can easily lead to slipping and had an accident."
            },
            an_toan_he_thong: {
              title: "System safety",
              description1: "Robot wheels are designed with rubber coating with appropriate hardness to avoid causing \"micro crack\" and scratches on the surface of the panels",
              description2: "Reducing the number of workers working on the roof in the same location, at the same time, reducing the load-bearing pressure affecting the roof structure."
            },
            hieu_qua_kinh_te: {
              title: "Economic efficiency",
              description1: "Revenue decreased due to dust and dirt: 3 million VND/day",
              description2: "Cleaning time and number of workers are reduced by half when using Robots",
              summary: "Thus, the shorter the cleaning time, the more beneficial it is, so investors need to choose the solution of using Robots to shorten cleaning time to maximize the system's power generation efficiency."
            },
          },
          manual: {
            title: "Manual cleaning",
            description1: "No. labor [person/MW]: 04",
            description2: "Working hour [Day (8 hours)/MW]: 02",
            description3: "Easily causes damage to the surface of the solar panel",
            description4: "Affects roof structure",
            description5: "Ignore or improperly clean solar panels far away and dangerous locations",
          },
          robot: {
            title: "Robot utilization",
            description1: "No. labor [person/MW]: 02",
            description2: "Working hour [Day (8 hours)/MW]: 01",
            description3: "Reduce operating costs",
            description4: "Increase the revenue by shortening cleaning time and reducing labor",
            description5: "Clean evenly at all points on the surface of each panel",
            description6: "Operators can clean panels in dangerous locations remotely"
          }
        },
        section_6: {
          title: "Effectively cleans the solar panel",
          image_title: "Compare the cleaning efficiency between two rows of panels",
          description1: "The robot uses water to dissolve the dust on the surface of the panels, then uses a brush to brush and pour the water containing dirt onto the roof through the gaps between the panels.",
          description2: "The nylon brush has enough elasticity and hardness to dispel hidden dust but does not scratch the tempered glass surface of the panel.",
          description3: "The rotation speed of the high brush creates a contact cycle at each point on the panel surface up to 10 times/position/second. The number of bundles is staggered with dense density, and the mass of the The robot creates brush pressure on the surface of the solar panel, helping to dispel >90% of common dirt.",
        },
        section_7: {
          title: "When should cleaning be performed?",
          power: "Power generation capacity is reduced",
          operating_time: "Operating time",
        },
        section_8: {
          title: "The investment cost of a solar power system is very large, the payback period and profitable exploitation lasts 20-25 years, so investors should consider choosing suppliers that provide robots and services, professional cleaning and maintenance, avoiding technical problems to ensure system safety.",
        },
        section_10: {
          title: "Robot can be disassembled into parts, making it convenient for transportation to the roof",
        }
      },
      robots: {
        section_9: {
          title: "Robot models for factory rooftop solar systems",
          thong_so_ky_thuat: "Specifications",
          bot_r1: {
            title: "Solar Clean Bot R1",
            specs: {
              s1: "Cleaning capacity: 800 m2/h [0.5-0.8MWp/ngày]",
              s2: "Weight: 42 kg",
              s3: "Dimentions: 1380*890*320mm",
              s4: "Brush width: 1300mm",
              s5: "Gaps can be overcome: 300mm",
              s6: "Water consumption: 0.2-0.8 l/m2, ~5200 lít/1MWp",
              s7: "Works continuously after 1 charge: 4.5h",
              s8: "Parts can be disassembled: Battery, brushes, electrical system, moving mechanism, the heaviest part weighs < 20kg, assembly takes 15 minutes",
              s9: "Control mode: Manual and semi-automatic]",
              s10: "Water pressure: 2-8 bar",
              s11: "Maximum working tilt angle: 10°",
              s12: "Remote control range: 200m",
              s13: "Material: 6061 aluminum, engineering plastic and 304 stainless steel have high hardness, durability and do not oxidize",
              s14: "Rubber-coated wheels: Have appropriate hardness, do not cause scratches and microcracks to the solar panels",
              s15: "Waterproof protective box for battery & control System",
              s16: "Safe mode: Automatically locks wheels when loss of control signal",
            }
          },
          bot_r2: {
            title: "Solar Clean Bot R2",
            specs: {
              s1: "Cleaning capacity: 1000 m2/h [1.0-1.2MWp/ngày]",
              s2: "Weight: 65 kg",
              s3: "Dimentions: 1370*1365*345mm",
              s4: "Brush width: 2500mm",
              s5: "Gaps can be overcome: 500mm",
              s6: "Water consumption: 0.2-0.8 l/m2, ~5200 lít/1MWp",
              s7: "Works continuously after 1 charge: 4.0h",
              s8: "Parts can be disassembled: Battery, brushes, electrical system, moving mechanism, the heaviest part weighs <20kg, assembly takes 15 minutes",
              s9: "Control mode: Manual and semi-automatic",
              s10: "Water pressure: 2-8 bar",
              s11: "Maximum working tilt angle: 10°",
              s12: "Remote control range: 200m",
              s13: "Material: 6061 aluminum, engineering plastic and 304 stainless steel have high hardness, durability and do not oxidize",
              s14: "Rubber-coated wheels: Have appropriate hardness, do not cause scratches and microcracks to the solar panels",
              s15: "Waterproof protective box for battery & control System",
              s16: "Safe mode: Automatically locks wheels when loss of control signal",
            }
          },
          bot_r3: {
            title: "Solar Clean Bot R3",
            specs: {
              s1: "Cleaning capacity: 2000 m2/h [1.5-1.8MWp/ngày]",
              s2: "Weight: 75 kg",
              s3: "Dimentions: 1370*2560*345mm",
              s4: "Brush width: 2500mm",
              s5: "Gaps can be overcome: 500mm",
              s6: "Water consumption: 0.2-0.8 l/m2, ~5200 lít/1MWp",
              s7: "Works continuously after 1 charge: 4.0h",
              s8: "Parts can be disassembled: Battery, brushes, electrical system, moving mechanism, the heaviest part weighs <20kg, assembly takes 15 minutes",
              s9: "Control mode: Manual and semi-automatic",
              s10: "Water pressure: 2-8 bar",
              s11: "Maximum working tilt angle: 10°",
              s12: "Remote control range: 200m",
              s13: "Material: 6061 aluminum, engineering plastic and 304 stainless steel have high hardness, durability and do not oxidize",
              s14: "Rubber-coated wheels: Have appropriate hardness, do not cause scratches and microcracks to the solar panels",
              s15: "Waterproof protective box for battery & control System",
              s16: "Safe mode: Automatically locks wheels when loss of control signal",
            }
          }
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
        },
        section_5: {
          title: "Phương pháp thực hiện vệ sinh",
          efficiency: {
            vi_tri_khong_an_toan: "Vị trí không an toàn khi thực hiện vệ sinh thủ công",
            an_toan_title: "An toàn hơn khi sử dụng Robot",
            hieu_qua_kinh_te_title: "Hiệu quả kinh tế hơn khi rút ngắn thời gian vệ sinh và giảm nhân công",
            an_toan_lao_dong: {
              title: "An toàn lao động",
              description1: "Người vận hành robot có thể lựa chọn các vị trí an toàn, thuận lợi để quan sát và điều khiển từ xa, thao tác nhẹ nhàng không phải mất sức liên tục, tránh mệt mỏi và không bị mất thăng bằng dễ dẫn đến trượt chân và bị tai nạn.",
            },
            an_toan_he_thong: {
              title: "An toàn hệ thống",
              description1: "Bánh xe robot được thiết kế bọc cao su với độ cứng phù hợp không gây hiện tượng “micro crack” và trầy xước bề mặt tấm pin.",
              description2: "Giảm được số lượng nhân công làm việc trên mái cùng một vị trí, cùng một thời điểm, giảm áp lực chịu tải ảnh hưởng lên kết cấu mái.",
            },
            hieu_qua_kinh_te: {
              title: "Hiệu quả kinh tế",
              description1: "Doanh thu giảm do bụi bẩn = 3 triệu/ngày/MW",
              description2: "Thời gian vệ sinh và số lượng nhân công giảm 1/2 khi sử dụng Robot.",
              summary: "Như vậy thời gian thực hiện vệ sinh càng ngắn thì càng có lợi, do đó chủ đầu tư cần phải lựa chọn giải pháp sử dụng Robot, rút ngắn thời gian vệ sinh để khai thác cao nhất hiệu quả phát điện của hệ thống.",
            },
          },
          manual: {
            title: "Vệ sinh thủ công",
            description1: "Nhân công [Người/MW]: 04",
            description2: "Thời gian vệ sinh [Ngày (8h)/MW]: 02",
            description3: "Dễ gây hư hỏng bề mặt tấm pin",
            description4: "Ảnh hưởng đến kết cấu mái ",
            description5: "Bỏ qua hoặc vệ sinh không sạch các tấm pin ở xa và các vị trí nguy hiểm",
          },
          robot: {
            title: "Sử dụng robot",
            description1: "Nhân công [Người/MW]: 02",
            description2: "Thời gian vệ sinh [Ngày (8h)/MW]: 01",
            description3: "Giảm chi phí vận hành",
            description4: "Tăng doanh thu bán điện do rút ngắn thời gian vệ sinh và giảm nhân công",
            description5: "Đồng đều tại tất cả các điểm trên bề mặt từng tấm pin",
            description6: "Người vận hành có thể vệ sinh các tấm pin ở những vị trí nguy hiểm từ xa",
          }
        },
        section_6: {
          title: "Hiệu quả làm sạch bề mặt tấm pin",
          image_title: "So sánh hiệu quả làm sạch giữa 2 dãy pin",
          description1: "Robot sử dụng nước để làm tan rã lớp bụi trên bề mặt tấm pin sau đó dùng chổi quét để đánh và dồn phần nước có chứa bụi bẩn xuống mái qua các khe hở giữa các tấm pin. ",
          description2: "Chổi nylon có độ đàn hồi và độ cứng đủ đánh tan bụi ẩn nhưng không làm trầy xước bề mặt kính cường lực của tấm pin.",
          description3: "Tốc độ quay của chổi cao tạo ra chu kỳ tiếp xúc tại mỗi điểm trên bề mặt tấm pin lên đến 10 lần/vị trí/giây, số lượng bó cước được bố trí so le với mật độ dày đặc, đồng thời khối lượng của robot tạo nên lực ép chổi lên bề mặt tấm pin giúp đánh tan >90% các loại bụi bẩn thông thường.",
        },
        section_7: {
          title: "Khi nào thì nên thực hiện vệ sinh?",
          power: "Công suất phát điện giảm",
          operating_time: "Thời gian vận hành",
        },
        section_8: {
          title: "Chi phí đầu tư hệ thống điện năng lượng mặt trời rất lớn, thời gian hoàn vốn và khai thác để sinh lợi kéo dài 20-25 năm, do vậy chủ đầu tư nên cân nhắc lựa chọn các đơn vị cung cấp robot, dịch vụ vệ sinh và bảo dưỡng chuyên nghiệp, tránh gây ra các sự cố kỹ thuật để đảm bảo sự an toàn cho hệ thống.",
        },
        section_10: {
          title: "Robot có thể tháo rời từng phần thuận tiện cho việc vận chuyển lên mái",
        }
      },
      robots: {
        section_9: {
          title: "Các mẫu Robot dành cho hệ thống solar áp mái nhà xưởng",
          thong_so_ky_thuat: "Thông số kỹ thuật",
          bot_r1: {
            title: "Solar Clean Bot R1",
            specs: {
              s1: "Công suất vệ sinh trung bình: 800 m2/h [0.5-0.8MWp/ngày]",
              s2: "Khối lượng: 42 kg",
              s3: "Kích thước: 1380*890*320mm",
              s4: "Kích thước chiều rộng chổi: 1300mm",
              s5: "Khoảng hở có thể vượt qua: 300mm",
              s6: "Lượng nước tiêu hao: 0.2-0.8 l/m2, ~5200 lít/1MWp",
              s7: "Hoạt động liên tục sau 1 lần sạc: 4.5h",
              s8: "Robot có thể tháo rời từng phần: Pin, chổi, hệ thống điện, cơ cấu di chuyển, phần nặng nhất có khối lượng < 20kg, lắp ráp 15 phút",
              s9: "Chế độ điều khiển: Bằng tay và bán tự động",
              s10: "Áp lực nước: 2-8 bar",
              s11: "Góc nghiêng làm việc tối đa: 10°",
              s12: "Phạm vi điều khiển từ xa: 200m",
              s13: "Vật liệu: Nhôm 6061, nhựa kỹ thuật và Inox 304 có độ cứng, độ bền cao và không bị oxy hóa",
              s14: "Bánh xe bọc cao su: Có độ cứng phù hợp, không gây trầy xước và microcrack cho tấm pin",
              s15: "Pin và Hệ thống điều khiển: Có hộp bảo vệ chống nước",
              s16: "Chế độ an toàn: Tự động khóa bánh xe khi không có tín hiệu điều khiển",
            }
          },
          bot_r2: {
            title: "Solar Clean Bot R2",
            specs: {
              s1: "Công suất vệ sinh trung bình: 1000 m2/h [1.0-1.2MWp/ngày]",
              s2: "Khối lượng: 65 kg",
              s3: "Kích thước: 1370*1365*345mm",
              s4: "Kích thước chiều rộng chổi: 2500mm",
              s5: "Khoảng hở có thể vượt qua: 500mm",
              s6: "Lượng nước tiêu hao: 0.2-0.8 l/m2, ~5200 lít/1MWp",
              s7: "Hoạt động liên tục sau 1 lần sạc: 4.0h",
              s8: "Robot có thể tháo rời từng phần: Pin, chổi, hệ thống điện, cơ cấu di chuyển, phần nặng nhất có khối lượng <20kg, lắp ráp 15 phút",
              s9: "Chế độ điều khiển: Bằng tay và bán tự động",
              s10: "Áp lực nước: 2-8 bar",
              s11: "Góc nghiêng làm việc tối đa: 10°",
              s12: "Phạm vi điều khiển từ xa: 200m",
              s13: "Vật liệu: Nhôm 6061, nhựa kỹ thuật và Inox 304 có độ cứng, độ bền cao và không bị oxy hóa",
              s14: "Bánh xe bọc cao su: Có độ cứng phù hợp, không gây trầy xước và microcrack cho tấm pin",
              s15: "Pin và Hệ thống điều khiển: Có hộp bảo vệ chống nước",
              s16: "Chế độ an toàn: Tự động khóa bánh xe khi không có tín hiệu điều khiển",
            }
          },
          bot_r3: {
            title: "Solar Clean Bot R3",
            specs: {
              s1: "Công suất vệ sinh trung bình: 2000 m2/h [1.5-1.8MWp/ngày]",
              s2: "Khối lượng: 75 kg",
              s3: "Kích thước: 1370*2560*345mm",
              s4: "Kích thước chiều rộng chổi: 2500mm",
              s5: "Khoảng hở có thể vượt qua: 500mm",
              s6: "Lượng nước tiêu hao: 0.2-0.8 l/m2, ~5200 lít/1MWp",
              s7: "Hoạt động liên tục sau 1 lần sạc: 4.0h",
              s8: "Robot có thể tháo rời từng phần: Pin, chổi, hệ thống điện, cơ cấu di chuyển, phần nặng nhất có khối lượng <20kg, lắp ráp 15 phút",
              s9: "Chế độ điều khiển: Bằng tay và bán tự động",
              s10: "Áp lực nước: 2-8 bar",
              s11: "Góc nghiêng làm việc tối đa: 10°",
              s12: "Phạm vi điều khiển từ xa: 200m",
              s13: "Vật liệu: Nhôm 6061, nhựa kỹ thuật và Inox 304 có độ cứng, độ bền cao và không bị oxy hóa",
              s14: "Bánh xe bọc cao su: Có độ cứng phù hợp, không gây trầy xước và microcrack cho tấm pin",
              s15: "Pin và Hệ thống điều khiển: Có hộp bảo vệ chống nước",
              s16: "Chế độ an toàn: Tự động khóa bánh xe khi không có tín hiệu điều khiển",
            }
          }
        }
      }
    },
  },
});

const robots = computed(() => ([
  {
    id: "bot_r1",
    image: "/products/solar-clean-bot/robots/solar_clean_bot_r1.png",
    overview_description: "Công suất vệ sinh\n800 m2/h [0.5- 0.8MWp/ngày]",
    image_specs: "/products/solar-clean-bot/robots/details/detail_r1.png",
    specs: Array.from({ length: 16 }, (_, i) => t(`robots.section_9.bot_r1.specs.s${i + 1}`)),
    background_color: "bg-orange-200",
    flip: false
  },
  {
    id: "bot_r2",
    image: "/products/solar-clean-bot/robots/solar_clean_bot_r2.png",
    overview_description: "Công suất vệ sinh\n1000 m2/h [1.0- 1.2MWp/ngày]",
    image_specs: "/products/solar-clean-bot/robots/details/detail_r2.png",
    specs: Array.from({ length: 16 }, (_, i) => t(`robots.section_9.bot_r2.specs.s${i + 1}`)),
    background_color: "bg-white",
    flip: true
  },
  {
    id: "bot_r3",
    image: "/products/solar-clean-bot/robots/solar_clean_bot_r3.png",
    overview_description: "Công suất vệ sinh\n2000 m2/h [1.5- 1.8MWp/ngày]",
    image_specs: "/products/solar-clean-bot/robots/details/detail_r3.png",
    specs: Array.from({ length: 16 }, (_, i) => t(`robots.section_9.bot_r3.specs.s${i + 1}`)),
    background_color: "bg-orange-200",
    flip: false
  },
]));

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
      image: "/products/solar-clean-bot/features-benefits/section_4/doanh_thu.png",
      benefits: t('features_benefits.section_4.benefits1'),
      description: t('features_benefits.section_4.description1')
    },
    {
      image: "/products/solar-clean-bot/features-benefits/section_4/toi_uu_chi_phi.png",
      benefits: t('features_benefits.section_4.benefits2'),
      description: t('features_benefits.section_4.description2')
    },
    {
      image: "/products/solar-clean-bot/features-benefits/section_4/tuoi_tho_he_thong.png",
      benefits: t('features_benefits.section_4.benefits3'),
      description: t('features_benefits.section_4.description3')
    }
  ],
  section_5: [
    {
      image: "/products/solar-clean-bot/features-benefits/section_5/manual.png",
      benefits: t('features_benefits.section_5.manual.title'),
      descriptions: [
        t('features_benefits.section_5.manual.description1'),
        t('features_benefits.section_5.manual.description2'),
        t('features_benefits.section_5.manual.description3'),
        t('features_benefits.section_5.manual.description4'),
        t('features_benefits.section_5.manual.description5'),
      ]
    },
    {
      image: "/products/solar-clean-bot/features-benefits/section_5/robot.jpg",
      benefits: t('features_benefits.section_5.robot.title'),
      descriptions: [
        t('features_benefits.section_5.robot.description1'),
        t('features_benefits.section_5.robot.description2'),
        t('features_benefits.section_5.robot.description3'),
        t('features_benefits.section_5.robot.description4'),
        t('features_benefits.section_5.robot.description5'),
        t('features_benefits.section_5.robot.description6'),
      ]
    }
  ]
}));
</script>
