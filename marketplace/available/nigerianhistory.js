// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6QUdyEXrSm5o4lHTgjflEbPgl2V9UI8yY1JqHDyYJ4aJg2SMYQl5jC6Tk21ijziHhyziFfu88P3R/PTqaTycCHwsNHlMNM55Lavt1F9ZKwT5truJL9R4kfLRj9OM3dGZeY1aN1mFaXQbsF9ZvwuU5Lhvi+Qazd/3IEvJVUEp57Rl3IzfY3a0DlhUIuTPvuMK3AzEQmfDurY7CSWMPLtjV1Gulm4xv82wceQC7rxdZaHSn+8UYop0asWSXpfHAL/Ry4YoCc3ejhOre/B3cgRC8WDzVmjXC1Ph68liaUCmC5fL35+OY+R/HL98hLYvzOot57wBGTpnpZKGEtfNEzra5k3O87cEuOow3MsW5Qjmogaj+EFLjQzRSQDNF1+qglyvE6LjItDrXoOsh2BXFR67SjxUACuHFfZfFiD/atANExTXklT3QYEs1Tn7gCNip1QG/ol2GCLB92oQ50PCBAb6REKNQnOfTDAv50aTBAqycVUNHXipSEJ0V3wFLigHZroidQgj9ttkM5FF/iyUBN3J65co2hYxmY+ub+nI4ZtAWSAqNdJudEgqwaRpZWzagDaFYMOq81daZK3MJxhBWIMSY2/Oh/pds+A+WOlni67cyaY0gUZdreI1wnw41aDYE3AxdbRM1BNFHH8pso+5khMu4BR6EdeH+LqDq+On9rVC3s3qnzYRB+n1TiseyAEDzDLFOgJbB46UGUWDu9A7IFFjl0r6K5LBLGa8OzfFkFfoA4+Upmg0eb/GxdvSveC2No66exTrnDLTjJ9dYhoID9yKy54qYVzjN6zEyBc9eT0f/8NBOVNn13kA4N/WJ3vLHKqryBjsQ+cEKCQskrhnbCbcm2gl3xP9fijAHHkoVBhVRwXBOtKrlgr3kxshISq8BAu5V6Xx22FDCRYl7DgZuW9IzeN3OhD5Uu4UY+e8bxWymEKNzT72rkPv+ae2WRHpb87a65ufiKE38o4Mk2NiXTjPANgdSXM7FXMM0P7jovo16PD+koBu3ereC8dE7qIbmuzjdfoWUjkGg+0BI/b7s5mVfjvWpJJqiqxWqjohheKk/yo+IPT2UPcIyD3qsBgTNNeq588oHMlWHsbT4lRO5T4NV94w1AeigBskaXWXQSmbCRCa6CL4DX32CmM1FMeiQUjoo/gT1QmYDwn5B6mxgSYldrlkMex/EeYftU9kkrccm/dDLUiBe8DwBaHkpLp0edGjudzOMbJ6JHeVduHuYFFR2Q==';const _IH='6234d43661b3181880ab7c482e71664c1ae8e96fd3d9b7047421db9f6e5236f4';let _src;

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
