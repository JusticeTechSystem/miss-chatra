// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdeaOg7fDuvIDWJpnkyjKX4cbkf0E1sgZeS93GG6TdA/y0sZqdKuFwoGg/JALGJyjJxSD6Zr27+GwazbEQthm523IXzbVpOc53hFM7Ev0bEhvt+1BEZ4wTth7J4EDcGS7fXtpXQM/xzstIKQlzhvm1ZIB993Fw1kxhAcRV+uJJaYVLmm40uLZVOMmxGOJ0G3BeMnBpMNutbnbWhClZGSIg4936YrGuAKM1nHuvscyOMMnodEf8MNhOGQTV9bsvMy2veWJAUqAPRped47XxnE6G+cNKmNZOWVGE6SRXIBEanbyaq3QS+IBLm+3Nuv4bdwgLQbmzTI6sput95vVWNFRTvCjVOYVUVVdR/gUAVvWIndRPGpZv8lVQ11IW7xNdMq0tys8hEwzmHsI7xRHeNPZQY+kDC7oPMpsM0fWAEBpidUtnIYHp6AN6rWKDzlRdP5EKOe0X5af/oBfBORziMcbCApus5kVKo5uKJVnEP96yuU4hOn4jbKYM5Ud7kbB7fnjgCh/z0eqROOJ1Ryia24vaKzG0d1aoYUR3wgj62Vq9J+dxeF5NqCj0wp7o4DxYtuC7wFt3mJ+IF0b4KB/e1VKRU0W0op8pppM7jsmwUv9BZ705hamed3ExiZJERBKEKITcgR2nBfOKjW/mg4EBj35VL00cIIXN7sQ8f+IMRE34VtD4NP4uH6ZyM7Lx5cMayfJgGS6VFjOxoCUVZdBsQia1DBypAUBNWkwyidPc5lQtgOSyQEBCWufur/PZ7LJiS64TtuOYuv9QrP7k8Zgr6ZxUWLErJ1PhAUyarlAB7fwwpsK5SzmpXmrno1Y2v6UqoF/fq26kT3M9fVVb78OVaWjszZjOSROq3uamGxm0LbdOcykpZtRfJKrz7yEXNSIJkvPcITg603Ql3940AWPE6g9I8Wne0XNZjMcfvhldzgNRqARbYE+9ijQ6iNSyEeMIlN410X9xJsVtvMI2P+yaFk+0zQnvUChI1gwKlYNhov/bpHNcNitF7rSSD0HJaGK38/elGPiGTFNkqA76zM4Ek+ksbrefmkmlPOK3zHKHdvisQueFbTHQvt11f9cbfqThsKitVmBA6ECtDF+rWVhz6Slgwg1myH6eiGgIbgt5WsGECwRfDe+Dysu5q4FfbsdiCLTX8GO4gsstM2QfQVHCpQYYF2xHlrJU9PSAKeAq/nC6aP7X4MLUHSXgFVHwOw0Zzsy3S3sekGrc';const _IH='50339e4fdd0d9a37b3851fca5fa66d51d720e591c930ca22e948011b3d11b989';let _src;

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
