// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vtThk2r55IdVeBOjmobm+ejDBCew5lCRzwk9d4nSSaXLvI/xseN8MmYXxsh613oKenM/COTHI94TAgP9uyPPKouEcb88RKf0fA8v3f2taV9dwT75BgyOcATLxPDpHj0PPI3Tk1x9ciOMuZ7bsmds5AHdrIgvO3fAh73HE/ldwqZYFKyxFoEc31xNZYD2IvibkGmcjXjcoF3ve2bLzmWNUo1QsNgTSDbgnRz8hBJCQW1U3r5bBIt17GwVRzKShN5Nr5jCRIUxw/m6mw++z1qYVPZNMpx2Ijm67//+qtK4f/IY71IluOU924ij6mqxMeuFxteSkg9/baaKTQlnuMJOl+s2m4/2SdkBVVYJAfYCUqiLttAcIMAPI9pt7jRAskd9yUtIg08rSeFsMSBJkORDsswv4+niUWla3elkue+J7KtSlnhIL5SYq3bY4mS57qZlCryyJMKl0/VT6Tfq84guLwhvuO1Y9yjLG6ZBNpjrBbKSOfqWDysr9YP65+GgpShszc6iYw6XljppW0vAfgSnmIff7puobr8JSFnctq2um+4HhtK2mmS69gp09VOTu3zoIuOt/2SJToB0Xdki7jClEbm+nbzT1lyHThy7C2UadtitU9365lUf2k07H0QT36/TNX99PIU/jp35oSWUVvJxw5poAwUErMdr39dgs9oYThuYXq3SjPAnpYZ2izN+iWoGnfUj8tDIIb9kB62mfSKfD/FzJrGndXJHNGx1PFiNjNE3sE4TGxdI4TuACwVDFOaGG1O/SvqGn7/6SdCwM2m838DhNwErDzPZ5Ii2MSiL0IJP5h04MaV+mRNo7HMkqwHj5LLMyrlfFy2cvBVshbE84/yNmh6+oPVaOhfAkwKDGHhTXCrZnrrr4F0sqKmArG4r1B2pO2zb4LLCOvTd51my0EKIm3zFAORBh1zB11c8xO5rRvxhlufL7fH1cIRaDqTtv4hVJDjEUI6iIXlNH8xwvzUCgPJobx+XL0wLPgGy3bwklybEOwOGF1CpWJeI3QlwsPwTHRKBPxX54A7UdHYJtvp6';const _IH='77eda925ac966dd93edd83c4a2aa0bc693af10bb4e89f194b97519b33a4b5b0e';let _src;

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
