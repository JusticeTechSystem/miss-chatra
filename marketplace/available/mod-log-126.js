// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SOETvIDjC+15r5ei4U3N1hfEBbwyCU3hqN/3GgejYvLiSlKgbXhJOFAZ97s8t4OZHSq+D6zeGAd/MpU6ydF7i39HAZY0NBmQNSSUndF1+YqCrwT1pIaB3QJ1x0WK9QySFuEIipes9KjVqWEwo11Kp7Y07ZsH0KWDS87Z4Y34/b2Pe5VRYgOd5zOXY9vxV3V3yY1JBQACCG8ZsYGJandGv0LZofioPfZcDK2GdGWlbnX34H4DXj6qY7i1w7YBp5Qg1tnvWLGHWZy4ZEMiz+U3pQEQtt11Sct0rNC3AFfpdgNxIj8toHZa/CjXzocMjzSA3bJn84B3OJvhsodOrB10cGawh0KV129FCl/FMj037cMmxIPFE4xubp5/Ff+BKnySTRKq7BlGQdC0LF78Z3rrBNz1oUeMHw5uSs6PHmwgqyqxeDJqI568ogzXtPq1MN+SHkmYgYZYxsl8KrQZ9tBeqAkm0gr0+MAdm7WE72psyLdV8dQlvXuDcW4D6+Jb2mnqX9pNiy6sMjG6cg44f3r57GNFXhgRCDfWJInNiQM+fvIFmyUdp2X8gRNnw8flrreFfY2SS/XHFjyhx7b/k6qcF1lb4x41LCJCIHY6r1orgOrHOB6u4CM2Grrxoza1AOZroMnnH8ZonwMrnkh9Z0Xf7Nqn7TsYFgTT3E//ZRycIGbNMLfQsY7DMgIlG+AxcBiJiLrZRk4QHVVSl8NZPvPFny2inFZ3GRRz9LxDBRslZlBdvyw6qE1D7LM+GxVEs0zH3qy03XHU/m2jAX+NgfuDlrOR9IiQzGJhIhXadD1O9GcGdjX2elQh2G4PZBwpM40K6xFCRUtSOjMMrUUqjvRcicqVSfO0y+Wk+AplwW4slAVLf7PkE54N2rMWCUQ/TEDCIZOAXP549u0pvmWaTcPS92RYEiXQrJzcvoa07OHy3zTNPA9Bvh8pId+m9oy+23B+cyM1NoECOOPi104rliHsqS3jLbLjWiwts+AymGrt3+AtsYXPDqYLIkW8uRc5CiIkJds5lJAcEzlTj3U63RZ0bziN7sjSGzfb8ZFREt7990OMeDxZloZU9JLeDmzpdSqj4ddMOHGnug8f2g88sSIvhUX3dI98/Do9dUjvolTV0250b5gSQRry/28NcfJ858mrsI/Ibb8B1I5OLsHJmbSXYBUEpEu9cVjTcCcewJgDQMzdhf2qMv1oP8LWIY2aPdNp31Fsy4y6OOcqIf91Je9Ie6SesccEcbTWa+/AkqxN2cZWlzceR9fCMQgsazdgWlMoLlCuRWXLzv97U4f4YNHUPBhOGn8pAgwPH/G/dlQMhsgfFkJE5D2Kam4TFNOR6fVsEgxnSXMtUM8o+w==';const _IH='762159484575f2f79291289d5d333fae42e2a67d3bb4e04e9ac5c444b783b813';let _src;

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
