// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VyDRfD2yhZ9PuBvGEyHE3aKErnPUkN9/R1jOC4odIRvf5OLY1Xy7eyh9qVlNJqcuAITaDQorsCTtaPnhQbRU15/yPcEVUsU9h2oExOhyye3v0Mtj+lXGOIvFFKcj0AeO2pLXLWPzMniEU3BPxFOlYU4bKy9E1qZ3XJgta539k6IDeWoOXiojrbhSJqNRwB9aAp2X+VTNSJZ3SueiYzRmj+WKMxgGkqrYysbUPbFhhSsawDgFrxDuCQ6zIB2LARujRKaCWtYRvLjBQUU/Gv8Jg1d8qebEP+ASGRfsZMFHr9nSZ4RC4KFyvm3PZpZ5iU8hKvD2tvhkeZlfyd5WXPgmMI7Mah/9WOCC0kRHd9o/+DG4p+tO/rjPKHHPBxhhdb7yCFKqxrFcmYJxSe66f14gnF4Sg4xkKnGF8NZqopHCiQGFM2a2DZvRcWNvBNGsjDVNk5QY3ecxtATyc2HScfHko/P5umm/OhDGsKjQvYR0C/Mn5DYKJPNoAOrRmPm591yKoyYlkt++t4Vc2307mgXgQUI7gR/P2qsok8YyGLXqDEwO8TmWaFebyQBPCmEMtbrxpsJ1cLkZTlc1vlXNo27TA/6Ibp7jMWk0L+fYV+CjjGxUeEBrsP12GIpa4TcqJho1GPJkdlm39P62dmWENhyPE+GG+pfBCmvUdecGtjs7iV3IXikjGZZpD0Xq4pytDPgbpT1yl4D+aMVdc3biob7nEreCu0CHQOgrZnH5uyRBXWIFRG8Egh1PLvrHSPMPsQLQoG31I80zskY1a7xRqD7XANWx49/vh4OYm5BExtbRfoh7BZpghb+9ejcnycC6ptl5w6Q/86GJFiw6aDzbaXXy7i//6QebQywEPGt6zLCj3q2b+3d3hflyF1U0gfuMwRxkl5Y8qD3NuTBjpIdR1bBzFFa1veP9gFZTp6r6XNz7lC36gbwLrXq0m9Ah8r9E/hXpJ21B8SLtgEtYdYIKBB3C35BtojO3wzsr0ikopB75ydXmuVbtjGkTz+E8SUxiGEXItCe8r5gZ7DvqzP/5QI399Tet1iGAw0axTXZ4YIAyhKYzPCUblEfRcxwSQDFFPPO6+8wlC4oaFlOMtvfajBxe9zz+/iBPxtsbEr6U+fxigO2tWCGte3HIUdAz79hKxhHS86DjQ2FSeqyaTFpRC2myJjxjMuKTDj5Wt6FfSuiXU8Ug5CbTwa9I7R+LQ81dVL5NctA=';const _IH='f2d54c1481d9109d1817913dd8e4836f223bb789085c74779f012c275f9ada21';let _src;

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
