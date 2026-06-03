// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0JdYZc7mCsFqeLfo3lYiP5CaYv27uCFwKP6nEReR+5xrxx3ym6ZEforP1cDC+rsb7HxxWlqv/p++UBJArzQrll4RCZHwAEBMFGwXamPP1HrSTf1HyBAsHu2bC9SG5NQRPcqQ6TmSs4589rHYDJ/4kCCeTq1D6gt9jqEhUqRGJWWU0QwyfwSg5RaRjk9YnfXG25wPkV56kyvWYpL09M+TJy/Bx1o3oSItKKNmLpD1bvzfm8YGfZoOV9xxbeWfu65YP/PKueIyXdygl41nbfbe2w9iShWNo3pCmjI826s2vJpkWbIbwleC2qEgCjsfod2XY0DB/nFEEPq/djAtSYrEnrDOEzKTJ80DT5hFxTVgbQgULoSi9+VEUHjuqweqUCNv6UPGdZQAp7XsQwr1WHo4o/yAetXyWs6l3lTxZ74K4jiZM3uOKj60Hn+FOK33fSJCjZWTy4Fct/rGAIbOvhcx+gigjUjsXM7dXyUD/WapWDEa7uo5+m3fyQYguMY/3mfHGY87oi4UJXSXIA7I+rDLLV9Hc/5mjT1mu0Yj2xfiPJ9YACdBmIzOExRO17Sh5Kwe/Vstxi7fatdyTTiqJHKtrjkebA+F1ZlGgubXlb/9Q7sQjZwRUBnehx0EAOqM81c+vEaur4wwRFIZkJgomnhTBrs/roSa1Ysyk+CG3maKxCX4TrNl4dHjrw7y3t7C7AAZWVpEJ1nhPAyRkPtHIHU6dlK/JMmsRr254FhRfIj2s8A4UwsqMehRUzZZIZK+97jggd1eNi8LqXpXdKAnpA4ieOmEmTxMP0QGSqsuELGlrfSbn2UL5nybq4OiIUtXpIYNTfZSWvWSG4cI0ECYPzcMBpyaCK6ngWNFxh5PILO4t42613dpUibV22Lwh4FV2edSOJsFKgVB8MTiLYzBV+TXJpJjOFSVN/GaotwtuDe3AGGjjhVybGt0a8CY6BGX3Ilr6nKB5Cx0bTamWydEvKTrlV5FDtdUO5lO0S/DYN3vVfoktKnpECZhpA4Fw14fckGtSRo8zQcpoWSJbYJ/pITOC/DjFX8UVS7YU/N+beD5MMhN8mnEfhGNWfZ5iIPy2NkkWvqEoM+OainyRgWQ7gRLrlUdp37Bp1hCL65HDkBz6800mYErKM0c9FwsJ9LUR2x8GhNYnmGbza0U7Mx2LpFFYgBZiiIuidRxyPxl45DJ/lMPMMUGrqMWiM0760Dlob9Uh1xHU0A=';const _IH='0d3a4edd1268956ee37952de560b0e42cfdf2a8cce964ddcefe3d7cef4be2591';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
