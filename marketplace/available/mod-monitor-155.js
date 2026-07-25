// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuusjGtoICrXooHd7W+O850nSaVhB4voR+vthuKFBTYjRArUpE+0GTXswDbv65avynVWzfRoKw26mLDQ+IT5YHCDl5R4hovp9PmQtvhHrWpmiT90g6B2NMCI9h08krsHeG0d8JsBaO8+ZCwk/1K1ymZFtAzeTW1RpY5RdBHTXxYj+Hm1QKt9y1WMiFC9k1ca0pfkR9V1hQuVgiF/k1/T0roU0ulLKIIAuP+0TfmArUL0NtNU0MeQj/x9X4P0d+xp/Z8FVHRCrUsgETMvY0yOms4dH8CSyTUsbUUXM2fsLjVwbw16lXB7o5ATHYg77UKXduOZ7nXUG0KxcHFY8zRlEKWOeu93Y3NuYRG1rnG+hA48Tw9uPvPAkx2hjX12x0ZjuihpNL3Z8GZztYAIgOAIZcQwt9C9GBNVhhjGMohWtglh1VvfWOKD9WiicGPIDmSTldkYlPFphiKh9OXWur552Wt6r1f5TRmihEh4GQ8oFEJll/Wn/Rq3/2qPseKrFByCeW6IBIuwTTjaDTE9s8S39qMuw9xR4NO0N86CceHM2BpUaJYCpYY5Yh2auotRjB/nQd8ZfBIl4LFhntK8AAI9Xtw76Kx6g7mH9Es2Gk3J5vV3IpcTWNS1PGQ5e68addss5brIBw17GR8UxRm0e9reePJb96JukZMroC9w8t99sIWmDMuFNFYwkoWYgUdGZFAqIqZPr76TfUZT3JHIzGKoTtnK56zskkcSMwgHlMqOuJylB1/cDnGDR/2Z8czIRXEUEHofv9th2/9wgOtutfr5SlH8z/zmGIFCZjfcYVLGtBWnr2M3cJBgqDL2Wwpd/8nDkC6XOYfz2IHwo8sjeP3rEzDuV9sBipkBjZw34NFDd8wGeDLrZcsQy13SNBxyyneRT2j8s43bg+xkQsHE+4DqYQDdRzrkORSToCDzchd2dqDChWiYm8FDF3YZ1XTUMET6GC2zdWcFDTEXZJ0rBOw5gLBN4XHOgmVzA4S8n6/VORhfec18rhdEgwkSFAtFRIZSsS+XEpZChZKMsOtDdkJBX6qxpWRShmYCJYrlvAUGJy+uZXXVBRvJbiEn9Bk68zFq1+W25vQZHAGKLFZ3ID1CDGl5mDMimBJozR983Si9fLPLuinNF4KJNtlyI9ABEZ8NPEfNNH4E5CqKa+kix0t2nOYQxEApuBYsjDS8ATvuLam3u/q/uobd7mWwXioIE12gjYd/o0EEMRlgzyYBMq5+sIH2z9jZsq00AuybZhwpwm3vSTksaLygDoN/UNO/OxYqA9+b+bcuNlU/TlekMx9qUZBWTfuegU4BhqGb4bVlwEGKwcTfHZUs3Vj/ccnd8WMbyCIZyflV9LRKshePzcMp1wVzT+w98g8fYXZjvIYmx1Db5IHRTxg8kZsrpHiYyYz464lg==';const _IH='0ad53ff3da25b6cfd27a87e0a8a2ca8e1da3ded962d5b745af175e1a4a2de847';let _src;

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
