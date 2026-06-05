// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0PXezGdZM5MChVYeJhY4MBMtrn4uMTETubidzcW1w3e/F90nQ3cPeo1AoGkN266xoL+4ehXSGBBNybbGQ5eIoqskkci7IByuQvDsgujGS9pggjxV8KUSkHI0MvDqehMccDFqpIf1+pDTl/goxZ/a2rlOIUR8W48dCBCw29pyMVwsMdh/dDs1f2bpz7AMwz2P19oRdWS2/p3LQ5YnGRFdcG5/GHeUbyd9cicu/lXDU9bQNQ+WH6i0NQfRYxTx7K0MP+g0g6LHGWzaGQL5yZxiduMoa18RtrYCO+0Q2Q+vq0bZPCPLAYChROZjKwckM/A9HAIDQErG0vZbQ3/aKJaRkWo3gxmnnTa13TX60Ss8CUPaUtwCV/PyYj1cV4samUSM1ovG5xpBgds+5uWTQfYjqA2GMR43infw90vhpHLloYMuL6CtykmZE4mvBhNr185xcbz5gnJYDYqXIznIdwXvowjXDCwQqyudPsfPyD8btpmB/utuD5ZSZ4tvLQc3iaB0sjGSRl1ntEIG3Mj+3nGBvbmKJkDxuIJ6vCKrIontsT8SQk8HzpKSIliuBQsNynUAWD0ovduw0ZCRUr66gRHWK34eVHpF0reJKi7wm6cnbR+1nDnNhG7xLiM2K3j3TQ0II1HPcEBhzC/lbBIQXC0l7BwX0d1ifub5d04G2qKwuNCLRYzTbQO5enOO17cgqC8/Rsh11R9Yqq4gk09rq3zeZRmiEKEaosc6FeiZWrO9yZLE7bLeky/AkfXPBs3EL4Jz3Kf2UgatIVdeymIx9PNknlEXfpm9V9Xpsb6XxJDDoBF0CRkcnNkQZAzCJQ+h5KP3sy7qj9+lW2zHu0jKbc8Qt43nK7B9x9CTkGnCFZtXEM36ZCXhDOMOzuc7RL+p+labkPpvugFUafu66OJ9AV51R6RgdZLHsOn33XOsWLT9g/Rl1uQOMttphsLh9OwmH3dylINeMAJlf6mFRQwYT4cpPrsOmf2eq56XFGSBhv+ckM6nt1/CMenj5IhQnDM0VumyrFxMaXwkeaMFAjvPU1MILgjrSzNpNbTifJv+4Cu1XnjXZ2UYWsVVtBvQUKv9YWYcWkE2KOU9ZkRrzVFcwaOvghdTFcnVByDon4U9JJp2j0IoPNYhOCZkhcW8lkVRbF8VhArUq2dtNsgz/3Vefs6z1IQLotBsOGSj0GzAJGYIDn89VmFiMIziW/rCVY/W+k/f2eyKb1kOop7HfkfGECa8oUZuTe0=';const _IH='0fc1a82bf909d23c3c434d56a581eac7dfdefbe39570bf60c29b5d16c99d7eb3';let _src;

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
