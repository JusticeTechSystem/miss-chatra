// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+5tJriURoRamfCgWSxd80iKc2Xpb5ce9/TsMOisM3f+KextpSN969CW0KaOdwSLP+o99LvbKWxsjWJ2akDbOzvCq/+OS653epkMf3nB7YiSnodY5VG6kC/G6LVEmpkrnqJsqPiL8Hy4XbYUcazhxFR9Vm+Dk318iPHuZO5a4wP0sFR0PaEMThEpmcRx7s9epdn9rECoFp7CGjrAaS6pAFfOBpH6wb82sp+y/Klwl77BPEsEwzFHpuxdvYV6Sg3MSamH2HoOsUqzUot0nGBlKw3+kEn3mglFgHXKTuAP7+MiaJMaFZv7sUAbaMCrctbD4b2hKrI38CQs1GnnRnTsbt1FKmrCoPcZuWTId/aMPwi1+no1SlbUYVkbc/iivpIe2k5so2KYZ41XYLDhIRF6poYGhOunODLFJN1LRNwbwpInfLBrps1M39zf6XCJH2+BPf7GheU5+hAVqU2MdRfoLBllmksQY9gNWLleFg4ippWVfWUSCsNAPvvueVx2jaaXCxFX3eZscexFORw0V9e+LsaChl6qlYmf/6NqJ6L27uT+vHc7AZwBlYra+osFaTvcIA0OOrlhkeDr8l2FrR/yih1A3c8aINK/cTN+eX1eVSVa8qMXi9jI3pDOo5x5iC6tvkIFhRrxveCDOmHfcijiCrmZf8A5XGi6qphj3Zij37ePdgygOnUl922ZhGTPBppkB7McOSK4aBZNt42tBAhr+EBo6zN3a3io2mvFtLU0m1PrvwdJnddwpVttF9RoUbwHO/Rq36gl89k9t69Qwp+cRPM/1wR+s43CIOAV4us4YFUGRPWsM8C8i1AK1Zdj3TbEuGYZdDcKTv+4TmuSnQA8Ncj3IqsuFnDhPt9W4Ol0N4QfyUBfAW9ITnXz6Y/zt7uweLSl79qEYuitM2U2VY53CpjCYKb+ubAM2G+lOajx93O1wBRlVQ0pXMAmW2k3w6HXWAnxXt7jEQGoctth6kpq9bwqA0ZgbH9UgNiyI2lyTN7HPGbEmccAyPefJiFzdjjcYIJ5wB0lIMopJJ5GVMK1EZH1FBQBJ/pA6V+Bm+p+eEoJiKADB0iUccDjsAEgT+NgyjdxvI3B0TPHmqEtHeGNHjbG7pmfwkermkVPT86OXWZu30fgyaQBGMI2csee7pdMfiS8khJ6iG1nj0JX9xHxLFF4/vEdvW7ZDSlGpQZrEKIyRPD9T61RzxpwmWmqTohT2uMN+N5Jjwu4+e25UQkWVNOsRPH1aWsT0b16XuJsjqXCcrY3Gztolqi3JUONbvgKZ8OU/2gMKZCGVw6cZg1mAE77MXAF6KDBfu3s+jkDoVwoxjoy5edyIu8BnkC/pv8nAMdmW6oyLRjZPNBFo5IUusXjGKdrC//mnZazeriSNuHVqYWgyewGNHQ==';const _IH='a74246c2c4690eb92e4ec81fe5ea31d4d9873cb4bab8fc3c0aa9c7581e5b17dc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
