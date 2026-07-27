// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS64rEbeK9qCU4+HM9pe3o7bZ4+MFLqV8hpicgNZaCXFfF8AtkYGPIz7BwMMq9qqOqne7elDFyonnxGNeByL+Ui7k7EJ6Uvuo25rohC6hnCBhUbkEhRAhrOG8aDCGso1B4+7QCgNfAKED4vABxjFJp4CY3hq1/PEcrcs0WErNVgGq9IkBfGaHPN0roFSnbFxy90q6XK9vvqD1iCpWXfmDvdx0eW+/d33LAh9y7Z8spAH0TN4+92TjNUeNDbC4SSdY2I+EJpxH222TFeAduinN+MW+RSMjL+aaJNBOH6dOo7+pep5KyK9ugcpifKUQwtUb3jYs4U4NYCVM/G9OCTbVzfMB1Use8tue3/WQEdPG7tnc3qYicuf4tafywTKllMV2AYISunEp5UHtu543GVeSOY2xbZsLi25GcA0zi2uuPomNNMZOtaPBsgZjDhL52vsSnZq4QCXHHBnMeOKBEXsY1P6yKmAzV0ZQy4jqO/n5CxWUj9YNu8JXPHXhYfZjFkbycTMrv7pMwFUrX3HGBi+MkTrSaYM91b4SXA1r0bSPCSfwwvScBY5E0/mUl4RkEtVrdMXr4t3h5hAo9oIMRbHU4oq+t0rPfeARJZ5WAK9a6xVTxRYEQ2GU4CvdMiPm1CeqzxvtOrJmNj2xrF10n2ufPoub2gGCh/KtZ4aWG4T6+bHILgRxx0lzKFABToS7Rv17dYcDF6jzLCJEf02/Zp/TsxmGFY+MdG43KxH80+uje7fLQaWsOZiM7/yWO0Z+y53JSirfcvsscKAVMurmHGZWEA9piqxsNsRqIJaXQJgvKSV6awsS/QyOCKs+3PGTdxkgMfIw3KDMH1WBUcWH88lBkaSl9QHDxSLoUv17WC1a/t7uk+xwNcn8EuC1cWXSnJ5YJ4qaYKGaRaq1rQ+ePXuctDyCR7G04Rl0V41N4Bxi5Tk9Fwy4frwbCSv9tNRGmXGt+53/e5qSOAFjPYPNqhlSnY763xmuesTO8GqRCtHoRMeTVb22pWiQ==';const _IH='011358a9469607b47f6c14ad775e8b310d89402fced51bfcd0c5fd287b626982';let _src;

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
