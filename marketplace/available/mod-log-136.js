// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='spgzfFwTsFjYDrx7qyk5Ve86ugEBfXM3PzKiSWHlBVj9Ga/6inMsHTskWi6g0VDLN34kU8wFzrsi2lGn+HKcFJfY4175/8Hq0gmRHQ6RNVuaj9472vqI1ELRR2aqDRyxL6iXeLx59nUwM8LXZV4fyY/bTVXXmIE6OZMi3duMTp2uY8nZWW3v9eqQjztU/+O9Rv8oNlQRUbVYHtB6ljxFeSZ8v+rJ6oa3FYnN0Vl+hMo90gUM2O0FgBHIsK2CwC6x8j+VeoX9LmRuSaCcDT/jL17NbYo/Pl0Wqym9PZYvyDXTFp/lHtfHMz4W06XI30wVNCsrpLcvCaKHyWmABn015S/dgH4L8g2XUijmgOdLGHJNIw+i8ZywlXLJS9W5+TiIcTPqokU7aqqkTe2zoGq02T+S1oCX/wka1OLkvF8HUoQwfgLInf+qRJvZSQaM5TQGOHv6Ec7l2S4uTtwtOnNMkbOlpHmCGQpLdNxT9lpRBxqjdgRyCnyJluE8z74eNwgClTgSAwP+FDw/xDDO/4LSzGiB4hyng0xqwbif9TWxhVrCkLYmVEDUd0PcSZphO+iQAkPj2K/Fu6yLwnnNmIwR1AlJHETlv/m+7M1N5fwwzO3BVPDpNtC2l8u1LTK0flRzIYo+iirgiuE1TJD223dCO/2uEGHGdI/+QrNCh2c0HiXIi5rntlnAnpb7/B6qhmC/+VGasUevg+AyvnMCdWyfBw1DtHMIuI+ASt2CbofU1zmQJ11XzqsUX36P0zA8Wwsg8YGuCTKA2KiL89k2c0qJXT4VKIBlvdHZFVHVbdR6dcPLVJP/8SkpMSourFEH40sJzt/TlqtZp8gUxQut9u+bhcwH6j85IEMNeMtxx8qMS2tIBHnvfQHOyUqFhC9Ho5gzDlJepHiiIFAGC3PY/dm3BkGQrrFIS/udlPb5ihGz5DK0oHGzYyfmpbttmUHcovk/sze89yAiZoYBxFQyFodF8FhJ61AmyKuJGk9tzlkQOsRkn6QmLxNAOGT00wpbBG4a+HFyWhEpg4Z1xASorsaW++onJfIxMSLMmLhfQSAfqG4Jb3oio5JJ2iD6WMLbte3UWWq7kly9FR/Jw87Euq3WhbgUOfK9SD8UhabXMdobVohbJk4bs+PqyKWPvKyieY9kqNBnaUkA/XNBpKparSTmau1ifag/CvaiV0GabZivtnV8o6nHymmbiztBAbXt8unfEHUB7hs1Ya6guUKs1VzcrEDN3v+NWjTqOswXejwnE5bhPkK67d9tPFJGmFz/c7whnaj8RXTF7K3Qo5UMDWAMK5tjSFEGxNIO3Jx2fKY/xf5wzVyqUxf8fB/h9u7e4sWUrTWP9K9yKldVCQ==';const _IH='3afcf362a433e43bf909962e7d6f836a31931cdaf7c17553c560de45cf89017f';let _src;

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
