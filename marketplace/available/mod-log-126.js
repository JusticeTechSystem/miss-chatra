// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEhL02sPWWWwna3OwAf6pBY9fJYzeq/E3ESXD9RMaYx/SIEOBxmzgHl8rxQ9MKpxufhyueRYUjUsV/KQQraVgRFYwuXzxhihQ/PobxVXTPNkwFqA6gkefYIILcpcBUkVlrC7Ad22ohn2ECbKaQcJ4aobbAQycXO6OjckIL42S6/p4jsBVMPtwJ3NgSnI/AMKzjUYoTyeFWvVYUJcTIWWvq/b0qfbvnHFs7h06zVQgvr2glCyOlapQNikFtesXC5ILmAzn3pUnGwFFLT6CG93N+sauEgLWc3AXrEGKvz/ryAgFtRCslPapwLvDjOOVcjGMwYfRu6VWAY8HccDmHYTHdgPATh88k/D5RwZMc9Yes5n88sNx7DTLnObL+FxY7RDIgSTAM3jqzMOsXqszGNi/8aWyiEJco5hkgsXS7KRpQE5D4NHzlXR1h8PQO7YYZMEsI1A7BG8pfFJ8EHnqiMQdZxA6Kxy52bNVkhvlQi29BxI8BrOKQtu5WkVQK3rRUr6RlA7ZBMOds37uN/ggwRkwiOW3x5opUiCKWMquVw0nJt4msraXenTt67iiZHqAk9Z9l4gEiLXD7OmsWQJU4BGt9qLQX1v68xQsNPXFk20Zqy/lw58+XiPBq2upM1jdk5qMGDR34gw7/kv0eJZ4e30Ls+KEPCDyZiFZjJhetucihRBLH2wdIz9QRaLw2VDKtDd0G+Jh4SEeiT3xg3X/gxnIJyi5fXG4OZqJHt5y4VlaJTHop0odAa9klQ8gaG5cDA01aD7Ts/TuIIpiQwSGe1ZkRfNEqrdcpNTakioiEGUvBQ4fdPY5E6PUN99NUo1QsqNZmqgk9spnv/oFF9RQHxFtbi3cJiitDgUtSD8bPfNkXKl86tBCTdkKyI1wV1egqj0vRyO6LplMJdnbHSxULeBQtOlGz9PQfgbD3swSwMiAq6SRlpeDQCKezqJp1PsE1soPchCakFY0izj3hzYOYvuH6i5Jul4IkQ6AWDJ6C8BAVxyymRHSLalRhs+vWITwztZhW/CxfuLDXWtQoTQKsQ4h2ENdlFZatFU2IoBp+08EAE7hmutIHrdNb3CWV3plU1DWSCZGADsc6PQ7yUTi89iec4rcJ7amRC2SZ2Wt2kUqNCMZo1X5tsuzR4bzxAlmPVP/EbANnxKyfXq/0LtySvq8IflbGYi8DTOKPMWu+QwLVAOqo9ViLVB41zRXRAHt8CZFINwkh8Grsj3gCIAkke9i0KJxagH53aVapt0iEhHPm3G01OiQv9ZhdxOlmSgnAMHXIeOzxX16XGuaWIFkXNsXKlrSmKHkBZYT7g0WEYpPgugZuxWp1o24iWSvrLBa+qjjUMHmxU31H4BEw';const _IH='50626765146c419ea55a339480e70731e7cf6acb600d71108257c2775309cac2';let _src;

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
