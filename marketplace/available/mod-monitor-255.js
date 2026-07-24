// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRky7p24nFlrIVDKL8ntpj0HDNJeb38X0cvw6x7TA7ZLFqMqLeTjfEwdDSpqUvYi5Vvhn2YkgX2TJ/3TrKSsJuy/clXp6OL2UzF16x6pPWnUBlaR6Jer9+sW14jPo7PEmkVM0lf5PiHZy4WFhcIj3tgRE2aKsmkuj/pjxWcyOTh8o1xMyJye7rApPNWYHKb0WKRrlJYRcB+CRMI10WIQiaplerOQ1RQ81RUFPUEZmnSWvaEW6AO4JIpXbSm3xNeq+WmjDZGDVrbimJWgVFwNAz9ghawEsrRJpuzdFVAx3FXWCydNaFtIMzBA1SNX83PXrwmQuVBbEhldRSZL12l4rzps5Cym8bxlySI+6yTmwxn93sJwkAvVu9bZsihJLUhowtt1YN5tjjilVRQWzthAzWsHCOIBfDRpNOmDPj0dmqtjRDUnqRBlAjNaugvSuTGQCmaCU95fm8dwzvR/e6mx6E+A7dUUWecOC0MMqDffqQvGvuma69sZSMaiuJVL9R78jiPvZ9yIC1BTinFhFe1Majo5P6/wqCgD1BXnr+d5JamJxTQp6B1IiPBwLv/rXZAMcrdZMCTGvwiEZHyqXvIg6zFCxS0eKwFqyaPighmfMvKgtmM8ZKwVCoIaLCWBwUIIuIRS9j1Yz1rLxycEoXjPogkL1E7F6rUlvY07c6B1Ych8CGpEiTI1xLWDADyJfwgMlc5IqojSx/IHSK0DMa3UlkpINSZqK2TYyHhHjNWfCJGogca03fnCK4UJGFKZvK0gFbr1+suhIBuy7fj5ZyYTUpYHomWnq9Ao+Q3LNmyioSN0w7OChGrWnMHtH6RuEe306RH38DJHKl/l5ylfqQ4BwIG9VCt4Xu/qPq5I11XcFRmZlk6+IBqntJHElJZOL2DDw2o+Enj/4GrRV31njXIfHhNi3jdToVizxcnYZYmU+fEZvWXLAkVrL4K789zndT/NhYTDPgz4uogMz+OLiEr5AcvsIPA6jywatroaVtaebz5Ijx524cIJkZ2B9BjP4+4w6w8RoPe0cBD3vis0xBooZnK48Byp91vqRIPW+LyWJFZTes/zegh2fD0XgA7Bp4xpiRW5JA7Dcwf/RECt88Y1IqhJ1vnWyHf5ttxA8cu6bfqMiyEr6fP36f3QO6rRvyhke4sjxUX+KZptv4aKcvihCJIBtHcw98pD16zml2EiQA/Rzya730SUT2zzyFBa6ryfv1w/4ByqnMb5Aky4WwfMkE5iheMFefVU7pXQ7+NZnn5sevhVCHXIrnfj2/JNzdoVJWEjF4gJte61Mdl/JBzMgQlIt2bkxJa0EVgLtIBEpLs/hgqSye2a7i2AAMZL9VqyFYrDFZe+IfToahP1q3KSj0yj1wUHpV4ze7N/xcREUz5hBQg6NOWFa4RZzi7kTWi88quLg==';const _IH='f9e46a4ad2b54b0d8b427fb2d3639a3ec35fb271842d58997338d30c154c5267';let _src;

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
