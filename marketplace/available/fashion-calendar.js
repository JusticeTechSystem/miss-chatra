// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZlQrwj3Tx9mAConowPZcIFhjk7HEjSddUeHPxQXnmRett6rCHeM+IwWhDkEctcYv7WLeSEc0G+3jtmKeAtKgh8YzVi7K+FW5PgDXAUDuj+YLqSH9QhKI1jSDZ9SKW2qmtXKJpVNzRqLKzpRPS4MOmh4XjSzU2jyS4qPMmBDc1qgcm1o8kRtOCQVKKunVsbJsB1oH/if/OCRunAQZEnfLnihLPlTfYi7ycBCxmFP1ejnFsASXyEf/a5n9Vjfx5KLyy1hRIRiTE8oO/TtU0mnjTQoBTe2SYB6DLl2Kx/z4qiGO+OJ4xYQB0cfiNsMlidDG+QPx+Ge+MOXb08kQAE4x8IfWYd7ir4gtyJAJXOpmdBq+kPa8wYrwF+bRPRjhhm0iGLB/TuEpR324cq8E+KIpiDNa7SQ0IFgNztQyGepbpqn0IX61FerPt85pNbMWQfq/75EWXaDYn+XYz2IegJvja49c6gPSlso2L1Nto5GtYRML6HEyxnGgv4ZIE5SZEsVMjpnw07Bji5HvEsoolWMNcdW5GQ6YedInlQcG5FDSiuSWnHFN+XShh7ixtwrKIHJAc9mPeAC8wGp5+HZYe+3cCdG10iwoHeyR+h3SEIhpNV7Yzz7froRnbpBHGpNlF3/xyHVzs4uCoBlISe6I2PoJ+TTrCIsB6znuo0SvBYwJ67Vx6GAuDAmdkeBo2RPlxkK26DNNLQIleT9q5POkxNU7Ffk3u43lrHaLNw8GCssyFn/BQ80vHWG8wKvsVEqUdnjItoH9LXwjhbB6BR3iYCB1hjZmE7/wxhq1X+y3cDVkCnkN3HiILC/GoxDQmamVFrNPdsPSZKb7Vdj4NoP8RvpzVcJCY0mWsFdGycggdKDmRJUnShAkt2icDuR7jZLC6+Kb/IP9Le6ktk3+JVlUM+0u4Z13q1Zz36NbmcAKthSA4t8D2gKS6luYwesx7CUUHTabfliOR6pUtye9LpGvkWuHQR7KdKhMpCWb8uoczLiz13BCl1hX8hCDkeG/yjFRhR1KbEx5gKyBAnOEhxKWh9AIziWtZlgA5b/9BgpMTGpH61WoI7QULqOqxAAY+45HNmB5/du4DyTN2/t6Q7bBqA1i288hEGPwdCCsHziO9LT/R8lsjpzcyoV9pNivHqfZfDC5ok4JljjwCFobvibBEkMOHtjfTNgqmTQ3VjAGStPORMoTYXV8SYCfPCwfwZuPLYomuLbQ+6osEAKfVNbBvgDpTvbIasrU=';const _IH='7e151c6585d23c6f6f60f110285c9f40ed442c67d8238a26b4168b3672c6e3a4';let _src;

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
