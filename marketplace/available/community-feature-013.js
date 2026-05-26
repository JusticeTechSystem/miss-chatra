// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sYLKpzrVc7VVHCO5Eqeu9lmtr42ikcEV2hQqmHUv7M0XfLMSxE9DIVpppMeJhWMWFI5ZF2FOoLLY8KQ3aR8gyXAup9p0fA4iBGM6ISlZLRjde26fYrClhEnSkqI/s6XxPunZItPWTtMnTFs96FcU5RRVKph04d6up9NhfEo2c8sxNKpCXYLs49M1P9WiGScYOffzWUiozcSPMg1adFQn/kfWghJPxym3nR3rqcOTsqHNWP73GrsKByv0dY7+siC7SXLnZq6l7QlGk5c3cOb7yrOixiAIRh6/9IML3rLxfH/eesU4Fhs71MGNTdXXLow92kSXqLtN/Yr8ww+oqdQE6pkl5jV2OCZGRpt+ye0fFRqTUDI6G+6l8eP3GDwNyBhVD++YKHI8LsDZ8vD8DPTtIe8jhwP1yTsNcXq+6uNCMmWGuMCy78rrOk5kSvjiBeyUaP+FDQY+aQiRjuq1gXof5011DmiO8elRMZDSTsaQxI1ULP/guBg52kr10QN1nbIoLZCREHxmOtcytHcyUzJUOZI3yJhpwVn8cH5GmZbjoFX89x3S0n3XDSRwiNlxhnZ4qkg3SqqoDNxw4zt1RxTZ9XGzyAU5AS8Ve7MfG8kZLPjFVUAePtotkJJ0XxnXLqHouO/+kmwokqzmIAYBN3yssb2rziRmTie85DIoEei9RtmuD+t6fBye/bxoJM5JPXDElqFNKJCGC4Tg8UqduHl97pidu899yGa4rg==';const _IH='91099132389fe44408568871a20fc337a47d28a7089dc9a10223d88657e3c63a';let _src;

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
