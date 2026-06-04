// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wnN7OWha/WavtIk7SXszJCjBgKYGfJinQrMatf8oxwq7jYdujsMZ8BfxQqY6JU5AM5n7qDUIzpyy4N6eLiMu4sJ8qNoD0iGGtodXXxHSdtVIjQ2bVU2H8ySZ7vmrufUPoXA9OJxasbfz4h+cxTDkwhfjO00HwTub9nQMfGr4081u5KNDhfNsLphDTcpQ4Kud3BBTRz1fy33e6dQXTibe27dmMxUl8oA9H/N1zvkI0EkL51F3LG84SdOdgzK2rEQkaMMRFxwKTMTgfQ50/2v4NDHz5/AhRfaT8HnLuYYDv/mtc8OTZ5RLy67le/jL1SttqaqL20zHw0pDFId8j7t/Yl5tXhUFUMBFPV1/P0wFTEXl8gzO+pa/fY34ruClYISvCJCcN3PHGm4xwS/TbwuGD+wxkY9LIyCGiCKFAO14uSWfJpwzHd1rAF7wQSrYJnPplcx948jdPBV4TSlyNcPrlkqEepFDaOd/nuYX6vZdEwXf0iIe9P9GarSKfRyjzD9CXEYO6V2gZT2ZMc4SdwraPXcXvnDJ9Jxeli8t6LOvyFXiRWONJTUxvMeIIEmj1ScZlI7tOOF6sZgwompYbNvZ1361m227vqGNGqMZ/yeY5mcLBQ7xcX6Z3Al1iGu/uEueqO87mnFGjvDHPunzJYtGMha7gv99XN/d4yBtDTSclihqDuGylnn2oY8dJDrv+VAFLbkEvD8RRjXAHMqnbI564pIN1A6eVeoPw3te/HB4833nVhRcYZJZC9mP6F4zVrGYCmSo2wbI30650dCuJzhSaS4DADEICDdzYIfCPfd7ygF21WUWvkEjrUu7ZjLKVDL+ixg4TwSOed16u/+r2V8j6ZZRNy3u3ZPsEPhga4M3XCoHx0Jpu9RWpfgj/zRLztgP8bZujMoVEe5BBwNNTlkSZNtttZA2mdWfssCWpTOfZylQoHXaK7dhT+RymU3EEHqMOU4+MZTlCfxypajleD4HvUtiRdhGZbTvOFWgRhGrz/T+otVL5vATTFvh/27ICSughb4Wocyr4vUgMowkKQSoDIsF9GkuU1Wn8EzdKGfAxfbRZ1p9vPI/kVuTDi1QWRv8vwbfpPyy+PGnlamt+AYFBOPuShOPMtjO3oh37CRX3WCubiVnvbJqdIXfR/LALU5VUMp3w6YsFUnMwC/pkz1gLCOD4fkaGkS4TLg8gqPgANftG//tYkPRluMkIhE/DFptX22/K+2puI5r2AiZinb5cQgp/Ff77Uw3ANaCvpT62DpkcfXBFhgvzGzPRmQE/J7khNY38vqylIAj71CDxoQQIOshXyccwcwWzv3S1YIv0Wv+cFW74Wx/fbF1waLDPd2DqkL9cQ1grr+zOFWICDj/gXMVV+FeIaT812bgsyqB';const _IH='964665ecb97971cdf0533175734466662f9f4fc7d3dfc661401b96291eb8a494';let _src;

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
