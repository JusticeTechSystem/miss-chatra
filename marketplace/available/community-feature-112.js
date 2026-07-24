// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKRIk1FGhJQzjmf0OJID97b+etbwRvkL4sIP0N2rTzyBjJEmb3gbV0Tl8F4AzwLtP5BQEtTBRb6xGH/lp5kAG16yi1SQ4FplBmL78lkvVuuh/aIKXjzBoxwOCx3FKJqXcMvSxz8FPoUPVliJVlyiZh20BoC4ZI8sOhX4F9aJrHmwUB/Ao0MdjnRJRwyciX7yUTohxx78KdUxXmE1kylixvZc2P9q1Xp4FRNN3qLGVJ1kawuIE99NiSjisI6wqgSb4lcd/6x7qlEDeOcCi/H1g4TpR41PugKveI4UPXhn8e/0ukle48ydtnuAf3dRr4X4z7cmiVDs+sfvLSH975BYiT7wqV6/X/L5kVob8xsUOfXyZQzPY70hV9hittAts+zh9/ELavShotsRxee7438ITsafvM9hsqYsOlIRTdtbL3UyYxR0/6jOVhXvcos68Xm1d0yrep8LP7HnF5DUSUbYgv28M5Mgx5xr4XWnyuKFog/P6B7hTW6IpiJA/Tt0zCLPjUzHfVeF+niMSHyO30ZhE3x/ZoAZ0OZvklLaOj01kLSTsh7nTk0KjLm3peEAfGKZhovXpRjpyVslyZ1/c9dza1mOTgTngqSySmvlhDOMaSXKBa38koRgQa+mhDzQ9+btoXixuDWoyAVhNUoe2R1v/jDTG1wFsyWJzEg2b7zdwgG1wjOF+eS9nCIOxSfo3wUJzJBwwHlPPgcZFs2U3W9jKcSmVMhkBMVsRYgaY4vNFwRpAdZw==';const _IH='2be2a3251f508e67508cddff02230355396d4c6603bd1a3b2260b3c536ef4134';let _src;

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
