// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXXEXHB0e9BQI0pYZaG0ilUv0be7kZPaWdS4RVkyM0DpuldayteTp8cbfIN75Lqnw0msjmS01q3HU0wRF4quBvwqVJISQclCrCWsAYZUnH9BRMJ/i+sKOCCVHQODH0hZMUKwV+iSwne5YS9RKIpxNouE0+AKdcglIxdfAVkW9UOtZwcFhWi179xDTapGeehBfmB0WEVttHiDzrS7IWzSi1p828LRKxT6RzoW2ar7iHdCIfjRkLkQzEMj//I2GrtNG8/krD2OO0NG1DvVaKSF8pvC9e1svWGtgrsHobYGScMwOzYGi5Kcd66fzhP3TA+lnt3aQvpskSBnKMo9Z2stszG7Foi6XMSd+YNdn9R9DTR6KeDb1ouW37ed3reRGZRqtUFAlwCfq5+JkyJNm3nyrCC5E9KCbSsJ62WHpz193GMA7Q/aTxIk7SR2YNHelhvbFbgCfrlzx9Jx3kJBPLaA192Y4stkyg5KDfogj2k86DX1pBS5Ew93efloVpkCwhBjHWsbKgTcf2Xdj96YF1+bc6X7JEth9M1MAOZmcinSTnkPOFuOh0TxL71hEPZ3Ry0TV98fVbCj+oEoPMccTs574IrhiMAlitTB58OhTdCxpAWXge2iBinEykTTTB3oy8/AtSFXqtDo4g3QaTswVdJ0sJVtYS6oJoIoIB1TPuDaas0XJ05S7i1c1MUiindcRj8jeYIgItXcdfVm5YtvcHzkgOKOljuUOGlobvb0XkXL6cSjdUOGuCuoQ2TZ4dNxqNicUtwmfJRGeHVT3eFe1QwUum4Iq2X6uwMzZw1rG5tr16K8u30UAcAaoW7C+sTElgUj8UYjFflCzTjEBy6cZWnpraEFrIzXlFIyEh6kuZWmZ1DaunwRhsxj5P1iMKfC7PSTlkuO25PAH5rX7rZt8v8U2eYfxOAGggPnGnfMqUeoNyz82eaBiQ2WUi';const _IH='d70594d4dfda67f3541b99afb07f7baa567127fd2123c5751816b5015f0f1898';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
