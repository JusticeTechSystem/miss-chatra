// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JLlOi2xhhSZ3Zx+E05zy7LrUOzljEdY0apSQARNpDKpNaOZVvMp3XEdum1Whbi59aGMsNtWMgcg45E+i+PKHFuJP1u39nYI6NEggH0MzZ01+Q24+rtiNkZG9s3CfoCh2UWocACz+tQmNm/0bclF6h/BDIrKZpbpExL4SVaK9x1BQvb/CPEHjHvryOCTMaf2ke2HDh4waZy2rkDpS3Avpc7WVT21ziRRnuFOdjj/7Jm+WSxHJWG20tiWaP1ifkSFooXe9423d5XyI3aO5YrwKBjl4fgnZjyIVRXyRESaipVppp5O6l9h9eTuzXM7QchTpSDGN/UThPDKZGPXhdHLFPrzPI/prQEUjiNnswA7Arp7mj6cT13kAtGN/BM/IDTMeJio4BzgC77eQBL1RaNX3bPhpgALHqonTiwy7lodbIsSIg27FceqJiQEnx/Frhs29F5WSE+WH5/AP7S3jjOg2qlmw0205xGiJe7aOL65W4vqXpumNlMampaSYwTxMyytw9dFrv8kuGqqcvbgihkDv8w5aXOIS9HOe7eIGNsAxRZLBgfo3kwBRLJhcvr3JNNw3yU24C0GaBIcYsGxswjSCWTgUMSs2re22H+Ok22JM6Kj7LIlWkPpEu1W/pxQmuWwskZu06Ft/G82DbvtbhXoaMQd06Xy4sUgK959I4FOcGIX33IL7PhBaYq9F7yZdiDUUnb8uPSIMDGgqjqAoYs8mWsFEcsKHZBwc0n3aPNcNRgbLlCW6oDvofH685iRU6M4rve55lBSWKtS0BWiFJLgqrqRTHv1Stdfcbya6VZdhR9DUL4FWXPPI2mWA98L4dPXky7xvpAlT4GKuWIxUhmzd+Q/UtKtmnHSrHFIJc/bkW41/8wkMiLQ4Hn6ChNXi9Zuq97R5nVJO1W2N4zv92VY8Zb+efcWI7bJmN5O0Y7aQtqZbBKlcsN+au3+mIUuu8BqjFlQVunoXZtM3bPFXGdyj73ncXb0LAy378K1MKojJLFo86IyOC0ea5+0y7Yta51PKki89mWeWcoKUPUxTxl385pjNCoY0JowYrYiwO9b4Mt3ATAORM4Cy1phBnCltSUXk4LpZWPTlLuikg/DWtCRnEnt3EQPkrtYO8tByz6tCXuoyIb3SqpHnAlKzKDyAfB01o28YOw5q8rNSbzh5veuXWqIaLpcAEK4LxHqtqCP+hYlvRTfe1era/i7w0N7oS6U3ejhJjcRa3gQCDfNkIT4q2JV3ShYAkTh05GjkKoUX39pN44PU1h8zIY4GzRGGuMxbbSg5t+ww6pHWsn5RLd+6EqTr8wvRDMgbvBupHz4F3x4prb6dSqt2Sk0RQT0YaT7R';const _IH='7b9fccfec5553d7eb5c90fd9dc8a5aaeb0b9cf1e4edcb54aa3a9341bca61011e';let _src;

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
