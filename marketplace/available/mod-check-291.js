// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSx8dGONg/gg5ycEvhrBKNwYBZfbp4c3DUX841yQbmYo/0mUfk4N5O1b8jaH2vI+H4vjN5jp+kRNvnU38szJsIz69nNwGyLvBZRoMbqWmlerlaIC/1Oty1BTanetqBvjy6FUJzsPmfaWr2S1biKJXV0f6nJlTC9mDvYMJ5RFW8rz5ifxo4aOEpHmlvZwmimFhFUca1Bk77gu39bpBsn6i87cpYEfnnk4SpF8eZoMai9uWe/llsqVeCITJ4HvKokOTGZlH6tGMMjBl/3YrSQuDOYqQm10k8OpSYNSEWz7U9/rHY2G0g21XqfSrKnGX+dulRJF+vCxBETi6pBofi5TnOfXmi+1Qxw1e/7ffBfNLURZyuDNAziELEjjmbi7lXIVZyKbHMCdwJacS4Nwdl6R0FG53EBvZXf7Zj7ocQuCyQaAcD2CJQxSZ8kzHL89S60fsZvIy5EA3GI8eM6YYkg4ez4ch0v/lapL6FAT/sEHElRzLTINQ0jX3ddKFH5ZbrjnmIwISEkBCjK338qpbwKxxKsKpEqPjlI7Lj1su3F3Cdrl98S/y1I5RKLKq/782VPvIzHbLC91Iuk0pq4okcy2Rg8F2Haf6nEuWIZvGUhiOj6ewQXR+xf9LTGfAM+DeiD9/5df4SdJUYZ1g3CDlg9J07Y4yTMEisKcGuaMbhx6ff5wxup4j7QzaAUczfCFFbgbn3hMUNgj5lRl+hlB2UVHOJK0SgOubEKQqkV9zAd319y90+U5NIhwNenMhjcVU0cw8UBb54sZcj/FWP06bor+tXqxeqUTTwb2HYSMNROIrGCiygvAWc4xyZpiIH2IjWM+x1+qCFiMQYmG9G9rNiltV010I1WUU/89/dy+o2UpotvzaqIJNFe99EFXPscy50e0ollCkVoAw+knrOXaK8NwPpEFVQsJJRtBDdWy0P/rmGsM1M3K4wppTNrwjv0gGRUjgdVBZc39l8Y2bxt+a0rJy9GyXInbnyjE1lIziDihwQKmWjYObSwZUaCQs+PHa3XHrBsCOnlErcreWDTA2QnstilIo62qVlIcRSuXcGp+hH5Baa8LbFwoU7d4h8IJPVWeWgJU8Dd5Qhwv0FC4LJL37wt0I/XJfTq6ibCHrxCvKyn9teZWpUUzDvoB2xaLtD78YNZbey29bKMIm+c9iCHu3VtF0CO54ImVbcbj0ZM/ALw2U+eGWpYpuAXmZU79f11KxwE40bF90ze354yq+IkYJB3EH57eerxP+ef3OycPq/1AhkmcYfM9yTUDsmXJsj5JjOMGCYKansTYManklFqKFLuEBgIcrQV2VccDGX94wQud7pdh6CpMas2Xc0zchGmFfc2WTaCgqVfai2jIgSiBCWZlsoSEifkdt5aiE1YcyE=';const _IH='b1e9f2e3b14df68a86131b69b59e3e817cd2ca5502583a7f2865a9b571246723';let _src;

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
