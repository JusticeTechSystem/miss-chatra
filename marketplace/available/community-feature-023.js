// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pHou6Jo1M1f+bVrbuzmzHP8T6xvhKv7KSXs8gxyFl2Qye4akfWrT3QDfYm8ekLp6eW0+eRQFqlESJeVKCjNigJ8JSiSKQolzk2Lk0D5007P6MtdeL0hPtXJAt5dEQBshcMs+qWBwMTDYzCAMGATa1bfzPLhg5vx8gMpH7KdcAo6TvvezTA0oLQfC5+dEEWXXwjhqWDiYs73xooNWUA6m370sPgYwSdHwoR8WPZW7eQIQw7vckgLM+Jrg/eGCIrw2C5NGERcwccBwRD2HYPWYyqvC8h4F8vs9vBB31fpgjA1eCPGNOh3QqvLNmOE67oCCmmZQ8nMw4RD92LuuCbcvSJsYX0ajLnSRy3pta0AMJkhIxEJAFxxk7yJRmlbZnShScKar+4yrTM5V5Fwjjerd7K1FM58ZGq9nvnC7C/UUJST2mWw2KxVuBZB6KBaWTmRqefGIFSjifVdCqT/qAtKGJT5WW6uTAZrpvRzaFfHPzGUvHvbyKHQF3vy2UqV1qusZlzuDRqn8/hxWt/s7OWSiuoS43udXwah1wROSLFcSgqykKwP8rzxwbx704sbIsb/V/D58pPy8YsWYHnfcKS95LU+boNkl/8bXeSMuwEQDlSSQhupAvNTwZ1ZbZOINU5GE1X59qbtMokQ6nBD+P3V0KG1GCtZo+nZlSPPzumA/m71CF86ZL8hVfxLF+Gblz4XZ01W1bF1TSzrANzQjf1wh8I2j7ruwyBRVGw==';const _IH='87b34c93a170fe1fe5c1eb781f0de4e5ade6f0007acf92a5af51f7026f9c5217';let _src;

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
