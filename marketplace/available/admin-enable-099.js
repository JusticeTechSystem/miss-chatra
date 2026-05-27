// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ChtYhgW0wG5XAt73oD0tZGwbebAXhEybPbw8etqgzbYa1wqWWhw0AXx9QmEXfYJGy7PPcN6WJ5tbfeQA3IqZHrJ1U7P9uR4wwdS+Lxyl6L8YTBMcpSH+dA6OGCSerp4QrhRfyeYpThV77mHXF4r+1E2qI5wfBZlDWviH8JEf29XHjnD9kV2VOT4dafqniQ4jP7XoKxFGMPZj68qjxCeVEe20kCTt6aiq6v7v+xYfVffosRjyzJSCTjbi8qukxbjJoZ6Cfwwb1EO/DJGnVlE8IbAs2iBhkA2tMHOrJac9M1AGLvb9es+hvpnUZc/cCN7a+aLPzSXwoX2XAGsHgcgu/O8zz09EVBDkdjGiqyUhpXHnzxeKbR1mJs5DoxzIyg9+mRwgYz653dQwOXGVx/5LeIwUEqqD//+E6bvM5vR0dRapgzT0lZGx+WH3o2HLSYW0Gz5uKJUwnNrW2B7zIHChQUzEQE7WcOObjUi/fMzszrneAxO/zzU9TK3bLno3yXVRtRLORGCZquoWf6uaAbURb+1zI9zXJ9vYUObquQZsmT8LuGRYIZ30PpsRcg+GFvDCLQ5nD9dLSuUkvwQri12kHbeSJQ51+dxCDme781ka0BuTJPcvDJ8UmPK1iswiscgn1M9fQiusAfWbvoLXt8t8rp/e6ODO1YLjmQxUiW1dQrFwXEyU6o5qJwoMV37+gxqMeRrEDM2YNwk7qll64MELfG8SKMz5T37kFz60TBp0VK5XeyXnLO+wuGDdRpscB/FvZQFakTUpVPt9v7LKKUnIqjZJzwDp6grdP1rFNi/+ut9avcaqvf0VUuxxZ5Ql0bq4hHp3tmPIxXKkm/Vv+yikaDX5lfOQq6383W5RRklDr/eaYvYz1oY4BqY53LtoFj7Cqjl3ePhP5bP48jReEPJU897ADRUP+JFJ9TSxWSZbXgIhTVVQ5fqecmOMUJXphXiklFnscD0hzyhxZBzKZL34oejqFxD+J8V7pCzlPAhl0UN+MzWXjn7RSjCGebcn';const _IH='597bb341a781a57bc622a1d64e9dc8c19f8078567b6aa9dbf993e8bdcebc4c03';let _src;

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
