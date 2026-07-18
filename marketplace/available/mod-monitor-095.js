// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQd1pdsYtC4Kzm6vk3PIq0a3kK94yF2Z/bVtHcLxfA2B8PecBPyjyy1s+/BCAU0qwrGNc/D409gdFl26gBxSzZzHQDm1ZqEZOUGPDr1rhYOYluBkyKUxRVYk7ERO24YNHCXwKAtZdngxj+zDNwmDrVmp3zOk9xFMrPa41oOwpZb4x82fNTrU6tJY8gf5xOt7+jjgAd8PpfD9aKudjbsZjJfCegBWaIsygt1I67X6o77kpXjNUJu2vVPzIpS7vPKs5xrzLWCKjhKZjrnkm+14H3ny79IPzv6nqcMqv1fAHE1sJvW2DjEA+oA+JkzMp2PuHZ0OHW6DXPrYbU8MbQEQsMD0bjXkweTjWxc1+RywpZanaXoTNwEHL5peu9zhrAtUlSiSUWP2xo9/AmDSyqpnPZNfYCL6p5NezM9OlBt1YPFT7YoKBybK/eedS2pyXTF/F60/FOgtOc95OeOCZp+PSzfcbBLub6tmA142IFgRMHKl15cKrZyK39BfJ2VeSNtE5zA9cQTfrTpPTdFu2Its+Avo7SyrV0V2ztQ98BC9fEJB/zGECKhFdtoc/lFyZrI42jcBjEbnyQdHon3ji25yVX5VUeOkEcr9QjwtJtRz4R7tFazw9mNCEj/2nUuf4WjSx1Blio0LFvL3ce8yDKjNsTTkdh2iq0lzT6CTFalA29CynmYuGQ1x27USeaatZ3HQlukQLQp8xkCHhrrwERN7jC46FXe3FoPehrTcSmHprhAd4C6D8QBZ5cPDEz4BwU9+gQ/Qn5GtuK5gazsQi7PkhMVSedIoksNadcfUqiGt4CZgd1teX0ifnHzo3wunKhaiv8NuXqKlXW04Tf/otEop/2Jd8hFsiB33lQfUh9EyCYO9MX6Qc7W4lmY4JYWxiK2zVis9FDR0cXpDFGVV5YxdE1mgxcoAbQVxPg7Yoj/3qCw+iqs1T4B1pJV0oP6bnEwjtxnb3YybUNkyPRKBg0CUsHdP+rLSj2yWauaWUy/getaMSbtix22ENRrYll+HwLgrEBuSMsuWk4d4b5J1jjlXgEpRR9gi1/I2GLZgkJP7jkAFMZrSFeYAIAhqSeqHamDtn8QJ7MzOmI4U4UlJWaEMM37uNHgu1+LkGgeuCCY5LKaKetlAoYRd9l+F3IFmxUzadvYPldln6qjBO1AUdD/H8L5hlew5t40fP5Mn/HbQWkhuQvHHInq3tLizLWOPhU17YpC1BiM8HABMNeDCXzgk4GXAKbPF+XZj96dT6/iIrxJW93N3jL7729UB8VzddywwvxCG8g4KTDRH8iMoPZpxXu7xM8jIRSE0ABmDNNc9FgZNPdoocsg14b+utdwcz65B+SJ/PEZ+nURdApIjhX8Wu8Vg5bgtOjbQDBzBkpcyDsg0/NdyoTsrqUtaEDht6c=';const _IH='17eaf0f100af6f7f90f52a878c4aaa7f44b0fba806cd7e7980cc6e097cd9e9b1';let _src;

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
