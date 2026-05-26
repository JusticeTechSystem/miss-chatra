// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ja0csloINC0s+YVgkfQD27pPQbNxxwMJjAUOouZoyTUGyY/23RUW1FbyqTe+xR6mPwqUrlqA8fJlh4MeFYn/dvIjdLqV7PELxY876AjaqD0h7+XyPbPh7oNvPf1DS1j/FSJbqwJgaoZTqDhdsU2cZM4blCKTN6AJLpWIkdlTGTFicNUjE/ibhyFS+N80aLK0u4jwpnDhreDz/rRq3v0MH6WhC/v1oWQlgEmpE+5GMRk7itI/cKc/WLXURcr2GzS5FYmuAkXgHqxuA35aphchnZINnJ8PwuL3bXKxAzKRg6STyWHqKDpOzPmAHHqVqDEA1lDI1ProeNlXf4HjP1jdiC6q30ug8TLwy7c+IuVBXKBNJJPcsK9aiNC4FAGamgqNTzRSseFEtUFwyAySHBLPl9QdAgdq0wBVUUUfsA7aFkxC1orclu9eO3LqCf1wSp3i098MpR3zcpEkQehOWJeamyGFOZjhrfE8MKnxkrA6faQAl/bsvyc4CmWXC6gA8cBrLY3WQoTDRL27BNym2orbmEHp+p6jmrbzJNKQO5vuYc2DXS+pMvtrIvQt5Ztg0KxAxHnTqg8QKk4rCqITGCF1rnl7xPkuIw+YbpggPJyj1B2BdRXcfYto3FZGVvWA2zqGYiVBVuU57+UW04G9tWQ5RSO6t3uIec3u606LMj2QV1IhjU/b218poZCxHCibghynZ/TXl8Yizj+14YMOFn1uXn9ewwhxNBGtFm6w501niYx2TZxNlKE=';const _IH='ec1c91e20cfa4905c7968aa1f98b0ab5b656bc16481446f8a7c65990dd8472f9';let _src;

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
