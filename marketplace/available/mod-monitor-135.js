// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IG3veV9Pv5oQU9CDlmCb1lgRJnSKhyiibpWQRM+6v2Qv6C/SVYzPkd2L9RtOOV8sE7UnrNSfbQI9yj+i+6LysduwXea4RoQF/1qEI7k6mkFTIPiD0lyqLzGDwyr2jZlj2RzrbRecm2Y/sq1lbP26Mr5qxwtBXOJQpqSXKOdv3Zebi7mu48wo9EBrfQfcTYVyIm4q6gNCfRMU0AOxZtSrcyuUh8gFhGwMbzY2YoweTa9CZ070t0wxRU15nlBORdlDtD4ZNsQAlNrTq+YsiF2IYCRpgMqGs2rVi80KvqbVmdaRVczQYetewW5mh58ScCkzU7tSlBLuqal9lXTIdPSoVIeoIeTYY42hyOZ9pFNoAjrQPkqvnAndOVbpu3yIVJsq5xva18F8qFoT3niJjuczRs6sY/dJFtTScBO6U+YLs8T9qoFq+/3xuj3IHgWZyse9X4Di0D2I+eucTc3JNyEtpNK3TcrHC44dyKg6miF9HZR9UCqX/vRVGGqjDnAEWNnoJS9JKY5r4oMC3+9sIzR6gYLLKKMhupZWfKgka5lor2G2FamFXjlAqJN2dUwDjyScRAMkSln9e8EPNQzmixzBGpp9L8GFtMB0AQJ8ZxUMWGNICq7nlXmv95cNMW2TrH1ci5o4v8VfxcgZnOSfSTJlTv5nVHl8cmH8Mx/1Ln1dDx/yBH3txcJ0lAU4YFHBnu+skNhwEugjSOfMmI1bYmXnzjLWBO84kEsQ/XjTMjhm17tMqNkIgBtKlXQ1nkoVVIvL4X2N0zxeyXhrtIktRRpw9JDDd6mmQ7EXTY087b9CetIQEk6HZirSgWsHfqxkdQ9eoTL3ER4bZlOj1dw2xJtiwvtafQn/SdlimWPYP/grA6g51K51CiL1YNMSAx3ReOCDAD/f8g2J7jY6GkjYxEo1bSwCYa9w7pZ4Wm3vdNODvJio1PJr1e5SFLtc8EbySHMq9xz3xaial0ovSWV0ig8efbv7M1v+RFQWlBhVdhkjfE66sarEzN2KjhJYvJgcaU2gPFOU22/UfZlrWtdA68Zt2guMR2WzRGDltXxppwoCvsmU8+eUABs9EWOXMfwj2nprrki412RQU0ff1uJ1itxxod+jiG8DzzVZG+f8I61TxCHIe41U73d1srIyNUa4UCM+SvlbqMzADCGLq6R8P8/VqVo2SE1LLJW1VhLQH6VMjpMHMJOaj63eEzwsokRxlNpl2UhNqOGU9GYY1L5J3iUeP2PJYls7igqt3Umcfk3XEd0DQlU81GzwyevmLAB0/msAnjXvU4UfRJrIQ1Xoj7SjtkjtFj82hDp9SagBQgM0zU6uMxbVh7GTTSj3E/Sj9PPzOdgjrJq1UcE3ayFpZxDAMax0xFWxWrTXyTjGidAVbrrGpSjXl0ufdS7CycK9OYksEOo=';const _IH='8f103b10274f03f9ea1f18bb0e9f610ce19e3099c060aec729a58a7504584425';let _src;

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
