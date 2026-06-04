// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='11+3ElcHYamMkqlE0P8Y7L6fPFoG0WNXU7akcuDpvlzsil/s2dKHcv4VsWW9rs/HyUQ1h3dgTAwP4IP/vUMA+n/hmOayunLqOucoqxJj9dConChveumEbj5kCj4y539/QsOV1hyLWGFkwzBi1WEkrjP6zIE/vrABM0ZuZhMHShkQTZqJ6943HegTQVBPKzM/UZIg6CCFRdfcKTLJG9eHJ4TUsj+fP8Y0gLA2ybIfUq34+s8NzO6ZWXVdYp73arlN/pL1sxE+pNL6IFQp3ylcKszDc7FRpeD4qm1G3OMIYdMd1pBirlXX7+sd1gDiypHrmvUXHiSuYluHd98HyuM07rOiuEbTS1gGzq+TnLTYCZLdZ4SglNkNXPYFwUgR3IQrfX68VhRObaC9vf1cvum3DvENCDOQ4P3jN+PiJVOh+vFJYMABUbX1bwvBvVpzXulKGfAuo9HUHsHGyv+NXMpUGSOgNtg+34XVy48V/18/k3mU+CcGKMtIO1EFf4yr/OLKTWocGG5tnzvG+xuma3+OY/f1EAl70pWNbwxrDOxDkNMNGwVqQnjD+HMiCegnDupWcBg3Zrizi6qEzGGcL05SveekeXC5s0ku9GcwjndT5bEa/1jhWr/BdShT12AqmXYS81bH9n4F1f6DxJoXmhC2PwuyteWfXvSobrpmWNYEDmVtdzGrJWiUf2WNwt3RDNQZvPDl1UpMTCw0aJgjtuEtzVFSqWwC4WcYo0lZNT54RLQq4mxnw48ZLr7ftMyIm1LkYw0g6HZXjHQTH0XA3Ut7H6KlCLENDXvUEPqeSOX5BkTOG73YpgF3Jk3ArJKDThyZEG11nWcyEXrXlaoIOPBKnzYtLWgaVcTcz5jLNIExwnZZHTxxZFj+D5dYCPNa8cVQx2Xmjb+8IxRrlxl0QbLawMVrgVxpHbs2Z3p9mu0X1qYbE9iCjNJDXwQIkMYN65ioY3/Lq6pz0SRAq1O0nKDQiVL1WJ5rH+N163crNju6jKkO3R5zMfq13yx5cCkdnKfwM9OQRpIEHms+oZnBp+N7uglXVgS2KxCsY8QQTOOkqTsdQ+zaV3p8NAShVKPoI58vbWvd0L5dFd1bsCcZSLyhrOWD4AhfCG2uU+DaSoFPGUvS9Gw0aZIb5pRVeHLUSxUc8LE93cA0EUFWORiLqq+0VICvNpQ3vX+z9DOf2lBz5CHSex6VU6wTdOw9tvBNkOtfaFnsxbB7pw9/FPA5ofauhA5busCh5i3hsm7EWjV5JlkRBPvkWWturm9LYJow+NNTWPLnCu8tz5RCwgUSrT4/RQ9WugajA13bIHmGS9LpqTof+5P296lqGCQgIDyHwcNhE6+6sEod4jcPrxXMp3+lV+v6YpTtvTK3arBtZCVE3J5Ouhq36lxfUA==';const _IH='25c847d74494f7bfafd391cc18197e72171748641d2034ab1fa1d4fe391dd945';let _src;

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
