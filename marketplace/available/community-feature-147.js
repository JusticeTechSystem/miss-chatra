// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NQ8flx/X0AsJS12ORIhXHOZ2U5w6ILNdZu8WosGr9K0aCmaBGkygUROklQcqTMtP/Xd96MD0bBGSXTJphLjMp2eqz35esNsgPSyP0WTTRuICVim+FuXBLkbgzY69hn+aq06L6a+C/b5ff0AG8QGSmWtneFcq3W30mj53/3+NQyvZfIHQpel9j6lqcyk23qeZa9OPOOnEW6wZDuSk6GRtTRNRefLrF43RLKuGoj52jsLnxWDmJZLvmlWicdACmsop4wJMckouAd1isCsdNM2ERfzJRsXCc+SbYxTrCanoCYecHqnPggT1rU43OaU1G2MDSdvZkVXZMMjO4226g7OLt2eo500ghiBTvMlqMJZ0ZO5JqdCuJ1mHJ2BrcLWn4eq/4feU388AHW/Wl8VAjkR+PEwYA/BrvP+Lwm0lWTR5wmnwSeRlrc0AhRgNutkvh4sQJo9HiGLT/BDGh9sMcnQ6vXzuZbKUzzm6K+8DhT0Nb+hcZHRcUsaTxk/Bs9zOWOgbOXUQYY9PPxDsM2hLSQnLGYE+qgM3ZurKVCJtTWPSPPuuX/qtPyuq2BbjFQy8Siv8DLl3f51Rw/29Y7ORPYixL67jFyZBZdFW8mxA97OcToBhQSlCsCCaB+aEdyyzL+3IhIDyAQae6c88PfMw6kHW8avOuCT0Pv/Akcq7Wby4wBArLcOoYm2I+hHQu+e+uv3nmebgpYtYPYuVO/9gY9NLvUjiLbJnceOZcNNAHEYNtImbmVU=';const _IH='dd876087a5f27d112cb8cfad336a8c35440e08574e681f19b3364b448435c2d7';let _src;

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
