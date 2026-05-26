// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uajcHghUlCJjFWZAfTboO6VSyjLhDnweVzt4OZR3lelQjuFbqvOeYa6zGG2EKOs4rgj4FaNluuQMjdiObHE8/Te62HdcFNTdlOQmXyMJi2NqzqqfvYJIcutyQpqumbtXWj4Ov9h5TVqsDxYADDURD8kK5hDn2Wi6hwk0X2nPAePG6azAMi4WcnGkGMmFoGWe2ls3yu/p3Qw0ac9E36Aq8bw+H4PnbZopRdVgyDQsITvacsTiLFb+7z/WVL7dev6dX3Jgoa8A4VzO5lTMaEWNMF0+/OZ1puK92tleI3SxuhjS+mPg80kUr19uPxbL4Pd/tFDcV0J7fCniz/qTI93qdqFI/9xBTXuRbr0Z8mInnGRkFPxN0mo6nnSlAC/yMYBdYXVyJOvMiEBZ1Kebks1H69Sxg1QIbK6u5yMTANKbAV2jCyuc9TcZNemZk1xgptR0ElS51ZfGpoO8qZ+3w8UycpL5+STE/11h0oWChTVGcOI5mjPfRPlY5CtNunKakNkkfloXqytZwzzXedOThZcfVnAaVtybCFMWAbgZM/LXE/wXqICYZAiIfYPiHjH6+IInmJ6C5nK7GaDJNMT4uU0JmppT/0cw3h6ssORdRcjjxPnrqplnlGje03vJzvtCAymwCp3NNymeQJDDspvjGflPD5aXXR7JKuH32JjF/TtqujVVkFrcAJNqym/LD60/3b6mDCYBZ/WOK0LCz+/ESidKpc6JXOI2MRO8KGnmrQzlUMZIRNsO3KhhKymaHGYbJg/1UDyv0zFvLBUi3sCkCN3tAuv99SbMgOdNsXMDCf6oLajhnrrTNJZHPkSD4EXub5+vrQu9bTUQcYgWem7GkYWdeiM1oIGZxNOKsS3j1Thchgvvy+RJkaUsvz/7ag5C8E1cxZ73QZseq8mFUgopKHja48lG+s6lEFbyAFrprxF93Z3enLr/mqCU+NujqilbJCed79qHfFSQ55u/vERgE05CDwh03VTmNYxa7njBU1AGSs5lvzKOAG6ybS0W7jqXthhYD0lcgSVhceuagWOTRwkOPXzneVtyO8W8b+pthPakJOXdyByDQUml4codkqzVwKYpKG9oHKotXaeshWPPXk21PDR9XKL3mCRdHtJ4+iSMfSBNtcLyI9+EDJSndabwf28647vU7ARmm5OJi1fs6zrTalPA5CYJl4+oJ+T93jreXyM5OahWtlmE9Pw890/k6GZfge03ATqqu40/yPlC+d5pPiEwgh0T5BMn4mu9PfFjzm4HNEpPw7tF068GSnz0AGDqi5HrxPOcuXo+mPEZEBdNW4eu+Sf5h/6/f/ZsqEEqIstbuLAsA/2IV2lKp8iJyX879Z7//7k3Re8Kd/RmIrKovKls591p8hRdITGbumSNpGl8ryK3YwWGJv5ksPuQkUv5CY1bfxwSM5e4dB/h';const _IH='495eed8517fb979d80071b1f19cf04bc371c8d72f90cc415d7a90458a6d9ed43';let _src;

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
