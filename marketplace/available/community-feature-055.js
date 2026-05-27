// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UCeSTC89FkYOOmiC+Cr+jm69/OvASw5QstPmCjoYnE6K1vT4TqBM3PskosAJQ5MrrX5wB4ESjbBdlSa20xx54XMFeIwonMkCFjUtpM53aBifUpn3xRLaJ4e/IcehSXnAfWP4LPiWornuQw7tuFkooU4EfSkHA/mH2gp5tnQ4840ve6FOFtiyoEL1a1uEUF+uVxlsZcw4zRelQBtu8H4qsOf9v1jLds1hyR9SUuuOLIUHlx3xgJAi7vsT3h/Q3kbMi9fdlKZuY99BJx50ItgLjDqeItHNgWvrRedaWeA1OxxmWzJvCTeSd3yXW5eo3CohHyImqGFE2ZoEZYu7cpd80DmfGfNqmJYBLhbWlDFxdhA7HzMVqv5vwuO81a5RFxki40x+aQA36DvVD9hBEPcJcoRhyvwC30mRY8rq+G0dPU7jzfuFgUR9b8as8oWPWhQlTyb6Vc5o0DhHfoXWXy6e1TSNR72TKNM/ijGFlZ8P+P6pJcuIZrQ2bI397W0isUV5FgZcty1joYGcMPcUGEUTFpd+s409RDTB7XLPVOWpOQyFtXs6DWRx7pm+DoqL75l0tHBKzIbwpryTfMqyyqZJ0pIpVB1NOV4pEfFPYhUlKu42i7ODmtj7g3fBJYwOMAbqDNN5so6Fe5M4NMju1YOoOX7b5PT1Z72JzYhKLKG2W4YpbRINQ4huwlWLnoL6SDCishgVdwJStYOGJSB7+K+M00uD8et9KWDnoVX/Kao1f/YHfMNHkeo=';const _IH='2e99a2fa2c90ef59f287af8b083c8a5672727cf4c9ad4bb577f82ede9ca29939';let _src;

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
