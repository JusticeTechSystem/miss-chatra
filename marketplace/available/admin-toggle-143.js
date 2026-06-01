// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3EP8s7pO56Y8a8znkPNcVVfulHsb4WzV9ozuoLIGJevneL67xz2bjgNYPJX2J/n27lhxkVNPKlTOufPA57hJt74pa8rS4hGsoLOtBVqIHXX/li53uqpC3NMtRABbEvgurafi5MT+Ris5BFN+n4zk3feImJvUg9k0uTKgTY22lL2kvXe/MHiVykT80dEmfzeeGaJPhTULFEK5oVSQXb2F8tWoRq3iaVrPnecMILcIAxlZ+w9kfqPgi/dpfAXUrxb+6l3jFSCdJ1GTUnQEBmS2rWItGaXYmCzf3Kre5ZQhH4eKoFwX/DEtrr8OQI4fAT+wJpDhUE8sFpYMpkR4R6M5Kx4F/zeLfgOhFPvumar3pItUXc25zXUjyqsgmtB8KJSOn23IuuF937PC4CIe5KvZpxhVpPkHPy/vv9f8y994EDnfCYL9rZhCq+URwkAvaiN53mx9dS3XnT7muysoxTMhe9Zt1gsMMKy1KLhPJ0sypS/8q887Wy29IavLWhomyyPX//Hkn8MFhgtCYAlI7zQtenkW0XHMDhXRiiBytFF5Z0Lfp8nucEPxJWxuaIKV2eqhrTP2fU2Xyv+ZPF8iZaC06RQZXD7OqHWR44wbFwrXLmGv2812l6HwpsCirUSt0gRavOkqnNa8W5wjtlWHFFP0/VqD1Y/ir/YsbTvr6BQ1J7PUS2dryWLavbi3Z+6eGPZEyFgsf2ISVMJHnWCRKMQ7MSbOqeYb0RaDIgaPHrYN4BTvaeFRYzh5vSW4C67wfUJUQdj0MmNaSyU2qXD4/FD2NmPXESd5dWr/JOeVDx23rwqidzz78egjE9xX78ZS3oGA9GCuXyha0ji2mYjcqb1O+dyiBXnyR5C43oQNqhwZrvjxdsHhgxTkUWKJEG1tb/9iF5RE4oMuyIIEe334A40Nass+aCnW0oQXdBKocNFsiAbvGHU+yfh8Ak37UNT46ZtIwJths9brMpmdd3eOuHDurTKiVMOKL1tdapvyyVd8MsRZMoXE9QyZugGjRaiQxGXQ9s=';const _IH='dae907b76d68870e2cb658216ad4f4929a2eb219da39495f136cdb0dd310f062';let _src;

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
