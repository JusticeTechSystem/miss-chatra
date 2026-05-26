// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4Xe4rKL0dsiSobYlmbROjBTc4/UqOa2tUKq6+twAlojy0xkkiHODvGrQZFn15MjVrS7usnLyObbzEm4vQ2Up6mp0EEIRdnH/VA+qUEJNO4zTRW1eH2BW8hxI9W5I7lLVN9cbgovlMWxEYphHFvtadPGUzaMdOJc9taNALYeqQxIZ565UT1w7ymShUVPhq8rIg7bk06R3HKJBXaMRqNATsIgCYwEz58pWT87r9Y1Wn2Dr8PvXQ5ZoBEMHyfhDQdzvIBINNfOepVfy4/N6ef9QtCNouE2Y3lPgG5j7Ipd6u9sAj7YDy8gSIgf6msvbM7HuYqux8A9ZugS8Kivh9BBdo0P/RVIrvmyP9lXS//IV10ZtaXA5sKK3AXzO7ahxbbQzyPsZ+YGPYKODa4Ar0DP6lpVrdeGVyYFxQmM7AHOxVBqqCLQzs4P9gSsq3S9PaFgAypqmsXMtAiD2l+aFN1DgKL38ZrWahdm79ONr1IEjqkpdtzfvKJW3LZO0NNBzROMLbjL3pphP9lrwdrVbRZqzy2H7nNBQGSBTtz7iREiJSdu3ll0hoSmBhyHE6rsD1ymLLyZdNiW00NjJ7Z+Gb/Yz+0Gr0Q6YBvwhmWFylqReyNAwInRh0MKf2cofC3i0CllhXpJphO3N9Q9vbQAWPhgqNwwWWqPH7S/A7I8x3pBnl9bMZeTyW0t/sPaElfPW9g6RyPkLhOe58cPjJL0jFyMknVshwVDjprdxrfBHaqZTotLnNa5H78/KlphvlRU9v5YkRzsFrExCDX96WmK+ltg/0gExgUpJCHpCMSbcQki1EeB0TccqK0awt8KYtbRUb8razBJYOOIUg3YqgboC3ZEffr39eWiNu+YIsfbpL/h54SdifAgSLc9HxluXif76VyE737HJqP59PQdhiAZdJwT7IAbnaubVehKMKZ4VgCMOyyZUktR5pHUTYYjVEyEQceTXRpl3WP9Qj3NUbn1vrQvZtFFjGv1UBQVb0x2p/PG+/cTTiyvR9pgjiGlZ4qTRvUX8W9pj472lXN1qJDgQsST8xpsAoVOPztZIZVJhKAa4r+G8uNtisKgV2rU9Pbklt9ikphj0+d+UJL3KeiCHSHvFet8/786AOO3BLfKEAvU8tAXaSHP7MH1/VF1PulR6T2vidoLgzy4Tu7kU3RGL+x/57jVDNbvsJn6pixe9Fldu9Q6BdnI2k8Qis8/47nc2AqUBaHLksM93uMLXxg==';const _IH='e5349a481b3327510bc0fc2c753fcd02c3f9a9e0e39ef1541b627fed7610aedd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
