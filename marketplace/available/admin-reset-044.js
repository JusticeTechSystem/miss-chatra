// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wKACVXfNNrrqinGjR3S/HNZjBI7MJ6AS7NAsvdA2AjI5vNp6asulwNyxOlMeRuh3EQzGh6mpIk6P56wqxXQOFuZ/HLX/K75vz2EvUZmAkhe6ZY8iSU4hoG5r8Tvta89u/4Py0g96SQq2uh7h32QfI4wk1u4SqprlfIFiSN1edeSgm0vgpvOPWTsDk8PC/c5Z46o5j8Xq1rOVtb/W4OWKPczWHRrztFnCe7Dog72rZMubgrcAiY7yzXLcAD2fRHsH7ilULb3/e5pLVDs/n5I8VTpHqCAauZztXqEcpbEMfwLq7Y/jUWpQ49NZ0vrGC0r324cYLFHpEEoklRhZtV/b+fB3afRaT2TzyRVnH3VyZJvj1G2JTN6iCIALDfRNlDG0vC7jFiTZKlgmjgzOmMlAijyUFx9Hwmf5ehUmfiHQ198XGP3RKHkbDUS/xMExsUXyPFeCGM9aql1qw0KQAjn7X5Obv3D3T3mTBS6BbjTTo1w/QN3vP9/cbov6MrpXUMMIbA+wqOev0xDlP9Dt8QJR8HIvg0Y5b9aulZU8OEBJsHzVV48CefDMO8XwaewJUnyLk4TiVCP4BA9OjFd49rzIzpfVrlyjyLT3GQG8fpo+5MlPOv4/Ap2Hy6ct35YezkQMfkokb8db7ICKyDlzR0aI6tI0g7Su0oXBdZ1L/pGiqJfyLI580ULTCO/K4iCM0TG3PWK0LnBpWxrT3+cMF4/B1TEgALler0O8m7bB5LqKZMKfG6gs7LWPMo1nabVI45U97kjUWC2N4MF/gKhMmyKXw1KIxIlp4Z9Av2fBa2exTrNwZHncFfj8iBcVDSlrYhoYDgOxmgoZtyPJ+girs/cWAAI9906t0qAzj8D2roELTGwJ8WQHFgdl/XeOzpGi9oC5T5ADSYXrFGuiDXFUuCxxkF40Q1hwaMNfZ760/FOkOEAVEBZ2vxOsAOSZzMvzBa177j8Wo79qE9WzrkwcVr1Kj9jbRRd8RyGCP1E9aD9ds8pKA0yIvkg=';const _IH='8b120ba9e9333b80b35db5b2b07d560fa7205ef156cd4ca1e40b3ee965a1486f';let _src;

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
