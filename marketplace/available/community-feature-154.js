// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFMth5An3N4kef65CAR3jE4Ll7KpUg+S8/nKWBnvaNFw3wN97L3yWUT+QsSfyXc3nV6/wV+ckpBmUOn+Zres0Zzs337cfyIqfxMFKgeZS+lLzeNUAAaNcPfmUGePbfz3xmjRYG+bc2XQszg1Vefmqad2O3xkvxI/pw9RpcIoPQLWnSpn6tFeVq5r9vdQIuGt5+iidOOs4mANfXb7zeUzxTJ9IQ/e6RbNofHQZPHju7VfXKWOlrF93AKrIDpi9tMZN2r/QrZoLpUKCC6chDtw6KLJbAXDkuXPiUMf70AUs7U0j/nd3Z39I2m3ecNi1B4KwyVuBZFqmcqqmzf6nALWof3Mv4yoRACTQ/Tt+R7Mu36kt+0thRwI6D0cZ1Wx208fOmkmglCsjX8hsw7Xall7v7zUOwvRaYyF3EkpHj9Ekd6MbihjfWWmUNVXfOWOPrPn/wbnN7WG8T0wJRo8tPT8G//6Kdg39EZSzK4XFSQ0Vq/SZGYGMhoXjCuLAE7w3fczlNStTcEMOsDRbUsIj7mGSfI3GaGFPiMUplPdGw2v9JB0TteUkl5IBa7UcI0INeLkI7mmqNFdTrKoMArvMMR1RVUIBfZamJT6hZSYbp3FTxIjdJNqqJdoCuF/Q2OnaFxpvsc3Fyg8lHaPxMO5p5+b3IqTcxYt/nhOoCle68Hm62ZT/K4DsdVqjA1X/FAwjtlHbQCNGpEiPSfrlJRsGT6zqXQyPIAE9Hz7JNm57g/mEibVs1';const _IH='2ca77afb04dc78b993f42e785c808da6c1fb62cba55106d6df458e9627f7c905';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
