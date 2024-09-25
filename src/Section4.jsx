import bg2 from './images/bg2.jpg';

export default function Section4() {
    return (
        <section className="body-font p-3">
             <div className="max-w-2xl pt-5 mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">ماذا نقدم من شروحات</h2>
                       
            </div>
            <div className="container flex-col-reverse mx-auto flex px-12 py-12 md:flex-row items-center">
                <div className="lg:flex-grow md:w-1/2 gap-y-3  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left p-3 md:mb-0 items-center text-center">
                  {/* Card */}
                  <div className="size-full bg-white hover:scale-105 duration-300 shadow-lg rounded-lg p-5 dark:bg-neutral-900">
                        <div className="shrink-0">
                                <h3 className="block text-center p-2 text-md font-semibold text-gray-800 dark:text-white"> طريقة تحميل تطبيق الاستثمار الرياضي و وفتح حسابك بكامل المميزات والبونيصات المجانية الموجودة على التطبيق </h3>
                            </div>
                    </div>

                    <div className="size-full bg-white hover:scale-105 duration-300 shadow-lg rounded-lg p-5 dark:bg-neutral-900">
                        <div className="shrink-0">
                                <h3 className="block text-center p-2 text-md font-semibold text-gray-800 dark:text-white"> طريقة شحن حسابك بالدولار وسحب أرباحك بالدولار و شرح كيف تغير دينار الى دولار وبعد تحقيق أرباحك بالدولار طريقة بيعهم بعملة دينار وسحب ارباحك عبر CCP او حسابك البريدي الجاري (تخرج دراهمك من لابوسط ) بسهولة خلال ساعة تتعلم كل هذا </h3>
                            </div>
                    </div>

                    <div className="size-full bg-white hover:scale-105 duration-300 shadow-lg rounded-lg p-5 dark:bg-neutral-900">
                        <div className="shrink-0">
                                <h3 className="block text-center p-2 text-md font-semibold text-gray-800 dark:text-white"> طريقة لعب صفقات الرياضية الذي يقدمها فريق خبراء تحليل الرياضي لدينا او لعب صفقاتك حسب تحليلك الشخصي </h3>
                            </div>
                    </div>


                    <div className="size-full bg-white hover:scale-105 duration-300 shadow-lg rounded-lg p-5 dark:bg-neutral-900">
                        <div className="shrink-0">
                                <h3 className="block text-center p-2 text-md font-semibold text-gray-800 dark:text-white"> أفضل الإستراتجيات الربحية فالألعاب </h3>
                            </div>
                    </div>

                    <div className="size-full bg-white hover:scale-105 duration-300 shadow-lg rounded-lg p-5 dark:bg-neutral-900">
                        <div className="shrink-0">
                                <h3 className="block text-center p-2 text-md font-semibold text-gray-800 dark:text-white"> والأهم طريقة إدارة رأس مالك ومظاعفته عدة مرات في ضرف قياصي</h3>
                            </div>
                    </div>
                            {/* End Card */}
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="Description of the background image" src={bg2} />
                </div>
            </div>
        </section>
    );
}
