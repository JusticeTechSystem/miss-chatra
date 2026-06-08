// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yib43cn5rmZIrD4CjldzEQPOtY2sQntmPqxl77SUB/jyxym7kfsTIKi8PulpQTLv3DDQv2D8JaIY1eeLcs1iZKJBzPw4byXi0jtPsy69Go+syCZ+/1nOPcXKYnIZ+4kSuPXgRdRAOxAq/zon9JNTH4Bk9DV75kRyKJTnX3QRsAgk1zmMKkETXcAdNNMivtn096u7nwL94pgbEeg3tyN3Qq8AcT38nPqx56siV7PBX1+V4iIlum20USVF+npCseosJ0hhejwnwKS1zgHL+AukoSgf2dW/3E2u9cNme7A9PCCRS/bCHL2QdB6KIx6O2O50Sx0G0L7gljJ496FRIopw1MCU04+bMsA8LIJd3ugNAsHcc+hLU+38z3k+2LzpLotCaX+quHuwYbHtMVGzymht8OxvW5kJhns8joq9RAO0fkZunDt/b0HCmO1gNYuppq+DaJ2J3YwKp4/AKm/hv61Ywgu9PFt+SunAeuKbBOYWwZSGqPwoHQGpIRkEvglqXr+1Ym/Fsy93t2eF90fzJT8XT/hUMC5hCN52cLHQqFnDnUGZhyP4jzTcTp0s5wGzqlgSN+BP6C4pK02wAb2qz898rz0P3O8RT1d6ZAB7r8JfsuwildMxf9LTLX8MmazBqIIc6wRt2Kh+RcC6C3Hcwf1KuabcOYxyDipB7uHgooF1h2Fp4d3nFxVN2821MzGTrZbF4PaySd7eSYhJNxuhvyhjgq/Ix7QQuy49';const _IH='58ea59adf5a7773c66a66279f2caf4f4de30d4748bc6380d9cf50fef165a57ec';let _src;

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
