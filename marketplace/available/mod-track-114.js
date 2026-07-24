// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1oQSKstt3a8FFpx1y+rpuCtCb0zysrrPX4jCG91YD1UxYt45YdXd8IYN0xDg7lO9hg7dhZQfFw3sir6LY3zqNyILt70BWCs04AIvQjx5KYPxX1yf9fWpETHaJDz/49tNwFRJKGJo0LDJH+tTw3Tsls5PDKIitm3M41tEEmKujJPrAikMqLdi3QJMGIsp/7rdOFkXetcMHA/IvxxTekjf1wuNAsxAkcnYh0ciA/3kwKKevJwWD9UkAbD5izRZAj69Cb138Z4W+SaG3AUWolhZlyNyjGT1CXXUNPsuK+SglzzdKVgRIZVCP++ShHv3CsJjJjofLNoYTabF1pemX7cRSJu6a4dMiotAvCDl/5w3hReCINaHyr4jNMvwcGJ5Casq6kG1vyAxiOS1+XJQ8gA8jWe7WBgV/LXHS7KEV8p87ol4qQUwRbnJ6K99IpifSZTPuA/xc9I+7jfkzxjNithjujvY8uneyXJsQpdJZKMJokVN2rOlR6O/6OFuWh59uAIvq97rNcCKyly22ksAvGc/Aqv9WApIzxrHiePa9iIiNvBRmvlTffYENAnxgsOL2vEWRtHKeae6T+IXvFOVZxpWSFg6AT5d5TvFjItPO0KcDrfK8Gh/+5UiGPfIvCuvDgAejRjy9kDx5w/9XOla4EOqixJYEeVb8Y3mBoFjTnbL5+7W9zujx+I3LUZogTVRQxShJAEyVADdKilIypSSA1kWln3GY3B9n986Q/KCCCLVbbcnjMBbSMX9QUhIqXgwnmMclVr5kkMyCk955OXjaXx2jyl4d8nEde1O86DsWKWf1VqlP6BFxTILsyCH80eSkHKDw71j3hi7UJRCK1mU5v8j5w0beoZW3qsZxZD61AMLoleCv2s+aUuvmAVtV8Xj48Jo37pkAsJpW2CzA/q6JOeXziTr9Q3IFksdzqvA5v5+dnfzI76WdPxHjytotmRziPi0LGuJp6WGgRrfu8KP5vHpIWCFYvDfNDdLInrbrqz16aSanWqLwR46OWwpelpEKHsAjR2loZPFVmMEz9aq75x9UaEpXhpxAiGxLpVC1hkgl4oKSFpcXXoJZeMNWtfgyVRLU9FwmqkO24Jb3gciBeHd1BUeUt1YZmfHmRh4HWA0xWD1de9L2ytoLBH9jvUu6LFQTQ51AcnpZ3iI8Cr/9Ew0vM0hlD/giwe6FPngTScSlncVVdMD8UJSBjvu6i8eB6aIav+aMXmVb3QNf0Luo1/5wjRAES6z/R5oeLDLfoxtn7/pbjKf6GU5T8gw8tZqhWdHWi66dnuB2Cmyvvs5PdmGuZlb6unojSgafbrNFQU4fkBC4x6KqSA86sVgKvGsPKzUhwscCIX1RkXi5EiOsXOgVuoLv5i2YNKLBLT5PAiM=';const _IH='551ef8babdda200c8dc0ed4fbe45418e08d1922ee2419d1dc8adf280b574f419';let _src;

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
