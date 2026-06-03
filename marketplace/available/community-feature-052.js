// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2qjOYIVBk/i7fKSwIOYLoR5Xz5VvjnHopy9cnaM3x3gEAkZfLp4j/mBibaE5PcRni9Ij/GnBI0YcHfilbHJ+FDOxcNbyCWAEwoS+WtfhsKMPa1EYByGvKn42d0hrXTxiPY7uRsqlFx3R4URu3gY2nJ4SeaHdcsGNWtHCPUJfIs6fKlTziSe0zf31IJ+gL5Mni8uqHt5vu+yaVSLKHXzgmxEeUrgB6jMmjM65yhf/lTDdv2rpF9B9bHxk+7RsIM/8NJSxrcPH+iKTAtkUO6Yy5b1XRR7Ezchq9AHmeJg58Onjxw9NR0vcosb2LeCn7vqvZpkAcQbIo94FlItuX6h6hDOVlPgTHj5+kGQ8SkFjC4PLkvCM0deyTLgOgIEdKgT4O5UdvGLpGYdRXDp3yglXbrpt0MuDk0CKp7m7FekptWP/Lx3vxOFo5x9TiqgLaSGu2OuTF1DOmDjbHgO7jUP3PwayBtslSmiluCCCHYoFblLSGqiQTy9v7e4ycPF/7Q5/e53l5LGaAVW5kw5xvruu0WDBt4srijqQOtcIA0Ge0v2znPhgQsVFjSQxLmrxiN3YoPFCpuRwQjIjL86P+RXKIS9qyUrXrPbg0+i40RTnnaO/O3b0jEMJNYUYQOyyMrSEt/naqPzi8vQT0R1ww/TFifrFPIAhUWrFQI85umDifjUbIC2D6ipFRFTkDnPo+c9htbz+w0l9IYapoxS18vtOKMOmi/0MijvC+B8jEgPs6w==';const _IH='1d77acb06a7b9d65ad1dbff89cab0c2abc894b3d5a55cd0f28d394ed259c30b5';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
