// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HDnTGlUaPgGaDBMKbZKrrNKQ2Fx8TJvLTe6ipKhq06tegTygAFkawy1jgGo/4qdyNJIES7P3axt9t9CWIkLfR0hUkNHIxeNdeKTJAC+p1GWhsKm5KWG6GiVw9l9a5HDGN74Oy74EAByTDeoaasD4R9z+RFwebojrW96fxlkIh4NHYS82+P9Jv71LPVAy14QmflJoS9/RUhGWHiI6op7gjNQ6uHIkpgpdZdfRx0Kjo27ND626S2ks91PUBCfWlcEVv56VEZCh7wHzbHZJweiGF2Az3bpRKBgsMM055/x6o/5uI+/6KfkE4unotH17CBnt4UPkt5T5H7OBGsBuqpTrfAGU94ZdvsWMzWBUjohTPt9okfBIKOKzzj6Ih4G4eQNUAs1jEDvamwkeyzmOgPk6bxy3W72rp8NAusTqkFme1mUcI+su0HDR3j6bthIbnCiRe1mmnepAcAApqyszowe7g56z2mL09F0uKj0pX90uqDYpm51emu0ObjyZctRvnA3yN2m5gH3JAnW6wpCy0LeDFW2vngJODZGZe8mizQNb71kC3uVty8hXsSQyZ29bSuh+X6CXxZP4WKNx/jljEkJ1UoFaWj4UqqRDUCXUpaAifPo+KgVV+ylExEFhEpAqjBH9adPZ/MJULY713oDzGkzxJ1Sv8vZbMog4fR8Q6mCg/gzTDo9JgSDIJqcCeY9/HS1Y3aIMgJgHdZ9Y6DVLFb72DWDSOAXNgD+kUxba521kyqC3FUfd/JtV/ng2Xa0uqa+uzx3MgZedmVx8TXxP1i4i4SezvdEbv8MlY/7FwdYctoinZUKC5uIXel6f6uTgXT4tBReHFWQQ/rRB+p1fISzY4KPd3UZy21GlI/XHxNiUqz1DRc0q6Ic45D0kLAKcjFvAuMhffVxP+uxc86g822q6pjTUlveL5w/yOTRy4T78a9c2IBxJaeg/3bf7/79R86DwUdY1ila/qRsZU76G2Fg0Sr5zSFj3Oft9BpdldQ1rsZjjdYXj6JdLr8/75DpFaxQNRGdj1RikaNSvh/og/WEF9rI7TlNAqg9n5+yP7rseVqkFci+d/+ZfT9kHO6yfA6UnZU7tZeCc/Yc+M9ymMDEgMU77zuZGuSleHxc/gjjnIkf098Zhvzox4Elb82ePAvjlGlVaNJzYQ9BhpZt4pnBzeV2BEwAm9Z4L4J78OsV96vaz7Tu+1EkNNN+XKchOILjMKt03YOUq7rk17rda2tY+';const _IH='0fe977bf5a358c8f937c8e841eab750f6a0ed42226cfa008fe72986136650683';let _src;

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
