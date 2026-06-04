// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OKXT73keN8koNo7a7Bu30u2u4cMilQq86D3le7eAAuOVqdK8k6KqKEu8+2+mmrjo0iiFLqlhGtWOwt7HxwoZejC0d2a25URyh+KloS2x4HqsgM15FwuV2Ov0S7nSR6j1v+AQa6qEiOi3KhNFs/Q1cZ8K9i4xOU09/i95FnQQds6LdWa2CG7Y17zgoYB7rmlSo4wdd3WDT/mpqMY9sfDQ1OqAbPVwyxcpAJYdPP+r8zH6dyxaF7XJt1lAX+Dg2eToZbbN0eGzxR7//p1SX6ibOxxf08JNW7glxVMlOB4SpkZPV4MptiauCH0V3o2GRVYCUXhSLTmjP3/EssHaC200QjZIJXKHSGx0Mhtcdphg1pXR4JbGYUPh/xpUtT1C47C3MMmAQ5KZXmLq9PPYdUYvcnq9BDqGzv3Y2o1YxV0j+ePTWxhRdDQZ7qHJmhgdE/mrVStXud6Q4+gJonZWdvHsEwnlOC0obQvRbv5k5MWZnOw7o1qf4du0eSFJU3Rvvd3K9582uKk0WLYbidM6h/MJB68Z2y+1bTszkGydhB3XU9HDV+FmnobTh3W/rrjF7nKZZO9dK1uaCXvn0tq9cVT8AQLckcUV/Oxl7F/skYJadOILPYlGtVQYBKeYqQ/nEsJdm3a+IYqlSjDKvCEOyuHJZdbLUFm0RqrQ+6F8pjcbo5hqz30p/TmNs2X2tn0btkZ7SIuClbPFd8z0M7Xm7tfVk9UgygOSht83usVyiGY0d9GcJd9tW+u+5bQdM0HJd4I62kOK9aToXQuf+dsO5/0uh0cTXXrmE55H4X69tEkkb3uv+N3mhCqDPHnIrcRWW9sPRGWl3cqtyrOoszr8qgmNFqJWJ8umqI52PdHGipnbN+ui5F4QAGW76EnI6O4hzbv6WOZZ9AKgt79uvUlzltWLxaX+Ryir86q8xLhUBezCOPIo3A1qm/bnrqR71uGyrWNvoiOOxy1LaXRceBWGeMR64VPlm064aC5vMQMAEHU6ORDkqpTsR93vwwo4ErkuMv0weA==';const _IH='219ed68faac4b39b920b1b1bc1a406369ee717bf1f32b82d109fef9d4af7de91';let _src;

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
