// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z+FNMxGByz+nKg0Q3FmopalFvYvhVqVDb/SUTcheHoWLIKvqfNq7bKl5XpfpqepwPLa3SlAAv9OJKqgybqjsMkaTZ5+ETsRsHoTnv0pCT43pAux40y4q3DT0Rd4HcVzCVI+yqZADIWOMjHRXtw9ZnkQeaj7bAouBUL773ORB0+e5k2WLeS5bIE2wjYjGrKM0LLGac4jWVAsMcHuyqPNVC+pOGKPFDyiyiY+yp48K+OE69LAVRrEnQ0WUXGYqXa7sbK7SmuDXk1dVaVzKHGO1MbyJayJe51METfvPvsRLCr/vgcaXcVE5zrA97Onnw/kuT38J0QNAcmDhlEDv/gawfNHI1+8zTYxELZ58WgiondlnzMJzjZiqR05tGpUEAmaUweCGSIXow7eTGpSCgs3/8qanqVwoKd/IZKoKiOYmF5LnQHx+Dd0UnS2LJ5WCet1u7SEPE/wI8fTqXPNSviwIkVPsYU0oeDYlWH+mJ1LS+fw8samk1GupIqDA5yp1H8xgQR2U/q0lnuejMFE2KIKMKNg//SmsD1gIInbmFXifUy4wo3MnH+goaxyTkSB1t4SYWDklLh1U+OYLR1+lUGIwpLuiO/1wR+Rsfyb7as5PozaLcrQ1X4ZKl+Cd5jYigN8rQ3JuoXtzwC+Do7iL/3A9Ag9XmvjXxoGndQlJMzadbwoYrX9TCLkNIIJMmcgiNZbMSCrsLvFtD14SNPFlEq2eHrCsl0c4UoAoHbsrsz4Z2mZByoM2eoZVnETZtZm7S7E63XdOE1XnPEdQEusWRwVZEfyiB7qeGO3eeBv8hJtnayPvYfmac9s4Qy4vZNXk2Y//B5ymhqoe/e4+N29O9Ri6h699IrPOI5Srfmq1RJTOBDuGhRCld0LvlEiLqIyo1MNHn+albUPLHxtH8lCS56ki20LjpfGfxEpyGfUhcjmxZf5ntisX4KYoSpeDt1QsNAVJDpjN1s9gboC+hYEO1LLHw6z7H5K/MUG3CbtnrrmQ6408wLxblRFNYXlsVJcRz1GtGGlp3E+1bg7t8Zy+biR6D6pMiDn9C8twLJRa/NoD6qnepV02QVh5ymYnhcigfy38UCJQQlG94TH8/L+I2xi7NCRFjSeWRagGIxjXqhDwduKRvSLB5jEnTcG5lp2FevATJ/hVQPHhO1tE6bvIxUM4ttvfentPv9vt3eUHH7UW+857k5YbcGO9IujdNcV3rMAtXZnr+dUmhsmcA5YsBs5Bwro2q26HKrXS15dqTX4siC+87eb7TKdKmYvMQy6E95JXQxBFobe0Fsqd98MwnHq3PfiEOr6lE4Q9NTLYXBQwTKrevIEDsV3JITVy29bM2SED9Pa12raHBVtHFpKyJnhP4Cy5qDZ0R9d2UaJjCBxgEMlP8iypvkksk1SKdJ+H+928TA4=';const _IH='94e5921ed2564799567669e640bb02d4d7133c8ba35f5ffe1311fec5e7d4525a';let _src;

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
