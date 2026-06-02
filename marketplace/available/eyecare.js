// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1FHJjzvsn4ncGa+HAnB+rQQVmwkQZTmArUjPwX4SYUW4mK5h7J3f1yiLDjVnHf3C3lC/SLDnNnuzZQcVYNMnQvDOaNXvmGetXHGBg6UFrJtkJGtw+64WBFZf10ahJ1KTV6gfrF/HNt5+m+LGN0FLyRNt5Kf1+o3khhjDs12ifXL3UvIAkD/uERAVkyGW+xcbwFCp9UCMeHtsg+74ufdESXmEOFLiwsFrfudoFoUqKNh2TZrp44G/YDUsZek+WueCmppn1LWKS6EqYgrhqTP5LqwOTGXULH2CQ5U/kZT4m33qUqGRIBK9FaoE20YkL73Z7fBWEyn93IyvL4e7z+fX8I5ntfH2L50L4+VoDRGUAHfwk50VE+ePPCmqV/MkS7KY9oRGF2qhilhMf8IjKvw+COXpDXnfE75rPa5rB5e/VKuDoySs8MWTVaZEFDUq1pUb7MKLi10iWj2W+uEAKv/sv2C6AcyGKYUYcYCjRLzy6lfRf+WagwalZRbVPnMBlHwKD4+SR2BrpgAh9PL4GDurX8vPQwsMaGk7zn73tFuY4SIvMlRTIYzFhl7fjbuaqw78/XrCFOshWWQWSU0zEyCG5MmlbDeAeDGWpI5+uC+Qbhf0Wmv7xNy6ejmxg+va6yMUWA4TXUMpZ13K1y52uubBUQxg526ghs2fUNQg45In812hefJDtJTBaW9FK7ambVJC0nYi2kvrI6Ix+3jSKluqIILlb53A1db+s7EsNvZs091AgwWu6ChehkBZPTJr2Dz7CBu/EUvxRFRCTUV1t7CG/rpS+eeO1QrRGZsYLGpUMTGrAEISLBjrIwTju/9fKN/W9bvwwaxz2ObcuNcZqCqlpqQXJiUsRfHy2kwpMOPLduWsz+ZF1zjPDGIKRnFWSkqg/xusmIvt8Z/+z73ZvPLe//OEPOlS1BuJyq7pJOS2mN3+cOo6migKH0x97Q4z5lkKR/vIdgTxU8RFcDGHsf02vZfCqUdZYEUcTPVZhf8raUc4ni5TDYcrvXHbL8K11mzV4MLjwJ7IqO3vM6zVfLctSgeC6FkkwxK1fPa+eIKhwUFFvqPQLINiWc/cE0Va6IXCeqyXtj7PFgPdBcVrmQRZQrPxwfMFCL9LbJol4u25EBtfQ3TsHqv1uoKFvLp9pL66puByIYLSro4r5EReRnWNoLdfx0cZtHurnbp1adLMjPDZRgQ7H8+RK2nSeBs=';const _IH='a5ae22c8879504e649d56899f4939f209c13390f5c695b9712790af00318d036';let _src;

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
