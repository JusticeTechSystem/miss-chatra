// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/ma+TOOnrghYo7L/qA1IoKR18if7myyGfZlyc43LTZvVqfjJLl080cVGlL1L1FXYtEqrU97Rnh7NUexTI5G9KwVcAIeiORIdhHVym/5YHyvlbwGNSgFFgISk3/xTzSITGCwMdxMJA4MOgBzl0rHOzHKrltP0gJ7bjy7BUex6hoImIWHSMdK1irFFXzVb9Fs/w+ngeuSnC7vgS35MDz+HqEwyb9pr4KjiXpuG7IbVgBBDEzBpDjasmfpgm04aRUvY5+FF6RlDkWC2mUMFliFae128BcDboUyip+N5QZrThnRorNue2QFGumWXVg9lPUtlmQB5T7QYjCTxKRhfizFW+w4eMj1HshxVD43oub5wARkK2E6BbuiexZYS2zO6fr7xZ4HMkdqoNWSoLIAy5TzQPa0d4YY5//seGlZJdw3tsOQsIAgkrciexvMLDAfICVgvJCMNlujku21LT9ZuNS3oMZajPaADPdBxbhT7o54aHZdlh3cl2OaN3/5D6XONdHnbIVL7j/7uBOyKGMc3GPpDseUJ7dGxl3kyTyHTirHoS7PtIi3TT024cjpEPF5TpCMd+G1zFQtd+9/gCLmhxuiVjDcZinRWIqD25q9bCIJwJwxZdAmOMSLEMFGZxxLtgQJXIBk0JiXfQNmUdgSaaVrJanOR/eXrNXXP3OZCDu4U2IFuqwhv+aj2ZxqccK0KYBpHZQ==';const _IH='0fe1e13f9aec27757224861eef33329a24ef2435a099b5760ee33451b2533613';let _src;

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
