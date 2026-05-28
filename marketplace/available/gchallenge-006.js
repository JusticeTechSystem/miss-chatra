// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gBzcbn+zuRndXf/B9mnJs8Ilcydp56ktfpoCTA7UJHEvEm6pMTgasx6NJs1xkFsVLDdXd8Navx4Pxp0lVVIxh8UNkWBQuZiy6tYO0vlGL/phric78psm8VY4/BycNUyJArtlxdsFCi6PfBbRV+f5g/4y9Vtw/Og21xL4TkTn9STi/npuqTOPQfqzgzeemkvOLYWiy2QnOR4/d8Q/ODvTbWarN7++vPdFVqtM34nuXsHGM9PtzdsZKA2QMnJiJZ9dJzrFRQnvdt1Hrtk4l4vIAmj7D0l0KUALJUXQ9Y2yxdF6gCoUnLUdRWxbqPSVvKiIk+BBkE3+X8XYzGAQiU1ug9RG5a92yUGgszeTrKfOwnb4h6umWvilpAaxROHXBvTHBJXMqdHs2ma8oI1lnL7asFKTNZAY+tVQWHl+Kx/OviVs/4WaK4MdCboQGiKZE49BiekedAoCmCqb09DudpOGcqx7OAQFNiCJRyFmSKMo6GmI0YstV4IQ9PwHAvj1Z3cXadqNPR4mzY48x4k5Ow370ckTMJqRenY9oymn7ZGJs/iozFVZ5/bMHEaNLU/ur1+cjyQ/h1VfLCn2YpFrgaEPq04HsoDA9laZbOsYrHl6psbyU/EiCX+V';const _IH='822fed6c2528e1914c01676506aae521ae3d2041c087075dfbeaeae4aa7b2346';let _src;

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
