// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1sOX7z41Iz9YqX9oXz4kVVRxsmQZGrhHhbjK0CyLtlgwxd2FwwwYtIt06WE87Cha8Xw9qWJ3C83MRKZ184jci+tnmzWtRxF32q+DOhcH6zIFKLWNd8zZNAO24ud1Md04tpOFUH1r6qsG9rE2mJ27pd4hGiJHcnLlCulw0PIEgDQiwkgkfnsxdXcOZ3kW9S5nUlHT4P6u0WgwDqQX//xyTRcXbLty6L1CJmB5MhF51H2xEe6asqfO8BXqBuosmrFM8UzUzR3B70GxBChmh3XfMXrGf1vCez7qPCN+Zyc/dHq+lzBOBBa9LoFv9ZSyuS1Z6AnBL+qCRGv6vG4c567ls58Ul0O5jM5cxOpNVmKxx/PD+p/9MYS8YChUzOInVWIjF7cLe6lTbCW3Oj1KJKVUuibMTB3Gu6TH37DyloQhUbZuhcP8EQI2raYvp2gdmp/d01oAkHhrM0K9FTtmDSYcwT8UHaS3Nt81fTDjxYo/j4rRgA83QQQTGAkHht0Be59aYglUUjXhEs1xJTGR5bp2aLxikgTDYueCTmdr/3JYAXD7PWgJ3xVTipOpuZ6+NKcIITEoNBqU838dCHlIiIWAa+tbVTk7QYaJzCC4oI/CCk4GugZJOCbBCCZi2SWZE284VH741YJlzQ0WGR89RNWsYHBVElOJYSMbhKZr9RFJhwiCfqeSBN64w6iNUIbS4155jMnEz02TNTLAzCme4pZJ9zMQWITv0Gvs2UCVA5UZizyDI7YggHd//LIiW0OGvsi21iqXPW0KI8Q2W5zpPa4qN+bdAi71Au8TvGJJw/h/Ke9Xm6YZfUWI7epdjrafqiDiRxZ9tcQc7eO9NWhA9e5P9Vs17B7mE1yrYvcwwKoVGHr/0f4xHdRGBIG5O+3fHLjypbgWq1Hk3k0t3B9DAerfYdiCcN1211Trzn7hLIcGCW8GEmG6WspUZ7TseJJudDCnNBWx46NEKSOXqnNL7i8xpLPjZ5tkAQV590976YTWSHhwTY8uDk5OO4X13OM4xmS0CNqziVd3rkWrhLLdDOuFSrFtI04G426v+T7ldoF4VRfOB+BRMaE3z9Riet0wtA5xlRHbOMRZjn6E5kgAJPCjOq8CQ4b2P4hYi9F6SFd7fjJQk0HFstE+mr9iMFA51T+EnOXDw1J29Au6aE/9kpji4BUkKCBXgvPffZo6No1q5j+eV7dJiSBt+/6dFuZv9kaV5Y18/8PSwR4bmPSUqSZ6OxR4abddPm/CNlI8icA3Vu7HpQrprejjotT3LWWsmwUK6BrvYnGUoTQeS0yCrNLxh7LE59OK9RlwlWK8SiY92ow+b5a9bNxlCxLQp7CsvHyoOd6P33jM2Q5839r3CYQLC/1lok5RydzG7nDIs7xST3w==';const _IH='36243762d075edf934a1ca25a7e2acb3a8faa173c02599a169e318e567ff830b';let _src;

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
