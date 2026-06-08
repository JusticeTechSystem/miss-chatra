// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h0zeWUcK5paGEXE1PpnHaXQceQBFbZtIIRvrGlSI6cCIdoafV/YkHLsfsKShFyLrJPRkiXnIJdRads2YthFhUiN/W2mecc8zdSCFGQNOMy3qnMWC60zI0G/ZEWc3ckUxm19lLrfAAyVnXNShEA6OCj14g9O/GtkUkWNboUGBf7CKUr7RAQCZljX/HTlLeX5krDzCyAJHed58Zh8BumuW2W3aK5nnFaTD5FawZWdJb1dD6PsuGPm9B7DaJ6zxN99C4OULtRyPMAuyErF2SeXJqyuF4Ti1gQZBfVSTT0h9mMsWZ1i2B4G4Qqzmk8uHhxMA8GLsQ6Hxn/bOoTmJPAUsKsY4yMc85C/L/zP4Df5f1jrKOvKaKeYPIpO+nMpxEZG3obvaWNSoKKT6E1Ckg6eRaVMOrgzysaWUIYggwDCjUOFQW2UCMli9si3c6qSGn2w5sKH4LVTqYPXufxhx9AqoMC4JkfQkw6V9LFoEEL5m7s1tZdVGCCQ4P6jNbqB6F7gFINBm8TrRpqtZbxkydzVv01c6u4H8roL3kh/KmiraL/qu+2fj77EHJq0Lx+bD3+mIMQ6mSymYrJ/ww20sp5JW4F5/KseWCpB2rSkx3d9gPntcMC0iRq9JFElb6O2Ns2AEhm0RurFC0XimgNoZSFAlUFN9clJ+b6h6D1dwbrwjC5WNkEXo1tnO4lJKxPqwtuMuTiD5d2qLBkF15cz/2eEdG+VQm9dhePhLdw==';const _IH='4ef5b56ffe09103190337d188b35e1d0a4a594d00eab8500ac4e1885ce67c9e7';let _src;

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
