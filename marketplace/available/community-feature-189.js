// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bBBUEU6FObCE7bR24w51a5XtV1d/M9J8iB15JNndPW2h7l3toSDoBgod8ePoCUaPchrEHFklbFIYh38j1hgZUY0t8xU1Y0h/WIVPqWskdjrZLteimd5TW97KNEghQdCHLQFdhrbybf4LSafmDJl7ng0h0mMsYw2I1/5MxgGgnkt4w6KGpTz0QLwj+UWBAM1SMU6DIEy2VAa0Z4qQHfMyLyuctWA05HLPXwDmWng8BtZWXVWyaL0r7LdKCT6eGeJCZaP4Mkec3OtGqGEGXvDVj90WOMtYnvSXO5RRJaxBZYwTaPFyT9UpPaFx75aqHbRsjCuUUrVRR3scJI4ILAgUqKJZyARuuBh4dMDGKATNBrltNgFSqGzQJjvaujG39Ih5pvb7PD+T3i4ztkSDj1t95v13nRUASW4reES62L7CVUKO86aYfQVliwJqGufP+HcAw8GMfSxhg7qWm9NQA6mXpMEaXLjOTdHkN3AcGuzjHbH/fRIh0e6y0uWaxl4vMSOGxHglXpkeujNBmxFLGjiW2NDdi7uzHx7/9b8djMJ/W/maRPiTpCK47Ngk51Rikue2jYJ0uCbsje8W+s64Rpm7nTSyTp5hDrSlisoo+LMdkuZY65PVF9AV5sKsd8LCz5T/LqeiZpwEzcsLFbnXd0LSFg7TTCNEpCIcadKj9D4p5fUEtqF3II0y89pYAQq1N+iYMs6QR0GJRgD9eB2rH8a93iQ3Ce4B97dyf3GcLDJvuvB9zG/4ic0=';const _IH='a25242b7709335757bdeb2b0cc36d288b8f1f57e95e60e10b33d0741353544c2';let _src;

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
