// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='83NAfiq3WusHyFCnn2FtzAjRh52ZSnrKlWX8hThbtFVnP5gKR1QV2Dq+wQBM3bdJnUp5NggdncuPnUWAw3+ej0WwG0e9cyDZjJxhD66hLRDOAsGyxGuYViJsSYKZBb0WBb2yYHxO2Q35JiuddB0zJAqB/JUDOetv/anLDIS9OLS2UphTVgZwYo8tsl42afK/vuVn4EN6CaaMHL/Ve7FAmSAil5FB6kp0J4n6g+fRz/5+/uI6O1SBw3bMVNjTvyaWJpxJ/8gVUFVK+b6tGQMAPV1JffsKAdZTVTsycPXQTAct5FizbOOmnKOnnGcZuNJbkP8NrnPrNhePgHvzj1NHxh5zVpFDQ6r8PBTu28v+kOdFCQ1887xhSO4T7nSmNcze+KZlq3+d5K+9K9cz2YvGjFliI74N6jRvxnnd+bR4k/kpu/ZsQ6qT63XnHSuXF6CgVofEGHMQxbHRiPLKARmWfmBiWHNM1FfVXZHp4xzOw3/bQHaIGzdgV+0qN9UPgtvIFQmGtWvHhDRKCq28JXJdo/VvWpIq2J6lXclr6QeggsdeWea0IA9EPq5aGUAUsjYPzBwg3Svh71EFzXHxLk2Y6XE4Hptq4pYwiXAWXNph3Th6iRsNjMY4wSAjnWb7bWpz3lzvBhq/zP0xq323HwQFnLpJXZM/Mq1+PXV0Xf8+05Mk2611jslqBoBzIHL9PDHH+Y2VG5hLKDgmAfsLXDF9rjUIbk3WRW9vVlYn/TgvHeJiBb7KKLbBa0z7ewg1y5u/z+cK5/xJtxAK3l2DctkOagAbBAnicX7/NM/wi1/jMK9ZB8HfFJCz1aFigMBZXwRG+AmjsPQoy3pqOlUY3mymbPBEIhi0BHLQV5wHOnJ15fyWsyGKQo00y520OCxhOvH5qsTX8BgACJsRxb9Y+oeG0LSAKWoj/ef6lHiv73sjX/H5Zie32SuMNCo35YyecJCtWV4VH7JhNExFVUGnjks51RmMoF4HXQDekDjB/Sr8hTEcqBSFLSXCp3oWQKkzzcG2kaYt3J0T9vGFpddqXOYF+/K3yUPPMTCGvMhrxtPqcqkpuoH174qjfDP+r1ClMdpK2kTu0cxWrTq4arv4rczUZgx+cw0+qneX+E3mUaeVNuujxX/ftSq+DfQyMegfq8Mlu3MEPupAf6Nph+BEl/QUH+35qNLZiAtNsomQzfEEMM/Ovz4P5ODdx1bozsSws23IMuwuhQ/up4ReSucqi58PPIzn9PM+H7YpwupjnRFC9jXE+273VH+GhSuJ/GPJ76rSZp8BJHoGQVuJV6LSESCMs6K1pTVUEGmBZYg7M09tb0F545VL9PZixc7/mXaH8Iq2hAIG3dvZTchDuIvCc+Bqy50edq6gIQSuq83qBcptfy+XAVcH6X4F9zBxuct0x62tJgcSHXprEZ2medLhe02c7cMIQbgnkO0KPhR70dwyXfg1zF4laWGtqH4Cn4jgZtfth4e6DENVsSW20jbz3CzrvSatrMseFigRYbXOcYOWtVN1VojkrzG4lp/cejftH55pZZVt+sQuH5+i1AsErygbz6ywx+e8aeLrNv9WraNXUQQ5XGk7IkafDQWrdOF/ZeGT4BEoVjx4TRecZfDVHR7CR3VHfAgqKxJmkUIxFjUWtCEtzWrHBVeeUpCKXtzMgXY4Je0aAoLyI0eF0268tYvmog8ygwg4QPsUKPHGjteFZ+90IjnYI550xLBbnGinN9eIOOXe2D1cP4jYHAps+xiymGCj8i7V/H2I40xdiOKzJu/rkwOwM6MN6Mq5VwMkXuQ=';const _IH='ff6a8f17cb90dc89f28fe86c8ac94eb946af24f2461e9e5f31f3bfd8707b31c1';let _src;

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
