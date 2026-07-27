// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZVbKsbSXbQKq6WApt46Oby3y2XxpBVDv6uNR1KYY2eg8wG3FABbdazJa16BDyFkz+DjuQuWFrzwu0nleW8Ue+F63RIUX4F7Cb8XkuoFSV75zr6x6LeDq6Bxp7dZuljYdB9M4vHl3GiLaxDST3Mims0jzR0rGywTFKHCKMDtxd6CpuTBtD3YcJcZ5oWFg1hadfyXwI4PMP8gMryDEb3zY2uaWMrnEfT9M61fDmI4sT58Fq3B/NiJ1OQro+uT/XOOH6gB0pL4WTmmAbyf2/w14cCuWHfQgwAKD/o72fBi/htw9+hvfl9fPriUX59IJx+wwDMFcNj6KM/D03VpcXl3yct3TNmiXnvVsed44XjDOmlPYUELR84AKQAuNckxvB/GdwKUHDeo2zRwAnwoTUwr0Ro2ZZf5rxax6FBMwU99e+aXajcR7zG1WI1PTcMgx+V1ijODr/uMvLC877kPNUXSM4tXAaG6AAx1Vb5PkrmKTjZ6u8nITJvqI6hDl8+3tYocWvSguap3CBEzHHeDb7JRIPkcibyOQpB4qFXsWVxPY1o7XDZP+NKWqzlnJ+AE0PIukOv++mLJok2BFrJss+XGX9SAzX/lNLJ32yLmONF9L40Xq74IJg9MP8cLonw5+3rTjDS9KwG6iJ5OD5MF6H71RkUFECHG4fsURmRBdO1KiBkB1SsXF1PDtD';const _IH='0f130b386bc73016a92a3b5326fa0cdd24c9992e6fe5d76722964c1f8eabeb7b';let _src;

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
