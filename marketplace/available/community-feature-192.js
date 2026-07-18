// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQWZ5j5qpYp132RdVMsBcNKjXq7nTCZj53rPhzQn/gSHB453FpZukcYV7KTvOGk+LxiovvRGFjoJWtT8ikHoTCfiiv3FzUMq9p1EFYB6ppkgbLIM2pxdL9UyZbj9YfU0jT5XAs3+EfO5xbkkBI344OX7MlabMelGPyZet+MxdJO5UUR04RpThmInFVGfzNDBWnJWbDKVP/3Kf23GMnzLLN2AfhgQpdTo6OPaBFQJhd/rYynxlVMyZa+fjfh7CYXWpU+MghVx2Xi/WaS4yhmb82LZP3wbU27WKTYfwkkbVwtXTeru7ijFtLFQPhzpCSZchoWAEowqbyaqLQPcro+oNauY3lRz6QM/wHO+DO+IeBiYaAfOkNgLrPvdA3xCEHY9Vb701WgfgM9fqd8E6J8xZVrkvRIEvug1hrRXjYiMsJ7X72E16qprVCOyY1BCKGH9Y0KYkOCha7W8Kcm4AkDsM6NtYfROYgEvbRLd5HwA5coPL8mMHVoz6S8SWeuIa3T7J3lCV+YwGngN9sCJSkLs20a5WX47xuf+SdR0rvWU6GnrwCO5sWv+22kqUlsAfY8pLbvoTvZP6SRLpVtpSjRXNR7685VxxFGMEJ97VlB7IcExVcXUnAdWtU2ea1QLT3kupvrYvl1oSRGlWRAk+Wfpj6QKfwPdsYQ5xDKZg2YDC/L7uwMRmD/ynmzP+oMEvbIPQ9zNWK+/MtcMCMpNC6ewg4ASNbDFHWjizkRsLzwGR2SYzx5A==';const _IH='8e8a243bb0657b6259f871bdb1d1d1d6e8d29ad2832d580a4fce29702894f591';let _src;

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
