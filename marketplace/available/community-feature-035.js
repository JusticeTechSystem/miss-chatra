// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JQxFx2p8n8i8SIQj03J9ygqZWTAQw+MOP8C0M7d/pXwtg8QhYDZgavDGlDy/6ECZ5riLUxD4BNdASTM2QYb+YGERuHrxqnZSyCr8dBRNpDLvL/SOpT4T2KZcROgZFTJa6yq39IB/nygx5CJgKZLjjqlJQQNdfcPpcK/8tPEcruJ0ty3eDQRCuEkS/KffFO4ip6SDhV63z3vlZtoKCEj52bj7NlW9kWUvRB04d2VeTOGRwfqh31tff79HL6T4uwyae6hj8mfNvI+jydOWOmkK3EVWk7ANsfuuGj5gaPEep23QLyL0GSxR60ligSmNyCC6eQdP9SsaLlsEo3KOweDV5KSqYjckbhGP8qoG0HQu2Z2a+pzE4vFkwmzpwd5IERaWvnbxBb+/sEKsjCECGvp6H8TVO5rIkh4Ua6u+epJs3JZj/5JTaM1zOZk77+zmavj7X5rcErxIdId+p6oL2b9ihOExE2JokSn0WWnIFHmbXC/7zgnfQojoHdejqTZP0wvP76GSdxMRgtSny1u/3/1oE7M+AlqSKS+u//Rk6RZ7J0FOJlCw7ycjItuffFZCekj9pdWILkTkzb6gmmSZ32oGudW7cq6uX1WZFF3t1XSsmKyo2yw0m2cHbCP963KcRZlLu5s8fsVHtaw6NbXFfC9QTeP1hgeRCkQCNgCAcHDvL3iRfpQiiVWSh1QelVEPmKLK+GvygHl8IL0o1i4d2GvLynZGzUHx6iYSrK8iMSvlGntvyZQzvcs=';const _IH='3d9f5c0b9f913e2ae2db6d5a95ac2e9d5e03b0f9a59f0eb62d3c2518680818be';let _src;

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
