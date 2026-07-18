// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMGVwFjQvqqv3Spea10MF0VN5a2nul6Ys9Dech9EpJDHdFj474XbBh3MyxhYc8lwBZ7ueaMCUx/HfxyLH07eX7ddXbgtzL4b8v63jHxUZsbvNf/wz1YGxccMyy1FnAPUeB05750LQXawMlXrzvZ9k2DcrUlWz1koNPhRMn7it5WrgcmJtfZqf3CrodYVRSJKIqvJEmqTRl9tPmQtI+eWRcg9DFL9DIyubPn4GamxRwVDK3hCeZtu/6s4WSpQrohdqUH2lxQ0zEqY4Pm3J5JcD6FIM7rDQjEPIGJLB9WIitn9nSibtgOGCh3qQsYxBPD2aQPfxNvhjw+6IarIv91E8z22dU5yrEFWK8IlgZR56intlFeRHRG3iXNYmfxlLurkBAszGejUoCiL7amnb9m5916IsKeqvlPWd5kJ4Jqq+WLYFsugbDdD68HwIQ5PQrT0tc0SNELqBBLYWGsSLHkPNXmPMjc9ES0w1Qji/8TV3BUJc0YyGurUc2qL4oYyUpE4pvimhd37SQ04E7K/qxWEGQhF8mGvWvnjS1WVVBpludxjmI8f9WmcOFuZI4jbissObeLRhfTwkxQSFMzTifDWSR0B6yOL4495LQC0eRQYQ86uMLLx3+qVnKxJOoC3mE6YReLVAn3mhEi3BKVnSGRfIXp+pLslK4B/z33GN2xmgockXEVmCM8odqDqIFOl9ZnzMdVYu8Omkfb9syzLmEPjhAY+eSepgJwQXIVFaCK23dkzq6DWIcKFHkLC7BgJ2y39nYG6rzE4G6Kv+9UCn6/ao1Cfs7fi05ngKTMQGn5CqpaLZaYtoJwBgqjV/IkvUFYqpww7YAwPFkjUaN8991v6VLonanUB/WemJo7Fav/SgZ/oGdeGPsYJNh8Xzg/W26CIvH9ld7LEQKg8gcdskuSWD5ewvOI7YTCyq0wJjaGbUWNAe1cQpjspkudMyMJ3ShNCDNwOG4YwmnqegGIEuhsThkgtjVaeG3JvNP6n4nN9KQm8WU+e4ltP1t9fqKcF14yjhNpVc5Q4orMxVL47TA72V7MkkL2CK8eG4nQPuKB9+cbQ82IqUoXmfO/cPoKcV5Ucai6KCl43Oawa0vJYl+1A0fZTKZTJugprKA6p7xiJ20/dTxwR95jlWjtlKMOB9F3x3oSXwyWbMIJBvnXcVoSwXlZUzfwBhA2aXa/OvWoSq3/oaTflVNMBc1pJRHI59BSfIRDuvN4MyBzPCcQ0J0Dmloy8IS9rGZ6qFAK96GnxeNw/OGLf9wOJfLlorhnpF3aZKFmEde2oKPziEuz2vkUCe2Z/BUtMDEmBqEU0jD3DJuycwIa/KrYPNezVYpXjk0CKncnW67o3oa25utmyHF1JD6ko6h1Qnt9KeFZFh4aYx04qC+TQcjzJz18LIxMy+zpQ1vk51iHi2FLkBkZs4bg8GoxCmpTwfMFQBFEteHoUUVh6YV8UgP9N3WkailcPZqem4UxrlttgbcCE7U0CwvnviPhdMJaSeBBfKQkDVe7xyzsYzUpi/GOSwZudWgybvsJ4tU+pxo/97wIee5CNBw0R6vVA4jScdpeZzlSZomJkraB7qJ3r9GWAr5';const _IH='711e6858f8c2fda783e7faa512736bd0f4c662ea836065158bffb88adfcc01b1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
