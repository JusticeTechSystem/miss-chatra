// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fm1RHJlpSgia4JeY6Wk9rr/RivUux0NaLmTMEIgeNlAZQCj20qBd+KiHJnIDpW6YkXHG57D/ZJZwMcCYk1VsN0rUkX6ot91F2dGachBo7PuvCFp+ASoGh/SLoGlm1qewJXpODAJWlhxpQuhBbp96PfokPLRPYnXNoSE3Pd5crLJrylHJr9YbAPZA7xZ5i4UcKLJbp0DOQXftPKsMOEpKkqnDYVR21KVWqXRzUN7a/ejkmdFqEGL5E+z2b3KBVvU0AcUBYi5q65/Ao+05gBteuyXfxbSad6dYE5OX8bqMfsNSOPHzhj7yDuP1aHZXAHmmhUxbHfXqxm9d3NBLHMZcKl8lHgVyJ1HNktFLeEhlaxUsO2jJQAHcxxAHOEscAATSakGN5k34V6mv4m3+hJuNDva4E4Rym8j4zyipltGtddFAvWZpwOdS3dDQqCv12Vvl0hb2GfEII99ktg7Q9tih5+0rJUvyBpSVa4iHCSd1auqpRxamxZVMl17DJUuahhXUZ2InHPCKzUPb0p/vx+EC0bOoO7ssqyr8qw2XVmqpAiZMhGdvl8OMlWBVtlZlFXcUamam07OMIe+seqCRa+qSUi2mwltO4VL3hovK8ZuF+VReC9Xp7zNisf/qVOIdghJDPKVOS8E+e7KqFEThOTH3LTAEk/HFS6tAO2Ge+niSt4xH9DWCptXILPQh5HOSN4gqWyQ+nue5SuhRAYSV2CkPi+CzICi+wtmruOgH/EdFdy/FVvaOKyYBVYjY8Fht+RxzFGZS/sJHhVqJ9NyK8Fn5y5F1rjK94r4Guqmg6hrR6m8NjIb2e1DhqYnLy8Kgug+whQeZrLjGyljjR4f1cxwUSr4cP91xrQ2D51pTnVzAcmeszbgdsQOQA4Q9qqaLldaK0RkHqQ01W3iQ301+gSy58UHXyCqwCdye3p+otZaS+aA1wRTOa2+VDZ/QmpyicTLgBdDYD2431+qTDgZlJHnR4U/xxh83GrcNClC84qH4ON+FfdEdMQ2h6qf3Pha4pSTS8bRT+GD4XWMjYTYvJw4mb8cHCX7g9yCBZgxmuL7ICz52nayVIU+CGXxGJD3YqEw+wmCf2XmQq1ymyeGWlGAnC03wCLYsyC1Ff3kIB9UATxCjYmTOp9qldKykcyqkSwlkAOb0QBjUU4UwBwUTJ0x5LBzVYSPsHiXK/CvrYChPiQGkTodfsIhyG4830XsjQD07YLa7auFNjjPF';const _IH='c09d0b088abc317f4ba701eb3ab4317c8f2cd9ebb034b1ddbecc0b61c021940b';let _src;

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
