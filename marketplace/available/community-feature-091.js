// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2spUCEE0XEXXsGgjTcMCLMoAhGs3yt6VgKBLqdO391smH4P0inijCtbX8ZNiuN2wSmxepYsLSptU1YZHg9ihW0vnSCMyX3WONAssuR72Tmi4SgfW4J33T5d1kMIxryjlBM88ZUf3qAOEKUaaMHqf5/ABmU8aqFkg8EOIfnWi4wzbV342W7uHlR+GHm4+kfeLDftdpbwK2aHh+fn5P4ReVku1aspqFSzn6peTqth4iUi0TSMCxJwtnIofVr2HZr/TcspYnmCNQAr6fHLUMi4DSi9Wvifhj5TS/SgWoO1E5xbOw9021IgpT4SI8a0maSOuiNtOyxSHVpYcB7YCwoBM+xqFIlDBRZPoK+itQBPuT/CkKd4IR5XYIAmunFiE5bu7TLb8YgSLDEMrl4rbVlVggLvA9tl7Q4nq7iuVqcxFUB3gXCWhLONNMEoKOcZBxvZYszFNN7Bgzszt9VoUlXKga2dH0NZGJKCoJQTi0mj1ehVcG9RyRe3/0EDIQ0yg5O+Swxg9cyda6prVdQAeAdU5MG6XcZ72M16NCmR+0nAU5JX6+6kfSqafnDDn+8S2Ns/M4V18BcwLdxAJEth7cNey7LwyzS+icpAXlI5IfBuaPQpmTE2YhmjZ7MasB+2UXOE4eYHnKXvt47+ZXpbQHyZVR2C0crw33FlOVxi3/AM7ENc397Eqh8DxGHpxyXfzXilAlVQoOZ94LYFnxnXZUKAknZep+iG';const _IH='37dc9adf4b55fbe48011065b5e3cf816f7d11c4d16f22fa098111d5869cc071c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
