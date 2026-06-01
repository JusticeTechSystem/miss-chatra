// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzL5CfCEcSDLD4HoLCdEioU9ijmiAhO5bRRuMzHbtXo+45Er00yKhsNb1zG1CkPaVi8JWqTwCu425o7LCOQJ4/WJWxgFCCAf6DxFbYZCE2qC90NZuBMu1pWHuKcyS87XBR6bx3O7yKxjsTf76WGQgolPSmG6G+G1ne/wNbM3BT4VzotmWPTr0WJGntFuP4qlr8NpBcrMkufl0oghdEVkS26nLWpbIyPEnwl6m+mIUbtZSXbMZeTNyFG918946fC3/NcPCskyox3LMTNmGPDsOjCfcdTcgo6+9UioeP1VtcaqNQdj2rulMZu0GUM3p6ea8u3vuxmvRAV64e6hEvn/vGLHvYec2C3YV72HZ5zHtp3b4AtXwTArl7EYGUyBF1uvKLSMqyhLIYQCTHPYU6uZdifZ2VB+k/liW7tjn6MIhHCsuP/Uns9dcH2GCxWe28Yx89gSJoefTwpu/RHmWJCR1GexwaX+tqPusqvT5Ifg4PDpu3Lm7Y9UAIpNtGQM3s4R6RDkl0vRGcDSphQo08ATZ4QL8V0XZyYca165nGyfcX7CfOkOlYJ/DRMvwIhXTdN2LsrW6g5SgpZ2ywdDsqIwA8FyRV/rWygSwCo+tej4xqgL1KJ0l12iYV47t42AOXjh9kjvgNxfI0M8+D6WJY+Kt8aI3n/9Lfxce3PyjowfY8wgBwoYkk8pxM2R1vKOn8XEgqpFukuYl/lzodB7mEprBMlTa2VvWsj3qzxgsFeeg6NYXIt0736pBZsC5OG72XGg859wZgOcTYvUAL8VZBQCsa+qPwN9QazuTpybo6eqH/Z34N/jTWDZaYD+Vm8XwM7WJiAtNU2s+/AMU6Fx0iN6H+54dWX5Ljc5Ra9MAYSA+x7HrITeZzUewGhzOggXoAeW41Y2QNwnigdGhg3kld3Bi8zAOn3hIg754JV0/Yhf9R3dhIgga/x2ZgvQ0dqkuAf6IhMOjIEjpbZU4TW6Ia5vb/y3XchMXbLiqVf00QCOXgncEE6gz8I7HhnZkjPDZCdibAtjps41jVVfe6vimL4hsJ41aupdm39uT/VLMer+wS3jmeEjbB+iZC2eSWdgmb0MA3SEJxFTEst6KHj6OeOy8eNCbQ96KPTfEsQLtqyU7eLa1WkgD1l4TZPWCs7rkpFWJ74I4ne2lcUtO5T3prdj33h/nMOkbk2xXNx56a07jWQAIqtiEf5/h/ftyO4psHp/M9B/5lwCZEOZWukFzC38lOFuFydb/HZJKvDT1abuZsLTHPrGCYz5lvEZmDsTBEYjykbEKMOpK6ju1JZDTfiSZBfoA0Xu3Tu4VVTG9aJ7ymmRNp5EKLNCpgncHGYox9IhjVv3NEei43HyirWFTakXi+WQXe3qELDZoKGJdj63FrpAQ0r/';const _IH='a7d80d357976adfca0f43c079d5abc80bb97c131927e5a18fac0659df401b0c3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
