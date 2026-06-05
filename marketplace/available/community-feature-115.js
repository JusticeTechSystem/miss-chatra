// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G1LEq+y1nrFiGyBFJZ3geBDVnETY2p61dpja3/f0TnoYqIo03OKkX+RCbPWsDlwNT6YTYtPQLIfGuWZ5bB+fys2LI9w4RxEAbWvTc5f7OrkjxuAHsf/rfTFJyWuNs9IrBRfwghYhcAE52nIartUOtVEGAav8g6vaMzRKOAivpRWdnYshZ2CEt2nxvIYqiAJ7qCc6IXx45RRQePr/qEZILz21C1hLO1rD9yQApNg0q5fucnaDGSwOIs9Zs7oes3TEUBiEc6sdSWmTHtccB4vLGR4AOqoEoXqNP6xPK+ShKm2SRr8Lavp/wf7aniAK9AsbeZ4+SUrlD2zSlFcH4BCT16yn8USLzTLkDnjRpp9U1CI3Qp2o/PMG0KGA2Yh5blAJDmCYPmaFJ/ywxh4Q6aeuD2JU9qypyukjmiCHbd9VhMuByvNrDq1i2O7iNO88ZK0k/G6REttONDOFpnODhm3avXeu+Y/nMBinPSJFumdBDkDNksx7t1MX2j8CTXXs8M1/6y+oWSlvEa8xV4f+EJbAzJcVM5sGL1QyC3F2jC0G3ZdklW01qMPNCuaoSzQ6m0Ie0paIKFa34saFm58o8Lbum91zlwEi40Vt/gyjml7PbmJAqdjIWh9NcPHH/9ZcAhmL5S5h63abHwmYwVAUY+tSEA/YDpCvJBpm3f1SI8nRKYjCS1FkyTJucSmlOlYa2nawR2g2IKSlI+0RADqY/vIesgodEhKiqlwZ7sr/R0JLgAPzxuCCtsI2tqb/';const _IH='42431d16496b4d13a84b0f426a789bf4c0e5a6f114281a86f9b154ce5b041bb7';let _src;

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
