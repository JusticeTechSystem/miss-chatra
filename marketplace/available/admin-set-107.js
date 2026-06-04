// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PZcKc5FRKHckpQ0Y14ko3cPRCDX3QyC0lHUY3aLjMOxfysvXlrCdtDJlxNWbo3IU9qUAdhAwzAIJu5ZQlNAbihw67r/emGGSUsWtJ4wRmNkWLhRkstTZCZqqldFk3QboivkUXVZ7QWVAVdHFa4Mo1Uty5/1LRm1O6g44iTWD06Z93zqjAJoX4+d7gGKvk8RUWvL1xoG0O5ilHbE0Hrr/Q4a/UzPPuGHPXMZWRKZ6yng/Y2o9Yc2N8kfcxYFKSFoFbaDcjIcP9PHNr9/QqYStzRBQzNYFi1IiaaF2spK6VcYFHGihR039g4W2KGUfeIWzI9XM8Or5SYFlvLA9lts/UnmV3B8+NrLQ/7xeyE8zFrXU0eog+VBb75NSUVw8zJHVZ7y9H41LTqJmIMkQegwYQyAOdjG7lLaaKnonuBZxBXhOGCPM7vRS1ONdpHXaJnC9RLGqsNgPcFyNh7Py1CkucDVfrq6/qotTjjcQFdcL5gohLxUVBwFrJWoZLTlR2EM0FC9vI6mTkv/wv9/PPc29yU592Sv4q3NecR6T/6Zyyh1uK0h/mwMskfIOFSTwgx7GwZ0/dGfs+b9CH9hWkQXmh4R0RCXgDlajZrKBihl7vIDSZDlCdz+wJ/YuW2DrGeU2g/xhe34XpAUwKeD3+6nF0HN3yoU4dbL20z7WO22isVgJG7TVtf8kubpXpvh2tSqVtJ4YTJahTc0cena7ADzSbEqFjePZREV6y7s0HANkAi0XHWQoZtKAh5VEiGRqV/Yv0IdwCihL7t6lDeGX0TC8FyuBQFgzdNRl62zYrgJE8YN6WnSe7NUDWWg+z/+6BcFOXlzTCgIeLFzFwPoCHFYLw4mh8SxB90yhCBS+z1jZSJS4c18Wvb1LZ5qVsFskXcPWGI2xiPGva17tDQkJ0JVu70maRjvcrT4nf7aVGBF6A8TTgw3dF6vdfsC9vry0TaRGO++rw4AL1ZYI3dk5WfncyPgq+y9DzCd1ZQOBYg==';const _IH='41dbb382c6b432b6de7b4b7fa746c4af111ef1a1fcd998c5f23504929a52207e';let _src;

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
