// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yv+zfJUBIYpGaxcXuDISaRdXOTFx9tAcWAEf2Drj265RzrDyxRsk/e0sZ6Q3azMBM4v+YO1S9yOxGu75BDwvpkWGiGZGeNSgSiX+y2II0XaGGGDNKpwasKIAfChTN/XuGWwDdHrkbqP6S9kMa4bWUPzBQiYw9fnScGfmq2UCJBPAJ9BRzTwxY11IBXcOrCU2NEd0ZVtUXKmH259U+W919ngI8moLS7OmPZShOFRbul7Sd4kMT2gXoSz4QrlwG7hVpH3Mm+NubcmuRl3Vw44ir/y8jyFlx3HsDGOuMd0I7V5/sn2o2ijEBPkRd70mR99XFADVysRhnJ8HDqFt1VRPML7HD1DUY8EFftZQRWM0yC0ai54ptl5A4sdHH/kormymz4eypSeXYkmYfLriHgQlLdo8m6Vo2B8CtfuWEXPt7IGCnwaQ9M5mzrFSwipKIvVAa3zhCGVGCRrpNdFpXsymqRWvCsFhCb8+VVoqZugjtze/kopgqxXsgmjBvHa7+9jBy9UWWbrTlNasNVES8G67y+Kezd4Uv/lZYDtAIOLta5T5vm4q4dJQYrfkUqMo7y6EhpzWLgYxCXcQIMh5aoWVCMugACz8Q1vuUcWeyW+w8xfRx2QCsCxw+WJej+tP2vZVd60TEN7q1IJACLeb9Gro+ubh9CdcBEZeVYk0uDwcIoOoagF5JHEKBUrjteuN7V/AyMY+uUHbVYFPoCdfhPHam6MSew8qP17D8eW4FKpnPgCbvG60uu+0A9g7TOfpBpkqHEXyMX3JyQEv39LlIm72KeRKSU67lGwvnHSW+r8ETH8I6hvikDdTIc00P7aBDccBB9OgI05P9JQen9UU0e0eCYDUvsg1m96MLPTcILvj3TAi0uWUTlABqPQRDok4ZrKnOts0EKcDCA4jyAUFOL49iyMi2uspadiOafoPW+pvmAsKZ8tx6fhob2FW4od2NX/GTk53OTKvncLXcdCPFRh2gq4LviwQtze043BP8XWu5LPO3pQcYDckonn5jopSLR6lvNfth0/sjOEv1zUK13pi/1elgLoOg1FTcmir+NospoY7RmU6IhCoWlJIGnob5NoA3BRuwN244+QtsbpeDk9N65iIn+N+sbwmvgVtQWvgYYuIUzCJdbhxcIlBhkLA7yLGFbvZ3YS+igJbYoUMVCFepOLlz/SSGxrf0aTCTk3aRLHaYrPfmgdLs4o10qmE7pRa0R8dzVjBNQH1x76hOt9TkGIRZPeIsDj+F1Qsd1mVlT11XNjdXZcGKt187e43FOqw6EW3b5TBOsZq+KCyQAfdQ0f3tWzDbISmCz++RK4KCH9Uh8PM94nWmtJp2lx7ujBEItgZCKDvNUuHBg==';const _IH='b6297c540642bd885b9e5ce2f79b75375b2788b3078cdb33ca859b0255cccc0d';let _src;

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
