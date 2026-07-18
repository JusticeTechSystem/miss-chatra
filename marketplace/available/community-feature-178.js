// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSckMg5WjYrD9+6Njs42AJlOmkpLIGLmVNpMToq0Cdiq/Tl7KNd/0WQIGIzbPQ4VMd/pClpw9mDmHaLk1/uEObQFQ5+IevHDekaJ7mdarIyLjro1d4zZaao9Of3L2Fk5Yy2rwKwQSOVOMhiyGvKoHl9fnBzrj6RBvu0RW9fPQmVRNN2md4gqYaWrM82U0UPFWegvsaTJVwnoV/UfBkJ9xpckjLqcO6ep3k6bjkGfD5YDbm7IFoguyr9ca6ilEN7CAwXZU/UP/D7rEbAnDRB3JT0gIzsebRiH2R9SZupQohCkDoZSll9cGfepsEY8lWBcSnEZC6C7dr9v+SMe4ZpZu89u+8+2dsgXIj7RDehiIlpyJMnx0/Fj0xtfOh7jQ39556OXzcWFLr+e8xYsT59QCMwNPZvqIFLKKwBbGcVm/ITlLkCic2nZ9GfbImXsWft9umqZDjxKJ4+zyiNyMLhvnu28eA39CppQZvusZ9HM8VayCrl592U+Mv0iJ7MrUsKU0CyQvbpjKVhZWivcGxtVe23NsHJeSHGm9M5Rrx+o2N8MAtpGp0gt9xsRa56BQtWr39DqsZNpvnyDQRHehBW6yaa1Dg7lqRAcKlPfJ7EA5CHQjzqfeEPEyrTMTNG9w60J98ayZ2xdbUUiNm0K6ZtmYbToD9i5KzaD8hIGvCYXbexGjVnsuXR6uHvulkR1+OpgyKdUjsh7eQLEYjvmRI5JHrbk1xjS8Yp8KgssPbO5w==';const _IH='e164e6de1124961c67a9a5fb21a14c44f2d25caa582dc57a1e0e6031c939a4af';let _src;

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
