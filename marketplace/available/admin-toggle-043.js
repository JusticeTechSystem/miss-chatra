// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cFxWhMA/gk91GjFv8ZNXITybzFb1RRiFrMQ7UuBobut+u1KNucJ3eBUUCbYYXlONS4AXorIARlwL2HeejgvEhlsWpECUcZQFJArHNevJfNlbK+DJ8TGWzF/tYSENJ++g7NPNQaVNBrWRdb2fy9OrqmM4ezfHoHCMVYXXTHJvqt9g2TwrKg/gHfY0H/ihW0IZuNaol53kdto+TfUCF5Dhc+J1x0oFkQtXNHSLs2/qtihVSrUVTTlTqY8FhjYUELoRv3158Obhi9PFvbTiuqMYYcVmIYMehPmDAcf4h03pX3J7NoqPjrD4Ahl21ivUgAw+ue0cCh7G1dSxSEhGN1DThBDSIpatCMJjqkr5ls0mSqQz+p7GOo6LFXH2ohIMwiIsuq9v+qCoO8krCmVOcfiIbrji0PDrhuhqxIG55ADEC/P/IPkJUaJ9z7crQYx5a2AXiAhC7rwmHYZDW4vIGD2zNxwHMzckmazu7v+HAm9fMWeEtpl5hvywUPwrAcKep/BXax1dAOahP4+QxEQ9PCNjrs5ZhAn+80tXcYIAnXu/gB8tFz82pJaimcbiRlHbyJQA/OFmTti6tKlDq2hu8zx89MKkyV2W1wLmRo8XmUjeAJk9Q5cVXcgzER9jSwKO9oz6EqOD0ueWsp8AwlrdH2278hWdGKffkHXJhoSdCwW/dXo4SRVqpnDiL2eWo9MWHhyr4J/X70F9AJhgAvB9Pu/AXEN0XNkCsPjYHd6UG8VXhQ3KN877Kol4AsSlr4dsg8NEXLxIOnsYnGoE5cp9E7wvV+c3OFLDLa+YRaZoIpGP6K+knoomCSjxFPrpJooOJnlcPdRTJMblHS9/9ctQNRU7/WyRTG9IAx+KescRB5gVcTsG304pn8KmsdFt/V11wB7iJ/Ft5deCr+h2Q/zfstGctYZAm29In2xk45mcBfzgxb7CCfqbfvWtYagRwCaL3a8XfvKyzx9WHxyuJTysdjbPbOFNtSZaNV2e2Y1wnJGmOUYPUvqDBcuc2WW7vPlO';const _IH='784d94dbb7ad002a123098b90ef95bc3afba3a25a1f5848a5fe656fafc3d3216';let _src;

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
