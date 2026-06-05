// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7AEM9sL0lJ/z06FlMFbXj8Kt4Jj5ygP+adFjrrwP5phF1G7DZ4VeRA53jsuicL4qMb1iPhnGR/sSo3kJpSvjxtdhb3jLN+LzlxgZh/2DGEC4u6HiI/lw93OvUWeHci9NwnD+cc8KfOQJD4cNyyoewI6XbaF0kCVBWi+LZG7i92b2fp5EoiYoq867Z9ojhWhQ+VBq5/EJ379MSjOwgmaEZUq1T8NBkzZEFdj6LvZI3q5G6awfAKwHkQyqx5fXK6XSTFRK04L6YFJwh9Ap1JaSXJQZfoxXcdc87OOPyhgqOwZ0ee6y7T8rWJBGkGF9+OBO7SLATUDjC9G8QAXGnHqzQNmYB+7nQmancwmIP65+unznVnUvIjIPB2rjduF4HvHr6iq4mlPsEXlfBITihTEOs2Q1xFVIfR5Mviw+tSKPYMMGgadAJUQ9as+9nhuJjFSbcoHfU+wOogzjqfxpzO1xJua+QcrU6++nuhZ7IxjkJAOpqrDPPGy+QgQzupNjraVqXvR8gBakZRw+NK8Kvflij4xgwPZemqjd9q/dIcqLn/p1aXqQQp4MKrk+WIqYIL8ylP/CRNTGI9Be4SQeGSa5lTARWaG1AmYi/+yPskjkDYAEsPuKumq051iqFD0VYcalTEUhkvDwG+CftEd1DOV+VUc1fSRBgYU3lXtniHescnvKyVvSXKRlVRSGzhKu/daxVFVV/DJWpwsHmozaR0KAac6CvE6kWp8qWEi5DiWTncGF8rahqc86xOOt9RP8jvBEwI24pi5Q+EAFk4L3gHOIEE1KfQNx1poLLNCbS/y6Rnw63E8If4ge7sSVrSW2C2DpMvjCtwZ1e6F2A6IibAn/W2fUV1bJeLPP1pajdjpypG9xJDXlOrFHeoyyH/3rag0fqWj9bwYB4o5UDvgRAwxw1jgtyAgTO4gZ2VOZnrh1+NOAWLQlzmcX3tVZqCXTpezcgEm7eNpGJPCbc+gpUbmeUvpFOEkKp7qwJL5pknVicJAJ675MxVYiujTX90LstRvb6FEEabVQSF4dhKNt2jRr58X1Elkzsxn0hzPJQx6w8SjKMMi6wKmcUHU0vOjYrvZ//8/VWN/rfak9zxOx4cSkp1xQOkQhJheDpnKg6InpTG6poek4qul3zPr4hbazzsuNtLJ06GZWJJOsnozBxtr3hSAYqOLTkbjeSWdnjDUbRgRZNGTaDuhviLi11GZcEbc3aVLtmjXCq2wZQbpu';const _IH='6f0a8a083412be159b448c331e5ffc72eb1c79c7e4a7a6a7aa9877b66dbd73d3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
