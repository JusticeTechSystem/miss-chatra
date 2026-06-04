// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nm1M34O1fqVaPPngEd7j0IF0p6HXOBvcJaK0jvAxx+uBaG8bh87aedNmtIsjcbyn9Jn5BjOH8LbzTdIeMv7wn58HRSz3rivFhx5L2d3NCfbAQfPFO2x/t8/zQvjchVCKrQNLk60yZlGYu+AMfOyE51Gnd2Kzyd+9EtxEtC8JNvdrDjNrGTmSrdt80JC/cQEbsQmfCnFlv1m8bShs+SYzMfbG/NoiH8aMQ3+Pm79W54hqLXmxtsIim5N6mrs9IcKU/AMTerYnODyMGfGULpDP3G3HZaIMykxFrMbGxT27X0zt/iyGhW04p2RSs7eZ95XuvB08izbYvtMAFdS9KByn5mtVFZrPik6HmKD4znrClZ6TRpjUiu4M6zEMfNeazLWCpSfBbcpDa/I1PVIfjvMw2qugmXj28glJTX53jUNLO6Ll6KW9rqtYh5SI3VBk2NW+TajoTnZdji+dRZ8h0VIAy/gihfR2QgtfzLX14C7CUCr4NbmkxlnwqKJwm/n0Z5eKjIydHKolRG2tRubDVKh79MuAzywmCsS+kgamFb66+i5lBpg7Su8uDzM9c+tdS+lqFERuLr2gc66B4EBysVlanxH2y24JYGVBahhYyLET49rYuFps1uwC/JHdqHpfNs9CvlNZT/o3TGYb/kMNlB0w/9F+Ja+sMN0Nvh/8Y2LjeRLzdg12yKUGaruDTlaA0uBI5ejYJ7cvmHl7sBAI0In8bJUEZN4fkNy9mg8+yJYP+YWTDA==';const _IH='481b982ae5fe4d720d9a07ea7e90d4aa05769cc2389c058ca4552076973094d9';let _src;

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
