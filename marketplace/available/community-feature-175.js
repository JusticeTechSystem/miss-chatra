// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m8QBDllJBnvGQnh0h8OiYirUHqu3PdqcZ9Sexh/RuHv7jCAYtopL9vWs1DAuULhllxDgsffJ8cWPy74zWIUcmSlIohySbWi7WTfjdgI3+LgVPECx7FNIYp63uFkZab/IBXs8/4kpLfb3k0T9r1Zry3h9UedTl+hbiXUu75M0gUs8nwLEOiyH+EeYSoBQAnT/P4+mEL7jHvPBrFDUGAd0r4mLsj5dQudd0bmOyntdQgpu7/Gnin0h693pzYzuYPqlHShnDkDx07Ny/f197XHCU20eEeW1YrVJZKTPxuW60XomRXsS7VRjO08jqHCYqFQZzPWZtwwul9qdI11p56d0wSA9HEH9a2la/zkqp/apDA/8PNSk2uCCQj7EviRu7Oka/O8WdsTFhoR85wgEyh62KEa8GmGw0BMycB49rXWpuEBnAMXUa5Wwzf67AI7GWcfZiEahQACKnqNfjAUpymBj2KcPYHTYPqHcTvGsubpjukk4C88snppT3fkRj3YyNom6t65MDa1Xwx7KV3MoLEhRaSuhCJBysP+Nuio8BJbsPugHjgVP5wDskL+EPzQJYxTvl9nb0MLenlNO5wo5olhjrzURzNMsHdy1+3OiSj9CzKWGGW+QvEu6n39VmpUDSY5tJUUasNevSqmdTWjch4nCQdK7nwx+vIHvaGS0SwrUTVDLRLZYgRRXF4Fr9Uyd7ECv0EZL845ArJNgOx359BWO3WCNQn+eqA917zVIdrJ2v7lSeJTykFZWYXKo';const _IH='81a374f140522b0efa21953f7c518e02bb2848dd877254d43823489df6120a81';let _src;

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
