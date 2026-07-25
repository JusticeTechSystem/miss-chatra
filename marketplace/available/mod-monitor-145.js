// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS49Hl6x4eWJxWdAdEg9s1bbx44adp/RZJ0TJptn9o4IUoFd/glVKtjJUKhRpwFZzWBK5KQaa7qUrLgwgdSQCnsQ9R1EJWApSr+v6zvs56vGG0uKLui0LkgAMqg6a7WwkpU6yJt6yifiU4anwcHWAur9VSg8SbvnlHBpk9N14jl0DvNbME074nxNadiPANuV4PGbatXZNea4JBhxwqaxxPBRrInxGuRs3xUgkHUJEBI/k4mvmAf8ZDrc2uVcW16F6Y7DzIHMOPgyH0LK+bXPDuyW+YaWUwrmpL3hFgkkV12GWDsYlVNlEeRgp1kgNL4IHMqy/alC1OnJo/0sQ+u+zUkpnYVUSVT6B4smi4hOLg6ZPukv/HvSOAYNItsge06herFQ9v0POPGMoKJ4d32tYdorJ/VDGZ4L8RtYl+gZZxkmWB30/TgVEwSpBh4zD6Kzo/oxfTmHK1UzhQGxT4tOI1iEs0CJgECf0uH2NWj3GGCgGVItv2IfeP7wqv1c8i16SdCwTj69jyytTTqdQPpF8oSqOhMk36hGyzZ2Jbbrr3zQTyTX/fO0UN2HvKsDH+OlxSdA/92EaY5YCoFq0Zif9Ok90iAoy+ppNtd+i5Tbq7kDczp61xrnlC93ZAfF4OQtYoPjIhzaZnBhQRYxEjXrqgqo2hUFkCfibEPFz9UVfHwXlU4yYEpMuu3r9bS6GJEVRHw8yIuDieP3z7HoxoAVI4HFQP5PCV6FsuFQkBrAHNvvLSx6oMtNqalGE87POrEGFOZJOf4l0ME53pzoapp54jFm2txMaKw2ZVAGBSYi114N7Lfk1Br6EtAyYvZr9jms7T5csq5TBn7eiVOcPNjhP46/coIWyB5Ck6lpGtHTbDEao9DMtnSHQVfQeomh8kEfA7lCOFRx4SPUerKNygQrhK/ueAinBXouUygf2D9dH0hZaw6Tkkvczd3Ua4awlkKd9sO120RxoYZMm6ge8LB22f06ku8ROsPbfFKqdl3xxSSIZBbyakFZnePU9M8bnEjU9gswRRJJhhuSnmr+BmHWYpaaBlBpx5JCKCvnSyW5ugxNcfkkQb61g7Shcrr3He3+8DQ+hUa51TTAacFkEtuO1CrgHrY2E93ta33q+xQ6meAGoGCb2Fao1uHLgk9DdVtvEKhmE0RCk4T6wjbArGzg1D3QcwLQ5GPH3fdOigClzQy5tlhK233i3kHgqZkhL3nHt+wlqL0AnFTuGnsnGL6YTqI/auxDFpQguAvFfT06R7/LsuF4+Njv6YYEjPlJNGHpl/D9SD5BpXpR8PkP74nkpFcND66SIP5E8sKSOAiYeEz6Dm4BQyzCvnBYVL2aw8oSrqK3pZL/ImkiJsVkp+A05f0heiIEYZZ/I+vQQ4Hm3vft00hKwWVqvVpyFtvPqI8dpmJ+A==';const _IH='a1f074c64dfcb270e4087598424e1df95e9a262c0fea6e24eea08dbf37370aaa';let _src;

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
