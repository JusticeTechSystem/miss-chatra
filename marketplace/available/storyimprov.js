// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oHeB1X3/adMTqxo0mOabNOLCKSvKD4jJuYeSnaOAU1slJ4KUvO1QbIXDeymINXuS/RUs4/0Tu9Gvlx7OQQ9CMnX1GS6X0xPBa8ETSMuUKDCyuaDtRCBgjoocp9GOUlURIY3fPkEjaeIFALasTgz8N4BztDpe47fpNpU+/Inpx+U9AaD/C6ZrGngvfCYJigYrZ7S5P5QWSMtbkAEAofDGvDW0+bmufKJssuJDC2OxJy8Pn7s1PlY17P/Dy3tqoaFplG3MLmqwJTa39xBA3bm9pFvp/34DA8aWKkH3G5ZNaWB7HwamW8S4SJlzWdiwKUAx/O6hq8o12CjkYWRsSaUp9k+Ffb5YJNzO+prf9L5LMqPz3p2oqQ0ZjDSF7g5jZY9Gj4l0fyq6KVF619n29531NBA5LWcgCc/xpspHR7cHdCJ7wMGpAc8gs6MHsBAsQZnw5BWWy2zUqFYxl6YRByYESd2HUToHWNA8bY9OUCErsSWZ26m0xezwHjfdStAEjpSEIOsV18f0clYGWSTKsjCtvcaNDWT+vqqyZWCDkk7Fy8jDFWZN/7R5K3yzvLwndMSyBVmABFopG7y34JqnR5SrOpVXkSrjh3YL8J7puuo5tVJwiv7RravkGLreFDGZ25Aa8QWeyPM+KnqAx9nYIt+sLnvte+ZlBQO+w+ezgjDdNEwne95OWu1HaT+xNyMf5tG6sJj5vhWniTsuGTNersl8n1igc9KBE7arv47i6ftWpx28SYhY75N8TioR/uxF435fOli6qoOTopHsWN6KWRlnaDZABV8xRBkhuhLpVvXq1+TV2DRV+IYXjueVxeBhlh94XtuvpWD0anyEccLTs9sN3p11mZkzKwiPQoklmy23GsYdEcOM1ODjqlKdwWBMrIfuKvsQlEqp8G32QS1LFUSSaCJ1gzqNtHISh1Ks24qjMgBR3Zn6O9XpfeoxAQ92FFJrmbDnQmCMkYvIgc7ySzFHOBikMzgmFq9TnwKe6k+PCv3KrABAn1kCcYQPL+I5ytOY8xohCaT5lWUanMhMHjZn5Yr/xwaIrnVQEGbpV0yqaTIc2RKsnDdVB295SbVhTXTKeCPmlMjbKKgdUIZiAp6FsYDwpVm+rI3LA6tgT71XBUPzp/8TKJNahF22VkD67PMxV1zuU22dQhQTs76bnQE/poQAmemkPcykyWwFwqI0z/GxcEwoPsXG7eYLbhYXGyPgpsws';const _IH='317a1302f4861a486973cd42965a571f28998a4496081343a269ff568ac580d0';let _src;

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
