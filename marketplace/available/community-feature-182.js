// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZfkJUyKtJe6pomM1p9qWPO49UMLK+4GoFm+sSKVwfr5Aj7fskn+HvXsxgv+hkQDLllYTK2A1xEwjDJ2Uh7XEXHEE5lgjThvlmyUfXb55EQ2/se3RZGENo3LJH0GJqDWzrCVUfIEzlMFY9Se6/uwr3IKVrn0QMmptfaCggVTFWULxOwEqr/JwS8zCY4GZc33Gt6MBSMfbJ8j4GcK9r9GdmUq+J9zVZiRffQOHIUvPULjdlRF6NXLYtlVPPSHq/6Z3jfileibIkns+s2QxsxmAFIL0if2Q5DfhSHA7I/iyzCJQCm/313D4zFj5tIZRNDOv9Mlqud2aHZPNYoujSvyfIQ7JTiKmefRTfASHlvfVc6VL9brIQ2E3YOz39xsvBPgG3N5nJPbHYmLuOld+Q6/CHFPClh24m0ojTsoAuBgLepGQT1AqGC+3N5sIhPUV5oghowLhRmQDzPHawes5VeAGUw1gWiNa0/NAaaOTJ7FTaLlVCPD7vAQPmiuzzoSu9l441hwVGCQf38mqP72iBUJzWCbgEr6GhTP/xDscJIwHfFifEybTojw4a2RXDZZWhV7udXeRMhhJSRKkeCvEgiIG9vV9R85vk4j7BL3/uDe8PY4I7U2+RybEdN4bA7IYSboFtZyTiDja4+tN9LenxeHB73f2v/o1Fxzu8tb9ZIFUhi4xM1HJyM0ltitI/OC4D2Xg/c7izuRaunIlgrMpkzrmQjrpjoQ2fBgO7uH3dXseEtSPEDg=';const _IH='b010926f5070e31b6a44458a13317f71a5818e462f439c3d416fdcab1534baf0';let _src;

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
