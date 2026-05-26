// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CfthlioyGWf8mU0F9E3KI4LmHePUHm63mqP/pzXvk0k1YflG19eP/mrWjFpzqvhJCP+yGfbrRGZGBwkINxSkeRULow3PZs/3W72J3jKqcKPehwPhz2Fy28Au3m98xes9LNeFbMvGvsJJLLt3M3fFBkEzPlQkBLS/KKWScMQOybZpeDttdchrKSjea2dSyTk1ruJF1ic7ZV9HHcj08E/RnJIA1Q20YVF4CLfQjUELTKoYqj/GS28UtAM+9NMIWmeqzIc+RDBKRhXa8DFPIO3+YWq0wuI9wDqUGL+gXx+ZqPSQBjz33Igjo4SLHEIg4DYB1sXcmxMzGmnnmLNrLmLKXiykJsMSgxPwuMpCWhOXASlflnOdkjW97dzxb/4hsnh9kHtsIsHTGqD6HhuL3mUXB7b/o0QplJGR2anCcO1V2U/92OzrJ036qRd7EubtDUIYScpcIEJ1pmSL7QkVxYC+EixqoBpG0D2iBtznhigiAk+CXoIQak7akHvbbfgKEYBxfESztbfFF0YwBU/iU1KzYyMUBhDY7yAegnNL+rBeAqiJb3xGHgdWFh2oJ3uzxdeIFI1AWy9PQ+e584xbV7/15TaGTydLzmaJWUqGQxEBSkIx1JbHf+geA1H304jLgYBbsC+oi8X8eLKN3H0CX5uS8ytwzMpnWrdi328qMc52qgma9HysZIzeZSo/nTaTwYEqE8a3G68VpKOLw2uddVOs3B/XbjbBxggjqbi+qOoiP8qczq0xGOpl9RMWljkI/5r537B6Ow+VEIHF8ow3w74e8w01UsHRfKwsCJu4J/KLl8ULsZdx/m666mfP2NCHy2sgJRt41OZ41OoX7JVyt1ioU2h68NYeEptQKskHKy9t45ygjnYgqL7q5iHSNhNTEC2b11BQGxy9cawXRVX0W8yu5X3xokOr0aaP3bLhYG1NUB3jx7YFAfZ6RwWN7SMsVCivpxqydEUn/Xd+omkkhVtmMDmDnA6IH6p7h+Q5mnEJbwAPj10y41NfO0fbxj1k8wvQY+asPmur9PdmZDYirffjd4JHbO/QessZI2/Nw0O03IwPYSw56VcuxtSDpt0aWg+ghg0F4dul0VdmWf7NFB1MBfKVY+2vwZxx0HzkHgBd9Vbq/UIuXVAn76w0qllc4iSz3XLqt08PDv/yLgeePTXFK7NteUyCsJE6RluipabJbEaEX5KxiT4FO6x6tP5e0zV3FaRJmeO2ZfOwzNL+npg3oOIWMr57crLFj8Ie7wzEAIdYI72Yb15NV/h4wyV2XJAOY63VM4R4xMeMvxZ0kF58zz+CphEnAXK8e+feTHvAY84kdvrgqV87qKQS92bvohEc8ofktH0SC6mrNqrB+OnFZf7oLeOUtGNDpp3KoWel';const _IH='79c7166336d72e56d19631ab7b57a9649c2d7dfdc352f9678b1cd99b98068440';let _src;

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
