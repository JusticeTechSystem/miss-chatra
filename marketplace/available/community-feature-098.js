// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqT7+bKTbY5pjL4gHZd8uq+PRSnjWgKRa0+6tdnb4Kd3XHMKvcQuc9i7Y8549bOXqndQwD8Mcyd6bE3KjlTRCeCA1CZt20COwb5Pp5Qkp2+2C0qsIeqE78IdSCBlf1dKENTZsF96wkKEk91oVMpGzZmPrPt8Ithw5zXxmNLXLs8b0+0xf+dvDzJ4dFlGEHTrHfHw2RNc0fxa/k4BOfZlHk0+mZn3zcgZpXpYL8txdri4RLYU5nC+wcr6Ay+6P2tr+/aJ5dkh4WCEeeLktyc5fy7dVVthERM1ITR7lnzWkcT3L0/9tdT5Y34mgMfhWgnUGgFckfvVl4CfvYRxQvxKaOEGYoxF048VwSI8JzH8iUpgjeimzLkxcrNeO7xI5akE5M5XHEfuT+HiW8uJIm30OAyUfU2844fjsQeJHNZa5n7PnOhNLac9FlohIyIjAsjGweafeY5fs2y6utTMLG5HQIUs+53s8ADS/4rarRE8KgbDW+HBil+UjV9OSXJuRh+XpCVHjSv9dUfcpbiTqpSB9ykDqGjwJ+uusp2JM2smOqdWD5Bz8jJAu25XjIQ4Bx9c0lfII4KJH6ha0wjpy3Qs5cpXw/v5Qq/iH7/KhmSSB5CveaGKHzuEBWyu01PzN7p/TfVLHv+gsKTt6yC04Gj52ltQZdFQUDipUX07h7+o9Xq+1Od4kdCtrZROrb986J72ao11epVRss4XIwH7sRaNsmoydD02nyWHRj';const _IH='64bb35e5fc80e331e10965200018d706e573f60bbf9ec2bbb9d07305971edabd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
