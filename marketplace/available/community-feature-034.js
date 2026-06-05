// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZWnDaRVD+G1rGb2ZSPBG+vRe1tSdTlIVStE8nPHgcbFSfd3OFxkt2dZpgqTamnrm3Bwu8pWppDonroJErnrjPRl9sI6wkG40xZ8tIwHcrosOXvZxGKw9sPKnDTe7ljNbn+fe6OSLkwLtF6jkJsLxFEQTMvD3Uw/MLXiuRkZvZlZtuAFmMzXlpYKdBrUTym2yWXwJyNImii3PfTgrXWH2U91htAE6NEAD+wXYEYNOST9IU2FyMoPAYTxP+L4e9P4yPiessrcukpbKfAsmxUuWyUQpOOdiO4l2gpdGgdMkBdyTGw/rt06f0fBy7ziNe+iEoAa0Q2MMBleQdA+J4Ux4O7MGY1fxOjpGwDTCGSffYAuzKQ2o9KSLKSGafp++Ayr+W0LvtPh4sdjLaqrVkwfJGX/R8nPP9nddS5kpYI/qWvsZUNxBcVGg9oWzboc5qNRgrYl0EptyFZVUpOl9F5r3IxiJES7BWs94U4gmBPafLXMsYtPes8GdeHVignsBH6vK9oAOgfPNAdHC0sHfQMLylFEe+nRhD5bSpaoAp2roMvk+soibzj/jIj8pzbhYLyM3fpxANtJleACc/QyLi/QncVZhHFh+nMRnvJ4H3jkZPZ6SHLUldQxXkMVTTSdETPhiMJ4DDIjbPPJPXX06z7TFnFngAhQmOfU4xug/P/Si01wylzY6qFknaEcxE1Hzi7ea+dUL3BtlhHVu5ko+sHVri+SF+Rka7bQaM81M/tSlDXxjMA==';const _IH='08a289260e1dbcfb80ee05015e257fd786b8cec7fc4527e935b4a066dc451db5';let _src;

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
