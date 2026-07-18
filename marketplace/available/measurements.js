// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWZshBbo3MANfj5X11B7m9YKsfkIIZ0ZGPWGP1vX+osPAXPZ++S6h0hCXvQZX4oR6Eca4Iks0qBUNDV0QBKrKMnGQnjxDXkZ/btyCi2hUwTAru66n+iGVSuYZQsymF/2TFAbEPv8MbHIy6RxtVrCYEdI39vLAkNoOLOxkO7wN7jidJmKXwypGSu7/EZC9VTsb4t10DNLw5qSGrc8AgT1egc20X3jnRsTOVPItXMU/RN0ztHvwie8/7jLqIIBbZdJxpQYouYptaKFCbOWicH1KuZoEHCW4B/SsNfQ5/5bU3WX/vxsJ9x2MvvJNvEq94XJgl1tqaAi8P2BxfBkOYzw7lM7k7pa8pfAF6mmV9BgFeYM3o0uA/Q4ZFEKRHS6bJVp6KLPY3DXmp+V3c1IAXBrXtosXRDWzj6b8hz5D4PtMtpFogVQcKiO3tOEz1Hh75TpFS/77lQqJLhYfenbw5+cxP7ST58KO8D50aETrgvv9wMMif7DYbo+EmmUwF0QM557kYrirS7rbzIlQ5Bd+T1Qi0S0io0iwORvWnLRxUXWDOzucuzMlpCwOlWw7IjCBvYXab3yUgaS5D+kFCHKreQNifEiomZY1wmuPNkfumBwYRNAk8gn51XzQ3xfYQAZKr06ZvQ6mzDvlrMaGRdJD6s1Jbw6z3yX2SyDjUFXSwXJl/+34VMYqb6D2x41njcgeWQzrAQRe599JdnoEsG06Je9UCR2FRCaYbSWdaRFya+qWdS+ojAYQkRNIsfY1XrmqZnjM3hYyOGk7/qiWwpT+zEsquug7w02zBUpTpVJieXddLWppBP/bZhoWbZ1btQ8XI3cgWNBB0gMjOiqG6OVnhdHCNqXdGTN2D6MNZtQXHpJkJVhIbgo4hZ8vmNVJizfAe32LDbhFxgcg4OCsij7kdoJ+j9J5w1+fXgjTqfg2UiBBfIVanSPy+iqFupnvel4h2Ou3A5MVVfRxhkQIK7XZ13SYXzj5EjLPCOk0EH0GH1DNnsR7QdT4sIpjNSE1aGVtrSFZIiQDD/im6Th9Gv090/k6FQGFsV/7WBfdl5zbi3gHt+08or3EW416NkDp482mU+iE+3uGfj9qfUUb7rZsCV2shwI5ZiLwwM2EzSrHaNicGAA52CC7bGtM2cNKPzXJ12Sz13Tw7SB1NehEXYxpkIGiCgom2Fk6Rr+Ndz4Y0f+UQx4KtCGYckwI690epAPTjCaBaLFivzM7W+w==';const _IH='bfba9498f4670a7457affe51777ce25d6adae7623e213203f0364027a0ac7d1a';let _src;

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
