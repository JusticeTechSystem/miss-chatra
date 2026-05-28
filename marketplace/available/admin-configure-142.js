// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5A9zTAQe+5XCJRyH5b3UMBXbYTKryCXhIgsSkN8s30HVyNvGlrzE/rxcRMn6XV7gykPUCf2rI0iuMmrLw4Nbrva1si0LgDRNx0idiq6O8V1yx5Fu7TshgsxMQQJiMqbHGAG32CZxB79y/BCyNGjE+nbahswWBZ9m3cNUcw5p4SjekuP1dz5eC8oN9A1AMJXhmDFy3+kg4LOCmqERgWZxPBnKNLSyGGpOP/1F7TMU1imIBLW/Y9mr/aXYUsNmtMFwEpyuNZd8u0PHoHijOtnwWyP5/2Tkq3lvp3ssa6lVSPv+o+sRPwqcLN94cInq/qy1kHZJ/62y+7NbOS9vH713l9ldET7iISOMZmyIRW/zeDqAgfBnJ8zwwc6vT84Wp6/cXCaTiw0UCdAg/NGBCMTT03D9uFbctblWi1AUAlqE65e7VEmMDDH4VsiQbvm4J2A3xwtDhdR53W/MkiwpsXh9V04zNNo2HB1iprE97ZV7RP8jn5scr57GboxGap6mhaSreixjgyHw/lCe7TbGgzPimBn50bx4XtkUsayvuZqgKuL7tf19mYNuR7/a0ZUHPjJEpoLCtXBLgZsKw409CROZtxQZpVenNMx0JUueNojMfzQFvJkWtRgihVXoC6yzjm5WuAxqTIi5aN0rM1nptZZXOIj9qZma9rdf5DcJ2U6XMZ20M7hms5kbr2le6OQtKh5In55zvf06JLF9kjejwQG5WUghltdu2cqJ+Cvj82nUwsR0CqBD60O6NhtznBB/cwDye+lHu519n0lxBTBCPBuqvVimlTO/XEQ5evaW0kn6McglMTLve1LXKlmz1ohi7K9QZtdCYhHMDvNTAhkel4NT6g5RxQNcfEJpkcZMchYWOO5xnidxuOD3t+sN5FdKYxNbQzYLPb5bJ2mEc2MOh2+0dhF3+GmlqpSnZe8oAwXf4DBy5vAIGMPHni6vJ7WNs2O3L58vS8Q+0aQpNJO1xD16CfFWyC4RzwieEcbQBhbyrVG736XzJ/ONh4ylSh4od56V/s6AcVJjAUucZrCpomaLDVgG58lZxQ==';const _IH='2a68719cd5ee49931f2a7cff2dd517e53276f1efe5254d15a6826bb93b0b79cc';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
