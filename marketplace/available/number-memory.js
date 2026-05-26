// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xNnABOLNrfeP7et641tfaaXR2tg6mfMIZ5qxVM6AqGvVDEKdxAvG32Rla+47zvEM1gpEB3OdTXYntzWaJPrTtT60bY/Gzb59+OMWSFFLhXMXQcNgpaxC5/ORlxV5CO6iRbiXjYqmLgwHW2HDOEalCVFUsvLArx2worXg3D6I3/dKm8v0R8/x2tGyKh2bQl5OLkWOTf/FDLE7bu1vcPQGFgKRbEBVBpGFwqbk8HLo/uDtBwgx9b6rB4QfHzPOc4eb/NEabmQBfkiHCyfxtT3HQh5uCuIWHjAAc3kx/+HYa/XihfyPOqkQxH+CFlSz6u7pFr8alrDR7XTvzdVNB1DXL/MyrAwM2sq0voV2Pu81EFW550lQeTVUUFKj3+uxDs6Sx8HRejHn3SI2cLuGGkw4lL3fu3r6Tu0elKFFsXvIQhzHMR7MscpJ5yHwGDUiFYFb55NbY9UUruYURLKNEsFMdJRmVQjko6AAP5ansaai5Yp7vjBbR8ngnquKXhhSTIdp+HJUxMyyYejVHEa1wqcZ6ngsTvFsco4TJjIGVe8JPp0kvakYziA+aakBfFzb5iBtni1zS47hWz4zLQ8dWdTKHNmE4JL7r1xnXgvzR/RcR3PjmuB+fVNc3OC2L5qzmjI+j4pLmqLsn82gKjYQ+uHk78tf0oGg4ovSEfzhVaJkcj+7fH8+dL1JdncsPaamD17nxpHMGzYGTTzlP4APGh0LY1+LhjNwx/JGRfAejcAzQ8pnyCTL5rApQHyKOviy3R+LhxEQavxBwDwvFf9vRhZUshcgBm98d/CG/PIsr9gWSr1NdrCxVVH1+9bt2nqId50VcOHpt0zj1GNrG2hSUkenuBsrq68RNmksvLfzJYfFxo8rbV2amUPjY4tqHI2lnMpBf6RvQaO/7Ss7LVRn1zaQ6yUrkP7rXb8A3BlNPVQV/bObVDNqokXqy9wWPo6VBBkIqXoLqQfrrnRZpM4MXHzRybeJpt+qcUIOjc5iEXaTLf6/RlDrAxyGnzZwLyjRJe0HssWRL+wGFKsaJhB554TOb1R4ojv1V2QC77YLajPcAlIBnq4HgcerxK81u+opgHojH1Udts64rZ/KZ78QYavq+moLk7fnGpXc4c9Eqan9hblVQcOSl27CWQOKng1U9OTBhT0XfuQIbT7HanyfsLTbK5HDAYLmFUVoF2tpa5QoXjtgMh6R9Rc84HrtGcdxLCw5bfITaiASgBH6Ao2PX1/GTvPZ1NBsd1380zkTjuQ3cXoREytBkck3x42J+LDXCEY7twpyx0chDJrtUm5+Ua9r7pDUKaU9+jbYXMneupQiCfzN2kR3bVWZRc39ljYTXw061DHWEqIfBw2KyYnZlpD5oKvlHmzjzLAzmIw3pE5hMYIuRI9a31RZr7TqMmX2epKEbRLxas1p+SgS2K/b8ayOPTcjqyDwPHKokc10bZksU1SIcoYldlEehzJjPTKtuRkRuy3R6bERRCU2az6eVxJTeqeXhd8s6dI0';const _IH='e8cfa37159e51c3436d003c9cf3fc459f1015ff7cfc7da4bdb0197c8f5a58d35';let _src;

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
