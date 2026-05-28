// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w26JXAISdbCBybkquT1uXjCLjbnJ+On0Rt5Ck0SAodYbLRHnNJw1BPwmbIxGmY2tC5qK1VIzv3IuHIrogqJhHP6C+xLF4tplJCzQKYSc2ugX96KMRsOH3ISj4AucB/vdjmcy29Sg7h/2zi391OFCVSMYIzxLt1KaiGP6ni3vFIjrllqlCBwrWTuqrRV77FqM83sFR3YgwmZfhQ7nvDU1/jRoVHfQQcN4Kx09udPtj9wiGUqFZnKGhKNo1CSCymZCQmMk6vQrsCaoQDBPDrCEa2DjUk6Vy9q2N6evGlN4lcmDc7F0ZK6Xq3ABDneVgx05TeFzXLdhGXBprrczSPNWFxi3GUaY40wtOYXZAFuy/93d00X0VJLEbnVngHHQP+2dUr5ZSNbJ2mEeDr7FPHDR69cDvrTC7Y5HshDW6x/2VZ4uVEHqgXMqTiRy8LAsSQ3VZmkBv85r3FBsflko6eobgqEIVHEcdz/Z0xzFi53Gg5lOyMVyI7/1znuijSXQKIpZuw75DQoqqEkHWUWFNBnAN/TZsBUBc7U9uJrki/rradKhvV65uTtyhb5ts+PdRYwnBx+Aj0MjiX5apOwsEqxEzGEcj72lN7hJiIkYzqleHEgPhX4tWLWNLsl22h0S4Tn/Va3xJ34+fsM4pFmDJTre0YSvAbsDtY1SFlh3rzAPzPuSRmyzsbqieSnhci71KaEMI/ozR/H2zJD2U4u/1KiXnSFvGwVlDz4+dAkS7YJl+IgnbFRyTT5yUy29UoI78je4lMtRItpP4ytUTh1IYwbf1LcYqjlj3w1g1UovXrrh7pxT92nEF5WLusCkR6jZ/S+qYQYPK1a/SP3OmmMmrwAs8Lt5ka0XxUf2DNLkx9wNIXWvJJbfCaj1TKsv7G1yU1TF14sr7JbfOpR2r74rw7ijp/TjOMZ08QwRqYrr5NFPZZbexCWvH+wYSYsbQbcQYURed1eu0wFLsU+Vae5s/5TdPVHxSZ+Ki25I4nraZMcrvM3PAaSTmlg=';const _IH='7bfc5f69c5fcd91f5e59311bd92f4c1275c2311e9899b8072a43b0373e2fdeb2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
