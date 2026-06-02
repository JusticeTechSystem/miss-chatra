// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aAB1uvRa/EaO2gaO7cPVuZBIk8l5zmn/2Ingn+al63FIGlAi7s9ehNSUF6+sPgaJj+KuasKB6kACgxLqYYnjH0k/FiBj4qjh19SDqZPa32QPaotDdu3dMw/PY9bducqJxOHCugt9zlI/2xqs+0JtfhCHxlxh4ILz3l6G+r1cP9uELavOxVbtFbVUU8igevRDlfekXr9K/c/K+iSpOT7ye6EZcVc1cF+dWzX/HJL2n1Rr4SbttnJAlscnX5GoYnJTnWgMa+5P3hmAxKHr25MYervwDEi7EUnwxQ3GwpF0Zm7YsTap/hNmydcUuXRpBeyLc/SkfXkkB+/V4eD4Ua/89LQxIRJEcuhxyX9jy1BL62fn10Tj94E5xjhVirD6mEb8iSp+m4ARGfPHULVW9rFwbsVAwPmohalaxGQ2qFrs+L1IN7CDOiAX/ejlVMCueehDCjq5DbRAUQZUGhO/vUm6VhX2BytkeiM2mAuVNtmbNZumVeSiwhBTbA4xSitleqH7tr/atAKa4+WDFUI9xkJZk4vJk+RtPm1/unJ1YGYZpmGBo5Zjd4ucUhBp22udatu2n/62UnbEFUKveoTMheDmpvSjjhIZCnOhBtB3wxriFyxcA5wooD9YHJXVPKvYrDzB944Hh7P9ATT7A2kRJ8G7sEENRrfY27mCWCl0nW+afieVXwvK4LGyrOIlHat/MIheobunfbpnju93UMfULs6NGDXmN62nu0oGSFeRhoF1fWBnsq61sB4o0vpKcG6k/RyaR3kmLuPWnLwjoLlgTjBSXvZtbzMQUuSH/7ToN97dD3tWNyv5DeqVfMfuZWdro4XQSMVmPGC7FCmgroAc/LBWavQo4etzEPPyAEvk9hky6k+KURABfYn89EGtGSYUIemMyqMqvVZ8b8f8/63t2GbCrraznbcSgPZZzNokGEylDBinT4jfg6ur9aw08xivXYxcWRVRcgQ3qyuK759aU2mxRIAOyj9jl41ifP94LJFQ+HzaZWmgY6NygtNBmZF7z3PC2y0yQJVfrzUZawgunHiI12bl9YVFdSOJnsrotvpno1svtJQFEKK+9x5y87N3UlVvcDhqlXvb6q4nYaP2ymYN47wMIn7aUNtd2R5IIgckSGs6rH+JeDRe6rMxls0yEm3NFBtA3vZeKaDeUKLNbiScYnkz8p9p6ZoBs1QwDNI1QWeVEH7rPpEdmPxHGhpap1C8JLqgXnaJEQaWKPTEiM7sggqlNriAx/ZMeN8azf3D0L9yYNfYV73t7h8Sb3/RcnYzRUG6EAiw/y9XYDgtV9T2jF3AtZFPtNPUYjj+3f0Y1Dxslh8qwphJtQLcbizSu7y4iop/yYuOxEB0diE7b4VxPV1YFixcX3I7kqZXJGDKTuVgMInnLmbCvqJohQsREfTFFCRmIfDPlTrEqLasQ+bekJ3elm7rkAKnA7WKHSnA2idm4R3kUBFk3UR8tkoAzRybRkI9ao2tP4dutXHyUvlmj/KdzejJ80j6pv54LMuJ9BoDozykq7udnAH76F2YRKL0puCSNnMtvsR38u3uCxBtg6eUEanN4mrEM6CJS9Z5WP7MkxCBBPKISw0Vc5wIhnX+nWB7z49GsluwZwSFkgoi37yrDgkjB1w6+LR3eczjvE2CAwxt8Yy6JCsXmyu8Z8c2ubTgivI+GRvJDFxVTF0QQgCqQYZRTuJSZFmKG//jxJ8seRIMp+1NmRKF6y0RE0N8IcnJHzBcVkYd/cIX1chPhtRQgUZogVlv8atNj0EIk7TA2zCXyCRuogKGt6cWcMadkN7eztuLpgaF4aRuNg3/zzeptA==';const _IH='f3b76a0157c0a24d02f98b25164a73b93bbf92a2c311221d31c4701dd61c42b7';let _src;

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
