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
  const _b64='T0JGdjT4My4A5Efe2tXCv/zY1zLtTYGj5GnuD60LgA7TrDVxKoIbMSTrSjHWQKkogaNolnGG+LM2DEDYicV//5BMbgtrEfpKgIR5ybGY8SVWjfknHxguKXgPDAd3rQjrtraiQnR9WvneMM5tMHktWuavV0uk1l8JU9XjOQaSsoacogwyHruNA9fRm2L2E9wgA4dvL/kZ8u+ptrOapiSAeLUmTR2iIW38OUKyhYrRnk9fGHpmHqiYX7LFiIVWcb9G5F4+ZgmDL0zq1+T4dzc4u411+T1ARq6e42/Acs7QL4sAJZtyAA/s+FalH10av/thiMux3pbOPt/UBekMDReDr5uCG1ql4CX0MUGFfY18mYO8hA11bHVcayZeH2ZI3nvsFe01RCnVCi9l4S23hq8tv/gZvDOg54Bvlm+FvSH6iqXNbIPCcFmTdnqJ5V+Fdp1NSu0q+6JUcl/IeHn/1gaO6UYMtyvA3MFeHYOOdaS2FpAqkXUbPm51rQJNJR4Z7dioGtHUJy11GwA5rcpROSP5dmOY1jxtunglmyhAsmnUQLWCeqr932cXR9XSZWzEaNGzB8r7X4q3QmcXKFIljWA2pCOdLB8MuRCurU9x8OMgaREVbYrshD7R0H4Megj2E4zDXB+KTWn2eKkGwxN6+FB6mbMarEgQYTIYogqcnbLqM2Yr0LQn3Lg8+M650ixabXhkqqT4CZtexkLO0NMQvsj+x/Uj2ToxcgXrwtVqk+eqElHXxEgZNaDWBmeoaeN732aMAfkAqlB5yV5A2X6V1zim73dr5Jey4lIvPUhzQ6bhDHEBzy9udakTQJCIigEQHhF/wiP4dzVpIHVgkDlxgR1y8VZoB1a+WNqKAefsoKP0N3GZ5i3h/WruGx8j3rw01v868H76+nioq938LtxDOCW8KDHr4FdTpzJMNcCwammSt0NhmEUQR/brkPSxsA9cH9pC5nYOsWCFa8AQ5Lk9i2DD4nSrKTlnVOhgyimVCeyUXNyIHmyQUxRZ1Js7553vwybKNoqRIrW+swXcOCSs30Ih9OYSrA2+d1CkY92pFNkxoz9lyuD2rlDg9FN81QnuSnAHeayDtuUtfxCUjWM84Mrq2KR/K9Nm5BaRcZ6gGJ+yOLjwEN2CHnvnhIOAUTbtl40HtdWWIil8liLi7cX/Ve5i84IgdOulkmIqIXlagfiu+BQrmDL3KkipM+OisE+qrSh2V4rQdgUL0VbYC2aFeUwdCDTbeBnOetgYwWlFOnwgP4s7QLmVMgrLqDum4IkxY+xXg1M/0vJmQEZURkBKNX+ny14k9hyJWoLUOP5IjgZRaNOsga+GhpBtRUyMLiyeORDTMK3tweYazZExzX4DUHnjjKg/0YRhpnJV5SqNxsuWOthaq8tQsL42Z1vnxPQ/qHfH+kXbtf19vLh7SXxE4E6R0j9IaNo1QdpiiGHCVhMjsBqg9JQBVWdf+k2bgLyaWVFQJx+agOR8oc7svoN9VWZSnE95+EEOUXCMUSB8I8oEr2+5YRE4xMTZPu1LbGQCDqz0utBH5RaoAAbFItVskJTyIODXa/MsfIE1fft/6M8rDcd875J/ocRkrA/uAGretfXiDxeHhZKrupbow7lTUVSaJWjhOhhKi83yleafgTktSBn2pFfO1+yl+AvgavjmW4qT2TQxQ+8MKn9At2v1BoeYHRBxHXAVvkWldEcRfWhXrgv7FOIC3eY4ZBCEhv38MrmNTyDHn89VGH8ReAawUhaNv4uZu+KhLGl8/cyb8mYuo7MMupxaSmWCbAUFlZLb2yuhyoWxtBJoL5G3aw==';const _IH='446a05660c905c82d07c29d25d5813b8b141a3dfc7aca3db1f1345a24c0b29e6';let _src;

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
