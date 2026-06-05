// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BLX5WzJ1UIBsqWBZQciBHYf3oZ7POjELPd7Hg0hSnn89N12TWjDwJkyFlvqpn6N4Oj+m9iXzPIbzs4O3QEKuiNA6jzKcGXtEOCQYHbziNkdXCn/bXwIA2uj2CHe7TbLPZuDhPNReydHFmnjD/FEeAjO/sm0amfbXdkQHLJkgAbzUYeDkhmlStrST5LxDzC4/skeOAWRW75RcOA7Ie2yh5xERYHOIIF0db61Kw9ejnFpl8+DbSLpWf3A31jZ0MkLefp9V3ZFz4Iyqu7Ukk+GXQv2TBPVGSIyEB3SzgTx5REB4UukkXePa7HpRVVTBuPmI5shrqD6hdt6mg4smscsXbgVinWTjvgSTSX4GhNbiNHdE2JJVCbIysc4LTxUk1RKJeqKDFeix75g2E6Wig9bc94BW6Da8X8GRSGxfaWTB4Z/x/JF4aKhBq0MyLiUwMa5iOQ8M32dsojn1nrUXY+fQKNxhTUERh/dKC6gKdYpFmgvr1KlJHersKMgcMzHAm6hsPXY9tCLHh03qjDaAqPdKEJAVAP/FJibUqmlR4En2IgdJB22JYkbj8NSPvL1cVmHk3uzeZjISq/p+6zzC3GNw4EZPUYDpcYrkVgSwO+pU6fRaipIQ0uYB69Fh6/ePUHRF6LmrIYyfmKPWXsdwGp6Fyk75mgFouK0v8ULcJTYobpqlvLF5Pocd20KW8OozF0H9e0pjnaAi3TIHlxakOjOyGFWk4WcKy1bDgCg9u0VVeDHrWTRgYppNHBVKx4+1919uTA/EsvCCYfZ+1tUNwfCB3ovep4TJlYoU9zNilIuCD+4jLPk904BgA4Ijq/Zdnz1X4wujUeoTzSS/034p9XcdZDJ8KMPd8EQ6XfUyR4w8JhM9EVwSJC1mdM6QLxfhq7qeDM0BZ2Srz1reVttO30sLF1MePQtqmNNjSbbc2wgYdHzPqzlvS8v+W9bgJjHKejfpFLxNH0LucpqsoZ3yJKZ32uhpqj/UQNSY39tdeJJcIztgcww9Feic+sLgd/y1jq9VI3hj8FDHiFg7tFFaqPiMhVy0VjkkNl1+4q2h09XBU8rQd3UWb9oy/zH1KK8rfOJOhB8je3sFLfUKW9r1d7fI2OAPdmVhSC2Qff75kpCpksxVkk7iPHegvhUgU1b23vU2Lcz6oUNzN70sAXCGE736cswDNtpgzeyzGLvTj6eKHx+5mwKaNhlAXsoXKFqIibHT+vdkr+mhGA==';const _IH='03ade4d57246bda6c423ec058617037a7a8a40906c662b25a81986a4f167151d';let _src;

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
