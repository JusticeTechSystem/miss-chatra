// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='on4OtCFWPk+oUxJXx0jmDeWjlkkGYwObhcBT/ZdvtYfAyJQlZd4YGvK1HbAF7NUacq1MQXCIu717g9Lf98S/Cm+unf/SjWs4V6HU1jUa6k2YB/F80YeLQqFF6SBYZa6LlKMRbYXha3sblp2ayNeCJhVgc0Uuy30yQfx6mq6kYeNK8bU/wLWBJfwS80RLavaVBZaIiqjsXQeFZb5hmiHqJtJXHjcL800srsyJwmpAYyb+uWk4FSL4Wg2iZrrCtZ7x57NVU2zVPP/tLyBH4hkZ6PzX8FAUhg/J9n4TQDK6phmlF6xjwLWxtKTf+vHszGzrIn+7KsMIZohPvJtFVKkJXH+wANWTOYzAttbDU2ImJFBsu07D/3/W862aYvvUJ0b1isNMLpoQnQWYmFyyR6SNQKy4LLKX6FBgPch7G+AEZBD/4UVezeg/X9OejhxhoRFbyWUF9yYu08Pa8Vz7bVJftOemY4bGY4oleo7KNVExT3d5ZezCzp1fLbvvA8CcEjwrJ3xSJZ7Chja8yBa7sQCHRofsuvNSKISh+5WOfoEWRoCmyOrXvFW6qsXeXKec0EB21rtQKtPYaH/rpBwvcerAGsbGgJQeViBDNPJVPB6M2xKtwUvO+VCrzRFYDvimRPZr8Ly4OD/fWgg9mPE5K3nfBa1mg/HX8P/zf2NTeeQn7X5BHAfnMOXdMy9CR6CawIEXJ9SwgXQ9l7HRiPPzSXtN/dVl/va9efgtieDcUeunSh+YcF9gpJ+0GaAp1siyiJrLf/AL8YuOR92ykqLXVgHW9Js34nHc+EvV1SWCE2aV5Wl9JD5MEekm17sRA+zS1bOqyDkk0BH8ve6pvCGE3FFpIHMOPMmonki4jD4FWT3f/PJuPu7yD8Qy/aZ9KVetLB1IK3EbXjWE7kgbjIGluK3yPGNhLcNxxxsl51N4J1hhnHCBQhIsg5iDyr0lvlfCCzlOvap0QanY/znlx3TleXyt6pC2o548sQ+CQnY8dD6FhHQtHErt1rSClVmbCz3CYzifLw==';const _IH='b46609ddf031bfddcea91282654063748b03347f50f6d5f535509456157231d2';let _src;

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
