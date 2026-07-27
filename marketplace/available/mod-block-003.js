// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSdHTEYNQgUGa88imcIAr9jsKj5dKAN/sNOI0Wvqm2tIGR1k4EsgbaYZWCj0k48rwlt/jyN/NJYCoqFWcZh+UIHEI7n5JD/ZpABTPgWxybW1hIoK5se9ZXiKCYaOKYjW9g6LcluPESW5svW0N1blxiBpcSeNvjZN8x0Q4FHebeF2M8Yd6SCsFR71yukbiOjrO46T44A2rgVeA3Pxzd6k+0B6+GTAvXTeU7+vQUa1Lh9EQ+1rPi9ityBKYcrJyjfIRa3k9NDmt/uhxc0Bv1QrXHCQdMpUfGiYLXxaAWqmraWPBAeLII093UKIYcsKUn95qPQW2DBOXfS0pVLSjhlWOo7wsDw8dvErsf9D01ByMSbZeMjZLjb4QYhN3bCdoOV4hDt7OD0CzCkhKTb48VdrVgb8HISsIXXBrOH3g3l52IJbbrIH4hTonE0meZJRsKxkxxJvBl4sYPpKFCkUjU6OkrU5W56ZJCRG2/cT9pNwyOL9DbbSN7iwodxziDxKqYh/DCjuBhxdPQLu/zB7NZvlUHoMmgZmh96suL6QYqBhSf6mncp4hdrnfV/kxZD/gkKlSoYD7S7rzBoO+omS/hojB94ZIO10MfmG5Kxe83ufykFf9j7Iv/AkhBaI+GtyuefSQPGkIq+Jlcv0NM83G9o0x6+5SvWssmT1ZsG7dPkwDrhLI/x7yceKAM3D/mnnO+w1hmV57+PJfNQUKuv87uAH+nCeZnNY96vrDuo3jjlmLY27fMgKl9A4zj9ogRcrTiVUUdFpGIk89V4RFPCFJVs6w/nJJ/xyGat5lqt7UDnzsUVArkFV15gCzg/ayuwTQMm26y/yk9ISMfkZQEk8gAm4Ly0e0nU84q1MtkWcwfNenkWS7+fIDuvdehwV+CLSjL6x0UUPbdBxsV34voZEsj0nlVfDcDR/ueLmR1QjAd+ayTY2k4SyghQIMB96vCWA2XWHrZMYevwH7SKqSMhWjv9fOvszz06M4nN8cHJWmDYQSw0NglkZxkHs/LbkrYAtDBoZetXrYvDUsxx6Syx3V6H+XwrhV9LvC4vGL5N8RD24KSf/94LiVpkoSWadfqTbRpFAzIsXS/wqbP4NnomHhPVpFJWN0F/KWrqz36yLfng4Olu8ldWR+MjcPulNxyJ0MPQ+Cwru7uX3nn+hdu4W3oBsLuTGP1kYJkHgstumXeARB7c3KNk3S8geYkcH7NxEGX0vfv1pKGujJMd1AH/gaFYmpdzlJQoNnIrnLMHJ3rGq1W+D/Ohg1Ur+9DfuKMrEOnlagL8TRJX9vP21v8miBxJnW1i85Z3Awitu374O96gvDuruSVnevx/I9moXmRG9VRbmP6FxML2P2KPrxaIoHLjwA+tc/3UQ==';const _IH='404296a5c78e72786236ce2233ff8d1ae25de72a54f55a05f34529ff9b07e8e3';let _src;

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
