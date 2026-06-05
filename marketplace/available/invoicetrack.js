// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6z2LW3FZb4VX2WJtB0BKvjnMYe5T1kc9kb//pNFdbDNdClzd/MOG14VSVM/OAO0J0GzvbkB+Y62vtaFi6O0vzS3s2CGjALyZ2yXCnarwW/D7mjAJWr5LGdKGXHNFMSrNNBLYx8SfgUfj0J+IXOlxntdQyXHu9hs8XAu9GFIdp2tY75Rhk/rNI2crLna3YcOlx3aEwOboBrlu+PTWsNYZA1k/7xehM4Xbj3mtMeg/ZBf+grZxWvrgvZDCocjTPsR4MTAQ6IHfrHU5NQitgk4//MEbePZhnoTdZdvEzclu0IdFcmXhDB6bqaXXaCHd2rlA1Nf9ial1+OuJ5vbaIFUqnPGqIAAgfu/Q+YPKSSCYs+ZiP6SwBsq+QD1t13wNXTrDYZpoOrbdcNAKFVIeUjrfJT1vMmM9p+oYmO8OiKCVem34IFMM9o5ZTD2gykRJWfQ9QkuaECroUr3ZE58BtRaoLCmQUlgA4MzG5dp64Q9qhdKFqnPvxFZTn2t/T+9+n0YIqXKg0483gs9vqhv8ywa6ZWv2fBBk7M/aFQQqyWorsrZNR396WLT2r1kM5wf6aOtKBbo4FOA+Q8k+WKQaNSTcQZR/HsWVyUnVGf0kAuGw31p6WU/g9DvWWCWEFyuW+uxGF4Gz1qrHIa5DYBUM3rinx7nts51GUB04hxZjAvxQU6CHFEXpV5T3mb0ERV60J1xBDi2UzFJlOVRqEn5t5usaF1ag2sxoYgi1qm+X4gkVfyYe1uumhVETB3uR0hRPejqryC7DfgL81oicesKzpbG+KoRfjHng/esJafisAERM2+kfvCFzCzMD/2GqLgtoKJA3yUnLhSx40tNBf27O+wMoRE1DymdJReZdx9exijSvS4BZGc45OIZQqAPSVPGT4SQlLLWn5qfV/quW+YPAtvfiyzEM8udiuvlwdcnfxek+v3POZhM2mFglqGYsY8Im+zCWJ5Wa0QYlQToDMNNf9JK8gWHZ/kfnD+0unKb4pAgfBbgcdctC15Bt3qIY9CFzirWHS/VgGeEAzkcUo2SqKn8WsV5UK1zqpUzSZn+doojY5i+1mCLuzJsVxc9p6Ys0NzpRaT1mKy6ARW+Z7zTWQbW3iKNbQI5LPTkVvMXK4u9mHuoMJoN3MQm2U/+hbQzD2IYFr5glZ4eVo1smnethxCagkqrIf0KSmLM8JXQ02acXXW84VH6mFmHQoXaviltb898Sh0TOoYE43zCTHD8NyQ==';const _IH='721b2b4ae1cbfbf00c0a2c76f36c16d11490fefcee42305cc32b2ec8eead3713';let _src;

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
