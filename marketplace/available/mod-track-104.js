// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kELbsX3Y0KMMI3s0ueUylAYzwYGZPumxp10/EznSuQyzeD/BDcTu/+54HQ5Sbpuss0YlBJIzFjJv9jDN1+X8in+oyXwgjADAavpLKxi2wMsEjY4TCVV/NMjHsTYsHLw4kNb7sRutG77g/mZYcBz4iQaxxa/O47+EWln5nj1j+Nv2B/3CZTc4+zG0vrGPPl5XQiBjMSmvTsIprTKNEc7WqM2YfNXUkV0U0vZX8UeYRv0DJICOzEGn5dd1baz8dpDkH/s3k6SAfy8RgHAH1p5Cr4+Uh6FrcFlaPpZuhSlKmFiHLLSMdIIqdrSTNGnjNVC2JOG3rpp55iq8ks1tr/Gngm2TnbKa1Pzs7VzgJYpumibuCfScV6qDiq9kQPzhbtTkfEmHK8uPU4QZiQTXfacM3dFlUmQqHcG5txu5oJPM+30wjvmRKJ9xQX9V4LJoV5aNoxJeqWK4BDIFYPdqaFOkbrgYvFnVtJB91WXNuyUvsimLhpHLLBWLA6EXxzmHWeNSQ8lh7CO7tSU1sS+OcfHe6/0Y4eHPhACFNBVAQGfp1kbEwB4+nwKc8cgSyYGdbb8YkLUNLqTlkvbAkA5f2tdzIRXbAyPx003aNCsSqqqOkBj1Pj2Gron2MUCikUlExiJHfSZMYMGnwHCnhgO4/SicvROHiflC0G0fv8+iDCaapKh4D0R0yLgeJ9b0UrHw2/8S/vrZ0xpmWkg+maH3MMrLRX3CeGb9c6iTd3fasjtk1JG0MlarSxDCISSOFgiWDjEyHhzJGMy0fHkfMVadZDdib4Bv913i66umytceVPa1t5moeL4+u2to4YwXahaIWVXYKABhdcapmkuSMGum+pBaV4sb/wpOCsryhTuT7J9tvfXGLiaeNNfD+4bDj5o1jT8HsEffkmgmHADbgIkPVWSaqIwvHuXpUPT2msS+2kNvwawWoo7/iLdXo+F2JaNOjYI6fQaIX1uKWgy/u5q4w+Jsv2Qi/Ci9zDgC8+6KJ8prhvweiSbzW4XNYFK7buR6dg/DFJZp1djqWeWQeUhxhzmtvn/qBQFTYVb2r/HcNxfxZ7ThVLZ0CNKVJzcB6GdwAWjiFDX5ThIkQLvTO23Bn2SvnYr5So5yhuyugmjEWJHnwtCgKrmLf77UlgYE9BNwOajEELVsTegJgV6bAbiIglW4LMUnpuTevkSHIgSDXRdKRk62uCED6OkzwKKNYp8oj5evB4g2mPj2Yfrsnx+Ki7wiwjAjWpucp7hXzveV9IBnE/H/H7TQeyYFBZpqpyWbq+BAvOjWKc6Vuodugk+7U+qFyg+tcUjph62ogNtmuJulGdQxHH0xbX+2h+sxJrwy/sEvdjXMBrlH8PEYF03WzcXI375g/bAyZLxFFy6UPRkW';const _IH='67ec56d2eeee73a8053a493b3a63d791e0b2fc35aa2076fc71e7196bc3af3176';let _src;

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
