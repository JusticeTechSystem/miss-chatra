// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4x6BOXioWypLSI798yUlt9H67IAkB7B3eJSE9l9ytWZMcbL02ct5fI0prQzweLkCtvBPyN4SEd35mXZ4VxeizPtSrXUG95aqGEjH5akCEXF/1zHL52Kopxb5J+bQNljcoWo02WWEwGQjrjRnO5FqZMX9QW+JozlbZEKEQoVT5Iks2Qthoqhnr76LIvTGIXStXCyIyWv84o5i7aiyAy3RDFFRXs4hRE2qzCU/r+SdYamMYvXOf+yNXVXLpTCYCRE43wm2812OPLR8aTCN62Px2bOER2WbFAzM8c0dstCUBMFJO8bzdC5D30VYEsHok40YCIdP1Uzmf30tx5roA3CulBDHVDZFgR72vRogeJlFxE//VQtQGQtTRiUSbm2OJmBNmFwc+Z6gbUs4nBHhgsOvC0y2+qNHKoYbbnkNVO5rVQJGvzOBN5nrBwKa6avV//2BGExYYPdvQqQs5Np6uV6FaN+WWoeNodopsPrHBa2pxfyJNOM0XKy/32ICXpbRYhiN1SRHj55jXUNfcnD9y9GW9EQDziwOHRnYyb3ED4qol+TfevQ2baBSLVWj+ZV/QZBdWr/qJEkY+eH3j5MJTD6LVoqpO7x9NWx3oR1r6ZAPMYeOaxtZZkizXFvJ30s4uxg6qh8GIKVJMABYLEODNbOQs4ICgNQgLBAYf1W5bj2/cz6qaqxF/RXO5B2Hn7TNol+7JV77Y6bejenBJ183je2+Zmj2ELwRzUNopeo7jGMXaXhJb5g=';const _IH='a95549a1d9b1345ba75070d32b6f2cb699b3676ddb12c990695da6d039d963b5';let _src;

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
