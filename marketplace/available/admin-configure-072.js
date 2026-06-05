// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mR6TdX6ruXYOeCtZTQhBGujjec4bBs3rEHe4+JMKiAIiNF5HJEmP6Rkd+8T621KBYO4KUGgtfXudsGkUBjz+aXrqh7Cu3kNLbwAvWohhWU7KJYhfC2icqIPT8XbqMCETHJxA81d2yeVDWwVY7JOGKWZ5Uo+xM5oVF8wIKRtigMxO6o9TTVEg8xDrdm0ul9B2IoR+hDKv7Fr5dgaiWg/zE1fID6xzUZj57lo+hpK9qeOTSTF9vO3S7Q2XMTeSGEslkO8Krx5xUXU+us3lFg3DwjNjdeH19ofYb7zv4Gsqh12O6tkHk7uIcf2PJo88VkvyDb7o9cjRkOveV21t0XXbjceBj5g3ljA6W08bjEFAQVIuXdfGJ/S4bNGyjEX+eYU/EZzkqGTtW6s/JoAFnqHydRdCdKs/uuRAFHEzUK9TemwZgOa2nuNcMSQZpPceMvUPeaaVlEH6+0RUEiGTOqea+2yXaEdPhkLNMP/ACw3kDDi7oZOQvAFysKIX629drZGXLWivVA4U0y+gyNU38FbjDd100D3EQnm9icOkEKy8IWxGQ3H1aT71eLSu2zf4WPBNsTVpwhpFqfvFh84NSCpkhTcbQ/bJaweBU671e4/5+NR5hQRnonEAbu5Rn3zwD+KXrRUFNnJ72NqVtS9aZZ4zKQTJurmrLrGBo8NyR7UrQGmd2/8wimLrV/9oU1Iy/FK0VENsEUdXX02IIeEhSrMxISH8CWQeaAzCmBy+Ioc7Gmyt9xmwwgI34X4EEKd523Qjy7YjNQ56Q/PTsLCENqxcukGxX+cGM+yE/MHFEMynLG4RNigI0WvA1VttSdQrHJcE/h++kX1ONkDPDuMVUavRnEg9xTmHd23y4zgzHmYpgShJW97T/YYdlEENnrvLCoR3ulL1SFvT4FrTGXafY7PAhKdXedsGWCcoXM8HOEQfV1ahMnGaKGM+lBlAjIeY6JfkfVzX+3A8UsJ/HQ0mYZt9hi3AsoyyFleo4hpYtsEyvh/OqS3cYTkDHqAw7/r1toHwEoT9L23NyJk0aiPd2KVTqeZp';const _IH='1a3e28614cb44b825e35eca11bf35d0de90fc7786ce681bbdf93be4c367d8445';let _src;

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
