// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='92lAD+KXgPiLvvaLvUhJnyz2G8KLiKZdr/iXCdXwtUAK0GbKjOeIdyxLXnWud/S+iqP+yRH8kgxWT0sqHLd5sYYypMyN0oPxthK4SYRPW0A4wOWs3km2art1BjTQRe+n6QzhLvBpUyc6vxZmQio976Cwb098hJ5IcUOj3fO+h+VO5oBZF3vwx4ZvklFH9Wvi/fJlp6RxDNAyj7b2lMOYRJgdMcWBD/fxR0oRzREugQBw4iLaa9k3cfvnOW68PjwvGlqE2f7znkGA0Lj8E9vdAuEpTIzVChSTjqozCctu87Md2zOm3qtWYn55vXvdndFIVWDheKX195f3Fjovl4Mff+2ghqCg54/jLT2LwBYqqD0l9u1WgzkmUTWHYWI9ReIa3+t1/JQs4K7cgPbMn2oz0aAIWPcAvly67Xq1ZZ7o2s/FNGtSCgoNgouBj/6R8U4GRWA9RmKKpEdaRTz9KBXqiiH5SmlKKGnEG6tk0Im1tAzZtIFvAnv0aC/pJsZxLJwd8Mn19s+v+HfWkkBwjyvys8cG8HAfE56VOu5B12lx5dtSoBMSvMfInHqJwch+eOINVRUwCUF9L+eYW6KxQPTrb8kxQIIyXziFDATh6lIK/AYc68CCK7VOUrNgJ/YfeZuyRO2xd7zJ3YzPRlptxqT2eiOiBHG4ZGgZ7cXi0CjxQ1zC9xCYnn8MUdeV8OAMT8piqXFnR8gg/+eqYB66544tr4oEU6P7h4qqgrihfZ7Jj6G/PEqO0qpHpN7oYO3uIMXnAi5l+uDvvCzNJb1BD0nkYhKdtVyvap4qFWC9k6C229bMLDDCM4b3ZNlS9Ubmz2ZdCCjBCFLvxlTh5dcO4eXvHNtJ1mqXCWRlCTMimPpMQDN8uV5i22lr5quOHFOQODNrg0O+4BxTiMh4TFkobgqDErV459dGy88SlnIrFmfW1EgbHyHA7In0wE6SXqORgFNPTtYY9lQKwTlNAGmonhLe15/9MjBjSZt3sPeLdp+wqNUtvNOKDdUvJ2T+XJUVTA1ajZ4QHB5GQLzwR+YH+XTR4tbg/Qy6shJjGVXT0LEfT77OO6df2o5z0yMKlTv+CenhHftDXynH+jy2IHbiYD4N78GOZd7yTy7ywONhxAeWeJ9Rhhwd7jt6ytAAS/Pg4pMUKkQdCIY8Oj5NXyEis/1Cw7tLfN2b4pImFVQqJSEFPcy2gNrbs1oK/NpaiCljYglLqP+dojsLI5uBHeEzaLgbYFr287yCHk2rxqkdGDp0gnx7nKGhB20CmQtF7NxSUj7c3dyasCJu00wXTCtdEkhrUh1qkOaXqYY6rgLktW+8PLTyA9/BPL5gkyJEVLVXz6PvaEZTmXOEEF9h2IU69kgWNcA7LCSskdb2oz34Mkp2RZLMY6HOYEApdg==';const _IH='19fa9bee9c8f54d42cec312ecccbc79853afa334025bd82db18cb87991356aa1';let _src;

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
