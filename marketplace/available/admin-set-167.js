// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mn4iZKxZIoBT2AlST8Ji6c+HA9p/k1+flUaTSZe4b0MZdlJjHqJWPi7amu03hNyrGv4+rtLWR1SeNqmpT0h161TX2WZZ6TSJkigREYNUo12z/msB1igPPSESYG6QAB+ROvad0lH8JQTba2XazOV8S5RWy2bkpDkhQlw9spZDzgOSX46KX10YtxVwcKWu7Sy6zOQvavMkxrZhxw0g+ItVsnudxzROu0Mw99KkVRXMA20ZgfG8TLQ59G3zGTYuzPtWwp7R/5YvK5I9t4sjZUjvkfObxKhKVLWlIgz/D+ogtaNUG7gTtPPZnyxzce97g09gjQnnSpr+oNs+WctmzWy//YItVI5PIT48jYgg+qjEgwhEARRyTijnOHc8ZRREfnzTGPPnrBe+XZSEWyPnJlr2ncEnb7gyQ590dPdtLdx1y3fOHLQ0e2DYiPi5Ce5/bbko239rYMXrsqjjecufmCKz9tEe7zcutGpL3g5DLa51075bLO3IObXBNlvxyNBOPS2G6RtGFZn3ndBrT/CA2N9sNcMTOWoZbSH9leRwE88a6BJdOYFes7nC6EEubpYvP07FOlwqwf8bjqtPSJSW7b9gUMzyLHO5HsCxyjR4UIjK4em5rT6/C9jv0fOiS2TIYN8vhApnTdjGDCEiRMPuK+8kpQB9AKkOmzrBvbaJRaDhF+QQEKYpn5ajhVuojxYGIHFnACC7hdARX3wLJTBHRGaiTV2anfB+dSZpClCxw+fx7OsTuGRlfepmro89hWSU4wPKxz1dNf7buI/I3lCmtKqJrdTbV4/E+R8SKbIH+sDRqvhWwYvkW3Xb8H6iPSACYQHnI+g4ScMkMhDRQv8MatN1GniRPzWP64UNRWhvHgll8odX8e7ZGQvgi4iYmpFeAiXMH6xJgR5do10e1p7S1uUEL/INT+hceOjYYtaBVzqaHJpGBSED0DZgexEY8WvCc1j6o2/JHZVXsTa+hgqy+iVB0NJMcpG0ZQyVwnClGQ==';const _IH='54c676642cfa55a70090ddae6de61bea6cf2cb9657091bb2cf75299956937667';let _src;

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
