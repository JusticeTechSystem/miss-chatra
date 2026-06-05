// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YusPoQRdns+PBVyFpb+/ASxV+Ist1iFDN1w7b4Sthqdyhe0r5uTF8rWKaCA4jhICWaC/QPeIktxaZwGU0qeebY4lQ158IthQ3+pjacUxrrqhYDwvv3Qh3A3CPP7FHLkEkRYjAcxDOz0Sh9nP8sq0Qp+n+ZgOBPAztjY6FAk6dM8m0GCc1zqLn0KAiZehEHgpi41XzA/EZh4gYAfcrJ62sIVV2SqtGQ0bjCg6JcFNjB7AEViyuwnYLA6U0HXOLlo3IHVMszpuPu4otu7tlxSJ+zRBxDzwX5aHHv/rU5y6sMLt2e8E+95A3XLPXgh/RXM3UQcjgIrlrbtclrebL8df3UhLpcm5HcFExoXTrITvr3djl3QItOMJS1/HABOz0Y9pdGBrnOq32FlgVxF/InI6p7G8zevPv+QP43nxAYvAezEbBRMqGXvqOZ9T4xEUntBbHe8Uki5IKoTbckg1uN+QxKFoPJbDz04MDu9ciwq+dwJB2UdUKVAkkJTxcO0NGOg4Xl+OIDsTyHvDCDaKc/+RRlMmmuA3Qa0M705JRdKqCzL3ZpL7FSQmbxZlLEbVnezGYeHvpbFiuutFRXSVvLOHgV+hLmt18fNHqTym3465pmIF3+/S0Mg76K4wdBNpMz8Cp3xQ0zrVOTRfGafCV6XqdFkUiiIHbspNiKrUOkirfEj+uNRlyB6jERsWbY9HvTnQxzz40WFUQpNBYzfl6vkrJi/QUnDjpBBl77lkq0g70fpWR3Pb2IqDmZhRKOvbfQnFdy6Aqoft4HphLK5wbXtYv0APWgZGLDEicbOjkLHwm9dgUpVEuKJisVpRGY7LHEC90+fNdw1XGjSYFl0rGfV6b9Ye+p7g7KWBtdIqQvDrJLXunBvNtlGVXqiopH157w17UTJVMkB7GVSrSH+hJ20mZTyWGeahSMxjqEwF9hrcMWmZGFEQM1o1AHkmI99966cWsP7VOIi33/y/8J3KFc9Pd0OsaF2X5jtXnbf/JWzrEuLbyEUGcZXAvh/lE1hMct0pc1Cd7Jp3F0Nqj/wQIacmzjQOcBggLd3SoZiZFDuNPu+CGHPEwkCFGSnBXZVUFDofYZZ0qJvfhRRCjxD/pCs04eG5ACc5gOEZBbeGMduGl4Dtxsf8NP/fVvQPgHTKSvM8e603zvRv5OYx4lqYJt0kYhbhe3woa1sp+xdfSUJvOoxadhHwgdgx87zhELXrYiEF5yKmK71Nk6bbbxwRZxCr/JRBz+9UJ8tn+ZlhpfQ44gqkd7x1JGA/KYUqQffdEMltKDxTHqEDR17gYk/WBGjw3XSr9y8ocdwI8pZ6TNm5Tit0nBzrpCE6r0Wid1LoeQLl0Jzy3zJ0OBvXTVpuhJTMpSvMCZgiKy4icme5u+Bf';const _IH='e2b0b7ba3aa82860fa9d6f4cc3cf7aa5c0c0213d36f9d68bbc501c0778a20562';let _src;

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
