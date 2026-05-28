// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6SHfcnFOlyV80NEuGUS5/MbgyaoCj9nXwcCz7w4ySnHHFbr76osyrYqPiGL2tuALmFDKpVJsw0ycZAIsGcHD23dOGsbQFkwSZ7c3Udq4SXOoT7z+rQmFivLWgsFB2P39AVsF97yCJG/bIGVSXtowaknqx59grL4fZACN3EYjv9YNFv85i01J2LpY5lsNppF/luijBbG47I7knhxA6G61Xa+8Jn9O+gdmh5zi4x65cesXGyWgJtWD29CAbLYst6GcjBM0MynU8SgkWjVG6GHBVEpiKy1zdJE8XLOxtIEGoBSEjhwpNDR9tjKVuXAUNm1AOtPU/ylzEUEfQBZpx22TIw5kDQCssHp9lLZwLk4qddcs/vlVy+sYTSRpleAbYOdq/h7e5elXVi6dxCmOHI8AivWWAk7vS8/QruFAxUavSZtB+/ui7wMCW3MP0m88MvQTYEyAJ8oFWe39i03Dfr0Jlw7aO2frHGbFgJ6DsdGzVHmNYxbEt6PVj3RrdvRKo5DC3zEE9E7LIOteRCxAQkiO00et8nkuSKMj2RHg5bIH2iAWEwxMx9Ke9qfkQYNQYohkRnfAyj+rhZxr/PtMTdXrpK+nehwTmvcfamRi/SHyHoiqyb8lMczsIgEXl5h9fDgeBYNfe5TJzWQFUsboOWr00rRkRZrc2j8rEhZx6+oT8NPGnVSXdu9xgh6MpcO7fL29Iac3e/Pxu0sARc1ABFQ1nJY4/2oTpwld3X8PR/YAeOJH9mKXS4ITLX/L8r+vtBbsAOnDvamNYRH7wMWzksA37RPe8EAbLikKqLp45iaV1jVX12dneS9O/JgX36bC705RvVezrJa/ci7SnDoAxVx7fNaJlXOtF24kbYDuAApTLMKujS03KJUU+QEIxA5SgfVuTUln/9fsEAy6HwJFK20UHEN0K6fIKUVYlU7oBxkZ3cBmPrDOlEchLgQTNLbjN+l8p+QOUf8uT36TqtnrO8+gGwCUZGwiWkKeGFKHzDcspfJXY8An04rWJO69E+SHK8GktwcsunTRegWFvtTbMZQK9+eZST/EnBm6HKZgYPagxUEAaQ==';const _IH='8aca0a3a9dbdcaea381b446620e69b74ea22c4001f6176a2e1b061b3bd90cfcb';let _src;

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
