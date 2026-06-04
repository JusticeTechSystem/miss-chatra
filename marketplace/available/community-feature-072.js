// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MSL9ShyECqkqei5ud830g1eWev2kD79C8qYP7fm2x4gK+FDvnL11BX+fftSwP53gYiO3EHJGPaQ7phUcoM4anvCTrAa1UKgstVZepRzZlVZNvN+zEEHRsh430kgcWlErvlNJ36V+pGXRBs+CNdE/XIqkkRM8S6CYU5WVfujc491WlIqhuyibmr6GL7Oyu/Y4iH2yDjhRwDKHR/5XyZsh9C9m3E9S10d9p1arO1AljgCQSTXobc3uUfowJYNXlw3EoXNZzg52YVTEvGn9x1W1yowDePSyUK56o4zD1ctIDRl7msBUcqCBO36iDwZZAyk3SKEzYn0FfzgV0qzy3Pxd+c8F+PX94/YUrgMR7JVj6x5fBhK6Kpvf9ieBwZKZEakxifo/prpQisYdZHWDxSs44oGXUSH4091ypsSV+lDg+61yQqArqqy1hbdmPQk94Wh2ea9kXMBEn/EjT2UB/M8Cs0bBt/jNj+sZM4afGoeiVXtm/lUxq/zCwyBgtmeqJgN910A0sNjEDQIMnuQNRidoGlnWtWCKqmn704nfCfEkNj4bkBbiPIw8pclEJJ5r8LsDujE68ujlLU48rGhrwNbHgC2K7loouBcDKEW0QxfNQqyQxRGJU2y/pALjcPmK1ZvPcGf7FXncAnDKksIGG4nnov1Lp2luUX4w4Mmokq1e5/euY1i8kiVFsa6FtzTyMWgw1378RuwN+jcoRtSRfRU3xxi8oIOyOFItcmJMox8bag==';const _IH='1957d90270003cf0ead4d6ef0c4c8923875fb7a7039b6e862de416ed367a8e4f';let _src;

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
