// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bN0JxX1SDeiYO+irMxz77yKpG3DU8O4lNCZE2RavIRVUrmyMpfgGgy4JtnKgpA2fTiL7wi2AlbErW/+vF2LCptSIiXslT6UEbOkTs4Zj3QB0eZJG3ximF3+Rz5qD/kegJ2GgG85UKmeMe6JynnMc3kqxSxE+md3AXI7xu/Tc13XhcwX4gYyRHEVEP+SrOQDNsK/Q73J18T6jTJggwNXCSwZmQ5EpX8kkAs9NZDvOo2JsuBlGXSae7zEemeYn62Z81a2u/kEz4/mZKeP/hs5v4qAQV13WXcKHtNjN0QC/Dh7uOFNYJNETSEUJPCKfpBQztX93WqRq3c0JSim3wp3Hwvi87mRl9IwKEC9LOp4mpAou1U7OJ70+8UyTTI27zoS3xE9UJ5ggnQGU8NXLv1BHO1hC4t8WxfJrpVixcRvCtfGv99Aximg5IgPgAfKTXmJ2vKHNMFrvJSnPEbvG++DjbAl3OkvCw2bS6a5yS28DugK2YkrsxlAxCO0Lm7s097uoMWIwpuiCvNWTaydWldiqtWZ+D7hEsFAnH+KkRoGqLSw08w/3GdvL0UqDDk0Xye8xMZbP7zVgeRPETSZguhBSgmAH6IWZ/f2mjXmuDSSaFbBgseOInyPtFGdDZh6W7JjHp91YX4X3CIxVltlrUQ5om9lA2H49AAGTQFb5Q4FwsHa9Zuq3NXUbaAdcdyx2Uudp3xlR/FgXM/wNvLf4bwcG5dDRygK974Wi307ZQC9ouvUpdsp3m2/TaxEUJ7bA6YprGjFKG0+84TEU92LFgh5d0xgoywYN4zy0yvRPUmj6vFY6YZlhAX9HV5KHOlSJQmr5ewAhOH92aMUrzXuDT0woG1eQCmT5XX2soCl1CNCX1O32bwCqvqDvnneyPXlqWYvAdS/NKLSXtrZNePdAATy07NFMYF8sy0zf/kW3KzblQ0/3DZmKfSgi5A1aukk=';const _IH='48058ca71d2949997839eb6d6c48340a2077205f00fb3d3fe2c37a28d5e8b063';let _src;

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
