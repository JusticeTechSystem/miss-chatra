// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmVPS9rXEyIGbPyRnQs66urS496r/smqsJdhyOlNkofd6zYhrawp6/Pj6cwRl4nWFOBDJUueFtOH2nqUzKdbn+weMjXzdwaIFFyXz2QVibNE8KckIWOU2/1lqMHrBU0BauRiKbYG9/CBle+40UwViflb8QPKOhK3CPTWDfHXWgTkGEpTHk8HL0fN3pqjH+ulW9Ydo0qWoQ46CYFAy85cBdOwk9Fl5DeVwqVcVKFnwC4DxKLLQPItQk2cIZidd7LwrGap99nTZ/+RXHqZOSfCnttVQ41R1PidbgyZQKWasbcO7IJaG0D6901E6KGkcYv1aIP8GNPfPlrlt34d4XYfotAS26Ajil86M+4QtzcBzwOMnLZyIp2n5Ag6t88QFS58caAb0aRuNOG1H3Gi5+78J2WvDbraVzlICnYV8F9XM0TFGvuP2ery57kPcYpNHmHtv80VMtEcFA/sVqerYACyDatOiQ1ITIHV341FeH49LLrpdSNLglXpiwmp8Xh9cODu/LiMyfS1R9wnxy83+iS/+RTNpng18Y92iRuM0aAoyJAwwNdsMf8bc/ZmAdi/O46PG46q0UR2lOpgvYps+zH5g/uM9GZBKMMVy9V8b71asRqKM3arCgckY173bcONa8afQ/IlQCnJoWB0TCfbR/bCQz7dPmTYLqfQ/Cz+RKYPmyX6zOlN4OIvRYNnChfZrcT0I8GAE/yX7fUYjsAoZ+A55GavC0/k0BgpI5gbdNDzBekdEz+VRChzMJxhQ7lPTLYx7n7ms6oMxCHGdMQ5c25iVBFgygW3a+xWzRaeTDNNH4JSl0baGvXnf5f2uZ7ZsdGDkIbt4uFN/guYxYxWylnWV0x7lhD1gDdAzaZL8n5NHlZxNGkgC03DXc3NDEKbBTnEqMREz196SZ4xi7tMDzDrQNbOPDogzrTJvMdVQ1Tel9oRtTrS+qNAmpsQFzk+OdRaIBmeG1m4yW05Ojx8RnwmfuBX+UKkQFcy5GnCE1J34gzaDKfP2E6GI7Q7M=';const _IH='0aef3cbfd219fad50bf29cd80ef9c204d8d0d1bbf8a6bd3bdc43c6107b2e0f41';let _src;

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
