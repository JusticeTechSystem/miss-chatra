// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuwUe0g3VB1/4CV4yNSh8ORtoGPgBlLcPvbqe8bG5YVpD/kbMw9MjnnP72TRS0oXcU8kKOgdoEntxYzLA2JLL1tbjb9RTKkr0g4iLpDb1b4q1rC45PaOIwF67BOf7hdyNr4ThgCulO6OKBpRfFW5d2YJgRXZVuAGdHSQfTFD/+hZ3/pfqVoZdITUFECbpM4yAdou7dWPnSitXAAhDTOW/VMeR60L9TR0dICxJ8HT6dbS7EYLgtsLXW18TerndfnIZH8+tyKrsV/SJ8WNxEfmmdMU/X3cZbXlFPFiKpsyUYvUhAE2pbRNmbR2BTRtQEHOCxtD0QwJ9Raj2f7oNL0h9qhUV0Hlt3ukg5s6Jh7ab3QmsMul8NoGfTIrtuaB7iz/6z7ZxYvM7HIOr43akndgU2AGq9eWPDbFyH+mkz4U+nZcbAFMdNiSv3bPKCS8F6B6f3x0ohHQBF5fF4sMcjXcCUaTvSttTzl8aWoEveu0bQWH7WUDLlFVEXbifaxoKrItbvWk9ZQo4Vm4OSm0IbGHp8iP31KqvvvX2dZgbsLYMadcBRd/h66suIJUq76oIAPHLHgtQXXFCJf9o9T3Q7DXuQZiUxNDAQFHi0tgYlOrm2YQvOJbtCJmAYpaVTYHqYL9VfEyf50bK68XI0GWECEFqIDsUzeYFkEGRcMkoxCNm/ZPJ8h2jmvoHeFjygcKJUSWzRUSvwePwQvORMXVauN1KLAIdUh+AH7DVWgTGPwSzQsS6CsTabPA==';const _IH='6f6d3c9dcbbdb81919537b4169efdc2eee3b14957c24ebe299cf19936e09dcc8';let _src;

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
