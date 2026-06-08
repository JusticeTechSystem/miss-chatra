// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dE4hE2COqHWGUlDhyV5da89y4XqjEmWmQ5+z7V4QpVjHBoKIKyQPnVOYBG5O5ltGHeUbSYwY/E6ODBICaDtgeD7223YWP3K/QScZhsMSZh4q26IZuZ8nkqm/UAc5Xy6PMCvofsJkBh1sBo4AUbSjIkctI4G+EAap2Ka5G4iDlxs0e4FBtZPke/ToYaOLzebSwOAoyw0nEr0AhvnYbecq/0VTUPcIK4ek+iSbWIotN8uJWWm25DBxMYocoFgBiAV9dw6UQWx04BgmBqtFOB9PmozneHDjRFGe8rQe7L6r4aQqq+hPPvTvNHRKYTWgArShqpNGy1hQqH82pHzFgHyTXPN/cbc51NC+BZLc0SA7rnZd+ZvxvyeJtBiNJ8ZV9ZKH0Crb5Xz110ewP/IW0PZdygCWFjKD8U2KpG/q3furs60vOpmGy4KUgeQembpSMKwwzFdF0QP3BvJ8pcSiF5NcswS2z4M3nq41v+zOPqS6cP509iYvhmF2WLzeE6/XNdAedbZUXVSu9eHoLDKb6Aa/IWRXRY19dPi4w4x5Zl7E3DXcwmW1AkPZ/uId4934BepnMw6WkP+k/CtAF26CRxXmqkjVlZXsr/g3bubmf98ShHkgAygNw0lyQC7MwgPnVs21s7gfgvqlyiseeoShdQHveJDLAfilIHKYpS842C/+0TTfsjH1kgeIYhv8G9Z6+Y6mmXdzYak/ooYz0cUezuda4wqB9o0byF0=';const _IH='b3afd99a057a8adfc4e001808fba5fb6297c6fa81c7fe7321733c227658d157b';let _src;

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
