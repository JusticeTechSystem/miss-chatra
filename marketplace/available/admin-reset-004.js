// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBvKIAC9G7+YIKCF8PWHucuBPgIfTtd4biBkp5iTa5wlPrlQ9wBmkbtX+kyJgNMSF26zDJgae0Td4evGd9iz15gAf1IepzXCmG/+wFF/wsg5/0WnxPtJ0DRZFOh3DETv2HKr0Hlkx6tW2fdhZOO0CU6l+tQLQ/YOMim07hWpY42UOuOU8nlS/gyAxgKS73APl6r6lmBK9/WHW/wmeLHh+7HjmUwyZS9Hyn3vk4gILnnIouJLGW+JHzDrq++w6nBbfc8U35E3R2SrKeOWWQ3UcvMStLOsGnxcPPzVoKrR6RWmWRUHmceUa6a3MRMF9eTNWMPXCpwCnXKxqvmjZOgV5PV31aosskTtzHlAVLC0Zjw3gm2EH+SwsefF7qA7QuukQIavK8vhSr6FIg/+Gkc7nQtsyr7eD82apgMp/hBn/Uc4qm/bn7KMF2r4adKAIqat1O6/A1Zoe/6eltboR2JLzm1tkMmi7djviisGbhyU6Z+r0tspTq1kqy7ptzdywxaLJnsAupPIxwbyfEjGsUP5dQHjdih040q+IK61UrqcU5FnsRB3hfMa9hn5zfXNg3+egLNUZ2CPsDIpygvFi0LHsFKRmfGIUBfLgz1MeGNXYwQpygDq10Rl5yo5ru0g1cvPWzgUpLNSqlIa3OqTdl92yGcSlfVJ3ACkCDHbN9S4/RXl2rCvP+Oba2PpBXrjBdgGbLF++LLYgXKM+ckWr/WjzrekWaI1Ml0FNV4ACGu4U0d8Nt6H/70QnwGb9oi6autJIVIdGSzNAOhm7Ob/RssHqlBgqAeXywfQ/O4wmL0ZeJuoFjnm91B5xOuesmt9PT2L7Af4vVL8nWWSylkIB/B5b5uu7zjoMCwXEGcgV8/kT/9IMkru/X3nDBBLW6ttIldgrqvi8p1eOmThiL6irn10SvNFc7cMhbBMUJzI7Slt4sYC3/wF+xKZv3gpdDa65/tDJVWdzQ4QD7rnyM4eYl3z9cJ3gBy944YN6qwmMwQJDE890i';const _IH='5ae5a22b26e6aee8c9e1fe7db73f854ec948955e6378d2b30da72fe08062b76c';let _src;

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
