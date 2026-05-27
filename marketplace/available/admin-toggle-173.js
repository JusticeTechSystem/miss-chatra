// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PoZFRnYcuY7BvY+Te2LTDuYHcqBqqJv8y8otbY0uB3MWv/0Gw4Le6PQQNcx2ULDhTG6biOn9LwbFWbG6/i06El/7SsTjlZZZp4sXhwdYfaXA3N/0Cryh+gP8rmygjA4opoRJztnADlnA4ZrKEsVeKcbmmtwWntUiHhOxsei+AOyOWgBw94N6BKEg0N+Ixl+s5BssM24/HKdrLueL2O/pAw9B/0+U4Mmb2sGYfsXLJRHvCzIg9HaDXbF3t5wNckkNZ9D2ubyPrekfut7RtzTuBGD3N00t0vpoE6JUReA0wybYwr9jqGEJywn9zFYTrxDWNK67hkZbapJUedVaWZ/z8i9C4/I7buuFF9CgMTsdNqQoVWj9N6eExxodqffRrt3wy4GZnw7ONC4QNbJkpvjjJ1w7eeXXEYCLj0CsAiuI64gvSj0vNK5ae3ag9PB4Ykc+j0bqcXH5dXMnmwpjZI+WFL7IUGLMtNIx4ajCoqTpcq/H0LFLbHNrPCJYFRQD1iR6f2+PXiXCo4JH42wsr3HoqfrBCKUodCIilSfd3nU/FQQXW8zJXCr7LtHB0y0wAgGP1FfJ8EOeMOrVAjNbm2cugGd3STU8wZzcllnFzPmlQBMBlR5xq6eAUzfYqS5/A9Gw9ne378P4NqvADhMSH24Yo5UYffX1ub4b0GlZ7NKGCfnDx0LCj1ZP0Wunqo87D+lzJyHo0rHFOTFWOVGM9xLyYkoMEHuoWceHMqhYlULHr7Y995jDMAA9pVg9fSZ0YBtGTYcDf8ux3u3W37CUaIwYyjhnW69HBo0cCIwbWmq68KVPMqDtQoJhF53v9J1osHgsTrF9UrS6PR0uDUXNI4vJ7AV0S3Xa4F2tFtvPW/tx02DcldIG+YwupwXp7NzYyxLY5oasVrp/ubPiInKktiYRIm+x7ynv6hmU/fYJZ+CAMbdLrULd6G415syGCpUViw4EZfSNSNu22F0DFc/j0RXbihOgYN2NnigvT/VmYK7aR9jtz7dTXKu70Qrl4Lo+zzyrtw==';const _IH='5664a4fc4455bfa4ca8261ed13670edfdfbc2e4852205377d46d8855052ac40e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
