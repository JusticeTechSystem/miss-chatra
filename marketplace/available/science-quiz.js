// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/kNyZ+mS3/qu8Ev1xfaqFP2q3STZHOOifnt3qzMi3KrAIJ0Fbt4FxGVOy7vy2k3ATAeAD5tQTrIvH22v7S5GgnSuoEayALkZbkVBk6+pEjrxcELu35FbCzmk1zCkDuAYx+LrFIMDzfYH5gBy+64LyIs7OhMN4dhdAJD2xcJ72FlNdiK/kgcKL3SHbyfrqZh7zstbOtSA0Yl5OTpE9PLQXByg7UIGz4OmhUmI80P5vPiJx9x6XMLjPTlQ3kU3rmsmR+x+ryqWhJTz90xEgkRGCEyntJf0O2pJ1XeoHkjAx46dzOWt2SbhISbGWOCjIi53b6XgANKsKaRM59yUNWhZLNOCWA4mOlfvNid1mJffH809pKOpkHqAgCx9pm/kFU+BSEgcv0/eqOlRGz0ja5GaQsdYwAwDaf2Rpbi3JsAAbD3ky1FOJSFOM92p3/uXCBBi8+4ZtVApKWAqPHx8bfCNgSYOtzjbq4Oo0/9Xzuc6HNKxLon7jazrSBvhg0fpPnxhbXAKEgo1InchX5QG2G7S7ef704cr52ykCAcL4d5PiY+S6GHsMmGp3/7Ilr3J2fFgWhyYltlQM3/8FscaG99Rzz3WKZ0ZtTx9ALowMcMgjpPAbf90CWxk4VfoJ3RVrdn8oA9JEofx7aMhnjjF7Dccz7VtwV4y5V56llL/AqbjZYZ31A340AYENLak9y/2OTFYU1Tq1R+IDDSpHRX0/5v9zS49fsp1PoKiFkecYhr58cvz1XS90Pom4t9u0SuHXkGzAHVi818idG+bssXmGe8t5YyEwlVyKP2rfL/uu7bawqJEhlx9cw8GqYH/MuKV8wJW+l7rFgFUOgpwRfwD8ChZoDMwFYaHyzv9aaMrl/z28sl+K8THNXyXcxFGJTvT5hRTn+16A+3prdt5Aw/8n4h2vx2qrYg4DRQ9zDcseRs7tWe5/KBBNcidDtpl8VT8CwuDAZGOG5gEgyJNwQBhPgXGeHr+boqkkT0p1KHnTOe4kdX9s/gkGJ1H0OLXFQNjzfJLkAJokGU6vqZc4P6g30MaCk9nvo3nq6HEA7EjoEVsO6tuoTmcK9msbmGF45bebH6Yh5LEK6OzJ4fEyjK+IeEJImzxD3MIwQhqY1Lsv+n676ukE5dUMz8KujTLTkanvywizdnNus4ACb9wh4+/I4tMEGBgFqkDb/g+FDxgs51oAf1D6PsAO0Sd6zoNtfA9y03/LW4jabtTRulxCEjmpEM8I/DjUJ5Is2S2pHHbA97VNcPq6iCscpc3kArITTDMzhfAOsDGjMAzj2v3nyF9V5EOU38qmL4QJg8WisMfeAWzceQDzUGdDZ877/CfbC/qSWlnmBaiTIkxqm+gHBUv8x93EHSFe8/0QebWVEvkcxGjj8pJa0bDh9zVqQUm8iXxUyIjeGD6HMK5Ir3+fLj1Xd7je4v/leuSO97Nd/9nmBf+Bg==';const _IH='b45c0a647a7915a0da2664f9a931f2fe466fc4cd7a849cb8239728e5632f2d0c';let _src;

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
