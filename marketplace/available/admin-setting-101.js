// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HQjhO5m1uvTFFBpQb6HNtDCgg2sjWf2UyZMerLGtuFcYlQUjCJu6wnfN7fUWcm0DhyzaeKQdv1ZGyc/fsMIs7YW/DpRmHhs65GmO/vlRODDUEDXlgDPIADeKfAwhg5oUUM/L7aqSJ+IS/CdgmDICjpFcVxbiqz2SWj8XfpMxs61SSxDPy5Aoh+Ul8dEo2P7OmDpkrutPBdmGP4wY9B3rOWuRMZ479xPwHvjj4KXTJu63LyZHJ0cX4qJ8CMp2cAqxQhggfmcJqkrdmz7aq8o35xFl3hEv5W1nwG/1sMpCObyhrv7Rsw0wfcmF3StYuXEO95YoUW6TQ5KW+i79dhE8P0aDNaCiUnpDEK9r4Kh1sa3avvJjSaUC/glWLfRSVnenFMHccsDPf+SiWtGLUFoKwIPd881ISQ51uAtNJQI2EbCoImiZmiCwAT+icaVbavraetkVpToi+2JW40CsZwZqPVddvA5mz596oohNnCgmPH/lxoe0gKV90p8pbchFMsTFPGiu6Lu5syCPnM2t7DzfWQNwtaZolSjbh/8SKGPurq44WFIIcGyQMC/WyJ+xptv/JkjTSShnJ2rjqBjb/eXVkGbcsbkklkkF+eaBZljGGZu9J9qiClFBNUVdgIDANJCP7AHVxsSKio5vHpBQlCr3C5EvLxIuuXtEWH2JPzkwO1LCCz2M7Cv+t8bIL+soppB1lZcRBtfXAzf8u1ivMEXY7ULmoFCWq14k4pff+KBxPG2m3BJ72M1+2VpQEakDLZMc+FpRdXSxibxIz+yD6k500i8O6tciobuaCY9lWou1cAyqLnyHEYl6rFONU32gE62/dGqI+QkmDSTtJC/+NFE9G6NBbpxRXD+yOc9Z8+OSel50k68O7H7oNbZmiK0AOsdioxkMe1vmdeS2bIKBvvyfgapwXIICmaQbx05pZY1LWBIDFfsn6atZAH+vMYf7VfQ+IfaXz5vepBd3WZKufMxtO4C5KrAEJamM4lz4ZsYqu6MnnoZCLqM8IuU8zixCVETrRrFlAaEB5xU=';const _IH='8d268022c4d9593569a06e185097d26df3e63acca620629263f6ae7bea95332d';let _src;

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
