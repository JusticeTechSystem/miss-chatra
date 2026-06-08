// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HCvawhwgIFv//eUreKWGH22y6URPiMmbeMUX5x11dXFoPY9u0hIi7tI/DC3HSjXh9JRao+4FNqevIFK4Hc+vcX108Sv57vy8j7VgzSuCG0XQCffFKbogVtWxk5FdSumXij4gwZkTeQs71uSP0dh8B9WeylOXworbx4MVauJztFJt7pRxudFViUZXMKxQqGR0SHxbnv6XBzQjz26tMq9vVkiFfYHeKV3a29LGU4BdegcdnoEWGHQRn4tlmuItZiXqsfdf7WiHieVBmTJIrTAz+IsgAlJ/OgcfMHahm9ZbxmkMCqaMsgWg29s/WJlM4TEKsVTnblv4297o2OKzqCBLpHMzl8hXuMVI+JO4mBQAyjofq5HyOXUne4tWuQyG/nvUg+4T0atmVJkbBsOCZvNJCMIeB37i6xcr2gIfATIKKeLuQ+hwWvPwHrnJ2rEPEmcuNVsBbLdLJ/R4R9veLBO7HC5gM/bLqEjgTlf5Q75/6lFDbRZszm0nTyj5EMzvxSpSfbTvKkPVXSD8pF2FGF9ykMviXuXOlL6drBVCU2AGN4VRWBejqOB16rjdflyvHQYVf4r5y28VwjJk4LiPe7s0wClWPc9RD1R8biS/JXiDtMabxBFHWcHwvIWpQgUv/FkjAb8yYBQeEq1VhKdQEiHqKYhe/fWjOH8ESakPxHGhNlpD3YbwRS4B02CDyBs3IFJsr7XuiDRYqbW/HcnJ2/iBN9vWrjiHkTGB/5SdnTSI56km1ROwXQMvv8ky29pWSp8PzUPHW88sDNMU5tZHuj4AadLVFzn4ON84971qhm2y6Ws8WkrHbUcTI8zC1UAz/OPKj1KmYA/GTrgEmOp4gvQUSR5qQiEvncwchFd4SIrYTvU1GvrAPrV3Nliz7YmIaETGlHNyrXq/QTeNmzcihJ+uJYb5n+iWKt7DoQ3loq0tbza5L0Xb2MP8/FwySNUCzUSrIjDMdu2XcHY/JLUhzkxmS1pUOAORB1/vGdXrGVqn3AvIYrFKMB63jm1GMLvS4vJQLigVTfN76kwFEKc9bbsGpd4BVRMJnKKjXRrpVy63ZEaoBdzEQKK6wprsKHVhZJwpCVU8Q2Qitos25a3qioNkhbd2lFB2b4scH2dgge4unVAyvVO2HTmFi3d9n8i91dkP5CtTsgkt3K61zb6nw9pKhcXQMC8sFEuI7WNcHnDosOvtypZ4ZrVwM9Txw8/N5ngwPpwkoS3RJQ==';const _IH='c90d65c2abbca9461e34e445852b901edda19c24a0cb1b816ff84e18ba72c87d';let _src;

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
