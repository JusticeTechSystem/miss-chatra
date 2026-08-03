// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRX1n0U1YyGnCIUhfoVO08FpcZc3UylAF7NorlGmQxXhY2IVJ+VPikunEtHgNNJqP1SiONhvmSqfoSB98Qja9rrrdNSCESemPw46VjiQ5TuutVV1ahiY7JWGGEZGrxCQ4kNJ3o5aNsTmKxbsHZnNJrswCzqmWIdComBY5Mokinr+MWtZNTt7UP0ZlY6h4BgDcqPxLg1Z/1pJSLpolVmPo3DwHtwNzpwGg8T3+86RYDO1Bmh+tPbXrxnl0YzUliAMtUNShWf37uYOO1LHAGF3yCZb+bj79SqOgN7x0ohwW9CSD6f8CSZxNGJYxZCemqWuaKdvBsJJteL3knpFTiY+nrpZ3xJ4QWFWAGMDGxdL+pBL51/yMbAevjAQjIIeYHtd4w2PSb6IUKp5fi167oQmhLFxEvg+RrTKYfkNed1yfLUtusyIhdyj5t3DR4ZFO6Pta24gAb4JnjGXsZRleYFnindgA8tNgj5kD6etTwKW7Q+7BvqeUg8wtKn2WZgU2PUcKWJwzNpuaJAHZd/7FAYIrMst+WKqG5V7pLZbs7JrJeDw8xu2z/pTfR/nNmnN6ylsOA691JqG+n7Q1WMIXBTy9LAnP1+V7f/tcWIGlLOnmVI9iA/XAQ6Bx/zsMwR/9kIYkObSw2iGGcsIC4mxJ/+uGAWm8GYzThO17ryQ2YI3LA1euLRgLQj607qima/eCOqAyoiJXbZdxTefhXAG0q6mT0j/6/MDO+1V3SWIswIV6d6Y1NjmvxKKI1Ru72dUVQ8uU5p6bNksbjFOeTHq18XCY4tOHmQAMXZKBMawWMw64Hl70TaTkF//bJrTbLyYTZV8CjvWDkNDh3uyB2vqmKi4wdGBEJLLd0rxacOHem+YMrDbULxvKejAxupwTNorYINsml/a3AGXYzr79U6NW0v95QsN5SYWPxUIEqhJeHcsO5oGvU2Qkd3pW2g+MxTc4cW6iSRGXUsrfphZeSirA/oi7ouhJVAnyjOomI8H+DowjOOxA4QD35JGia71WNM3uR0LxLlFOMiM94f2Mk73qqLvryvbQznLqqBQ8wQuyBqKpNVbRjyQ6zGcVazDpNsdxbeXaSIY0QDPPWBZfL7go1FlqI6Z3vrPJjW9EAQ0nz70MJPlsclM0Za2Nw5I2gSCLaXFOZsemcPOptTPml50y3i5gNrGf0Ypxlw/Uw8bZtL026Krb889v2kbSU/2RY2agR+WMt7Rg==';const _IH='5f0c9713c454a68bdd6297069254b63c3006ce9c25ada25da6ee1a4c8b98b246';let _src;

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
