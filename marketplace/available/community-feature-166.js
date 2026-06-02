// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ksz8eq3FquMOJlWseqoZNUQsc18X8yPUMyNZ1XQZQ3r5QRNqj4otdBHvFNrQ5C25t3m3LGYYSrXUFnc52omKMAzofWjaN0zVtpt3gVz1gqVGvZ5G8aSMTWdEh2fCfJGduYzmZYB68yemVM0jgrXzazCF04Gh7QPbiVKRGdR5j4uFXkgugAhdzt9kI6SuuCpcpIwO2wn78GjkQTsBMSzlnJgKbxWDmGnBdl+rocviAyWsjiNZFkLpujH16dx9wy4tkpr2L38f2ijaJkB9I4CpkpemVfCGg/S6p+av0PdSw08WL9Gp/5A1fiNhRwkgC6jb25QLgmGBBhTklUjecuJaL7SL5zm/8l+A5BkLjo2P/dHACuJORZr6vt6rKQC9jeC0RnFz4DRi03jR8C0fNY9y2W3nLi0N4487cZP8DzOrTowHCwDNWHMIu+LwsLuZTkdfXaTisd3ZbvOWQUerprV+BtbeMeJNI6+jAIIqKESxBMm5EJTwQ9zEtMFHcOGDJ+9is+GsiyRyXNTCasFKjL58d4j3E5pKXn4FshGgldPc13tooROAIbbiA9gcDkCHl+HK+yc/oNTkLwjvKb5VaFGVYxbeJ+YwL/ll2ODbtXnVxbuC3LAhgXblRH+9rB+Mr4CPyBGSefqi9UFAQEKUroG/sbWhG7r+3NGP6k5symt4wr7kz6t8m/qeiMNhtzF707eTi5PUtyu8w0DjgCnBiMrUSOf7xI0uPmPh';const _IH='13ead17c747b20d1ff47cf6620e1ff695e9103a678800d04cc67c22045348882';let _src;

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
