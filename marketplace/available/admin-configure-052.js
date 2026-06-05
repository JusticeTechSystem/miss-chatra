// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hyf+XAZdLEhKw4LCcOo1jUMp20xfB/NXrdoSxanXimnoamMO5lMwNigoVmYgTMbPi8ypJgOgrCsEzI0zDi1Arrqgr8tFpoXqmUVn8m01k0nx4RvbfBGhkmkJ+tbi04U9nsFzMWo8wi7+KexhcyCoRcgVEzZy/qDbv3oTJJYwA53/JW5UOB5qFn0O81gLiC3T5mWOQtEdXspXx6HgrFvea1OyzcG4QYDPCTcFr6ZprDhYWgq8k6KhU2tJocuQk1HCTUQjs3oQscIYRbmJZYgH+zmwqPf1qmhNhAJUVEz4m35FQhAyGreSIQaoprEFI1HJNDIlrJAtAV4yW0QIa1nfMWY7zkQdHn5ppu1EUsxNuPR9HqHzhLoJxgxa/rNhGUR0vxcyivy4Or6Uu+hHM+f6IGRef7BsqLl8BqVNGyKxG0EmzzRdspEX9xfxNb/EEN38CanSKCdos6MoruJXy3tsQ9XzXRsGS+PAIvokHoUTYaAgAx+wqUl7p6DkWLBNzKEzwRFH1EWEmDJRuALJkMsRsWjjn3VZ5Dhmdsh5VwzwSUBt77832XDNpv25jVEkXhob4OJrBpr4GldNA9Cn36OQNNkgnNFDmERCxDTwS9xgZ9tHVq9VaHqGzhRZAaRpMo+KFRAqvo8v3Mv3dC+zSeHLzNc6khlisbZW2cs2epIPejKKtTWEVmRGohDOdKGzwzJfnSo5yj93Qku4C20h10l8b8EVqxFg+skFJGmxNNeSBGbNf2YVf/znm4jscEaJbI6gDDx+gqpid9f5lhFx9FUMt40QOss7PGYRYjWiNqoxmv29Txgrn8St5qGaNRen8x4YEL21G+j38H/OJdLn2VaEn2nM1BeGxrmYGqLtIjUYdixA5bpSLQhRmb5YQn53uSUXekCRlAwAaAzCS8STWBWyAH0dKt+jqGlWWDP6MJIJqsAWTssPVhrtPxeqYIDhxtssyakK0BEDADmx4uYEY7rWjlMRO5yNSQGOTLbRhwIpi2hOwtm6ki4+2RANZyPh3gjGPU4gy1ie6MctsW+7zDfVLf4h';const _IH='981045cea2671b0cc011cf6f440be4da031da0a8ffbf67c3762859317cf161fe';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
