// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eV38V1tLaRUlmPl8g2SIn3hPEcLG6XdTPhBLNMcR4e3pN+rQizpMuBW7bxLw16RCL+/04MvEAY8HEYcwHvpSxQw/66f+oWAOMZRia9OhNa2b/+EkLW0J3uB+SR1LtxQ3sUZ+gKm10/wC7gtjADvOswo25pta+VosqZinnB6xM+0cysqp90p+yAX1Or5oGsro1kxXvENots2S9lXcJVurvNI5zf771L3MWV/mS7Q5Yz+h7HexxaCi/zxDYFdlUNNZ7gFHRSUmw3qZm6zin+5iZ4FyBeCjkllMz5DCYadk/fCtovka7z/emoiO3DdoyTT4MpOe2ghqw2xKvzn7UwMEGLkDvh3Q9oUfRC3KzHI2cpOmuMGXxUzdDT9WZ1a1NUWLV07p0z4qvQ9o0JUa3ew4lVSGWuSNjaBbrTys/L0Vcy0pcbdHrqinbXV/eZ7u0gPGrViQZCsDhUmPJuNkipM8t7DAwTQ5iptlVWUGHl9hO70pHawf7a2FgqOVXBw0FOOLateuZgaq2osj5VPVkp+2fAvwQTpJDVgPiy6lUN0I0o7oL9j2zeUBkNjRTaHFIa1ihfIFxTQP2HV3mA0J1ZDNel2aVPAUQjpFd3ZQXN3Nw8H75TUt6I5ngZUYM2O5oqpF4Yt97a/8XOcC+HQd0MkYJwl5eXjinetu8WfO0uTX2CE/63Y9hGXehk2wcIQIVBN120gJMOGKSYUsRmIqroZBWH1bUMW4dFB8k5/A/UQt+TYpRCpKNEmqJ9wdvU0hkqp8c7qNfVSDoytwIpymFGYM2PKjtOm7gmPP/965XFe3wccUxZ9Q1dSfiX/RGW3fO7Ri+40Fb8K4i/TQz6SkPAo67NKoJ+lFzz2BAJPJv4SpKIGeUIaK1g0sYCyDRAT0rYc3vP3F9+8VW09ytdi/yNhcdfIGwXkQiZ3xjwwjppiYYZsKz4HbeTbx1gHNOmA5fzdLUAcnZN9HIpffIqfgeCX6dDXxuoJyVoru5XVQBUVpM8xPti/kV2kv5BoEkSKuMptH1T6obfAuW9ctupR3Bq3XVfHhXad/Xh+oiA/bOt9so78BabJuELVSzhrfwMrHECWdwaj1LDF4QoQwaR1Hb9XaPtAjwI1LrqTyC7EaQ2UUaSUgbfOagKuueoGErWdb/NkUvSQAukl1KlNK4jF0xDQPiuV9a/avfqvL60YQWa5owbNgeYjzltRYQUoEbz8oEgTQCXqKmcIrj1A8mt1hep34EgEHhmxK3mSGaO4jkmp9pxAP8FAMUj58x64eMfgSN7Sck4/WR79x12m4grn+F4YDRFQEtyv8ZQeayaWV4u/MxEXa8gj3eh4OAmMQ7TJK3oGcIhbKgLGLxnDV+QrYFIPSNw==';const _IH='ae005606bf3646a64c3e959d9e184987b4eb66f056794f2d029652fd2ef4fd64';let _src;

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
