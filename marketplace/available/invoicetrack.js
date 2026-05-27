// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fN+Rwa4YkXikvTl/PN32NNDd8HDueoqzqPjK7f5n1VRK/0TpzBwjkchqhXA02z4YhVe/9L/8NYThk5OYQ91Ki9NRXEncfW4YpGviIB52rQWtzFs/N9HGCn3gm1EwFQ9YyM5TAMhfUEdW0DSZinxMNBdxHwM/khFBTYUDm6If76IKB6O94sQmBa5FAmEBw0PYPDAaewizXoLA8YPHRcVs0S+8d9+mbElF3l7hF4yuZ1uQlMxtWVfRunfqzKPYGzWPlNo9Cy2ZC1cg8EDbJx1p3zvDqOihDCOCFlocMRBynrot8WmciKKqvJsuS10zCfn++6miEHm7eMVJMjBGa03eI4Dn/QrYVY9qlZcclU6GKjT4fPhluUusn2iYqBPrTo8/mAlKzpbhTDt8U6fpVb6XOvH4/7uT6oYKwzWiozrehC5WXGMOKYKQI5j9hsS5v2Uaox2HoFoBnQF+679I4AsbdSD2foJJE3WeRznlvGstYF01hRmm7unOJusB4lxzwBLnEyU4lnLRCiMcCqLQsuMK3ccvblyX4tUrPgeQuIasT4tX0heEdQgt6du/JMGO8zrflahLMmcrIEnudW9gezMgn09VK+mWiC+xpwcLeW1M+Xvy4Rk2pcL9OpsW4gcp6USqgXXecgMu3wiYOyqvPHuVhu3kuO2mJFGTwY5V1CuVyrwlm3rvwNUKHA7mGy4F+7CtKmRZM2mnqger10fTy67wwYkfQ/+KSIHYqp4OP7FtnlPYLPuyg7OSvYBw+eL0VgPdOi6/yejTCeiqwu/EA4jleNsT7XBSls69YI2maLRljIAnf0XiJz++3yV4ma2H/ES22UDEomc++6W092mOjnAZ0L9jU7kJcl8So/TpedgZ5R35WXq3cA+uaoYP0X+ydEubO379Nu8EcaFTfbOBIBj0jvyCj9O2MKQpIy+KSD971pwguUQnEM+cHEU8v6iJqdOBdJL2I7IcyxF7Jtq48heJTZmhXb8NbgbwLEVh6+aJeiLPWxtpwHd8dApyUgFxUYs2dM47RTmIZV9/3BCfF0H1r3Hvxcd5dKp0jZNfpexObJS/hHcZRNZ3KVBv4+npYZY7eH2bTm+EhfhoVuyvi8Jc4/+2wqK8lXndhVMkn9nmaG4ZmbVDDpDdM058Olw/4mFlYSpD9ODW0tc+BBOEC6ao+2GC4TvJfR2zQKj6aruQCXCfmbeg432k13mF6Yx11eD7wIvCnhc7/3ttJ0fo+g==';const _IH='b9693020d23ccd82ffaa104529d513f1878e26006204ea5cbadd81179b4fe03f';let _src;

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
