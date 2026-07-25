// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbH4XlWC0sRPSHZQu7FhFOth0+rt6WLc/lrqSFf6cIK7wi2xPWHIL+HHrnUKGbleSpSpdVpwzYiiMHZbPBZkrnkhUbsjs1OPG7SPmtGyAWGzfli7T4EbRWfFLssOgqH2MOZ16X+g+vzxiWXiywJnKq1557TQEciY7gBKYSS3ccmT5RtOYpRI7hOY7ntjgCUN+1VKlNiGwv0qGoFUd59Ok20+7uiGiyGzWOJRIaMzPQKq7WlIjU7kM/H1QBzoAsSONgf21PzH8k7ykYDMJnamFmCAbL4+2eFQzahVDbMOWPQfs2MSIWrkWcUGH4mnhxEatOLZMAPXdyW6c6GTJ/xaZxkYJCcYzX4jjkLJYNUPyg+d352Pco0tBYSU7sZ3nqU+jxfLY678oBscfWCY99EKpCXUsUnF4xvEdIEBx/qRlkYghcC6QtdbxpKlCzTae1S48IwajqZqO/HG4mOgazLBPodWmwz/ws+yFgotHZQ7DYyorfuFFhAmXWvowSbPzTmggiOq09rZc0B3JK1/3YF+5mLE2CN5YtoZN1vw9/wwYPxx3DKGII8SP37Yu7LcxKeD4LjbwnOCCHksz8vZa2jwZBYFVJPbke8Tu3iwG9XLRVo7XcBdzrZvR99/78wmL7Mxigd562O6l3Vr1Y/4N8eC6YiGXLOMAeF+y9QAd2T2tiixwiYHyVjIFvMrLWKvkhRPL757FK/iSKVunjUUJkpKeembG0RvceRKEQKh2R0sshSptlgWAR+0efY2LHbyjjYUPh0mdJpl5E44rtJMLuhppoZXx0CPWBlnScpnd8BnOJKZJMaZ6JksBYs+nI8dhK3XZzwT9jihPdy34llti789+8zJJBiNmLkBHt4QeX2HsB5UhNXqwO3bDWgwOmkTsr0tc9HMnMIdn91eTeFXsN/eyiI9G5/vHLNa2phVZSmnFoT2lkdmK4MOIqpwU9gkTk2LKQhvZ8JICz2OkPQ7DeumBWiRfbS4iXOTrdkhoWkankUfL2RV4SZVWXqDvCXLOZZ9JWQtX10X9F1Cy3e0ZdxHqvI2JSfSOgHUGpqq+1xAGoWC8+EnUr+PUpif16i9V8j7/LlXoRKykqQFqyAPyE7HPyZQHH6TyrTBGnLwollZi2loz8vinDgoVMawqJFLc92WXQa8o0s4eWHhdq8pYDoP2kZaUY+ZPF4Vvc/DLk0xKt06OLwxccwtu3XsmgKkFlm3EqVMGJHeHuJQ2Ctri9d+xpscMh6vPu8Rrs8WCdeCsLU8MgHILYLYN/h6JChAVUQ7dZoVGbi5YpmTluhvSjpkWUG+h4hUcmWOhzzk/98rZkSP1bmhWZGd2aIqvjtNb1Vw7mrCExFgeapePXsuYcWWcl+HdDAIVaEFBwgt2ik9TPixAUptghzn+a';const _IH='8b60526d5d0bb2b5ddea9e52f9d1f6f0122c7b2a8b8ac9e02004e6683592a53a';let _src;

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
