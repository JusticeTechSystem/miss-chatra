// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OLWQpe4LJzy22XqLd9uKtxjAizujrr8CS6M2e6fMbFFz31VC5tTyrFeY0heUyh6O0gTmAFo1k7QJb4w47nlmV4nmbgTMweZ7AdnptIJf0Vsode329VWrxOd//S96ig7q6Sn6DhybOlS/zx/2W4TyB/Nn1Rs/xTY6K54WqstvrCa/UVUIgMy84JVpDGzureYvo+TkcejUpXmcCpqv2qh5POVvZPjj94U0o1ASuIp8mlF3MM85RfL4yOXX9BvY0eV3EHZER15TOM8pl62drrlg0DE5EyXww9zBV30SOOLc2j7eMs0X2MgI3CaZmBjPHPGKl0cHrlyFrt2uHbF+UUP96QII5hYRSd3e22Ryxoxri+jQhqFcP8mqeNePFivFfkqjR2V1IeqwQchMZz+pWIXXcs/kVqluGRNYG6KOC3RGpHk7YwlG5NF9s2FF5oZe4Fg171XGTA43sackhfQSdmZFHwGN4syr62VeKi0fHzwaZEbX+GZ14T8HdGEJH726NG5PwHABpmZcvCt9xTuBZ97QkFE/28TkwP+QGBGFULkCpjnmSfOaXvrr7o9XvDt0ZFH2wthIr34ZiaSyRdgllKb5OGI0goASJLVwxaBt4BjyKn+xD4cA5Yu8Jy611dd7OI7ZytyLZFMV1iKQu0sAyu48hegBA/U67djwSwcNZlAtGoedFjZp9qc5+OqV3HyK83zSXf6Soes/4R2ZxNmq7tAWC2wEmiqMIbXgceYARN5fDnRjlCuTvk5zw8FuyfoIj/1Ln6SD4eUHBGZhU7BtRoour8Sx1kIJmKqUwU8wYmZMTjfm5dqgmesJ3+mmRmF0j5RXWyFbBZv0lE8Wb8MaDHhyz8yG0gumQkD3jjN2Bw3Ti3RKMpZDBLRJX0d7tJ8MVezVE+V5Fd0njza+FN4ucWOQpjpakKskd3K9alXh/o6O1HJgoOlyibT0Oq7thvNzBWQ2mHTdX1TdmxLzXOEmeuyop0isCOHXGvFhHyT0OHDYQHXSDvpUYZQSsVOMAwoye5KjT7JPqvADXizLrEWNnvKzkv93/j3jVjRhELzBDxHAFIMeHp+THuR7zgZy6wITPLNTDQfnyEkgsoHVyxDjdWSrZT1MOHuAQfcvPbuTy4qrL45/hOO5cD/7cja3VFp0tG+5lItmd6C1/ukjzk9kNoaVyeglZ09+CNBtiGSdfJ+Q7cQwhBIvJaVstgW+cvpvKOe3Fwfvy9Knq3JmwOY1WF9qRbqYYdzUsVNteQkblsxtSn8mn2v40Hi2lyNNaSycXvBYwlQjwg5sPP/oxdauy4HOs754jSwHVovdAMvOG3tq+Ol9ZgBYDvJ6CVs+6XMu2/G/eqyzOKhpQwA4XaVDLx+L9PIiXtu6YyAcgw==';const _IH='9dd1af83cbc081e1dddeb576e71e2805172f6fc5ab12ebd6242ff0bcc72fe14d';let _src;

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
