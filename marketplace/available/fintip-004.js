// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6+Rm3IutQjhb4E65ylqA5Sms64KRGdFAVDheT/PwUYFbqs9noKR8Ld7Bc+ak3kY7aP6N9o6PZMd1P5br6dB8grfAV98da0gP12vKElM6Vq/ym3VCsjekU9eaXyszlWiYiYQNwm7URh6AEw5a5c7VvWfY8CWmpSKoZ4s6/MCc0p+fa2yY7QOS5X9KOP8jcxXay6EU8emEsEx2ba1wsOONF/Luagy8ehhjp6IeKkLr6is6eBxDrB9E+hH9WauQoH6uWHdUlrLtKTkgkLNQbF/SGA721HlBsXMtoK8zBgxzTWZdbN/d5iOK2zA4j4REVgLSpMjA8qvv+xrH0VdtywkvChjAeeivjGQF/883OwAXwF/1B4Ey8k6FLaJEC54YrQGn8DqObIADfBX9RhhAETzlJ0x8pC3cdbWDUXZUYCK6bYg9Fhz3aWJLulS4HzATf/xcgAMOddu1YNnYZqQ2th2aZ8haIB+BLpLGiyasu8NVAy50QLLo1ewISdjWVbdruWuAVwacW677iEkLA3tD42qtrQBXVbivK68yR49PBBi1euWUEkBlbjMN96bLZopCrelQA/YVO08GocE6qAmCByt+lFKsUVHIJTVvbbS8v9m7YyoQtYn+r18gjRqI5/LIP07rOugTtqEooNuapszcdqX0Sz4dOnJHH9K2AkR344rl2nABphzFMvaf877AbSGpAlm1zADPy34DMYKauL1GOllDVOlx+arkntdNWd5++eESzA5Fjfid0nAvYsjLEonVeqpyO81dfty48O6o/MdsL2jD8cPMar/0tuW9xXfaHTcg9Zt+OGqkLh7yBJlMDSkHYwkXMw0LDviPW1wtqWEPQdDaQoTY+0ohpyQLw7+cAoa73kiC2x5jEOKYhZhDv2gliibPKRZaBf+r+wJvPs9b/jDoq/7xJDMjt/HCYda5F6SS//WbB3zbicSDyLzDYATB6gXNTdzMi2X10qfkS/J0YUjggOGjHtd56eZo78QBy+/9Xzg0DgEWEksAQidhHuc7rvxtti4S+oSnZbn6QH5YuMuNnGBTn0a7b9JFS9j8dc40';const _IH='47f5d49a8ace003a7ec2ea5c79199106b244072f7435f1645a642172981eadb4';let _src;

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
