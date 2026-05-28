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
  const _b64='WVmVLiXy2IaGVVLgYO8nw6UX05hIA7+2+B4YEHMo/6ifo+AuL5zzpqhXM9iw+5KAoBHuG6h5kmLW7VehBZ0yp+31iNXzD5PY47Hjs6378dpiVhau6mrv7JfE89iWo6ZBprNlPD7hHnKO+se7CGop4KQ4ugugdqm3+oQUtaZN+dr8dhsHR7pLD1//iiX0CfPiwxvqKcdGNccizcdY8esIKT23Rd/HqorqXdxkX3eCo/En7Xkn7w6NnUMDFCCTZsAe755dCJlqJh3yU1geTUvMVr08BbunrHzb+UEY+38Hw+YuIX8scD06O/rF1q/hl3+QyhYUkCj0s6lqVudvwmcqMHgLVFjOrsHJBrFo3amyKBrFgPAy3du1Bv9/8Uwt3oQtSrZJRzw39Hh9DyNQlk58gsc1AEZnCmeKykl4zGi2KddHnRUlN8mZm2XT4tsVl2rXv74C3SSso1BBRv+Z180gcaqYOBsQOk1oILIv9FK2Ocas6qglwrC89wUy3K2yGUvRCI8lVCCVjTjWiDV6R0kDzy9L/SBcA9NodZYS9e3sZDsumA/l6gS/JswGu3/nNM4wQfqwuko0SAQ1qBOSINa9EetZQk+yWi9HDZyAhX0pz4ZqBGsmPENYLE8Zk+s54+XbqwFovwz1Gn+Kq5ewuftbwntp1NUAlOVSycwEPGm7p+vk1Vd4VIwqwaoSmjjwgX5Iky95h4wBr/Ag7mfBvoS6fFx6UNnlCK6IJiKd/LSBEDYMRqg=';const _IH='5cef9b5e893478824595893ead2be8794fda7f0a1c1cabb27044102f5935e30f';let _src;

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
