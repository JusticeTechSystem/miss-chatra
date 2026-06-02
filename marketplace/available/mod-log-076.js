// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6FuPmaDq3RclisQVG3fFqrC5nSqWEqdzG6RQc0LP2oHnY6xp/20zKmBTB6yu+p6egCAZf7E5w5K7LiMRgKXpilWSHHMOZ1J2t8CP57R00FjR0/iOj3vCm9JcdHEGDjxd5tkI4ycIqizC04lXRwQo6aNeGZ399XUxbQIexIDMPoeUPnMPSQ5vA4suHPibSmxkXlhcDq0q/a0mWcMr5tX3PcW+adxbdACWlOgtT2L8tdWR9WiuvqRbBVJqRtwfZ0OBkar25eHm1k9VOpWCP0ujFv88K/CmI0ULkCcuuwGQysUujv8S5lt+Os++hRFDgwhx8pup2rR/BbL9TlSYHwSnI6bSV5OjVzjjdbe/XRhNw78Vp7Y2cNfjTxzcerVWz/Gqy6LP9s7jRXqm5j9+aSjObV3vPeXl7177/2xTapLjIeaj+2n2YbQV+omqg2UEtF2R5tZlln6k8qGQ2IVwCPC0lhGIFdwDk99dVd3U0HpqwF9klg2gVeQkCU/Jo0J08BKe/sAqZhTPwZDCgp4tdajRw1qPVIH+vnd511PnIY765p55O4JElWdHJWoVuIitMUSsOafNBkSfnFj8rMxmfbypLXkZGhh/6awdh5rEG4eS2hU2QSlCW4mC4iSyrP+qUZeG2g7yOvRIFJYC49cvyc+Kn09tPYtGN7DkJ+mWCAPFGenumBVpuFadfqImKsye8zcungQm/3XTbTQ8MFJi6KC7LhlxOIqXFjp4uo1xzkZobKzmCVQdjYYTvyfmr47fKCBunRcUnw/5ZRCVl6NDZer170Iat1F00RpzoWv6lghS/Xgj8fGtie1ml9G/Nhy6q1dSwH1Xy0fA7Djs7i2y8ec6ewPTWlDZ8k2H3cJNFwtzy8q6iwiORsrlJiJvQHV23N65z6D+ZyIVjAZrV0SDuzVj4rchMXpfmSsaFxnrAfwwasQX5gg8r6yTyT4OtcK4Q3S7kzou9sQA7dRdgw+mH+T0/o7koZwFlzLHL6HWYEVh5sXlLEfOJiZK9ou4HuZRXZz0As2q+hsCyhwl04MyW1i7Ap9hCSuLkv9Hdo5KcfRsyRmYFJzeKWASZ8D7IoZ4Bt05zftDKBzKvjbtPCg4X8/TJiPUyY2JAU8Q+ESIJWVW/AtnZZGL30vPM0cY3oQ9jTywkoBw/Aza5tudWXQqcVElD/3nxwv48AV0kp/TOOJQ8O8py6JqQ96NrfvrKYQb62W2vO8H8XGJhohclL0xSyGQBdrJZVx0VrEcvsaYD4AaL8QYK2/oVoLea45GOZ3ya8bgSdzNuKqdjl9uDCCtp/mtedlht3J9sGff0muZ+EPqrBy3Azgg2+eavE2iG1RIEUm3m+O38ew=';const _IH='641614e41cfb80380d137e9ca29fa7636e9cc069955378bf67519274442d7ff2';let _src;

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
