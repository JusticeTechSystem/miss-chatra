// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ORKl/jbZa6vNv7J3/XrFKuircuC93+SaNHt85WcTAOWyH9M/rTn3WWitFPDidjfdqQCpGTdzdYqrBgcllR8IvxmmJuyLzifZI5vCZ/D7xdprFMudqrEuwiUDM3nnF4A3nzuxaa0fgHEoJGMdW7ybICK7RAZ3lohBEGz3OoWZdfs8P32FjQYk9y/HVV4jg0EMPnKYktf/QBkIZ9eA/8mmn4u6CM5rEz7j1rPbmL47uEu0tYsmH7P6OYLp4oAK8w/jZjZq348KF58FNOeNh9dLWoeXUHDXa40MZdJ3JBStY94kXBGFxoXivbOFitCVF/O4MwRrLQNXEmR4FnxGRf5zhOzMGixpxQ4ZTloJAHzqJ+FRudVtBC4iBz1ohenBOO4fcLl0Hz2Ys4S6+cjaDg1t/Ixae/t4jygA84Op897EG14mz7B0uoMTAp7FZOt2IF5BWIC/x8qcvS2Fyi4AQLNHuDHt+b3iS/iLFqt86MXKf+OfQ2fEjTsKwuFRHoM/GLd4fpox6gmQNLK1YdSGlb0A2cZCJmFwvp59p7TDd8soEjgZhdzCabVogLL+3Ex9XRYPyawT8wwJCm7agWnh1aWBBEPt5xaEHG9UTTl4Y0mfKHmF2KMKgBZoFHY0OPH6vLbx8JBxKsMhMI06mwIVjDZnizCGPqLQzJrerqa/rgngsOWqGx6zwumMEkYneHbzlk3tK7F7C+YbxEjHaM1U3NWWQOTf9WDn0LxSQ3wORMrLJ2U4ObniHHjW5qb9iSylhs3bOYLWwL3l0x3S32QVzVrsUycr/lAF/H93OMGm6CNueNOj6m7yny1WYV/dK0Y+BOY9cTLnxj5evOruq6YjCVc1OpRhP71wkeAiIeqO7TYq45DYr43bSbjVAtHmqXm3RgvJSgJZv2UNjEP1Hu1EYjGNfRQ/xw+kn+DwjDgQApE0kTFLqknmnHSMMzsPb8gwxsKf7BB08z9GRhMtGmybyWCt44TojyiWn+x+wytutM+vkvxPW4uCCZt+yBQm7jBC8dHYW7hw/7SnfHRdtRV0Rsx4sz4NAWfzuDDvOCovAY/31jG9d2fvd5LFPZGY5lZi5tqetRf1YEWE4Kc9s0dgDXubFfA4+wbgB/jNIipFDJxcdYo+H4akqUDJzCJ1F2uqhRQ8Pdd0KV74UegBqEcy6cGsokjt7tUrULfxbD/30NA0A8jBNOrt9KNbRoGR1Li6llwp3suxaEhi37oSjb6dDmLaEABGPPAYuqhCdBah6/hz45AFdMdx34luKIL4MLz14XBUg8Iw0fS/HbDlkoHKzDGaAdIYOXd0V2PVM8NgtawjLZ2O3a5el3X+XPBfoc+3+4Xb9IOX2wh1eJg1XP0kYd8k2l7qPFO/vrTrWA==';const _IH='d989efd79dc072b7e63edb006089869a10dc3b73be6d601bed7690008081d46f';let _src;

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
