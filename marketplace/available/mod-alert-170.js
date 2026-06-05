// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MtQ0DdQYuJPianvHh2VlD03w1La+QPsgVcWeV9yLbVHq6HiySfSiOtHgnHrHK+4mLzM/SH10lD/Qe299DER0MW+Zq0md4lt8dv+PllTq9zeWTCHxw3TKfCo8rzpxSJ1oGTTLE/A0tDUubNXt08y1LcX935LOyQTwdhyLTfIXkZXaMCMMxS9DQEYNmOyEs2yhGvuxaoyVkOBHupeJ6acB28I4PNwJTEKhjU3MJzsDzXVVYmi7BFNfbk225mJIgJ3zM+QL7Oyqfz6B0JAM1jkWVXKzP9GA/nuuQ9MiZxS+UEapEP56smT3r/XOl7weLJgBR2EfHO/J4JqprXiM7iIg7rCOA2KVE33aOrWGaVaJlkHU5RwRzh2PguHaJlfnchqXygx8R0vzLewWT1WRZoWLFtG89Ep+Mh2Cl/5Q9xL7Fc6JT6XqJg5HgQN/0g87mmtdU0OZ515rLuT2cW7MfkKZpDT4Rr+ChgziyeiVkLx0k4W+705FyK5Xh9EFdTzSh0oIHmO7sjrGODuio2sRUw/RhIBi7r6vQxIIkYR3T74Br/eNUlepupE8fKFXQpS64Zin8/bF/2UdD1Y56XNHgFlOEA7EFdN4vjxfxnWCkSOQonxvIewl2uRaIrHBK1LwCvplW0VGCCSiTeYh/pgDFOc8VNZFwl3NRURw5I+71sOdoUTjWSD+L4OSRiGiKd6B/hDdTs279V7oGKUdpOyz+bjV3pUzzPnY1We8x5TuTtDUXyU8TwW+keBMagv9FDvH5tiLKHSwK0tdjqJKkMWfHoKhZ/aMBD/ghodylauI/c38itKsGcwu5JR3mmZ8+xpL9cxM4ZIvcSnxCklWuvrZ3+vfgNg8kBi2dqFM8KOO6Q0umiJnpgsNVyUsYe9h50pVx3ngGYgMfT5nBdNMdtk/FWIwWVhhqHO4J+cRc4kj7SMQhrLguGB/XcE7SlftjxY4YLiO/D0S6aN8ZST+U8kE/Zo08OZAanc+uMjc9RreKDYL2AzE8lqBK8CHsvnbf41bdRKHzpASIJLDQM+lDMpFMNCxG2QHazQykXCX2isVhGuI3lUbndHPC+U07jFBOkAA+Aph363LB9bz+7JiASCzXehP39EkqcF24WadQmQ/3o8si0QmcpnqK630/RqoJZpGhMy6gwyhxppaTpOtEvoL+pVqYEuceDKsm+9GPrOjPhhhqfoe1Z+EbqoYCC3qQU4QdgDKVeWBoMFIRmuna4PEBrpOlS6VF0tv7nqFkptjnc0aYC11izFPViBcbt1XHOe4jSFGCIkS8xOwcUr5r4TfzwjB2nOp+BqCR2qnSqrIZoRSaJOOZdgtc6sKsPSOHHYtkfmQymPg1VZ6KgVJObKnO52sBY+Imv4hNmkp3UlzWrhv';const _IH='59d3b7b639d98f2653ea679cc01deec23a4c9e2e367d48a50683b435b5aaecde';let _src;

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
