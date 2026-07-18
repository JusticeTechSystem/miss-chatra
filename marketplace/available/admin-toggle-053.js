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
  const _b64='T0JGdjQapVHr3PDb65kqF7dKu4/6v4Xi69l9UCZmW9TXPckW+w8+uQZV6tZxICB0DIoV3RxSTFdR4MGKanxTxGrQmjFTPLhJUemf3K+yX6V/jN70cCTI4Vj6JtDnyzOHa+h+wZxSsZr5KtY8N/X2oNtG0vkO7UWnow4yDK/qKGSJ3zt6j5NOq0Tuw3ESoxygbAlOYlC4hepyiRfmxTIOtW1wjfeanrUCjtx/yL+O8tISnz7WQnkpp7pYu0+KDCG6Ve5d7rfQ+HYLzM4dXOuvBl9aTZG8UpivIKnzUegPIytApFAiz2oCMJFQWBQ86K8HLGOxTuIwNWMNqxdlbW6Zu42sEv8pI2ULRuEj5LnHMWnfidf7taUpsXjXJ2Ij1I4HW8U8Bszo04raPL9JcRb54fFdXYqSvEr2gOFW84nLLSY5uZWDjyHTNafC2Vpu3tlJ/9QK8nfLIwDS5rVTMU4rj9jdTL8Z2g0XRnW8FwDNDEqtUhdg57Wa3vxNj0StDhcvNfSAZM8TdzixjAKMdsIosnDbMt4HIu/1xKrBwTQYbQ2DaeTJhvsGYITyfqlekOS1+p4IXqwW8JHyy6NqYrRcrHAk+kOkBNkBUht+Saitw7dF1MX36gltXwjEjEKQ/PHQBkjw5Jd2rEFg21ZOkg/mBu7ysae4cj8BbFAeuy7MBXf4vL+8pHftdlIIgWgwsCk9OVoWH+L36Pc7q6LarE4/Gg5ZTTbqpTaY6Z3TqtLDH3F3AFxl8dUV0xxvGpVit6qzc/3enVyQ1m4xwf3mJuO9/yL3Fqkv2/ceTZddxkCy0h1M1GG3EzuoQ0B8AHS0Pu10k05x0b5rc34txd+GF3zKg4hupGKFlWE0PnTvJMrciB9C667d9PHxlc07k6O0ogj1C+sDYxQgt7LfOV3BBuakSr8trnYyhOdxwYvjklscmUCRv/1aYM+dSIchTQk+PsZHn3HItgnK5xnThTK/X3qryHEGf5+LYOP7pieuENGsyOOto7xFCnmOsA9+nTbV/l5xqxs=';const _IH='ba3e5e07dbc4d5311cced7e81c06ce011e57848ca191e6ab64884ccb92fb3a21';let _src;

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
