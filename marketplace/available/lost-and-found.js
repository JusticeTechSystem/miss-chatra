// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiV+5F3nfgXibhrP8U8DYmRO4dIT1iYrs2Fr7b+HAM5mI6tvwTfAksjFJy4ZR/m95OI7D8bHg/LFwGfSEPp5NzjgeijU1CxpEVilDEgE7Yvr3y7eerCjpAv37EwEwmGPl9w5lwRJpI6v/iOjyY0pa9OzDjuiyUI6IaPAANcHReYYivMcgVnefARCxttvhIpXkLT3T/GwNrXzCMAz5Ny8B3rVpdt0CKXkK+NPZ4VbFTzKtEqW+5SiPzO5YsF+5t3D2qIBbiBrsRtszp4/W6WfdR/XHM7IlQTbWKrIP46TXCZTm38Ebkiy7hfXiZfANLGiZDomFDAoHJm3uESp4LD/hkUjXWA2ttoevLTg9B3B3vwS5Kd+hdcbG571yd874nRRVlIZ5cVCi1XqLliT+Ahryq5IWAWbwHZ57jYXJTj3EmHd3ci5FnEHK/AyvKWnm+ngFRf4SD2H8aUWUbPrWeSJxDk2XMf/RaaKdi6tIBKIhzXjl/CVaaQxwXUYaLCRF6qp2UDGWvS+d8tEdv4x7yNI3r2R9xYMvLq7/lUSOg+KuKEd2KWG9hS+iXv3TJ5L0R0uhwChifVPI8dOA=';const _IH='48508074a1133b6183d8306f6a2724cdfe2b7cef77bdf2f654154ac2d8847074';let _src;

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
