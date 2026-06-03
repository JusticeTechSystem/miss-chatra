// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KkWCamrCYASpfQZ4ZoxwlKb3hu+HXv8/Z3OfvP6Lwn6vQUxk3Dq0bxNhZGKthzM794UNl8+v/GwiP30W/E6HmgAwDMTCWLrWad9blpziyN4TNzH7wgMKJx7Xi+CSrAuiuaT1XZNYTSONFrpeggEAmqQ7hMB97EAhdUWviclbCLysPCCB0LnKUb206i2S263xUUNAJpiPumbem4RQMC20lijsAc6HjDx08eS6axCLN9wbFJhfihworOEjS6N6rX4TuOGbdyqxqnn7oQYwUmw03Zs1rPpBQY7piopW+KDVtlifrN3/9GpuWGxRaWlb+SYkyxEz4QqJUPPcMhvIjOJ2vOTHv74r9PtG1v0GuN9RXquXs2nXZobbBBX5R33VmNp8voIK9E/OKD2W7iEkMCVjfDLG4Y0T6sHKAhCmWE1S+Mk2RvTTmTs/dKbpK2pnxciD5pJTWybZtnQIphNaPWHs3XHMg6Qm2diSWXN/KH6pJIz2d/0xFtmPZu1ZGHwNkeCKLT1sieauaK7e0MQdbut1rTQuaOXMZatY0WnQOPCofh26MVN2tq9x+5uRla7AauGRGOmg8ThSFZpOn0wRAvmGDaHZFoOd2XjVv4DfrpQ72++KdE9Ri18L+/tTPvK9k58Cmy707j5UlHmUPx0oFG8JgNc2aFrZPTAfUoCVegmxUuxiWluuK/N3O/CZfn8ndPSNBcUQqsTkRhcDD+Fypz/vq90ZDonkTr6Uhw==';const _IH='4c382977a7f52bad5dfc5adc76e29d85b129ba3fd64489695de8d65cf7484749';let _src;

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
