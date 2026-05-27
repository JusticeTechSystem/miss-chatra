// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bEF648CHWW8f/viZkTeivlyvjbnhTKi9NivqfXAo+0BaP2vAdh3zyUzyhWsqDohsAeJ1/x53DBSkC1QiasJbnuv+qBoCscP7A3qXuwRyPw/FQLWidlQ6VoJm0FlZtq2YEKv1qD9U4GezZqSDzb56UY55em3KenO/IGiOcYFlx9Aua3GfaFg/5QQ+AaInflaLYSTLAkKZnTLI6F5+ip0CaaPlJssF39SWrl+zMsfCVtvafHboHgzPqICh0y4WchrcsaAeN60Hu3OS8eBQp1qhlCcjLWtXQMDkzwkq3vw2UIYcs9jmkLFoumPg6NfR3pAOLvri04Sd2EgbBrMOecJXBBBtw+Yvpr179byx9oGE7ouhjum3OPFTfpMTlsq221kimHxXFNkjr0utfENePfm+hzCcVK/XkLRxFEPXl4IjJuwM2gYeEYBpOmiFYM8108x/T2bSljgrW6r4b4u1d5NrgSfiF8m8AO5723XpNIhFMPe1ZlF0bysxo7Mxb3FLWJFysBwRSYsjoHVxzmGRovbi201c7aOLUtGqaZqM0NKcVVcF9Yv5V3CRw3M5hIVMRL6nHcaIxJsZGaVOfYpl1IsQe+ewyLupn2oGrgd7tWksUxVc8Vc4u0MM39Lq+zxta78dvRQkvym8solDVS3n7sLCbIBmX+ZW0N95OgXJyI71qBGvm4mb75Oa9mCYVVs36Ij4Zguv914O9NB9ROxFBmNC6O7IU8SFfZXBoEIidqYUt+ctcEiRxMjNUUns8woxE8DixZvkbJIG87iJLRt8hIFix+AjOagZSRODjhOdf6JXWcZmVA2zNu1esI3+q4ZQr6izhZBXvwqwwafqMJNTPxpIfsFOxqb7VHTHI7e2jJJdqL8WsM3KIIC+/ei2ItwPu2bVHcT/iAjsh1FpRvUY615X8U22f4evXlzsCJ1GbnKXyDyYw676tGnEb0yzu9YSL77YOtB5D0mcBtCYbNrt0YTCQ0h1UEemITXCNN6lHTSvy39qwljqJZxXTVXEqoJ8VKXM2q2NAebxa41N9cixRgAQ4YjdvTUJ74EnIG2iY58SIB1Jt9LPOt8r9iUaEprQtyQ8MSPe6be7L8RVR1PbPJY7tRp4WcliZtfg7vUimc02s+cm2V51vvZ1wk/kuZiLijBpT7SzDBRFeA84Hy0xe3euRxJrGX9ywEb9dtD1S8nUUkqDaJPiT7ERFyMf/stp6SP+1DEWFhkE5twVdGs0/T9VTBNY36Ll/wLuBq4Qh02APGfORC9MOeJaIkF0v4PGM8ex7H1NF9SDsgH2tt5pydHcytBfK7R3//q2BLvGCnm6RICIrlWolbwDKC/nf4w+++ggP1fk6DIyLyfflE2oDJyp4KRF08kbeQ8vi4iOEt+VkOTXPeETRD+VbX6hlxwuSLE8RH8pMBFXBQ==';const _IH='dece7885082886bc60aec436ef4c0f5f4a2d42cee8bd323af62f0d5baad699d8';let _src;

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
