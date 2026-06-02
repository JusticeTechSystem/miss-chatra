// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qjJyKWyiMLfxieCS3ScQqp8Ek5GkICwTSpvEkteBUlNlESbDPh3swDLWLEBbX+i9WW0bhI50xVnHcf/JC/HH2FNAxSuaKZM11V2BrjS4oBDdQ+ygQnTRdhGefNSwk7fAC5zzKJozfd84bvey2PDwXFoQswYj2bhxeg2qirVSWBlg3rwXY5t/zz2GhLcBwFjmwkBHTkgG2xs4yrhXFxE+J30fiKKCtpwmXqcJKAW8Sv4TGEYaCjY2eaNiPuABaH0/lmXGa59SzXd08UB8+X8jFLu2CwGB7ApcP8ZlNPZck3ChB+Zb4eQlK+GCs/XpvB6dXPWRdFPzDI8CMxndmE+n2hRQoPdzMtu8MZqUejMWhbvk+2IcOROeLd47TZ4mvTFg5hiHQV5yZ+y1dhNrvGGZNVnMiIN9Uq2orODBbvwqyh47Vr2M/I0Mue/Icsnx9hTacEmNgYiPQkvz53GSBJZLwmJ47X4LQkW2nB/9iN/gwPTNjt5dYjycfA7kWZjdbXI++0xkwR9gHFypT2JOI/2iFnl5XLjDciuiycTAg5eFB9lz4bk29iftE4yQtoCZbiyBOJ2HJzlhedcvCcsCWDy7NU7T3RUdDp3Yxav77JDqkteu31wK5lxCiLA5//O6AynAstoxvaweP7G0TIg9wK51OYsSQ3GyUtYCENEHwa5MmxavR5J+FpOjiDyZMeYL3VUJw06DkvbHhBDWrtCRSYRDznhNkmDEn/xCl5V06q4fBvvnZmqaBbOo2M9TX6NqKXe2GxMJS67AMoeX4MiUAaBvGes2T4eJIfw/rIoobpNIcuIgwaZHnPnBDODFdLoCILqAMBjAptR7wjmuyJkh4TKdev/yFCQRNPseShe22P15gboalIvNpLzcjc/X9nE75/OaBuVXgaYdZbcEIWRHeIs92O8QRlroKJUiQEZ//5EuBj5BWiNxH5TEPOXEgHEZM4s0FxBNOPV7fiSwrXqHMorYzsJBbZV+kGbFlg/ZCJj+8EaTyataRmLZzTXXhrYA';const _IH='9f4b0dc2919633c0bafab955f3e5d6a9972078131c9414ef8e14518446368b63';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
