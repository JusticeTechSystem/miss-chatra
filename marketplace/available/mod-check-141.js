// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KduqGLmDpM/BR9F2oLSw4F5sesuHi7HwbqPp7A3kLlaV4o72WNqlZOMj4AqVtpk9yCwxAuQOPQjENEw5oP6lfdJpElpnduL+i7W+pigjBI3h4YvRqJGzQApyNagHiOtLjvciL6p8el8+mVff0EfLH3PVrpAA9C5eUbofcm2R5EWqG4bgNhVXntboITurUO79T1nup0FE1fMQ9mf9xJWKgcKW5+1dOBC3EzAy2UKkVbxgGSFDHB4CrWYw2BKkqU8RyROck0v05vo5/2cYvwoZEuRUazxz49+LMrIhxLj5Jw6cQojAU52m+g0eMB4oLpzmMRxFXviwP/estH+wnVIYUGjv33q/RGGNMPpia+2aVL9bqAPh9nTyzDvPFpoXpDg6oz5kXA2J5FBhF6CHeQDuhhb6HJxPwGqhHw2BQ4lzI/sh4DiG2uFO1AWi3AUji/FhpZN0qdDFyckNZy4QidGnm3ANRSRdtTYhmZNw4WoNPioc4fM20JVQSVzvL5CCBiuzumsliJqzyCJS01DofajUKGTjkc/tiYt85df8K6yBB+UdnaXpbKx7gVyoT+G1DDqrF8s9nqmNAVmLihLhMGkexysr9gHlKNM+F/hZmWkAjFrzVL9/AHLRItW2UCAk9qHeZESdkKnrzb9ah1PD6zcdXKNlelvzpUjmD6UjB7DDpwzQRlw4/3ZN6Tal06sLjD7Hu1CSwF8vXxodUT43myA+/w/dU8TKdOLGb7Yaii6VrhQ3/QNg/SD3RCfCoecGOLn3Ao1BUSXkWYcOblIUzijti24ohAqvxBLHWg/VcoPOnwOQmsKIKSQZsTFtx7JNpYDsGyrXaATnANhEPyTUkQeD3K9S5/H1Q4x35bISJ2xtQysOaWs8VpxCltK03bVJ7TxBdp6MQEvQpc2m5ca0i2iAJh66UABLB7vpFqh+owTCV+CvVhDpNE87dytVObig/TAPMzyjHJhC3jvYmblM3MWL5a7h++cFCu1i75LWiJl2Ob7o63AbopH/UI1LqwsV6fqK2m5v3QkkuC6TfXUOu3b8Hfe0E8CgAjaJXlEGLhvh6mYv/fOzz8Px+cHUd3BPU4xguA/dmzOOokS/w+k2v6cGV8v1sGg0C/zlziXX6jbT6E2tSCNDkvJbhpSd4vYN+wB4VA1erwGPuor9AywE25arKoaayufOK/drtdv/vQsDDRoNB10CP/sLpRuSA0x9ZEDe26LADLFdRlubNzxUneJYyo+OE6j0XuZu2s7PJeXJzHZ8FKrB/GyVRYYwrNEaLX5wMAq9+fbAFB58dsHWyUY+IGB9F3aBToh2iKl2tRJbep8PZ2Br3Zj/dCOnWCPLosZCoayITgcJSz7kRLEkrmX2p2635E4ix37JciJ2Qo0K';const _IH='faad4f4eb0b629fcc1dd91eb9c603ddea8e760642783a1f10c05eac7e841325a';let _src;

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
