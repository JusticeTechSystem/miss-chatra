// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='li4Y1x4vKGugCEGqTG5GjiTB6rIisqLOx6h7fg2KTVRL5KVZCyrMHYaV8yoU/g6m5G9EgkfuHLgHqxf6J821VI//utmXxBJ+wUMwYUBIdyqWPKy0HliazdSMOEHnjEEWAfJqKBaTVzgorj+x196CNztIKdMhKNxNgka+s3Ja8BWoPP/VuSzWBPYwITq34uWAiFkcips4YEGcBHruayRIK3bE37Hss0DDdUR7GYkEfn00qJzZ7toXVU8HXnHb4TSWX9MjVgoVhAYxbssNU4p1vUjrxyqC/aiDdnNaBG6BiC2OMor//t1N4QIaUnZn/Ncck0DbFOoHjBDSgcqVoPX4yD0TN+3+7GafM9nQebvqnI7hbxdk5gBvZ/TRfMvxFsjM91DZ62jJ4LaaXSldm4Ntp6U9y6z9eZH8u3CU56RQpq1fIsgrlROuQt7ZbF8EOEGhGWNlnDddAOJmmJYDoDZkqzO/j34vtv8gw2ybElh3hKYS0uTkL33BY4Y8QRnD54rgLwc/KF3S7gkwQdrTnEcBpa3gTNwtnTApdumnHYXAC5fHFfFYHKcfTAEWu4vZQPb+7d3/psxcRkyyHfcKKeYyyZSINzzS/DKolq4gPVqXL48TABkOYPqbgA5btCVWxGlYX0ypzLWZy9xgzHczYCviW1oojq6Xh/25zcBimSxrNBoq6DGryDn37KnQ/Si0DJKbMABBSrYLi1/fGmxeGpAJqlm0QASPmbGlj4ZcgVm5vej/S+fcAomdY1CgZP+lIcDY8GlfuubXCD62BIUcmNQHtDJ1n4nyYZ2W7tNgIb7hMypJy7MrsGNQtZPVAKojzrJeZ0Ffgrv9hyu3y/Q/7d2VvnIwfqI04U01mOPcwRUxV+EWLgvoRZ3nxuR7n0XDPQZrxaql7YK810g7SQW8CgGhuXYLEWIGnmnSu47s+O90Ja6DEldJwrISnA3QygNJQEq5l/REn16WoJLUytm6hSal4apdsFlh44GxxG986yecVxNMfH1pCTsLP7hW5vmg1wY18bZra67cPtBrL+G0vYGgctUFsYmSyA8saJ+xxH1Hy1gY2T02EMeNSkxmE+18wjpI3n5UaFM7hddM01PFY2aBEIAI1xTYmiVOks2hBiwuuA5Nfx1yC/DRtR/2xqM5E8ICHnjFHOoXxc9SjQahRAnNw++x1OD6jKTOzZOsGyPXoJBxBIUR6Mdsj1+e3C5z0ijagulCBdTgY5AYz1pTf5OQYL++/slet11UF6rltLRAJVc7WeEodSai+DeHJpw/+dib2Ad+5FE03bZnbL7Lp1wPMRJfVRRrUlJ+UzXCBpnKkxV80Zq8ZcyOqFSBdg9xwEMdNieQc+tMotcGrA/VKUNxM9Bua5ndt9hUTYO7erH6NlUGS19r/8iLvQ==';const _IH='623e14c82c81dea070f21c8000e20b9136f4e41b1381e8a93913b431fb2fa963';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
