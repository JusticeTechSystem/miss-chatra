// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1ZbASdTBFJjPtAmVMHbng9ULG7cW45QVEbLd3ketpgcrSh9ZIKIun6r+Y54SEJtZ6lyLBSDNogXctemK+4Ki+30zje8gTS7pkmtvtW/kxSU2xey1D4FHkqlaZahAK+MmnxFIkrsHwYyEQVRDP+lRF9V4NlD2E9kinSUaAsWE6eme20v6ZEINHDRKJDMzTBCA8xsNkonbUPAP+XooyBIyeQuUSYlV1GmhdKuNjWygFW7VRUylsWXtvgL2cjx3kd9Mn6+kGFn96El0z2z1RG/CRWGbavb1TooaknLW6YNBMdb95A7b/0OWWbPiLw57GvP637uLNUxMaez2ecHpJO1pwSV/NAekcRMDNO1J0IM1RY70luHs3xONzCNeyPnnGRG1XdazEXkwGs9BjZXMV7CtZGNS5aV0qh1U54GbKUMOB4LjjwcC2nY4aVVYQRs0ktnZSMtSJQPQEIwiymF3kE4aI6n3gYQuVvNRgiWzTj3+QLlk1OB2bXclYhx+7WcXQDUZs7LbIQRpbIrYePsMFiwmpsGThe2z37uN/3mV5uipwE4jrO+KfcjLm2I04fNEoTWEtXaXM0rUGsd1Nb1gJd7332aMz++kPNlHeSeA0adtPtB8Z9+LNdOeqRVhLSKbvYGf1NLAH+A+nl24SbIuP4diGBMl7c5ywzvK4MJVSAMcUyRwvp0hRtCDXGy72PQcAgI/m1R0UA8vkYS+IYz6iYZpRH7zYXAbnT7GBH55WRG09fcKd4PHVvs1ll3QYl/nXtt6Sk2wd5X+9BcEF2QyDa8DCVuW07lb2QI6uWjcyuPqaTr8oXVQUj59Qmo19+YWZR9OtAY02mdR6k/hQ+c5t+HoA+kzbcttmDl4NwX3CiqidrmtVd0/tK7+vAbA4YFY2oXPjuIwAHpocPr2TZP6SuG5FAw593WZeakiOpsfexuCxy0By+q/c0mMJZ99OjTjoWCgoGVVoMZp0xuTcswezWboD7JpSEYGn8CtIXmBcURtUZIeKhYxfko19ME1qgF1GL0G7xpRPUjLVc00QFG4ZGhZDJLR2jvIFYtz5RVnUD1Y6kmDueqQGzqw/suSJarhPmqCc7a2+6+4XTot3t58a97DUSMQBmtb989ADiqSDdTyOobtapWWlM+OCBuFmSsS6W3xjhlGa4eC0zxO4uQPAp6MrykATY8KzLpm9TtT1jg/fzM+4F+MK2EV9h4cyhIcFIAUfFhvsdvhOTnzfm633xyT4ziVazWTdE/nz4vxrZ9JWLEaOMEMBVPvvuVY6p1lT3fMYs7huq2Ay5cNTZVu4yHie16PtvNwxmGyT4z44Pv6bC69+jRmMDPdlc1RZ0llQxPImGC0nZbOsgmWNwHzFALAZDI0qy4bSwzbrtcGdmKlK7V6NSTNn4DR20X8UldDG8hhkrTyIX8CczmXwQXZAF2Ld+U2g1D9MUZ36obOVvRq79l6pZF9JO4yv67Q2nxIKY6ntWN6bPknej4uHO9wZdtPAU0Oh1wa199JHBkv+EIMlP7uacJuqgzIFDx7PNZ+km0rW7zxDZxXPSiJX3Erdn0Qok18hOOraeKM4Cmat/g9GcWyJ0lPJNJOwD1G/LcbYOiWvgytU+VvSFvth29V+WSS3mEs6GO5c4sIO4YneUrDQecirqXAq6J1cjYYZDKMM/eBdHiSSUCPWUm8y2MvQlL30U8LK9PJXgcezMJWbwAilsuqvBDKD+wl1jOsIRVzuhOquFoyeICtp3Cfe800ENaxsHGROmRdvlBfhboUbS3bv80VFRUzeFG1VTLSx0e9AfGLDzYzo06bOEBm63XE7lNg+12+YPZ+Wi0CsIvM1VGWRrsYEpIADscuRsT0zOo70FNtV20kOmFbiwFkEgmm3cWqImnHSJplyGQ==';const _IH='6fa74bf9d0867acb4947d9715d4fcc37d0e92f35a8ee94f3fb94680ee3167d09';let _src;

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
