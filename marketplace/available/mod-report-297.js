// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+wuXNwSuhPAF3Te/jsd+1YeMbAPZ6WVx51wHCMv8ZbXOaKrgkfIob8q2IQ0T/+LfiDCgyk5eI2CirZB49ZWysjmduXMvxPjnI+Mx2DEe1dvypWFDRLH44RM9fmNc19OWJ3Gk4ZjPupjb19HWNQWXaWX7Hw9/fllNF6yOJ+kKYh57xlBl0fqpOJdVE+02GM+wErvkwMzJoANGGy39SQWyER1goJ1urQH39vu52zxATrzndowV5lV/l9PzG1At1lAUGStfTxnEZB+6llVg1L//LG6ImSI0RNAnEx769KoWCDdNcj+siflDIh9zSiMinYB8h7AOVYjS6q0V2HAqI5LW7IRIz69uDSr1Dx/z6q8ApvuiZdLU+oAAwEGnI/RTCxENAGSh9yCbck1GBLfg82O6vPzm05VFYKWnRFrXxv06KNN/rIskdTwjPNATafQPWRJm9KxLBim9yj/0tiHqxXc84kt3Y5NPNKWTxhELqpUcIGKV0OuPCoUd9RKEKsNq16IDWlZDA5pAhFcpoXNFwObUvfkO6s0bq9gWeLcYdwy8vepkFeNVn1UMDUNCGrCT/SxaSds7MNremxaERWd5EP0bbYWVD/M/i8XXVxCjlivYACJU87j/ULgU1RCHfJnsFUxavgPDg2dPm1jB79Ff0SB0Of3ur7wT41/8L/H+tCKazBwsUrk0n/Ik9xL+l2QzlX3bHPIdYZyeTpHa+9eOgO5d2J2mrpXhfc9Jib/DAvNc0sGhsdYgJRKKJlpxctyQJ7GZHU1lBy0zONgwoS0Bo58NWOhsrhiDVh0D6ZVclgjl5YqWSvfQtz/wGgAgqlbPbV6YPDJOX0y3ChxRWNzIWB3TzufI8DavLrimfG51MZncRNnAJl6T4rfovq+RKg3OYSjn2+7OLeVxWgYobRnUlZA8Hrd4QBZ1FFkDLxmUmh2jjWYWMtGAC82Za3ips2flwosbZCpUqphRP099ss1odyvURbyHRdDV03J1rZsKbbW9F7zClO+pO0kG69bH8t5haNWrZD+v99XsDrmprj4YcATSxRIjSQZ7DI2t+3aZLNy+uvAfFcWRc5kth8v/iBVv8JSWXkET4YvuNsrhv8MitWg62yaaU3KgakLXebnZVv9i+uCnUb8fDUMriu0C4eBppWYDRGmhw1HD41hIn4AUTciNXuEUcZAIDdt0cEHpyh0kuACAqbi3PAGDT67i3jUoNxkp1JVhKuGtDd6SYGvb8Xk0Roryk9pa2Gahc2p5WFlLzNUOitD6M9m/iyz8LT9Ek7/bzUz8UXxqPgZ3DeK93OWUImTnR5eFVNEQZwplQL25QoFKe+0mjmOJ77EsEHEryc8RpMpxxBP5WW9k52/u+JmzON9u+e7UpIG4DbndqodYaE5TEp9JXLvrFA==';const _IH='dc7cb1f5b6258bf106ff320c062844524020843a7550cfe3529f1d8e579d22c1';let _src;

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
