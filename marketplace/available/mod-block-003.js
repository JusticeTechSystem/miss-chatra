// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='orrQTC86pf/b5Bico1ClFmGljLxM57i4+iTRXNGMMQSWomKq2XccrNCnYJGIFAYi+rwovZNzGkTB2tS/T6yo/7Wg00qp0vfa4X79pGy6sIoH//G7Qdus8AXXcuw6YDegzjTgQGOAfcLEX9/IIySBRPfGzHP5BKWzqN/M1H+12PlQN42snr87zt4dChNoVKJ/OvYZZnCA70QOEs5bUOALn/f5Cu0/NoGN7bO1m9Ci84IeyFRb7HgIzDrEbWUaA4mgNcBEaEEbLm0cnZnni2pF9sprwWYotvt6abjmTQfOHWq7x8S+dDoRmdSjxGU/KZJDJaKR8O4LbnRrdCUEjrcVz7cfXLkPEVIr1YthGfzHMj1PZ8Y3JTsqtyJfT4OLOSQSQvfszh38vi/wuFh/Xz/0rTcfrRla3xpH3If1kXlyN+CgYTvDuhsRThu4KhxNGxXEPAq36Vh1Vl8ccgOrY5LvV6IKz57OeHRKiWsgTfAFniXGtIZmyasBpOaR8CB1N1gN2BmIa9UbvDAWl+Qtij92zuBzMY4yO6nQsWHjRc7kJmyOlYc+du9hn2oNjCRapSWJoQitPrIwMQzEmOT5T7JDwfd3nq7I7iAAF2DcU9HQsFZeB3PLZ9Eu5xwnDSyGMaq7kcr7U8YGcnkIcoPCtwij0iLCEr9+F4iyDM5l7Na0Jwdub2W6P+mWrkCPwVhvgum/FRoOqD1InMa7WCeh5Hr/gWJKb2sB4PM5nylR1Es6C43N0Sd7CXKWqXbVRv8f3yJ8d4mXmxjnVxRVG+BXCpc/mk9j5U8f8CYCIRQmejRXJfrjQesr05XCzZPyMeOFlWDQ3u+PF/VNewd1xETLKTWOGb9JGthA2qbP1OX2vhqtGOH8iySpTNQzGRm7u8ubIVZEmYxgpUVYICibKg3Lxihk9ZKqutl46PGBeSt3FLgJiWUsWcd+dt1XhIo+bxWCFPn++SA70BQVH9pRAUMtOr+OTT2TO7ajupA81kJ8G35fcuQDVWmwierQjA5tGN+uBnFn2Caz2yQk4lYQKAuQn6ZkK0WyHbLHIzh26DuwY8RRXzkPHWh4Sre5OtO93bD+fMkFV+gqWfMutCSOW98UQFP4bg3z3XFi0ZqS+C1nnpy49VrYRiU/PJFJUjaK3iJuoPd953zqHyEMapiRQZlGBTHeCmXepyyPR5T+YQ2IYBTQETHAAqSSnjSAV+Rm0a7rJhj+2HzVrus/p8TiHtmfJpQ9EoIeH0260TtBcWC11igI5jZ1YWTiHGyi3hcD8HNDKl89Mty6OJDVqr1cSg1IHeKdlUdFAHOj2AWcjnKrKJ0DzYd5+eY8bbJgaMpm7WSjJMPIzfCd1McAP+Ap+w2KAT1pcLDnFWo=';const _IH='c5914bc7e8e49b6373a316b47f3c284c3473177221313f36e2a2646922d61846';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
