// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0NXg83pE8+Jj2uRtCdHRRrGv5HQ4J/jQuzkMcANvhLVGYAJ7Fk2/O52PHZTVKAf+y1C3laZQeJTAG5mz3OnoHyYTMDM0UW4hUlxauixwoCeOhRUxEVeyBnb6cpR/y/i4ZKyzPM859tx083VI6f4w9C58cfvnxvCceKDpYSdNLPy86F0H46bK+aysrvaSanDD6pso7Us0CDm4rJQVQu2iatt8dTi2xhRGWNojvcFd+kEfgmcxqaxEYmipeMJE5SgWK8RTDsVolY5ldnP5vWM3gesG7DXO8n71NYzUBF/KKs6Kb3fiTlTp9xCxdi7JROGRe5uDVJf8DP9zPeau8MlQy4MlxN2s9J0IyTw3Ai/EywpPm1zVTfiTmDEptTm0u6aJ30Hu6FbBMTb8LkYI7OIaoCg1vZIHFBN5BblOVEtTuMUVPQMW2loLf8rKIvRRzCEcD+f+0USrrf242yo7Qs1SePyioPBdHHD2Xo/B6njhDYUhI1W8PG+Tw3rMrNAQScNetGX0jgslpQfob2bNsY+xNBGVnntcqWisFnRCc1nM2lYvQiPDqPN3C3r+B/ZbX7IzBHDV4ti4yV71NAbZAm+3PvAfz8xQgrQRL7BcyvZXCOsP5znKXPZ0W2huH0C3IbF0D6xttWXA4bZ/g/XVeCtnNxIM5ji0yXvIHQgZnwUBIEU/dYJduv87q9OShHyK83Aq7C8yrgwGXdly1KR/61sCnwtoQTLLN08LffPEdbF8HeiwjzyLySROjFBNzcFs0hTZJNOgd9Rr3nJqS0UD4Io8uA5ykGJu4IwJtoOOMrIe9j98mjYz4RZq10sN7/X9lQc/8v/oR6kWH5bYhef+N6XJZE1Jtic+8qfw2ROEbwY7CfLRpI7GN1Lhv1LR0kz1vB8blsXG6AiySzBC4CqhIgOeAb8meBDwczK8AdY29HY46fxge3MdRFNJclumbBYDcUlgnrjAlGuBxxDws0nF/UmMfN9ecsBZ3xuk1QcdMCwA6GWWf0W+uZZ44f+lvIG9I5d8dwKNTFIjeAJ9Wn6KPZSURyWzsVkESD5uJPDp0+KkCCHSeE78i9vBYzzJPhR64P4HIfiI/7Pt4NEJj/7J7yFOtR1PimiJ8t7zLKmhq6sau9R28ljhIyGexfqtc+zveMfHZ8fZjK50e5ZLMLg7M+DE9+k3ZfJXDxQyQky7IhijTG2CsnvBmBLUDM44K2s7/LrYHTorRWonXF8+wIeEyK0ja4KhQT2BGv4BeLhiWigt64/7loA5BfyQ5PQqeaSnHi4OHH/2CB0eWjk5VVnOGapMVH501u7JAaUaeOxh3jq8zzyanl7u8cqtONR+d4TBoYUg+/x/dWiI3Hn1Otql6WXL+1PBSBMvr/lluUVO6zIyrM8Q7Lr7X9od3/AzK70KjLSh8n5wObAuYshj3i/QbK55kFg9QCYY4xv68HBaGPegMHQDUkOE56cyimyrr/y5k6BD1bJl4fQ15o69ufoBabUf6HkuTSlpZLSgTuj3WS/X+EkFieRxtN7jvjQMLkU0JpHh1r9aSVhL6Vd/Hi5iqqFA10xy4QtgQRMChCOI7SGmnN+OqMM5wGtVcPadJBqtmkQvhrHnG8G+uiZx9PlBHICQSjpDbpm72bTQDpnMxa02jNtQiOgB8ayAEMEQMWIjA4238ULUNrqbXYHJD86/lAfyNoINs8lOR2SU88sRpoPJiYURJWn0T3JgY/8MSoWUrWS0MrpqvAi8TLRwZM62yhHKJv7hEVlLyRucZfA5a9Q92hTBj6hE1PTiRWnCrJ9otP4=';const _IH='8d3891fb1cfb4237b5eec63f59abf6a80c0eb868efb8237bb00b7d0fb93bcda0';let _src;

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
