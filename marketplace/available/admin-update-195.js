// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VItsmZLAgi/yw0o8htwwH13gb9oOzGxFfwtvfb/IGIs5Di3ptGBCEgvbutBY3GzB751xT0AxN6x5wrqjhR2M/bkHMGiUI0prfS9g+yBzrdg1IuHk+CIFWLwAj+kdqfaCFfZK0SM3kx1yIW0HJ+h45G12jAAKyRVlwRF1nI2j/pGSyAdiZl6Eoomb/UJIcI0DaRUoz1SVPPqYtGQ/QkzJg5+h3VRp6gJ1RJvPXDWeHrUEEe/4Ax26VFddH3dhzwtgCEs9gpQo7z6oJutZNqzIl4BGZIPEN2ncRCdsGhYT7whqnd4kikq4TZc/sQL8ggsp+2FkoX7nL8d90xMnzTbdVoM/Wog/IZNtlfp0qnvEiPSz8skfsqJJb1d5eTqzrs1i9qXUvGiKRWpgr5ir2AbH2KJc5HPo9b9BGCWmiLx0Mss2R8+OS5MAMbxXhI2JrxMcuOoFqF3d6vQo1bTFXAyAPj9ItEGBmsQNc+DktyiLMyBLUTrMJcwLiFC9tgPw+zBrh/k/7frfrehMG+Im+3cZtqejJsNpzVcm6NjZ30Z4fdg8T141E7KMPxNG+HY0wtb2lUB54AU08ygqykxIxKwXS4lVDxfMnHjhmQ/e0kkOR6jFl3OteE+6wnT8vaqkCZY5fH0ifl98Wcl6FqEiX2TG5dEdms7sHebWQ6cw43StcF+BYr1x9hVJRH4iVpsqijvexTc3a8twpurt3S1mqeKrf6vyIcCzRDaxOWwrx5BfhBiCs7ddCxg9a/7x38+bQnMyw5Ucm/o2OWAkAfldJR2K5qHogWadk4PXZgLQTnvgXoRFbifFpaVl1rImTHqg9Zc4y4Vh/Tu41a0SwYn8dI3K7lJKIgfCO7Jr3YDTLwkLFHxqZOjyutI2/ud0NKb1cG5PKuf65oV+NZX46YYyWe602R3Rzkz3wCm87iBnukWQGfCaYr9NtPMrV5W0SjQRNIHoNlt1V6/Z3ZT5A3dGUEb9/jEASdQDAsoU3c7m+dZleQWgF6SFIx/1aFVaIS6ynO6bTg==';const _IH='cb93923b318f75c3ecdb0199adb280793bcf295d30f1caf33825a4650e6d06b0';let _src;

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
