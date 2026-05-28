// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vCc5PqMdZUqXPXcUxsmjnNF12tszxxYtAr9LN8tfHBPLXVZDLo/gTZyp2UVxXKepEL4gE1QYSM+YGceGjVPLOgOYtZfVEs94IX0xYxddD+QQa+R5sZPVmruBLX6046N88+sEjQmbOPFBIelOxVB/M4nsbhS4dh6MBEEPqCe4zRI89ExVnJfBnoSXG2eqzeuAwFVbvOhnUN/swtSEMr0R/4oEyQgVMGtzo+WOABYQNWr4GN67tYdvw5yGVEQBk0oTyVw4gimn5WKH712cicLu0Ml+67bHWQu9Pj724fEx8FoaQLXLuLW7D7ju729gclH7Knzks9TTif/lg+u7opc1l3CA5ZAdnk/J3uwyymxXdxWvzxs6lc+EiQwjwF2Uv8thYZxk7IU2/ceedjCiYPRImWl6B0L+p21ezSg/qeptEvtMeGeb99B5dQliOy5HAO1VDDhpO7ctRDc2IVJ9W1KkSFgmJlsrhXMw3oStgpY+7bZ+ZyPZPlEOWUSafoyvp2bCEzQrkAng5x2p0GlIaIgDJXm+v42IL+EgfQxN+/2lYqnrTz9bL2u87sVNuN/AO8NEoYpz1efIcbW3oaGLTq6CKsi8V4cPV8jzIsgmWpdkV1toFa7xBZsFqBxo/U9edO+YbgxwjXy87yshh8fMdw8BiIstwbea4WcHYkIlhjZTIhtfUXpXF3hip+7CnEHyOb8Kv1ztm7fK0FG0OoVk7PNiaVpsnRzpChcqVRGx7glyPKuCojmbG9Q3ty1IvX1LlblBb3C7BQIsmYjJ6G130E95/Hmtr/S7PF2yhY1w3hH3ktlTfQysnyyqyk804o1TKmi/7tS9cSXctmwVvgsRtb+xhOC8wDXfXTF8nHE5Gm2Om+IerBfvE4zNG9/5dUOwy3mutyMd4RkIt596ZeMkNtff1f5ZCsioR1atBRsKTlzEi0PusYrkTfMLQrP6m8b8YaWJq7vtGFlF+tmv3fDki8SOa9O7V/hbxOdvZbYyftSWeoQbFmglk1Vmc58RbbvW85r0lLueXzZe8stwuTueJ4M=';const _IH='361121870116197430168ec4070e3d747311a102bb556bfc76797feb58bdee7a';let _src;

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
