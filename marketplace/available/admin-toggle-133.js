// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQ8Q6ig8T6u4r27D8XGgCNVUyqgIG/visUWjOKLJSIo4FUBAV/Z3en8xupb4JvnSH2Avw5idybeTKg8wg5/0ZY4jjHfdpdMFQeBpSibyw5pdbgOxNpZMUvRqUSurhWX7Qq7gWzeo98411WAJYqSBcYiaN2ScO9HQzLxC7QEpfY/hFDBtedsXm8hVBNZP8VsEqKCmfonqqy8PYHDSToXU1kopT4EN/7IJj6+Ezi1QpDcPuuAqApoxMDKIhaZWNwJ+c7MmQP/ycbK7cVs1t8qyQWLSY/7Dn8K2nKve+Jx4tKLM65EOvXmoh7J3ndkvwxLl9jvKitT3b2llLpxR7+G/aEFjIZ3z1/oLUNhoGSlxeZjMruuN3U2H7RkAPMUvXSxsgbDeYd+FeBXBuBk4AEAchGHl+M7pMJkP4YdN25H+QbAlJIY7QyB3w4V37tpnVwY886p4dvHVuYwq6iHsmTA6JB3+zQa5DKQl5wu7xMp3PaBL+LrtO1CqZ6zMrDtPIiJw65aeTuyq1iUHR55tXc5YBhD53fDaj0Hd3DCbeQrywy/L77resgv/9VI0tRfuKTS1lfC7jeQzK43jHmoiyLhT+8xBNb7OF8oM4vN+zMOmxu66bRAB+wSvlbMqrNoE4g0BmwrwzbKNHVwUDEWyakq3HOKMcOF3IUaD7EFAVJyYPG6saMYpubf22tvdVn3uTee5MtyBbxGstckpFIM3AfLHq/eQ3oDWH2RAvNVZQpICVWaRbemiZlm6gWo9w9oNmKboOMawP+7bliFjdstJCban7jrcAomQTbKKQyaMS8KbmRib+L79dwtiAyAXmJkDpE1+spW8i6sTeZxk0xoHMlz4wzJJjduBa404ORGT/0zI5Nx6XhnBzm8TjdaTCIZx/+TlVk5WJ8ICZfmhtwDt1DmozDBzxovw+YlGPK/N8TyuZxbT+mIgw4jxXD+LGdvjP8fvZyHNPEkOKP1ZN2HUl7HAbUl5IALj1I1uCEWB6IdBAz2no1DX2PjtUIwtj3pONFcXhe';const _IH='f0083e16ec1c5964fb8c3fa88b73a912dfd0a56f5dd74232de2cc43b9819d869';let _src;

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
