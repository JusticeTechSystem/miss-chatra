// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d8hMbOrftGVtPLU34HyHBEw5hCSBGDsGwEcX+PaMugiHehnoqmfWSKWeOKmE48Fb6sGvBvafbldMso+yngkjfaNsKwaqBQDQeaSKM+7y1Ltbism/hZC6E9SthSLfBZQtjYqipCoYm7+ddM5JQ7+swWoS+sO2Q1rmu9l7xHuLgkDR83f/nKp0zHF9pujybgnIP3EfVPafggGEFMQnVu/4gxDGqFP1nvGY6fwM+486VLw0DGdwQY4Pbj6p0P5nbnT7dSDJGKAZMSCUzyxb+CWtFOkse+I7uMWVXtViR2JBNnSZJ6/4RA07KwPudUThadLrDT8SRKjLt26Qyl7AaAA5Cbz8HFcrXOJNKAoNizzQm+pI7ZQFEsy5l1yLSwyC/KNpst3QJs/avmoM+mTbM1UYckP4a81x1grF/eQlUr1AuiGs9JSL4gim9Y6kYEjLXf34nfH4AJ3gsKidHNmmm6ivyXRF5EZzRiz3NABbhHCaVs3SPSe//dKw60ccCplxrufwsxxFWzp97Hhp9BuOdIxSJEe0LvXYvl+G+mhoOA97HtY5+XV+N9erCU5VXlYE8keiAdrzHF072XFaBm7fCVWFV8mf0wcdn1floOPi8goRdf0XvDaT1cdO7s8yLQLrQsTFNiLJVdlAHgrmZ8LzuyaGqvgfPwEWVo0Nd0kjxHH5upkpWviCCFORNYShtEu5I0szcFoKYFQS/uEv2JG9Jp5c+bTduT7nnDkQq1O0RnR/ohE32yXyV6uwZV7z+OEplxeIteh+SsQ2Dti1S2F8nn839Sn+D5X2H+kRkY4wKEj4cmv6sniR8E53uPF3fr59VFitA+GX+VighZ+NOtiDQrd61H3mBokEKH/FUEx0LBvPW87GnWISvCgBb0slqil6G+hZicC++zVRw0T0R150e5QDzn2xfequyUnf41o8mrIABR0y0Xv6Vrmj7PrpXc0fBIplJsV9LlDIxydMVMYlnEhSmq3yEhSB5C6rd8I6asKFm/XaieUprCQhDZSbQwfBn32GbVYWarCDp3zTxhBL3H2k0wnB7YjO63h0VLbKFSwWomr2jJXSHvcKOy11c8TJFdpOgy5D3SVAqWyXQUSZxQpl0SMbdY2h5iNNEI/C/jUjGgKWGLSexBl75Q8w3f9nSyPlmlBPK7Gy1Uo43Y5xE+w9GCnTeI7vHdVBE95TX2uoQvDxWGOndatrfdD8Ebs08R/kewLSclELc+Uls6WhalcJRqyWQWBc8iBDYUgIbqVC/4gaTlbqkOfAEbUgkcSg1s4C/1uTTbiwHBg91lFYD9qe28asq4E07ryZSXI5FIJrOjgXqceKiiKegFoqXdlRXOxR';const _IH='64ca3d3384d9b12e0c122b418b3a37e844e29f8d6fdc6f94bd58c6ce78de7f3e';let _src;

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
