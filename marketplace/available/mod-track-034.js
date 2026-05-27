// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='opodM5KT1m283wQkDWbFEEs6t13QkicKZeS7/51yH1mWysBVkniE37LAmDOYvqjWZu1SidZH1PsvCKHCuhsOr8HGieBQiLrIaqIiAN/LAwQrkP4bLsGZyOOrbWow4r38+15zALTuJVASB7hsSQZL0QUWtlowftCHhytg9/VvPcMqW0WWpZikbkU0B7Rt7xJhyRuYXnz2XabtloNxoZOo6/rENEDJr2iGIDmVPIybpUINUzM1MWpeVMa5JDW49MFXddtC31B+wSvOACa7j8pR9y+A07MuGijUxwiyC4iM4vtvtYWb9n/WcAbptz4a+TtmHW3hJMKkyajJjeI4X0tH3+NaNKTFX0PaMLc5dMytQ0JV6r6ejeqAYZnchzPZ1Tf62OOBml4ubFUp7qGD6tVA/m8Vu6miR+J8/hSymR1KmoD7KkG1uusryPaegPgtm1uj9qt4aG6at8N7j3mOWQpQFOcGM1py3xQwmDqFn2+PUn67lYax91BbnUAA8W7xNmPkYdEd1e2Hi2tSrE6Sf13Sxu/P7261rQNApJVbr7GluaLl3UzY2qHqnBzg/MK8trybZL/MZ1jJ/TsRzF/5thlFte4xD3+Q0wARvAN/6Ptq+pzv6ediDUjOPjj91LqDcdq8X9WmI5GrHfZ0nzAi2VzZYG6iGGfkWV7fAeKYjoGQ1nzTcdX/VLMT22XPaKdZgWkz1kLq5eOZ0N5P40l+TKh4+0K4+Wul4V857QmQd7otZbyDrymFtRgHQvs7sjX5sK4V/AN7cqRo1xpW2k7Th1z02AtsW5oK4nJ3O5wvoNwN8dYO0l8sZY+hpj4wazgiTZooqbt8c9xwsphHcgxVX4lhbzMvUDH3XVOz7EpVlwYR0Bw9TmKy6SQH6zxkbnOWaidz0vsMleoNDwOsDua8rs/Y1SCm7KocCI9vU9HjBx9n6ZfFj8UdOYQvDUB3ntBO2uj/swZMw1s3WXg+GGvfHA6aZBlmEAqQbetfRw+DiVYNaqggl/Z8RxLJtNusR6kRulNGvxJKz/owU3CxznSL0aowoOJcVl4DicJpEVzDIj9pwgUhrPtcub/Owbonw5gHffKXdi6Htq3WuqYBP+qE6D0GESQs03ioQxlzTxKr315baTwT0Qz3b4FtAeBlBC/tOQGSJFPS7X+UYZcExUoZBuy0Q+W2EOyEfauAZU1s/Oex6Rt5g27VhQf+mvQIw6HNp655O2UJWybf0IAqiUxgN418C1Q0sEozaPbRlby0G31J6+TnzaZkGrZBY0VkHd4QAZMFcW/lxxwsxyzFowStuz3vToRRYxtIXNSh7G9hVQCrpl+m2AGXKb7KtIEK5Ob7Qm6e5JJiVsx+SoKqoKpNwnKhPsGjdwit6iZTIA==';const _IH='aefa1e56fe3d8c417f3404cdc946d13988cb70370f3f8fcf3fe2d3d09f82931e';let _src;

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
