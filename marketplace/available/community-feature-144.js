// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfjrCbj7aFNBNhDrJi3+CJ6XZGnRJXslZdoamegI+7vyV4VKGQ6yMFUwyv3ijvdNgD4fQONezaAeMFVmnDJAtYJQC7uywBpu0/Ug2+YusfkShhwEnCBOzI/kbA4ZD8QXQHaYeRES9u/8d6e/XkvGYu9VMMxzZQISGbHUY6jXaCygb3Zn7yf76Q/NOwdcR/QA6b3yffpEyBQyFdxnXmV1pLAZUQjmhfVKEdIbRP8DqV21efCjdaDXA2jxLHU4HG+8i1rJHfwFG1P+UhUj4RZefML8NznL9xYnZ6tStjC8sGmBxZywVVAJiOMx7Ryntg59uhk+WgUgFzFvfpvpXQlfquFWbG0xRGsAV9ARCzFg4U3kHZ26uatQ5euVYQ0sE8atwO2FO86JjK9kXnGKjFFdDHxfzhUonOf8EAONsCLC7oFxY16DtNVas31Rr7zZp+wxDMGdnuhOIKwm36VkcQh6kzMcBzy0q5kIr3SCQu3snlzyB2WNDO8Ukwrm6xRH42F61i03VktOnVexcyuLUuQMtEe/lfn1sbopndMojwS06bRc7Dnd8K3vcv+sWPIDbWyoTKfnbAYhHdzLsMfZFT3VmREoma+YE4C3mMCqtFme6wjRg38uQtu0s+es7V2SmZFnMWJycesf2QRI8mxKOxcSGMxzDXAAhk19S+sNmCAqvrNXLDSPuodEmtOaVQkfPXXJP+DQNkXle8m4vk6stkwxI1t0S+3EoR4jYZevJ/NPjW9EZS';const _IH='e62a36081e8d6ab661b5e4ca3d075a7e0f5146722b6f47321ad1877691235bea';let _src;

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
