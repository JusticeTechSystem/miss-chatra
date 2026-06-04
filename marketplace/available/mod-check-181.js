// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p+PvLFZCOS9G00NhIZHeZFBglf/DhvHj1gy2YJ3QYlnwXewNsgOiUNgObFB7SPalGPQGTEG50gSJfCorASX7FRQ9jxeWk3I1Ir6gHryErbe4XMRXXj+PA36ASjoBrEPnviUt86ZTEOoqIDN4rW5eOF4/tIcmGC/CEdFtV+JTWldJQbw5ndyc8JVjWd8jjTf3db1BJWRxT7cpZ9Ulau0vnAyTsl76BRomxEOVeT8LMzPO14iz6s966ifbYleqWP2Z8Z3vUsBpP4jIhGdkyb55j+f2d5xQpKa9QePhwD/GzFcPvcJouXPHGG4iOMf/XKpN2n/lLT8XnqR8AcUKTSRpUae5CoOjDyJ8wrqePdFG+4AJEBB3RlXRjRNON0jhfPXSJGQh7cUcYstZjMuJ62QWR/oYb3pPsUhzP1aYg+GqQvRAet06OLW+OctAwXTwV8aTcLowc/q/Q9z54MdFP79gihkwMyckLFzQ+zbaCYTrhqmLqzE2mBBQT/3CXT4uIlkLHKRqLhsI+rqvcV1rN8BpntZLH2uNxrQ1SRKQT+Loq6Fwo/DJKPji9jlg8aZ9VNcrcOua/ZZMvDvlD2/fGKKTZug2+kKVJi2w274WHKVP1a4Tw5cxId/T4hT+mneHjnTv+T1KBqfrAvi1omSPTVY//KwYKOxQapCmSWVHcRH6xXx+tmoGXDKjDftkjKm3ZrneknOhkW9O98o/UJOYly4pm/MbPL346XASwA7pYGE0CO+i09XO3ni5d7jMgx27uSEb984IHv3qNS5pqY8VihTvD7//2LuNDa0WD0n0xchG2qO6Wzhd1j1SwQZbWw0Z5A/sLDUE45IuDngtaxwJqqR6Z9BM96Wf/tvGXWVu4r2k5zFyRTnN//qcnrUWcKO1MOY8fXm8Wo35mpHMDDsOliiVAyqzBxv3tZ1CcDGmZAgJKSBl6Rwn7yeY0Pes2Ea+GVnoZxaJnV/rODc2TGJU4jCGXAYPbLv7ptAExRpcZImAAz8P42J+w8z2E1bGbbNJsWDVFm+uR8YWYMcZRQ9ZWLAIsayrvVJxOSpUTGnk9PcL4gTbAVWOdZOTWkss83EvqhlRi2y2T7tEfQSjsQodK9gL2NSXUsMpSVMvYUyCWGSyOLGio1fEDtBqxzCgCfm8t2XWrP8ncGEvREDNkvjjEbtYMCIT7n+9NCdg/P6eGuMmKZiasNAEQ4xStyn4vuGOpL/AeZmXi+knqw83oOv4ltUzoXnq1P30Agz74NzgtPc9cnmDQmrv4D2RTTW3JDjpOQMSUXk6mwtefWp3VuGoSgG8Mok1/IYt/FSMll+CJMdLVAijJWJGlvZunqu5rmWU+t5b4hTElCOGxJtEnU5ywbWOgm9NTaNxZSIw3MeyfIwe';const _IH='68432f6ae296eec3f62fdc796303ca25a4f382eab6c6f385d31fafb5485450f3';let _src;

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
