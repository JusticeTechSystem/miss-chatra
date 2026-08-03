// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDcTbiDMjQsPnB4QVFUNnNIXiFTEgwlfZKxJhBMxruL+3iJ31LpzRWV38zZYDY/oN1l16OusR8kLoz1xvrvdrw+l3VUS7iPJsP1I+YQgR9fLDyLLr2N6OL08o/R8zNexpaZCtfHK6e/vsaqsA++Pe+qRtXIAWd1wQWryZfKnKSrT6npaIlofGDkWiooqbzajzL95QIMrPNtQK/sunKagQ/fX4TBsPij3YsWxOpOo+I01oq/zh6kzHlQ52lkl9dTMvLbsSZYcju+g4XOGDLj61sq/o0ZHklWMMlb2k9aTY0pHckgFINaRDdqcqoSPKmR59FLMk1EwqRWP50qBfr6WypuTX+fYts3tYee1hLJaTy58gypE1ZNpVXbdOWCa/jafSu7wj3G2Sl/FQdeVuo/Rm33IrY/ZMZ8IneJa7KFqymeiN1ZQwLEJLaHgK02USZGBo5iAtVB0a3Iu773HKEQDGm4SMS/XnH5CHppCI4K59gxfnj0zUJqDQhjuHPIUn3lTPy8Ftt80sbg2cF4oY/7rgmjEsI7AVv5ghDRzD49oyK2/UjVSBsQBhRjDZo8r3unLMTikx7zcJK/RUd8Fgjv/Isz5ZCE5mOjbQMg7TpvOZp95e83bedV8Q8pX3w2OAu44VFf7bFKLdeNLpmNVrrm+uW4aco/udC5fKslHjoMqwMYhpXEHnvicPfU4lweUc6d0Da0P2q9qnZc7uPLcYWK5QzIBhFD79/eMaoYOG3ArVYBqpJskm8UftXx9RcbgRfGWHHxkkjEidAjpsXNe5TsuTaJ/ZZFkkCLHbrM3Ugt549O9OAtPkoNUUBJ/BpJgSgUhEqZasApU4UlZNZp2PimgX1PqyAGG+CkNjCBwq2gzSZ3/Tm1CxKPoIJ0lCvUjPNAWjBFmEdXcHyVXR4rA2atcijtpAVYxUN2ufSY+bH/nnLaUi5MK5mDVrqp2WVbrtQeHVJP/qazRoyn3bJ3kg+wbCkCzn4oUNQnkfyKIgxmeSvojDmrhcHHivYldb/RGbkObUuHYh0a6FRaCr/gXZBhhaoB7T5uH3DpNufkKDkKXu2aUsQjMDySBSm2LDkv19yjzDJbrWSq0lkDW8AMYIgCbZSfbXWpgcvnPPWaYrxQ638bP6yOnj6B8KP8I+iMbBit9/0nyEP7ZRHiybKfqPIGuJd0Y6/dMIxPDZ1DDvohvp5DrrqXqu5ly2uV3xoaK+kecgudL/n1cpcBt//GsjLynswDwzmmD6mnocR+nEW0R4PRCIes2DKVwMW3S3nagty6o8G+4GMMj0MKlEPJXnFaLSHWAyIKZURWXQP/hGRm1Q/Tu6MoUUaBYehcA0edRHvChEVdoC4o/8Owwxntu6+ZNd1ooN4lVr95AHM2eS2+m28QwqIBB/wt3bouWndwTt6jLu2fWYGAcq5cQU=';const _IH='40bf2205b7740e08570056d819c9314a2fc90c64785b0f76ca2f90b260cbbd6e';let _src;

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
