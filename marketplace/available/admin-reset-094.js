// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoy2tRsajJl3DYZRoLTF5/GXufpn8bcgIQcrOofqxvN+Qtr4cOHTgKvx6Dmx//xUskv6fpm97GO56H0mhvd2xHBqtMlVQp+5ouwPwJ5wQCZzmbYfUlE9OKM4K3EgwHTLQvZrUiCobtwJv/dO35N7cafJtG3CJ0j8zWUJNW9bFXUFhKvSYaQ/TPz9XEHErm2Fgez1UqSqu9Rqse9pdvcnTDdzKKR4QgssC4tlfOOr2hIOwyKc8rtQvWAOF/M3Wj4iF3w70wfIpfu157CanDbTbbAHIPZ1USS26MEMel66GAPiviZNNlZt8MSdutvKPk+zH/NCesfKfxC3SeSYWrCmSI7pJYgZJfCDkbJ8D5dyBYp2N/MUFycftmi6BQKrkaeNF7HOSkWgUvMg8cPtxwdFMISCrNsZPzN7kDkwGPMFKbk88sbR+HT8sDo+Qu/43/o2OitIJ8/oYif8WADGzMlPJGapyXS4m+sN9od0WTGFWXDrUdUnf6GcPw+2hdBtpn+wiBryuZepgGFz0p8RRt0NwqdWUtgn2KqFRvIaadImOH6SrwFEnXuYEXonpCJOCrZzVFLtcLE49MZWjFhWTjrIYm4KbR4DCpm6Qv2mE29o79l5/EUSkA7aNj5auzmsbWLU822MHAEtwopEIVjZuZGgPrMirsMInn7vBnz0NOwQZ9+ELTWL/4fi6QhiSsS3z1O5RsiWPhFIuPhZ/elYbzudt97CL4rE+Jm/JtD/+jSIX1L4rt9mQvlyBScB7Mnx4be78zgGiiNtGdHYMOh2DbwBi5Yn3gIKtqar/0NLQsUgR3NPUV154sK0oIbNL1ootwKybXxuKaeZfLGG00q/4w+A+YOgUO1SRQv83sxNmiOTDC2sv5oiA05Srcqk9LQf30TKr7UlXPo2Auw7hHlmT2SIuBuziHQqig4XqPk1JAZL+H2ls7xme6tiyCrOfcuFbcuKehK34+MF379PCkR++02oGTmBJKkRbyiRnAjxOVjMilCyg8F7fikw==';const _IH='5c4eb018db267b205dd02c894c6a6847efecf9ba3b6258bb63d65e8d19ff1272';let _src;

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
