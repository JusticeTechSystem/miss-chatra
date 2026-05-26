// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WbskE0BDbIzmBPQlItC+18vdg8kRtqYoImrPKyOjXcLRvNHU+gSCaSDJEh6Eh44P1qtIz5Llqi23Srhkm/5lul1V9O8Ji/wR5WJGek1NW7+QuBewR7chArs68XLjdzdb4NcMPwvMTdHwhuJgeS8/+pYSyywatGgHETU5zp6FKHkyAqRe+cEq6WL2M3or3qrMEc7Fuj7gVITZOWUpRNIFfFj6u7y766CogVJcxeMyVSqISYQretZI4lV8zKDmTYCvXA1OxO01TfgiaEj7lw3y2cCv5wh5dDMtxYYHINzMVXqjotsDME35ZOzXyAfWs9bxQdzsjGI1wyPQRLEKH6JTZYCEs/NDc9lvj4FljKJR1ammLkEqtA0S/2jGzBMRm9j+ekRQls3744YaaaR5HjTcxhM9YSXI+dBsqH3lu9UUpeFZqv9exug2wZBZ4ct+usCnWOECod17t2GIEEJqiBJ+py8upL5iRpH5yZBVp14lZZyHrpTX6RJrznccDyC9CpZgM7p9VsI3JYiTgyBBzMbJCGvC/hiXOCrMUIDVk5juSQoksklI34w1Up5/L8XtrJyIiGJ+HmKG+WshElScnneXlyjPiREIFhw04oVmOaLfgXmdihCJaNs+YjIk6BmSKJwgwKe3XehqeTPBGro91CAt8bherqJkWrfGgMlOvfttr3AZzJKYaZbjOWpbudOcfpGlQeDAQJ0gLqM688Y0Bq1ChPnRyvSQ5QSCYhDD4aQzO1WzdEwzjs4kwywrofpii8dwU03HruuWLJZmf15PjDqt9IlT09AMQGbC1W2MFKrXtQFfmAhXg+KrMKrV6L+sl037jSVPIKK/+2awVjxQZnB3xo6rj0qvZw9L6uT/vSosATRWO/CGzq2clXweAvl+xIW9b4VPkmE8zp1fUVKMlEv1BOA5RE5VUXKkraJaJ/bu0kf7qU/6CKgoNOZzpkw=';const _IH='cc4d84537c660faf297b8247068200f1ce5458eeb9e30cd6e1115b3f36a73f78';let _src;

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
