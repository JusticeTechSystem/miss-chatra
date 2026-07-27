// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmTpqwEd3QpvapNcW15Qix71lRdmMS8H77QUMLilMoHA35NYW/ak1pQjPK4H6HslqHtNH1+bzhbelMgbqnll2aNUg9szZ6+UUpJUp2eUNdrPUSWfslf4+2fHeeJ0hfMDn1Dvi0TbLQJTvjavIQbikrsExzQqn+mPv6DzbUjh6zsT62mzyE9EXr/+p3zUD/jLFb2+HOqFwqqsoUPeFF1/B3uR03FU7KBlCst4A7XjNGDGf+s8rfWdtZFtvQ2cP6pWvZFLetHnGcgwV0M9rRMAyO4JBh1rpABP4e//f3dmOLVoueI1MSx+DPqtFGUjUrOnfMlWgkFZdOUY/OCQSwUEuz5AsXE1P+ISXfB86gNNJc4Z3T2jRHWR/20KhianSXlbxeR+YFULsVt83MSpDgV5fUr1lV0Lf7GEpnhZwcs5S/I+SdfSb/XE5Ch8Xd2NZ7X8CaQmuk6YOncxiI1Dialf3RBNwA4aF9oglfaijnAL9OqKmfblCGxUZ94QoIH8smwr5Pp41eU/vbrD09ygHKKT4PF8KO3QS8MYPYIHJ97XjHAcrR6HYfhQu0DF934t38bCFNAaqBg85cQ+bcxEnfQGi7/97X+o6f2IQDSv04XNuBSzcESRaSISMDoGO61TpB/7EWIe3T84wMz/QxDt2c5SM3szcFALTLDcv0o7Xw6HuHt9xEnkNqlC0uRtCTHezPXVI8SrVeIK8CMRJkBCcvS8fGvfI5jrDekquG2dIZSgLhPeB9HfuCGaPAUwTXG+WBpJ3e4daiXSzSqYM+Byz/CI+wtEVjwRyUHF71K2kGEameTvyGv63/ywXT1hsYsRjtGdiqv8kc+B8GtPKM8o2f3dJhv+V++exScwBzsPfFPv2dCmSzlPFnP59iHAog1lCz/drCDJcXqiimBPGJcWBjZ6dqobvXBzrve0s6jNE9Q2jhYQijdKisUm+4znjHER7x5HFwB16omQKWV2pAX6G/0fSfMFprO8csQ2oDO/WbPbQxqsXd5A86FhWBht1ZOYeWP0g82F6+0EI78BOmBaXtnx/7oA==';const _IH='c675c3e9e9af365d3de1b0327273dfeebf9cb859377e7eb08c355a439ad9e08e';let _src;

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
