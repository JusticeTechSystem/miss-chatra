// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTM66pNwg4KL2sSXrSOAnNKi4s1eZilevKorkZk4Pk2LBqaOpyr5z3eruRbCPxu5uDwqnFzFKqyhzBLYnxXs2viUMVcRdV89OPPlUftwrV6CjpsCfmLpE3eYRsgxxzC2RJfP4UgZNIMlUTWMkZlYRtU9RtC3B+YpPpob7hSo7c4UzJjY0afPUNhiiyTUZ79SAi/6/GRL+gzu9J97BGcH1/3UXNY7xxiMFlJEgyoZR6YFDgz53A73QX2aEDcErDl+iwvAyNkugpvE76CtBLx5Ba7tPO97HXEZcaq/j57kEsMrzvnbZbWiW5sOfQpnICmEHpma+JLPx19P9/WXeglKa9nLJT4vwjwiscmJx1s9+dc6m08QerHb55Qrt0tpv8XU9Tx15osZmzv4Ojoqv7zqoihKggSEc38IMu4S/bGv+7MK9oJBI0Y9rCrjWyiOR0jzNQGEDTfSa43ovIm1J50ZeuhX35aryN8YjBc4cm792ZuRQoWPr3qV6Z7zRp5aHEaL7kZnnxikPtmU0qzGhSLM6zycfWYRU7HvmxCOmMpgbl9y5mytANkSQnWzChNThPtqWI+zCs/fHFKTBLIf/IupXfuJp2lM/OWk9P3jbt5ZUEDOAv0hdLKdTcONvGXGOclcDtXJOO+a61u5FGymddEayUlolAYpszjxAXgjRh447KqhG8CQ+NTb8C4+E5Q08cx+jwlztIAbZqVs25Z28eerKsed616a1MaZZ1BXY6yM/8fh+fhbHhSGbJE7tYUKX7pRSUIBpU14Vbz8GPS3Vom9tW+1O0zFUK//UE7nzsiSfRKwiwvK+ZKruUB+T3K99POFxebWjN77/MOByXVUYgSDsG0Y+nMZfNzZ1nLpZNC/tppmWTmH5D/SRPlX5QDE51TZSihWN1BoIBXNtF8RAtJxqz3RL9Ji1kly5CtbEhIoG91w4sdasE9NMWrSjx28U7CNAvcrH36A7aKyBkb8wwiORxUf9qkmjATkz1H3UDwyTOXAwSYPmNgZ4xppbI=';const _IH='0936e216428a674725f565e309535b582b3e96cd4b3fcc95d4611592b805833d';let _src;

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
