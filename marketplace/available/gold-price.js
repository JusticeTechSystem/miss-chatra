// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQofBFHJBySLLiPfkTrKBGyIDIBFOWgeu9Zi5J/u1vPOSGGuJWWlQhkcarkl8GSHAdH2Udc7EG+4v/5L6t0APKqhU+WBvsh2/gbonGpcI6pj9ILjTy2sTRlJ8KD/7iLVWhu8AV+tr4vui9H4xgZPhv5d/oo4Laz5axUmEIspxkj/BGmmILhdQVSgZHUzexMLupW7qL079kqQcSXedCfsn2VHK1PHMgroVt+wF122wSKKYLYL9FtgEF4dMXLJE34YQfmsEJ27oClGmZ9UYtxeyFbdCbflTXkTr1WtdoyBMvGU467m5UCe01TLE/zzyMV/LqGfFv66AXbwDWi6VNh0ybR9gHYoGowFgL9IZ7YJUa065msP50Xeis1LPCa+LLgt1ohcCFc8geBCro3P/CLcFUOZYZSOhuy/so7lQ8vEprmQG7I3sv85Hk+aYhBeNtDc5h6ehhAwgfVqy6Jfn/JmSVj3pe5qcbeASEdCZY/LnaVakjC8FFWftGRpsV0S6cjvVeR1V5D+hZpqhsaY7zV7Hmt2oyyYq5fnhSFkf4yI9HZQ710lbLRYCEscMawYucrvm7yqw==';const _IH='43e69d96741c71f0329f084e2a4d8f134ed74356bfaf7826ed76f436112b3b04';let _src;

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
