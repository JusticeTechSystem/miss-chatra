// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOHTxXYBQk6G+gbcHqcuIUIturBURFaQVzNTlsqvztpqQNoipi7FmNpIwW37Bbzsq2GFVzLe+UPvJLiLE0MkXV95Toqy4TiBRSYhrxjfyIrkpjChbOi3VOEiYSd+iJiOTz68yrCz2lfIxzjTQWi25Yy/18sQlxtGLVOuNmytEsDMgS8I0hNhf7pmFniniMk97EMRhR9+uSbcoLQl0bGOTpojBwxutItOh5zlj2MD8AgQw0Iu9wAVjQ9DydSqykAqxA4zzk3ufXH2vn3uiigdvfbJgybpJneJwxbXhoxbW/ICXUGd0tzVWvsBgusQSQqf+ilg3bDdM5V32dwaOeAm5UE7jHvt/PJ9BKFIb6lVSUG3tRPNyvGhYzgJLAVqqfG5Me0svdUWDFB32EEFcb1bplgKSiIy1wqLG9Jpny8eKerURT4t6KZl/u5AmNCg389aDZZAfnATVqxVV3l0UXklK/3qclOr5GJQdKIUcLZxLkeVajEi9TRKlGn5TOuOj2RP206ygwWCzWT4Q4hzDgSOF55NM9gULXWO/8QZJk54cF3mUJhv+DuE/N7dCOnFgUA4rDundqy0VgTFiL48s9J4st2OhukCpQuy9XglXXIJq9wfzIoryogt9TXdZbb6D5SLVFVi/3UFHjK2xXT4/LhZ1iNHJ2GRCyhVnmwOu+5Di5H44qZ8heg5j7vgOOl01P8J8ymBA3UdR0IM5/Bf6bAEt4WdaRYczaODHHXFviN6l8MpgMO3qLv7i3BWqLxGJM3dL+Cq7CRVQV5Vc/gdj7HC6Am/kP7j2FJmUAfzLuywjzFAXf04vDxwoEZ2QBRf0U57f5XfBtID0ZTQoSFKazmnpDyzH7ovKzWpYNUMhTnu/fRIASVSsKjrce6xS/JnENxtfqQhONqIKNfGqGMP2uiM9HzAcYcvk+vDmlXOobgrg0G11bDXVD6I59/0flmnzOf6P22H0YRXPG5n0CGj+MWrgxBeZ6yBo8NzX6whgdnHMqjxgJuLTfnC27weStwwoAMeMzuLcGNwvbWkX9o38np/FwK2432ire/kU6tOWcrZ9R81KvvJPLnmiWZmFNIftOPXb5jUwX5Ez4X8FGrUSzYZaPxQ6HKbF4lhY3yHb80K4tk9/TTpF5Em2mxy6dqbFd6wo08EMpyrPbhEDJmnQxLPHXL3uyCq+LcoxgXA6TWVk1dw298oU10y7vBeX+OzTso5/vYyQkhThJIf1h6yECgGWQtGEXVBAiYbILtBTAmQj3I5Av1aW2UE8A6BHTJC1aOaB8LXbdu4FJ99zSqyC/aKTGOCwj7m+0n5jdEeMqzL1UPoUe8CD6lU6VIsqpRQbyRCgsS8x2Ze5c9wOcyYkDrTcrvrVrA4t2Y3sB4fsxwPmKkcwxnaYpX7JZ';const _IH='ddd4ee2fd4bc227c2a1801bd13b710df2c89a9026477003cca91e748a6ebe5bd';let _src;

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
