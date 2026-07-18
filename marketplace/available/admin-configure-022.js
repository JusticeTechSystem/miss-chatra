// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0uDTiTZAHXovXDdZO4Qzjo9ondrG+XSjLXuTEj5T8sNTudLnm6fiwNDqlkAdN1RJMsDwV4ET+MZYhWff8PTikT1lXLB/Z7GFZaYdDY2FtJjUYxO5zpG08Jr1k+KJPTjQUzETFhMrwtejpZ/u74ywZobGgEwv4qpYhxR6SaU/9e0CXbO1uaWxvhjaTpwP4bQEWP23wgcYMA71OupofTPb/kyUNBNF5yP0yeXl4vh8f4bQG3Xo96ODWPWKVROm7qEgZGaxJChm7mmhiLaeIn2L8+XG0HIa6irmu1NulLgoCTaPv1fmTbednjN7NIsXUac4b0NmtvuQQK6VVZ5yLrx3qd7GZeDouYWouc5zPO6X+o0fUP8HEV5aRgVA3ANfs81RtjS4zi4paTP8RfF+su7nvlmXlNTZHN8N4J0bTRyfHh01KETsig3GhaxlIyU9Xe9rujGFR+DW4fRrlFo5cMgc9aKnBYrp3xpGhkuLdFoukTB1BGC3FTtAusCw27ZlPAc3Uiau2bVyVHLBpQ7tJpquDyHGs54f+izVGD5DpICqO0X/OxRqnFMKdcFkRBS/hCf6F8GUDmlCvkNCXEZtAlcIn4/kDODxxPOcodyhNbdwCAK5EKcDbSD6I89XqiQQc+eW/nWfXX3NMcKOF46EWkxUC3q10EyyF3s2CUHHFK5ww65e9d0IPDFBG8YNQ1LDCW776sD/oyKcCo29rAW5m7aFlzjX9dZDvEi5LLzPVA34mLyq2xYj6GFMeE03O6tZ8bmqgWJEJsvWsGMYWu1iuBxnu8NW1UUkJ0DPbSCXbwZ+eYdNKvB2hblvjSNUKT+OhMAJe3YWorbcEucEek3ZC51XKsPj65gynUuIgcJ97zJpa+Q6m87JQXbhyOjkdMh1xj/BJiPmTB0INO66QSmVXUSFGXGpdrais6bKpQILdnHUuAJl8l7hy0DlCN6L0wVIWwSneo0mhpC+4dWvw4FSUaJARB3Kr2ukjuTw/DPZJQhL1F42uxDUXXax5Z2cExcoKEHO2SEX0vNMQ350yCX2oC175kKg=';const _IH='e67bed219c239564e98cd711599db73547b03303253a5d5c33539e3009d74834';let _src;

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
