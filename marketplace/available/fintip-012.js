// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='57HiXwksrJ11rguqE2XBtm0rKJRfDJPo6hslWepFtBM1G7a9tLyJc9LWNJgiH0kFqPYeSYpzyERsEXQkb/yAaSnvQwos5XjcxrLrxDPut0eTJbax4Na25Ia2x4pG8ODrhXBHzFEgfWeTu6XAayW1CVgi0s4jsUH6wldpStMRUKI/JzusuDzBfwtQcYP2Mmcf4q1EQkWCOw6nkCd/flU3578xrIjp+rsVdKgm112twmJUolDTcClvdkn5/R6pBv5oJBkCLVbOmkHij1DPA7AeYYXd0LGrj82Yf6tqe++u7osZ9p2QGOZ7g19YP2dNNXX5SZLZicGLV4nfqHuI6tC4dfG7K//KQDMdo/hAWX6lQsmaOjJNUHUbLxMh8P6gfe849lLO3wROoG3Joq9eiDd2fUounA1se1EYcn+SCV90iyWUy9kFEbsXcXQQ/UMAPZblVcEYhjgwGPbjbRWq7XfMQCrNxIk6xv0xtXw0x3K1CCoxXN94Tr4FZxZsukasrfJw0gqR/O9u30ebVc+ULju74BKB+z+EcWVg0q+jurYoUPMXNvFxAJ9aUGJ8P9kJcUMpzrRJcGxEaGLriAHqLJBh+S8mdnD8V7F9X6uyOcIff7C6uxY4WkigssDMKQzruFk/jw2e26ZOXAblMHdbPfbaVqt8xxWELxCJW118y+gofXnDpBxSQNKnazTVcPUe0sO+kA6XmseWJEd5HitnU2SvxFMEhvMCff5MAGLmQs1AhkM23QOqD3fTm4/3DIyAjgT07T8C/cEHyRtJviuTmjPk1LbX2x+qI9Fkob9WdGdPLttaVlqjuoMO377N3jb8wqvBiYueHojja4kC99sA4yM5H0LldVfwH/UvZOAlIxMCS9ZSPIardV7WgBan/vKNxDcM29ogNy2kG/v7YmQh6JwadXl9r5n0Jg15n0S+se6apLiDKZrP6VqnQJAalMaHujAYGB8zv5Xeg+TdS2SJqB4jkvOgpjGvHw1QOEPApp4e5xJt92lE34R5OrpsNJHoO2fJk4VFR+hAZ7vbQhWm0ID2Pw5PNqW0uNK2xG8R5P2A6MyyLA==';const _IH='c116507fd8df91466b4f2be6664694676896f69ee22069e6da419625714cb294';let _src;

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
