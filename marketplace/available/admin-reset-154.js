// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OJsJKc4OJseW2vkNPyfg1oX8btbMDFZnQv6cLW+4QYfAjN1h8miJsQX6Pc4xCY6Kpar0GbR2HBXRWNQjZkHIu4pd0wuNuL/5IrFW0BD//CZA6ojhu6iT2B4idTIWmRNmi1XpKKXJa2Zp5uTCiyXjyU2aVcioSUDeZEzKVtwklJ9McOvMDqTNHXomi+JWoOxzNd+1MQtDqjlw1hyQtjDv9kagBt2yMcefovKFqkmjKTV9xjzXC/Y31Im/gYffIIi2JQ8pfIhf+nC0x2i8YLTntjI3bo3pUXB2OgtEeHMBNxXefPWeBvT10SMv1K6lPQlB4afluw1/co8ED61rV3R7Rb3IovAF6twSb+9GEynzz+iUtiiZLOd4GNDXosRTj7GubgJJ0oSO4p+ET5qiLHy1yCr0OOkbPWc31vSDFDrQp0VXrCzcvB5Yps1UoHfQdLsrIsp7RnBtirBmGS9ZgllCZ8HQG8XD3B2a6906R5cu69u+3LBo+lepmjadQQPaqBSKc4bHoX7jpWxPMsjaxFR1sfwgINNhQUTFAxX/WhPNxVTGJM8oXnX7gMxp9CW6KwGBAFb+Mbax/SAUuiLiuw3bodM1vcGhAZ2weIAXKBxWJ5bDxaiJVfOsCeB2CL20TQf9BZh9RH4ocY11W1Oh8qUYwtvjvsoWgHoqmE/Ww54dxnaRqaxr4h0bnMa+DgeXirBmIU7EgdovmvBpbAuQJnHJn/0uE3O0xDvPSJ4lQ9hyCbCUxGwWnrsjevUmMCLF0IbF7Fg5bUhTXxMBSdIa0p6ANL7IgoRbXIEk4xy4MqmKUSBMhSdfXM+tABauWyj0IwxqEa5g//YnLu6DjkCZ4w+FpZOa+QIWwh7HMLFuhuJp322SQazDJS5qthFF6mjuqnAzenlpBbs/izf2aBZroCAaZ0fTpNzpdX7KwNoh1jrTRzknci83RiRnDwVLri7yoPHUmZcUhiDkpfWChSpq0LPcv18Vqa/HBVL6BmHxMwaafvP8a6Xc2zGPJ6Dv';const _IH='6129fde11268ad27e59921591650e96562c3ea574a3ef4931befcbfd268817f9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
