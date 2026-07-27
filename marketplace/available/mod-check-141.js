// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcqWT8bS9vV6t5Hz/pW8ucpwhBI98KMLMxS4SuwrGgX3WmH0enJP4nLxWlc4i3SqsWt8FN2fDUqyoXf8uC4RjilX/F5no6OgBDue8JNQtNeM9lXBfmCADXbqrJxUuhwyTMGUdC6XTl3gjgbJCbMQXuCooaOuGyyGzt7Gngs/YvjXPAtOaMg6ya0y7yd6sB24vAo5L7IL5IJ57/0TYL9ZOi6tfUSl+pW8qlBVa1uVHc3Z3NZgoOYcDJ9n3Y5x+tZPxt/6dWelAly3HLuSzOe7qLdPk69Zqve9tGuh/5QC5JrGeI6BT8KUfgJV6DQhl3gYw0BIcbUKl3VhI1FEr//eIfU76hFZhl3luz6UYBSH2D6XthMySWr+FZ3TStb1/1bUk6VX6CoDq1b4fX7dZi9r1gTXQyZSL+UV6bUwL8evlMzKBVI/rs6IR3WDTJ3b1AwEYCfFVqfySoOzG5ePXxtO6NEWSteSPPLbkU9p4SXqSPLcgZQkuZoOd6PXU0il6fc1liiEcIFUb4Az25rIIA+WVNiz+Ubp6TJeHqN+8oYeGC9dkNcGX/qYU/6qA04qyVPna90sy7rO6VH2XhztN1O6lV4lu9nlnA4xOP65RRs40el2XCJ/FiTJNGNpOKO7KG3M656HS+d9oPXazxQ78BvnKLhMOIyWmShNBfJ5F6rDZjCgbr5+8eS8DTs9X+uDd9o+vsOzhcSLEp3cQR23InY8KSW1HFXHHE/9lrpOwN4Qb/82E3TwAj32ZgdEr3pUY94E+X3m/Qb9nD1jQtQRWZya9NSwGxV/s+cH4H5nVc8Kmvst/BwOPyugTWzjIsT4JA9olv+vEfDNT8jcKF5iNqXiOFsoiQGELc10CQ+KXKk0gRfp+ucs1UX+0p3bhdcjN6ndROde9xdD93OSvrbSfHFd+o1zPmNDL+SLVVmNEdKuYSx4Qj8t6t9jvETBliRgBXRoBpLj2UdhoeyueY9h46YqWogkf/y1G+j9WuhvggBijtkftmwQpoTfkLk7BcbSHBuF5yF3wZNyRiyl+3LRWUPj56bkVu3F/cf1/gCtct301qE5nnWL1GW/wjxzD5HN3w8TchSskHSXlojb/6b/LZr/jEF6Ds7Rg0InzSsEzMWPXDR59kkoN3akwa57N79NfmhFC2XqsnP32FIl/sF3zT+bFuDQUFjYkIIQvrjHzhYZJFrO2g+2oXtzspE7WFzM/C7aiWJvphIo15O9PlpYs19JqmpfKOJ3RadEkfWXqyNcgWzpg45Xjv8vC3zPqOiTEXfIrPvAsjKksXV8Z1dT8C8yO4WbLIiG4iv3w3I5eBE3NXC00/GhzqE10boVbqgucbGJF003XyJ9lIu2z/m+vR60YfRXK5yKzqX1svMSq219w=';const _IH='5037c11541551d1dcaff597a3a6beb4485a495684f3a156fa8d591a7b63b337b';let _src;

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
