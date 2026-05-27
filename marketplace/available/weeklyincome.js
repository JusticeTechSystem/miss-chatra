// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U0w+7lkBDvURexsAaLLkm2Nky/qhJu+lO0BgWlcAOJhQ29clji1BT9umBNdIfxMyQZ6wrjzMoybP+7H5LtIPeUlpXGOvHRxDSjiZ5vO5vjiDcslmrfwRy0QlNlZ6oLr9UTZn8nSos5AwAiFifeMVewyo64fjLMrlmIPBXYP84hEUg7e4NwjgtngWGqHYGkI0hnFN/wDUOhTXlhcSkkxN8GW8zFhrN3rGt7zG7Yno+just8QSNvszf1PQ+Y/RwNq4Uj0SpkWcwFxtXQxveNKeld6avPU8e+NfT3UrxtcA5B60CrU2aGGGDxXeWxjIUVjPVpYgdYiInhpEkZpd78Zv7y9xenCKHm9YAimowthVA0a4B04JuKz/x/Re4iorEX/oCFNZ950vxIVz/4+a2Hc0sHc1n94WT6fxV/tiZeDrCoP4zjs6hU3RwMImMgTpzjjeZFx7MvK2oWA8SewUMZ9p2Omei35qimqypb+DaWarwUO+RPUaw8UGPbj9H/dehpPB92R0yQLScVXCpIFuljKnzsn+hPQowI5yDho5XYZ5lEwWBNuI4r9e+SEOR5/3TYlgwQJe2DS1PuyFqxqmKkjdcpZxUsu+Iy+b8AoVAIogk8ybhovigzJj1EeE/Jyl8vzgZnOJ4oF2MM5mFUjBoljKnnBq3Bf6CZ3CQqBnv/uVuTyO+IMKpIJVjQCiktVgXIxj54Pf3j7/qeEZtznOm45wSOQ7wVp/Nw8nKqC2Cm3GuXfVjutnxN1uOyvuRVIrJ8nHSAzDDSEKck41rd+4rhtGzLOZ9G1es/RInrLIT/p9LKebqHd+wnbQ/Lw1s+Q4/BuTGukM7+Hu5jMxFnF/TSYIl/xUoDIXXQOT5u+1lL22uqThYtSRV+p+8P3uc9xe3za9zMANlfnwm8AKIMBF2ggV7xlAnc0DJHJCQiVMImbq7fITZ7RK2rbvd9enLFh3Wk6sIYcntaoKEqxOQV+dJQYHDa9lnp2M3CjqbWmwVca0sGOINxKxjC89ROgOL+baJWglBWZUB87oI+YTgF7thIWZ15g/xMl++neaL9U0tQxWgui3DY5M9RTLn7TLIFS/Ndc0HIVm59+EGA72uoHeFUILCBaDNhaE3GcPD7CGlIQqiDmSUw+RPsZVgLjuoO2BrWhBVuAThDaDPlgE4BcxCMVpEuKsd9b67qAGPmYRae8Pum7KkkFW6SyZrXCz8ZtUWV1PEEz6DrHhJdc=';const _IH='c423576d63f6eb252b708ca2b7565fc9350eb493706fa8c8f3cf51235235c402';let _src;

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
