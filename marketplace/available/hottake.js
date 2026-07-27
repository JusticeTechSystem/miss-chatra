// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQivYOxqijcNNVaOVs+gjk2cmMQa+mWQJ65XC58191TyUjNLOh0jzJkDGIRupMZBdOUnbYXD3lWrGpNHdW3+d/mT/rdwN43ZaKO8mamgE54Da7OxoWGQJXRCyamH1exbSjqJv/db/9hrcbJMllppE4IuKHNOm762q7h8+f3TLFOAtz27Lm1hQhZxHd0SuREDP9mIN7hLdT2le5jrprQTmtZ4jzWMiDwdxrMp80746QuLadAwX8gAoAlWqFHNIVrUJPiUgksiS1oer4SqxPY1YH9QqoZbr4pa/otbY6nDTZrTQrJVJlV10PONtUSTXs+ABU1UEwxTqCL6kDG630Sc9QbobeowxyT28U4wU6KFCqxg3kU+NYXWk82H8SQazeL1R0gR5imSApcXYsP1P2mh70s1xgEnp9urDSDcuGSWeI+yRZCCbWKGgYHxYpSdoSIjcwWSRtc6p6I36YDACIuhTO0pqPp5GlHFryOW7mQXxhowf5uFICDxBJj26ChNer/nA22KQHb522V+7ophzMWKAwq9Bg4MJ+s5bJYD1DwiqBlmIFZKwuUSqMm/M6yeD3FYnOkqrMlymPYmksq1Eyeo9QiE4lmrXP7zUfeKqfeWQbxCGeyT/bUZVGVSLkzOMOFYAA+NwsZElPOLWpCUU0jzqXi04OLWNxPf9FlLB65e7l+e8WHopID3N5jIdA8nNUpus/NDnVF6Llb1sZDAlFzblrXd9JHuAt5rBNLw0rNwl7k3hYs074JgTTJM9ppx1tWTIH3F9sxP/tR8Ulw5p4rd52uDH6NNSFTJ/isD7poApRr3jzxy77hvtIpMhAB7JuzgCXCWxJjTm0kZKLF7w5z5rW9HzoBpeKXjc1JybyGV/O9p1alP92P3kotEyA7/sEDIFrcX+GxMp1UeDe/3ubv6h48QNu2roe+BlQpXwiaeH9vB5h45yx1yzBwUHJGHNqHH7aJs/SnbmkMnWwyw/U9NGDzvWm6cE8LHhNzSnb0CX1WjKy1s9d74xMx0CmG6XySqN6Loxf8pr1L20tgohNShEuFDHNIDjPQiNckzXnOEnNpLmG+xRvJPp3O8tzigdYt/CtSNtzAmfVA5t+8egA9GXvcog8zLsxMkuvzI5QXdvg36qwKqMA042YULrpdtve78c01MsAvyjIyndJNr/P8TpfWhcJk2rlulZ/1vTTX53XKYGKVvE7DBNyxxJRxUh/UQRAzqQ==';const _IH='ef693d2ace626a2589db6abb7bea2d364ab5faa79b9affeb9570d7bb80dac772';let _src;

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
