// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fRFVZeXJjqbSgzLcLUgqq6ws9qNu0Vlod4Jjy2k+C6HAOYW5m6T+Q8tPlUTsWCu8ljFl8hNKue4KeYiGhZrVVRg3hz0w/RUjv75AszKM+elkteOtcmKe7HozJ6pqjqE1xcGOitqJ7Wf2Aw8k8M6w6X4lsvLokqDTkUAKxjhXQelCYU8TJXS97rPTLwDLW3PqFf+HdlppEhLa6lB2Rrna0p2cwwC6HsflmBWiXx2Nc9WfIltvHBFmPJW1TwUQWjzpiNAJRr04Xm/mkJhmI8cKVyAi7f4d7wFEI7EHmhKNnZOWR7Ppoyupb3sQ2Mgeu+y0BB50iGxrIblNXDNOvHjch9ywZRIMqj+VdUF2YgpvTf/W1mGwRhdFi0yzsktk03NpnkhPkB56aNhL6zhSgREupKhP2d3wS3fLs3jh6EgqiklZxtdCWCVv0ZMvqannFC/oJorOdSDDfAkpOEMOQqHpA2K3j7ZB+HjW97JeOqIKVRJ73cvVYutORPCO4uI8ZJaABpU2XOY9fcLXFLvabblk0CnwNcYQwAA7WEwXAt6b7Z+0iHJAdCTlycrppvJ7G3JOD2/MrDLCtlUWiedKQ/f9c6VVvwkoousl2Pc2oRYxUlr8w8DmxTQZtpxKjrbUeRbqPmGyfPM3w3OSL7OF4SR99TZ0KjbI7g11FyoAcT4bPtc/xST/niPNqwSoZGTy01AoCYNrPQQpP7L2antciM5Iv1F6Z2hjZVeCH+4MLbuXLwDHbeuwBmdcfgXpbjvQGs8O20Zm2IqUbHpXceDyKQGSTUb5U1OsPPqw5FTbr+Lv1WcxZZ1GNfqpKPa32DEFdJUkg8+PiKefdFclzgQzNHs40l3kNHIWLLMruQWiktp/RHXF2Me4GjjOQVz0puk3z0lNhc3jbdaJfH3t39NLaKB2d4EMiJTR6mDRX9Rk3Y8AR6/+QMWPW84qkiRJhm0oktyriAf0bU9/nMF7y/tb0XNAsQ1LX8fq6OxMYN+li9cvRNBEv4B+yp4Wokc0SssddmDGwNvLiNuTJpJ38hlRKqcSmVdcyQVkv5s2FzULGW9TS8bZllU3WKyAVXSZOWt8nOwjK5cAFfVz1JIayAxQYq96uveKGpLw9+gw0ublFv4TGsU+lARXrbQgiEbjJaoTYouTXjrrGLF+ucQz2Ei37HqBXsW/f8+GfuXNrzs4+apK2zSQjQTtqrm9YMHD4TzqHedVu7lvqDfBnRmHGzx0l9KVtZN0H8LNSyKk1OB+ux2BYVBuO+oWIbN6U6Mqi1/BZW4MbVgXFcZ4df/FFRyDkLWGQAkUwJlRh31OHsCnWuDGwTeR/cuougd2b8Htdz2L51sC12qMPzAUfQNi2RtWx/9T531gf4RWNrRbHBVTMb4YzZat60lLitiySdoi9fIAFesqfpc=';const _IH='b5f8cc29c590613c55c4dc40b1ec231342eddae8721c39abee46664802b1bed8';let _src;

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
