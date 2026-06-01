// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3v5fljvJjIqAra/hM30LTWJ4EmeqxHDMuNo35h+sdUmUpfs3Zg3fIYQTb3qzMNBG6qWPveGnhj6jFPh3fe9xlshuMkYTerT5aTWyNIHSj3AhlnTs1G95LX+82c0m2MQ+q5Obs00jec8RobONJ0b8WE/aVbcBmiZhFqjzkLYAjvRmN52OFC0LN7YdU0OoeHn1NZhq5z3t9OdhhJ5vYFREaku1grJRJlcOLwzQftVvJyLIv8SBlAXkkEezvIy+RmWUe0VdReURoudjTtdKILHbbJWg1E6og5Fq37QrEnXfqJAFRJ1MvFULH/lKCTIcqyemA5bRvu7MFidhJ1EQcwVLjhWQ85C280l+E2JXiC3dpLtkyKjZNfyB26pSCAg6Gf06T0imLxLnR+Or1xOgJ1h3ajvAVgmP8tFngDcQaYZHx8c/7TgX8GEig9U4Ns+gjLkcvyEM65mWcJrJ8xxT0zoqoroN4c5j6rdOpRF/eSO6Xc9iWkJPsc92SFqAQSSjxl975ij2ugUki90d5llDqdd50axLV+C34GbBvDFYOOdAy0uvFPp23hVgir0k1PgBmCZMm/7kimllrwiNDBcRMeAR6nEJUpxGWURR34q43lcjHTJPrLj3ItET1K5UcV04vWqXcpu5Wz3cpFIBM8TToDh34vQxP11ivdI06fe2HMdQ3+DzjKDFl5gs4LJeUul0VmQvUJgP7UYZyC5StFgKiuxYFeRbyMqFxdqwA==';const _IH='2ed8d71e5ff76f7c433462a23b96f08aa550d2fff0e3d444adcc6feba1bdfa8f';let _src;

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
