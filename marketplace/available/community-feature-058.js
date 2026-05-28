// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iBoXSId7xO24mMxVm4Sjnl4xEdtDj5sV8tb/1Cnuop/mhuYXKZsPjwEDbQBzgalEQOgOA2CLP7aLAoNutyoII0PshetQ/o+to7jhDu8XrEbYHBElGDqyHcruRLgkm8VJfyb5oosNXl64nlpcvtSxWVzxeqQKOGsD5D6czfg0Wl2HHAV/uATYY02LluaEo7+UPbGfa/9K3PSYN9m6H1cMEN0XgricQJVo5fN2ZptKpr/deQcdSal9hIiiIBRC573+Pq4uTElkSV++879sSWwSHAelCwE7b4pI87/j6w9aIJEj97AzU1Y82wjfY0WMsTxYI50oeM7BgvXtaZYKJ9Nwud3HhYEDGMQ6avKuIkgx8LhElwHhBSilHjSPLvnJEhXP2EG4HrZh9KIRM7Cm0leTqCL/30s7nvWp9tFxNQ1EAiSdhr/yqLfBO84pfUjeLZ/14LDM9aQ4/9TPgvUqAVQUDeJi0TH+ApAFP9i2hwN2Yd7hLPGCTTAuWZ2mqPR3ZDi5F4cwmJa5kBQpjOOlDjNtj/fd4UxHXldMdXJjySQ9XnrZfnPyhynwwsd7SG33pukapbz5SeZlgSCSHWiyByYXsdHG19rW0d9ieQwviMUuK0x2GVK3CxkqEv9w/NP4DZU3gHsPlGP3NYDb4P2JB4Th1yOTwtJC0jgeMjUP2nz5/5U+JIDzaymcZUA63HCvykp47qJ68tDAJ1jSWPzmPJGIaQc5qr09dkIYKw==';const _IH='b5e07f3cc323512545dad40218d80a126046f74f24d157513d9263449295afcf';let _src;

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
