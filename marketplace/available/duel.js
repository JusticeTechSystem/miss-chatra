// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eips4yA6rQ5rZYNCH/FxXS3Cm1UoARLFHyWlFxShoyJuSWY8i0S+yKVyc05xwnLUy4wEoRsizBVQeoJ818yjE6g6FnAimyRf6KyU8V/O5oMdqWF7+Ign2C7IOlr/RHqAHEJRuJF/WFPsFCs6BptTbIBNBLp6QIVV32ZO4JGgoz4KVdFWHGz5ymjndQIndNW0TYQVqUOXLmsf21Ajj3MT/weXTzfYWHdb2URdTJKLMwrBUMNFF0KGU1/j6ieqi38rYBn9sExbE7r79BL+jCgupaxB+VTSp4emkix39Q3fW3idgOJmG6JggUc6mU/MwqFJvyIWrc/GcICK8wAxSxvMRXlaA/TItQaC8V4j2WRwYCBed+rGDLXXxgbu/AReQV9MFQYIXxwTmNIfHssbY76vsEPCX940VikXNE+UMTNVGjFhUihwc5xM66SNKCtwikekMKeAxe8a+cfMxKIIj7rxGJH9+YnrxDfhLPaeRoo0ovFRAhQ0Nb99s5hxrK1nfOtI/OCT0RHcqhF4ogzFOz2odJQrOpR23agAZX98QjeX/GaH9wI5lDwL0ZYkqgO13cUFQ0oJ/PssP4a2ooqoXe2anzxNXqeOZM0+G4HqshiWPWRBH6LIwY2BG2i3qT3kjSypc7lISkg4n0HttO121jPMyjWYMHagoqcfIeyc+IUxoH17NGELIMEZ1UiL9wrz1A2YvX20cQmttSBQA54tik9JzWzbP2ZqW5d217f3H/25xPpIBZtYm1vPLppXaF88z3HzviIsWaCl21BOe1HoObiMiEq2QSZve9oapBDCjn9wYmmO2bVC8yXJuYnOQ4OmDQbDnaKwXgraZpq9R4UBHS/mwd4qrT5GDCVlEMDq5hrBuoQrnkmAjapl4mnSjXopdrFpMXQoJa6NcIy7ioEd8d4VflXJ8QxYndildd8k8bweuqUTvuMklH1YUK5XrE2dKlJHRj1tK0hEGVy5tufO9CEK/rc7a8tjH756z4ejMzJ448NP961Dmz/ZxipSAaDMetp7xPHSYNzLm3C3BwTn/nWTubZpdiXG8DocT5mhgdAwB5mPWkwhF0gDhoh1iSroAKO6ksYpNsTPnmhHdEVIlf9dMHjHlHtnBjC1wya0SZYjZGD16MYJu0Hl5rInI/ErrzoYeouqh7pPAXSe4z6HY0Q4tpmkfydwl1mbUaac4xLYsiSUkxI=';const _IH='9e2774e183412885cfdaf7c4f9d3c24b08ee72d8af6836ca89077395e966dd08';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
