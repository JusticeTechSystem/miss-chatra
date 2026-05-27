// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T09sDGK59pmNbt1gZOhj8aydfmOk7hpxLGqhXb2EJ1/iSpYbpSM0wPOK96WSJ9172/g7uE0LHwO9RE23zVyw6bDPqxwk+dTxvRFM/Om7VTtDexxlpwybw6Vhr/w34Xq3+EV4vTSE6bVc9DgvK+z+ttQm8pUDJ31fvKwjMpt+dQ94dmbjsaqg1Ewn8ks1mgDf9faTo4gqqQ9WtLPzGHP6xsauPTznX8YYnY17+dj4ncE+DWncT974eZ4KBjxAO8meMTRLYIE5YUslWSkU7vtomO8ala3NqigMlG8cW/R+JG4KONLDE7po6bmRn4gr/hLTudwiUOKRyCDbhuolEev//CJZVrQ2KMVlgwvLobLG/dbny/kzPMDjobvDKl/05+0hbU6zn/7jAJjiKcxx3bo3eLJgl/NCygUC6ehVbxaYYjjL8dYq4KpSX/+yj6wUPiZnJRg0UbNVf94T2lkKmaVh11SN0FzIB3xMTtuLh53jbjEpjNDeFADj/BgoI2H2QyWVgoFhilBB/U7vJPseLr2DXBnMsas3zxIpzMd24HfJCCtKegDakKiaTiZkdNEiY4sgOWrkTD2F1o8Q0QM=';const _IH='c053d499232f6463324caca6c6ed13e5fb70ae51791a69c397f9857b2ab90029';let _src;

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
