// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='huyS3CR/o+OtqxhvucKb8JOTxDTAdCshleToJOyOz8QMpmedY0ltvzca2FpKQw9rxfEVEcdnSZhoNQUtXuWzV6OXQEzzPKLUSk0sZIGfrvVVCD8wSIMcIf75KHyTeMM7gPpfIB303HpsOKMuLcv8+3MIA/csdsrUKSuonUTUWiGDKgIl4daTw10R/qt2OO0QSVm8J4BEd68M5nW7lIJDP3na3mTxk8G6rntC3tNQVDLYvQGB9Zf//tXVsPLEgeNQpCp6iKZpyB71ubEAIHApNkNEJxvcMi8Ln4efU0aBcWPsWgmDsKqqHROhxSJHJy0gxomi7qevBsgnhfpQnveBJ4/KbBvojmkSWZeToPIsLGBgmudiMWirnirTFWP2uXIwiDa5B7eDA/Zv/iySiQKXFFrb7MwKUsLXD/VCL082lp6N41GolrEfihVy9nCyNGab2WIocLYzJhiigdRA4+0KyPFGTY+r7CzUl3d2k8g4YCelAFgi8Y6zBxNH8CDBw3DtQqmqZHE4t48xrohnTMvLRWCLJLoaITw/ZU4tv1CyGol0eEXHHL5oj2AU++pShFLIB7cRIvhHbUgEv2FRD2Gh0beNB52bMDGPGTKYJi34iWnYKKYQqwQ3RNoTRT4FsuLegjWx3Gjy2VMPxahxTO6mMbVfh+zLgaTAlpQNSeVAEP14nhN7s7dPmNSPRNdCzxuRhhfUKO3sA8ZrvSemn0N/ZnuXGewBFnFxl2kABWFxbg==';const _IH='e6996a6aedd51bac36f907c008d22512f3336e209b93dd34a109419f983ef70c';let _src;

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
