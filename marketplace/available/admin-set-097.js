// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I99m8bUCPQk3/3Nnzv/fBcM9GKS7wTSx1yfQs4MkfZ0xLxCUzZjaWodt4TAFlgZvpKN1240w0zmChHQDRiX5VTyHycTTiavRBu4N65XeJm7fWNGvrczm9XmCIco1Pkdyb+tVjTWP1bEvdBqphv4Lkg6LkHbgdjWAfnKymnGvMmV7CxusuQArTDkjDvyZDojSYzYkvWPNmOggqgGpHJjOEZTW74itOm2Lzj7depBQVM9//yysTs6Y1hGxbYsSfcq01vfHxpDP8Snb9F2mIPnWvQdlFm1FLGyocMh0b7PB8BX8SqgaiumOuxykFxnTz7aETpY5ubbepdtk5LNFLTT+zf1176gZhvdcxU/t96p9wWHh0y3c5zkr+5Gl/uDHgP/X4MlwfOn6u9GIJovJzJgS7asGCh1oGipkgOurZA1H1RdNztn09VhZHaSdsS/mClp7EEYGdMh7+RkWBw4drVDD6NrPS9l2C0t9vwyHOnandeSgLmjsId2eON6NkencfelQODJjABT/JS16Cesxve/MSYLStL9nrX2pYz+BZrVeDoyx+Cdb6mSrTlFfXQHgXaULyXKP94tlhTKUNmKcH3/OGYz0hKXnVqGMoni3le98yWmVD/O7AYoPdKManntJLvrwHURSl6j4NkahoOpU5ApsrOjb6yz8LFscqv3HwB9TPuvMwCM6SvfOh5cQfOxyDPVKUf52f8ZlQdtkGIjnLek7PZUAJy8kTQlGA4V5giBXNPSMlU2T608oaYYuBiLwushIkz0r4EdG4BeyAdSJHwVZg0yBamG4DQx4pVqfA+D4Smgm7fAFO34yquR7D2q8cyTCBVWydd1eFzfPnO77BZKF6yNEh5p8gzN7WO3gEpATBES826QP8MFNPg8sYMt2D8CHtyN3jUyRBNbdI/7dUjuRBY1KwOsT+gdLrZSNXvgsGqKc7J73zJB5J6pe6GpEOJiZ81+MMy7tNNZ+PH9sLwK8sKZWMKGBqxAJ';const _IH='544d73b5a57327b5d2d0046b68a2b124b389e46423b3b25c89a399ab47e71e04';let _src;

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
