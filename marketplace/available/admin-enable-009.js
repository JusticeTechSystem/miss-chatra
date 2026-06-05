// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BQgPwGljTB/1mMGw9Iu3kQefSMWrTLaLMP2/h+6ELQGqnvGqgyI6QqpTU33EthMpAizGw4KbP0tjvyod2dnFHkcV37oUR8grbEb9jdeMls5C+HWTU+2HICjUMveNW+lCfgKUR0mRo26loR4e3uc0WqlxLwxqS4v5Lpv2ERFF84v/wp2YnAWDcWcylOma+0PkGmGy8JGZ1xK3HXjrdc8f9FS8tm+RktBE6w9p9ms9Yltr9IFj/noL3K+oB0tPQHNqsfI03FDPRODvi7drmnQB6ebjKoEFZ1B4K92e9YECZX6uMuB5kb1DIh6UqwXcz+WRozSJdRTD4FNbZH4yUkK/Ej9fOfApEnhmuKHI6UJSP4hzplivhRC7IcgoCYdfhO8DqzFRfOO3aGs8dCDZz84b3mbvkoUGUgrtiRQl23XnrZowpRMDl5aiAKGTptv5Ywge7BxEWccZ47LSBe5Ymk6W40RmEm8MpkT+8gPG6t5E+phwtArTrbenKCvYvSwoYCIoH9O2/Lr1OGCqZpD7fGK5soYKv1xlR1VTwIY8+Mg3E+zuCLhTr+E4afYS+o7SrP5zuz5lNNVSvSRb1b10pKayukN1LM2KheKsRU3nMZz71vCpCtIJskvWOk6+rNgRhYTw6ZlTPBRxGO2KaO0b0gCSJht+3WPo0vqbk6ZGzusNnEYuZtANX5K+mGVTPiwpsFW7t/qWc9zZSkSgJceghE6+KEqbuuDgm6oSl9KCs10ZS/pD+NnUi59SRbz4sw3ZpEeyB/ulMrCWWmLjHkAzETfX9F2q0aIOKc6F73Vc2psG7r0pmFoBXKEwBW2eqx3h9MmLl9+Bj1n6bEAIolqw4C6yDPSVRF9IwD3alT98Ati7/JUNsw0h76sFAKf/3OjBqC8c+Tg/B3EOk1pXRAuqSA0mmVQJhvpc72IrCvfujFHimzr8eLR3GjDnsDlzNx5f5BJTaKO8bi+RcfOqxZkzIfyb8nqLx0jhEldzs+w8AQtrH4VuTjAT5VU+yV0=';const _IH='84481aa4c38da421c05ddbc34de25b2233b7803da2b4c23ccd52279a64f65d18';let _src;

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
