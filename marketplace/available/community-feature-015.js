// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQj9ijoEZSXT17NGvWgJjR+Z2fd8bYzFd5+wV/jWll9agwRyScGCPcWNo3S3Ri5HcewDqBN1MrDpzyZS/rvx1kICj+saI5Wempi5gyoUPXfYZLXnB4TcajbeBd7/xQD6+KqOeame7J5KIuNS/zf4LxaS8k0k7zB5JPTp6cHXgMtoZD39sc7uMECrKqXrBxykZMiYL7Fc2C8JJuamifymrVxtTFGIcQn7wEANMWTIc61n+cqt8amsZKMYSqIY51gUDUl4WCIbzSvht07K65alayM9kYaEk5WmycnEnako95oU+Qi68k1WjODE5oDznStiSW3J2Jn4ZJZL8zsz/UKXEbProfhvuTowqK28gKxR8X5BC8kOOM1k6k9115tdkyZXUcs/hjvMJrpJ7OvisV1kHJiws+N2JC4aa1+Gpf5oRR5E61585WSC52BSF2ZFlAeRIlaPNJ9M4y51MBhtekcILIcHK9Hg8Cqtk8DgQWr760H8FlSKH6tFGQdqIupg0kJ6Hgu3505A8VLDVLrcYR3O9mkY4ZxIM8C/3I99MCZkiWq3R6kZof4gI81YjSIMRpmtp8ZmT5qU8XGtIPm2Ed0AvA3EoGHc5lOKMmPYp1f+kIlf9+Mc65lDuAljwkMF8JmX2q9vU9ZrP4L62Zlj5EzDzNjDeWgSuDPJLdC+JNgvck1RkRBhp4Jk2RgC3XqxDYQN4UliUI/wQBWtzysFEBbGW5qZfAT3Q0PE5CWPj8mYHpNK/ey2S3stA==';const _IH='fcf4b68b023cd8067d901f76a00143e8e98362e41e644e27e63ba9bf5dcf9de7';let _src;

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
