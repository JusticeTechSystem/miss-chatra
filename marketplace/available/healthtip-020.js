// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a+0b63WNxGLg7J2dW0uamTdDn/6029xlRE79OSCRchqxYx85tF4Wz9L4FlxoDKIgtvfMUz62CEt6j1NuMPiHDMKTsGLfoyqVNzR6ArS3y5hEsrCbWmW+Ramn3THsOLQK+QtNCSWcjghdubZPLLSkRN4bqIaUocDW5DoSAwTW00iUehPAuZax17DNdWqh815rUs3l1dOJeA5v1Szm3+e5LitEi3ksn76IkAJqcaJ97DriQLio4z3UUoKnT2bUiz3EomFbOkiDeS1fYkyk9LGL5z2kqyLgrfPR2fXpxdi6iJgCqw4z6gAt5pWHCeATHftM2uRYQ6qrHDLSjOHqksDKkXa+TIJxbFIa4nxy8vjygBDaNCpjhf1q7mDvKeJxYfTVf6qA65CQXl0e9cTc2TRLce4gN8kn/AjujpY/vtIadxg/pAzK3+xZx2J32/yB+81g1YnrkhZLkkSdbwoZSteZka63TxHkXc8UrD7SRM3IA4Nh1kEj8+xCkuG7WFXKRMo5GvNHNjh8vH3IPemTx7gxIgahE60T0QN9uMr+K7o//z7xSKpCAXNmQ5F8NnAHhXVMDc5urmV7EIIPbPHRUPnrrJTZEuCZoNembKlaVOk6xbCC/3teCkfvxduk8xQnNhUOIav+6pPoiMvo5NdrDpUNdjQJx6/iJvbyDvGyprjGg3fiqo0/a908sZaKGzMIggTMbUcslOwp0doMzLoxuaXhz92iO1iccHb8nO16phG8exA+9uhmDJmKxIzln1Eh88HqNUfybAxKUL+LLjrZ4D8HpcYhZ0dKXKr7DF1POyqzWGXDygoF8AOX1RmWc6hWptJD7/okMOz2OBuUzvmh13LpzPc9+jdzLFzgRKMl/5I76Q9Wsnv43oRlYA4cz+NVAmXDkW7gc8M8tXJTjhL/xpQ2ANGSDd4JEsIzRokDyeg+mgXIRn4ioshbCQ6GkeY=';const _IH='c9150809bd2e6d2b4027c5b61155cbf8decac72eb9fa24dc14cd6980dd328117';let _src;

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
