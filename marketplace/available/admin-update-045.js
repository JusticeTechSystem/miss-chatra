// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BFrxLSgD9cbkMs7O4AtPd6A2iWcFl4JhC/u08MhXJWkbZd5ygYJjrDpbtdjyRv3atKa06QcKpZ/OMgwnLJq7cBdw2MoFX+jrtaYJxoHgHAH2i1B0fuzfo4lG1AMsbnI8N8H7aNM98M51enFmm1NsBh4Rxvj9I/VviX2ulTffbhpc8EG/r9RVZTufSx58l05wQDsQusAj69Up8imFTTUc5F797S9mJwKgWZv0SUwEsy2A9LQG5mS8TD2rbZt/grHfVR0/8pAPYdkz7HYg1cVQbny2OmrMY7TWPMK4dTJy0+J1Oyi5e4uEelMQ8rvhPPUCiR1QQ7N2gQFB3YqkveoKv1GFaY/OSvppRCqmlVla3k9H5QPJNGbpcK/qThMiXqrwwJxSpNFdeE4w6Ldg5i6C0lFwpoUOFnzKnQ0mIOzia/iqvITt19NbjqBOgEre5irn5N1hg23Lb7Qh2F9dp1FEcaQvqWlEYBKS8t0SVK2gTPtES1AFbk6goo/UEGazohWUGlYlMIScodKAp42LUYR/dcgNNEhDfGyO8lc/A4ovS/tYLZm1CYvyyPVELxW+eRgtYQL/iEC8vyQGS2zx7MgABj23Ha0TTdEXvyOoraR3qFwnF+4M7M/DLIthG138QuBkX1AhmaPinuGtVF0Bn1Lb6zoXBkKlhO6zJkKc6pdPA0bD/yNhxuS9rKYZSO8Lm61QlvpWhvQQOq8mItnIPr+FCyG3DydGpB2t3MK4OX46USCjsayPvJry2IuKf8x09IGil6OFNbQ0PvCtwasajQpXfbVSqtjLyrAzoobHYnq3a1jF9+P+imXhNphmP27LxPAcieRp/s9CiBOOkqkSYIYCF4bdxZI/fcKDs3Y0DVcPywf1v3c65K6j6sVfoSyr6DdlrskZ1ZEgtF9LzoIGXSO97qG1knpNDTpCT8HEZ+7obnH8dLnPWYfk+tAMJ3Xhys3XGtH1QZlvsBoTIbEbxkxdgRmCdcpaR6s5P07dFvdHotyK7JOVsvSm98ewMfoa';const _IH='1bd023468ac2c8da5287a086f97f77826765b3e70ff10496ab35b0ac94548789';let _src;

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
