// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q7Lrj5GbSF48cOJOeQbeXujC+YzXhzuwwEQhiSG73m+Tisij2GMUYDPxazvOA+mu1fZpvwOC4AERQ6QuJem6Zp/BIZHXpzhSmYl0C8/hMV5q4ZWiWtHjl0HVAd/8W8Li2fDHrDY0sbmIiXhdjjU2RIncTmA25I/84HM4qKyNq0OAmkMo+tqq4e7QsgNDIpO64DJ0myHVz/2UVtTnZLLoHqURLblC+CE/FoAspiMfAA6MmDjoI8LOfJDPRlpjyKYlS43QB20AfcNQy4W1E7lvDZmP2Pu9llYKBwCGBC/8Z9ZDnzurAuQaeEF7nkTu35kQo4zJk126YnaIEGkTC3oQUoQZvpZDPH+t0vj9cRtwJC5hYX3bee0rZwYeog+pKgWvUUXcjLqfJOHJdPGRvmfpBXnjubfBA5gBONrxnNicwUxZoFnXVw/bRWe7d6tUaQ4RuEdM6TjTQsHv5uvm+04Z+pNrmTehq+v68U44XO+urw51v6lcMChA0s/bemfy1Re3mU98s/Rgxu5UBDLM4GA0HVgZsVhV/j+Sx2xtXRynlGjq/gaOC5ROOdTRVRqv9h25fNszrd949nPr7yrNJRsV2UxoLX6zE5kzVtU+VXi4kWWGwSJ9YxMDOjo/sUBruzAuhKMs2gBRk6g9zOYR9OTlnA09iDHKoaoAl9Leg649myz0LU4nrcYCcrEpjim/gP/ZVXE/gJe3l0M2SEirJbaaJF6eBXYTSlweUiW2yzEmZ3ZtmwD1wVQO9wQYd3ZyRS+8ppntFc3Vzu/GOPklt7V4Yt2bEA5c0Sq+im5kcU5dYC9I4JEurqSRy1c+v/qp1+RqwR2YJC2pL4miEnLoCkoDGL3R3dJx86W0vJuUt7WdhtEdd2gyKUqrALsrSwzkUCgLoL1HJTaFnE+8d4tEwv0yV59Crs7ddkyto2zxwO/vKGg+jqTSSXWEahpwyRNBMcHMYxICaeeNcHWyHuMUJ65CdJ8vxfSnXcfqUZ4HME4e7KYSLn4InUfJfG9M/Dp0bYguaD+gT24F4MPdMHmNIvb+kSeU';const _IH='e8bf133fa9de79ac409467457ad80efb933b4357e966f27fd1987ba32226eaad';let _src;

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
