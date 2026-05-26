// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qbhs917bUmjimZ9OetIP0nsNPuqJy1/GHeNZviHM1qxGxZzWB2LwUNA7GTfMGChHviis1SJqIFQ/oBmUXGJP+vVR1K9qEtt5Uzyss9HE3At2W1PogvPfvMLrHiDOQxLwbsJ/jlU4GNjvQuJW5syrnIni4vk5wHbh2O5fqT720/DU1XfZEGPgXb6zNgwdpyoNzVsjz0k2YKDGIOlTRWI6gO+2GnffnHltD1HRUCsXtK4CTB390pAunewOK3mtCgK+kcIzXtbGhAJrolmybz18qnbxf4gGGezzXQDOV+Sjr19ez9WGtNDcSs9AIoxc3pntAYyyxR1h0Q7/BSnwzfWcJQtFUJuMM8eT1aBu07RDDDoT+cK61SaxOYowHFhBEMYzjCz07kRoKiriJcQnAzPPzsVPHc+dg6d2fUSG7o793agRL/HprSm4OVQ+nssV3g7PJPbN9nK3bvwLNTNu2xAFbaJebWD1Sy0McEjVmAOYcDjV8cZrITTbHCVbsZtrVD2kD/Ii1KbwEtyr4B2yGIZ9qJwPvWJ/qhRbnDKb3Rcnp98YV5YrP5777gAYAjIsO/nRaJ91CjP+AeCQjAkHgu+1fmjawapw5hwlnba8rAcC429xOH/K2b+AFFlZnGLpCtcLjgGwSi3s4CEm6n7NoKk7BU4YgXklPesvT4wBtSYi/271HsU7WccboqBlI7XCO4NN5w/NQVjMMqcjbzeqHP5F6easEMqycrN8oUo/0tMwm0SxoOLhjdjrjnnr8oX4G/42/R9JzOiI9OCyHm8AHxkZRw/rtVzarGm6GbwPTlCzROL2N9jkPVCzX449cu7/ea+9w2tGuj52Ys32FjpbtaQwgmQSrn1sztpNKlVe1yvuxYHJifIycYv0eVGsY+ScK4iLOfsJ4hPtwA3u6SGyC9HAxYoDa37qBD9LJP79bgXC0ERPpsExEyvDf4KjTb0TbQrn/qS5ejjQis2hDu3IJ4/ElkpAI9ZQ3NBOnWt5DrWkpIUvqMgdk0C+Dsq4KJCt+KNV2QDv3hx21AmcAEvzyUR+zuAL';const _IH='fa5ec22573d8fdf6dd9061cf0af5465b6eacf00dfc89e53a8b799d1241318d75';let _src;

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
