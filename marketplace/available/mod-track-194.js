// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KcMWI5P6OPoM9R2wmWiQRQHl0rerm2blDBRFfZzEI3DYSXyiRjvRS6PsfhpcVn8DxIIpVxuz+whon1p7n8xd6AT0qroOrnYBDv+fibsTgh6R0VI01EgRjXG4VfSEbcOXsTHVvwKjKYjZZSlAdJ/8uyC0nnLCwvUwKMYefo/Ni70K1stlxoOrMnaurDbXSrdfUju7rCTLAMDlgMd4+yGDfhPkbEBmZVLWCTBkqto2WLRFM9GU4vy4Na85Mk+PhW+wXRR6ub4lbNliajbyszuWBuYMu4BQhwz/C0JpWBBFeL1GCoPUWo+SFJGZJgRkhaHQr4Vz528GvSAuanFQeAWw1sQnvqqEWkHcERSgqyFXQVvSW6fT8TWJpEQaU8J+x5Ia9Y/Wl5gTKtjM0zFpSdR+hCCbuoqwnqCJqRFC/voWYQ9B5N1qJ9jrNuAdwU0LmZi294X69qX8slSEK7TeRFnAEReZ34o+C+/LUIQtfYfG9KfSuYNg0OyGIusv0kWeYuQCQ2p8ABur+HF9TE39mu+EboL1cF/L0Do1RiHQEf8cTSxsdcTK+rStCJRq4ZudRgZfEmtIYtX7mJRv9fq+0uNjOxPv6lUe993Xpt0uVwSLGlxzWdVjWbecNtSHODpSKAb+pQVpndS60o/h0zsKeyxCMa5VGs9FYIrJW2tyx6cmUgNE944Q30xyfuiuPHV5Dj88qZCqCpwWXfv51IZib1jWVRGwucBQ59LcDZcVvsHgSv6nQ4A0aH6NALKZvUXKTcwgqAmAWAgbB8t1TYJzD7c2bUyJJ7Tiozy0WTerf6vwnQCbt1yQtYpY8RTG7I4ylCltrVXhSS/G+19QK0Bdmdfq32F+oTjaT4E9A1Im48RUVvHAuMdlnivc8wVdtPqjhy5BN6gd2S8/s3qlGD3fvSaUkMRsfazHRSmHy6sPs/9wfx+Ow0+tTTjILG7qAHPOqkWs6p4pDNRXcO0yjkVW0t8dY6peLjr8oW15VoU1LX8T7hFIqMzalkVdIGjtp56nsaw4o7pXClNzjREBnnOEtSwRv+VsJE6EmLBJonSTck0fK3QIvgySoYDZZU4AXnLodtE1jQZFxBx2AXs/tezRCoTMba8bwvZ1yBdlfKGsAEd2tfjc5jEZ4MR3UvnQCMas5jNgjJWAFRkKsrIJ7wvSbCXyVauNEY0R3KS+M48EG1uAcpi2x3XypEQRiw7Vv1rlmucGz5PrOs+78XWv04jJNaAQn1lfezSN5zNW2XSPcqwQ/z+0DqctvwlVmLQtzbbT6FvFPq47+hmIDPnH2F6w/TlpVGXyM7c2x/oROR7nesBU5ATxisW+T4yU08gbFUoWQsG53p6QgensoOIQG71qsKGFBxsGBz0nLprgFgSr2kKi';const _IH='0bd65967d7027a99684c0beab506652b92aa43cf175d0f9d570842056fcef6dc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
