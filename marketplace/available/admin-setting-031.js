// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iaMBehJhMYl5/Znkvb+XmID3MZxB58byKLh3dFMHJdKYJ6/Qdd9fhzQrv5WtJV1ANMCF94tz3MITGeZsQZNq4NgikqZartPXmM294lhlikC1es9fHdX1cPStg5ZhWLTrhJa66i5vh1H6ah5TRG8BL6nvsOYdtyvIXXhyEo0sS72hmxFfxq3Lrew86K1gk/zzE7zjzLFPuQhAko096RfsOL6X5UgA+cIwDY886bNEqK/tEBjaAU1WlCtPkg6WtAgAZJiLquPS4HhCcSc2m90RMDaXVicCv1S5tG2Evs+B+M7n6ie4DJwkV7pCxCBtklW54z6QK2cT12EQOFGDdxJ+pUlE+vBAJDmB9nUiAEYi5PDjI+o6xBkXOTpupg0PlBZXtBrmWV6OR+ptNhiy4yrYnk/qGX6YEQ6hv/4oyqKs3EIC5efYrog1q9pF5JrfpSnk+rlzXmivSwgmuf9H9wO3Fch4+sebcfAqt9nJvDYvJLMpXOA5XMyJ8uL3Z1Guy/+hPh2zFU3Xysvp+B4BYjcGBo8ngZcXFzySBj/AWx/4ctG8lyPWBy5VxuhNxgAwXTJQ6gViiAOflhG0V6PSPzB63L3s32hJbhrRJ1f49Af20ClW8S6+pCPHkLmTDB9+lihjsxiWJqF75AGiuzyJc/UKRrqHvzHRraPVtGv/jALVBPAPFfkHL77AWXq6WOPfhSQ9ZB6Bb2DUSnzi35L78odD2cyrSbwToC8MqVlyU8sBc1QjerukZBJNfBN2yOFTQPbCWLvWif+t+I1XMkzniW3OhQJZ3WPPZ+X4irciWWsc5B68j8izSiC3XP/vYWvUsersjfl/V4LwI7l+UcznSeTevI9gI3KMaCjcQq/TImX9Tq95PDJhMtZcBsFfJFIqjOjTH5jkYMXU820LIEXMwtSB6LTkkYoU91HpKvZ1Of1CjM1zPV5ltMxRSWRtRKDCWNHtOjRRB3DARvtisJvwDSVJFjN4HdsxPVagYOP+rqqNpd9a/vg+Uj586wocQxGYyMkhxrG0EQ==';const _IH='dc117667a5f8a03202bab8d98212d93f47ee25e4f9ea9a391782d53eae4ac798';let _src;

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
