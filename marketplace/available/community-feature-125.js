// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFol+UfwKIRLx5gzdjMlWnLgaA71eepsaG+QaSkaPv0o62SWU3KE2BoR5BzCZ+fvNnBg88LZXM0DkgxeJZ8SCOxoNwlNwCyE+uZcrK8N7ti3DBfCwhIxbl9vmpbMGu7Lvsr/Kd2eD3e2OPk7LDHrJGWPGeHR9u/ElFJ1SKx4BRsafNVt6cCgkflCWlKDn0bI4v2qTtcdMOO6Y32B3EkVZpnCAYSfjKsPxc0BA0PocTlTjovs4IHXKs5pXvlrpEHUuKwgxn3kERGwNpuDP3n/dMN+l1udpdeRD7Gxr3C0BjYrROEiGVsxLdTbfMUGRyDpQ56XrPR7rr/ST8dStyM7l7WenEm5XspihSA9IErvvGIo6w6sRQh9tpWg+uierXo7Ab7Y3+m3RGrl32qXDF2b6LD243DWYV3S2Bn7p/QIpDT+vOblihw2FVXHaobNXKJedMMdN6DcjFB6qeDxRlmVj5BXm6CyQsB1Ja4jdO73px+ejCsJqZo4gS2F0darsxpX0cb/Do0kz63jdsDzMUHxtVgkpiARYQH++z/061mbMAcVYYM3Okd+NmL5eK9qLUdWHobwAX2oFIkhdsmFp/neGMFCNXoTJdYwqo6bJ45F7W7DUpVoIBvTgnfVzY7iCwF5v+FHLIXFBCExL9CtxVQhyMibCkQcNPWQbWFGudNdSTsSnmUfCC+H2NTdQL9miYVEuVE1n+FigzIErzGNkuvX9x4h+IqWErKrex7Zvai0INOFGcr0ekfTPHq8o=';const _IH='810ae723bae883c1296ab9b2478f16c7c61f9bd72c9385b46ad0122ed341f43f';let _src;

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
