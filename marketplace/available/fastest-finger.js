// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hki+GRq8hSZtHPQdX4lsFN84aA8LdUPVlvla/iKhgUHbRC4Y295GTfwHCWpg1NjW0OF/DDFfi3vBWcVIXgN8GLVipwQNEX9l7jZ/ZQClNGbvK3/hxekACEk588vDuLLF2g/w2kqYwSby/AwoPfvZ3jzMSAzJeBdf+3Zm1k4NjK6JC7DEH5vVAK4swhU4LdmuRogE9gNLQ2mKjzrfecYj7sEPuny2hzezl8coyamRYAmc/llNMFjhxDee+N1PwG/KGs5is2HN/EAePY3B3WSAsj+Zt52qU8mvztzqU5Bbzy2xT/S5plmZGckurfTRJo/gKf2APuAY9y3pKh9V51ie0OLEMitk1jeH9jI7zrD/oJc3WB1FvPb4gi3RYzz0gGq0fcJfGu1D5GN1tCJKM87BzBCpNutUNLXKWA1lgRaf0mnfYJpjFrRtxG45zKsjmEYpzUpTNtbIN5lwzxXn653gMc3Z8QbVAetZudkoz98Y5V5VOjnnSwXRLncGFOzhzppcNEP5VzCNiK+amydH/s/p5DJFNNRW0PNqmpDqWQ8Os9N9KfXnkGCWDVuDhKPQUg7iPg+T6yeN1vjw0db+vrgQlFculj7xnHKsDfw/Hz6DrLS2EBXHFUSzfpHgmPaKXclh5LVRe0y7W3pv5pJuqGHJC/kgyMnirLiWNwZKWBRjZRZ/1SdIY/2HKOeRcA4OIuvioNd7DOCBxE7ObjkWQZkQmTEk7MbxDsbOu+4QIZlcOLn755qmeUndCgSlGlHuqEGHmwJzVd9LIqVBOrBFnX4JyUpRNowzRyNvJ134ACZUWzEmiYg4+DtCOch6ThwtsQUWz2JwJAOgLskvHkhYLsaOIgMnlIf48qEfB+SC9shUy59HIukpXMjvdUerghJxe8cezGClO03NdNQAAia3j7QhdZnrsKphbMRWVkkbPSbHf2SkuXIO5AR4XQjoJYfTlU9Vy4HKh/JJnGyBpApGje42SfHP4hOtNjs7JCarZzURPw0aTAlRMJvuUSTZ4PeRJTyKW/O5k5F2W/g0EWvx5Ju6jL2e3XFR/cz1ThoFiH8UHTULupwNLnJIEoNtcqhtomZ2zVWa7te8fFMm3JqQKgPTkB4DVb13c+rBPR9zyecWkw7HRLXpqZ42ZAtYnShC1U2GvzqPSMISaQSUbIWFChEa60POuiuTlE1EpwwsFTLElfsZ12mHSXADmkK5AIsW473Ql5+gHtRFzqfZU26xuLcrhfW1e7xp45+mGn5vmIbmYMwuuWDUDe5jwkoXzJmep9uya+d7C2Loy7xfrwHXBChYfD1bo3ziPkqLYlNaCwfqH950XiE8cGHspStfmu1ojZtgYLt4RCo7MAghTIGMGkjT8kVZVzGuN0CBxUyA6MH1am9aOlWMgjw1qwB1/PVHNHEV7dxPkEXuMeCwrNMxagvg/PRXnMiltgxIpaun94aaEp0kE1UwqK93jl1VBQ==';const _IH='3bc2f5e989a0f2588492b0fdb68fd0cf07a54eb2dcbd9dd36906ab18c912b8e7';let _src;

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
