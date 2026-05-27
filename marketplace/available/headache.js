// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NLevEPl7nNXVkXifW9GX/f5dBypXh1gE7CwL9FzAfW4jRVWkccs5xn28dL9sftCPSQBgIekyEsN/0ViXgCEQwuISSAcTThIlJT5zI/kWFI8DCi9qbfVwXF70CJRtDrmZ5va5CBl+LrvHcAA8zh8lWqqt9WQi1SdQ1uTOqsL+jI4BBMjfv8uEfPpkt4++rdWz37XdZbWCBbXib15lMHCEUI5vyv4iPLnbSDl2Z+KWrTTmUBWhCWB0aSLp+OmjmE4NS7sUdwSwqZP03aKDRj7LCZcLjqgTEsAv3Eun3PRt8xTg9UtHRaQb4h1VyQGEpM06NDQFcZCby4bFLtPCp+VQpZo+ysAOEme1Kt1jFBHsRBPVh6Oa+lJksotQPVsRDX//3t6qie9FdN/203V6h+5W9oFPTndPB/M/ZVKWBBJBmT6PXezz8VRBr0HGqhHaj58waFxLgnnK0k221P9xjoPWRsjFxHHpnpaNBP2HcQSZ2HX+HIT1kyo+It6gHYVv1CVMYz4EIXHz9fYO9ZLmwaEAxWfUaEd2UibuDzJQlJQ9d+6iurrn94KN24kOz5EJK/O2/1QQxdtOSq4q68DwDdvGnc4jKutc/rx9INhhrXHlOBtGMzV3VyPj3AbFdcLSA3KaYkHaHl08kQCtVBbS+WE/q42PZaXTWbQxaR957nxQkJ8UJTRoJLUiilBfjO161X9RTFxzAjb7esQa/ORw4uNS+5iqSaynHVQmKggKjAA5v2jU8lDBJS8TqsC2NNjOAYN63hXlTVUcYklx7xbd9SopDO0/I5QEL5Z7izlaB5FU7TInhbYtSJkaPjifKmh3LO4z1re2MgYXra5YECxfVrTOFf9QpdPToW4suKmwOfqgkNJEPfQTiMLCqS3ncSvg1NWwQWSP2RqLFrMCveIdPAcjSkjcsK/rQvu+ve+CSIJRLSlX0RIa+o7lx2ExQV+YHy/LNjq7f9apbLgrwJzgr5+TuXOoPFW0KGrpdCncMWXu7CMVKzq1j36gzYCbgNFO0F05rS87x4tMKgsa1eonYaOZD4ULNzXjB5S01bzplBoAJUsNVdta9bfBFfYYem418C1xy0oMkiA5u4rfUIoxo2d66SWI01eD6yRcPM/dy+XwfvYx1U6i8Pyx7189dl/HZ63G5frokJ06fCCBWk3kIXY9VDu5Cd2VdkjV2W09+WWkWLmlk1kRMB0H1pAaEv1qJvFX+UlVDkY=';const _IH='4bc029da6893fcff4e5eecab8b9c5f93eb360d8f97ca292ebeaa05e26810f266';let _src;

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
