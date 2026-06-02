// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ICS/2l+Difmj3CieM9fH21AWVXTHnb2tRh99qqThCAhBTodqHtI9jjUMRr67TMRCh3D2/GreecJtvqj0cuHJFM6dQ+H7XAIeh37vH2WFvo88c42HEKAnG7SexcB4FXtT+KfWzttJVo0+VXSc0sCwalM6gx3RMM5/+BhM078J1oYLdDui7VJAuk/btgEk2CbOQUftZCD/zXUTXLry9XT6zny6G6AFWT7He0Iq+B5ta8Zxdt4NJ3XKQh6SCKQIV0013cptOsRE3tq9/gMM5hSDmWlFnWq6WNA/GuuWjPPcmuE+kN1Xb2csqg5UikIECIUEsI+QI08pj1AGUg/5D6UVquehk0sIjbT6kctrb5exJmbQFNKKzkJOhIlH3VGMpN/QKVlOy+eN9hiCd6OQYc5pQUqPCMPcTTD1smkIirsfl6kMPfttxgtlS3tlc38WLxKEpsYJKrLXX0OjJ/hEDQpKa+2afgJNHzK4PDTjKaeZJgqFknTkBKCyKCC6n/eyT6xaSgIbgTobbppZA57F+AJisOJ+iuCNDqk1W6mlCwd2+eGEh+DNYojeCC0Fdw5Wm2Iyz77o5VdnMGhAX89iVIbbH6AJJB54+ndB99/JrgVHOkfCGLtG6x+odJyTKZYrf7bj6lc+iApHaV0+hq2aS5i0VEYhZZwDhPG9twg/D8lPTjb7TJOk/Ef4k55k/hXHafN1REIC2lg8FFc2U+inT7P4HxbKruEpnG7vqvBxX4g43m9mW6ABrd+9SYLGVXFvk/iS+y/VLu0CojIFyYGSN8LJWvFs+cEpIbr2Zv2jfNG1+3W/RO59cPzNdqG/vcDlJgJY2/LivOLUIvRo7EHWkL1kuuSUE26xxzZbaTgAi9j9jw8eIZfplficHjMsvY7sqqc5rbYelMQRgH/C5+k7UO4UFzycCD/lfY17XHpgpywYhTLLPOu2mNYKGa/PF1M=';const _IH='9980a596fac7f1b07d77bdde8066b747d462c03922106301269af1ab54812ec8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
