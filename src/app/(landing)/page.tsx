import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Check, Star } from "lucide-react"
import { ShinyButton } from "@/components/shiny-button"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { MockTelegramUI } from "@/components/mock-telegram-ui"
import { TelegramMessage } from "@/components/telegram-message";
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Icons } from "@/components/icons"

const Page = () => {
  const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "Nebiou@gmail.com",
      amount: 49.00 ETB
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-orange-100">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>ቅጽበታዊ የሶፍትዌርዎ ሁኔታዎች፣</span>
                <br />
                <span className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-transparent bg-clip-text">
                  ወደ ቴሌግራሞ የሚደርስበት ሲስተም
                </span>
              </Heading>
            </div>

            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              Mesob የእርስዎን ሶፍትዌር ለመቆጣጠር ቀላሉ መንገድ ነው። ለ
              <span className="font-semibold text-gray-700">
                ሽያጭ፣ አዲስ ተጠቃሚዎች፣ ወይም ማንኛውም ሌላ ክስተት
              </span>{" "}
              ቅጽበታዊ ማሳወቂያዎችን በቀጥታ ወደ ቴሌግራሞ ያግኙ።
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "ወሳኝ ክስተቶች ቅጽበታዊ ዲስኮርድ ማንቂያዎች",
                "አንዴ ይግዙ፣ ለዘላለም ይጠቀሙ",
                "ሽያጮችን፣ አዲስ ተጠቃሚዎችን፣ ወይም ማንኛውንም ሌላ ክስተት ይከታተሉ",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-orange-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                ዛሬ በነጻ ይጀምሩ
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-orange-100 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-orange-600" />
        <MaxWidthWrapper className="relative">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <MockTelegramUI>
              <AnimatedList>
                <TelegramMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="Mesob Avatar"
                  username="Mesob"
                  timestamp="ዛሬ ከሰዓት 2:35"
                  badgeColor="#f97316"
                  title="🧑‍💻 አዲስ ተጠቃሚ ተመዝግቧል"
                  content={{ name: "ነቢዩ ዳንኤል", email: "dnebiou@gmail.com" }}
                />
                <TelegramMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="Mesob Avatar"
                  username="Mesob"
                  timestamp="ዛሬ ከሰዓት 4:40"
                  badgeColor="#f97316"
                  title="💵 ክፍያ ደርሷል"
                  content={{ amount: "500.00 ETB", email: "kebede@gmail.com", plan: "PRO" }}
                />
                <TelegramMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="Mesob Avatar"
                  username="Mesob"
                  timestamp="ዛሬ ጥዋት 5:11"
                  badgeColor="#f97316"
                  title="🏆 የገቢ ማይልስቶን ተደረሰ"
                  content={{ recurringRevenue: "5000.00 ETB", growth: "+8.2%" }}
                />
              </AnimatedList>
            </MockTelegramUI>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative py-24 sm:py-32 bg-orange-100">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-orange-500">
              ቀላል ክትትል
            </h2>
            <Heading>ቅጽበታዊ መረጃዎችን በማግኘት ቀድመው ይሁኑ</Heading>
          </div>
     <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">

            {/* first bento grid element */}

            <div className="relative lg:row-span-2">

              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />


              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">

                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">

                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">

                    ቅጽበታዊ ማሳወቂያዎች

                  </p>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">

                    ወሳኝ ክስተቶች ሲፈጠሩ ወዲያውኑ ይወቁ፣

                    ቤትም ይሁኑ ወይም በጉዞ ላይ።

                  </p>

                </div>


                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">

                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">

                    <Image

                      className="size-full object-cover object-top"

                      src="/phone-screen.png"

                      alt="ስልክ ማያ ገጽ የመተግበሪያ በይነገጽን ያሳያል"

                      fill

                    />

                  </div>

                </div>

              </div>


              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />

            </div>


            {/* second bento grid element */}

            <div className="relative max-lg:row-start-1">

              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">

                <div className="px-8 pt-8 sm:px-10 sm:pt-10">

                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">

                    ማንኛውንም ክስተት ይከታተሉ

                  </p>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">

                    ከአዲስ ተጠቃሚ ምዝገባዎች እስከ የተሳካ ክፍያዎች ድረስ፣ Mesob

                    በእርስዎ SaaS ውስጥ ስላሉ ሁሉም ወሳኝ ክስተቶች ያሳውቅዎታል።

                  </p>

                </div>

                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">

                  <Image

                    className="w-full max-lg:max-w-xs"

                    src="/bento-any-event.png"

                    alt="ክስተት ክትትልን የሚያሳይ ቤንቶ ሳጥን"

                    width={500}

                    height={300}

                  />

                </div>

              </div>


              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />

            </div>


            {/* third bento grid element */}

            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">

              <div className="absolute inset-px rounded-lg bg-white" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">

                <div className="px-8 pt-8 sm:px-10 sm:pt-10">

                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">

                    ማንኛውንም ንብረቶች ይከታተሉ

                  </p>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">

                    እንደ ተጠቃሚ ኢሜይል፣ የግዢ መጠን ወይም ከተፈቀደው በላይ የሆነ

                    መጠን ያሉ ማንኛውንም ብጁ መረጃ ወደ ክስተት ያክሉ።

                  </p>

                </div>


                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">

                  <Image

                    className="w-full max-lg:max-w-xs"

                    src="/bento-custom-data.png"

                    alt="ብጁ ውሂብ ክትትልን የሚያሳይ ቤንቶ ሳጥን"

                    width={500}

                    height={300}

                  />

                </div>

              </div>


              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />

            </div>


            {/* fourth bento grid element */}

            <div className="relative lg:row-span-2">

              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />


              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">

                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">

                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">

                    ቀላል ውህደት

                  </p>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">

                    Mesobን ከነባር የስራ ፍሰቶችዎ ጋር በደቂቃዎች ውስጥ ያገናኙ

                    እና የእኛን ቀላል ምዝግብ ማስታወሻ API ከማንኛውም ቋንቋ ይደውሉ።

                  </p>

                </div>


                <div className="relative min-h-[30rem] w-full grow">

                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">

                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">

                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">

                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">

                          mesob.js

                        </div>

                      </div>

                    </div>


                    <div className="overflow-hidden">

                      <div className="max-h-[30rem]">

                        <SyntaxHighlighter

                          language="typescript"

                          style={{

                            ...oneDark,

                            'pre[class*="language-"]': {

                              ...oneDark['pre[class*="language-"]'],

                              background: "transparent",

                              overflow: "hidden",

                            },

                            'code[class*="language-"]': {

                              ...oneDark['code[class*="language-"]'],

                              background: "transparent",

                            },

                          }}

                        >

                          {codeSnippet}

                        </SyntaxHighlighter>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />

            </div>

          </div>

        </MaxWidthWrapper>

      </section>


      <section className="relative py-24 sm:py-32 bg-white">

        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">

          <div>

            <h2 className="text-center text-base/7 font-semibold text-orange-600">

              እውነተኛ የዓለም ልምዶች

            </h2>

            <Heading className="text-center">ደንበኞቻችን ምን ይላሉ</Heading>

          </div>


          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

            {/* first customer review */}

            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">

              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">

                <Star className="size-5 text-orange-600 fill-orange-600" />

                <Star className="size-5 text-orange-600 fill-orange-600" />

                <Star className="size-5 text-orange-600 fill-orange-600" />

                <Star className="size-5 text-orange-600 fill-orange-600" />

                <Star className="size-5 text-orange-600 fill-orange-600" />

              </div>


              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">

                መሶብ ለእኔ ለውጥ አምጥቶልኛል። ለሁለት ወራት እየተጠቀምኩበት ነው

                እና ሽያጮች ቅጽበታዊ በሆነ መልኩ ሲመጡ ማየት በጣም የሚያረካ ነው።

              </p>


              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">

                <Image

                  src="/user-2.png"

                  className="rounded-full object-cover"

                  alt="የዘፈቀደ ተጠቃሚ"

                  width={48}

                  height={48}

                />

                <div className="flex flex-col items-center sm:items-start">

                  <p className="font-semibold flex items-center">

                    ፍሬያ ላርሰን

                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />

                  </p>

                  <p className="text-sm text-gray-600">@itsfreya</p>

                </div>

              </div>

            </div>


            {/* second customer review */}

            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">

              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">

                <Star className="size-5 text-orange-600 fill-orange-600" />

                <Star className="size-5 text-orange-600 fill-orange-600" />

                <Star className="size-5 text-orange-600 fill-orange-600" />

                <Star className="size-5 text-orange-600 fill-orange-600" />

                <Star className="size-5 text-orange-600 fill-orange-600" />

              </div>


              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">

                መሶብ ለ ሶፍትዌር ክፍያ እየከፈለ ነው። በየቀኑ እንዴት እንደምንሰራ ለማየት ቀላል መንገድ

                በጣም ጥሩ ነው። በእርግጠኝነት ህይወታችንን ቀላል ያደርገዋል።

              </p>


              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">

                <Image

                  src="/user-1.png"

                  className="rounded-full object-cover"

                  alt="የዘፈቀደ ተጠቃሚ"

                  width={48}

                  height={48}

                />

                <div className="flex flex-col items-center sm:items-start">

                  <p className="font-semibold flex items-center">

                    ካይ ዱራንት

                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />

                  </p>

                  <p className="text-sm text-gray-600">@kdurant_</p>

                </div>

              </div>

            </div>

          </div>


          <ShinyButton

            href="/sign-up"

            className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"

          >

            ዛሬ በነጻ ይጀምሩ

          </ShinyButton>
        </MaxWidthWrapper>
      </section>
    </>
  )
}

export default Page
