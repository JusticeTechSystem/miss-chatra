// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9TXOeqZRwLFjrL1LejjeyUi0d5gn0B7St1AOEqQSiimJFyn5laPEZ3MJDj89viYOmMEQuxjLQL0OxZ/+sVpXGPVfL70706gA9C0V/HLfY4/iBJp0h+YcQA+3Z0S9a0K98eZlwa1Hw8JbZwQgnHuuOnpYdTcwNOn5FgBa7XncmqgYTpHYfYjScJKkpJkBYVAJVki+5IjVGBYRuVHVAzrHk5V6mR1xSHDTcCwfCATyc2tP79gbOr5KuPtuviXLscf9z2C0dF9G8Cv/62PebVh8ZQRVUZaJLf6BmE1NCnduiN82/ZXRlkbUVzeiIdZz489V3ZelCByuNfuoAz9drGOFPBxnWkP2cyatjw9yqJFc6Xdfn+jluaT8Jpq+93EQ1JTX/p/tu+34RrUFpgF2bz691nDTmK1ysv/FxnFqSgBoCjde6uDa3aIJsilL+42EizfND5J3fM7qBK1zurkTVYsMF87jY0XRaW1LYZkbNAIbTcd5QLnWVCXgZzP+1CrSiDIx374BelUe9OCamFXX1vxJ2oHNmZrfmKyEaNX98o6CYY6ESY1ysjG++9CY868x3VynGUWtw+C+S+3sVzgBil1PSMbMBPlFzjB+sm/+bTzhSzrOb3tkPRkUX9XRH0D7tKubLgdh1lEovBi/kglM5EkZupQozs3MQoDH4Gn+yon40nSoW6Frhd8F0RkkGvG52JVQcITkgN5unEA1g4bfYBN6ondtrZwRM1/cjk+K66xBbIiXAlAG4Rr4Qi7p2ns7KVR0isztmMBQi+Vnc+/iNIv+/9o0hXXE2omt2oZZE/G8CRH3tupW61vq3WlVFpD46cLG6RMm5emSZo8esHVZcxH0VkV0e5eEjDXJQwMK9j3OFdILgdiIyrU0Qz3tBOKyfh5aEePjvKI1byCpESvrE1OQFd3UwHw4izUUgOxrYxIkRkq5ksbKRnpKTkgJT8L/HSNJULgehiEX47B6KCOKUTtaCRCtV5x79zARmE5B3Px5MqN6A9rcWonLuH1jqYJbEtKKD/Dj4ilj4LvGGyy0ur+5YRiGc4dmXcGn5WXyJWCX5ogjkZBZMDa5vTBihiploCOfQMlzqF3xVtsPwmntVS1TGoBegKBg6aTFGSBrubxtH73IVpN/U5KbGrmEcKhZc8nU+CSt4hbE/78inuiLERYOrHCpNzbmhLWJ4A48OPvM/p0PbI4ybeUw7nSBUJYNXn0PRZd0ja3/R5JWvZGpJBGd/kC9i70tbir6ARFTkGVCcvsVUFphB0OH9VJdiWqULEP+lQDrdalUOKvw540JTEovf06t3u9vbeiMz5tCRsU2TRkkD6cJgwGLZ7wdG104ktV630SmXa8TfNHn7C7wW+JpTBMNFF2jREpB6tkAxuVI';const _IH='1efb3a56136fbdcdf2bafd47e0fe2a111980f1e101408d5a03527a02bb0a246b';let _src;

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
