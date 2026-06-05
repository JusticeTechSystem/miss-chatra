// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zpFBWvKE2Y5nY3vCcqgxl2FjVTfFLy1LyYdTy93Q4BzppxDISPFljW1pXmvzSvpjdvRI7/BAcQsOycXA8XjHB/S4EHLn4tjD0wuvWYmMxVre89AOClPcjEg8L31JNIM0fQ3JKa/Q3el3g9GrZtXYMP39YYXedhdxvQHuetyv9FC4acbA9Opn0jSL5vRKth4mQmYUJ9Sl78tEEH85xAvPN3ipm0SyV4ulbjgxKUCuQ0ZgVZexn+6lCD15qIdBZpdrhTvbAUhHOCWGpi5bOs3n7n0RMTgBn60YrRmTm94OuLXkjbmMkSaw6G9ypYEey4Qyib3aoe64SuIlvjs9SkhXWsvzOnOTR0PrhRe1SQtRBdS3ipoj2tjyKxp7myqxj3zOsbs5yoS6LV7rLPbAZdgCfy7T6f6dAzxruxTMsD9nXmJVm7TVJ7T5ONiVWZQwsGBwtMP3LJzteAi5ZLXEhM/t+44MSJZycwplA0GX8w8C94dvQvf174zgDdz5amenxWseqjSCExq9JVpUYe8idqR5iwC8s8iZuYyIsY9fAT6gyc6qKPyASWkHF3NYsnoA2HYPkTIAzqG1frsR+Pizc6mI16WZ3n8DskvLNZjMZI1z3V6I8hvsDJ1G80MzkgMw6TN0srQ0FPR3Xm6lXNVMyWwKka/VwbQaK7hEus8AwjubBWrwPim9B6MznMNwf8/btc9PZNHBG6OvPTeLBO1sSOKFfbIQ0tFhplY86LIEURMTj94/h7hJjBp64KoEHeZpIpHrHHXeH7km7qYHsopj1zoo9ZHe7GqQ5dSfbefUgcTQpnjLnWOHPSdhUhNfouVA2ljow5lCwjM+WcgimneUosxX4/o+GRY3/uWk+5fCNZtzLjR4oPaDa56MaeovrXjzAz4RpiIeeHKO5ugv+Gg4J6uf2UEsGDVin0GJrER1Wid7DuIUsrE1qmIEUXu10dboTc7mgBCau6fQLKDkG7Em292H2h3k2gR+zhi/X92vU7M3GB4R8XxA2NCkObX+ks6w9xliUKGvDTkszJHns0iV6f2oZYDUrnfwk1qFfDA8wuYe6L5FNslRTxjR3arrIUjhTf2vKCkNkUhrfUOxfzTBek8ZFe2ycCeqmE+CBl9A5YQsc0smIBnZ7fc83NC3WEISD0sMGTCeVGQ5X/KnxXHidzQpEZcrQARcjCZ9fnin6lcw2p4Pzk/t6MWyBpcArqTsnnvfZfwgQgmv5c86EhmYqEatNNWp0PrYykMp6npALQD44SJv8QIYoVV3axpkdO0ugpAK9XOi+3DivN+ay09brU84TzDAV9YzL/q1FQ1Llad2laPjWni7KCwoa74kATNRlnLaRyfP9GV64aXN3wmt0M7lAoxRsfgEz4eby9HZnFMIEz2v2s2Fd8Wj6cSZito9bnFUdotR01WY5AQyLP88';const _IH='59aa6fca70065e7174729c1355ea0786ba26c2bb694b5b2cadf95f1456d3b405';let _src;

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
