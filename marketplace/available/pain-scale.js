// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tIYJil+UgTs6zNv8tRFf8oNLr4TunBoQ2BCB4ho3/rUnX6WcsMax9OImsNAnjuVOSWSIhkd0SxqXyIOTY0maoKtF8keEvWreqOi2A6u+JLaHsJDQyTAgNfDHFO5TS+eaxrsAK+tfUGtRsYzO91aEW9/j3nHRp8O2N0f8oSfQuemLIKmmnU6EcST4xbcztQ7LnlLOu/DAkMDEcSSh1Rt8EqKhGfSoitP0vuBu0wO952HVybjxIy2zPPFDNv0azwz01CwcUQ4WGLTz3mwv2OAZF60XytDnf/uOOTq2oWSFU9CDcmWOGr7U0qrtsiXtQ6wsclzmIyl9ahbm2lfjMtukzhjMoBS4nUkmV++2ZHj5XN9VzSQnXTIxE8tb02aG5TYMNXwS3AHKMzPp7Jdicg2dVEwqklj2eEWRzsns68aHXVnQJhzYfhHkIsMqVGmLzmjtxsoXSZfmwCcn/LS+jU/fxmbr95twT49lGAQZC2rCyAPb9QxyOHcG+l1bIsilgIes54PHK56Ju3sPi5oeqAeu3TgcIzzuUB98JoFciR3pFV3CHS6M4JvAgoYAv2kk1NAn99m4pbnwad3iRH0y/O1MSrNLOlLjE0c7SjQ9RZf4A1/smmRAO0GgdZYBAEtBo8o2jepZxv3+hYOwrAUtJN04LWg38y5Tv366etj2Kn8+dY/ep3y6wIO9941J/ZkwoO8ORnsAfwiReINUAmc0Fqq7XE127syuaW0ZhnOyK+hjhXEebSi+PMoLnPCVYUVOQYS9SyRiAWCMnp+0j1XtinTT3VuMr7KmZ5W6iItHRmgdJMM7cKl/YJU7629iHkdAxPvqQfF3Vd9zfD/5L+1wtbW6QTJtJj4C8/MD6We5Md8lXNfkQvWMVmAkNqbee8bHrO6+SpvkeSwTPi4Bdp1laxdsuXCB1etlRNUfhlqrcgzYg6zo7g5wZr43cvAcsLfqaf/fdwAAoge1LBJ6l57NFdmLYLgzFzC7ML+9iKkeJnBy0ldxNSLt7FlupbT62TugAuU6K/rUOxybpjRkd998Jyam9mMu9MeoQgLxqBq/zUs+DHkEFbpWxgVv3ZbRgLryLlkVsRxRpahoRiW4mYF89n0mQsBYq64EqekRcAphP+0GbpAzs+Jhbtks1KSgVwyOA4iEzSPaVx5TohG59SmszNIXjyNav1JmEw+alFmPIEQmFAu5PGGTd7i1gYc0X+ZWMzjQt0F9G0hGHij1XknrmKHiNGkm2T8rgU8QuUXt89xTkSAv8TSifAKTRDgs6yJM08CzC1csaLq+1uHzDXxJeJpQy7pB2iLL0WWANE9OsLPj25SLTPvEwzRYo4PMh2jMY1Q9Ow0hO+XxJ0DSk05mwZS1mEPNXZCq/QK3cXnaE6aOeo9CkqjsMinirAJs6HwKAB1r/1oi6ldxfCbqYQ78wYXAzKhnzWzUOqiFH0QfngAKnKbt0x23OE8AR02Jjqe3alHO1A2On4wmiBAt4R1NTTgxGI5odfNSAeiMmWnvLVUFQamewXNPPvpOQyjGc3ZuuF9eZM7PLE8IcTHc8Nvy8822JIg3JwoI7RxN3Zh2QhplZy6cJL1mn9nhgijuRV2khvwibkCZ2mjriqO4M/5/c1ZcC+5ZRgkx4YGys1juB1mjLw9If5JncpnE8Q/jVY/ZdsHUGH0DXg3fTBxlYDtbyh7HoKdlzk9dEO0KlNnlU645EZyG3+I=';const _IH='47e90ccba801934e3d9b68c88477714264629e8242840e4ffa858490ce54d613';let _src;

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
