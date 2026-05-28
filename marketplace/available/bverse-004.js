// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MfcSXc52Z0801BGt8L8gBZnZaFwH12SVzPRoDwfcHKFHkjHRMcAPNF0NZ+qsHObUbhH96HAarkJWilDxsnlMtSVoTxhgf9lF2ExA1tCvXPNMQ13me3yk/14LSn9wzCsdyKqQmvaI28lv0eoKi1pkzQvcm3kvLEaJhRUEh6Z02b78q/ebKToGaGbkImVEaKzyyiibDyc7zB0PQryE809BqTXqMcApq+vO9rLX2gu9/UlCDyFi2Adbw2jTGh2xGcz6HFF+xpzNVCtODEzslj+KNwrZENK0ZqG/mu01R41p5aqudY+rboQPY3leuwvC+u1EpjRGwcR4EOXW3+NE2FUfdvZeTPZNOhLsjDRfajsubtIJ5vzmPcq+C5pmJP/H5GVAg99luuaYYnIwePtlC59Vd3vSgt2bpkM+0+4jxMR5DcQcHN4aydqLztBih7bHK9GmtJQdZNa3XaD48LOkIGQTYzM+/An9D2LRGIKHw6273rBI1hoWjsZ5JtCLoPV3Bu1HtEzhblCjZ0UoxxEimCGlDAWkzCT219D5f2AvmcfVinuTtZmivsXsR9RKjX6iCipERIOlJJ99o2FrCpAPU7MXhn9rtKlE9GmvKQZUjo3AKw/91VlHviYJxROmtCRqOUxApnffBBfK+WR9GA5Uek6hXnLwdjC+osg4LH6AvwPbXY2i5UrWyg==';const _IH='1e329b3a86e7e3cf3219dcef71a6702ec7ef1afc53c45643b7135ac88bceda0e';let _src;

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
