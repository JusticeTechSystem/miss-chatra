// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z3MFcCeU5x8KAoVTPAMEFjP3wAEObc6X4Y0mQSgD91mq7OMM3cvUdqVlHiM9PyXQuo0ttCPyv0tRnIjHz4NwozwwSc2JPs35vbH/m7kf4PprJTVMkyBsTeTNE81UHR2qReGRQwlS61gaOa5bzLBpvGuRjZdmzM35Kgp2DscKoZ5Z3vT4ZZO/haSsDG0UtLw0o93tXJREAV3xHjnfGDdfCVFwEcLhfU/qd1Q6yIgv83g2xmOW/OPEN6NzsFIH6Th+HBz2N5zDiT9zGH8+mxyXXWvUEFcdepznLK7Oz8hgYl+ELSR1SVbVUuIzpkFRViWE/JBFEyookAObkwg+yyc7i4beAp9Ykkcs1CR935BBJg47KrxnsEADxhZXVqPXRD2PHUa3YUGfptMJTNWF8YW1MPInaB3B0FYzaFX838IkaiXtU+oz3cQoFKC+T1sB7JZOIMHZKSRB4UGo5/NPgPawtKDuRCWMcl5uvNXyyh7ah2dRcDgIOjNa9V4faFCgp51QSho6gM0p3F1t5r5v/2LZITkqdx7IKjnDMTh7eLPVUIFRX/pKZyentnvvGX+eikJZHgKNcWrOKHfPTwg=';const _IH='fe079a312cb1ac5d8b782fe1d56472c95c36587f0703690fa961cfbf115d6987';let _src;

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
