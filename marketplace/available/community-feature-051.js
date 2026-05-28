// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bPjImJ664cChg2J6IWdc7l6llX+Abt+gCbJnP0Btm42KX2AiTkY+WgKjheWn3RBoIFAOy+Fw7GA8vsieoxE40uMNYPsiUUqcKIYBtrCauugBv66DSZOpm6wIbQ53FLMKiHwJB11+WuygVUhZ3jOEi6hTQXHIwzsAwUlYCvkrwxIXfuSbgSVgvfuyyLAmW41rimvYwDyMWlizFx/dnC8hAz8OEBwVkgOVvFvXSHwftI+QcTWHqlkROObSncyG2Abmg93E/02Z2OzqT6+Sy2tx8gbDs113QLZdSy74f4XPD96b0fz/PwBCrHI0VZSUjpJ9XtJXdsyB8OLJziUpH0X6h/GS4BVapkIO2cPbhRn3ax7myZTJJPZH4Sq4x4H/oz0KmRhgrUDmsS0AIUk0mff/7elHm2VjeaOK6aGy2Uztbm7acgOlBhPhTnquk0I3N66IZbMUO/PDq19NDAwJT9UnHWjma1lNTvILdvitK3gKFg15fTTxnQ3boEf/pDCxJpxC+0c96jIFwL0sOvhycklHnlaG+D9BJauDt2F/a8SFefBeeRjckuL+Oi5esbsU8hAYhvS3xw/OB2hO7O082pmbDaomaXt6sV7+g10kKIwfuPPdo7sBMe+cKyZQcjXuWivpvXffzCgiLH6QfN3eJoHaTaZAYxtgt3V1ekQcU8oA2tX5SRoHcI3xyu6PuPj7ZeYqmYC1rn2h1V7ukjha+Ohxfzcdy3g=';const _IH='74ab8f49c60436caa29ecead4ac4172686ab95c44fbd0d536b1bac53240fb8f3';let _src;

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
