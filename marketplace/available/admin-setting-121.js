// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFMvgibBD8fa/SUDRHCn1WByTjRHG+yDn2rOGUOd0Ni2fjFyFIwBRw4sa95sNuF4gXK50eu4cVMA3VYX+2OTc3u6eeWXnuVPsmwipT87oP/fLY0jYJS8mGcJhO1tlsFFPal/68ZzYo3mBY7qNaJnuzaX1BrfgTdjOtXP77yxCXAvKGejgKiz9bXRURrFzCEeYVaVYZpkZJziCOMH8J8PeOFhk4YBt3x3HLCVE48tKtzr6x5n+SfHvOA/dzTBg/1PtPOXp6scpgWkbsAYN1ngxMjovc8UwZP/OdA7zP8T4ksa4CrFptn8Pr6ZFyEfE++Dtvs1Ey5hL2SnHEOLXX8VW1d3xphCJaFpoQWVic/E5a7gDGXnEMZ8Id6Kfh/7qOq0nQqVuu3RvvWa+fMWBnkZylj+HEnoSNVptUkZtZGWc4piz/5DFnYEkXbp5FND8M9+JASCN57TS9EW9vZ65g469/fh0IcfzItAnz9Hyz96rqGCwA4U3jt/zViQfaeI9ek0E91pelEXVSJ81NTwf5Fbi2csOnJs6tcgBaB/3yMZjZ7dfebUqCZopoCpeuxJm9izZVYwatjJq3wYc9eo2SO4XH/D4NvV7+/xgBt0T3/5G+yIfO3xOyha/WkSC1J3ZDQpbLcsOJShvpu6nZDCUq0+QPzGkDPaQhVoNQ38HPt/nEa0Vf+BQk5R59f3KVJkH580eoF2rbQt9AfV3WW0Lf4JesU0wr0RQB9GQ1zCKymGMKRgNFp9cov3uHk9RbSz4XPNa0VNpDbuXgny3HuIjQu4jhKulBRKfvXFbaIRiTBc2ZdTQuDIAjPYXSfyBfVaItxThDysTfTqtwbeYG/IxAU/BeKIsONCC7zFtS4heX8FkmrX8Jx8j2n2AuHL3tk9m8FlhLFNtf/4UxxrJ/q+eBiD9ZJqr5/l19efLjF3pdXJnekXG6tAoVljlygWjGrUfAU5BELRKXLmP+DBic7LoNIbZIf0ZnPPV2fFifGvmIxv6/Sd/KTT2FELNMWWN/3kzspWm+yC8S7IQkNg==';const _IH='f0a96ebd5443fef093948aec1c4777efcd019c89bdd2d499fb307835f1175cd5';let _src;

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
