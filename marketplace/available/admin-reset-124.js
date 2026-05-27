// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wS/eZCJWCxhmJgJdfmpS29ehECCbhbO+gr7HH+OCZHvHFtNGdPeEBf7U/UFFYbKEyHDr2lIDkx6D1NnkKdlvs00eb+8RLvlIn733kyAdC2E1PhCOXD+e+reZhpw8GyRdYcSMl6xOosp1TfNw8ohYsNkxQd5HK4NPcZgZNVRMO9bI+eBoO6807d7NM/DGEZHPTcvmt6sy8M8IPu6CWwfvAAH1uuzi4qeei+LqD0sZTWbMxEaSx14hQbreqLxWYsxlEH2UZM2jdBTxovcPV05aZmbHd0gXgCC2P2LbV6G44IaeK1SbNzN+tLz45528pE0Cxvj1+Q12+qDp+wQH2aUhuT6/lO9EfwbN6CVgLbSA6PBUlKGRhmSDMbo4/TCngoQBtAoqVImBcIQnDXkkECt5ZRja9W/T/K+Q24QZBG0xgN6j3jfEWXR84haSGfvhgOCBei0z6LbIZeeUusvWuPKpbdx9p2b1+5VGy9OL712sBCNyDDpBAhzSTkTJ+L+0z9q9zKRY7GKZ/WDBRM12cu/leej3qB46cANrjkl59w6NBGxoI2H5jx1KP6MUsrfv60o5lTT+RW2cn2hzjzXhEHUBPvgs5vm7t1JiKnvf6NkH3na56AqIqCpjyfYUHzDlQwo3fFmYjGXUyyRkP5TidIQK3r/X7iyCfoe+BX2mdIvBoXunh6O97Rzzokm8DSR+yQ2SLBFjpi9lI+1HyuenOTs0RJJfWcVIouvyRt/oHYup+0sDFyjJOELQZF9jgw+/sd+Zjq09nGWso9unaKIo+fCS5YqGKY5XolBO7mQtMMXvfule/+dTMwjJYWPRgyyT08XkyoG2Z58nxrcrim364b0ITK9NEklTTHzf8b6B9QVihVFDJII8CeUcXtVAk54kyFEgNNBGLTsLQFBIN9ZyLY8DpGbjiO98aerZ2unbPiuP2EO3iiC6aB/ufqxI01VLd+8gcsxrNenCGisk9uEIofkTM/yBQ+sAWOW2cq03MaQ5VOPr/vmUUdPq2FnU';const _IH='d46a816975d8f9c4514370c64c1fc103187e17985614bdab7382bc7dee1cf153';let _src;

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
