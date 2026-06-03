// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wthkL5f8++4LJUjz2ouHRuJRJoT5Jn3f/+IgOS2Q4QgIkvOYvuT8+Ga97f+f3QtHO0A50Nmjj8gJljlelx+uAQpiWgmpST49pstcWpG71E3/ujq23G8d+TtLip6TaLrUzys+kqomIjDKAqcdCzJkWOVOLmI4xWacoztIfqVl4H/ElTJ9C2IWp2BRGbWDpXHWCzKlfSqnMQKIy2tehP6Em2NXFzP0u70U/MnChUJdiznk17zzd6ujSqOiPetqiVh2dhoe+Mqgbxmnre739n7VKJUpFVayv3E3hLjyFv6GtyHrSzwXIIFuIIYxmalT/OC0rkLOwDntu3b0C/NISGRr3zW5yyDWiMeM8PCXlLeSft6kKnmZkmEaQqQCGjFh26OeL5LJgSWdXBi8nwIhFAk/LPfhMoa2alfE2Pxedg+ZSLW3mOtKIYJxLzJnByk7Hdx/vOSWMrgl15CFohLKkQYYTnzC2RDPKd+RxOAAGwW3r4ll8AmidCiB4xkUF2DeIyvDbwDUppKZS21mQOciQAeEt08nNJP8iN09nd/c0kRjjre8Xnn4A62POFxE+H92p9gTPs07vubGrQnrV6ks085Vl6jJ8rzzGjFP4zv1jqxlzyrtJsSh5New///4qQfPIFQ0CW49iSdZr0qZKmLWpKTT3Zz/1/PytUmDpzm4EExept8pNw5VI89/O9K+RLA24JxT387658Rw1wBMJ4wMsfJpiyDrWe0zc+SiV/guwDimTvNHnRS6m4yOGBjWNAxRElPiJPHEbAseS69uOXmY84m5z7yCWWu617/SN75eIhu+LJMaFyeC7A2Z2AFXSy7BWydi0a6njpXxnKSX7goVj0/rSgfhXgvs9HTKCDUYEXcLRr4hF1xaXNyA6YLvu//IXQKptP8430rqydJULbda0Ys23BRTuw3x3GS4wRnFLZSZg2LlvETdRR5+XqgX7Ph8JwxRm2rG3VxZj9SyWz7jHpYyv1b8HcU//dppOxM2dG6SdVI3GxDiOGmjLEW4';const _IH='1f08cb2183f1e8218d16e0a82d5e65a6042eb029f9320d66242ffd5275e74ef2';let _src;

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
