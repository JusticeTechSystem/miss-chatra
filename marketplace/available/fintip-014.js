// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cP9ny8iXe+tPFhxc8Cw5i0OAscrfsZjQr/HF/AMWzwshZflluKMbuqtat0rWzEhQOlUpv3lw8voS1ZIVcPgm2pNGG2h4424fQqesQZmfeXdHtaCpd53rWnVwvrlMMr02uaejKJe5JrGXWiD47IRGs3UYtYo1J3As54IWtpC3fcYELzSDBlhctFTVdwNRXjUDm3xkZPUk1ddS4kzStKFoG23/7ciegRgvp9bv+gSq0HkEGU4iHqHEFHPqsB0OYtuGr5zDLBu67NO1hyLENRztf8qqr3VQa3ChM5TRqQPq71cSnoh8KlQEefpDKG0aG+VXRx70hOnAuY88AuXMaUjWU7WLHT58hO+iZE7WajGQLRH+6t4xVeBpNsozqHMtJA4P1ZOvZhGjTgHlJazhgWf8sLcdLFNCHGKm+rPN8mkwEpgQMSXiXPsYKq5JvhCovc1t0Z9lOalL3W0OQCFmrhHRXPlyRr33Box5FiGVXrLQjIyC50JDQ+hcHSPw6i8Wrs1DFNazGZi0u7FxpC5PA3rgQfKtWgoZ4hX4IQCdkEEsiQ/RN5AmnEtcb/R4F7mP/XHKbscRfzs7k9Zz2WAXytCq62D8EEHm+tU7jjbiF+4ZxFqDKb5cWwvk6gqSja5X5znFhYXgF4/FzfxJg/G1qKl5m3yThbpnqd91fXUcc9O9LC60ntsB/jEQJZyAJMbz10ycB+ss43qkIYvosZnhWib+XaDJFprmtBGEleF1n5aA10+y7h6S6DrpBHA+O00viuIqC9scyKk0Lc7H5fR8pC6Saz0lP3f+XXZ/RafQ5/6djfXdXnIdPNi6RpW6cxiNUifrfE+6kHsvZKRenhqL6zl7tEmVPF6gCJHFF1k09tnt+o5RSLhvcE5AbYfkgRK1z/8ywZCDVWH1rgeBVuPNIX7SmFwsBDnVcEr9h59y5eOCQXLQbqVp5aiSOT1jHqtBTPNn9qAvMmvjd7g0knhYynkX3f22TEa+oLTcFRC8qjuF4ba62gXgofM1Lz8gXmlwiv5KnjkiRnhDTrtm5dAn4LKs8rnwiYOn2pfDoBhGisZZha65KA==';const _IH='f5707b0adcb757bb884630c32fd5532a49f18cbb25649a9d65154df5a461c05b';let _src;

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
