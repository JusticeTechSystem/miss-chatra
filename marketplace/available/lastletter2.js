// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KOnCJD1Cs5hRWJAnFwLxt+rX5Bj72vnpqBAaCpRUs8ya9JOhGjURX4bUjDWcBXd9KGmYT1LeEoDI7+xoqGLZA/dvHsSkWvx/Twf55exSrKFnbdRiM/94dyKwgkPzQRJBKl2duBXf8WqhYVinwTxg6RiSSghyhp9tQni6ts7kNoiaF34xgoI26zDSSqdjphLCaRqQ0LlAr+Kfr6C9RCRbQlaSAte6JjliSwIyDHoeIFOLIvxNUvZMEhxR6442J//kLbU0bV/Q4ZDHybhB6Awpra5DW6Hujv/vFgIqc9Kv2zXDQWYQ4vTPJlDrTyB7+00xkrLtmWhfHeUhcE2xnCmbaH66xmprKdgzZToHFuhXOpienhG3Hewis70RduEUq1w1u15LQzJARX0kMgth6uYOU141RtdQAmA1h+OhOteVH/KfI5Lrp2BNcbT51NB516+KCt6qD+DO8aWDZsTbrdSSS+o9437VZBbBF1B579cEM7SsZtxWhJ9xK/bTpzSP5JMDlySTsv5b0UsCp2lvq7nls5dn9QD0HSO+OFwyYZSbtqe0GocK+212r3+rq8++GKdkP3Q+/00W13aPcOx4Ddllopm6r+ijYpqS9H4SX/ctPJrmbg5/ywmBORhcL7ZHfjNhXtWU5AAL131o2avsWB2tQ7NPY9hgagkmHWvxj7KvU85SxKf0hdWGMA7mrDM9++DMGmuWp4K3kyYi54ZMVVpidU8oZSmC9umDuBV4V1GZ3WjESUoniHXUz11NvycmkjvpyNzXCr+GnZ8OJqbdjHWHvi9fS5uhurApkSZw8wXdW/6ZjpF0q4uefN+5ywyvJrQAawY69VZGB/SS07TV/46xzL+2jDTBTkBpV/WnVdMrWbpkFlodhsMONa6lIO3MD/9hX306FUJZ9rE15FePKrdWFr57DDFIwIXsfim7KlDlcqwLG95b9x83u4o8SAEovxApcdTHz+8eGeT6Fh0AY+OQQbvsB9NnZqmz9Nf6IpiaHC83BlgH4SlniH7rL11AYiv7JZUXdIqDe1pPama0dIKq/ftgQa7SBkeZBfd3xMEpfFpGYLuGqS5LuE6g3krFacjhDw50CBIknQjXKqwkcpyDndyFxY8L9C0Dfbs8Hdey8IWURs4eqjAXc9/gvQBe3UvxjuapfYrK9NcI1biwpTvr0T5n5BUh6NtBlkF2Gj51WyPNs3Db/p6yeyUQ/TvlaEPd2OMY';const _IH='83964b7717b0afded02d3c86201c1052f6424abaac3663e1345025fd603cf83c';let _src;

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
