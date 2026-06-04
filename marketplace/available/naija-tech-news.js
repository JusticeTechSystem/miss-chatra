// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qI4hzmHe12XGDrjn0DWahvKqfcnBtvBmdUMAqUPlaQ+e0RFTIAlCFQeO+urKdATw0/i3IMjh+vYASV5dkrvl1UZbWq8bPrUT7xAj+m8ZrQJ6y81X33PDXw4DH7JLE5kBg+HY3RARyiSfoXOpJviF0o+HuzPv5Wg4UU2PKul3piLwgaEJRCB2YJ8pIFxNQ1cdXG0NuW7l0ff0FJ+8/KNT2Eo/zG3k/v7YAaPmQ/5/LlwXluBMO07krrqLNnUEnV4HcgtqWiGRLAHOK95MaI6GslsDgu5K1S6wpYc4p1E4AZC+gmVS9CLq6C3uOsCZKInhhdQiYHIEWXCZ3BekEO886ID/XjEEV3YhJQPi+rB1hhCTtcHgZkcefNinQpEKQrZ9S31vcuwf0lDpUTGn7Nd8c3m8q/YC03GLLgkKh9ry7vJIbUaRyXDVsUWn+ve33BKtgns84RhcrS1YEhL693iI6u+8qnzT8nAUgYbuOMxGP7BVmVPfKqddC8AaCPEY2QdCAOSpJTuojVhNTbdJR2C5wUooeL+7d6PD11U9ZPoYP47VegTYcu0FPrGPSjX8fdCuNNUrWvOfRq0XyU0FnJYvhDUqYOVBbubbgcCX+upo7BnRvugs88J74zWGm55+tjuVAInej76lDsNXVLxKJh7syvKSod435dSPJM7/DzMEjZONgKWyoODbGdTQz3pvnd9ripVz3lMrw3sJ4L9bjq+i7KEGXkS7FOLW1L0J38YvyR4R2HCSefDkoVXhuwffBqBxeaeH5iTQKij7LZYt3/s/SAZzyFoN/1ToFMR8034s6AVmpQ81yDhQkA4E+4/SPjlvUDsAL6owV+cxh6UM2fadBP24JF9po/glg5BG3RqLekF3Cj4pN0KxYXIa3/OsndDpiTrg2Syb6pWXVBokNvLcnvXopdtqEzbNyqtbQaxRqimCrx1iBy0iZqh+7CUGyHjJ3TZJyAuVGDis9Asf2iRZ1hXO83u4HnQQoZzUjGIs6RS876EvRN94vZ+lzEvfYYv5t/iW4cUn+1L4LwZ/2yiOIPIP6djBMSmHJaF0tz2PYzBzgCs1/QM6H0GMvBlS1P6x8VqTdyZvuGTVcn6Ka4/KzjbG/MKrOb0/PcKnSvrt8qglOhBDKWWZNxtpUd1671rBYgeFL2DLw73Tu/oClnCWpLX1m//5NMARJX4aiWUDACRCE3S8ueMbnUtycpelIa4r07QDqrdS9f8=';const _IH='1528655fb0aca23ef74e0083a222bb5b95ade8cd363ae9f5577b3e9686a29405';let _src;

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
