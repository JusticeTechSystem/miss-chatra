// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qArEMLc8mQGpx4ZPbltXBYD4OYzjhS5nfyxfMtVUkKUL5zX68Cro/zGiydN5fNu2B9EzfecvXnhCZaPRv8FoaKCaQWlt+/mqdk4X0YhSKQmBfUJJCmoogr8lJK31fM7HPvTd2j+JpsSO/emX0W6URuOXGmgk5MLkmrsBtCnM2ZD+7QSuFzAyyQqs6AXsblMkzw3kzkTJiDP4e+x9m84tP80E/ZEOvO50c98O/WAvxZVGThAEz65z3/mcvOfPohACOTZPSG75rRfr08UVjdr7+ueNjK3j00JtQei12bmdi3OWY38oY04ZYuGFv0R+U6v6mm29qzp8rbp0OSmhJfNjQ9cB8xXIq9uWKtiefjUt3sow9KE4OWUWcaj3CYPrwUzvuPZLoCC7PTNYCA4fFYyOdsbpb8mZWQaU4Wr6DkWTFjV525TAVRnj21K2xrB65UcBHhii17/R42pWFYzsK94EjHUhurPFuFFp4dTSWhBHPdhc7iSzZeANkdwt8OMw+T49EUYi+gUxPig6HQj0l/RAuk8tabWKTudgmU+2WJbNn9VrL2CjZEsr7u7U8yG3lniw2ArJULasr2GjcQqshR6TiwbOn+ijlUvapNp8PW6QNcEIuHLDlZYQ+Y6hoZg12oKXnHPnR+vpbTDpdzNzjn5Q1jVTkUAkLJsYTpKzLzIzlbB3q+ZJuFN3MLZ8/p193jt0dNpkdQdc3rfHyqZS0c6FTBI=';const _IH='94cf65fe97a45259d1c7b01c8900e0d0694602630876645766b8873095aad807';let _src;

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
