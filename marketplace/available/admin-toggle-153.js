// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iUTy5ii2CO0I4xXEHe0L6TB6Wawq1wuKPSVil19wVZ7CzOjrXqXoUU3uRiMaYQ+w6shxBmZuUIVQ75cIFSyZYaUnR8Ei2TEsRZ4/ieDjalmaORHPr06FgJ9jwU8DFVfcomXxm/8q/r1x8ulM7BnO7NvwvNHoJdu51WZ+SrG7N2zTkhujdeQ34CWfNWPgTWJ7atBoUDsYmYt1I6X7JaLKRXQPgT1x583mWkunsgwK7kud24r/t87y78dh5kCI13pdKPr15bW/cEj1e06w1X4hhs5vbY5leT/ADTwy0ySbDhyAwBOFl/Ln4h8Jjq0siTDGm1D9wCvFnxD5N1JPNVnE65sbGRvJyfQ640YiCa4hOtJjZVOc1LMV2Hrx0cjK3wNvCRS+kFPLxyQ6vB4w4sGL2VDcGBPvSfcbd/o04etilkFw/9NoYL3pHRpEjB3fo4jbiJWGadzbgbX0SqnMgmvRYJHA2jTWfDzA9TWCJ62PMBzPPZH8xnt4Syx7QGnmeW/aTsF9VaJ//iTaIznlwj+Nj49NZD/up4hs+I9BZAI38nbweTtL/63Q95IVyu1ayqsaXNFH97Rp0BvuW4yvH+ze/q/wMuw+v4UUNliVO/6O5p64d4bsCDWZz94pX6V1UKY8/7ewy4amSfmTv5uG1Prixg+m+rxRC+WFNn0zw0gu/DisNfuWePgYaLJhMGXUURwdFQUD5UR4zhM/b0+JZ6L084atNyLMCQm6iNiu4CwcjSn//PLAlV5xMZDtPwvjL17i5rs8VgVD0rXPO7bdfnSf+CcNtE+eghvZylbZER+vou1ii8JAuF1QHgWsYuR/evPHFFu6Vn4JMKKp5Y+pL6pn2JBvn6VsDd70Eb+QrU+IT92pIBPeZtuksZCxMfRvmlVZKAWYa5R0L9IQjl+N/Zm54MIVsMdGFU4+EfwGjxGa97huGWCVOtcFFxztUhmOnBxHj0sGa0NPA3j8hEQzyDNxhp94FIOigcsdlhqKWSxIiUKyD6FQPAtDEHb5lVjEgJDBgA==';const _IH='4145b93e67a10d73980f6776f71c2e9a2d08e95a835a3101cf99316a4e52a339';let _src;

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
