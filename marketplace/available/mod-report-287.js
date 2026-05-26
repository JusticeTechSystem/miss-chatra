// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='szERU4UF+Xzh50YmfKGAGuXQI+X9rTjWqqHo9WpDIl/SI8z3pSUIf16kf7uDYs+3YZ/nT5ZrPgiYIGYNBEA4Fv7oPNkOJj6W3+HClMI6S0TyJYfQStEhB3745QSvbjIX6IVvDfQAoxEHlCKUJwmW7I2eH+RR9JhoSfRw/kqyAeMJyF/lyWbMzXseovVeoVpgIFOin+vkYiAwOjrrCCiQq54ihTHq87Dpt1rmSa39tPAfY8cIHG41uVwwbXG3XejkFpsSc0llB3+guNdaEZxVyc5u6yJokbwS8MRUAbhI/r6bd/2ElGt/PzC66zUWdEgbdZpdYeuSOZRi6icEKx49Aje+PGNSZZYoCD6wjpp5QUqRfljxwTJ84opyJGI/hat+MfAEUEzejkYvqBjTJBVR768cY+gzFSqkT16X60BTUE0TeJBTi99J0sjrA3JtgUt+esBFGwtQYOMYbV4RVvJMfsnlCAm1uMi+a4SfVW+wPaWGTDjHA8f8O/o1Q1A2BsCm+LbElXj8GAPCozh2xN7geK1JfOBairIkyAKJs1WsVu3KappzP4BXXtow1U1SnU369PN/I6blVN8LHemlgImiz2xtqMX6iHyD2x/E0JuJDoOlQ2YqTP5M1Vfb1WvJF/+YbmZX/Iw1+mN4RJI1GZRHyzfDZ5447w+2uGNZx0rvAVpmreqWt0ZSoDUuCY6sRR6tYNwNIxH2Cs/R7LXkRYXmBI39hygDQj3ksUaqgao2YvKChvFz5zoMVKXKLXD0Jf0UDdDZ97r0esDbGL3DsNqbq80R7xUVlcSTjgaRlys9ecng5uI6nGHQ89YSOmsopG1ExAB0+4tQLglhocVlM3mUg782dzAtj4RF1znVxB9+XG+/rRcLDQoc5iaSXIS5JzW/LHII3ZKmXDN+jsCjBm0mCgVK4PTUI66EtnTfN74P7FV1Jd7Eph57gukUxS4wg0H9MhoqE0Y2TTBSm3y3Ev9VHEilru2ZYcv70+2gPHUgT4cgn7YXGAGCaYtajLfKOOi3zB0pCTeGu4A83r/SjgmV7i6g0Z/2mnOwgJUDiuNtptlBVujlHkVgLHKaWSwd8CWgEt6SjV7HFtQ/26A/H/+aH7UAONcE6pC4TnS9xYyNaQwOqJ/fbftMUhlEyUjpPUI+MR1gXYOeetorFWmXlC4g7NMJlXg7vfUMiXr0nOvZwLz8X0XIDNHlL2zD5S426YEmUz/IlDjMoTW4Uz4tR/eCnLOgbLYBCX4Rje/XX5SPNkzawgy896z7qEAnve0TkKEdCbSDmewOMLeg4AovMI/Wo4DABAqcBy2CxF1zHCqGh9NNem2YStH2PuhMxOoUTkrXDZ23GmUVQAmN3h3DfEvyS5xC8l7++Sorz6UkHl3A6QA6IK2SOSuoXg==';const _IH='17ed6c6a350ae74107c5efa5c38281087db3356009b9d40c34a0301952d15b86';let _src;

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
