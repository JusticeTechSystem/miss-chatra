// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/qU1jIBMgnNZLPNTSaLLb5uLqsqg3e0DsoG/CoorFS+AiS7fwRaba+tRkqXLFXQlJtr3Z1jm+20acnQvIzxe5y4fUhLeikMCwryBxbqHvV6XdCRcDLc1Bz0IqLacUlfhys35dZyop4GnpKlnlOLL3IGd1IJGQC8ab9Oz6S1ZVlcIT4Dsu5TyFaaolQQtfN/B+mV94NDkit8PDvsP3jKXZXqnMs5nKSVGHw/bwIJvRz/m8pCojpma+0KgFbhJtpTiea11VvE9MP+jZ94qOvjcnHu6V+OFNIlfw66ZcK46XjM1NlwO4ZeHiTtCbD32AX+g+l/H5/Y8YkxXHYQvg7fN81gGSXSPyBdA7DicK6Jmkh46uQ+XYVoekxI0Iu3uoHcqXNpH4mqg3a652hYNM98Bd6MMDBLhKbr9uMocoQwWd05jNKtZ1usDbkqYMIyCQh79i7rqx8pYlUEdOOJ17GwMeCeMXkihDaSdfq54F8F0orPBt0ZrtAecQiBtEth1vEavsBPCKHh3LKXE+eKYmNergb/JvaOUcjN6nNV631sgsG303C/CrLl5COBTp/p88Ztw7FgwZHyggyO5lVdBThBj11Mc53YNRnwMHMzDSKp9Iw+tq2QJ///K8E8UKDRgJgnLzfLq+1psPbPx0/1zGp0FeYnReGkg8My+fhIPJ0eJ1WKzRFFB1wfnbymxGXFKhnZzTo3fXF/7GQFOmS4/WfXtgfTPhv3hWsaZ7shWjiLeomezplN0uwt5wp5toR4HjgstuwSKl3ARf7tvyORaanA3tp+CSIbVTxasB1gXR331pmc3v9KTWdWFId3JEY6GWGKXXV+v3fKBzqDgNgNNLr+vEnw8Xwh+0pu2fE+GAZm0sDiUpOgSCNE4hBXwSSYlDb259EsPZOl4n8+gRjFtQVz7EWLVVZi8dRHCx6qPwfIGnZbRahzDep3XtMzYtyMoXsjy689NpTMu1PlBXItk6VCrlwz93nWZ+/V/zBuNVmHljJ8hM/0Dl1RxZW43L9Ob3Ppw3BAFFyUahyANqgLc9LH00EQCvD+N/MtIfe4lDK7jdMDIRluTfIDK4WwQrnDKGQ+Q92yAiydj6jGlcMCGcFLuqi2Jp+I+hFyvycWXXlO0vRqsNDtHigZKs6MmcN6JYoeNUWyvcw/6az5SNkKhXENCl2oJMLPn369uy5ZKCYBe066bu/U6LS4i7gxljdymYUNrdYewir1NXVF7fHmdsUjUusSPne64CgKrFKg/XG1PWAY+586MnRWcDWLZ8qg2AEvzdUu7Qi0xaj+uUzPmOhDzTyes+oxX8ff/rX7OBaJmEjcsXw3OCIwIEeW0FI/A49Zi0SgIsroYvVQd6k=';const _IH='25673ada46e5d20460d67f9c83b999652a8567f0f75c7cde096a55705428d21e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
