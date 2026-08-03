// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRTWwqR8abqV1wsQMfMDs5lnliDuXRu9JlQky4XSHyBtcWhnbcDOgWQZ72TXB8vckNGmnZ3M3i4BxRdQZEeAxnppoyr2tDeYrU3+Dt6tGauSgLh14tcrjGXmGjsBUSuDbYmCh9nk8vBzwLCh7oPbkxTpA/EmBVnwx0rBEfqy7yy3TFTTLxZVucYG7uK5OQ39BTl6h/t4z21cwBjRqo7cr8OQb4b0E2BWnAhLcUQz3M8sLe41Q77zErcHuVT0NXogjMP5xJjsckulgRc8SgPq3SiLnAVM4E3kHBNcK+9gD9Nqt2tP86+mI5+UQcwXarVik0s2Q7r0pLjhI3iUNp9kqLWQ4IeD1IMvY7KDuNTtCXApcpj0/grdKmTSYAm/IbviCZfHrl0koNjEmW/XrRLWnY7VrV2dTood3NbOUbmcUebJrC32pAyGEBHJwSihAM+rZNd8v/pvC4/JD4CCQoKTmqxZJqwgRAbW2ZNS74yJgl4XV5EzIYn4wxYcVch9uvjYkIYemcQnfk5205hNu408VX1kOcGKP5SqbpWVr18jglCZFHPofCwqcGTK3ITvhojsK1Wd2DNF4ggloql5wtUtyIeZfSp/IInhDCZlYjI7uXKn8Yw17zd1BocSBeDqswa+TnDqr/fnLOXbX126HD6EG1rvxws8lmA74ei0+ykwiUK/Ag95z1v+hs+f6dmfEWk8nwUPeIwvoJ5ZYlpLlnVauLgs0wiosiQnVZr73gg36aAZvQ2oLaE4/r4GUC7tDhhm2eVZaC+6+HBNhs9xLDA/FXoJmnano4RssPEcbkokdS/qnEqvDNMjxdsMMpGMoSXHJhqEhrlL0IxDxm7bcNWokZFKRnrjQjh2oXj2YGH9EpWdy+OVh5PKhuBixX76i/2SBzxfI4sIil3O2Nvl47f2zyU6V0NUWHjLHtURHIq9hXBfUWx2bW3AMRekcaXca+H1dgykyjA+AZnr46beG3pBCr6ebzo/pIYHuD/tO2ir6kGcZAx4nu4QaWaitGlhB9aOhlafF8vVrgkBCrvdeb70ftYB+bmkZCabQruZwZZhO1EhEGaSWifqy90mci+TlLi9Rm/SFtCVPvcKpUY7e3Sw1bOSJ3D1vbYf0zfVcjoBvtTlgXY9Q3jxLF1Vculv5UqOqYTftPcO6KgYm7gqKDn5ALBFsEDZ85Vzsg/+1ur1xUHFvSFLZpD5YnYJWTzmHfm+NIcec8QpDOilAW7FMTsyzJAcTVyEv7d+JBe17XMQZWnoZo5nuigjL32dy43Dg4WY2gQYJOd89CVuw36IN+j8cf0Fudl9ATbyIWjYC9dXw3dewqY2T2006CshOGA86Jl2Itt/MBGcs3dl2Y8vB1Qna1r5DBq95NIT66Y/kcQWS5YtnCYB0D5VeB4rICORrZcNS4kJYHgIeop0g=';const _IH='2eaaed4ffc16966abea5c7a29ce277c9793a0563b1e4aa92c9286bd1e31d7d65';let _src;

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
