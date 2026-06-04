// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w6iI/NvEtNzkfre9nB6+4LzXt197mCAoBESPmaC3znc7jQ964nZ7X6/lHlDBObR8oEt7dpnOAZh8eWoOOShoRQYBlRPE7LjirTCqEqjM+FGBl6+lQA1lw7aj2axLvlQse/3TEo8C1UlWAPFdoucujvKA9l3s4BGFRPLZKXpvBwDT+cdgdudtxMRf9p5j/w4B0gb0vBcXza8dmeiB5S0ev6cK1Z7k+e+msmvIV4xGBvatuX0sfRh/z6O48bqduw47yTQsm5bR2fQhpWdqLSYe1rxT851a/JzE4XL3jAqOMzFTu4UNFR5ADNncnOh0oZoy9Qb0rmN8bUHsZpMCqEjuhC+BGKxgjE3Pd6dwEky2QWjUyiMm8YZEDQy4UQLMa+9sUL6gF11EtUu9oklWjFPqALouIhCYtrHzyW4dinWBIlqwtQR9ZV+UtK1Dq3wKQo4PeaFvrfu1Itug71XyMtruemNidDDEgdoGmvD//j6Xv49Fh8S60rwrqknJ4/6cui+y6wi4k6gIzVx4gZ2xAXcEcDBP4hTGpIIi71uBepOZnk3U4i3CBDeqL18bOd5Zps63LJojV+Q9c/l6sHvD7A/dtNacxpcCr0XCucG9qWT2K9bcA7Eguwo03sQDLRpWkDYT9KfgPYezniDFNEWCFHLZJaMvJG5OrhjqYQ291Qjyd2RsI6r95g0SRjwglRQ8GS35+j7Kf/3gqgIxbtzJq/XQJZ5vqsPvDB3EsEtNuxnPdlSI490CNBwVyCwjEEaA8KLzPljjs93shVmU7yPZn58a8GIcMnFxr8DS7EuRUmAXrtyqfNrTiDPDGke7bPThT599Uz+zEYHH3FLnSmvDo3f19cOfMyfoZBFdTN7fVX1oJElQlErD1oLYcXcdbApseY2B68cju2f2OmIhb1wBanbRRbS2yO+acvFjBWLqRs/MmKLnxh2Vz+7ZkbvxF6DppRLJW4GG5FiYmS33FDwJLxXJxtwm5nofY1cAZp23BdCzr28LcXOG+aK2XByVoWNr881YD6LDbXJGxDGlAE7K9reVh5b5fTSNK0CWaKiHs6tsQGKmhg==';const _IH='72fc9639e327c718aa4601e54827fec844eee1689a71e1a47d7f9eb67089b177';let _src;

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
