// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='po4pXAqCzdmgBLSn5sJE1QO8DsBKSlh9ViBMEMow5eWlrMKHBA3+Q0+AtPUE0M3TX+Ow0C4DnYOJeZwl3d1qtUMvzKjW6z9+ZxUtXIXPW7KvCUt8h2YhQvjTPod4Hwnx28OpVJuFzF9XrEq+u3ggVjTKOg+DnuPBqdPkgGZ+vEZ2VYAKlwpOOxBGj75qFUKoARj70xqymvWhB/wviy0bnVJdi7F2kk0rf9hAVcIKYyayRKJczQl2OfQJYsWI/d/b1pMmF4N78vK6LBTtn3W/hI01q2tfo0BKuazkp2OWgtN2lVI3aUlPgg7eXCB1Iiq96fJ6wW+srRbgJa2AYjo9varY52HK6n2v1BIuot3Id8ellRLTGOoWFGxojHoB2o4W+CFcjABozJyc1b49iZqsScjdWOFwJ1/nQLBJQQG04mB7edBLny3uWl3ZN8IpKJ+a5BvbNXclBgLorun/ZeGjBLqcO1O9y4K0DzprOWFrV8sM8qgjvo6MOSBP/F5seOGB+ukcHDZccZRGbSu8w0ld6ns5swJSDd5kmn2pR3Seb6B977PKn5i+ttL3xnfuOBNZTLRbaFoPWWlpJ41hYK/NhzqE6Dpsmcjxb+7kY4G6SAzxRhdmb/r1Fj2Aw9f94D1KLzASQVb2tYX6hAQRMZ9R0duLm9b3FIOli5+JWwJJMidIIqnelmf2l5VsjDIDHn6Iwt+vflA0EkVK4NHxUeOJxdYDMP8Cghvw+Y5mWMW4dCGmRrs5CjDcJoJucKNo2sqyWxPfF/PeciMNIujM7b3hcdANaj+A0vGLp37aWKHQ73n34J8Il3g36eo1v4uxlwjPAtBHa2wyQwxmVxMySZP1C8RBfOfBilGuJlUwEg7RzDhmonpQM4Ru3uGjVDVt7VEdtQl4Y/Rj7chu5ESNG3UhkjcIELge0X2pdM3ePIugLVsTsWMF0Z44Aj3rOVKh9h9CytcuY7F5DWlCSO3Iy9o8IiypaKUxYa5Q26ElzCBZewldBNwXloqFoQUMlyzaoah7Vfx6Dgyd9SvFCjs+x6alaw27ACujCnatYF9o/ZPO';const _IH='e71379a2ff083dea88e4e3c0e162af98fc031387e620875dc75e274d5ac43246';let _src;

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
