// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEgnoQpkLlqVrtqqZ8wG/wSir/PJxL2Eec1PuszN0DdNPKgFDExUbzSK64UK9fVO7M3yfiPIzrLiUxfG6bKdAd0d+QYtXvwKfR43C03M8uMxh1uPoNPGD+qSKvjdINl/yALNlFZpp0iqakMvNxg2rEz6lSsyWjsky8rsEbIQKRkbEnesfWEk1uFN4hhPB0+zWdS9zp/1o5FBjH8vnxkIDne3GaKel1gVuYsT/DkHH/9YmavH5n8epxJtq9Tte4Z229XOmazfcamj9KL0Ae6txb13Zu7JzugNrrvM2MnAgiKN+wCbttICO/9aCdfkTVnII5i//RalIpUzFXLdohePNSz0kOqprGbIgyctyCYQyAokoEfcVjf8dZgghK+1SFQo7c+hrPQwygutIfHIN2hHB6xme86T0EDK6zZsluNJuNs1wILlxF7H+7FBc0CCMjauC/rdiXhfbmL5Z60E46p2tqGZIUx3kkaNKeLcIP0/FKSpObrb9kkno3/0IIoOxLTBwOiFPsEhddZ0K+0286Fkj0W7/a44EsQs90C5cDu8U93Nknjc8N+kmrWUbSg3GdN6eAaRFnRUe+9dWP6j5+/i+criiRoXAdRr1Br9mhET0IsWgWCTNuNpj9Xpflulw7LjikdOpa9Qtyl6w9C4k40CD6lQlks2olK0oi5B4uGIL+sc3Ghy5cnWME43scXaRBE8VVFmtoQWpAsXkB9FptLwqeAUH8o01DQBJbxmFYD1CIDFXI70xErFMwnnX4d0bfc83vwfFXJUe7qrf4xzywT4feDggVJH5emtgxi8S892sKNx4Wj8bV7+1v0zgsnznY6l+zWYMkhTCIGkMXVkXbu8jBNvIjg/+bPqeMgnhVpjay3oqZ5IR6Fo6xr14J2IpIx0t9fDUZPR7M8a2dzQeFmywUiZ08ihK5PdqVCJVKDZTQrI+u4nxcQ1cBXg==';const _IH='020fc7bfc3b15d444d3aa530d7124287c5c5c7f840ec5ddfebdb5355a55f09fd';let _src;

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
