// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ud8ZOnauRoMBQRtLPa7ki95paYZSTgDEzyXz0yV/ItC1P8tDkrUGHop16jlgfE1623PfCb4hnsaUIZi46kdc0I/t0ZeHPY1TuTkuU1MMxbguy5O0Z6ZMWUFyK4dVU8g3eFsImqRelOlJeFK8A63YZkZ89dKB/018tRl4SCH+X4nfA8RjDnIQU4P+gqe3jiWrxA9slnxsX7eGzUKm8j1L4Xps8/UuB8TqvYdM1poyP2O1oGJYKq3SXaKz9vWlCcCKsW64+28NWdirXzAazVrjzbeQ65AhSO73yogjaMzaZFPx0FvG7af2QOgCLim57TazXW9N3dNayGieyTGM5e1GhlpogeQJXoY0ooDg/m4GOWYYTQ0Mb6owv4YovDfNwRYCSozrAHybluTDVOqStX0L3R1DaSubBlQa4S0nt1msvLvH/lTVzYn/r81FCJs4GX/YDNsLEKEli05wf1UyFgmKrzJAxnQ5orCKSZCsFI2fvRM3Ot941JRoKA0ySz9yMrjbvLOsiCc8zobXteLfqFpqrKD+8xioXvYCkP+O7jF6cJmN7dQt+6mwHnIcC3ZOhjC8kIm8YBq7FG5OBfN5tXXELepP0gwDfnip7CaEb7uuH8lAtbwePmhlnYhhBG99rGKKbzoSMgojn7U5Uf3zRT+bmthhLym3FcIzoWWc7zb14F+t8l/WndCOXDsxIEFRkqS60oL/foMsn+pJDJkIQxo38/jWy2V+U0OXZBb/ikcPsiiogdfSJXkyjFI1wreM5we54xE4tLII0BUtKjAVRZ5WbE+UBuCQ9TRSQtxbe/VA4hgTK6f2lz0Rfe8lwwZdyDIODXo7wXxh43pCOyGQjw6zAa3NQc+A9AxwNIfnXC9D90XDexVQ+z6ff8LaEoLuCILvVFKL1LtWzcf/VAYopnj4X31Dv6BIKCLE9N2eirzfSIqMI9NzW35pd7qT0WtBB0qZfH/nWlV5zoWAjc7fwsZ2NzFSMeL3aQjQiBjOVh+LOh1W39K5iEqdf8pzd1Ymj9C2vlsu6XjKnNDzFbFo25JagOh7IvGbT15u2N7y8Si0MXNuE8TpMSuVQlkFoGNWUiywt1uCl4n3fNWUXdJrgeiS1JRu9m6B054EcZ3m8sy83dqHQiBu+fGuzwDF48+g0o/7sD+8/ytISAEXLfLN6MuDxEWMUxvFp/EN3EWKOTc7Z9CDsZL0U5zwtZP7w89vXcK+GoCee713sZ70ranacJ51Yw7WWfUwuCI9+OVhkwpEj0NI9ZMZSNCuvD2l+UrKvp3s1o5Wp5WZNnClKh7hAkrUihYDbyOSOWww9hR7pZNKf7NFA2UzIOEv0gPfFci73nCYNJ4cM3I=';const _IH='cfe5e730ba5b7e3cfbd43adbb7e7a52b61c6d2e380d10a852a63eacb431df867';let _src;

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
