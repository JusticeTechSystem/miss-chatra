// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/uykxIlLwRWUbXj8c1/gajIqsjFh0Y6ze4HMG+POTLUPTs0xici7vduXtn5BtyyJSijVMBvAABPbo1TYOwmzT1fquCpVLMpE3PQKtM9jAQByUf6OmJI5bNP0JKsYKscnZpKmDOFaEaJT51bl/jMdbXXIM0L+t1uzzX0wYXxIJgxuDeP6PtAzn3Y3A8V3g3iy+gOQ1bF7Ip9ACpJv53ssrM9VqbkZF8M5O0rKB8nFCXsnmszWIcvI+GjtbMKwukpdJcKDzvmatefQHBN42KTlMMFxgaIYiluUOsfvHhTXjZta+c19Sy75fuwgIpzVDYoSEcSJaDJTf1kTlvaU5wy4iBCPtpgn3G5HaBvjXTko45GDBMI/r8CCo/JePcXR2ejIkNL7EPMER1zdGRV+xfriX/BwWY+vtvuF/y3RHPnFEOVWgnss8ZePdd1Im4lm+1cJQLRO8mdq1GcLBDXyIlwC64go9Ww/1uYoskis7C07CyX2tprdB1UzgGfW+0CcUWI9Yq3VNIgpAuOX3YzzgQNazNh2kY//T99HV800kS2jG+7tbEP1PwOZE51wZCUuyddIRr6DtQXTazVbKMHr/43S5ej45k6SUAcDys79AEX0BzqlmzWAq6LF3N0dXaQweVG7uR6BCWy4U3c3k3S7ynaMHvlxu+k3SDIh3YR4uCGBQ6FMOs8nA9NzsHUEc4ICpFOa9fDd18nqqxqfsPTZW+of7V7eCGTkZQAsjApaXecaorI9MNRXrEYx3I3IEbxmFP6YfhJOOAApPjE7BFFlvCY5wJD0vik8roc0PViR1AJGXR4Sk6OSUcIFMcfUgmwZybYXC8Mmb0Vg08gno/er6zOlHMLmXC7dM0kehvW1EVaDbKyjhWsqsx84vkUb9ajAXv+jkG4n47VVCaVr8pkvwAHA6he6+HK7SPRYbg39j5gp64PG1tFpFREEMskVy5zwuSeaUeFo5ac99XtL9TeSNucxeudMmLWud9NR6UTJuJoyr2gSkpsJnDGPJHmbWlt5WCUTFia1pjwH2E4OaNjXjF9pc4dAJVPAbDPM8jOpT9qSDLu+3kzEToRS6FRWInvIje+B2tvyH2eH9nNNQiQ0OpKfsn8i388E4slOi4jEuuX6GJLePQgkhjXEGvX26lzr2taCjp10ou1/5Pza4IFpWd5KwmxHLqobwfzg7yS19yFPlj1U85NDmBvexWeve0BuEohztJq4jNSUp3T04fOWgsRmrwBgDN0Heum8xdlIZMz5nXy67G1V1uZXj933uJPphABDWaPa2W3abF8pH7q8gQYf0buSxGCDCRs3yK8/rNV5SB4cAP0lnPrRZcF9I/l4bwvDdb2sD7/0iRuui5iEpaEiIJe/BSMhONzOmVI3mw0xQ==';const _IH='0a99e7c4e2ce3ccb8975841b32cbfeb1398d0339ce438d603c35142eea031d40';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
