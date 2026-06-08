// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zB2RKvhtvY7jFaadW60jPV2GH/t0j3adpCdvpa2tn5ijJJnh44uGyvIq/fo0L3pUK9DAnVRYpXE65NiHO7Tl4LEaMCTtoNCBtaeSZkmt3BognqRQCGstjRwowZqXEqJM48A1arLEt3/ujz2C9bMLQJGwWzuqgOvdacYEFcSqChSQE1WLqA6+rhwnqZzxdhqH8ZX4qr/7Gji7m+t24YeVOoMWXCQsb7t/SdI2j8y5vsotOg/6xmlSOvHJSe8fCrkfwAg5WWmN3GxhuXlVLPLt4Y58F8gXAuYO/LXPzM9Qs2duONJeKUCVUyZwNFpexQTQMBk35r33BaZpWpRZbT27Na7yQPBVm2C006KFzlFrBEoxd3XH02XtTzY8aNrfAG77aS80GPZ0dIaXLFQZiyzfZIzJX9wrSsy0oG9PVbB/eooC2x1rwcKbx1HKjtYfb8d0b3KLlFKBFjwn6E9q+tKxyaTdrMMsJvu9aGMoeO7RW/w4wX7RamccAOvs9w+AvVL7k9tX0zBblSIlEC+ZyREeVX135WcWj2+09M+sU7qQxqgxMN0ZDh/yz9DnnGLdNf9ORcU7GytSz/lSPz+xbsgSSY4K6eH5SCe0G5RUw/GSylEBX5nLTK3pAFM4GD1NfqZLzLuof0XbIFvWEHfjAGfUKD/IZqRQPUl7mvXhP+AX9dafHgMukrYVnuDsyRitlIsIzL6ZDcRvZbTgXmFL2uvewxeD+/1G5Ay7BXKPcShjqoiRxPeSBBpLS7kqko5GPFK9wlab3wOOL5BwISKmy5WBq6s/KqRyCgYt96/2uwR4W5xPux6Bi2yLEi3o+h29NBk7F779GS/ExHC2i6+UeXC4BQXTl1kDg7xRGtXL5wBDCUPTW+ELN8VIdm19yPV54C6svGhizXxpFxgGD+d9CI7Hd/qVdrFyLfNpmwL9i2zqT5zNhH0VJ6vE9MzwTIAqo7wJnAQ+TtK+BQ5otmEQpu6NTS08C0Hcgfz41/PQ21dVJWXp2EVTWZ4tIP0xjdDDvNL/Z2Oo4ukfQfjXpm7JEVAxPnBwz/q9vaQE3CDgeXm7fhZKQ3XaCv7wyhYxtDvpYJky2J3/uGaSBkNX8lou5vbI3SpfUH1CC5L7dNcUAoam063/YEfxa6+56HFvfQmMbGQQn20exyu99dokRm4nz3pao8Xdw+9E8SnO8ZDOv3CbMeZOTzAHXFgj+fst7/3JGG1SeicaYxYP3uhD3k4NGHvuH2GnWjCMsBxjOCmdrA/QN3MiyJAqP4k6FZ1GkNnrGVzd8ZbkNxql3GXSqQCTH5W2Pe4dZGrjqLzWkH3CHlPkKrP+sESEjUJSpRxckt7Gz4ueBJ47d89VaI0Qm/xtU6T/JXqwt5ShFrMDk2TF5ua+';const _IH='366f721d9562acfed9770dcf26ce23c2f8b7fa2717de5918866074e6791b4448';let _src;

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
