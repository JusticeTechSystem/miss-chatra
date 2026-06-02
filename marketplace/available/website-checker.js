// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LpnOsLGb6gF2YbjRHaihHxzv2H2DcXaBd4XfxlOcCI3yRnoi5z1zJny/lga301OUkJGFtMWXtQp6eSZ3x6xqRphb/2HGjE3cAfGSgL/R7n94rx5SYBB7GxOlHCvPyRvMgL5WfkAeOzY+SD1wbzYr8RAEV5frIL5m5XngQ36bOVUxJ2Fwg82Xj44iuqHREcGyEi/0le+2Mi/MnZQ51NDvG2THWtYwoMLcGL6g2Q6Vxb/71Rs+vBayFxcSSOODc/PMHZK7QOvFoWkJKwluo60nw/fnvC4yCxaz4AX//3+soxc2RudZBmADpEHO4WJdLx4RuvAE7hqXg5OPHOkFR4igyDGRYBDnlLHQPNVYhdW/f02bkdQEU8ofxrWIYZwHqIDHP9iSS4hQy2Fy1TP3ES+8sZUmnWigHQqgQUEiXdzaChwUZdxMudASqTMp60F3IvI5GC8Rwrxy7jGE8YPrp6C8Jqj9Et2IEVQnfzrB8wEfRwdRyufwTWuoGuWonf4VRCK0kijNrt/wGG5MrlJEFyp14PnXls9pmWNlt/dx0sy32hNL1tUhxWYWD47FMWcI0pFmQJYj0ZT5Rf4h81LjrCZo72HlD9lA3LJpvDHJQGxF/2l89kApgIu72rL9zr1HYHTun8Q7nP8PIS+ODL8SXIfVxOejSveTkFsPrPVERP8OqkyJ9VUmKXR11PZqXF3mHQDki+fZauayWHTL9TUGa95JQ9uP2iQK3LX3UotCxfRFKa1m6BACv140JzhZyiohZKNBNG7EZI1p1ZPiqpcEri1lTx5nvEbJfpzZsU4Zfplt7EnblK3Pf5g7mkUFa9Kb+HMb+wamsAAmLAWTJ4hLp+vMa7m4HU6KUzEPAOyNNJtyxmEXgT+R8hMMFbZwAHQVk8VIQu1LeJKE4xsmJPcNbqhs8474zwR9B757oyTiLxuR16m1Yd5dsV8Uq5B+bZpGDjihk/4B3jLW/nJs8BQOaAXxdL5DBSXc6/zKpydJ//EMTlmWtW9DdX5Rejs5xxTkHTVNUhz0c+uTY/VzAHy4xwvR/ApePRG8/JLVaS6KmjigaM3IVtdgQ5oopXmokzRPFKMatzjdy7e+ZWlHjawK2a8lwUldlaUPBVfG3fq/vO3cEV1Qn73QSeGMtzf+HOFPJb+jDWaMdkmJ9ctbZbnRxBCFTKWR73v4OU4b1FAGkJJtMWNAr21lpWXt+VX9KmWGGtmTlP2UqfYzppJ+ImM0Ilgy35t9hqxhXMdWA07VJKfa9oDeXx/YtSZGxc6Sqf0VW9iQfu5qqFpP8nRTko3vpvFCY8n5hevFeytSrevsGaBH8LHu2Yel/t41C7uDCRo5FJd5MMlyV+95IKStRKd3he9kdRe/HTlI4Mf7VaqxqZoaKnRzkDm+C99g0ZRn32aa3WWU2QvZjBkjlMKUZzbYNpRX8LKx7MIOD/AMKxZ/XG4hzjcxrBMFXiC9aH5cUmsqeF36ASZCcCNzR/R0s34bk5fka6wyjobq9DZVZeL6YUADERg9oEYAa/lmFkVjnYbluYoo9DjN6OqmR8DLmarW+X2YvppKEKKIlyDHfP5kj5YIsoK0xX8HT8zn3p+rfPUGqaYU3FphIsfxNAQgq7cZ';const _IH='0f702322d5ce5bbf4b436d3a2ca84c15a0ced55c95cf800519619ba26c1635d0';let _src;

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
