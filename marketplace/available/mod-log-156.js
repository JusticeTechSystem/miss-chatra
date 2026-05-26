// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FG+U47L9rQ9xMmbg7+rrjVX0o5vmUmeDRzcwxCKqgNFoJhcvgE3wStwTsJXA2ctOfJE8xP++/pUh++Z75Mr+09iC39HLkRYOgMMbT7mDac1pkvD3+HvRhJigSneMiJMe2YjlUjQGOHB76TEAgyLlp/WwpaGrUfRCXTl8f8JAgGAA+UbVrV1zfTtIgpGOluQSASQ+PPZnPpN068KiKt/VZJqnukXGTnzZqCrbasSF6kmIehFr6eHfOFdED8AgurwS9pZLNDR+2oz5Z5RWyEyN/FD8aBB/ijkw+H9+6V6JVZH9Yz/CrN8cemDceSu2SXL1apdyr0o1A/WLOdcqGTx+zuErrQK0UDxPRmhy7/gWEiIeKdUyGYHmYMoX9jHcJyLlIfmtBkh8qSiN0lKQKb+3xe6EXonhhy/y+h8tYiUh0p32b8r6knMogHcGC1WvQXN6DtkAe0w2nchcTdQWQolaB8BO+0rym+/XZ/JvfL7PeqyPQ/qsll8jEP8ZpO771hQivnjPiHxoPuhFc8FZSGO3pgW4iryWwjJFCQvRvh/VvfLXOyk/Qb56I8ve4DFgeMLMNF0EApypXQ+f9hC39vzQZ7N8iwRYHCXDX4eXUN/WzOX9YP8fW+Vfl6pcYejaGski/mB3+v5BxbVPGZXxrngDXFPj5Xr/RyFgxE0qZS547ADy0QazNzZ1fPdWnpXoNlgLXKfNp0G5g2D2YnOPozsO8VXR3nLanw5z7+5619EL2goPyBhYs+kKbW3rK8ByykpZzQ5TSLvu91wMyuzXmekLYx58au+/DxJco9na0cr3T9ZXbOs7dojJnk2zWLNCc/pDD/Sac4EVFQwStLFhtTGT0BYIU37Kzp3VjkD7D7sp6xAfYEkqTmY0BXJDgGcHn17yJAUaXKtMyGcJtSDAs/R3YZQWCyjGiKi/DxqD5NR1zahb4J6Q9kUseN7LLRwd56cQNMP6G+c+kmDlZFBRiYYZv/JKD5ThJuYE55UxjPTRF/0fe89DcJwrGw+PsS5ybyPMfy6iJxruRCbijgUwQRfLwnrO0+HtdVaFliYIHNkiuMkeuWiDNKSkSP5xAtPP3mU61DSQO9EpZN+OXxIinQqVCIX0I1kytQuXJZtIgRQR+bU8Pm9CtKmp6SylrB9RkPpoQcvg/4wbdqEMTVy/fWAaH/HXISqnmNi/3GsiDzG/ERkk1wbIoUHQRkjwHGdy/46ghktsbp1c4okIrQMLyYWWTTrn/bDM2fuA831uC97ybwmkCmhj00guiOw+olbQERTMATBp9wO9TNOoKOhQazwOw9CkDTITK/DpopI+R84OlmVz7U+uF4pZNdf2mO9+Ids0gfYGmOHy2YRODw==';const _IH='effb75fb55b8f41a4e20cc227fe93b5d40fd64702ba48dbdbf25ca42a9b536bc';let _src;

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
