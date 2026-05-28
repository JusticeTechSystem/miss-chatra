// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Or0uF5nuis3d13FahcBjhIbOu8jr1sKuSh0TAFVlvEuXAhowbWxb9JTNgMT+WPv3bgm+WGRx/NOyzTQLJaIlncsumtu1YUBeUbPssjU30O8W6+qT3H4atP4P+xcEQDYh5tlNp473+3L/5uHPs0ZgQH8jC5vkF7mUE4Ef93ESH7kPYas1mfGsGkXg9/lh/pFMSNm28XAcQCFs/H/XOekfeOdotF4EbUMZaF9WAjhdU0ZZ+6MxZklno61On+AQL1N0X/Tk3D4J9ZCZaivvzr9OLKuSg4efsqJ1NKZ6wpcMOO927R3mV97fbTLGzdeRlwHBUvq90eUcr8lABlIBE4RXYvQlu+Cq1+M31sBgX/5AbenxyeAqlZlLsk9bpHStkAh70F15WLGtMLcdR1Frc9sXUxLgrvNx8HkYUtaB3ukhu/IupU8GHbbMy+4f0umT9M96dIyx80ta5E1+2vsG8XNghogU2m6rKHK8XIrRemwHrdHStdnD/1GKL9OcJ8JyUFrRIldQwZtnMEiublh9VYtzLBFPFiSGcK0dib7QeZnWYy4znlhF2/VVJ8Pbc4zDgd2zzGLgYwB9K79xqJdCOZaabWb4qtkuUFGtAS7PlSR/iRnx5JVf8YH1uHaQQWW6Sbd9ywt9XrMRAxhIz3V0uyHtEqp8PiMHomnVq68aFgadnRYiC8Y8VGjHni4xfw3S6POqqcLSIvAxksNxzkTpqJ3gG/AiK9AuaokE4cKiC4bknCa9nsfRWt6GIgbPN5dH7DbPzJ5VYdID1KRskOwtSWZ5vhYbWQeEvaMVU7j0jE/bEWMWgds/59QWEkBOUcx4AXVMRPiOvO9qOU17QSXGtLohDcbiuMgt4/Ebv+cwmCgUGRdttHE1du1w5LrFswBBm+EL93+EwoJqU4YRNBfNd3M36js/SGR+4wTVpj8Pw5to+OxOJSr/2v1e/AwgsTUwjGbvUUSaiFWaX6TyJt4JGuodatcXkvEf2yFaAWR5CM7hK8su3J8CBY4QmIhjWcRU0aZYHFjYqH5RiBKUhXAjdbYs1hRroSagBwUW9vMUdABibNLFFeYBBtqvPQtdXVKzO2BzJAIwHd+0MVFXlaXQ1hxqxyjEVi3HGpHW/Te8pR+DFj7nw39RSVWGFBB34/J0QxJt5QQjxeM3XOZCSryRvBKD97yWGhg7XbWBm6Fmmt/HuR+/WIYblaOCeGxRhWb2q5aN8170K/jUmVwUV3IeNzN14YFuQwqLiu65wnY0NrrkfFtPU9MmlPY7qjZ6CKmE87xQMUMlbmpzVH8DK9eHaA27Szsak4q2mssd8k/y4Xvp9ZJNGC5ZidU5+WHsEyzisZbhLhzfbBDTbpmvZrs9UaltLhqjfclHu+kChg==';const _IH='fe76463eb5a2af40cb477989a2ae57bd64eff72c1b33b521d5bfeb2e87ca4556';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
