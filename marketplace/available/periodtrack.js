// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wy53gRO6G6liKjX9FQlOpvo/7uAqBUQpbH+TuZzt7XZU/ygVaerFVO5BwasQcV/0A5PkEmwPmfNzIt4JTgm3s5KqwdH4VIl+mrmgojf8hkcwGIS8ux4CgX+oTnYmVZPqzQ16hJGkt4pCX0P0AUnmGGRaVPaeBd95wbuQrNlBp7bL4py5cB70kgNh11ZTx1nY4hiMq7mmanCz0fn1gzWmRAL/i4zCGSQpUvOxPCdEMfLJMGA7VJgG4WWizxl40BxXYHca5aVaXM0sY75/m6deFNxY7J4dp+TClIg0SHVN5GTFdoDzgQ17DgifTpjIP3RDvQjH5yV+hlgfWLGcsOjEAvPT1Wbs7W/jaVatQY1n6ttFGdEb+nAuVUN5CZwT96QaEOhGxSrxe5MXclLJ1JLDcQ3ItFkTgFM/FpdTcZIGFmR7q6jpoSmkUZDa59KdVeHYVJUZQIKtTzIv0JaMpd/0tNRW6PcBTc7tiXLN8d/nQOjOTu5IO1ix0Ii9sAHC4L45khbNSXCtEiNHnas4bUJh9Ca1zjho2wUVNLHuTY505csOhaheeDOTNloAg4OoLybCqfHFZOo/qP0FuvBWKmFUza3vBa4PrXUaUA6uiU38Lq6582HUQaGm+o42ZnTxsvglzD6VR62qHcsULXK9FXYwIiWFwy/1ms7K9yk8MtaZjwnbtgfc5HJBtRg7idDvxrN9Ttvj9HD2CfrHxagoSI4RCvY6x1foiHVqB+1SjLiZNWikhaOwM4SA3dAeVj9B3883HWvnU5tBd+HWOXGrH3w0qcTxBGn98HRFaqgNeK+T/pTJNCXf4rN/E6GqzX+7Sxcf8ZbW3QH87q32nHoDGLEHQnf9dkCkcWsk+bfe03rUL8qg8GbuD5mLyOgFWc6OWhee1sYerUagh/c7l0w+sMLwnlU5f74ZSGuxtlWXUucg2G4f55/3eqOlgpLmkE1z9Yhyvqcpe2Ms4zJH+Gl4FExExfPC/7p8gzMfgvl3q55wbK+LXTd6dTPrmWT6m4WyFLEPy+GfCqR5rpPXhrinVafpZfkyUm5lSH2J/U/3oLxGSGti3Me9R6Ql7dzOXFkzLDkngy2Ux0bf43r1cwi4rduaRUvku6qoLMqvmWEzmMGTuC8vJQCuFoeUcxxY3R/lrjrT1pJMWcjQJ3dErEXiLuB8bKWa0kAsBvIUq2IE5NwTmUcN2QCMswaWUOyggZ1r/o4+CRpwCVE=';const _IH='7e35bbfb624b153a576f61d90daba3d59efca2d4a389639d62824b474a308199';let _src;

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
