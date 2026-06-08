// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AZP3uvLync2c/OiXpqCgjz6xAhnveMH+5VPia6Q3Al0Vy6eP9TyfrboEwkSLI0ohp7vh+7GTIbpPxhslruCt7CzSczL3961AA4QrF22Ew1tS2APcA2/Yr7QvIAiOoqeg6e+kEQzH+RbSRNx4fhOCUkFeXh3GSACvOcDy7vFrVtssE5vxMwFGrx29DKB1qwc9DRzt9uYVrc22KEDHhGgt5fiqgH13KIXuGOsfQBNhp0wcgr+Dz7luiQR8AQlclEDwUJhpW6tY9qvq8ku5NE+NcBswbdllntHj4J5AXhIQm5KFAT0zqJ3kRc1I7/kLzMP9iINWAMuIk2QSkEDF5Y3B6rusce5rlG+YTHDuonvxhUulb1xKYjf8GOYABpSZaA7C8idSLf6E/zPTOOtETYAcppWZmfA6xi2eOdr8fh12c2GPQqyc/Z8gzyxnOY5F9P0Dgtse5PPTa8jJmVJfULaSgqOksIovDo/YIHhb5D598GvCIbDuye25ryPwvCpa9u6vsEt9QEmmyNl7f4CbWAPDo8q3q601mm3JiXSIo74Ym1kYBLw90cY+tbyyrioo7lTJi4qq0tKLFsayehocBhIERQhZqpZ9SyBfM7y5bIoHJBjsD9bynSij9EzKMtgNl0Al+hks2S42y2hSsOs0bbrnVfkHNYHqwho1oS6RzxDmNPiiXRAisiGDIu7z38g65oCFdJfhtuvqHHy6ZmxGFW9QrzLya9N9OOz8TlUwkNEw6g6BAWLmXNXUU+I/kIu+trO8E/cyRPFjDupMblIeJYrdUSTrDZKJ9s0DcbCbqWsjsKCs38iPiizg4yosvbOYVE6vi66/gawYcd5XDr2NWYu5P8HbZPWhEjeXptG5v85OkJCVVW2UFMHaqZrn42+E0Wwm1A6NLeJtwArrV6IFnjtZST1Qj9M3IswEG1roDjogBtNpnYT7izaOkSxZXZ6SFnziwCBZk8jG9lucuREtPJur4M97pAnDTZfk2bMAQvJEUbzODL2d/br7fN+W9hr6Bgb8PnA89n0V3/izsqx8gtXCBJJfIs6ZShN2oB92WyaMJ1oJ5LVpRGmS44MySmqm+kJeXVV2Su26mzlhgle3/I3axwUpiJ84JQYaBB119t9s+T0DtiOFwMu0+MX3r0Xsmy7pHu+waJ4xwPLxblHdth6+fr3JdB4Czpqi7fysAAp/bu+ha+PsXTLwnfHUfBLMTqgB7w==';const _IH='1d6de2d69a7bdbad8c85909cf63cd446ab434d617786a45de0cfab4ac7ed62c3';let _src;

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
