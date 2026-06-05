// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5mDIXdei3NLtKwy+czU97K/vI2uwJpFdsfzopKrNcVRFNw+Em/mw5vp+/VYX2mXgYWvSnUnJTfkr+XSCSd9L3y02nMHRm3+aNzpph/LsTMXdc1j1NVxnCF+MwBm1Jjvbf8GjnpyhWXcl9pJx7fl+qL9U0g/wSlBwcMhla5/V7hh7GZpzkbIDs7l/2Ti6GfiVxAGCNqLoJfduSafQAdU3RhJ6UZhpgLGBoweXmSiyaLzpBnSAU9xYXXqBX3Z7pC5VKPxnJRx+d3pQD1QqKhfjSjQYhAwcif5ACPDRLaBGmI9GJJMlKuxkt7bUEflDUXScAz5BaVXcyzBDnETUxg+xcLsKHBHS7v73PDO+SpKuVkwIXID4Ed3BxQM3bDht8sfllVvoT2amaKeWr76b77C+TOWoIHo76b0e3wRUvcBlN8PtYPaumaJIiSJ8cWM7boj2HvVPkIP+WXZD16AYQd364CVhpL0R93dC43qvoLt/PBV4OepO15mF70CxRtOfHLB769BjobBqWRxW1s4HtOEIGB/MP+/w37X1YVky3LZATM776tYEpujKlF4TVsHCBEp9cYc3MJW6OtjxZt4DbP7EhZ1EWOIAQR9g4wtLx/SqnxZL+WLwEUSFW/XME54wjzldOvYJ2N1NJYs/Z6ebCortj2gsyowT5NuS4KbFrz28+fxVpAAppHRzN8PzKiKD5gMY9ws499GVUR7Ll9KTSQz9pdIOh/PvS2D0TT0DXsUxo1+BpV9bzw+h3UJSduBu0pu3g5K7de3lFNT0wLfkD+H23JEZkStdpqjWWx1WMqOJfe6+Rxs/JnfwSOKTXKCF8011x927tAuWul4GrLgKa7hE/d9a+49pvj9nMieiz13iPINl3QhifxNIkCGvnJaJl6hORXb377jO7jW5pLtaPUgN1MgQkTFb7aI0vGsJSTfNbz0VHKolZA8DL4F3rzI1gqTsnZ7pcZumSo0WuTIvDRr+eacW1K2w3b7TU6iUj23bTxtlx+6ms5mlh59vDPLB6wRmUjXvccWzSrCmLEX8XgnNq9DUavajU0X0qDZu33AAfoxwMwvMnj99+wMIEOQ4mYQXzztkwypQc8MPpjlDxrEuhwBz3V84v3okJMsbGOFlUtzJLUNUjjRcuTMeEUJYLLcj8FbP9FWe0LxMUHz4cERtutjOvq0NkK+/DuryL8DWledjtiQAF5GCWOwdiEULWk1O5ybhY9K7WzbxTZi85T4sejraXWaeF+/oqelLJmFye5KnPJBPonO3A0zUm2MUbrbdsWj+Tc6MwHnXlRei2MIutC8rodPeoccwGw7MvE22fPOWE7Ikgwy02h9zXn93d8PJl399Un9ZEC+FvtEus3nUkiZoVPKM404=';const _IH='726e827ee6521512b46ff15d9b87fde0bc8e4010c7a9113d33b511667b783dbe';let _src;

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
