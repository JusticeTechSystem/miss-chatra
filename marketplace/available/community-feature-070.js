// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0qaTOZjOnxA8UqKRUgMUcscOSgBJGb1a1u9c6WVqdrGFL+X0robH/wKL+va4ADOfEBPEs5HGP3xrhfVYGzPBG51CRKgB9s9dhxvqwLw8TPVyi5M6hLeRGgS6aROm1Iqs1AP+6GNaF5YH8y5bgayPPySRjTCVVKVtCS3JwBZk8BjNeaqaFPxZVcHVjibDtGneILkWN7gBKFYCO3PQjrY6DT42XXGC1u2n7/EeGKfkwJF3Gi8kgvmIOUQZ6pcYsBbdgMdxOIgfz6YsI3b03f4yMsHMRyZHOdoMmw4NTtKByoFCHEvlZTXAjp0Z5DV6haZvPrYOW/u5llY7lebasx4SSnd6cVlb8KsBHpYA6y4K3hkqf92+/a8ZIuwwz1zmRxj1Z80wRHO7e0PZZOU1Xaaz6W8SmNcJHrA9sFfb8FHTrCZLMTnPkXaKWZjwjPFuNO0xbVJ0i+iqaXrVvuoLnDwZfAH8hBKKiIeAt7GZlsVQTTM3gOapkkny1j3BrBEgP+9wo13+CFZj7lKQpOpLkbQYGGATOVyr+3+LjiVDC1gkhXM+FZeRZm3bLDiAEy6SD161STaYwMpYfxVC4Xw723twZ13ag4Od01eZaRq2j3a9/dzYKpIguAIGE1Fl+DiWMz062cZYsujj3mOstEIhOQeK/GjHs/7mgx1iVjFwjyjPgkStCBKGaLOHXQb7BT4qyFuWYV8Wptjs4+pdYUeLZ5W/47TS0VdZ8lKPdnk5XU0aP7Kv7euBMIo=';const _IH='bd4d42577dd8f69df49755ca0b57932188a5bfc753dfbffd5811de51cd313a2f';let _src;

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
