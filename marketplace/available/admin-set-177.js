// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PWZUZGRqIo5bOBjMdt+H9mkepttUZlBorT/TA6JOYLRKECujA/hhuxTRroCj1qaERCMGMWOkna2QlbrG6Y9C0nL1CVlWNOua/cy72nSFMAm8dwtwkVQRj+Q1hM/kc0czoITx/u0H2q0bGKTrWWGt49tClbXu4cK5u3ghsEY1G+62/Pp1321fseNgU37FG+Ih6e7iDaYxHg0NGb43TG8vSzRu9CTiZyEmJUWu40IroUuIiHk3SAqdliIfMGNanwZVrt6P6M6BCkxPSVf1jujN9YATfeK1UgcUo0ZusR9O64Qmy5qOToOC/pDTslterUBGuOzVfpsUz8p7aia6fFRG0QrbzGbAWOJZRYs+8OaPgAPFl93leub2Q2/rOM5EkkE9xsA/Slzx2eKDZr0mboUmo9TXW+1q4X+QBfBeoxa+gB0ffRjDn01E7NBPUAQPa+OUTtbOr/BUhumuU4BHLVnpycT2DZMKiaC5KqBpsDdGuTU2U+MqJdvySvbspmMMUJcTDKclLnNrzTSm3om7gSVLCbOKAmIXqowYoC0OSQzLrIEjJu3Es1P8l1uOghqTLPViqf3nGNzZm2BatrpxYB8s7odrVv9uDEjZ+QZgJtUqeX92NueT1rVbBVsANgu6qVcVi1jHMf2Cki396BTX1Bo14bSALdovG3jwHUPu1JVDjqSZGxaHdwW+v0sVXbIfR9UTyazXwDOmBS7piZZeUI/0t/KE68qsatxedIsU+IqgSTflbg6TmGywXRYDrydSZWH2Je9D0nZMhjm2ngY7m7caQGTgyXPOXQJIAiepCMmpticpWpswVtc6sKzKf1JeIctNz+i7w6mZfr/PMT4MAJ8XZPDkGjC+DZR2yJLpd3GG5SgaihZc4a1mZPrvfNwPp9pJJUazBE2XVRE/SlR9xJc4cBwoVitjN4Te2UOJwXbIPzGI3Rwzep+QS6AaciSqCd6HSIlI1maOwwpanOZpqbav16rUb6uqElc/bNgEEg==';const _IH='d5bbd84e32e66afd3dbe703db2eddad811478781b839d5144fda80b85e8a20ce';let _src;

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
