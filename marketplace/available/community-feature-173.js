// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LWBcsQ3nSi3j8D4bDydNc4N0pfNVzkuCtXmdq0XG1x5cI7ufWvDwwlJ3CclU+cFKymcPE8oTK5Y0vESeGzAGFkGeiRHR8M5GCeGCN54AAmFOzFh/yJ1U75KC1a4Aq9I5hBWNpxFCB9pQC3DR0ZthviIZ46KLDZkAy6AMW/L8C9ejM+itpWH2fwzmcxnx/GSt02l+6vmNCO5l/InSxXzdRkIG5BhS2+l0qW2eKB5TWU/BcrtTdqhkN/pQd+9ST4RkEkWttbLxGlDK5A0P+DR7vD0GBOy4t8NiVIbTiRATsO6ixNpsvgOyPHrGQ3ZRWX6WQWFM91idiDu/zq4m6t9S0ZzEQP1a+mATWie7hXqzfb4WWSarViM48kB+LLx0VF4n94u5iQuQH6K1BCS+7aRvhM6+JRq+zUFoWwc8YgaMgPRdaeN4ANoI8P/+Nw+/DWRIsQQbz+2NPlFBPymce1jb7I5OETGWA9i1CfPU/7okafBbrlq6FuHqb00+hf1R/A4qeLEv0mb0bh2FWe7Haso32jQYv+rsiAMgovumBww2soYQTMUhGd/8uMjcbss3dZjRb2PmxghbCRWz3wJA+SjCGQS1rY5BAEI+GOc0FQ9fWNJN+vD/q0DMX3UOLdIYsqtM3+ni5tD0bvj3X9l/PI6AZGVPYMMkq3s5sSSyEQNNWIeu4h6SgrTyV5vCGDkfUP8mga37f8HtFNZJIeQFnzUoEAg50NbOLLw/gEPSV0s=';const _IH='5a39e1e0e13ae95b25b774df949ad61d13820c0cf9a6171f2aca22db4fa01290';let _src;

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
