// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTO8nNfJtTfk+lOUvwiu0pqYf4xJ4J+Et9CIxs4TSW25xFfgiJYYvD54Cv72gHzg293Y2eXLN1VHfN2WKvJdl6PllfEDXfRKKkAGbqSN/D+Bfso+/vg9oI5G0jriFnoLI87Tah4/pLFkryrD8Ezei11QiwTH8TX6W43hvcKpjIGAD151rOdcOZRwgfS10OrKNRqxOSzFdlRwWfPjRlyA7g/v4omGJ+7HWv0ZC56NVwvLb1t45HlvQPSjfkFh2CYI+uq6efkOU+1xTCJbKgrIFmi/9GaALr1bOLXxKX2Jv7BYncVqg7b/HilEnZ51dzUYBaw6RRiRysGWEacGmtw3JE13XkMuA246VR8U3pO8S2o600ffW1RDLwzrUJB4wxTjRmTIOjLoOur49n392cv/xxhr648BOZZbXoMIpZrGXeo60Bzc3ki0xCMHdQQzH7VveI146xVWvJkWPF4vhmHXZwagQ7ogjxdHr/3OEuDeoYjBGuS9L0kzbF/7U29BNwQXzMmo+PUfrlqE1wErk68R2pTWcy1N0BOmJLWP2ADuAGjF8QpyZw5nHG7mGzWE1PNdW2Crnoz3F+e5scaoG47TAQ3SRn7ANlCkhi3hXMZ/4huN11C0chKATe1iFGo3tX5U/XQXjTl+ycNWQWV7KjRLQFYUV+DjT3yakF5u++DydlFcaOjug/9ZRWiyPyPFE2gmxoUTMmmqWVeFLadIjxrzahErnHyBnITEhQ=';const _IH='b86cd74e7ec34c7a02c445432d14acbb62ae095b3bbb7a89f89839d13d15aba8';let _src;

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
