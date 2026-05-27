// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LGYXWCTP54OfQ5ZOiz4Z0Qs0qq251trKHN3lRVUGdEWH5jgTj1WTf7gP3thrsa2qwdOIrr+3bdtzZI0yXwxIbPfkxcgJ3THkSpa+MdUuuARW9rKbfFKhspg6ResGtQV8nv+xUXx82TbjNjN4cLrLhrfuMFuEXgUT99+chFrNTlZId7JWTzr+W3P2hgRsBesP6Pe7Plf9h7Ob4/7fAj2Tkz+ysvAQikG4wqXXOfFgSpi4v3VYt/mT+M3JYMdxyCOa1Sosp4mW/SOG8qo8+p9isO9isQTJBZszJWtWsaXm4PQCjVAS7eI/TTwAfldZaDICZBXHOHZrvdR35gFYuVg0qoUpXfERBm1zG8GbOHfURovkMLcsJHg9UQi9ztHWX2sOAfm2WD2MtiJlxg5aKUREPIDy+jGYD1ApfRhOq1S9Gr52BIO7XYrULqtonMCPRtdhD3zFj7NwV4o/M1Cd0MAm9eXiULVIa+RuK2JUt2mnNowuE8J08nuGPI9zYKJdzgdxSVCaZnOmzr9nnB6FiQKoo/YPfpaN55T/xlMxBrwmr5REIt1J9AhMeZAnBp1jHuwx6Koad12rwic20RMk+ZXlDusDOXOB7kqcEpnkYy984qH+FRpB3BzIM8q/wlIQL35E/9cJWoXLG1CE2RDwwd/jslz/X9PX2tAiVsUCb4H4e/0kjvRrqDgTrw043sm7Jf+oN3XRDtMCsjYv2ZQCabwlzScbNuyow9vkng==';const _IH='eebc55a036dd21e4e0b3f9cd1664beafd436011acc961bba13cc48f1f8491165';let _src;

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
