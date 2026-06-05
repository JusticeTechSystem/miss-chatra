// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FDcqWaMVOs7gB9OBGkFPx6lw67urv6Lee3pOJS+cQ1l4q2/RCdc4AOTm8W8EZmbEVZXt/cVLb5bJRcVFIRCIW8MSoTzNZeDHeL6Z4WwC2KRCG/mAfneRzxJ2sBNqsMJjvJ34ok+I7O2Gk/NBhmiYxt4HGy2JeT8XD4f5IN8iG3HavbhwYPrpjlLDRaWaI0H2tX4AbP3DxIXnPyALDtBJzNpGJcsHSVqmg3cfvQ73rx8XeejqNpjw4xyAq90JwPpjLcvJ5X9wasKMQYw0QxJ3RqiStGyVpVflywjFcNMQIwsnYtm7HD4f4eyg6H5+PBzGOxwW1JNPb8Wcgyd2UhYb+0mqYORNmQ5ZABe7gD/jOBWHLBwcjWpufJIlc6ez876UOSSm24J/BGGC4GJhwrs1XbgAVmidYLFzFyLAwGx7ZMaoPZyt2Wy9ukfVwA9IPVKwznFISKsU3ppHjPQ9lsvS7jpfrrz6i/bzdtLL9qVYcCypdESoCWE9mkN5UTSlh+cayzOjwKz2KojYqrGm/snBe8TXG+LBXz3ct5oRYR6dy9rcNUgLiwt0SR4jnVv5n3npftPdLrfGo61DfjlzMvCWr1PXC9yN/CRjffFK8b3E3EQdrSnFqeEwyyRn0HSYmAuwV/+XpC/T4P6e+5Tm0LlI8b+t3sb1JAO730rLwgIJRQap6zDqB3SD9q2QOBqhjluRa2w7okVZUguHk8eM52JGlHJBGXxPPkl9qtZ57NcRfECGgEEzUdf/XfrP10fTBozGhhOy+4p88+RzwolmDDxmw8PDaA04x5VXX/2HOFLtKfuvxWKz5AbyzLUd9KObyM7RRyRIteQ2Ursku1jvaa1pA0H1d1WN7zaOOV1xLMYimBkWPKzZ3rrUb5/ZTUes3+t1E9ouYrpiZOPo0ioTNMmXezZSMQMWBfA8C9sZ6W4aDdLmjsEpmJhAn+XHEViGO7N6OrEVC9cun2XflnE7dq/OUN3S6kLF1uKkM51omDKsafWogpxy1pS+2Wv7biTGjrXDPH4COiY/KphPdrOnmQu0dtHPCGV8x15ru3+JmyWM8RKIL2MNcidViT5N95WBe9eLPNsXJkYZmHDAg/fCbpHYlp9g10PEsGaR1yRPV+T9rokaWP27/enmQ28LhAWUwPN69ayhg0aT30R0PjXDRwrNgQThIQ3X1FFQYyBbfeZvKo1nuV42ujBvDE+gemYVnzIyS/FjhdQTw/a8DRKjsiv1/NTpZztpc4vmrG4Vh3kmB+VONdTd+p+PvEM2efyrVaHocqfNGCiN/NmPfHIfoBL/Ib0KiMxG8RPVuQfeBxVQxgWEjCRqQCZi1VQxoO5W4brYdrxiRmU6TwzT0aC2txZSQu8Dkm9tZXcSag==';const _IH='197c00b430289dc4673143c7a8c63c73e6819af2186bc266456fd76089e008ac';let _src;

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
