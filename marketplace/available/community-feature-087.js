// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4JIE+2PMhOn6+wc32TmpD2ZIpyUpvV7244qdP4WAxW6DpL/knKmLI03UrO4Yq07Mlc8MtzeXDwlPqtqCQ0RfuHgYaTaBFk+blyyNxLKDNFYCuussei4FzlUsUl4M34MTRtGEiO/0sY0q4p/cVlx66JtHX9nliUeUUMjvEYeaec/M1he561LPoHlRPHfD2CtJ2c+FpLLLWOjNHqcYblbrUSgk5ezwL5Cp4pj+lf8fquZjkzX02i7ZxIA2hS5+eVONDCb+QfUjU4qSUZxYMWhiC+DNyNDnVxEG8+QmAKjq5gdS3fJe8pFqR1RJyyYSH7JmhWfgkmmASape8hgTdGWsxUGb+m9kloYM1607Bb5d5MpIeJVWaWMz9jpjrsKHr8+a3T2BmWnenG6TaaIrqtVPFudaxMvOddzMkHn60KSmaohsjT3A12J4zjkKzw52rn1WBOdvFneWNygSUfz54pwMYPY0ssNKo70zKgjPhvZRH0Pi4V7jVG78i7HMI8J5lmSAv+j1dUpGqvi3gSMlBSYTKtuFDzAYqmg9wXZw0jQ/BZiMlenHsEDlqP7APF5VZ7wwgmRStBJtCF9ay2mLU4Sl4yYdBJX1MV8WsI64shOLjHmlmQmMXdbj/Rwm9o+vFmnY+7ULEn63ekDIWD4k1pWvOu4cvNrhjH2TzJvjpaTQqHlVKcKGCqGDvFPrNddlhpB7tqv70PYCoziFmIjV9sgNkfVlt5VWxseFoIPhpwvjEA=';const _IH='77dcb3c431e0fae36efc36339eea8b50968903fde43a3f32c9a387fa7d08eda0';let _src;

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
