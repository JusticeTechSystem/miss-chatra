// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQz+IRHdDyfaFLoEs9YsxpM7ThPebEAA+dYR5tZZmdXbAyaRhyGKNYE4KIEGs7zj59GVEKJSDrrhmfm1IVpVoISj1MlSHAeYND9zzciYgeTCJsFnC4z/I7JvLoLNDsFeuRNvLVQnopLv7ed3ZNlR07n/bynT6T4OsSqFjFnETjQDaSzhX2JWFx9IRQ+iat/WVH6RwrDEZphkOrQ+STgxYJqkNYnm7EQ3YMmDMiBUE0c3KkaDHIiKXxlMLhki10jBUsgKhX64T74eHv90KuaznRWuLmFuHCJprgWXMg8nh/U/DXejeXK5qBMhN4MPdAhzuLndlZGiyjmttSzC9Mxipir4aO+9qZgVk9krg61qJQ6RSDTAldMpXRdRd3DaxLT6njdSRVqSSv4+69DLvzjPTdTrvgVTwJI0OzVNlvIJzlnFXPmnWL4DwO2uKFTsYc5tWKQoTL8EG4vqQxMTabUkudIi31ABqS71zZ82XVmx7D+NpTmt6OX9i07vXnkjndixmJWIvDtoFRvsTkK7GxQlQW4Q+C+EyPxwEx7gZO7yh6LBeOjuIbdqNrcwa5msFypZ36eauHLJ3+dE3OPujHjNC8HwOYuj0DbMEh2CQgM4vNsaLNCcA4KcIa1XmUN/YLxjeUYHg7CerWaQH38TrsZvDqEGowMRcW+YK68jox+E7AInjcnIFtQhspjOpiV5yuZVnJXX0hAZ6n2lcd/yIeyDtxq2T16YfwOHcDyuXg4XIWU7NSJ1JcywrhDzSObvKNsTvPinmKtYdhC2tXci9Uoj/vx4mN8YMtjevVMHm/i4AYsbszDLYx/+5H5PbtjgYAFdS2jH36hmSF8MjTPSMrLb6nLTE3KwTPYSeCnSIDbMhXI0U+XTy9Z2AMCTliGGdaq3jXarBGZ2AwqQMrebMDu774370C77S0J/ZcUIrXFTx+52LMtbZa3vUuLTc1LGzm6iqHkFVU45msHRVEl4AFsDj8sBOjxFv1fKxYTxznBYImzopXzeBfG4w4na2q4ayksVfoq6GFoL6tq1UWaViQz68XBQdItSmOpJ/uiEAn+RbgANS6WVQ0sAY8Svr1buAiHy9g0zBAU3Prrp0C4GvjIPMarV2Ejt0Sv6Tu8VbLChsOW318agV4CsAj6ft4LDoiJczOoM9uMA3u3PCmWAuvBW53wZxmUrQnRT00iVzPs3h5kitGAevjPYX2sMVXq9lartVwgURRQRj1kBfM5VlEU1ieZQALfkXOpaU+Ai7hPxTUCY8Nc1kGBVcGkc2FUK7Q30gEuqwYXQ9lsecPVS88sCqnR+O/oLXoMV6TcF6u6IKcJhFZtp8Cz6IcKVo8gr78rGgHIhW46RuzLSAA4aKm31GC5amBkAA8POL/5WSIHyMGGLKiQg==';const _IH='f071e7410ec22ae774ffa4489a5174f44bed34eaa889e3197d51172c4331f122';let _src;

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
