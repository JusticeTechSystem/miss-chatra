// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxPFnnKRTm1HrV//lBFNITPkC67VXtXU66E+Rzczwki6ISi5WKT+Q0haRiip3KeA1jrRaxLKqpg+98mRhyOWEeFtNNXtze+42fAJFj1tW3zP/RXh0ZrKTfvE7scqLRb5zRgSVBPbdyakqQDH5m3+yhjPxwRjurZgKmQgpjnlHlUcNBR5fRSvBbV6zhBbeABItn9N0jwlWqiaBt/69NDhWp2xCOpuK21mWGJbjBf8Il3XsY4jFOdmyGb/MjA89owRQ6d4cexTCwz8l00yft9lNJwA4XAOIDjCGMGsFq72/Ggl97W7q5ihKMA4stCUop4srqvUImTbwuBsRgRc7tmvwS7t72YgP7he5zrdKVPf6s5yXfgTcm56mguhqHreuUriTl5vgnd5tKJecjWeitGeM+wK+X68dMh6EuJ4EusNQu/Au84yFAR8ERU072BMJivOYY/fJLWfnQVY8eQ+EgQGeXJf42+Gdz3LJQpnOIYCya1w+tuQR6hpsfhxcCzLxM0qU1Ceps0Hu5l3JLWoKgwwEPneoPHLBMkX0vKIPPWv8DJMx4j/fgKBGLwjQ4B88tDeXw//atV4ZT+vt8m0nUwk4WZWS4QW6eZR8b8e9KWiP0XmV0RkW0616VRGv+iYcndz3m8UDopb9Murktw4sQjBxiGEoDby4/3Jh+zISAR2S5JoMMWSsZXecxy0aUuS9mhlcXAY7DP5Qkhc3g70v3hHxdEsRIY8V55lkjYSPbks6FD42zmH9enDewintEUxLCYIhlezR6XrjQwGVbcG/USQLzIYJdfHLPQ1SUJ5v4ECbXHRGdmIFAo4+P9GDcqWYqdYoA7LJxm1uKrq8ZQnvPjSKjODauRAjrFohiRqGX7VPB8D8Q3MZzi0nQOxxw35WLvMeEHzBkCIYb9YjT5a3Pc98GtzRTuMhWKjZKyDxwh/6bE6PdszsgAJh93pp3VuV+Zr/Q97ZviEaL5ss4kaglUvN3V81vDE2usVVvykPOtZfCI0l3dnZdX9mt8/3wDsHWg2hxghkrm46JNaHl6H52x0UXeFnKtw+eO5k0WYE7aIYfXekQmhWIlJ7sEpvayssl3J5KCY5ffpc3cK45Dr8epBWuneoTnszTH70JrPbz3lDJYhV1Ttg2MstWSbPgOrR+2EAz1kltAJcGqcmjoAmfiABh01oxEJ+Z3uQkfau9xG/Bhhq6RibPCosNPZi1+OdGPPxJL2UfTi1umrEX3KGpAbK2M87RP4triSsylhCEc1k1DW3Y7YLATtl/C5T5+G2jtl6jkXN5jgYlzUiKkiLkMYnxbnoU5ZU6ZF2n0scfJ6KrLfkGtr040IKVymFIEZjgffV6Y6rw4oZqIB02bdQmnoEbjDU5Mw==';const _IH='5cc9e5892489c64bd0374e650d29f3ba8e21c21c08795ce14cea94c63b1be442';let _src;

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
