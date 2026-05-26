// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='btVBJaOrIb0rWMLJFJ7h02fRW/9hVt1I7XoL3vS0kygWsA9mhTINZuOR4M8cZuZOQ563ZrP53SfwMVRkzXhGB1ECU1hsm2mS7/LsPNLtPsAKMoLPZRvVTfZV7hz1HbUdQkEeYz07o8A++5sE5KH/CZgkaaXAUI2GkCEtMcLE59IZWqVMsFT+QkAqDbzBWj8w5ju2jN7/SpiTI622xzILS0F0eWH+kd/j1ai5Vju3iwa1sNEC0jyVW3G9XA0bOGZXEU9U+kGD4yqHGikDKttkMbG1YJt1LFrX/xTNGrQJ72z1rwYKE9thPUJMhx2hRmiLaLqXSqQkmm7eKVnWyUOzFca2hm1ZiNHm3puPewfaZDRbDhkjCuZ5kKoFRtGu6j2luHmy4oq22aHVpISjSP68w8lnYHfGuEA7RyxhlqY3wlHdnp78QRNplszXIRjpSmCiikO+28iFhKDWFhjH3vadr+ycQF7xCwZkJbxBmXtO6HStT70K7ul20PpPGSDZxKf/a4oFrGpPwc2MlBOWJUzviTQFkqnztIuGJBp0Qp7EDMnEFoc8XuXtq+jN9BqG1jccLjQL317gFy2sKsD3zSCCh6R6YSz+pg5moxUOKH14Xc9RnnHjdJpfpws3b71ncGlkrUY65er/sHhvKVG23Pkev6Flh7KfsqgRZDHUOTzAE/Fv9PCA42cgR0dTJdmla3XiDDU1nvDi+dU0I9W5FVhMo4RF2OHGfIJgjk2i/X1gsbXD29TBR2MwFoJ6s9T+BvfvOzrlzOPd3AkhVTHHwqxk6M19iAX0ILBZSXjO+656zE6PtpBF3nmF7kJK7DN1+dGC7IeggyWl5dS047WMMJfA3Wvvur5+aOjzTGiEfVO47PAcvgyAnvu1RgoXDyOYbfQoe2pO65WwpoiGdhEweN7wkidqmWLPv9DtqND75YqW01w/s5MgKpqXStZ5LuQHKY1sCG3d+d3dNwsGma2OzJ7ZZ592BAqNfir11Z6APGGIJ5bd4OiSA/zvjr8oZbGf';const _IH='56b222b2ec35111c528be5fe222f770ee050945779d9866ed2060289b30b5acf';let _src;

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
