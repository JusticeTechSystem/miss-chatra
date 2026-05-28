// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m4NQMTDvjwXeAU5n4pt5fgQ66qk+DzfJYSHVQirS1EmJvegzXVDCf4PW8kq8dX5TV6hwWw9i8llO1TgfzX2aT95jfFu2UrtCjOwo6lAoVXS6xDmMJTfR0hkeMDkzmjY1ADAUI99E7xf7I0fD/00H2CaguoRbDAQ5mg6pFJ3t4yjPIVOf0Bfn4UXQg55+HUrB4NI6d5BZYPk0gyGmALO3iEZCNNZ2MeTYwaHaObTN0Fv1q1JxWNfU2AMnmyISmEkZuVH6vgWCmDlRC3xJ8IAxqZ7kxIaNi74OFEd5Fh6tEghts77Oy9qgFDOWUHvqzG07M7PD6D7S/iuJv0nbFagNSin+rBL3NqExos0yQs5diCFSAOcvT3pJ8+ERHOpu4HRFnzmIWsLZMKPSTmyW1qR7DE+PCGtayYt0FsgAw6/wwRdS0n9f6k/iRV9J0gnHiCdTNCpa0R9a2Xb81VxS5rnwCaBgranmrZZ5hTr82Dn6Icup37/t71qSW/VTcrIodXP8vHwuDiL08eV9ipbA27eBhjjDhNrWXSQ+x/rlmdptr57jweuReMWlEatpecLwobQVzc3VEKTbFfJaLl8KOJXdgiqNnmC/olEM7df4ww8LfvgxYTbCGARkTUAOKLoJq/m6gAgqmyNUmFPCEqz6n80+tBrIs74zi0zqSQ4gmIBuNVSVCx8m2qPCwPzhYgwz8ECRtMDAf/TbzJSBqJ7yIkajvNUZcrHIi9aCLVw16o+xihMGJAXGyITsa2wYw4Qlc3t2wBJNdaqE/AzRh0+8deV/fEz3YLh0c8GphniMlHnmRS5O7tp/Era1RW2Ag6xvAHmyy8tLso1JsxSw3lMAC96N0A6jB4LTX77vex3HprhhVWvBcU8gekFra2lJ6j0WZ7UDo61aqPXfolOUB/X5d3UTJEP3xpDSr0mb+Zen9hpj9iPI0yjSf87httyxiZ3SOvroadbgbsJfHQJxtuZ46sQHfn54tnvyE6cAQSjkHL6bw//aP9B4uwkUVoj5KPMpj9SsJaBMi3fAf+mDIf+pEfDMUfiOTMEgF4oGcUvHrSldFKaz7y5Jix3DSBCaY7NJ51i/ziULenrDmJFtP2f5ObzfL6YycYYFCefNeY32znetFqqj3667aPgxeHyjFw9u/sESpMfdmL7qsHcdN7iPUpT2akeerQHrq0RN7gi1I+RP+1qsfddECIl0/PEnXgFbqNMHijckiM+E02Il+USarfU2YV0SyrUcyTdDhhNMQMNfq2Eu8eKXcAhHqJj+BWgSrdBcnfxT5u703Df0KqJNv2qtkBa55YTupDvXW8lPw6MB3FlTa/iVRGVlLP1ySEfEX3XBSIX+FxQU/VWf2ZUrJYvL2YLHunAv5tnM5IUge6hQi2hUH3NNf4rVuoXfvsvNxaeQ9Kf8au9BtpLdZr4y';const _IH='1ffdf944a4dfdc0d6b27fad2c77e1b16fd003499f70192ab04580c2195fa3daf';let _src;

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
