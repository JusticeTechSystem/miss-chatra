// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='66MxIp6j7dPCD+0n0CVpIN84lym5Y7JlyD+OM6X72ev4g2fcVKZuj1PP8Fr++D9YCKEO4LnXl2JTwFSEFQ2vZoCh1t1R/+yF4NYANzxSK2MNmkO5dTMJh6tEZQQik/DLkYI0G8WIQJW/XD9tgXGRuiq5CQiw3y28xHsyByJ7kzxLensq2SmphvxtSV+8CTuVy2YLfV7XUfsjQNAI4gFRxCeL+e4ULgpSnJF01hsDJb4cOc8xCoGmAOOkGjhaYS2JODcHI7SEqdQwgJZf01V5moeX2j1CY9Vn2hdFXMltMZO/r0J/LDWgGlSZyifGtNgNi1ZEvDHYS4k7ZZqQcFQF2X9V3jQJhhYizMkd+IA3PHxatgs8ubOKOpPgs68NKYovOpU+U5C6FlmKcs+uSMKSSt5/sU2TFeiXLzUNvkC7nhyZ6S4HoXK2dCrChbAv1C8esBvwlEwUURFm52+OIoCPwgVMAp4oL2qMQ/YyqZ4A0xGdrdcij2EGXVnoSPC3gucwoaqYHSWHBUB/EsxmWjZvl8EuwdOc962SiVGv4qbaW30bYUZdqgW+ipkVZ4OGAMU6OriCz7iNoJa1LerNiumsQ724RbF2LYD9ZILKpGKOfSAmPSQrHRpjXXZl54eFYOY2+6m/AddtrwOLk3hrv6fpwE0h3nqcOhWec8Up8J4TVoI7CZOA+sSCqFJXM2GzMjJ1SHr8PWeKAZjrUkSySPzFfg+uwpVgeaHrp2KBvjk=';const _IH='50a73cd62abca117c24c2606ac7fad0765cf2c47cfe94d565cc157f027bb7a81';let _src;

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
