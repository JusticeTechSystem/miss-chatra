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
  const _b64='i3yLyHd/ia/mgadrsWsQ8Ts83j1a1f2Pw5y2DvxUpbRSN38pGgUThb8jwgz0TAbl0aDUvtA2Z9TVMoGGKJDJgznPuNS/yu+D1G+DtD6Ij0iHjpVWiIfzgxDOuCkI76sPVYPy1sZnsEzjxNsObR3cRt6IInSy7fgMb+Z0lzYTcrzL7TUc0F4j6pktSOBDzQ1PD7QRcB1ZmQKgCsQRbJT5QNZxvuXb5APDIeXhwVMNbqwcjXO/i3dsusL17sUELb4kkVaC1x+6foP2wWM6bt6VCtYjbuD0+4+6qjev3aCOUeftXta0OSrPWvE87sV4ldualBYvVzQW7Y+Vd8BenlsSytYE9gfq9AU/Bpv4rcHuNk6MkvVQrOXY8iqs0Bt066D8ZeAcDSkFq2Q9QtfYoIfi5Nsznxa1jsWO+3R2FRI0LZdY9avXalFdBewoxQ/aZNcRqSAK/7FiZaYSwvaFKUzn4nv/c/gFhmynUBlRUYeAJOeJPY6I8oG8OB5aD6c5wSQvbRAaL0Khpulu1D2hCh2M/QfBw5v5mPXsovOqjLwPHKtKsbwU7WE/7lfRXSTbcu9jp0Z/wQxHkmTl730naxtichPh1IXjfazHCJKjZKRQgLL2cdW/CoucWd/0Tu69qoJgUqUFTbcyGZaO3YK1NFpzu5mFB3sgWx+6TLTClJoZkek8rERi8UOwX+5NGRVAsnWoQqNUTfX3RGXX23MULC+ebT6f33CKF9p0rmkI+4I=';const _IH='f1ec077c4e49fb45fe974c49055b3dc04072e2ae5fc690f68aeca17f243684c6';let _src;

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
