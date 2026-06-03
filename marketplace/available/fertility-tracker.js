// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rYw0oho990SKJN+GXoj013xUoUQQL01exaDsvzjWwumMvBEEc/j+223O1UB596J+BnLssLkFBZD1rQDeqT95StXTdXBh7FCFQmsw9MUNiBWgKkK9WuCGS2Y25oesXSpl/bqKHeFnykswDj6VnzQN2cwr/UDpxmR2HwQgc2OsIObO6FbP4LECddnderGQwKm3rTY/YxrkYvAwYYqmGoa73bRoQeT8GMB3zisfg4HY/Rwj6i+3QASjc51wxywZTIZ2ihTSSjAbjadUpg6FA0aDDsNatPjwDlCSPo0VeZyTMyIItMRSODix69UckOmIw419w7YmCRg44kquJxlI0RhMSJz1rgTQye/eue0KuIqHSScT7nodZn52ZsPDQiBTNOUdLclXHWyvqxOfJI1lONBfiuACLZlTDkqrwkPUO0WLYE9P2W5pJTI/owTS8Uf0Wzw8FVgts7NghBbP5sDTgGqnkyLsev4V6Cohyownl55N4B++a90PCCx1yCcttz6elaSUv1+yL703b3KCY6KFadUeWArw3kp4pDb7/NzSiuke5WFBAbehORqH5z0H59F4AjfP1jkQvXTP5wXlOvLw9rYPJBFFvindxXUMVe7IDuqb7lcPAzMViLRXEd7FZVUz77thYoxv+GEx7ea8sZT2Aksy8c6wN0biYHvTcsNtqT8ysE/OVNUIIVVnuz223DKKVXWD3smCOWi5oXa99FVPrVNRR9+dS4R9zE1byfNWRIDeVAt5hYGjNTB6PE8es2q4aYyo6QgkgGS3XEDzM+acJ82gU8THblVS9tIwBFBuWwoGK8RBw1eGEfoGQWZV1X0DnaL5zVcydr7N/QzInGeQwEHlkMHHYnxzswLBFJN9xItymPTD2Vp3ko2ry80fC5m/QJk6C029shLB2FkBCn5Ug4N23bZQy9MmIP9dgKbG744bEmb/OX6ce5LSs57R2S6fFjvYfzEp9jeo+NG5B+NecLVK5kjK9FgjSHg0kmzlE0B2001BQ53Oio07aGtPGPy4dSRA/Y90blqDG9tJWggzCjJKsoezruBdA8bp7Kb2VE0cSDwo6uDWAYQL72xKswPhYQ3aovrzQbFF4YRWTgdgOIr5uM2Dva0sM2vyWOW2RW3813E7B53DvohqFHwoWFHrHW6biDRkPm27bfy3/vaG0yW7Hi+ucaceFzkfXg4cuKaeDpHeRablhMIXx4CY4TJoppYo9GKR2sQeF4bNHS36hBdM8v+G4d0f1g8my+bW62gXg7xe+FEAcqZQ55abZ6+95yqThDNJDcdqHw3T15u/RqcTQUltVfmIuOb1tDAtgc9/X8rOm0TxEHr8ZovqVdQVHSWhxhagoKcLz0GnB+rhnww3EjkT8HW3n2BV8PGZDffWSi0Q7vmnVS/O9Vo7IrCLTdPPbOIx0xguTPzQ5IuwN2XeBWfehrpX+uFAIxsmFRQnJNwoQak8bFpzzwq/I2s3krlCNXZ6Eb6kj3n9Usk3w9SPB/XOGEWEhlhnVUgy1Y9VWabPIQijX9JjOHk5LtXjsIb+Ywm0A3t99g2ixYQ9qoUy38/ioGrK5xQGO4Yn2G1p2ofU1Oc5AQu9H+rT3Fbui68h0jw0cUqC3QoHZ1A3criiyDJq6/zINCJRds8OrcVXiKcUXX9bnOoNJPF2B/bFWUvdFKUTlg6e0Fkgtt/13opn/Pl+p3ApFVR+HYk7rbUKww1jFs2iWimpJTsQqhot3DIQtHYQMHX72+t+2gppnDUe17BdaKm0V28C6eSAHN9vBOhpL0bt0xfpoB3bC/CUbrdarvavv9e12bdVNSMSKoewjjYjD+BaW75+z0H6VwXqXwlabnasRbHO';const _IH='d30a2bfbd99144deb0b3deef5e2c3077eefd4913b0db5abf5853136facff9195';let _src;

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
