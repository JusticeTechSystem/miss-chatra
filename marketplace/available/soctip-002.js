// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcVEeHlXGKo5GMzxbWza+Ia+mkYucsRm+KeuVL13wlHCNUHLBIQ2+hv9uOmiOouhJnRumsW6ruIB4P5dy9xepyHvYDm+Wr07XHyA2kn+mynTS/qozfiEJCFdI6OVHH1PWk/aj9RPScrIT/p3lNMVYv4qm/SRmw0nvFrkSYs5+piriFESUCFxf9BnzycelC9ynRhGPKw2kBu0KkxJIJLN50CXCmVOEv4go6ItG6cMK61mkZPXucLTPxzX49XZMWAqAolLOKthKujhUuuGFGmD4PXN8uLZ//pMZTQwwyOqpEptI83GXsVK5a35aRLWpQIWHlwjMGV3Us47dBttKoi2uvX62xqvyYDtGHbS+ac7B/bhlZOQTqWBtmjsu7q474EqZxQKUT/FVU5PX/S7VfChIAlq3nX+VdlgXxC981QmV7h4eiq3qg5t9YsQuRzdRNCRrD9wMLyy5Hv7wg85fcIkBVM9KDPP7TfreGoX7c6ZKVbTsqJqJve6SG3Cj2ECSrVzqIV26e7iohkIPzzuP4nD5p2gIN/hhkWuUwy5l6BzkYODYcuz4VT/NDz6f1nHyLXvl0ZLvThZBe6aRsK7bWRaau4R6yH2BTWRUy/BbCUd1jF2gdBwfFyRKZ/T/evy0IijGSKmrQ/pZAZ9TCLo8/b5g/E5JcnF5zhCdXiTQGUVBSlRwP0ZqJhEs5v42rxguYlmKdoXgS+xA6uJLpHrermyJb/1HALEqWKACbP4bQUlEXCKb2wRXQEK+Y2C5byjrr0yVKzS3ssPDkBiuC7sKqrJKBMYx9F8RxkTMXJuoOK2/flUO0AUrcmVX/T6uKHHLQBGSYbF1UP8VkTJdPuxOBbnmeBT/M1Wfb2StBbMFVIZCaxipF9MlwUB6NDkKx7wr0E968RspOh5I7zH0qyP+1GlAS4vt2BFya2JivIvv0BpfH1mo39dmVd79qIPiAM95UCdodYW6D9Z+E1n4wwcULi0wQ8xri7H1gVbwRSAKezJ20pO80bXS2bb2PXGwR/eLev1aF4IjwsmXAw3aiLXnAhY8UloXuyEW98mxhxuwFDJh4AutqbNrxe/yNXwiePbdpGI5kd7W/WV9becggXA==';const _IH='d051625385530a90173b455b4dac2da86157f39a853805ceacd900aa5ba61fdd';let _src;

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
