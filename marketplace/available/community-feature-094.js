// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tMPemhxzabw9C1nGuKHFH+chtYnwVEP1nQ4AZHNDWJYL0ORgF6Vret4U3Uo2/rAFqncUSpxZ2GRTAFdLJzEdrJeKILvRAyROLLTG8c+BTK2zpcUIxzgZJMaZddrDjwGLqCPvZTc7p1w1eUOcIH3PwHwn4Fo2u4ad6niss3JQyHJc4g0jYwe1EM+5A6icXmxixRXq8yPaVrdYBSHWeqEHT0Lo/6XE59V35AX3H9vlmjnHF4f3LLEEfte9VwfCDRyzxkC7ld3TMtuIYQ8T1b/xQt4m2gdJKXb0xXmXZIEkeh1dqewNPym4REqCkMSNKqNwLI99rQ3y+n5A9vDaxL4hYQ1lkdTFihBgwBt54HCmGPRouNpDBrxDKUa/0PfzmfFy0MSvLEZFb5RJREUa/s7vzOcdKAmij0nKrHnOq1tz/7u15ji8l5IELc3GaYmi3rjO967Cs2yu5IU517Ny9CS5rcTEx+WEQu6BGdjrguXII6ICeeO0dPYoZkfJfel54rvmYSNqj3AWwrGpSpxkRAIXaiHWav5lJ/geIka6E1CMh0/9aYMbxetGpbDn6TntkpLTZawsw6Dd78n3oxYA6pKyh4edhJEHlUCCEed0M3PU9nInDje0nxg2BvRlPEKZXzxWPvTw7dwTtkeBWo1IkfVPDZDaGfjCm076c2oLtUdqK1CMYno/B2IrUehMNHo4oubMNCECt4Pf1hz1ElyTEDOgs8qlv73oFrM5OcTsFbqq2GI5eQ==';const _IH='29c4fc077d634eea63164384574ea5e8638b8b6e34b5c85c9cb66eaad9b9ed0b';let _src;

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
