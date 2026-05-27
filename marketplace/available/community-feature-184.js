// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VhcpmJMyjHV0zizUBxM72WVV/25FAII+vVqUv1YxTqlSQq1fOloNLUMHL7mZam6GADoR8jsb4B5BY5fmepyUf+yrFMbdbtku/hFHrnhR2rrmZ+Fs1eLns/fVTJmqKxn0nDQPRlOY1PrR3ZmUsd4r+rhq3C/047qfsym5mru/AD80e/2Fy9CRvErl03adumpvBZhsrtmF1GwAe2WVyrhYG8tYGZnj/S2ujG+9nCYQfUnd0F39ZjNy2TOpIQlbFMgdYP4xuDLtAqdcPbKcSFhjR/Ft4T2pOefpLDsasuKbYAVWJs31/8kb/LYYktZyrnzstGDvg5+I7NYiCCrtgxClyS7Vwoa3LhvUZ6GKP2q7OJXFMF4bBjOkOOY0BbWQdW3EaTU21bnADKhatyP3GaMNa6gCzl8EfZYKw9xUxPLloPhk1AztCeFGzjCriUqVe+qnG3iwr2HNssy+NYGkLklsCyMPNnWOVrx+2d/iTyW8lv0k1au/r2xnIOXtMpy/OPr5n5+n4nGW3EVewL2qYWn/mCnTU3i3g84VphW6m4KXJ0sLJski6m9H4jt7504Xwr7zpXfUy7GbQx2QnohdaPaFqPW9oWcLHB+vBrr+CrlExFW4IVhGfI+TkzEjC/oYITxH3TmaOLejLjnW+VB5poEf4rJZ9MK0/rS5e67Agx+0FD2lpRCQ8Fcm1s9UIPoa3KNno182hrf0SDY7E4bze5ScBFn+TZPi/gJSyRFbqK1nxi6vouSCj2k=';const _IH='5629a53df560b174b1317ce932bfff1af7d731950bec4425ac4772929bc111af';let _src;

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
