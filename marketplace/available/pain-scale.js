// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLM3wQwv6C2GAiNPPr2yUnwlBuFbYvEEawbtNP6UJ9074NuaQa5PLLczJxvD6amB0RMBgi4R9GO0KCmHQJGOZGFNcQo+DckMsSRVqGgZhtoyLs7KXLn8bPffM1DfZLvqcbNJcMxsCyaG4YJdbqA+t4vBeeJ7Ta6KPyIUJmwcy+QWjrU71LBzBhPTZsmSM3xTM6Cl/A23LsTCH9EudQme1YzvY7hYlysPgiiTAbHB9RBoJi0iMHppFI/avNPRwUB/0pA0Xuh9O53tizJj4JssJiXEfMiq8f9sNW7HWdo4lOLD0NmJOquCOJvgcQs1ahWzZKzH+0BYaxKFpVpPUtr6ffIQjYrWTzYAnzvced0sedd73wmE1Bbbp9ZSOGePRCviyyCXqUApQYoe50Rd5TASFCcSjux3WCG17Vc15Uhe4kTfKnFvKfNgXEwCcPeASUXw8JUqro9PXR5taJC0AzBI0nMrk4JxYtZHU0OUpgdLQ/8qpyEq+7OICRJnLc/DvcODApSYY/rypW5P7sHoO2ANVl2K3Q6oocaqg7+3ZMm1UflaW3kgSfz7jVR/z0Z8i4EWFBnpb7EHtKi3uE4nCPX0HFDCm+43dYRdEGjXbr8EYUiRbgjW8q8ECxXCx7hGCdupdYu0ekk7S2i8zgqVGTiaP1ozqpGwSBKPou3ntTXVRY27v+n1lVWoWDtEj5Xndgiu3HFO2uWfgyVi7SBzPnHL22r5IaEYGpggYkgFf3fV6MpCPTzn24vUTEO3F2urKleJFwSVJnhTF8kPQgglg9wMcuJktX3mU9W/ayQFQIIyqcRQUkwjwVUwdeneylLmpccgLZpfhkXG/3PycrKxS+ppZPNMZ7B35gnbLrb/jNwnU82Q5UI/z+ohnBsxlDqsQbVPfIets2c2zHbJ7AvoXDwRulKTyX6csp/W5gGgR+SoXH4FUxl0QCT255T+cQ3CbVuesRE6boRTMn+X2UAjkNkMt56xkzYiGT6LvjQOjjl28OTVCDuJD0379k0/Ty7YfRj/QDl8u8GcMaVPsSm+N8UAQJERmGeavXJIiJxpx7u8NhtNCZ0wSsK77GjhBdoG9wSWOXg8MQVDjGEhg3XHSXjGhN2F1g2PgHH6ov5Pk1oHawdQ12UY2pxN//QWOlSftQiPI0NTnVoTY478I2KibHXX0bYMiakmeMWeKQRI+5at4+1LKd4BK3qmyy8EyeCTK4k4tJPewcQbKKr0AkKewIBHOJJ+KtigVP2aHwVtn9Mg5G96WEG45ldm58HHlr8uAH86yjgJNrbM/W14b8bBEQZj3kd51ZH2I8sBJz46G3Yrq234PksHZmUnx83u1Q+BBzInvDs9BClsVynmDPhnvo5GIWcFw2rN4VbCrkRYvskHPeeEH0lefiTWiSe7MB15bstAcM1WFEZ4sEMkTd/xoU5QkjFViL+xi9A1bpCX3dpMZb8CIehtBATbokP68mpPAwvgIPQJ/fGrg7Aam4Q0u2yVAjGFQSg/ohrkOdQEhsO2uj7AWqWOBX9vWIZiU0o5rsnNIGPisrZZAyC0PU2AjS830uWfeQdij1jd7F+EGdgvz+RngLNY1l/Q9hLd9giwiAGZe5jB7d53AAMjFRntSlTmbvI5KVkCepbTg8o8a1tkyyA0XC4GJ2lbnCtL5P7zMoKYD+mXqISfeecH0ylViGPLmZJ2jwLRC9y0Ipgv7qxvA92jGmOg==';const _IH='3d7ad2c378ca9ae67a9fc1d94ba3ff422f90db11ec319df31e5b091853bcb7eb';let _src;

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
