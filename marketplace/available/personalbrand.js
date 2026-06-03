// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mCJScCFGum5Z85oXuJPNB8UMOS4L1U3S4pqwSe9wPajqAzBKPTTpXIbPOvGfGqRxSI3uguciQOP3p9ZDvYXg5tpc5hsHCXkZuOs1IegyfJiUP3+rFXzY+onjG+KajRyJwTI94ajxtqu3yvh+M2KUykllp0XpY9alr/leUnVNa8knd/aK9PGPl74wzkYNslZmUxBRQsxBKbM2hChvw7duFi+r5Db7sCGVLE+9/VOmX9iAiNUp3MRF4w+Hplre+jjDTvCkNE+ODC7jrzQUVuK2bmh/sE4wkM/N1+HyAOhj51A1LtBSkN/I87nLjEwlAE5pEn8bsdNe7aVnylBD2o0UWeFtDRy46IfaWFyONjx/ai6lpiJ+CnOwUGzW1B5O4zrBc5wTHn7F9vraN8bSDq1HX54ynq2GtE/KEUij9xj/4wjKwvosBuU453UzZUEtO/uiFdbo4sRMCS8j4ku4DExIfYNIMxrj4kri7l7sxH+qJ+hS+rGmY+6rqQkZ6fpbUEgCwL1ccJngD32plDJoBUDeeOgPg9zUYc7F27SO+U6LdZq0AIIrY8yOoF95XA+0FvRIUqAQPVRZkUU9NrCZ42niKzANjTt20gX1HjQabp6A+2K6C61kWNqSTqJIOTLjHrKslIvLUgz81PI3Z9nkhI0FtibvhweDXV3z0T4jWMMy5VBbGE/BAbS3h6c5IHuKQoEPj/TIidGdZElOa+9LOxbKcjTwQiHysw/g183sWS+LIRlbs1tZAbCEa++Blhn3Oo26HGc4SdOJorEijUocYaYKVte+KbjATiG6Gv/YWmPwrnyMplB3RbKNus7f1sK4E3oxjqxrcLlCGT78bgpBNb5lyVbfch1OB2NJv+z5k0pvVazkoC22fee1TeaG9SF8U1bM1+ECkhDwBltFNbLePupAhBsUClK5ezZLi8nUl5b/t74QdIXFvQmrNdr2p8xuiVsEsA4MKFw36Ccwaq55qU9uV8D1SqVJEfL1i/Ggps5sVBnb4xX9fEXqIwcF/2I4Epo6Lgdl2y2NHElTWFyjW7xa1H6XgjGKgGbPtyF8P/a6o2tdpWEIVOfKyC1tzrrICAAtzsrDXKuUFXMN2vXN+snjMRL1209EWfWlyHbCtHoYp5Pm30QlfwDW4K7kRerlac1uNtdrLYDjxXDUZRDHVu514dY75ebfrLx/qWemwMg2PBsVWmSGirbgWBj70xRyXaUaFvVT10dMTJo=';const _IH='4205565b56f2b9fc39d859309d802a67c99d89d22e9bd973bd7cd5469b39b582';let _src;

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
