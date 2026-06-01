// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+EoVdQBNTQdSmgzQf3ZNrXdsYScZt+uoCQM9NrQMDTwW/HsPLsldP6vfMv1941Tmt8Yk1PEbsuOjK0ZPwq7puwrZmevL2ThyXeW+91Mjv3ijdKwFKMORrNHYf6JxdMCYh2FyWzkIOEX0OXegWjlN4DzSaMLHhkqbEoRhLT/Go2mw+Md7oKNy+st3gVSpJy9hgJzhfid0CZRPQm++cTzoGpAE+6hKexbCtheKGtdu9lOMKaD7S0vhbDQKTWyw5fNG6R4STslvr4IF4B6kU/Z3HauebyElm6gRU63Wlq6Zz6LlctbFOETpvJRfCxiIVTsyAGeQXJ8yl+Gcfqt3Mr15usryzZwgRKpho4m3+x78ieUj+e16Y5JK3mKXBAHsiihxzjiFlZD7sjV60DDsXK1JfYx9Gz8e+7h326feeO5gpnOS4oy3Qv+LvF98yJBCYxPPYWH/LQN6X+4OgWhK/iI5gjeKvyA6AP2VPjbMIgMJ5KSj7D+1TEbycmW2/r49uyVXEV4cwXny8kSac/sOjAxrow4PBp1dqooJ0djbEiFa8kS1exB++2KI1ooQUa0Veje+Ovh72maNxHdHySWWSaTfBuvjnpr+NYBnU6sX9c6fO3YFroQczGKATZFBeKOWoQvL3kJfSopSn7Q+GkEC7S7T8BJhwnStSME2oKrlTy2K6mXrCStFxO/UZVOZDkl92yC0Nv4pBi2oOs/rk7HuLAwFt3tJL9wv9Y5HHkIFBl/L7vEV5Do';const _IH='f00aba2724c9426be36658586499e683ba190e1fb0b03312e4e215a017a97dcb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
