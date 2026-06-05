// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W+XSp96j9h1j7RR/xDAa2HQQ77ts/kwVGS/4PGdyY31aP8RJuWbMe/q3lXDsblJxcesgqsDsqsClFl+7eBVpADC6u81p+1jC5aL87D6PWUhxJta/LFCE7mvFCzNWBZuFBKC16ozIHAQ4OFKtq6gT3UGASTsdatn8c5XwPL1+g0gZ4Ae2wCX/AzIPj+2/7lj8VhuXb8Sw03TFwONA+TdAtmGNX7fPvy2ZQK8+wooDWW4u9DvsG2JWX+dNGm7/0BRG0WZ+4/EXxyaqewymYetyuc9BDVBcGQ7+Mylb23+j9BvINjhHAgnCDt6JZ5UDdkh+4iOCBNc509yt05y0damS2c5INJgvOhU4eEB8zxX+TRzWfi3la6tTyiAAZdHbuJrcK95QUPGdDRVCvEdQvgKBimIzcIYQLQc6n0eVRo3Ee6fycCGQPg4SPekOwHw54eqXNnDo3qIR6VZd9qPO/zSA8tiKWJXeuiefFMZcBAMv4zGy5LvGT+J/bxjhUJ9PC1uYwfZHwrREgO2OQ4DoP71dffQqBvdskk6gcM5VzQKEPrkk3woE5DtMHIg97gUZImSCFndPJDsTPRi/iHitb7yUt+0EVz3vukMDXY/F1LuVedKz8Ot8HXPcRx76IIQ3d7WUWa6sxpgSe+Q9im3u2kh03/b7bS4hRdzYuZUqB/73ux1Ph9y91ZSuhTlNm137lZz3vDT/yojnZOE4YQhjSPOT+HEznLPjyhto4XcpTPiou3sUdnFzNHbXjFGbHb0Qj0gWcy/DJybjOc7o+9qlFRS4LNpqnjclZ6vSEAcZs1alFckn4e7mx5m/GbgH35QQnOQ8/yRLcxfTFp8VFinfhSXN+pB0fs+KPz9kActozdm5l43A0SGGsyTU4S8NxZSK80FlJqg8mkYd7J6NL2yb94xHbyQ6f5VHorlNPlQV6aiicx+RjLy0T203Cv6m3NvSDUU8slXC4ECRu8+dK+vBzBLbsZOiSZa2rCV7REPwikeUdljRyTJNxnbl27uab2lM';const _IH='27f813c43cd54871113c87fda13a6468f22b8c939a0be156cec01baa56fb2948';let _src;

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
