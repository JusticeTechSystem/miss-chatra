// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UcUViktWYaOXQEDXvEGM0bdjrOvwjiZAHTTu15sOFcURUduMBeJcZmO5erad0Kn2V3up5BhBYYopl/GzmKO9aW2+QDHg4trTvufFXT/Kd4k39CsCvJ3FHJY/qDLr4df08i96o7fLVlokYEPfIVhAfEtK+S9JvUeLubudjzq5PExId4vuMc0DMQouWdCHrEupmZ1jxhpKAPWYOoaJ2/8EcfjI53DBWWTh/XNPQwIqjWzEPMB9KLJ0BUbB4si6qk0XMOkhl3IAfpJeu9ivX+gB/8+RT2l18G2DVrzkv3hlJ12uIzNvlmQ7+SU4a5T8+PaLP67KO3LiIAZ78V1LC07sXcZjLZfQebsSWZJ8GMcziJ3Q+XPDp1jrcCcyJMq1z6LER61K95HbQTOsw+mu/1exCqmva8XYIDn6z8F0x0JgR/KX0c/md5UP49IDnVMNnW7UzMgkufZkeKKzMxZqV2ae/dNb4vxNZ90a1mB8fddQFgplicNQifo1Sk6Ohsvk0pY0kitLQrN6lOfUXOLFB5/3Mmj5rp9HaFBOd7DE6FmiRaiSbEcAegAEXHTrJoV/ngofzzvyNgsopPhgupof51AuDs4r1MAyoLoGAPFj+EIJw9SWrZQbhz3xeNvL7ugK3YsTKmBvESE3Mww6znnOjHmLdMSqnDm3jiyf+9ZY4JqFs/z339M8rxOQoGpuuEMOW5E7hiHA1+zZqQh/XeXfOKHF9jgyAVFCt2SEV2NEm0Vg/654Ld5RG94hkduthYHN6dy/dcv8H10zLKEn2kz6qqSwb0V5OAXRoDss6HKypwhTkDI1SJuI5eVyn5DHmbn3khpWKnXLJDYGLnzSBi0TQRTE95xKlfNnp4zfsSE5xeuEirDI6nrH8i02aRESAIhrASBc8kUZDkLyvZoDUW/jSWpog0yGHdSsFnX5E+5igS09iyftYjHTxrfZg6kxcS9l39+7/E/wzh2CLloEgwA1okQUJUPEgqkVMzWHK+5rzqugiTloB8AwrGLTz29AxtG67PAaBPyhcGHFQgsSeHZ2XGEhKqddz28R+39iw3Af4p2f4DqeNpdBcaq0FHqP6956PbTXP7TQ/W8t0L9a6SuV8tROUW9rsvbFhQcseDPPrLoQU7kwt8lfuMbexkSzl894s2m/oxcwkrJ5Db/T0jxuH34jrYNkVVzriGh034uyuGZtqQHwCzlLJT0IvU7GF2WX2blIWzBpAQW2CgTzS6IZDok0GEaap/stjZUjRTWfC4SBU31DrlKh/RZHFakhTZUlXylq6X4IMPQKk6I0J2MzSOQyz9nC15TvUxa2N0spiEhXXXUrPNw6A7f92r3NzWK1eD4YXIG88xxrgB9qtnHkngORQ9i+jtV7Bwy5au6+D5OA';const _IH='cc4006e95f5a02158d6de6ea1a6415780ea85adf6be8ef8f0cdb8945bacea883';let _src;

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
