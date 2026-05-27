// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zlmlEaOYf/d1sIMTQ8wE/SvmlOlUq+DtTYc0AnVz1Rq8vPb8ei0uIc+s5pPvct8sb5CXr7slcLqBPsXzr+ZHrO6qMIsPslWkyYCyDLlCORbwMrCyTrPjhWPW42gWQtcAAaPkGPSnNjsL79eSaNhL0o6AjzxwnwUzzt94JB3dN2JIFafvaosZVXxeS0a8Ww72dRuepJYx8Bdwgq4GDIXl7U5DEixpinHE3VtcR0dOwj2pBeWhvi6ZY74cUEldrln6FkWH7wCRNmHGvUMiT2tFJQYjFoAk/lagr84NmVwa437o0j2RJbxm+jGidu4Hy7S03BufqpmbxNtYqFv+q8Kb4Cx+SkRWCauaRaXDPEE33pk0b0sf1kwE21j/BdRh9xvM/mDsrNhejbMSpFWExpm+qbUSgAxsJN6JGIXdgwSySOv4k3cvX4NOY7Ev1JFD7jTUa98Cn95qk68rI+aj8P/Co39FlEHadbM+bxYmP63cdSRj286PRvyNFP9zRpF0JRp4QFObY8UfhfUSMhdZAVjB9dCO3O8eYRiGKYeikPh7qlED156et8gcE7jp1zl4Pc1hzShEV2p7Qs7o4eZHosX5L/dIUniJgZ3SYF8+dtAEMCYfCKKibctHHJnpqGiMp1OP1RWkD+3dnaUV9mJm2Arim3M1MWVm4+nEOGXjMIBJH3Lnc5y0IMHtVVgEVhl+h4cBnAp+/Xn2orZIAMsxn72XPfJMzcMMPAn6vp9C4CDnCgtc35Yz8QFTmnl1vIhYdcabWntpK6Mw//j75QG3pUoJ41dfms8ml/1xpG4bQ6dh/GXKC/l5J7uOg5IEMKT/QvNCFKO9qIJB2goaGOnUQhrmmaGVGRGcc9su9KVBODz98wDUuGNu2g+mvfE9jgN5Kmmp5gwmGQSSlA074fcA+AcAnemdtUubOn8al2V8n17z3Ra4bseUENEd9/SMPixMIJFdlzIJ7BxX4N3LD5EZHAMg7rZ8KiIvRWEqKclPG9ESNOfXFRIiQt8lhIACjlSrr/C9mL9psRhN6gt/CjqaPVaclAGQmlqVFnFbd6NUc25N8Aazfedk84EMu2UuJhIX0uaGZNppFceNd0PG86GKL9A8t5ivuq5K7lVJOhxZ9B7WEhyIsub7CEc0z+P2raQWE7yhDoPLmbnIDWDwJxlGdKx7Wn8mhn/A0NYH8Oay7qNPcY2Ev1JLe9SW0INJ7QSHgV4pa7mbG+ym8Iaj6rQNZmarBUs3l7w4tHakCL8WOy6cVeH7MPu4McZ3aBVtV3fVa22bWmBVmqaGMxBrGEvNkWXQBTB92fCyUVXoSD2IpGpgxYTI4Kbrjbt7IbUadw1FoOi6bW44XSfN37giCZu32N2NANrX/+IQsdl/GFd3jrDpxqwM3XASoiyNAXz07jryZZziKaIoc/vA0sTiZZQ1uAdLGJ7gP11IkyhUeuP7/ZEyqjG/SLKWv1zngJ2IHezgQ2nj3615KHR+qIXNqLK+gmB02sGJsPhF14XyQ95ZgkURzOsf84l12eQi+b5Al3IoY4CQvQ5vzPkOvkXf2ruCBius4hdYfI4jpzcl/vKZtNsXt8v8N/Ka+ocrUNA39/+4Irs90uIvztibcHCDYEElF+0c4FSpnES0z5vg6dvjf5ZBAuWs/Bsjo2wgdPAdnRIXd1qLzJW0M8NcYGjRAg==';const _IH='509a726100a3866ec650534ae82ff9cf7ff0d3866446bac4ae9e5b3f25480d23';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
