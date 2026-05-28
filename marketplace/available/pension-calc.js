// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z4Bw2/gMXzwwUde/xmpJNkp3mZ8hPUTOoe6PeP88Uxg9WhLSse969tsJZLVngWn8e9CM1fXbgMs58lbHk3xoUcHs2nCtNqJ4FMYDlAHrCFgrj5wl3+ue4DsZFXhDgFga2FIh+MhH55/crY0m6Vl9ds6mKdwHreHq6N8HHc8JrBPFDgkq1gix6fTvfF2iW0IHCzUYiRtN4iOwbM9CNAuF/sOA35fCb0lHVyvvsYNBShHdkTisEYdCyhd3IKCUFbGbvXxAEhkz54bKKwxSuDOJCgNKdMeN/CjvbNZh2L3BumQCJDH4Moov4CWvA9xbF0qMxhr+7S7XWx3EbnGTp8LdEfHYALX000eAFUXZKGEj7VveQQc6+rk1AdhlUN+EDFSx6nCun3DRERmUAwula/e7P7Zf2cQSMVt35w4OYEPWqf/KDMYg1F5wG8b/GUum3htLOYm9ywMFfPt1SrialmP9uDWRNt5dPzMlVTFc8l4EOCvTCzlRLRl9WvD5HBmUzlAqvrho1RSyczaAadOjULYmufxs8qgJqEYjIDwHyZcsG53SMfb0KKwtI9h/X9SOhcFDmwpFeAvoYGAZRrIuXNu6YKXpKDg9bsOQ8cwIyf1YkqPqRc+fE/RZb1grbk2DYBtEpCFn0ZDfBr2uUCQV7yWGRhZXtOHKizpLIDkxessZ9tGOOUtvCuERliT960q1rGia92QOG8Y6OHngWAyS56JmW1ArcyU22+ZoZYSjRPfAxRQApk4U/DTR6b4V5ynv4NRSBAAXg2pXEzNAssxxYoJ9bABZLLYDZxxnkGM7b8wwvaRqIuVsBAE9fWTIQ3sEzka2hBUAdsEstYRIdc3WFMwvZsHrVOnTTqt7bxYEDn5jh9ITm/80WXhwueF4SiOsPT1kL7Nzxdcw/59zHjSAL59rSUEScPSWpb/1JVVKBdosB/d5it13+AMn/itAPE2hxIkA5BmzZg1lgaFyt6dVHF9NuhJEfs7lt/LBcIKgvXu1zWlxSEQVA1o3GygDRqSpa4uG0LQ2kzBN49PX/mU14OxahYgmVqB/LhPMD91GGT7OM5j65MwJ5ymkqP8ZDGWk5IPZxbs9fgTaSTLQrf5E/MFoVrntdWJwuXpqu/NYPGLkZtFXZqr2cUraCQPMuuIigbdnbqt5tYWhvugZZlpPk8z6jDTijPZAVnSysgVqU2yAW87b7tXHAN8oTN8EBw5iw3F+277pi7m390y1mzFO4BzUMvpQ1SnKWCsuxuVTyr8fJnIAitQoQI2vR8svaEctAj1m+NI9t/iuulN3lNA7C/qSq1kgs5znWJ++S0rLn3ADNjL0iqG3Bsj0dA==';const _IH='ebac6cb6fcd2c8f7df714d844b5b1128bbf6f16a89ee52e2570bfcbe9be08652';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
