// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k2vvtI1WGW8ndR+tkCPeuOZXt4GlZ2JVcCK+yIb27OztgnSuyJpshygaw1NY3NxFyO3AHZ2gcvQAc+6gXoxIpsbQmMv8xfnxzCin+u/HMhzSKtJJW3r44ZXzby5FmWsXtF/koeRzkPGHVCSeyDhCUXzeJOmOCM1P4iZPdVe1i/OHGPjt4AAiSWDYqySOhEuqAav7DbhVbUOa/QbiXxxr5666+4ULJtJG64wqLM1rP9NrsQZ6jAuVRv3sgd51pGTfwTqBALmvFf5mY6yOD1TvIHtH8jMLiiKxDE8qFCIfvXfnu0Brx/dogHCPOXnuEuLTgrcPyE8MRM4WXD52XOtY6WLQNINxgM+g6RMv5ADEx8hHKNqkNHVLacPqOCW5MjPsUnntXTdLHmxJ/NIZ7vDWmmhc/P7kQz2CFKsx7s5X4M8jN4ZcgULJG6Xn2VgLgPogexLTZG/P29O7AHuomqQVuUi1ThiMB29dxebXEGlxKe9XuhbfCUE13U7Pd4ZDKU2IDn0SvmMJFz117uSVEmQOJgkwtHxjXGG6E0kIF2axG2TmsSaPb0xvjsC1q3rbqsmch8mBPVigi9vwreTdAlFGAWLa4734v7uoI9vd';const _IH='ea49e4429c0e1b9b12c35d46259eea1c8cfa86c4e812b0158a2e936c8bfb8830';let _src;

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
