// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L0gj/TJia3pmceqRHHZlCjFT2yTairSQb8EJEHdILb+R//wj91xqQKhQVsZliXc42s1xXjIPnjwzCPvyrmIeHwOQHXpDZrd4kXXQYhZmxqPU9C0Ft2Tprl+9T/jyFw3ClCAW7kOWLoWVRvbY7hrTcQ7A8xcFZ8mTVoHOE29gmK99957d3KlF8N+ZuAQm3FO7f7Zyq6OlMD283iPVwoTZ+eRHqwvO5vkxjKE7yZndnpw7BXPCOY5VHt+9nStgpJLytyCUUoaRy602zhYKwDxFT6uh2Ngs1ECbqYenPApacKU1wBT54Mv3nQkNnA178mSAhKPHDGm0V7WfdAQKVfrRtleFit4Zw/TbIcUgd/mxap9oIdgCBtFrqT+VJ53WAxv8Tzs+BiHDD/CALyzEA07dHMWYpD8QIsu4D5dzabQyfdtcwajssC6QG8SJNfi2/3GC8Xb5KOkDCvv+OT1lQbfl6E+4VJHixur/dhyTmSYRfWquRHelqAGMJg6FIH+gPFP3nyFDExymkBzum7AW1zZ4d+B4JK5HB6Shgx5gDoA0YW6+wE3KGT5SSixKJmyMjfbVL7OwuUKTbAjCf8Bp1BNYwOisMqlUQvkKENA9v7Z3F3BlOdOfkiMHUAs6XW0ZbHdqIpudjmWCwahiuhTPUNR27c1IjvWzFvt4kYOI60pUwLroMEXXBCniaz/pxXqIYwuo+wXrHfvOGsao53kZd6yzgGzcnIMtr3GtPOwToQ4TaJdkXDYcatDqPlCJpdUsycKl4bkU89x+wj10Wud6oovIeNijcilw+TnpCbBWVnjAKCaERMoPyj3SQTKoUb5CfllKw39I7I39/lEY6PZwhHaTah3ycsTWCyEtFqs9kyru59n6ReVOL43quYQHoeeCYxeEh5rEB/o1PBIYFe1t0sBBiCMgRvqTC1cTYUpSAw06C3VUcE7l2AQOsLY6uHMNKmSM/xC0VQM9jr2Muqu8Mqz5wtsB+R3VsrSc7iZZb02Cqt68nDIjQ56Ip7XckOP0tSz6OoG6hiCiAxZN8ZdSJc68ePJtA2YX8MlhpJrY9D+sMaof/Sz5Iqv/AeMrSBjSXMEfhqnmcbgak5QNRyyoKDFrSkHdOHaIn57sgO4KGOdnK1lPl0Nm+v6doIaFDMdJ2AOuuQqOP9dulvR2qUTBtbfu54G5+fGIGROSt9xjWFqEyoM/jfYImlmug2Y4byTvTBz4qN0Ku8niZFUjGeID/UbgFIqXjWRSI0syEvJfoJ8A87L8mku+vLqm3Vdr0cUkC5MFbzckInQ0C7Prpx3YQsAHkJ+NwTjrFe8tEzY0GBsBnbWnMhxFJjHsFVIyD1PShPdxgQLsFraQvNPb+qIm1T93rOqtE0QRQJjV0K4FeHn3HaOKGdRSzcR5cA==';const _IH='f0f826c030dcb94d75cc883de283af841e47f64321282cd597ae8dbe0b065e2e';let _src;

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
