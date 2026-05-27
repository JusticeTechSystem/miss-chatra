// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pzCgwoVNdQKYmYLOQV7h9yRmEwqooOxC1msTPsesK77ZhMzJC1fiFTzb0L1RzS9ZCf4jvkGQ7LTHAfGU66IMmSRZpHSAY+KYVGa+CgaAY/WPKx9zE1MbaXe7U3UguF6Dx1jwewKWREbn/3uSSiyJDFwAjxpKq5nAiyx+/MAAM/svv1Lh48VRZvKFScJOElbjNWAD5pNlG88injGqbHh6Q3dakhboI0/kCkTaR61t1jY7B0l2jJ3DqnOMNIUKVtRCJujUwDZDMyzZ5Dn8UnOGKgny6qvT3wUMebqGBwtZjgnH60DNFS0kj3qRcxP5iFnkKDUBdnME2vsUcpNQql9cfMAcmF/U4NboYRSgWhLwVKxq+Q4nuFlPjCywlw3EUnQLuxLt+LFxp6L10NyHe4VR6HoEB7EqDKT4FZzshgJTYKDFNJ+Uu1YXLyDiUImy46Z0Rh6KdPR0caC7F4CKEw+WY1hOX/VMs4KuU9jqQvLFeM8li2jjOF+YHG42sIj990UfdRxbaFLsbtSKTcPZAp987puKaopCfOMO5ViVEmBcmkjJ1As4ikzGH0IIZjf06uZHaQzHWBqO1X9cyIdDDx7ohZo3/RbhBd6kBIxfiWaeD9DnC/eQ7Q1E+LUm6Ar1Od3PkExxwO0oP9kB6ua5JWbpCz/x4z5/oOegK9V8j0yBsqAn/peOfh7c8lVBzBVl/oPwq4WjdlTczSdt9Mtp6xvQGPi8/S2fvl/fildDj/+IOkK7MR+lnyOHxN7wiJpZLHkBr0o5gmWUOIQfB/7JwAOVwxxnD/NcqympF7ZNWXBOgs2aIqUnaDkUKAJPJcYAEkv/1YZGGoHYpEgWv0VL8xifIvrJZJsK8RnobSkMfaInGUFV4az24NVAeoqQCV9IMjTKjyHexvHvpNQt53ZVfUL0DC6/nJ1SLwmKV6oHOBXu+hJYIx2GFzd6NWn3zENovgerQghP532+hurGGik/8wON6BejQCaoCTRwo99Vj0ImdWOGAhSRMW4+4cpSLJhOMOB4WvuX49xeh0EcCFtDxNggwBtaWCeAudTXVYa6Xs+1kQhjGbEzt9VbGjx1rvCMa6JAqMPmd0fUhs8ty4APp+Aju9IqKMJTzp3LyttL4IsY3T6uVNyYsAqcCA9aLe5trRe/iXRYZUCMSezfkXwz5bZWJAUaoiMbXqIRiD/8ygJ56rlzfCX+g01JKPRUsBXzJO8oaK2nXG3GgmCrMkVc1vodAx2NIw0+7XCbaQDUhxjaPMdzTC4XHkX7phh+isKsNc62P8eXz+rrne7LlNqBc/kyg2OPXZN1eYP+ZSNohDp6oKvgyS6fItQmW4/Aj+zZR65kKZrCIMyviJ++IiLeujCPBmMdwBiTOMQGUJS9isItNcMJDbA=';const _IH='a6692dc311d703b826b918227a93364bb72451cdfc73309677cfde437a948b1b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
