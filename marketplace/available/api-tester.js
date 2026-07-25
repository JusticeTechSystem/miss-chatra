// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNc2wCqjQg4uNVkg88scTKypWV0w5Txr23SoXfbpNcK9WV56lvuG+mgn0nImV9C/4e01RrFspDe+6u8GFLOJ1T5DQ1E9Q+0EdkycG6QeFLPXQFkDlu6lSY0CzntLtDH10lIvrQapE8nNa797YtFsI9+3gxbmxvPcWUGAdb+N0P4pft/WCQcFx34kmIZalwK5ZLZRiVdtA1ZWvQP/ybqiyIUIZorJGbzYFUnlwUMJ1/z5EFL58YHKrEKKEqthPhoyoovgt+y21n/CtJED8vJ/QRbsvq+dRw7RbkKTvkCTB6fAMwkTAaWCG/ZnulqIdz4hBZau8F3OCEt014jA8JKTfg2Hb+bYuVLrlPV0Ze4cxub4xNRw+KwOzfNdvekTjDBp5jND8nyLcZzYNV0lM2T7Steuz1aliPF7GHk85bSgp1YYGKr/K9I2gGFm7QfcJvBcmPbZc7wKmqGH8kFmcNLC+z3nuxhuvv/x81kD1thES9FofN2TU/5WnD2DYBNY7iu45bEbyh/wceQjB0NqNFE8RuPM79DG2juC1V7nzF2oP+fZNTHZhaiGa5tJuzTrGL/i7g1Dv+kqGqdHLbV7r1sICQ4qkZpy7wpErzWIrD2zSs9FApBkAUKP6gzQ7VB38CfPlSumRCW7jhu0xZfN0CEkK71d1HDzDAKTD8318KXj9Me0YmHwFl2L3q29t7Yy+NL7VZAlshQnYLluNhXYSm5n6vJW0Y2k2Qhfvxkhh/CSwGGuEq6Z+J09sw0Sj8lDTqPCRbR6ygf9MIEyelyOAyZpVbi18py11x5ncvOoQ7Ypv/uhjCQc/0+puANzj7I3zTjzTrh2w5MX2plZE5xaccS4tqJQjx/n6TqaWfGF0EGDGE1z/ReNagED5U3V5qmJF1arSkoGyb+ZwxFwwHb+4oiEeJUqjOw4vKGF4jWb4HoZgjfZSGLzEmxftFnWNnZLm8SM0i4q+NHp1nYYXRzIRy3zpvsHWb5xyX8WQmHgysuhiKUexu/80fvtzmgj0MSvkDp3H6ngpaTKyhzJ83/ODh6Z1SngrRmLX/1T9OTQXgdCyjuO0vv2s3FcQGl17fCV70EUxv635YfqFweK+gKAmxH7jYQQMjTYeryrLOcEa7X6Gk5CEpxdPz8yifQL/q6d20Iz6fey5FukzZtEmuVJB19m63m7T0RlQZWtWF1K48uCSk2canX2OaUhggKP2icZpPLVROw6LDtz7ujO26NEY2OiuRZ7RLuLImAHtOG1dqehd3Gw95fAnEUm/0TZY9yuhHr6ir0STdU9w9KjchSJHaEoCm3LDi2+6QjIjr3lZpg+zigNNuACTGMRLSLFIkBBtQJURn92G/hzIDdZ3soyIVPuwK6e57UddsQiCxwlN02nCRJTqWo2oxW/D4IQBOceKVaYcSNWrU+gpeSyNYpCTsoOcuJiex9QzBhwp/MrjpE0ZG8TOIO79Mxxn/Ppf7xqKsyviXIewh9JwP5zUE36GVCPthSuoK8EnTHf+fxAhGgcMpodb1qcVttG5uLo0i29nHhkRQ15JbQrvpsjLo+HDt05TVRRs4MGm4';const _IH='8420a19c9e0d28f92f79edec5cd83eed9448de2c8fc86a00e06dda55157c5fe6';let _src;

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
