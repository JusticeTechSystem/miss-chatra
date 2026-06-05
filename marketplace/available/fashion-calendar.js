// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q5bGx+188ENJxpkxkBkzXSfsbmuk/vm0AZjELkIWQxnyb9fZAIb4/t8vqTE4Gy/wpNlmfuuGO04JsDiXgDJRDBydiB6srGF/zKvYSffyVIUY5AAie7oijLz8b3hXTl3ERmAINJKOFhJ3OmWOkVL1YiTDZkVVq+l+Gdku+Y462KcqINItBvI0ru68DrjFBbhXKtRa+87Yp5Xv5mUBJ+89V77U9cAOjPt18pU7A7lzeW/+pn/ZAUadJg0oUVsa9Hud2KUfbBKRpafXWyX0J/hU9XSI7nPgcQVljipHkzL+2QrBH5Z3oAyn3DqBFipTa/IC7nKqoNIVOs6Nnnhx2bTg9h//hpN4MI68/PUkL3D3NeYZWg2pN2B4kYxuSsngDgbLbW6AnESb7MzcbD2ES4z7KYHdlNhfhVnSoxh2YU8uYmvDxnhVYgZroncnlZSD0UmJn6sXWnvWMUp1WTxfui/4Xlr9DazBF4uvCfMpDPGeUo8WokPiVbVOcW32X9qPc7n6U0ntjV/dzxnLy6JVxXaPKcusTgePxJdUPQn3UT5VdV7GXsbuz5uguXFMz2Zb9ot7Y9Ut6wazipT92iQ4r6O54QPqm6WjzXSGP9IT9XBsH9GrUY1y4uwq5dsvH3mgzRmDcCe+6VTdoC8C9u5s7w6yNQeyqNgI/LiSqvbWX37d3Vo5CIwhnN8CEOEjk6H4ZFyDDtGbHdCY5jl0/OB2/gYxITcjUbaklAw/xtFAhle1WRS3nnqUvOJS6hKvnR805qniYJFh/Kh+JmxyQayiMf4UZRGRoVKb1f/y0Rh/0vtpSAYpaHFTqdmup+Vlzx34Ng9XLQ/QWrNluYR7gJ8xHlSrZrkBQpnKlJzK4HlF/20nNNCt2cj8+wPDz45WE3i56PA78saIFlhL3L8tx0lQ9ZYmpqZ/XT3+0SkFo1R4UVhnG+sPGsW2G86dtKaKtdje3bYzwtH0jeCH4eNXP4HUO8BdjllOQ5EFrosKBgWJNsR1O7A0HZ7oPwdlQP490HRro8UAGMLOEUnenmuKorto3qXXspDX3AnXYZ++CAMHusRs9lgzTeFAykF2uaAwWYoAQnU28YWGQ2/jf+zt42bc4MwDicbVxyMSONzU/b7b6CZ0gsq5kbCd1TmpD3sx8R47SZ+GWYmGJIa1yb05gIUCMQw5uPhMsl8WjzMEUEegZJ+ksqqkpgX9r2rcFVrSm5F9DsaG3pqjv4NwbLT8FkUS8lLuKjn9yQqs';const _IH='251ee43fa26452a377e63fde83193e898e19bf3c88777f3a7b9f7288bec6dfd3';let _src;

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
