// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n3hcYNTS8g3G5pF4PXIDdZdvnuV6CikORotuecPZWtp9ih1yKOMGQ58XUVJXzb5nC2MOK9V69IYxXxYRePH4vXzRRuQ9QewPSJwjaOQ/IjLgyMA9Xb7uXL/N765ssHmEWoPNeHOgV2fHaTlqIUOfTczHufedn2XpCSkTnjtjaglsm0d8kcuzpdiMOqgfH1TAUzlxpocyiI4FNbvULrT25uIKs3Xy/R3wrPrGDGKAKxUXowanzFhkoUMhmo8mdlW7kEH42As6NWzkt9M5MOkf2jglmAsQe+bmQmAAfrBC+Puk3tXHnNk620Muu9ZrZqxJzZ7YMBjeuQ5qsrGJ2Li/5B3jyMrDj3bQ4Qp+Pg6iKCDSW6EgoaiNhMw0EtZV1Y/ckGu+QP0sBZpE4gikX1wIT/g1YZfBaMKZmLV/k0Pd2H6WBUb91hA26FIk84z3+s7GSzSh5MGISngi7BDJ6g7kwznuGRo6U0FYE/R1E78OuZ0Ss9llyL3VuNxe7pRwpzpgiH+bmTAgCW7MDYWiBNxMf0tuvjYvdmidgiJAQARdZF5VJ6nnRDBpxS63z7lWvF4JcAcSw1aLyyJaaSzZtF6EUPh6VKNb2PPZ7Hb5xk3C0JsCK06Ee2clMM8gS6rzISNGRmNDsGgvJ9gKhITcPdw79MCzsILkx8A3emjsWvUYuG/lxWotR1Z1dSFtXy/ErDr0M7229CqKobslArv17RY7DJuzXXwX2I0KlUHV6+ZqKslQ6HxudmI8OfFuDwwxbf8fZv9ZcZwUl0XoqudHg9yzKI1zgg4pJQGAGPAz6paX+IN++ipXQuxIZZ8rXGfrdfU2EomXctfBEvTWvPo93N7s+323zxQk5e3ECf2F0PkMLYWBylXOF6VAuhPZ5RJy1zOg0HnSzSdQqjCbVweB79qvJXX3ejc3r5TavImxiQCQNdBG+ooQQb6N3e1TvhfnVNQla43pahKJAc7sR5pL1bhQp39r2OvHD5SMSYDUUpvR7pP2E5YVbMqoRCVcr0Gsg/OznS7FR0kf7ooOJhKVInxYYVY/E78zg+qDV6tvvI1GPCARj8bEST7GwSAZg9AdZlr/q1fsFuILS4AJUb3r4BTOna9Xtqoa3sPhGB1IbUajUiZg3douOZeZ9Buld7MO/58jRYedHGk0CsyvRmwVt5rjkY4Db1IX9Bw7LEkGpZJVayr4ZC2ObHYZr7ToQCq9fz/31gsqWpYwYSE86aS5oUfz8NSv3TC52SBXfmK8ix8k0TcGwUupvbqIVYwOTp4jCSPgiQWh0w/SDIbp0EIzzNXOfxTa8nG/0ZbpCf9y8puWSC+BJ++4RoCpszD+TUxiE0byrq9Hpywv19ug8SfeGm1S7tyWJ0bVe7T1jLD/RO5W';const _IH='3701961bbc3732dc9b5d996c1c448b9afde984c405cd7aaef91e75f781fc53de';let _src;

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
