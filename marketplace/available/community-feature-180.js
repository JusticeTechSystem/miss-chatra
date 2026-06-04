// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rPrp3g3JbzlN2XcjGzOVf+V/hF49O/Kp3hlb9FKKSzGzSLXvizsc4NtNKoczamVSACVyuNDzkGsRVSDqcWQnW6dZ07ixgN54FcByeUxNpZEadsr2iXgrl1CuuujFTH9gp2KIwoVCFsx3UpE2Pr9mcR4FTToXqsOkp2GNKfyMfIIFFekdlggqwEnhnV42L3hRBm3zvgd73yRY75RXwqZC5cEyVoUrJ+bXG/V+EUV4ItPHKtH/RFK1MusbWvqY2wlwBi8/q+7A0+CW/vcxejQD6QLmBH5AJvE9+kMXvDsKyrp4hXXn80T3FkK1Rh1FXA1DmFpgkyyz7aJ5nK9Vt6efbVuktG1BqZhIv55e4lvsh3gM7RTzaZiNACxbG22mNevR5EIOexC6BjbYqxhTGf0pfdjj33It+KeEYmNoM76sX+D6VEoe6Hib9DtduH0KrfZ2+rB4P+OxLc99366D4Ul4vqjAO39+IqPB4e2UJiC3FdPzT0lNEFQ7s4iGasaqz26+GZRoyf3TEG9ubF76eBXcCL9bMzWR6sSbk1UWr57ZxA2qEyAmcHmKfs4ysvUr8ElYykbJ0/ObcwwSYUiJ7KSGyJiKrcCFgKLyFA9e5saQ5epKzHSkRjeq/EQZQgjaH+RZKrXfydKUY6FsIo2pLH50P4borQhLQvhU2ZAXbvgDTPPVDDCZ4hyJl4DRhR/ly1va8JHRmscSIOdCUJAWykYoFbWCSc1fu35iiEfYdaot0swPJeGAfkV27MC/';const _IH='534979e100a4a5d51cf546ec16a6714d0f095bd581b493e3a31a89079b44dd0f';let _src;

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
