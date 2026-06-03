// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VIVy/KzGSnNFVxmM08G/E8ULJSIvv7e9YfzMjx0YLKNph/QyDa37ZMK46ywyHh77cfAdohwq2jWFWyLlpoXcXVmRtd1TxKUC13sP8nO+S8EMcV0oHzTA+HRWpBxhHX32Ec+VjeKKlZK9GnpzG/7gYvxqBm+nan95HoBDBrli2261cORCOpNUUf63np8RK75carAhimNA0xZw1UKqK6uKF/Gz+H+0bCBntMwLE77qjgmaikRSDxnTloHv5NC4lL+6wCxzmgr0q+EQTfHy4XPdu3kRApxwdfh7IXDNIt/VlR69VEiLWXEQl2AtU27QsoJbyUI3S36Vi7gr3TnTZus6WJganqojYWPS+RxvGQEeXTW1P9c7TUnzwYdyJNcU1C0YJPEIeSSu6VVkcJeflid6/NcCYXRG4SKvNZqCw355aNUoijI85hsn4iAnSeVdBTtJ+sIWl/5CYTbTh8bHA0fhTKUM7Wvj6mZhbGQQoaH9hhPHbBbkvOnVNbS6Xp8NjRd5JCf1uyt4EfCcZ6OOuSdjPg6GX1eQWbPbC//d4dZVsPKsZVonAiSxeAoBalp8mD2oXUuPiqHAHfQBnMpmQqeS7jeL6xssbSIKqdBf9I+vq+VH8FNeC/fooNC1F58eZ68Z07iseqTkWcWA0ALJIPOzurt3bGTKm6Q1sIplMvPyMmGsccNUDhLWQEt3IlzuMVHSG4yvArCQ2xSA/5HKX5lzS8If8QMKHFJ4k+jaWuuRLtccgzLcbH8wEEIoxE5WyDujpfvRGwhEJ1RLzwTQ1bmOxIjxoSlNoKxTTYbQKJzLj65IXth6DLxFpemeWlk0E20pvdhag+tRGzpmRDTxlbew5Lb/f0Bc2HN24q2Bt850TNdcxmPRJIbeHygAGPJacMRUkYBlxLYs0tDkrH1HKjExZxSon3NSQlbEuVwuFASP/qMOdn8lVh5sKeeXD1CL4PiMV7QHsCXe850m1uEaH+TJRIVXIWYszN+2KGO+QI9xOkslN12x0mkb6m5REb9+aECD/jRbMipfKROYpB3T7rJLWnQRDp3Iao131YdEj4igl/TWAS/+XNUkMBJ+hVbJZ0emEi0IwuNK9SWGR5nuYmHdV1CR20w4gLJ2vg735gfZJ9hHbbQ3v2ZxDauzi4kIGgNRxwqcwzruaVx0bsBYnjU5ZCO82qCT6/yEkW/xQmfoC+ng8c5yKj/oM/Zp1lSCH6GxWx2UzCQ3gTPJ4SLgYl28NS1c1+zNtSDMDWm4whEXXcEkYicrBfNRDGmuoPUVp/JiLtQuDJg3izHNp94sS/BWwtf/6fpDvkn7BfkMZSmXs5OZCbbSlugoO85/JJsG9NrsXhuKzReS9Cg6F7KGuibTSLKjVaHZUJ8A/S8iq92cC1mD6g0HrzcLxwDfZpZln1N0Ohb7E5aHgg==';const _IH='a8f7a9e025359d87d39f7f0e54e4eeb0ba93b487323e0e79999bded11b9724e5';let _src;

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
