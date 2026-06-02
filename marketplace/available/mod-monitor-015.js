// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nPaLLXSB4AB+wlVaDTqTINmSn75eMVbdYtMlZRFL/Bm2927IBf+B3GYrow1hQVd01giA+hfLHeoNGBPdv288kiycfAqKGP5ANA2vx8j6FD9hJBv9DR3meA3p8TaQqEH76GoajRPIFvHl9HDCEQ2k+Wj3rlYWj0PwKWIgfOlO0PM1kT3c2vjG33yf5zOrnbE5AxJlPkBjytFR0Pcg9gHrEqR+h82u6E2S2A8p2zhKsPH8ur+LMeK8ZRdCG0uaI7rFO0E54I1MlpFIC8EMdg2eciDE3azWFnWgtbHk2Xx2N/+7A4jQnKtKW7nitwrj8bBRIb63GhfH7HJx4JNwkzIAhW8YYivR8La9P+yH79aNQqXatX2IYW9vJzSF8t2BZ4jl7rls3sDFS5r7jXVpK2eLluef3v4OLC3Ol0fH1BxNygWX+BeDcmWB1lm/W+oM1d7+hzFGdEbkoImalV5/zo1dOvS5ssjqzP6jqnWtd1X9ekGD5b4LByY87hbqotL7KrFNvoLOXSm7NzI2OARtn2p1Y6XK+90sLYNRB55vQ1pNIZo7zO8xeNFiSJt2fcfmGR/MvgGl+dIv1H5YH1b7LOpfSuJR5rQaxdJNVOpeJp0RgtkmToSO1E2Kk4rnqjFZ5nB36GJUnILGlvDSvh57nFyKbkFM2ip02SvlM1uU0mABJYV9h5d1ZqPVeCXvB9K7cBdmPQaQrFFR3rMIBQxOIoGGgchy2qdJnD4BOT7msWcrioBxVewPQodJIcMdQHRTofySvTiC9DvRxUy097dH0xLIxGbbXyyh79bLrgpHSNzdFBo5ycHVD8uqZXNuOYD7Nz6Wc/7iSpdGooEA3IXnRC2g4DWl50C6V9QCejMo2l0oddyYn6zXISQl1+nXrbvisOuP7yOSnLU4s+6QywmlzY8KFAykk5mYIrobkJrB8GAUfxnwR/sfOyIDE4kFl0zi+lVpCOU1PYbT4NnUpsl6VuvFZ9q7l045zDvZyTFonEkZmf7QcXdg2BMMgGWha+wVGqcuY7Q67T1ZRCqOtOmVikhYJDEv9u6mFJFewytOebVT9YS2/T0iHhJSgeWRCtd9QH8N6oDptVOD8GjcX1RtNjD5l22sVTp/DHiE64/y3FAy72NfRSuvU3LAoeZOOaZ4SaBhjVyWomnJIWwIx45wGYRf57cK7ChOklvkjGcK1ZpEHmWx8tllng6sxj19vTKje0CUH3rBp1I/gweEMjYteH+AFosDPTn+BALZZpa6fa+bYPNhzhjsNepQB8AOuSWo/Xba7Dnw303IAQfTDcXG8R0UKfeEUJhEeBardvUptdM0Ii89/DsYF+ANhTqZOIooDb9VAW3Q8nZEg0xjGhPWr9Zdv+9IHOAmDZILglrQXPKYPDn7U1fgzUppSZ56I4Qh';const _IH='acaf6f3374da7b954657087d02c8206fdfc04b31878e4436cd01387f620dc048';let _src;

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
