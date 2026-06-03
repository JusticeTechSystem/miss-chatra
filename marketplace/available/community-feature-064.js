// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3W6K/UUek+t1SXTRxXTNeEg3UfRQFciwgApj06SO3f6r627vbOSZ3tI00Mq11q5nB0NimsBefhbSSXEQEprjGy1WXyKRtfFdMvDzbwCMahAfnH39xLuHJt9vH8H/Z+3hBEJJzfYKqguAecmiqD3a6uShbu5gZWv/xB6jvvue1N0RDqASKiNBxrdZ1JesX0F0jBVvXuPoz/0lW4h7Ejl1C86ZHgiUOOPVS1edWwtM7TuCc9UJOvxIMtucajjAxEDvhh9NFbysR6QXfiCDUSiDVm04PJukT4HNONEnNU+oz9fOUp8aTf5nBAfLXj7sMJcc/qmebXYTM0NICKhPKRESfUlZmJZj/F3OcKTol91Wa0aMS/OwfVHC3XmaSFXy+BE0D7+dBaoiK4dNt5CawNa59KgarzLxp9lcKocWS6XbC4KVoGJopThKHwlTqL5zPvzyw/jkKpJntVIh8zQazl7jwRvVk154VelEne3yEOU/zgI+z9+B/FjlJy0jVQh4rF7k1d+gbFpbdXGu9Xpq19gNtZ25qEx0KlIHMexlnOLetiTfV/R3c5WzEDcoagsBRLlcHQE+a4PxURNmcyJiSVYYL2CUs3Qx4TuyY4kxul4/e5ryeGry+wjix0f4U/Q1qpZw53ETF3qgbzjaL+g/xNkN3aYVMSoCtAApOhjIOwnYEV1B51JaP8JMgBbS4yc3qJvgQQhaIR+L9C+esoJ6Y9CI68PFKSqjnK+FBRFQbcyy6HmCWQ==';const _IH='48b73f695a7aec14ef74fa330cf374b1d081b79837bde5468656bc3dcf181023';let _src;

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
