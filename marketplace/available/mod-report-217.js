// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QLLYybUC39fBc4AN2WhqF6C9xScZrw+34I90BXha1rIhLgkiWGMge3PfHSyVwnq/8gqcx3PwdqHO1sQwF3sTeyCA/NWcgagStjWqqCzMwYB/rRPwZSQirPOC+yGgsHo653gkzqACxGGaS0uaf8Et7CX8M9RSlnHDENm23MrSbo6BmURpTczzYO27IAGml91IibuC1pm2Vf3FGe4pS/AyUbZVELwR8Ip2dxiN8XFVDboTblanS7Aw9w0hHzFkxfKtj0sSzaoY6nEb7I1yRu1Ybh+EcKzATVq0/GR9foraqwiISGLvhVDfJJ2b1UgxDofZ2Tw6u4x+wMl0ILJjc+q75DUgdCYcezxBNzxuniVb9tli1nmxqg0zjdQFhVTtThruqeThNJV9EBfkdfX2srRTGmRKa+og6SG3IjTU+sJN/DTrVoVAtXgTJcO19eVShWpYWycja2zKngT3clAZPiJ0lRwEowU9K8xfHiDFqD9cetSEnE+E7CuBNAeKsStDCxlUyWeOuKhPz83j/zQKOcz0zAVybX2f/S/ywyxckvK6Ixm71nevSClVmecnUL/I0jhWS/xB+yJEW1VNIBjoHj+PvIvSv7Ceq2t2cqkmNOyD8Iz7ZpiPiMVZPqWVGaU9xTLFW19mHZ4ODV/88eVkI6coANjLRpKehM69MKUgdgqCQoWGE4G3H8E1aj1udGwp8Sx9nGvwphNJAngTJD6s9+iX4/bAsDdv4nlq5FgVZKotBTyJYUVs1LoQSbzcE1eVXygWtrJcuAcq1lwbDxnCz68G/RRuQ+ymdiyHpfxCzXTV2T6ePdKVSpCCg/VSbQReK1T8NYWqC8RxpfhKig2sFwnzzFCtnJdWrzqiiMGCZskZ8gAPNjmZ6csBKCSqh0/EAkg0Vfz34zSA9ySokrjT0DTdA80wKgwKplsNfmKxvJqA7rpKNsLY5r+MKYC9fbx/CmOBjBdFp3tR3ILb9Ro1bC/ec1N+C0tFIo37A76HEnjnuraPJyIeNK0jQXd18Lo4HENlueC/WAmZdkBwvO4p4Jt7bIlofUPALv0213NdcR0wGV/sPMJX8r3WJZWZ4PePdrYEud31A/KxVhjHKacUdY9yDaMS09Mj864ltnO+m9aB5ieL4LkKb6VbK4NEhQkSkEgaA/O2IeDvERcGN4n3x72EHgOEJKo8+q89avmywRi8cBRNQag+fq1Rhy3Nnc4IR/McX5zuugXeWBVVw6DjDtDKs64SDzGP0QhlERRIS1XWSoA+BtOCxRRgliOLLzIIkQdLARTrKSs9h7Z7vi01EopCsEpJnrzQJZ3xImb8QrcGTFRwwTfgf8yPBkMW10qKgCp5iiEceLVggfFy2KZD3BFoYs7QCyp9nPGCTEaDBctB7yAwEX3AKBenDg==';const _IH='3b8ad8888e075896d2dbe0cc94c1173ea8c39028d6bb28b15c5ebf586c383580';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
