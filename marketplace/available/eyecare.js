// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n0r+UohsVoePy/W94G0M2USDHDviZ8KDdLalKvVxqAbYTSlkq8vcSAK/TOtvbFrFqlH7gM0sTRH6j14oETjnYUb64byKNqf+fsXhgmOY3AevFKhkM+OS3eMnpZZZw4Z4Md2S9DodayYKqQnmFH+Ifn/e/J4uFUaMZYMlCHjIXBX0m6BQNZnOJ7OX3ObvuhXec4n30101d9pjZD8cm1NInr3h7uBE6kNhF1/ztVP74cTZJ+evqvewDAsjT2ihn0EIGOPB1E3wQremBzk4U74DKLTEKy3YcMz2xi1j63KltziwJ8WkBYXQmvO173QqLnRcgTU3tIgyLtFxN3/txN1GBmwAnyagCrXDVLj0gSkMZVjW2QTXqGI4J7IS0R7oQg3/kSz4OfAjfOYk2zP5IgsCU+QoYaKJn2iYDRiorrJiW8o/ruELVnillvFLx/p83Z+/1ixXp1qgIdPRz9NOaGCZXICT599XWegy1H9bULcZYV9lkzzXm8K5kayZJFcFdJuS4+DHqxfUbcbZFhMurCgmRjuXBwRxig6ThCGOVL6b+efelNjQ1PNl9bT1QPM2t5moA4bcXKG2z3lAObfmrowuFSbDqZDVvzfl2d0y5xe2wAn4krS3tYs7EKWzVquXd1ncA4aZ6bHMdwl5Goymmc0Y7bvAlhVaNH3pLnxpisHNRAepPBPsubH1qHbfemF4IJSUGViU5YDFJCAtuf+k/D11NTj666k+o9XGha33uFgqr1QiTlCX3DvUD8VulNTRaOGfPbOHYgMDAJKr+FBpTpx9UBtdO8yEVH6tv9htP/MmeTrdyPPLad4wQN9Mzw+6lajqX3CRgFEgVNOF4xsVG3ZqaDKPdz8ACLtZfRcIR8O22Bp6in9Z/hwngrXi1r9O1mkLZx+z6C7bgZaregCPYsCtxpFYo9JgRS6C+zcWWg0jdVQzDfRAp9OfOUoheWn39DNzvsXXzPLIb9tRgagwvg1WHFfj4LlSRBGCtbfIf7Y1AP/BbP9fcy6LdyVq7Fec7j3EOgU718b+1pcZBENq5IoQrlM1jdZKg0iBtGaVgRJD1H5j2V0ob4vF7WNkq4d29ai+2cJ3Qa0GLh4X8L37IGYg72Q6IWTtMTJXf1CtglVbJNXvc4jb7X7m8+pZEfVQqeYq67+uSA7+8IjFdZsl6GWsNw6Bsqa/2x5714mlKX8qrRQW1VLZ15yubJhvcsk=';const _IH='88f66ce1ec88f5b5d261588d8145b360764150fa28f54376e89ecd3ad2977dad';let _src;

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
