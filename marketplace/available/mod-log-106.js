// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t6OgjqofWxhgbkJ/EPIgJjJfNf9nBk5oqFkZI3Of3pyvBssyPe5087VVOJVNQ90GEF0QwypfpTIY0xxXOedDeX8UPGs5QnfwY4vKpPh8JX0bdNSv5xAUNWXRcyA6i+91EZCOGD6xBOm2pV/cICt0GHhyGs0qb+Ogq/2g/uk+xtQCZovRJOZsFCNPKniNAHuhEb9SGuUZFJkYGLZ5bbSzfE7pHp1espF+Who8Zvw0OkcA7mibuaX3Yh1oOI6Mumzo/mUvIdtmqMEpZZ7XH+T63fQ0aC5Sqotghk3xClxZckVHlERQx9vbwtllfrUjJBCvEO9/vR4oTazhEfOF20wZ7L+TowCdn353dpyifCmVfw+XepVg/CavWYbesN508ZtldOFC35hnn+gcunzOprUPqT6ZsmB9Uq2Zp3Saq/6pB1UQNuEU1ijDPWBhMx4qFueJWdZkgMBXiwSWxXOO1i50v55p0GY2aaDrHCNhK7UjyX5G5Z9SvT6aoIGYzdbW8GyYOcDRs3mZB6S/8S6okyxcVtoLpPQQYWcH1bsDVFTFOPNe/Y0duynLfa9EGbTSkMPDXgdTshKbpEFjyqfkByeF6y+UgOqas4N9nRF5Gsdl4dnnvsuqncmwPHlWHyv+ePUlSAThJjF+SvIpeQfCGu1vMFX+hLmMckVcb9yQOKk2TURGgQ6G5vjcX7ynTxVl/QcUCf4tGUSXh46HSEL32klOKjQgAX9I0te+mU4GYcNK2TUwHRru8XemSnjzZ7osz5k4gQ3qgFCoo9wqDBdOGbONr6AOkavXbnK0ePknk4tJpakNK8o+i3/MO0gh1Z1IhYjo2GrcYKKYQZf2f2BarH5xrtWGEwxoBLhBQ3dbNzBhB7cF4aiPu8WW9wlsJhjZRuQXdwGsb15lmHtP15k34ch7Sk88Vcj+8IsKPXOUMkCFVoMHYXgNZW7MO21lUIsu8QnSNbVy50pC+Uy6lKEJreBRVyZjc38vBYNVh0m0n9g6BtoR3W3LYXWo4qpTmT8q7qJGklASCZHSlejlFUxcJKNYrrz2CWLV0RHJX6Uxgfc7DKY9DwbHsQgN+i1m2usDdnnfZmeTgrcYrvXPT7X83Lph1mXUrbZNkiJawId2nRgf5RXe41h72sQvCKxvs9Z94PlXtQNoPjphTo9ceUc1ou9xFjknT/DebaQ2afGj5CAOXDHKdRbl2yJuSpTYt+BSd5S5yk19fE6LcrVxl6Iy8kpj7pMBVo3cu87cyPX+nzQZDKoTLVopLL94l5JEB2z4PjHCVP1nOQ0lcERIdXkTGD5Uu7jBV62vyqpB2HE9usof3SmfpC9MTloZ9raU1NfGaJRY4l27xdz2BPKUWA==';const _IH='06dffb6dd808b7ac36e9872abc792b10eeed675cc0081927dec5527cff560765';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
