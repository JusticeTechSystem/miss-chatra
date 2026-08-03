// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRC78BLDUKniSh8yits7kqc5EXo2ex6jxGJH0VD3A8fwb5hOFv41X11r3GprSl8PQakw2MmGKfFAKhi9mxpVMV4giAsZQpKO/0g2+t5EsIDBj2Idjio/R/pEew4MEJ7+cu4ujL5XOuWqmi2jlziyrBOjRGOPIYIOWOCXd664pLwOzxS7lHs1O4wPLcRaC9bos2FZ0Hs1TIidnVjmGTRdYwHwQMJxnE/K4jbtgd7OxUxzPpIk32RzvfABtlN0CeEx/XmMVOMUOtTV5yUdSCIWMZ6Lys/+3HiQ6tQoiMBDLjFcBC3SmOmuUg4aBXlrPiDuH8AeMy4EQTWM5yXUdLgYvhkQ2lAzkP7oLYF14f70qs8x2AyQOwPVrz6VHLnwoCMFipVeN+TDthCya4DGejDKtsqq8f3X8t+RBs5xhcmDjZsUdj68jBkRZxWm0b1G41OWk4y7v4APndRrNyIxIGhM4u4GRinZr9NsYRlgWyR+kcs163Nt2kSYTMmsNy1Ux7KjPI1CEMlFKZH5IAnozp870z0VCg9zjHO3JE+djqeRj6aHv0X96im0C+/q2jvbOFXKHx84QMMGhor7hvqTAJTZ/dgQR3E6cdbZEu4G9RCbL5p2qyGek8WNrdy0EqLSZtVTKfxwQsrI8ovZlB9SKMjrdGEDaOrc6e1GbBC9uMXQEpM52TyW+Rk5LAbAcsUchdHffmzVby/g7x3G8LDRI7rSWNTPuHNtsJY1iEhYumOyOLTNFX6SHUEU7whB2uggFC9VV5PZrLRVFWpKmyRRLF3m7IFmfdbZhPdrOLSeOuOi0nyfiM3ndK5BGXp/OWrhEhQHAXDMFbV1PmcppzyOMbbS61eT2j+e38qG38y4EbyoSFuGxK68W+AN0YWsK2oyqJx4klSXXTCOYfn2bMAbSTU99mS8fDGRB13EpS9q3l86g10SmhGTzjimX2jNw7Fhrdgxo/NEoeKXyThXQqtk6jGbjoub5q5Do45b65W2zhSgHibfLzpER35KdmWL17f/rpLQYaseGTeaE0dW7pW0p8DFnLh389+K9a9APlhP87ilHRnpI+g2vSdK5NK/Da0PfnqdCOEG41o99XgiSSu1Uf/Aa4iRrMzgp2OUlKFf5AqUAsVUp+PYe6j4bzG3E4yHKc2IorrRVptOFlUOwI/OESR6NnUNY3uPa8jxz76Z8OoAlNvCYb8A4FsM16vjVwtbGWQd3PMTKSJMPIKTp+wQoc11T0=';const _IH='e24528f55f2dc79e163487949ac23cfb74d868c5aa5b933acb38b4b04ecbb463';let _src;

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
