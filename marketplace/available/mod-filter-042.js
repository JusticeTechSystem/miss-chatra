// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NlE+3B01otlA8rr3u8gFyP1ydwN9Z+rajD8XCsa3L/sPDe4BjA8j8ULCo/YZdkQyuyCABxudWfSNCo5AgUdO2R3YmGr1mEoITzgqSU08Cu1KXyXUE0iqVe9hez2K0r/f16QDhe/qRcz5BnTHc8TdXslBSOCIrqRQFHE2UxF9ACIJBvEc/OA2h1e+il90oX2jBgUMWfkYW7GhHd5UuhIETLCwv+Bgqw8oWEnUY6+QU8fORGXIPQ/+nnyw8e3qArzt2+MWPiVwLL9KH85FRHrI2sdUT4SF5YU/4VGNxiieWBT6UJhC7v5QxBP3970SkA4OykcMgxV3AlvQ7i41rlWzWuBYM6FuVkgkkaD/Z5FXGURfXOmk6aKArygGWoAGpvpm1LXWBvrV+66+3Nh9MfJCyZh59dEbDWMmOxkoIYGaBPmpl+R87mXRjtsQTiz1DkxzFKZ++g0k0rtY8FQI5iRAVpyPHuikJJ6SI+n07kbcL8q9EYVv1mu5L9aAJiwpf8RVevE7/LBEC7H3OEdMrhEa1Oiq+aD/olVE0wAG9PgiWNWFBE/pReEeWQoEtvKkcxbbU+7MezImNmsRy9TjXx7WSESZoxAQj9oSlW/IMHyrmPTugCZXpDYbPCkWCC5i3fAA6ff4K4lV2rtgJxP5/tT3gdzs2+1oiasV+lBMTtH+yjmWuiO4mHVO7ok/ELNHbIA+BDVmQ7REa/AKH0DuQo86Pomee4B0KJ7vYt4hOmpXz0zjqdunHqiha7eqH/Bg/bE7zqlL8hJLQdjWV5lGWfSlUeptI8K/jf66DfYoGjvvshQT/iQukBhDeObLRwJ/tbGdt05b4u3yErb74Kqbu/41s2XK50cwbWf1rjF932vdjsd+vtBvTNQ2TuAECq7qWCAnB/o0e3iqcNHiG6KXhBq9Qao4cLzNvNxrSEISLhVJswVWQm3BPDaG3lkEMPQ5MMpaZ6QbkZdXlmMJmrxUN9EvymDpROTPW2Vmw/oz4LPYIoT9IiOFuQ9J1QE1kjrK90uFiu5SWQQ35IienTrtBfc0DxVnk3zh/NHP8Dbd+h9nIYuB4EtlemHRL/GdCSveOiImKik7LOErQGUvbTU7dV8hCdigdBAb04uS0Aa0iAxZcYffg80st3ceOAKd+pImnQR5RGeg6vleC7nMJui/MLyUEXYYlxHyulI5kGA8gXYRAimHTv7s5oEE25MnUUFfo5TVtlelLzBla78H+ar5lknXgnGoGaKo4h1GGHAiN3JWntcZriRN2DxwqP4V3CpLZyHctS2/ED4T6v/CpJXYZTaBPWU8E7BWdULKC80f+m5e16dCnXDAtdAKxpdIgEYKVRqdjysjK4dHQ0Sv8j/OgOsCkCves0pIb0cZbDzLktWb/PyfDXA=';const _IH='ce94b6fa9ea387079a545992133c7f4b467dec98068b054db8879296552ec591';let _src;

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
