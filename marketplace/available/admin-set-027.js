// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRe2jmMrOjB82Whm9E1I1HOnBta/Afup02FoNi33i8SgU4wYzaDPVsn4ROBhFwYXnNhKcdRIHKDzzlgBC/9tVqaqg7iA/x4UYeQRppYpcy7zhQvBUM1J+q8pKBbdYUz3VmPiEgKlnVWF2l56pgrLU+GiH3uGsChbz5BWnAeXCbQuskEnzTJE27H6S3kc3CjNHJoB/zdzkG4bGMZH3j6YGZhyOzYPfyqaPpPd85vR1ki3F9V0EgS/SCPOogi1O8PimGfL2+f0esp2ft8Mx4xpBwGl/3alClwIUSlb8znJobRoulErODskhNyMN1EJnW5oj8YBFvWG5/FJWQRZ5MulbtOy6MIbwT+BfSG2qJfGnkSqQQbZbbWg6W5Pc9okxCfynN10dV45sVu4zwAMHmaHazDp8BY4QAKNyeY/QCsRFEUQzT4JKtfnSpAUk+ZE4NWZ65IiMPTxDMR5ftV3erwh/A7gs0bmsWClkvN2Fz94INhOT4kISjPmrV0gFS/OxT3/HhIWf5uUiHWHoLeeiHutcH9xW27+WqPPR/QjSwlQ8q+wa1qMzCt0J7B6EOWGoRW/FqzIaZmukqffwWIVaJA0sePSQA5ed4Yu325oqg6EMEOj/WxNwzbtJeRpZExyJwRA5dI03MUTch4hx/zTkhPTa8rnXjvfTlqgZ+4skm07zHed5EodspNYaKS9i+tdmasUPZEZJplK++8E8VtAmkcHJ3RckWw7mO19NnRVOQJNwKeyJTsvjSo0+1k++kgWmMPp0uUpjg74GiXvcSYVJTH3slgjs+lexHTSjCAq9ANc9NVGg3AHPDVCmz1JUFMbCaZWvsRmpptRKSRYLPejYbIWvluUz8oCFSFuW/eGfuv74qx2bmF4DhIZQi9Il1gYAMeZjyDBrjgaBjC6llTv1cYnYacWUAFbbKJD9be+osoQW2C+zTuA0ohG0wGNHdDRT6US/LWco5c1cNKqCIhM5Cu9oeVoorbx6nb4UY=';const _IH='df5e740bc0aa291f0a1633fa5f63b991fd22e28636728a5f3ece2b3ae9f2d4eb';let _src;

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
