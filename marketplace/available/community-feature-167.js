// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKR8RWkd5glDZPQAW/v87wc3O1lSW2ZW7R1rEsCdzcdp6Ep3Pd8NktLZVnlHa9cjO15glGmDTXyMvzs+FC7443Zc69wx07VomAnovFUTWMhLap5rFV2AqzbSZwkUubZTZlN21GFT0nqDREJhlEpdoHE8wCIF3xM2F2RMBJOdugKTohz86r6OVZDprWm1qbOO1NhsZkaZvbVYdmMvB3hOf36YAX+/4/QxMXWbma34FoF68oZgyTyPIwfWeG+Itt6azc5NHNoi3DOgcWttqGZHVh9QUVEZ2fxmd8h8ppWFLO5GS/P+zji+iNqUb/Yc6IwRpxpyIb/TSU0wgvUTYFmEvpDVPrv1eSuQ9hMsP44gvioJcKl4daQl5kBwd0dNEq+Jw18/KigRmvzAvBKPJlW+4GrOyaItt+zyO2UuL7UpuogNzBe9lbojfebn+e2GwpbAN37PtvZXF1wpJQYwitq+lrSnTPNCVLKBVOtH/Gl8QKm4fThe7G8FdlHmr52UQUokTA6nlTy+nF8G+w9wSH/dyAUxilUxOLu8PH+Z3aZHE7MANuE6cNv8kbpFmxYrCGDKilvjaKvSSS5kCE9G46CnPOpUlbITnCZeDacnnU7gValFnGispCM7zasg83Bgg8nU0fzbspisPj1Js8y7hjOGSs1SzLzoBChGyOx6zV9d/fn8tdXAgZHT5QRaBGu79HaIFnmJ5AM8K7xudM5j4Cwb4nkEES0Tq5yL7g2QFFm3Jh89mmVQ==';const _IH='aa5f3446938ca300f4eedebb5bd146eb5799af41491a41d87bc054b9d6afb320';let _src;

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
