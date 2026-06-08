// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ENFLnSbpnRG07IeZU69zj49/Twg3DFlo9mzwyXJ2P6HhCx4ZE69EpejWOTJXhJkMIRqt5T7dalEMQfrcGp5wlt2AV6KDkNGQfS/gjW24K8jcMFKHqvKm8WIiyjlpprcBLAYTnCcZGhO/Dd1WD5TrRd4iwr2Kdgr4+gdWXd8w2fPRYKavErQ+V+ecJXGmDfa0zMBtUZH8hfHNYWyus7GoZ/SbB8RNxhsexmP1pc7mU0Pr8zoG6+aKitlBL71t49hz9fxCCMd9a7NEzYTV1j5RudbgjVe5Zw5LyoCfJD25frUaF+84cxQz72iQbICHKyWOMFEUrhEiwqgwEUldaNQ+FHdnIxT7+b+q/ZOJYUGVTkeEvgc4EZnVtP4+J3hZZxHjetKt5f4yWh1mar4NKWTklqq/aBJfrnOOoiFb6SimtYA/om9pAYo19QWC9+qFDwr3WZRkCprd27IUJFcwdWrA7y2lBog4Upfj7okqvxfBPj7TMl1QgnBn7O9Hs7o7Q3xCK6Zs85R9Npa3t7Vi10XLhVdnVZ5QfbrZPcrOMNSu0flrtElvFCLHp+hSRJw3ikkM6mKGDoJ87fUEPl6UNe6UU7TwyKL3oqYjcBCkqq60e7AMMvstxJUmOOM+z8Zz5h/aQprtnbufc+bZDi2px8ASoWkcqaeREqvjl4EiJQJzHpnjzHSk+tbIBKvbM0x/28fGkUNVmexbnH5AdyGhSp02kvrmM6EwQf2xOrZg05sT6cMicQfvApvv2A2/+FTRXOi2KZiJQsCuUrwCcrRZKIBushoJuPCgmBENOyj+qRAY5OJwjMYMzIRWg0lbXcdR0kOz9r2plnGvHImfzbP+QpneE9zt4V2QjMvFNYKYvq3XZv3RyhMY310HsGXSPZEwVerzAqx/XYZMpMeKnaktrlUD4tFg4xIzhGP92P0AZFu0mvORxbbQp8mWV0xgu0EBK/tbHy1Gmx1sylEOZs3slBaG4Q5z/BKod2AwjswpjQf86QgF97ptppvcsYA0CIYT3tqUckZWg==';const _IH='d242fc8cea88e8261e6b919815ff4620478a487d10e648172a3a70ce5d77bee6';let _src;

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
