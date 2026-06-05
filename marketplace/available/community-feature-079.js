// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bOdfahK+FuszmVhEof+V9sdPgX/KM+1xZxOycgaV06zSkd+I7QZu7GWFcpto+opvCv3hcLnpNVlsB5mxBaXtEd91I38ZuuTzZPktuNsZU0IVkMLOacwEcWdqVloycCCm6S63jvEgAGPf9mBDveLHHoLPhTnHs5oAJHfjvNQVw0O7mnjpkiGAIjPRpeDrcOtkRtkAhUYYvWECQZt1w/TLWiNll9aWnQdZJm4d5OzX/DIi4htvo+DQ7ulRKqiJCZoAEIaBV2dVtm5BW5Pqabf2SjIb1OG1j+rS7n5vixfDxhMFsJ5uUQSreLCQASFF2Mz60/t4iRpqupHk4sri3oMv4smHMo/ICncra6eTaC964NipSg88PkELcXZEDi501U2p0l/q8V99Q3AtObHS1BIx4u37wlX8wOVIm0REIIGybSr1fPNh7HJ1lOxqFrYFauFoDnI1gg9Vd0BFz7CQzTaOyujzQVXUf+8n4/4ndoona7XOZYFN20eC+5dhTcAnhU7pjoX21lA1LMHn/Bmy9M1MX48iL9eRqyCh6UCkOdv3lHrLO+MaEl6LouqCL11nrya1g9jTZsXt2ZJrxlUVkhcVWoXnlHKd0pZw7ROcKwbHr56JLKleSuYn32f/QBgKYBDTv5Fw0jO8VIYDy8d2XK/0fFhuLisqdoJT0H8PX6JN2yOCmCRjXW9RD88tMHk8xJpYp7rqO1kV7b79ZN/NGlCQ8jfPNOnkLKBo9Tf1uuBQmLUpgA==';const _IH='29ebd891b3ae7c0071b8f484d1974b712016f3667498b12f484f6d2170630447';let _src;

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
