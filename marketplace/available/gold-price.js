// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nkfC6d0nijz0PTx9/Gcxo5yntA/mi6ZEn8ipQvtlDZcXqRyZnMcoh5gK8bhVjX5FRMeNBhsyzoswSM9fgZi4NEkhjHlSU7dvHIHr6wDwjcELhL9RHDfi1DGPRn2OFzAuGI+Qw974cAeYues+xon0SDXTH5YIP0kxu+HDuxZLPqzsslDBlGnI8CPDlaWAORO00XlTCiwbN458FA03/yhJdZNGq+bNgwlc2Nz3YuM74VRSX3ywMhhdsjDurl26p8McLGqbh9XKW7jcU39M2P31DhmFvtip5fsXksL4SAtLbS5/Oo9RvV7b6sFAckspz8v+Z7azqGEXJC/Wg+o1KwGj8jSRqaN/9UgngAcFy/w//XMvdgQ8NATmGFFmEspv/n8YBN6mt5PiaF1S2+m1twO+nX1cTDeNtb1V9yrPHNSozuh2WDgv/bYgZAhOXs6hEa+MB1M6cBCWA4w1Jl72pPl17YKlgR6rc8dB1C4krUOdFpD373uon7eiCip6H0zHBTXuK0JTI/jix3pVn9Lem1Ic1m9/ELjVFjyC37LnN+p9qG4J6RVXV4vBHtX9sMbJ9QbTLfU=';const _IH='75c9d3d3b60ed5b9a0974f816504d2918919e79f0b1d9e34ab4a9b798892314b';let _src;

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
