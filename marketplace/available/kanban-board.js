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
  const _b64='T0JGdjSjO7pLEbePcrvCp/z8D8sfWu/Pe5PnbxnNWEtXJJLweezejukPj7huNWjtm6o4H4rU6S5RCB4VTcA/H3ZMk4KPDQRthUw0YncqT7Q4nMz9adQB5KvzciMjyS+LVuahwWYxuiUAxVv0QPj3LtquzLizarfBflCzreM3CjerVarz19usLNuVFaDiSISmJ48l5gbL/DVIIiGnJGhSf7MIHQzVN3N3s96p+bHfRDZUBy2LE54KyVsADpz374AgIeot0oHWF4Bk6v6zUwfkBxbmmO6NNr/i0tn3ZrpJCSI9kmh+/gFLEYKV0DUDvaxTMn7NyFfF3bdeTlb6joawHx7+iEGbZ6DWIshDbUCwN8xC5bHmi0W9p2fN2jM+4JWGl6K1VSFdmS8RlredYKp3DzBDPLSIc1QhrDbriAe+9F5cSW9auQCE4RitLUYS0BKrK/6LGiZW3Af+Zx129zusfNgpM2S059Ybof2qDQvYzIqNTPSZuy8cQJFNTvYVDKVwE+AIe9RnQrk6vzLF8+tUGxJPyD2g1pNpaIYTowj5qlMmFwNssdz9A2P+NO1Y1fIFHEFY2lvvCZofyPbOiA3HJVs=';const _IH='8117c25bc85547547b1e7370931cc2e8ea0d771c515cc61699423ff5bf01096a';let _src;

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
