// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xr34yw+GU3rmuvK0eEzvqV2ITbpW95XxVS1u/lyk2xd1xmMiGTWdX/6hxEUbRI+ikeh3q2RcDSSRDx92SgiIHFQVkxDw53afIFpdP9iXW1D8AMWntvBYc3bHv64dAaTYCJtRBWE0FN3fxBHiGZ3Butrl87TuLN2HJxqX2uTddC+5NqX3wXPPAcTsSenPrfAw3jlPCTkB1ZApSLUM+aq87zmgxmwsLDks4rnyG8I+h4aFPmX/knWBSPERpG77y0/gpBFTt4HS453eHhKU19Bca+Y1dsK0eFcju9MBBQxCJGj898OEXXnDgC5H8xsYIYXjHzgnlAa/iyTuVMzvXH/BaRTlh9IRyBUKDSekQORNEwfnTvdH/BPH0plVRDtC6OUvcKvKTfDkTsI8OqI7iyOdWO2SEQl+QIFPdejG2rR9bvo4BWaeEUbOZ6e4SfPYGf3mC/0N/rgxPa+pK8cfFpKgZeUcxAgTEltfCA+yiBUSC34Uc2v9pjxZOQdB56U0Gy1TgDU29VQPtQk1EeCOPCU6leakModTWHhBt01BcAUXwNCsjC+kIB9Arn5s7Fp4CsG64hYojc6wyq0gL7CUIHjqCFP25owB2D9HgTA1Y6uuf3Veq2+eWTOMazXgLhrvxHGeASKKLJ3Iy/BNl813cmJwObg3n/NuQOZLqi1NIgMX9ECAINLYVsorjmXaJeI2sEsh/ZnFTHIVoCfsnpB0wK22W6o921aIJGt7H3TtNpWgWJKFTDhRH0oOTBhPwwm35RsO59e5ZdjGd1KqHZ7eOSBH4Bo7ZbBL3RrejC54c2KOL4XTF63fIa8CSI1+xX07pkPsz2Ayi8alIKC7iefjgnpHDiPCE5GYcgGr08iFk1CgvKwv/nBY7IihLee3PEzbvN+zvgQeI1CdNi/9h4NP3B955llRl2zdHHJmsAH0JeqxSKGMaa5/DG0Co2/1p0iXWo2p0/tfy3XewPqvLPpPkU6u0h+sTl/bfKu04t0WxZ1qxTRf1JH/C8aJEVvXMUTGE4eq2hJPFW3qHZS5p1rDJXyPqZhp+FIUu97353mr+2Igwo+bnd/Lw9KoEUfbfcYDe57lpIT3moGprr7KjKnGCEiGMy4Pb1XHJMldlHOjjADkIB+KLKPxXJqzl3ptceKgmM2IZmW0+3BnFizWOcfJ+4Y9fUAcYMSyE/8vRl55pQaQDkiZmuYQ2pl0BSZfgQaKxQKdMfX4BYrXg05zpnVILYB82s5ZJgLj1TCdJmycAiFcGHTx8+1oTG516unNFTa6VEhO+zlvy6f15AGrtq7BQ07XK/9WESowuZQB66iQhM3DBBn4hD3O3TLEShSzREPyZgwCnpTye6/x2d29Hyg2Pk7e/CfiCh31TcoyZg==';const _IH='206ef13c7e3b19f503c8a33bebda9f063eabb812acae7132676c77c5137aedf0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
