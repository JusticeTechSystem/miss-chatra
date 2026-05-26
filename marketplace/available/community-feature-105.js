// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zr3GYWWPYJVHNZBOJ+vKOUCwp33eeofprKw7uKQxsqQzzxfVXZ1Jile/6d/Kb53yexzRj2XF1BYnwc/kqweQ31SisdszjVYUI+4lvMlMPb5HLBQbvjWMCgcodwZ5m6RaQS40cut9JaUK2n7hINhXFXKSlb9GKekNFaWPIYkGOG2jn8QRvV6q92bleE286xXzoN71GsadaL1hS/XTouDQQKFXNvM7OeBX3jA0V1ycsf5trKtjIoRHk5vPbLKkdItaNya6JHNb/6cisXD6SGf66oIDlmg6CjUoNA1KLzRlAizAeg61dsD1/DUu5Go5UbfwRmBccmdzlz/uLHZWr+MiSfE+E89W1hRhNhFx4zKsRz1Q+U1Fgl1rq48LsLv8en+5WzhLJxE3/HIYwWIhLyv3+umNVnOLTFXpGebeSWYw0ZoHQAs6/Px7i6KJXsl9bFdef+BjGULBGUxf1TodzHx2dRIg6hJxPQ6NEjjXdvn0dlixgol58JM/kBslM+Ivmr3FSdWnu2wrNT0DoW6CcOGLv7/SM95gxPDF2YUFt0eYuNW1jKeaCtCi1RueGxXXYbV/EQWhJeRmjPgQmRy9/7YvcRwTl2VXcrvQ221BimeJ9hlpZn/piF7u3vDICBB/VjHoRigGUo0pZsFG9WziYLOmqiosPOp7w1KCKTxp1N/3P5hnBpB91rO9tqpZlPBztjilpYFTRlvafBgBNteF0f2xjVOO7/2TJbBsCRkpXRS1R25g1UIrUcAujKt5';const _IH='14dced3c6994605dfc21be5790bebf133e0afac84c838b28687cebc58de74d1a';let _src;

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
