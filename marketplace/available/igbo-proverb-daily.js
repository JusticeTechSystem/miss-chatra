// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GWFdo+Ds1R66ywYkKVi64GhHbegOhCAgvQvoWiIPkD7XC4hfjGDobEo6Hatr3X6sl028An1T/Fi5JUCsv96foaNC3tiA7Hh5P/gyWYowNoMXgf+7jKbECGSYFJzjdEs3nEoWGp1x6cEbfIFaYlqQNI6ryW2Vf8hYMg6EpVioAmOEgqwgJr07r9iRAUts8aq3nn1Xfgv0uIAZkEr1kykrkSPUUx0F5iyqJbjRJ6eKPGjjp+ndo2dZ6v0iQr4tQz3chlWQ/mr5J940FZbt17gMxWberl8QwXqcUgqo6YVN7cLfC3PE1yxKK7CAiX13f6sCRzkJc4dn2FwSvihJBQt9+8Q4+BfcMFWwmIetTGMOt+TMdUMqPwmU55SbTOqS4gmmHl41rNAL1upZsLdQC+VnmOxB+brXV/6yEZrecTaUYASKMGOU8P8VKGZgrxNNIawoDnpkTNp+HEsesaIXhpgMcrderugGODMpq9lilJUQiGpIhzboE8+9KJaUR0v84vR5a0c1zT5iqf4VF4JXyRpJj5RN4JcnWlLtcncvG0NBlMIc2z8M3tjT6DT5+ORIHnzwn2auNGLChV/4TmEy813q70UO4Zw8CMiFEnvDLvx81vWPjHb3WwO9ll8pozJgnkdgaAlMCrkF3kLrjw3JJXwyaGN4uIf8rAF5EwULI2U0VBxVNTzhqAjteZ5Hp/KgtrU1TIbfY+tvhdztqCAWMu5s2JzB6mqlETHjLYy20MQDW37zFoT+P3UZK6MFYNiM92tMEeLuoXmzmFesadtQcI48j/iKyZcdk38jyjFqRhT9yqb4u98jXVXai+RXhe5njPne+F/N0yfyPLFSEuVQaC8NBFaHCTtu1/cREMRBB24naBRvmSCst/oHrMI2ujp0YbN2/x8FdrvrXjGQmiENs115CW9xUrbzeSFpxHAFevFukhYcV46itvy/z1xjn3SXyKbmtJE0ycyQ6dDOVMcy5JVrcEsqShQUrw1Ueb8kmzr2VZMq7iJi8osFdRDOl+ok41c80g2jIm6WAj96Hhf+47GGKvoPtH/c5kGFluLeFMskfsMhflrioXrj41ANO5mcOIi67Qh9buPws9GxKt3ae+ELfsLnwh6hEgvImssG/UU9AezUro8z0yFSMsxU63BNvk7R1fxfB6OtdhcNz8YCcyIaq8POr5MHq7TG6OmBdfrlmdSVVDs67tCgdP0qnoeJZTxGwPwt4g+52nTogZZINFgvUP75OC8/NtsHxC8LSVGYcLu+2ZoNZJrClElkBAhf6p4BDZQTIytSH/4Wl2wkOIN8oQchuGlppT7nJMiid8r3VE1wB8roXBJM5sZVWLcLuKpc1jEK13X3yMo/os13awR9EDcyQjVq6HTpNCbW5QdMUnWKyEYS+U5ZEBh7zsgQIf7LMdUvv/bkV6st2yXBqItnwlaVfg29D0nFIaCzSE+uvHKA9ZHMQ+WrCg4Tc4JB2g7szAc7CfEfYRu7FgqT5ryoLtmCgvRRy9yGxCG6WIvwogxJ2Ejlzx4RqVo0LrlHLdus4X0Tj32SvA9Xq24AZtoGLllrePFuo6bUnWgh8yKgGVdDU88VfLYXKC6kkoQs2g8E1ZrCeRYhH3HGiKU2LsZoHLzCfqHNgoKmPgsKFKGk/TmixFoN8kywbDsaDn9byRMXPjsU93FPuu4/e0zCNWnWORGwrKKqdRHBpWH86lPoI2BEELQPLaQ5AhHLsXDIACs1CrsRAIgUNA4yhT7qh3fHvpV+1VzQqtJn0Rm2DbVBeX+Oi9Yo1v4sUhBm6Hh7tnQ2pqUx/iLtcVuWUzVPeckCPnQz9mH20DnYtmuYGZpalhi0Llmqv2l2QZA=';const _IH='bd4bace9d7bf0f7d09d0dd2f75051c86230fc033d71c733dbee41b7a3056c482';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
