// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SmwM4oULLUyiPYesttAAY74mAe6SKKkDAMiY/AEYAmhuTqc0/vC0mJCkili4eP91hBuhF7ndEfWQyX0upfazsH/ecUttKZtjAg1944atMgDny40njxidD3GdvY+S6cOmSYAqoVGwkM9a/PyKCG+VxMFE3rkZwoaYHl6Z4a4wzqUMEq8mtyZyyBssUTyQaMeMlo6zV9bbjfWEreaIgI15nDxo4fveNQDvdkxuRsDSEKadgDSqRw4NszUqUj9CLedMPqxo+8Xzs4doWigITczkqQWAlUvFFEE05s76Tauich43CDPsw1wpXNCP7RX0lAQ07oPqIAlc4YbRO+WYVRvjRYzVoX+7wi7i0lutGlfsg4ijEbzGzWJALc4NbDKfYRoWy0SleaNcL6s+nT4dX1BRoaMyEMF33tUdL/BNYcallxw/HO2pBDEzKhLozdtQVCHloAYcNvj4dsM8lFkH0ei1ewl93jYkSYcu9WUmT2WL7iGsVt9F0bVVlsFUdAwx+oh6uVJNjTmN+bCU9PDzI2ydhZnXSB9C1+0ffzQfHkEStrTvvdODg2P4aHRAlb8pxH5Suxm3Ddzj3zQ42+reNFbRlr0B9GioOLyBztNZQ3Z7vFBDZs8xJaOaxeHQOklJGVdYVtC5JYXcrzD/gQ5dD0jBoxTLJkW9RFW8NlP3YyV9Ym2hc5smmeIT0KN49OpvhxJ9ZGKqf1rs3TNuaBLFuclHvrLSgYXDNSwBedLUJg8bslK/9eRx1RZ8dtsWTpUmMy1LU7ChxuN7c+jhZIDNR46F1LiiS2vdGF2on4ChGRjgWirUqUVrgoA8re85x+DfOwxLWvMTg7f03i396uTBGjZpL+QxRc3vGjbjtEifpK1eo0jocHJzyFidd8PgwP5V1gRFHMsmNfhrCN0DIvf12SUFuhhsO1kD9Q2Z12ormrrHJ8mzh6w9oNNaCg==';const _IH='c9c7be15e695c52197eb0f69dd7fd0f01b6e1d6b5891840d44ca1f8dc17905e3';let _src;

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
