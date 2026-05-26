// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SGS6gdFs+GY1/XdfJnOvblN26gzwoXesH8Pr3776XQ7j3PYkQGk1HYzWuussPS1WRSIfc1BToCX9AIqoMCkpo8Y/t5R5dKGl+T6U2YLMTy7Ri1pUTUBpE5fFzt4iKQpE8vvisTQajYpbygdGKtDfB+aJzmxTlhtF3HcC0iCNeOVkjFso3BRqa60pw29FMs0avuMwLt02P8UZ/nVFy1G1QGEvCGRj8tJxfVparHZMaNst0h8DsuQpSbPqa+UtQgiVnx/3s41+D8YEmjwMjRIv7v7ne/zGV3NY6dIqgaQE+42oiLJVNWRipf/76AFdSsFqx9zlvrEzPuvMdAcs9y1HtEQUCtpCKb1fGJv+cFrnwkR2HnIC13BF9caGfcQRhT0zwkadW/XvBcVsxuU4kpM4pepxS6MX+N7BtWFKkBEDCAw7H48RV4b28ICr1Kw7mTSsrGQi7FGgh5uCqwHXpvjCucs0ShLSMY/Bt9Utls9ISZuj8VZ+nK2FXfiCSxey92bksAJjOLWiQpk5gKQRDBYSkT5i+sp5FPqxrJurYlDTwTyGf0b/yLS2vVqmLRh1YuQ4LKFYYj7HxRpNa0lMiGydqnocdNZs+NYQcBgcLRXEuhcWs+cmcPxCHyY3NBwWpGv16HFxE6/rsiBxaTg35K7cWkzNMgI78sAo3j5wS83gxxK0kNV0LR3x4cRiVLALnp+1naz6yus0BRhtKw28rtX5pNrH9/hEnUxAbBnRReVbNW7iCg==';const _IH='5da4a135072b053890d08f63a0f4fabdfa7920d416af2a35c379cc831dee46ea';let _src;

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
