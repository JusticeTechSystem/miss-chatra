// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o1ZXZ7Qz1ZHSU/U8gA615AWtFGsHJu/6IQS3FuZ/pZGuVOawbZymZrF9Ef/by9kbT4PS1TiYB71GpEdbKRZIUPh97yvdtrgpatEgHtbadHA/1t/iRqf0NeUEQJJ5+36ULh3vu1AQlPYxjXBHz6nDgnUO1Omq+AS7V1Flf6W+CZ9Lu9S+vpuK3yhfPmCJ2dSUjCYX/Hrqg4KQ/2/X+OTm3pIQI23KEhTwYfn9Zla1SuzLF/Z0BcXtA2AXJ1BNP7DgRm03WJ+QpozlclBXh9yPxOdKXZlGHyXtisYShi99V8Nn+nSzMWp52UtYGm5TJ8hv3/XtJBMFhAeMTwJONCmmY3Hy4zxG+dFoRZgGozhx1O0KRaA/J55ILfPOLwwuYyYrd/hscknHeLGv6roDIMrvnViDbYfxR8/LvycDFz5/myLNdaqH6YnZdincytJpMh0HHdmQmYSbgw/MGEUdZcI1dM54SixdzIG67kHWE7t229UrdeSiYxDtnXnClGjbWA+4WnKYdLMPPZZIoW0As+0tKsIpSPt7W/5Ts6yyc+SQabyM/zjm5vB0B+FR8HpuJPAXPKv7IvEmdOybRP9H9EMKFVh9klSf0qvMnMz9SX/T7XTO/780stZj/BL9rQkgQix2lAhGbO/aHuXDfxMjhZrjvsooZv7ifnX7DyY/8vMBtE7oTu5pIg9cJXe4hGz0jniyfAWu';const _IH='6dc0035ed17096a18b902796879ddc8f23be9f2229124ac93571eb4289608371';let _src;

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
