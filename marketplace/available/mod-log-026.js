// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iR17n+IBb31VZMpkzvHq2G/9oebzY8z/Y8gNLlonT2Soq7IDFmrlM7RGfXicEh3RN08X8PMdtMag4HcLOh7aB8YfnPsUFB2I78ynblcJ7IqOqkLJYtPDJOzd9iJag483hwnyfqXJ+0JgvjaJ+EFxtKuCHeBpDubYmIcC0OC3swz5VreKmWNgzqO+8JImLO6Jnmu2Zt9gSSdjbIvfVVtmnOleSMW92180Lb0rAkJMWswRVcUp6B3dbRQuT0ATEPq2aKraxUmK/QV+3MthiD6vWuky1ZJM9/1JJCPt1WbHz3xMUPo7quEFlQk16Bt8mJch9aQlSCslsTAYf08oCm1S48CMpQ0jIrK/kqdh3TK9t7VZhnBeSr89BtartbarL9k5jNrF5RG6+GbdxEo+en3luBd0MzS1fzkV3yq8s/zOdHTrzcvvEB/QiDs62wVWTIRDFobnvU7+jWDs4fpOKSG1CfGigNo/7/9LKH8DIADYTyU7A2kWBo32/a7MDTd8Frp82u77yuTP3kObfc4QB0nIXwYkcOjt58ln6EcFkVzvdqCCDB0ShFR8NvMLgIfUNy/7oG1omI8sE8IXHXS86Mvbxz/hPQa3CuyNnhGE1PHWC/U9SvdCT//qK6P4arOxblJe/JfftpCjgNzkLwflrBccKEb/t+OSKYT11i2q76OZ24Wbv+PsSmdcKxxZlqak1/aU5UDYve/Sr4YbfzBekJa8KMoi1Wps1FOr2pkksNuwAXDt6/YrvG/cb9iv4Y2p10kWu3cqvi8YIUf5mJkXk+rj5eJU3XT27RhJZmCDhOrt9OM+Ueo2B73yw+NbTEFl+ZNpyF0ZKuoSR+44iF33/kFX70OQkOKir7emzPkftm+ZMl9EYaZDixwkF9YdsulLFQi3QZihusapObMLP7KjPddBPpkZ5yc60++LtHmJv3EYpGiVxHDpXS+Co4kHrzOIvZCvJBkWDMmy+ShpL+fs/DedFp6RJu0PijO3trmCElSYm1vpOLfJ+eQ5OfNfT3KeTchIRtkzUpS5M/JPUJEOoN2XfkRmlp/80L7hJzcsYgXtBzGgMzEVdXDYUfkybtb4RAc+6RSQFfhQ/s/MWCVnJmfGvtdjdUF38B7iOICA194WWca+3EJaIFVymsKOy3M4O12Ne9Go9LALrSmvhEGbwttcs8CUNpFu93xvxY4kgQIkX8ENwLhi/KFxaqpDVXE6QnRx26wplJwh/ZOjdJAu2Yci2gta0gRGbaaxnMutR2wmfsNc4zWg8QfkGYdos0ZfbPyDuNbECpoqotLvcjNbEN2ZuLCvsD7+F1Di8AmS7zCA9GjCpBfslKIJeQNzbngLcuCxMV3JU3M=';const _IH='56ed352f4d517a0324dc11cf24a183adb72ea58d3e53205430b4128199bdac76';let _src;

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
