// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRC87LV58AvAAdVH1lWVIBVm5Jhgkqy5jV6RRZu5RBnGx/m+C9AL2xnlzlpmPd9Gh3R/z1G6xtODgTilOGiHcMqXe3cAeUQi1YtIwzzZzVTj3Ys0Ui9nvkgSk3+9t23f2V9AOL3h8XYepB04AzC7CqJAET+qi0tvpLEMV17qrMyw26V7WfPMYcFehSVgShpy5I/msaGLBhBg57Y2rdTnx3dmRoRV0p+5Q4ZHqQ8k/MhZITMFUd/3ro8SmH0EjAmNpdEXDkkXTcUOC4+0Cdr1GMmc0DGgV2uQT06D/B+z3CVcE7tj3gvn8RE9psoT11nFqhXQaWE/I06YgkGAPFkXFBEABMMNiqvoo+bcn7GZzqyqxOPgmYxzOjZDoOMJfmEcPOpPI/SbU/Insl3b5BxsiLpYvhbH42u7gta+SUJ6NmSEwqrM5Mzqfjw4bxtzgQvl0y8J9gRsTZJ5Y0PmEJT8JvJ1k2lB4Lp8ujsYepklCp5vHlNFZn7kEtS2r0Z6cyqSnlYkrXdD8AehlmU49iRksBe9Ckuc87bb3biz3ESirFrNv0XYXAdWGIPBCpwtosNJh8gcZDMFnPYdlu+SqQ1qjE6UkYOkJNck6gPvDGSWH1Ghr4GcOH94K+O7o9wqkWnre4ns2aDF4G4fU2fwYyKn6KC6WLvjgu8V44jnsdLyFfjBpzqAVx5XoD6yJLl6R5tkl7PFgjNM/EMrBSKeZswdxJXSpS0scDSk06uPoiHshwKBoZ6chfOC+GLo9NZiyigWKIfiUJRFQPyWRoZ5SsW8VQnFKc45dunlVVNqsNJMeD2sLa4NCNuTB1bw2sL70HN17beRrN69WSZ7FK3wQTtI7DVfzWej9gm9l++1yFouibgm8l2XnWzkhPIpPcyLOKQrD/nFxbPgX00+INl1eqhyavJcyEfpHrAkNPwT5e4qVwXcuhhLRngyiU0TkqHx/lTDvC632VP6Uxpi4XEwX59PeKNis3axNbWgYZxgtlgIpSK7kasCQ5sI+OIDZEqXGXcFSs7TA/G8HjE3p1AADbYEzweFinRin4m/lO5gJQSOe3XjjcBYnk7uYlDMD8kZn7p9VrZSWSt0kqxV4WlkH+1cY/P1NVZOxSijY2Qg/90HDufsnCLTdw+UKY8e1dAZGgfxbdHqW6gBmSgDQyFsPsLJJPbfnFYei+kjVGi7AXn4kIHExMd5HV+qKdzQWNbf8ttnwW/T8j9sqs+7RxEDmHva16ULB+YstC0gOJKlPslBd1UHKTwZimP/xenDJ3mvWluqQ2rFDlaV7xj58gc4RpoTIXuHac84u9oAvGu1toV996zigkuKWbIacILjmXSR4VSkkqaeUsmGYkfE1gJoitYJ3sOFhFtm+JiXrfCRRoJUr6rVDSC81rmrpddcni+5BqW+m9I4p+oi1eG2Y/XSS66rPnbe4PxnG2yjGSIET3OtTuoHRNx7/L6TEAZomSxez0L6PMG6qX0E5hvs19OL6zfGrQ7ayXYC9niMBjjMhrK17Q08pTsdzYqVvWtmqQTUsurOM0yq1CJOajn144TNXymRAJPDSDe9dC+j3eMZ3qeXS+t+wafEgjWSFORGS1GP5pru9TMHo3gH2Ow5IYjeJLJ4WuMaBjWJMRRCCo85t5drI8ZdqU13FFfQ3/79LRwPp6wHBdSe9kkzULOH2DMTEq0cSLvzvZBeIMttA0d6MyQZXeDS9K86WU7jKNKX179jjYsoIApsOJSXXAcy98ozvwP9zHc93/195FFZF7OTbp8R7JXpmjz5G7BX5b0qXEGueCjrvW5wkQ1ENKRMEW';const _IH='e15e74bfc5698a185a4dd3269fc896563b98cae85bce9ba9513959a6fa99fcf2';let _src;

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
