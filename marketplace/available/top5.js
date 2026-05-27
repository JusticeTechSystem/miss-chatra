// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZlvCaLZ+PhKGP/eZBkgRjvpA/icx+5hLjiO9lu5yxRydg9RRYGR6YA3QIU9seP1MtNjHxkScCbpgBCdH7nx8mzxruQdy8Pg35/Rb77yoCGVJ8z4uHEbyYBbu92tCfwMGdZw3NhNAYrmq/FGXaEFS3kExTPeITWognt4zFw2GV4oXb3uyeW3nldK0VwYqwGFHVUf7+70CHhCEyWc7uFHYyAkIz7Rd4ZbDTuCKN35ktBvqnr9Ua62kMQzNWbQPDjOCLYfi45Cw2JoQYdkRWWpSqNMIOl1jXqGwP7WPRWQkfkW8xXqdyIumnQ0J9zHDEI1LMqb5zyCU1XNGJM258Q70KJdWAm2az7bCMMLdFO272cfUPvdIZwjtouNKv/rmpR06GhbFU7Yf56oXZEKKLd+N8zTVK2AwiwnbU18VSrzAhqoOIItqDphiTfityLhK/OFZHMYb0emF1ZEWAe3YcrJuwvilkixw9JTPRsmaTUx3CJwQl8QPGv41iwHRTxHGhJ3C2rpTZSie3lfgX0SPCkLEzRiExYQwwF7jhA6XmgiibpAFPWPOlzO63rqVf7NPs2E2XdIuP+SiXX9bsfYmeSYECMHLN/lwVqb0bHRuPmAgdfhwgDgfbW1cwUHLX4agN1BNhHKx/X4Tni3c+cS82pfCvdXKRB4rJVjipLHmwRLg9qvcDXls4tWDYIVhVcysVb9wovGE733AYQnle10QgCLMuyYhuE2VyDmGR/dFXh9UVIbj1hA/tq+EtiU3YtyhSel7uXQtFA8LQTJeo/LvV3V3YCJeZYrGHWXori3rwtt4M2p9jD5OJ1pw77bZXNWZv3rqenHc7mwyEqDB+yNbX6zlkLDxb1Iyu18T1LytWAzZ/dRE1s+TnSM6G3OPf80WjnjtmKluvo3zh2Jvygk2h3qp/i65kdbPr2dBfPv7wmOs53twalYuGQl7XKFNz7ijl476J9QjZdeV6JGgug3SouMpy06aTSBc7CzOfgQ6TWa3VbXT5vTiWL3BNizFnVhWgRzm00dQ7iopxk5/YY/HlbC5DzWEVZQmpB3DXKFgKthganr9q83haBFiRSUUeyap5VyF+NMjsYAbPzMBapEyuQfKyUA/5a8Tc3YobvmcPKvCsh07bA4f6Yt8UCThl7kZcH5b+DgD1J7LWjXSr2uYPLruxCagOleoegawcLv/cW5qj2qN2Nd6EQ==';const _IH='ec6571b64a90b1924aed04a4d63d55d29f2d2cd872ba6135322466ae9c72b41b';let _src;

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
