// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9TJnNidOTCJLdeA/37PuiCFFlRwAxby2Gh5SaRYNpzAyOK97rGL0rzz0TJOzCF2TAONe3EmBvHLhlyaLhwVYsBrOUi+qpXMWtxWgOvTZjcU3/wikwcz2P3YFZsKg8LSEv//c1KdjMVIFO9BwYt9XbIPAejnrZwPTh/w8VJfS/jBsvEfwo8PxKV06my1F9ermdESN4CNwyQFSDG5/bxaGVofZdI8H36b1/Q1adQMEiF28PGY82egCmFHvfw7IlnLVpv/8DxEIRk5WCHM+gbSOcYU85gYU4ReLEqRVyLq/U+YAS0rgQ6X6p9dsH17UZkIoUZTsa1+i6XV72ii+aCxnn14oiRgtygOf2QycHAdGTeMbGP2qCbYiYCY25boBubhQ0aFdNJpsYS10nyu3Yrtd5GsCk8AYJTsC0aZ4qGjVA5r0mP+Hx3XqJ/QAYZFKen904jYBm847dyXs7Xfvugca4v/AtmLRTfsdqPhl4bNjBzXHTnv5S2RiT6m/Tnd/K4DLvwKDF4NNO35sUcHbVvEOkqoTN9RFHCmznu8eXKkvS8vuoF4WUtnYZ2F28VdvpanXAdu3/ocK9jU8zReDrmbaQ67It92+3GHafAl02mk8APF/mupc1iV4sSHZeUCW2V2bTw18N8zZz/Nqump063IrlP9z6gu2VpUEEfa50OXKxm8EibllCEww3fo3WXiXy9hnZJ3t+4fi9Ry1EVWszYgZ3eAYnWQ6DkD7f8Kw8OkaW+uVfRHxELpagIrx43NM3bIoswB7IB3qU9J6k5XFSjcyBUbrC/M6xrUhEs4kkzD1tO3jU7FiCZyNbp8meWKvb39Wbdm5oMxtzVRnPnMcq8Sp/HdGMnoB5NTkWpcdUnrTCxVVO3LCFbLGtOuZW2TbfhFmdefLeot19QCuZT4drMtD4lL/bIXv4UFAxnhT384Fw7AlvOKhYXsV5BS2zl1DLNheP3HoWMatcY0g0BJl/pidnC+iPwv+qbcVaWwKV0VFIjm+MTIWVqpAFbMyH7Lwt6rrSr9RSFz4He8+Gk385B7mb0UQsAY2mJ/f5N8ZNvV66FLRFyUsmcZmMxDOAoG7q1WpcrdyXFJcYnp5reDmcRJjSVGcLvOiPW2VW0vwVlITUFXj5qVd0MaHJKdQqsGLgkYpEBxVmljTyOxRejRedrTDusF2Bck/3ycNWSVUIboPYPYpdhK6gyb/an/+4eRcOjU2IfrmWm7IXfhaOAH8OG+qlHvnNZsZK5tKqZ0vw2BSZkhZuMovyMMq+8mgMqPa0OVD8wShfaJFXAfcpcBeoKowp/Wv1bdAP0Qpck7cPWgb1NXQ6ka/WTO9z/yAWs2rCag58QfAEz9++CKS69V5hQeHQITjnUECyZI0lfFk5AGdfGjz4DMDEJrzGs0oaCRZzvKbQYbG5rpJ1A==';const _IH='798e23b32428370429b61dfcacaa166e494c9cb1f9bf27a2d17429a28e1b5c2d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
