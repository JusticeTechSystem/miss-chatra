// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uV4iapzD1mV+qK0vC3noACMIjFKJO4Lzk1cyktEPpIs/OEjoDzsTPVA1SLB/ttfPHqPkCx9RjLK0ACaTl/siW0wwNW9jizq0LaV5OKd+eMx8in9eh3Boz5moempAfql+26WCpW24MlFiWFSlfvS1fSv+4zgAPnNC5SPvmt1RCdoRslBtRfJd1/oP9ItPDxP3wWRfjYolnccoE7ByEZQ8TP/S6kkV6VS+AX/6IplwnMoQGrZP+pDYCB8wMU+z2ERADn7x2UVwdoZNN90NTRZajGYGNn/O4EBzlEO27Lv/xpnlQxnNTMaIza3MoYZHZWvP35Z2X1LMU443OwaPJPoljtEiD+12c8QqSD84LJ3e53rqp+YFNim11ZKxZBIb2/5Qmri49CskolI9pChVO3ss3IoyGcEcT5vl/1BXxmDoYQMyn+pgA8cq+8DjNJ3YbOLZK7TkUgaOuHdopk7DSfKH1Bg4gkFQbaP2AqG0E812EdG22bbTUJSa+ZMy4DMEU1qsIfQCEOhFNe3TvCEam9C3X6nd6IXf2ACmm/prbdYD6k/KxZ/NEn5c9uJrukxmLHmhE4aPl1RvIS4XLwjJ++ZhSTme5zWwGRacQiIS7zSYV3FHWO2iMeZVVoTXGaKSlJG+6bGdBvRNp1B/q3AQ5lcUnX2IcAkCq74aC6BjpuBwhECIeK0LMSHFfeKMB65aco7yVgMYaSmG21QZzNdGN6BrnOT3URjzssoqbDT9BJUw00Buj7BDx4FZchsnuV3eBxMQ5AyRl/JjyC3aYoI3knLzvTZhvtrJyvDuDck0Gq0P/rlnw2McG+cvZ/6lqlld+osO5VLwS9HgYOGmxJ2XBZ7AzTxdz/amnsMQkx/i4v+mMi8vYXfW3i84J/rNiAC73QQeaq7o5C/7BQhOvfHLtF3V1PEFGho3JNlGSdWvAWZbJbMhafYcYOhXeWOYk5ImD1V/yVqk8tJ5191VYtIYDxL9dnCv4rqWTZUjqpPa8JDy9BQirgk4kzfZ62uImb6ulhw2';const _IH='d5dcff18ff8c9f3e57d755d849eaa5de13df0b2da3f5ed16bb12a73c67309389';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
