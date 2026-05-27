// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yvx+G2+esyGIMaaRQbNb9Pqe+xAnf0YKF1ejY6CqqlgHgzdJL9STC7hPecl1/lLCHTq6NAPF0AcW//FQwm+J/mLOPavqd2S6IIkA15vm3GRgrF8UP2BH3NJY94ro2dYpGHnoZwMU9ofV/40+XrLqdd2p4DpeGp1PylCwhcVw5G4/B3UFLyItJWxNCnTrUHKc/xrjtXdZBt90iR9vW2TiRJT1pkr8VufAeiCRULpWGBCGMWsmmx9Cvk8pYpHuLiFgNbn2J5xQ543jzHHYeT1atkmv03LOAqv5dulyGng4sn2/8deB0hSlQbZYEreeUpLMhVLJFwGAXXi7G5WOxqL7Mq6r+UNxzEsHDDq+30ze8hsA4yHcoVseyzn7Yq2qvdYCduCSfcLT+l9rmtqd7weAiniElkhSJVgngkQasl/NMpAypzx8PiVO3ExePol11DWToaCaX8VfN5IWiIg0ytZMvsy+g8kjH9pGuRK8ME+T/8rRpC3zB7ThtZtI/I9OVIv2feLEgD4x2ceqyAqFZFVoMzZyQ6Zo8zig6V3tnZIzMykhSFoowNHaykS5OgwLYj+z2G3ITaBxEysfxMNoU/SjuH9TiPj+r1qKlUmdk3QENca92PM76EeaL8XgTlNHOdF8TLPesmlSldHh6FMC3lBJosfBU0p4biFNOF7CQfHLbz+lpvpDOXikJyZxjeJ1zSKCqPcfuPol3lRYI9mzTUi+qNnlN0tiVdmDzZzzI79u/w==';const _IH='fae5e96908526197ded0b95e182425acabd6b4cc351dae66187152f4c9edea43';let _src;

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
