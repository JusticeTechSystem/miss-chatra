// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+AKiM5vUs5itwgTx4FEykhBpMeq0GWnIft+Ofv8CmrRziv668zQqe8kQ0bmkgQ2ikd1Asu8vH+HzcG2rpb2lwNLW5Lg3aM3sInmSiPQJ8QLtYt93VPApGr5M5Zh1IZVbM7oxN2spZ/mh+Rxwzy/sGsY+MVlqvtUHGib82D33HIno15XCSj7qqHOvmpmrzy9QrjxXVdU6jee1j9XcTa1sEy68UCIKIQxyFRpZfgHOEuVdHhITgxMMFIYZV+JPFrLosOm0G7mRc9xVZXOqvMu0iaES8uYRzW5q4ZrjrzKGwrXOmjBfotKVSIC9f0JxmtQE9o7YbqvX8tXOp5s+ZYsYxqZKX/YpoA9nYsCvVJIvWMeYEZWpX0kIKswRhVBkHVSAMqPVCj1jx6HObPcY6fWdetTZ4r1NE1EN/RkrAFq4oJGqVCg1RKztl47zFtwt+Axte+2TlliUjWxJzbyGbSxyagy5HANOiKjZ4UPvpVIU302gmAQPnNk1pZVUGJKGl8m99DHPQEpWLRXtJB7mRfJ/atO/6cwXd9CJampDh81/f9CgRnD58qzPMMtcpIsqO5DsDEXnetb/eGX/GcAXb9qnxHAZUFVzoszidnaF5FU16+vk0wSECbr3BJpc8FWxb3iusVJFDB744/pupzQclf5Hqy0YHjpmraH7XBZhnYMVZXC+vWAUMcOPIQ7vjZ5WLfzcOyQlSH1x4JGe5cCrSB/srpjcAQKlohMUurc3QwVL/sQZHfJQBEOwjAydUQSTPX867lFec7mPQYgkm8nBe764deEDtnK1e+gBbLqMQWSVddX2iQhFQL3k2jPp+ZAnVGcfnDMKG5cC++2EDTxespJyJkOKCHa46iLtRemIxw56z6hiwz/BE3Lk+zhGhW6Is/Z1JH7LEaeY1CL+Jwa7py79gRHlEiLrg7Im3VWmyOfVkSq9i+1+86sQnY/MkGLJrCHafKRZDNosIfs7xR3VYGfpO3nSzgTzyqbNXlcREfj17BOQUSx2ELjqJ+7HDfbe9TujQc2KdtmT1hWx6WIKbsuXFHXdLpBzOgd0jRh0pIpb+YbXEaJo4sPXyoURlWMmU3LeXThF/GZk+BWjpqzFhupBIoj17YIpn8mnEqCDicT3lV0zqe0Bg05AsK+2peu47wC5YU1fsddv3ymkrMVEYWKoB5VuH2Nukt+ahb/AFuGOg92qXzbxXe00bvkIJGIR1jM1vwZ6ruo=';const _IH='7019c97dec2035f63c2d2f4ea4a1e96d465f8817e4e458d68701781cdbed47fa';let _src;

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
