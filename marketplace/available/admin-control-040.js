// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgysURMppDK27s6a/hwpzaNic3KwBjfcunyBHgSOXyLRi9J1E6fED15K4paL/J3Ug8xpO8zm7N4NF6r79jO97IOGV/6JUMJeU8oB/hQs5aoHdvJzkZ3E/6HwMi50LfXIAJsJDwTqF1nR7dzbfa/kJGM4AvmXWw+nzObognXP7aOQOxX9wdFqXZunlGU4lZjKbqTF3l+Sfa3WyVC1e54cxaAw+sjn/usqH2Vz6aOxSogw3G6tXxWdHukSGhjI8gsV6zUKFS8nsIAAIVZ3JSQpwbusrt17zpqgG6W5Z828rfEA4OVxKOyvByiEKGpny92rPsRzyxHfCI/nDkdwVOdlIUi9iVQ+7JP1azj5HCiWg+54iZYGieZI8h01JH27M48FjemWL8aQ9v75d02TYQIQvytXusAmknzDSmQjTER9Yz8/QZupBi3d4w7d29dp+XEvkwMaLOV6JAOCa5RZRLUUhQbA6MYPVlmJIx01Sf03A/NjE3fkO+Jz5dPpbkqPkZoywZ8HAGPDLqG9rrVGyArf0mXVKjpz0UkyDJb4SOy0q1VyX501ezIjAqUD8NXhhIPnYuCJ0PJqB8+F25b+UzTyGGLo6Z1WtbrofS0x19OrZDqpZIbQin8lvpayJ5RUyTsS5kIGOu0dVCxGpK2+OP+hZp23L3ImSaXmJLEhRDrQylw/34ASJw8I2V2Z+SqgWdm5bFOGUy79pP8leEXMUpxjVPoyA3RhbIzVFApmj6453N0uyubQY3NbAAj/tqX6/hoXJH3fj7KLaEB3rtG3VUhMFj3SU858WggK/gXD5G71qriXOQ8eiVBL38CKCM4OCNr2csiM2aARrUFz9q9iTuIdtb5Kqg/WHiJwTk4zCMuFWcmk8e37HAJo0UL2JQHJ9fbUMceUOvhzkZnXkimd03Ki/Y27SEE6YivHRsWRfubxs/ZbC/OxqOtmRgqnfYLqW13A70i6RmpLQq53GVZr+wK8XFdorfHUkP1UFcVeDK3l0r3mvHAS68k/ZO9pELpK4thKPTTuda';const _IH='7ad25e4f9ce542b0570cc1bc282fe8cdf76834d204b1ea277713fb24b34fda3a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
