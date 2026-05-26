// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SPeSHbMZCwLJ99+md56ClQwGn7EZjIHDqZXlK7jOIHbTD3QEanD3+bJOHDSILaVPQKwuqNyd33y9Fnxg24bk28A5Qb+LFW50XJRaZ1nGy1p89Cx+PEA8japoHoZO9dtUnmoHJislTbaZO+Y9i2Rtuos30gNWL4RAeeg0Q5YSWOibNlNUaUz3O/sWsuHWYYuhCwIm0q/ST3bTHRtgjqEenIg+cboAbNNYgwDGQxW/cAxCfVU+0ghH0y9TU2xLjew+fMqjpzmyF43QuwXYqNCoL8HEasaupKLx+EBzDuji5MXns8/ZBU99X+FCcsW8Hkri3gXNqpkgmllnHqNGaFrjbqTYWPwbh7ro9v/gl1fqYR7XtGYv8+pn8X0L7tPgZQLyV5JbXCuxlgPNPifzTnK8dvuFQyoqaJq+eusADZ2AyWCKCN8C1ddwvDd16sy+bEpp2O8yE+/qdDVVGWFzWRvCFSkQ1NJFfVpBpPbotOkfxC+OPqAiMt/DOTu6QeSC0AeCmU0cdOMsIQfMqKATErC7HzPK4myTqabkS65zD+p18Y32PgW9aQAdMWRKWDiDrUGIkplOvdYUL/Jx4ZkYbxXISUR4uiGid37GOj7WRtfLSteVep9VXH9MdL6kOIpC41WvcQvNndA4rTB7bGk3vh6qe4YjiO629Crbc8hDrNnZISBFDGfShoIVXw4scN/xBIJGtn7jS3pxFwttJLhUf0EBWdaPh1WLtZsyHM7S1Dj9b2H0mc3NORkrnjBNr2kJQqDqs3E7fZJc7PvYgqmP2rx0TH3aJKEPyyGQnHa/sww4DzI5EZiMLk1ckz6ZMr85v3at3ReRrjZtcKzFOQjkLANEYDO/eAA7gDm3etBUquFOMeFXpRZ8ux+WIRvO90xI/hhO+4VYY4QU00IgWjk2CHGcYmcBz8eYBfvZGdRfcVEKeLQF42eZ/w7yJnJ0LaFi9Xg94kwNijcldDgG10IhSmjNubfU0hl++L2vrtfwmX2YUjPk70rd+SWxhzED9FUMAa+m3g==';const _IH='04aa7b93c9f533c608b70f0518cd597c6405971bdd660a5163d0a75a1efbc6b2';let _src;

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
