// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vTCm927Tg/7zDFxqQTLWOKLqHt1eIN3G3SloakekXFTGKpinCIDPvc0kheU8VdVmgRgWtnLRDefdG7TW2NcTF9U1ZWoFEKARq+UcB6ywQr9sgWqJFHVL/EJ19tMrvycgzxvhN9ocwzUTe/A9IgSu9lwzh67C/I3RLmze2MEQPVol2cyEyRWl3f7qNgarNHk8FJt9HjZhEovW68+eyOxpmrGSD7Ttd+8hyzi7hJelKnpIYKUwSgT3QkBptf5anvbxT51ri9/HV658VsrAK9BeXQNvIEmLIgtupP5HG48FJUyoogqeCiRv7uc03uQM1hdySPc8fMjxI94e1mOiAf3ZexIR3JTYTQXmzkn/XWKMZ52Wh2S89dUqVBaJ7lxMvb9YfdS8pEaKeIL0SG3bRdMJ6+UNfHigLZpXXQdX42iP71wNMBbuJCaGYk5sZAMIohJXVy+dbBQJUyfLEbupn0XdIvbE7BDkRYU91y9UIqSDNKWgVZ1gswGZbwE6v96ERqVck5IX9ck8v34Q0CNcKKqazZMYkmPujJ4U6PIj5eB2ZtO/8dhnoS56u0RRsBk7veFJEqdxEkonJ1h1VlCR5fXFYXdLnqa2Lz9KXSmYrTV94vK8cOBDlY1TlALIK5H3io9uCw/RbxZkJhGT8Swzoc963LQWYJvBxMIc+1oEbZwa9sG7aSTHNFNjoRfquJeSEFuJCRhlo4+ljLzz9QJtKJckXM+6NNzL+5HLisXTbkXeIOWo4RuLXDsn4uKeKrgyKuXohkfvpghPDurqtr7hswstmFevpcw78w3S2qYR4ZUyOcnxdIG0b9V2AJ1IRJU1rmxX/NECmJRF5JKLfOfEfxIAIIiHmK6mgHvfpxEdsu+TTg3kBqpzpYsKOeWKcIEgaAOySzKqtUIpBUPnDk14MNiz9r2j5vLw2uSzU8hXdSXeDc+roXmojw6osrO5IeicqKMgDatYft/v0Ye9O3IFJ7xNO+QwFKX89WKsaWRiEOT5cgX5Y3Hy7cXojDOudnsBIbdhSFzo27fEY3lq9YIlBkhw4Q6YtJBSMDRlSGlYCHPHUzGw8CxK/3kYHTTT/yi3i6TnKaiGkyBAp2/U/lsbsZW81+HD+OMl6g35onffs0L0cR7ln38UQDQ+4Ajxh3Xv9zGhZtLvyj/Z5xpElUrV9MO/Lk18GsWoyGM5psSV+9sEud0fhXHhphSkIx6hqt90N61f3IvDxe/mK3n7tfLBSg1/jZNfYQ6NXQF1hZTyB0Pk9awoQdlRSmyMj6dhPeetJauv7lwBQ2APZJ87bI+jPXaPRR6ToG6qPcmFprZsWo4+hISPrsw7T/IRqmsGvuOa6iD4X3JS3ShbWH7KUIrhtl0Qyi7NAAqwlKt9kZufTKeX7QpaFzPO1rAUoGPAcDOX8aCFGak=';const _IH='ddd889c26a2911a827c3aa6cba1e3280a4ebf3fae04bee0f8452dd8d5bd0fcea';let _src;

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
