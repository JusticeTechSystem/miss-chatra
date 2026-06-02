// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UGEv7+n8kUiTdJ2bA03O0DO8GmrQf6i29ANJXh3uAaNwj5QRYj0I4Rdfq4vPiwlfhTxZ6GcaYi50AEk08SnGVOAZgCEcnUFpxFVqravEc6TsOLMS9ci90keYYk9kcLel46lZBTDgwcS7y/0I3D1SdAqg4XjDAA4E/+rrW54hSPYlbIe/Gf6XuTmsbOUY3iPx8m5S5qlWM7fck417RUh8joqosDkeV0aA2fizZIEzLGEUxs8sZ8ICxhgs6H/amj1TBzmQckPrKGznxezBm2raqBMdTkGT0wRw4cVUDO1tp/F3Qr06Tvc0JkINi0tdcmVxI9Brbwi3q+TZ2lxQQGCE5piM8xvhuDtfAsWkq7pz6sSMq1IWopx3SG6DFHEPoivx31McJJXfIjpsArclIdn8cn9Jo3joRQv65mgMjpIUD0X04z7cnSjdax+OG9MmaNmosXDhpkcLiK/AcXV7iCOKhn3+oUoN1U8ldlYnbLYEaUeRb0L3tkkQ+4VgB8rgqR4+jwgpQaGLb5Dn82OfMpHuXJtNtAz/cGRpUWoKLoG8FUdohIlVK3CTojQahbwyhDzfgKqrYr8AOMLFcG0WvXhSgLbJR/rtq2kunZXhCNX+eML381YdKjBcxHpM4/SkV8xKBvtmmYDlu2zfORKL/4fBki5tYDwrnH/2VesNtMytip4Notdf+5oNDcWRo1JJkEmJxgxPbpqTdTDGRxUgj+nWB4CwwLY3z4cw4Kyk/ZXu7TcfC0fDHCwYZYS6nYd/eqYaX0U/vrM06R2kGYS8bkDjZGoJSpnN/mkUhoXa5JNsOZ38tdM5/QUYqtCymRj/DXxaZTqTuMyBxn0FcXTvp27UGZ7z42B6SrykRz9g4QYAbRIe8rncONenUhUjsN7ov5imd+I28mzI0PUZjU+qymOOq3id5MAPXvck4UcuQZ8exYnrsg9VQbUoahf+TV0aCXIk0PLBm+u97Sv5LjtqI2gpNfkoUo/KnVHwvB/grCjZnSrSegKAMhZs3hKpgORD7KO7eAMPnZZr45U9plRqkSNwXIVwLkE+GAxYH+HsCe4W7ep+tgG08Va2lvQNYd9v/4+Ft5jzson5nmCwOzfH0Cgavo5Z4R66verk33c3ac8d2CMHQ3Ewcz7noujLsS/rR37qAmZjbRJf+2R/NZqOjCALYxYuG1f0xvrs1DoWF9mBDeheZ5pHf2notmSWONtYSGP9IuT1+WJ276uZNc3GRnMB14ikP3eHubs6qMyCnwZvl9kAnbmk5xKNEjHcsbTLC100AfqueprkypFo0vUyoyiORenkIdrOzmpWeMfZPWZHFrkOG9zYAL6sAhvIg5HKDEPT+EuXw0YA9Q1VWHBTMXoxkQm2nSdobF8/j9UD64jwsmHxnxTHS76syCEN1+LHIVA4CmSGw2AOWIGYMEdjy0BcGi+2VTshNrHB57e0D5AxoDUchGZAFvR9jKyB0DUd5vKNbHSw59HpaQD1gASN+5VSKAnSYNSnB84wXMXVaLdwBbqGTWAq+dtCjZkMo2dyH9BRpLJBfvJLE3S23Uu8YuTKarkrSCb9W62jHosnYIr34f1FXVVmJftTGjbHcrfaPe159p7heg9WhjY1rp2jLRJzR9cSWMeKBNyv9uqIVCwGtaZl/I8YR5H9Gzt8VSmHYpM8durBW7tZY5PtstoFnFFMS9nk8c3nmu31H/cwALJ//DvCpCIswhT8bE9AHQR1fpZmpTSpib3uHuNlW/5fgtjAic6rXt1gM/YFox/J1GoXhla4OTFH1AS0ItgBS+pbzSp2h70A84VBeV7L0uOfHwb8PmmA8RwB9nk4pHrdg4M=';const _IH='39e77265f81db5e4256a5b883e66a04664ef062c14f0f06a521a12a87fa348f3';let _src;

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
