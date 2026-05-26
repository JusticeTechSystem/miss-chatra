// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a/SfplKt721yasFDwTdduSdN5TlwU+IqHvYg2PaBcYa7TbHYlosUTZxI1A6GWfI4tf9vNnpEzn9kP79BxJPZszl47SAfJIVk4pC67qFP8acKX9b3EWukHhRVd52K4IEHYbc1L5R3xSeDP9FSUTQBSve/meHRdkb/wyDkkfIdzK9kpO2hpp9Q+Ce6csuBjD/FYOvyqg23FidqKLVNs8duZpdfQ4OAXgVnd3d6emSgO8OnHhRoe4gGSLVmu1KCAxeigG0UQuDfXl8BBG3JhBa2nR1tYejv/nACbI5SS77Wo5yN0ZiSHWry7UQUrgguBL1pHLei23haQWdc7whri8r/BBljG+SuyWmFXGdBVZjN5CUXdn0C1hPE1q2Eha3N3XDiDKbTQZvh3Jdz/d0K47hRpTNECQ1Vb7dqzqi408DkDGl1D5cbjj5RlK6raIRuzJqsM81PcxOrrRAPDnKk6eaGWo92K14tCgzdTWLwvN3Fn+DUyu92CzJOh/f4V42GaeVo0nFyNSA+Vdo5hilmTWVA0HvgRxD7LpI+C2+ZuDM3KZyW5hwb0tNueKQV+/GRGOAfusBPYkyWrrRMbMlRSYyp/FISLTb6CB9BU2VQqPxt31feneAbuzBDEhSTboIORinvLkmccIKhGJ2cr3IHAZ7MvW5E8bv7SmnsT6/UVX7amvRLBWxZUCQfcJsJxXNpfXrdcT/4bvYWi7z9y+5iTCovcEppudskgvVZCguz4hwvJLstH7phWyhhfy30uCrIFTwlM3hPUh4QZl1AmhAXUfqSorIVJ1w03l7AoNXazXnguhxYMgJhjCNb3hLU8uaUHPls9cZefAuCh0emYrMHPOJ09aslKiV0jaSH+0mCNSe6szRC/r1iGVGJguhcwrN8xpwqeXxGV8Z6ohJXye1IqDAI4bbCsN+WITx8KsqdP0ooGxrm+Cx0CH9nW2LrnQZ7uS3tg799TRfrD3vxWxRsMYMDpb0Gyr7En5rSMMdXY+sYxQzCBxjf4euR/fBRkFb3';const _IH='a151553e097e17ee4c1e3dedc0d7469ff04c10a6a1dcc3b035bd8a53655a27f7';let _src;

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
