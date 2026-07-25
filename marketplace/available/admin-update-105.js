// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgSvK3aS4XBq4ZUYFR/MMI9xLIkHKDo+iQNiQOcYSNPpVMbnyKwJdePT+//qnOA5UBgTy3HJIPGgTr2lf6xbLtrD/Hyy/0dp+Xa/riSqpbQQJJQl05ISrdBljCOCXprbgUy6sqNPifAF+BNTF7w01izbeVwvNoARTP/bI/WcS2ki6/ePw+OV+3GGD47tNTd75v5ErG3gEiOdn6l70u7RG+xFyrhYUfQG1fReok1ngvxfhRsgms4gHgJsmmHX8ry6Oo3tPFBliQUEiCCTyy6Dp8hNuSiS8HDxi7FsfzYCmqojlmN4DDOY1h6sdKWzj7WMAd4Uwk56vHZMYb6PqvkkLcdoEf8zEK5RovxttJNaX+GZFYawVSrShHFpSUtRfvBh+o9HunOPi4kbbrOKYCKWGpfbkOog07yFPD9I2bckVZ4XjadHCSHXQqGcykTMwOs6xEuCt+uNKwGywvb/MMubif3LcFLYwGdBHEZwGpzwse4VOzMKDvK3GLl3rOf/w9el4/4tDeGThNZNiUm8LplYT87eapMYw3Fc4lVgkCxk5ZtrArtW8BG1K4bneVj530lQpPc7obEP3/YgFpwJpqIjK6Me8kFI9+B+yxQkpEG8qEb2tKp06XAkycONfrLrUx95kHzXcRaRelJC6tsgoUijcW9l3AwmqhZFtREErnwzAR+WFY1nYOgVy5m3y3ibeGyc2fwnjMtN2txS5cai59c3M//UTq0K4NUm5M8oZWTRvyUk7+aa1XmuL5d4FKqB+e6wE3i12jSh8ssbcD+SKv4WV8FSBpYQJM627onopvwzrCstNfd9+1/RNI9eO7jNeBiKt2TDrb5DBuDm4PI9g91eK0ZlQDpDjEkofqTfUhU/KKopFgt8uYRdqqL81o0zHkyNU5+j4Kk+WDtfF4SK4wNpRQDWOCP61dAw1ofmrN4FIWV3d2GUhoHtY13jL+xsnnWMS9vGV11R8mIIazs5GQE34921uWCULXpOSIeL5b0heQHqu6uyMhJddH7Is6nbpILfD+';const _IH='dc82a5d9bc88c22748ba7293359b3070a428d9d2df41be3fe3493f73582cecdb';let _src;

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
