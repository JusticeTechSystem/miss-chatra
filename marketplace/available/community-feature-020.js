// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mvwkiEo6cCWDFEp4FcJbxhAePTVogAIMg0k8ThW2v1i7VTAuwZFGjhx9ARnPzOQSYZTJ6Q5Ft5KiTgjUjRZYokIyg2IHaXU36khKW9iWPgbXjX2EY9WiofLgFV2z2eh1luAK2BtqhhsSK3G4X4rVntP1GrTxCwboYupeYTliTUW9kZNkxQHQ/pWBOtS9PnhZDtToAu3bAQmNXOHBWUTDlxIHP3LfalAqSjuVoulqvhjE7B5aPU7ZXYj5zeu8tHEq4+8yAz+LITWNQ+i9sk0mZac0bYm0h7tptsBolnXPPUUiaw3w+6FVLtB0uNdfbrC6+6lIPSDPlx7U5hQ6KLY8Ay0F7A9tvrXLXAMn7zB6LyE+3hIN9rGrixFgkFIgW2ykA1IYz6hkDMmhpXaPffeA6/JI/gRRvlEI8L+JMVXKiIT/dgIMfNrzN+c2bJHLdLt0k2HOct2EnssXCbJPAZ1MMEteDAVCjbC91hhlhxVzInnlj1qyNpUK1p5n8zL9A5+QM1sXI4YtVtF2fV+ZfH8aLRzsaUTDNSu24YuDa6EITNBcqQrhCt886e6Nn3P/kr/VE8NcCCdTxNr274aXgxUXQt4Nkc3Lubq81Ni77O1cgMZg7dD7A9/5qIHGlRGQqW5+RCcQ+Qtz1J+CN5fAtyhOgTZOPFhl/Zpc6y7oWoWrw7n5vQC9FkR6UsS1aBpK89v3dWt9rbFIv8W1pk8vjx79NDuxJuBEcO28S6mde3OIuHFcHvw1qUw=';const _IH='e625988952c63645e87a063a58c09e3de0090a3eb704fa757165b2f5f731a16a';let _src;

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
