// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wBff37eRRLttU1zrKFBJnx2pba2dNu/Lj011edhZtPYIx9drQOLFXtCGAK7o+RnLB85iBPOiXuHXfNwk6p63Hz04yUY7X3PTWzva6eY5vYxlbo3K5LPm2AJaDiGNgy1oUSl5gToN/XJCFi/7HDhN4p4lHbmQfN7PfjBjzhn92QTKtK1FiiRlP6V9W2fzAWxYssuDw2Uzug5PZQzFZDzz2GhgDJepimgmEY+LHJhwCh1iZDRV2GP0se7abV+mDEVjzdCVTvis6x7o0UQW71wASRHBx5mhyi44OiTLv4Jc61TiSXuS4371TlsY8Zp/RNDsJAfDsM1XBx17fSD9cIncbimimiR8Qy3BAETRh5XooG2tc1Ls5riO/lK/ZrHzNSoEvt++iM/QmptYdIhNJlI36h6RhzPZWBUZqFx3okBycI8jIPDDvdd/M+pvgWMblkKaHVWFQYzcvm/Iob8+cHuNEePtB94LiaS+KscmIYVkEY9YKHO/n9wcq0dm9uvc8tsgzauawnyF94fNkBB8tkWoSOzACcO9O6UBLiO8GQ+xXmlPYg1BnTPdmYNVpf5aKdXcJ/fZdOssNeRRoE3rIVmRbg/XXVG7Lidb/G/vpPtG4GjvAraBFB8aIpXBIHQg/1U0aSpAF4IKHwviyaOIeXfIn9F33/oIwIItUArcNGAWwA5kh90nbHBTzq7desuDmqd7MoXAaD/5oB1wDZL+Zatrld04gQRS8hdt13S0ioihnr/j0egYQgE4u9zyfG+foc0/lckB8CBNz5VpRTuBAsMpMIONkQ3vt+E0GJWyEdQZrsRZ2h4u2ssdnxo8Pp1UUQnrxL9qcfoQglqj8jg2pA8pE8ns8WIvLu31tgyysQmromUWIi6g0CEa1Zd9RBtfayQ2pPWweyKvb/IflqV1SaNk4oXDAqkSa2FMZZYfIWZl7jeHq6fkslm9XYZbQGhSzGLx4rRpS3d7g6ZEOeP3wTlFNDlUBpBoNpD1UMk5VvGGgqlVaz+XW9bqC6pIC7eYfNFMffWJ/ZqpIBq6nKBPPe6gP9gn7SZeeayMUPARHPmS905px6UxihZPBTKiNez9ZI7aokKglacADzdA1jQsH4Vp87SsT/wvpuXcBHnZG+siyhIddS0z8IDLVpVTxxv6J+qAlU19JOBEiUi6KKqLXwVM8GLooYecz0/fJFzHdsGsTJA5SZhF0niIgN7RwKpAACF1Mz+bjD+1ALmlNW+kKqyN3upd8SciN80yi+kjycHYgySirmspKazY0bVfqhOC3yY1qnaPf8No0ufyzM80XaGdvHl4g7K2tnMqevHkDF98nliYr0T2BrP4xxkd4sl0llkyQ5qaDyATZbZw6HAFUkdFm95MlSz3J/uhStZXCpmCsDA3E7Q7OlkmL4jwur8xAkUqmNkLApKmOq/dKtkmPm5BM6udyvPGpgawI4kA1bruvPHdmNsDFfGS6x7r3itJa93kY5HcqGczX3/VbJzIM5r4Z3gV94dzzlmz1tQaJG1ELP0u+/LehUWO/1KSyEs5By4cmfKo7gO3lY2HUnEXiMyLpBR8HBmLO/achtM09OqAXhxDkReL2HkAUvviqsM7DfnV9BpZfYLdpXDBnmF+0jsE5/DG4tYCnU6FMoOOZMi0JD8hGK5eAss/ESl7kp/oh6cVVjrogeXfuAudcPCoDJkJwB5IXaYR3Ek+/6LdEISj7Tez6wDGHvy94s4=';const _IH='e407aca2a44b81e76a91b168b83d39433cc5fec4538bb2bc889b84ab8c2464b2';let _src;

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
