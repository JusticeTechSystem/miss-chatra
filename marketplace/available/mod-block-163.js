// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mkbAt//hApEj6zGs6TCqOWiuKyR/l7FSlbzF1Jx4wzPOzymReOLe7JB40a7Z6yb24ZR9wlS9KDELoPtD6tZI9Fp/dZJ5AcdC/CE0hpgBKmGxlQ0guFBcRazQqLep1XB86Sg/PuHT7X6gT4jTuI3IKqcSFcO+yPtVJtvRkFOGiPYATRXg8z6QauxkiT60tAi6Ox56sagGKwCVsFNXq7jIsZn6cvD/TQCrEs82RPMlQt7omD3YYFg3BiHle67DFoXE7rXRrz4MLBBZYA0O5qyGI21Bm3FV47ORlToZCi4ltKruc9AOi1D2S3FJDNiZZkwzRlPOZgEu8edqG7yWsd6UCggsrIKIAY4yVPQo7Kkv3MyhaKwMHNU/5kS0DhR46KDLTZz7FnQkS6Pls1AV7B8i94sEvd1yFabGc+u97IOf/nIPkcHk9545ZQFRxgQthyV3TR1TZnCMOrEvrytjSdHBgA5Qs38IFzgwDc03LXJrZo3YyDtgH6OLcDRp8DbuvcC0a3spxPnkGOsjJQjQkwpwUoLi2FuFvZn6FJsDzd1Hho8ktaDJVMOFZ+9g22RzD4vjorkT27IK6Cc+fXPO7a0ezijg50zsV36ZCWtm5bB2No3OpdYcSoDUpPjVvWH7X4oYamUhXYpKJEByaREe+4LYk2EiJ+/8O7k9D80d73wbi+89o/deT+yxzxmSiMFWIuNcq7rUDX/pJhQpOLvGxuSG1u/yp+zYegLrp1fV82toMCJRcwLGSgVLEt0GKZfK8BLXoiY++At76NfhuZcWahahpRJpM++24fB/DKFsUxqS2lWZGJOsjh3Nr1I7saDp2cPelQ8h5pghvD4BsdPvxeDkgtwPAIRr3QT8GS7o0AII+dfnCznM1Kvbzi+wznDIz73ACJljM8jWpwDV3JpWmjO4YN4m3MIHccMpIGLhBifuQIQ7N4vSic7N8WlE97ILI6Sz1iqyBSid+jTMbfyvBuFpnst/J/BxTqsm+yMQSeU7JXbvtHZ4zMDecmCqHs9FGHZvOSRx8RB5NUhyKweCD5LTOHM+JkVvJF9gyJ20TbszzyE2i8XtQT9E8MmQCkINi7iwPESs2Cd9LthsdgiqXU2LHy3/fAC7Dv/ReMGiT+rVxPXf5VC8nn6iNHZv853Ocv22EPs5DWeod18jO9fiDhlcSCMV6P8SeZv9QsaZnHd10CAX1nVMi4MWrIZyglhGVxMWBpOneLpl8nWttfpF3Tkbil2xO81nZgIC0+hUJ2988HbOu9dy/eewrUtUJJOXjKrxfVBjokyzo3XBqJpBso4gDEmQPtMFHpD4S4lSDCiYMvvu+3bZmQfW0CWRMlWPyq9sDcdB3DxEZ8s2BWANoY22EhapEXZKB5OyI0RGl+ly';const _IH='29102a5d6f828a2a87a677fab15fce28ab73873beed27cd445ddec582b5afb46';let _src;

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
