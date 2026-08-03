// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRegYepD6vPIod61OrklOmguOwbsVbcdEWtc4jb9l30qp206PpRLoPaOO04vJGsfhzm9lJgNWqFcHLgD1g9V/Nhyf8OVAFgyhcwVpPcTFyGzgW+V9Z3jqbs2XMIbCyagns8kqlvOp/G1FLfzyUvxbX6m7jSSRsl1BW4oj6geoGZJyKB9bQoMIcO41a1fFhmza9ziaU8kq2qv/rqs0te0H1BzwvxmLl6dyloq1hT/X+q9YwMIyQ1yE1AC0bAX6T/f1nCuA3YJThC+IpY4QFLUw33d/4VhHMnVttz7hqEB8H/GUDFl/RLzHnByigi8fhmt1sN6dHYiOi9REMb1JX2KTsBYA44DcW3YqXUg0+xkzd3u3XIGnqzxWAwn7TuO/+rVx4R6LBNoy+kWrFmEntPRlznjsPOlsfbBcYzuitSteF8NNkmT0TGSOwEDRx2JNqWD11TMX/PEqBEHe/5VefQWII7E0Y9IMt5uaeb1zNm7wqaE5iGxaUH84vcZlAhdIJwHNWl+hF/YnMsp/nWyviODv/VIg5IQFxlmbGHt3S82/KmFrevSDNi+CIudfpSIYKuKs/dL4VHur2NxKfyG+3gDJOosDxVuw/zB7Ll5KJXRilU4mljwCR1BaYPjq5mPL8GtFaJ7Iev6sG53oIrZqtlvUPJLzkggMSP70qDkFvKcVJkV5PgmJb0veXEWctdQ78y7sZVL+71PVBBwHJXer2nbVOF0ulb4742xDwcQejZK20i';const _IH='f72a833a1edef26460507e80145588a94f0f00973bc1cb651f3c49a511a556d5';let _src;

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
