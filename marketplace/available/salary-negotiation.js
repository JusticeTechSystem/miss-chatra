// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtWBCPE/v3y5q07t5JNvNWQwooh8+rGtEc3CHNFVAWxEkkZ93DaYytp3gk+mroi0pIfLFeWoWJAbSDmk4DLk3IB5TCpr+hLoi11LKJkKpT0gu5cWy7xwJrzG+DKp4ptEboBebw7Tr2CLygBi1UZO0UNBaVXN726LV8fe43ZmG7B1fn7GIm+Mq4K7Ca1vOL9AGqgwGW30oIMh6IVzbaw2xO+rfr91RI87um+gYlC9XG9o3Fgtn5jmIK6WIp8Bhp/4Tuu/4m+VIWHZBnjELTng9qKaNxsBOpVnMFyJW4Rg1ctKPVv3ZKMaDMNZCI66Bwe9X6Bz3Rlz1dcioCRSjdW1Z9I9FhpPOtWrtnMzr9tQF8PEU1/UQcEItw0+wJ4mOt4I+mtPzZNVfz8qxhoYOmx+gKgEcJheLrIrmWlwVrNxPAvTMmRK81RXR85roFPR1cj8uJJFBmxZxuevooJv9rdy/F53s1odcmYLrmjuO8TuZQypQF/PSNMtx24DHIHne+zbbtGY5fu9kdVpV9WVgmt5CdY9Lo33Kb+az7nwa2nJ5N6r9CmLF2w0dnM1/K1Sd38V+2sfK+2LSivRhcDSQVqBvuQY+17wW8v5jAfzAD9QhetvZtkXc2F4xuAnv3VGLaxburJjBzaXoEE1z8VOBZEgdq0V11NCNFBEWLzmLdLRDPp4s3EQYBT4rXoBXyaIToUaeL4UHW0tdL/9Lh1vUGHxJw26VKpWpO7Uff7uLVE/VWhR8wcpo9/qf6TV9Xpn6zGWa1wF+PdsDJk9RYjG5OoWd1R0YhbrVJb4Q4tk+HDlb4jSPGDI+tlNXVaUxNsCqO9/5oLHtNH72V0UnyN3WONCIOBlPy07Cgj2r0jq+7S12YHiMknKk1Riu61uwIOcUw4ovbQpki6Ms6HzDaCgFPPHcIcR7r+AZ6B9lgdnHjYZ01TXjlKTKAe463O48SUXH5vy2adHkqKTUfDir6eBUeiZKM/hBB63XCJU80jHooKLFHUVBMrHJF9vNbqf9qZkA1hvl6RAh16qdliLSBrKpAeSw3PqIGRzxh8XJ1DuiEqxiLvWhd1JRA6ITE3uABuM90NFd7ihbNLEAaWkjtyL6MPxBAhhmTsh4A/A25Y6OHvI/fg1CSPbcAl2u9DgZw5bXvS0fOlOMOZ9h198Q7krUhC3ZU5SY2IE9mjaZGVH6EUut4sVzEQ6fE8a2EVPy4XJfMsVKGCRdeSfGLqtJjHPz5y2L68OZE62kUbhuj20GIIXErPo5PIZUPUBusVAHUzhs/AK6abVVqxmjKt+CzurcqgwQN8GigkfW0EE+G8RQ207LOeBnbvuvaLvsVKxLC5VKTz0u6YgABdMuOkAor2K2VUJVv3ZB1rO8Aog==';const _IH='50076c7e8e090fd372edb0f30c72bfb627de070694e987f16a327f2ec46b44fc';let _src;

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
