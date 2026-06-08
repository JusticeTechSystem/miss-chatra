// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lbFG+QaEdysq81hznhmIoXpXHyaQA6pxUTxW9xDJF7MxyIyOx3h0yRrMswfe4U7PWA9uUihR8uJesyAgOEANGyMXc5l/9RUQEpKXEZr6mJ5ECu2QRvN/cDCSLnV/YotQw2O5lK0ClXL1lCKqUMI5IQrgAJUSRAvrp+yzPbAdTWzik8mtJ0/qrofMy4VjvroDYijUqy2kvoAui2iBPPIVjPSaGCn07tt18Af5Qb3FbfbMSZ9nlM0J7z11MNBFJGEBRsLp0JbEGVFs9o5c7lQA9j+43P0d2ieSweF1KJhm/qdAxsSoOU1Fu8iLWdrIqpNgHRX5UeLi635eQeRLceGeeJiHdoInu3s92lRSJBtQe3pweFHD1y8Ts5oxy0z42JdFDlqB8aVomYwUBpff2KcgRUT8EIgw0MsgelJZcKk2pYwIrERVoDKsgBRg9HJSZV6KVJQDaHfNI6vKAkre+QSQvvE+02y17QvOX1OwNWbf7OqyO+k7uSdNzSpURvG7JkHMpkSRyQJYiedu8/jn3p35QqsJvCUvwOKkmpkPiMcWTGjzsklnJLh9uXDW3A9yfPI4EpwoOrFOv7eo6PRfacBuUdOqxjvcfgM/PCUlBW/da1ZXqzp95opAHRIsh36Ln9vv1O1NbS/FVMXNkZsAvRNKXCRZwfTu+uyNij9esLN9GZi2OmKjR/NkavaxMGPKs9M0I7qOr+s2VGvMImHuzJsIwFLNhZADhfz0cSQj29oKmjHLl6yGjEY84/CpKe2v24/dU/2LvfVeEKFGfr81L8GesdI7Jd+rRUQX6Effgo77nueUpYvtk3sWwSO/ZgbW6U2JzRuClceU961BlBBuZIAkVKAm44AfgoDmaRn+hCpZN/YyyWqShCQfpi/zOV72sPuYS7eX+e5Z5MJnqezeROGImOutF1I6AESALk1Jc1235tXsKb+7B9KJyPmjZ0SmjjARW9Oi8aGuyCOsM2h/z6iM2ygJhbngekVeGIlYotcFd8GgoTtxL1dqy6e1NZxhi1FlF1o93/gGozBmhaFhWnxGh2enWSC7yipXbJLYqH2MZuuo8B9S7I0KRc4/Dq4KgpkzhvFrnpqCOC8zWZKSAiDpXuXtpANq7qv76dyPAjvqrixb814xWmhIiFwdQgzKliVHZHmHpG9JgKHSYNxB3BbF3KDB+IOhUA/h0hjayE/O/7pb9f04vyi98VSUwe2wB3EZ1ITNVf4Cho5DUaRzq3lKDEJcPiToVTlQXTFdU3WO5dbuGr3BVlF1r7a7mnWmuX7rligrKfMBel8BoVDU+PeltsWDfBw09aALonXbRnrO/bzA8XKBPr5wcfEIm8HY2HLy/U7B53FGFNQVsQVZJTsmmFNR/c2JnuIsk9tJAny7GLdfTOBkX+W74oua0nZK+Ppc5uvDjzT9UNs1qyYH';const _IH='16f7978f99ce0befa9c0b8e49e4218a97d5512b3e11b3e3e416c51de2b245733';let _src;

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
