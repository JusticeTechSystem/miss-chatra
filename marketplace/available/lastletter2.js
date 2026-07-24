// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZifhvYdy3q8UkaNMJMNLZlwMIYejqeL6SvSEEaHQRu9H/67IIL3C5dg/uSJdnpvetSc6GKtCRNqdQk0wi00fWgn0nJNqdyBVhX2STxmdLpOUMOf1XbSIGaePc5K3k+dlFB/4b7J2hqSD7qHRtjgmlq7U7YPhuKJA8rrVgbOwb+F7DZ18filXy2CPusjWEK0AzlxpYs7XPXPU6mkAeyxJgLzPR6Ag08Twrm6eawPbf+vwcFdiYEeYHmP2QzP8MwP+rVFa39RKxAVaMflankgMt6FBj02poJywi9VvtvfOa5aEAphpBd+NxSBxfcE/2EYaOQJBKHaNCAMcjA29MMfgkPh5uF6BDIq5o2sN141UFmC0IShFa+6JEa6RzJEEoemmJ/CQ70GaqBG25fvUtmgQmXJzYooDS/6clb5PhTK9at46W1WwarEdFGdPBOrTRKAvdhNZieedb021SrKcDcJ1rDYGngbBcPKmjZF0IqF6hE920y/sWh01nX0E5+zf6PI01iahGnqaaA+AlW9YrRauvi4SjkK6RWUqWqBmjIkpHoNCsJn5KETH/jGAZdEEADc/++g74G1HPhEMie3euKziwUccMjYRBkGLD6G6MXkQS6mXw4pEjEIG2006pS9bPzuvzSmoxWwqjW+LYjqm+sKFzUVm+ifCJTV9HbyBqQzngz5xJwRT/XnTbYHGl1WHidCvOPSUIUMfsPKR7BPwFEAB99Jw7LRI89/zH4Reg5lwDpav45CBWy1Br9VTgFxV+k64MLLjkMZTj1OQ5P2KxQ7eHdJHtaEUg3Kn9CshGMhB0Bc2gov3cd1wnIAobeXkINA4yd34QefgqIlWVQRjBtgcYGDFrXZ2tSsaSYd6rlZjqgCYfzsuyEACnC/xVFWMGqZRAoTdj1RrcNRhUWHCaJx+jMJrmwvYK1QOW0RltERzBsDVwH+Al3NJ/Vh0c7y0bkWaBoUKbpWlHuETXP8fpVM4YKoWIigAxW3pAG1zRCSB2gebQDmKCozmJkrWQll6B4y2+EEXMmfQwMj6u2rLNRpCI1lZFgZUJ/glWh+0DzsgUx9A6zdvjI4hdNhjSZWDVTar+k5YYMru6sFmIWNd2sN+LRJkpkqyIbzruidaVM8O6LX9+SPUPjaGf+IOYjfDO2w+5LvLe0ejdFyRVur7Sjks8ooiFB6ZXpKj3FkQNamxgoDKMYySDyhOjh9WVXmIuQCPNMe4=';const _IH='dd52663b44baf66b85006d7344f6f88595d9827d76d2ac11f95dd0b8e9765c32';let _src;

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
