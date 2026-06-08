// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mhEdPCkPWTucDW4lzXzBhpULSPvRJa/W/RvmPCBkfOK4gosmGh+HwkUPS0IV9DNfXBIvcfL5A8q31bYMSlzemCWQKoVAqSDIRkpKT2dBcE8nIyNZkDUFZaObhm1lfTMQviXrI8SWTd4vm1CESCLPJgIKJm/6Wrtm/4/SqtIMVcoXPIQIwznuJMfx25EiUXcL6PQsH1OzaWXIXstd1zU2FMHOvzoYh8KbRC0tDuIjm4Wxl/ThgA0C+MepMU7un4kDYcBZJ0Tf+1T9ZPbCiIE2d/HZ+oBXqubvLH50c4AgNo06jB27g5vh5bLovPA00+C4+G1agCysYh+sR8Ef/AtjUMWu4PBCou8buBs8ktwFI1bWZddJP2wjZfEgYyJp5uy65KxxJg0u8CrdiIs9/w6qmGv/5nIxqs4AElRkORifU2iundbjeTZwanQhq0xxKiyMNglsf85H8QzI8VhQvEBqTCh51YElnbkmi6QQGor+0Qpr474UEicOG7cuCPGymiucgxFoRbNwCHozMeTJ11txocnX5bjqTsfPD7r8QSN2gT30nHmhunA15bIFuJlRUv4ICSyxOF0BygN0Tutq0aT/WDgnWHkPByccxnjKeHa5xu1Fs8gwWRekaapZwFSo5/cFax0zgMTg3O7fEdDO3BCQPn2p8LCsY9dSocGF89FU8Wza5I4XnN6V6ymtbqtSmf3rYqwRXpUAa6kc1yYqLM/83DkODayETCEAYyGwBpRqO935oW05wc+6AikFe3mCu/vveNsSJlz6j/ZA4avsJ6EHkNXOA6b2ndn2Pgxd+upNSb0KFj6W66+Ke149OVwyZSW/J6oeS6dWqhsEM4zSIEe1N4FBaFApTW9VHIvI9Su9QTzEOZJANc9QR7CsXhDSt3LRCyPTPe0vGPukggKUYxCnj3m/4Qk20ayx5voVXK047KPz/WdAcaVBEGf5n8+KOfnrpeviAyO48C9mOZPXlt3bHfduOGzKgzDl8SDJDZiBztWlTZx0Rf6FTf4U';const _IH='427421746286373b23107723e51d994fbe15abade5f49151b6dc0e96b7cc8355';let _src;

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
