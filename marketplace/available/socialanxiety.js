// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7g9ng59Xq6K9YLM4w+NYf/i0h3ocr0FLPiIvHJxDAypc7cZuXhYcbU008281fE5OFwM4OjAaKsUbGnN8EQQjFHXBhyQ+wDDsiaj871UbcWeC2KaAh8Uc0ntDtUCJlZbc48mQu9Z+xIlREAGku2YlA1AFYE+vw1tY6Mn8bffm2wdjWd2Z1/50+7T03NFHpXoABbULSRy5zVxMOGeCUtEI8TLkgbm/UwSKZzHPHacNY7K53mfcsqnrMeUQ8J01FyboXjqZc4s/UzBLX8Xa7dxWWvKimjzX3kVIoCKeCUHVRV7NHv/ZVW/n3/FEXm60y109bxECwgYcT74hp8lopbXX6Ex+MEcA+Mmc4UjhoVh9kvta4Lp7/fQJgGXlr1lEOcDKW8La6ebt2GgwrNeZFK0gDP2xwhRpBu9skqkyGzPmg6Q0JEJHbHXc7eh5xR8jintDXC4OdGi6hh6twGxpnNmH4BDo1NkWZ/+fmAW7Aun7NHsP9Nxp8s0s2I70wFxOOLaWwCv12NJffgd0AtJFGzkHdlau8SudErEg/stx6ASfvH5qMyUEAUgNl6P3QXuNoEpdCSyk1LaMnvd9xXXcW22zRn7J+DFsrXdpLWJzEzGh/v+uCv7nA2+LVsq8SUwfYQBfrFmOBabOsf4Dwqe1s3VMF9eHaqHH5vUViBClONZJv2faMbUlb0816WkmWQTmHSmF1DbndhejlrDGpBfrvGyE36KJbEYPP7zXOZFT4qQGk8lV1pWgPuUVOU4tjCi5QhvfscIEp4ydsUgYLe9T0+xzvfY1DiEro4HbQUZQxM/XBOLWJIpRdYkj/1DImthpPD3jMgEUlMMzk6pexgNcejYrYmOaJA5Tymyt9N6IY7qLRq0Rjj1J6ux9HvgxKc54yu3TK620IB5dKdzR+NaqDQyHvB9CCK59NlYGsnNWWwSQhMKkbTcnQ7LsYSOPwvLiXjVHeEdegnoifj/35IfmKi0kPbQyNgOTRXoGkj17A56oiCadstfoZ1TU+XHb1W/jZfZNku8kWwX0zZp3wOxKlwNjy7Sh922m7GjeYxZAUqsg59Voz61mmKA5rDZDoOw1+0zbre/cy2YrAJ+2ZlIZAYsOSHVV59RvpmsjeFNSB49uxbFIAsgwoI0TEeFfiarTw0C8AW4YF6fDFIys1hpGoVPBhNylzVQYhLKKX4bps0JQEPEPaM19YO/JIk+Y3C0R/+rzg6PYGql+A';const _IH='9f73564fb1a1cf95d582bbe186e20afd2fe083c67e6df0406d0950142c24ba1d';let _src;

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
