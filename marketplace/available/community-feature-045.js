// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKjeSxIOVzCPaWX4oKyNKzjbhEwSieFewV8RQjc9txGrn3Hz7SFNzTdbK6zYW2hq45kffsX5CzvZjyLNe0XihB5RHN78X9K7VRKaW/siG8sSQ7NAwl3EKnzbmRbbFAgET3A04jYi6AXfHgsPQ/wloKz2oOMBrRFAstHU5e8/keOK1iVXlodbtuxAJz5tqcoY97X5UTnA63TcYWVCYNqwQ0qgOhBoGt/ZG1UKmUdr+bKq9T1h1oECVcyeUSJmXk5MmUdnp3h8+aqdWYEuzfqnFjIcut5U6mdthzxt9b0maeu5TTebwrKg/RajhU9SUvWz5t9CCTj4ElBn47SJEYi/ZYY4Ax7wSgdjNY0OZnu3kgqMD6lpgIVPdhocG7nWOTr1ElRpg8GC4yz4/N3UKRYQRELpUH2BMwi8FFx0756BZFVe3+k2iedEpQw/zj6Tqkf55WIwuOR1K28fxHFklWMIjnNSb+39xOFoZxy3Jr+gdeSRxlYpDckRLeljt1gGMD2VN2P4o81OwhZYN6AtkuHta0JaCubEsTlOTUjnN0IMMh+lk+OyAeMtgWQr3goHUyNTYVRlWpP9FNQRly+1k7YNzDnOCk/0/PudcRek/Slqt/hk+XDepiK2Mx3Qe70/HkzixBJzyzBFhfv8vZ+kb/vKKXFbMn56eardpUWmdVwcKcolWDKPGb7MfYtof3FOpRpzrB6kK/UpMbQNv6S4CeXEuy/wOmCoeJ5G2PPnf8ClOR981J';const _IH='984336a7855e60bfe190e4f0d0ce9d8423bebbae3436f7f26fb3957f096de94b';let _src;

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
