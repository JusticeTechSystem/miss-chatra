// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/yVEhv4isnoSSc4eEmFNCTDgLc3MST7QMjl/ywTQEs96xxJGCIvuntPR7FveMbAIv/ZqYFVPMJ9W0XAPiYyc2puf3DbU7+GaBmGOK7yq+JPBu//k8KnJFy1Vs5AmnJyTHwxXbC2K2XeZF8JqUjazRg7xNteXKGd09RHvY1VCCnuwWOJvHscYlMEoeCzszUTVMOiEIew5hBZ9T5PGxgg/a5ckrpZnJAw2utx8RnS3+H/41J/HJB2RlfA7fwlXdQA2caLuusgYDD911Q31sSAqN5BN0Ar/K/RP8TRE6RP+60qM1dXSxN7fIaAYWvSAsKNHAAUPtN0w8nxE5m8LTvFAyAztW79ySgNp/u/Q1jveMQ/LmWQNYAmIAdVHI+cXHbIFMST6Dzn77m4xyicNYZ1x+r3ZNInM/mFPr/9uYRJGytJhr5dac1/HE/zRVnxrPiT//IYLTMWRwgJY5KggWnZacIDhf+PSPVn9q5qlmpz4dO6Z+i+Z/+CRPdWY3OnL2oX55oYU1yzVh4NvtUrfitGZklRJvc0KMcePlTwpMUKP8vSIqxCV+W5aOhWrZmJ07maElIdg5N2UG0VM06uWoBXMKQeb5V1AH9mbSYxrVNPppHd8QEppwb4F0g7uJ48K6FsoIi/tk8FMypKEKvu7SQZdjBbo6QycQXv0MF6IGbIL0yWRedoqy+Wa+VFoVlglBakrolyqJm59o4iYO22MsAKno3Ozs+zYDVmwd2UwtNEQBzT8Gz29aAbq/d9yd+C78qnPVxAFMtH90XoGZ/99OxsXi3bgGGWrGr/L7XoznVXoiV51S+BhCKdOAFS43vHgwCPaxdXE12xdhI4bKhL6qDve4XSwEXg+ZZILMUN+VWIPRSkV5KLI5AVt+mOUHYYsCQ6l0jX2VDk2P1Y3aSH6zU5Mw6Z2c2zlJeCa1UyE5lZNksvERkAfSK6reEzhpR3viSk5qhGsFykBYFpXT7ntSRQFZmHavpBbgJwtL8VCTlTvWtVYU3j0nxcoSgYaH+sQH5+pN9cwEw==';const _IH='1db08bbb3d1b08ca0af2d6a4c0e049aa331d5a0cf86b927d85b11bbf0d12dcba';let _src;

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
