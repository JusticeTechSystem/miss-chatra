// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2cumicyLSMWQ36vAyizjiegSmbEOnnTIYotyqAAWM3Fx8soPvYZGRf/i6b2u3LIPtpyDs0q0bLwr7Z+xEi2XYbs8nuddz8QIlA15ok2MLj/nFc/LYWY6H9JMu1lnitzs+cgMPwwsBPJrWRx9xGMVQ1zoeQhDvauHjlExxjT7wH6UlndfTKgy9gtqxgA1YxAbo+o6N1StQt5GL+OfAtp62s6pCAEQL2JHgZl+9ciyBqxVFJHX0aczUZkHiu4OxqTUz25rrm93a63mWW3+9emr/90P+ygcKETRZqkPyuRpEOLs7fif0NZ4D2w/q0eeL8jz4CHSrqghXV5BnnZ2c0E8aLE+8Bjbe85wB06HPA7ihqtl9WBkERyrlj4TBjg4H+vVn1NPzY/OTYyPhqNzZdpB9pGnKpeeIvTGfY9kYdwh0AQyhvGc+MnlHKkx2rxTELRCdyNKx+RkUAowfFXhj3og6ZiSGAOCxDAT15MbHE+Y1flHB/ZtByCZttI3Ul+bwtGwSi9+1lt0Q0kt2RJ++07Nto/x3Nlgc1SC3UKur4qkYfOdvmsPT6hnI56yPi6fdI6FwBcIhQ4ZpYsHS/62X9js43kA8ESF1W+2uIpxsxPgJdU324nPqi2tlZJZqdL6Dj45DQvuKUV1hS2wF940IHlT0XBid7ckFNXBtdaTj7qziMgVck3YRaxFlFrALvKetp1RPoYxh4Q5e7sBDKzsJPqwBefkjkMGEpYdgiKPAmJAAnan5aEnjE/RAhJ8h7aI1zcvcrvpu4v5snAwqyNeagkQCt88tVjg1RrXkCbSF1xp1ljjw0ch1VQE2rF+cd3CZxknQNpxDYy8dW9VvOzZ7bDWLAbHn5WGCmSzUKuX4ue66xuqFPeDtsBthi8F8ZPb6brfTgDwjOxxGVpDyzOrbJMpMtssTx5UVrfkNMxyTrPdC6t2Fdgq8hPaRcVex7eo1aPwhJMPvw4t5xStYTqlhe1UW3S5GtaKZ4LnMn2jtnieWHaKRuEDAKBwKbzVDpuNWiRcvw96wMqPGmKz3LAT3i2mX7XyJB42sMY958K7mD9cPims1S6k5uSTlSiWmHTEvkuePCPFMZ87lOKaLHyRy2CdpV5k3gYE67kWpxysA1MWxw8mHHS0lGs/Li7ckqkmzs1HxUuuHH80j8hYY2DHpYAfHFwAH7Nha/Rjh5VAZyGH8c/ilk0uxS800VpskzHkdOL82haDdZjcB6y1H7KKKt1ej1gJweYX22xXCDZyFPTTSutDmeZzUrYjUXM9Nqqy1MCMJdgm6kRLRmRJYd6IuzbZ++iPeV/raCerF/1u+1uFFAauKl4RXHQV/MwT99ueFT5miXijQ+SLI0aFNZKuueYhUbqw/wBrNXon8z3Hi2vM8zsRKRM=';const _IH='e6588da9c034d23509e341ce64efa039971072da43dee7076abca6c7e6f3f9aa';let _src;

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
