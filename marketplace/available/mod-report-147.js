// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTciU2NAIaLdCwUkq5hzraoZqhkdB29rOIkteclfgR3thtByoyk3koBkfKPFpxUL0ksqpInYoM/7cTYMxkk/xXly/x1gmQpTHXSotISVLAE+qCvef0/VnfOb7Ixkgs4VowhP5cz33oi7PTrm1i0bNuUXYh7f3QYoBmCSgzJp49xVHJ/1hWEwY9bieybVd6c8C1C7VweuN6ZpXRa7pYgfpvUY7qUQXVxHGOwVzGnqI+YfY2M2mytJC9YQzQJJVGfORfqc1WszUHaYsREJUoM9zf+e4o/0e1mKvB1FE/6zw6etJqUhHtEFjXtejAe+l5viJmT18aRcorypww7hvdQUCALeHSELfGfYSpXShKdGBwBmfPRk/lU9txSY6EAILfsYBHEZNCF2QtcL0NP2R29dg9u3dN8AwVyGdEMeAnourwj0/95Gu42nldTfgmcLRBLW94foxNTeY3obxJj5/yWFy0YwJ68a3dpm7w1MZSdZPjs2S+CijNQ2UGFc+95a82G1Xgsvn8oMCjmsdFgxo0dv+rZAwQtoa43r/cjdMmeqcuLxaxTR0tp9eyj5esEwBDu45fiqWfD0HbsInfgUAUv0zbqaQA2IxtKZVlkaBxmi9k3dXxQXzkL6pymqhXhXZ3ZR06HN0ZL8ejXAKBTVBd2OVK/zhaNheGEr0SSfAOvY06aQjPRMPk3pa1BmsqBbciglbH+1zh9kpTcgKmrEV96GilV76q00MF4MmFK6RxtHaaaXAm8tsTLHyqOHb9hL4PLzOhi3zZ2kz1OkVkpK8zD0we7/mvfQl9kpK85LEdcTVI4Rh3Wn5HntU9Riypk2Uf15S1H9Na6b3i5P6lrcxMressnYLi1p2KVlyyBjxgCRyVv1MWhtAFkOptynSw5MnLC90nSCCj7ZvhgMpFYLu0aFVaqXHs6QOiNmr1NTJjcDZAFSSzSN9BimIB7u4pbLF2grIWR/7uEzYTPb1FobTm6KJr9tqc3F0PsQmkR8GUsDi6PikV7nLMqCe+SxuKRBHAGUIci6u2mc3IlREUE2Sol/oC2xDHFPClxgK8sE2u96TTYXFww9Ww+2C34R7StWJB/G4l74mXH5FTYiavt6eHep2sfC8Rb1Glguv+L+zkL8H5/Hs8nlmU2sFdrQMDoMCd8aBiUCftlV318mXF4g2RXzLBIZH6mAXTFWH/QIFh7vYPQuzoPEOLxICE3xPXIcZUBHHND9jsbZ50oPFCwCCsHq1GlfLMJYcLevETQ+R0TxrxdHl+lIHn7+Jq6eA099wsMq1g28tyocVx3HXmARwG6MsBVAqAT01035tipw1K+sdOatzTPkMoiXRO9L+7NtV/4c+poGsCQQx0HszW0qADSKSFZZ+N5P/P9K5af8bK47LIhEHeA2XvaZwdQ';const _IH='244f88ba501cbfd5a19e412c5b30a38019f9b59ae3577e677db634c274529c5f';let _src;

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
