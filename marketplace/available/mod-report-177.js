// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqPjjdLm81xsfiiu+j8P1ytNrvdyPXegx3REPd5v4OGmAcZxtbWNKvpCjy4BXJfJ1MBhLDJsWEYvUrN0iOT6Dv8/0zLGu2ylAYd796PYxu3DmWjKhAB1wvJsHMj5J9Vt03EwbaQu+oa5nxamM9/OEp8ACSBCNbUFWT4ii/mOIrt/sFsK0Il3Fs0T1mqzINgdAZFLIDa9pzvAKEAl/ULZicFCaNxlt1qIceh4lRcEQ7lGNDEyhY8gvidDw5/CIiH3XTVkO22/eBTzBtsIoV+ovNucOQyEqDFnV88NfxY2PtKtMHKjp2ZoRupBVQk4ytgavv9bENAXe0Wy4CXtz2Wp0Fdtfot45e0Ifq+t91ffq3AE7zICaDx9BZW3vdb6gbtrt3CZVD6wXIWytLSSEaLyitaZxfQPm3nUYIlmGiioxjvRXMA+gcFjXnUXJBG2Vl86HurQ3jFLj7cHjX8rh0clHz7KOfhoGhxsIcd9gjwFia8SyDYq52AU3rMIacNLnPYXcig959eCgDm1OoJ6f7CpTtkNt+B4Wxk6yijfn5JSfAxXwmotvTO5ViPOYFYlEbs4cvW5p7StJ+5alg25CWTN6TA+2cg3++MKLv2l9r1NcJSRn9pgJQYZJH5wZXwLLSUz+C9Mxgr7iMPyQn4xUoFK3f4+cvHNBaPU+fhsRWBA1hbYtgdzkJlhnW4Ako410WfEOgsysaosbII2jqvpL4qNCjYuYGY2XtrOuZvIuCUSY9ZIDSlfe0KYL5JFej94yHCsTA1VHNYiviWS5GZ/W3ggRHIp1tqlwhIG+bY8u32UAm42ow7qViLAKSM1rBoxsFtjMd2LVH0sbURJRhY9gWSfgxvMyeOhMIQW8XtNnyq9yoZb2YQV/RLwOIBPOFLtinYtaKyjzcDSMUMhmbVIA+q1syhAQE8BCS5dAQNGbNoARa1smnL98BKMR0wwV8h8mOwIAFCrjaZewRbUk+60Hq0FfkrBWbNJ53bc7Z12EoscYe1qT8y6vB++7ORk5i4KUl2WPQhH0HVuvRtW7zrDANnRp6kvwz1fe8hD9GasbUlE3iZfEMqPlT1TpyAN5ZkyUplALxfPACK6K5ZnPOex3Nq/lvqTf9ksVJ+ixSM1S9iOwnH7EjWzpLZXUwT1Ks7GD1LKHFNRCgtzVt8Lk/HB2BhdnqxzNgLDb3oEcctVlbWYmDZCOVaxJkjwCS8CME44OWE/fU8WCAFex/Ng+dWl2gtwcyF6h+ArUCGIGRpsu5RW5YlWgqdZ+ILaKhdNwClimNXPbwxUqLZeqYmRcP2mO7PISM75CBpqqKY99i51b7C56amKlxWA6YKMszCmfqeNr0vcQhVFA+HUoPBss501xY46ZpOGGP0K0nNSxZ18pb42Zv2MY+zIWteW/c';const _IH='08f737b8ac0c2487df7854cf1f070eec3605be0ca5c0f81cb3b3b6e2d78cecfa';let _src;

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
