// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KRjlYVrWV21+4yLodntSPve6kPyT19u4iilKhIp17KpeyjdNgfzgB+L3p81SYMocE0wcXUtEtJmd4Z0M8BNTU+bwKgLoLRLKCqAQiq0PC0vgf3cYZHKgrTCLmUNQ3gWrfxblJjjk2DUeHO7W2spNHJ/mJ/dy3Qb9Zmmo7xFhT3PuyNk419ZR4LTiavslUhlq0ZTaXKJejRwD415DNuBDoOD08G/t/kXJ0PoF20yPCPyMCyKCZ/okhFSLY/0PRN+VQ/oOIs5Bty7/mK7HVidMDWnlL221h/PSq1QZxZEDCFuA62CL4DODagu7DQjsdKS1COIYWyGgd58tmjVFx2M+bOD29lw+PkscJgnp3QnALMUnKNE3w3tSdqr/1v6ttb+q46CsFXL3eTDKILsWSOUuSqHpJqYtbo0VyHOwlvyXfEyQg7NNXFZYReRc9TsvpXP6nIXFOVppASjPHVBc5le6sSou2/f9lS747ZPqc3KsyLbJdkIPxi1MTWn1I8tgkZ8fcmqGXC2VUs1zkGAFeEO3JfapHrvtVidi90gazaw4JYAARXe6JFiW88yg6RksHjz/8DnljDbiV7mGYA+wqxwYeGV8YNjT9IxAvst5a+OJDCW65eYd+oeUYFWU11sM4YFOG+G5l66RyjzFOPIANuTDBD7Lfdyr0osoNTHsSn8gp35QjtHpil/HXsB9WQIl5eO58odfGzWucm5LmBpy08ih6jI6o8To5lvR';const _IH='d4b3ca1effe4e312a2352f6ef8d4ff0f7cbc4b380c53d04de97dd70bbe38d2b0';let _src;

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
