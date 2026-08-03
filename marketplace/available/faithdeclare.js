// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaxZj1c8WkPxjFVbjKQJL6KNnhLkzK9biVTLgFFwVxZ4uf3iGjihIWXxT56KfUOC3tV1BMjLlPbpGJkhZQP1zMTBFtAQIPg+V5KRrlkGxmDClhMamZWAxD2GoOLPiCjNuO2cZ1MDGhc2GNlm6oSKAPWyTpLxdPFys2r5fz6R27xk9dnBvanF/FfZEAL5Jg+rCkSPGS+JSuDTwHB9GRSiWX7rXkk6D+4hkZ+e18Lw+NS5RV7iQSxX55RRt1jLkSp0dJHguYWMF87gtklDpsCSiWCDsEkfOvtFKXEagi8Aq0R5EWQBVmYiIuBquCvYQuTmzZwELZxqY4MfAvMzEiOIdykWfW6mQe+57IZeUPeD20V+/Sjy8fuxwPdBnWlyzDhqmwzW/umPM01kA1SrTInK3vBS1ZUx2imuQKBif9ilqjWQinAVR5g99TcYgaLVrncFn0SDE/Qxl1RY+TKgoHc1zVlW58IHzhX6ALhyiyVX9oQbJmGKVYV284yPUeHVz5ic/lY8TFOFhisRnvx0Lv4Kt1okKwDt6QA5anxUF33Vc1X7ZLe9rD+wpPDl/KRSg4Qt8Hlzr4FZ9Qwehi2zedk4g3dOEzdHBgCNb/xXlyXDO0RXrOS+vxeNISCqoZK+DlF/X/G8Lo1sED4UNZ6WY9+lph9loMGjIa+4Q6jUb9m9kxdeGUAISJF/EWGgJ2YI//0/oSfz8Xh4B9CwOu8c/Xcmy9dKpVsJV/6ckfwT/E7h2M7iVBSPuOcRcfZRs92xzDqUQoeg89/Gfnm6qxdlxG+mvO/s3Eg/ZEvOuMlXiUkOES+JRGXO5kQu8tF6UUiORfSjLq6uGqFp0QQUEWP3mx6j6Cmt0Xuytem8ULT1lJuNwApKuSf7m96Jz15+mihD3Pe8YuFrMmfdWmQ1SEiCAU/R0X/VIppkkTAXjESGCco9Is9EDxmTRbaHPgXmnVLLe4q3r7iTX3NV/yC4+4ouMAkhxHW2zVn0xz2dU9fM4PLAIKSr8YxvYho13Nb4KSRStwTqjnzfVl9ZsaVrfgDK25+Po488LkpsDWPByaMLm5vRxmQH5re3ftqXvYw94f4ntVEVk3b1StOfLqkby6YwJ3LxcnKAm6M16ORb/bF8lnwctW8BTraPyl3TrNy4Y992wMGBpUJFOgNayCUIgQhQc/xn/HcorONZS+HYQvdB3HWJlGWbHnRueJQmCeJ6tgGiduAaM5lthrKC4=';const _IH='fccdd1c771bcb424217787628f53d57f0195dce32e17b5de8ede01898d8072e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
