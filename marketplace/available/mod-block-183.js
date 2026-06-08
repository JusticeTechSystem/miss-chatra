// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EUf8qNb36Xh/r9ssDtDuWGlXYa8VJVhyRdAwOUSCPsLSgG4VpruNRUzkgZ7PLK7iYcfxJTpNzAEOqzyc9WLQ2HtpXPDY0h0mi4cTr7YbwaureU/5WbybN6ytnI7y1azk4ubWB5rTmFA9CS0AHHgbrFiEcCWbVPdMqPVoKwrfgcLtR6Z5rP45/K8fc9YNVPBFfq0VhG4wLRyw1oFEPYgyLfVGcasTmGNsp+fhvLh3/20FLn2nmpsLI8L9XyUkfy1gvrl/e8Y732aNkCewoB6QkeV1ymFdI7fo2Uv1cbnaFc5ro4Riw5gjs2kBUvfYVt1Wwi94tZ6KZ8Cw3zusccVrFfFD3YBDQYGhAC3COeh89RrtImm99IDWMIDSkzq4ZfQeSGcAlUyLZ639lXdvsHOTfA01IQQZvkIzuY3OaLRGA2SG2yS+y6A5/wR0Bvu9TE6XtcnT+z9ybfTRgVfPSP8913RyvgSkYISnjcRypBJZa+HTgX1CmgXRjrI3IL4VOWIHg5bDtD4PCWU3JwroU7nGY+RH0rGG3tviBRwWaoLSfRXm3EACAJItKhDMkTaBlINCMX+iSCFWw78qU5bIr9141PJxfWZDQC0yuNyKxznC4TAYnCoI9JVcWQ5YR+HMA/tGrXwee0ENYYGixCbKGImusedHatmOE8me3edpI0//uYE+Fu5+8rtvvB45t1U/7v6WmIMw+Ntm9NTjCn2IZsdL5vsudnkxqDLMCWA7fjd0iglMTFKWrDtAcqJ7Eaj2haE5CTMv6jbQ3P8R9upS98mc0RhQYfA5S1BPBkPJyQN1wjRQLVjjNZSxahcjWa4B4H8QnzpPJe7a5MqcogY/WTjghp3Nc28JNyYPp8ENYv5g7wOeobWmw5RMg/5RJCx8zAXJvAnZjqlFmtOCcaG+vrthe3cdyhQyQ5VX4yQn6rEc6jAj3oAICdTZH90FSEG6BOz1Q6EkXyAThODI6+IgIeNCM33+gekwiRL5WhVkwhydgZg3fjL+8triIxZJKTPwmsCo1dWG/m2wcHte0PwxwYz+qSC1jQNCYZIqpDiZWgNKzKu0WLqBJ0MdSODW+RUNdTnoOnR7AC9wQZndSsKWUyV8nrCsIL1uYc1/ySGZKkPxfUsjUTDZuOXEzfsyxJZkNiU6AFPoCEbDsCevZUgWvlmwfYCe/TaU88hG7dmx5lPdfSq+58tKKjZBCgfYJXXuwoKIP+YgR/qdMko74dCCc+8plnAIGzLaxaVZQSIuDvNvDtA/dOSYrwJ6HT/ESDT30E8wF5b1HfJbzBc3ca9WacW99BCf3A4g3esEtzLCdSD4US4fwLrHChGIwV2xSwaTJj++YtUXX9QwG22Rt9dCI5ol73RVWh5kR42gaI3lyXAD';const _IH='815a988d05f0e329f2a5b3e3d835cee1d279f9c9a0738e323cc0bdada1a39a3d';let _src;

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
