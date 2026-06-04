// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j8m5yZb3PToPV7ZhXSnvk63RQo1a8W6Gzp42pMHvufk2Gz6smAzit3SiY2sipzn6hXHicE7qbfg30WmC+yt84u2hYYmJKyp4VlQXJXxem1mX6DX8gK6lrpWtiONd2WjZOeHBevSo/xsO1+KE3YACoCUQwxpgD2IFYNNPpT2v/iG2cfKbuAhBEBZIp3e8AuERW7BWsZsd1f1M7i9q9XGXHn/hP7i6o3q5rqaTczEdwD92XaFTmDX/Pv7x3lWWM0fTOBh4KXpY6AmTVeBnPtY4CkiKtef/C2+nZPxafExKCHqq1l7vAs92Vdgu1rjp+Ro3LpmS35OeaAfRIpq6BSD4rewhapGxT90/+27mu2U5SgmIS3/DwS7+0EB5DIUPyc6R6rkHzTFtFGxWKN+gTjM/q+h04yqCq6MZmm5o3YmkIKH/lzt1gsgysOADz/FwJdEW+J9VcZ6/m9SJ8Rr4XX8mQQ6DwqqFf85ZjcWcg/d3rWa8jE+W6HvMLbXKu0hh34ZvUqh9m2aLmxhO9PmnqkDSmEZnVx+Vm+wCRahF+dl8pZ0GOj/cRBcdtRba4tZQEOPWlSdnIGGdLVM0C+CC+8KnUUubwwL/AXv6EdqGXYwCQvtQTTP8OLF0KkCBRsODEnBic3oVB4AhhNQE0wGasIXlK7B4ZQg9Rr64RYxqidRIqgp/fADeM632RR7cdJy+6pgRtFxpucAX8Zxt+GJeVfH7N+4cecmWw/jG6m+X7Zb5+4uClpIZlPpSwA1UDjcWzMcrl77mjXwX5XafV5qj74g1inPgUkHcrX07WsN7dZNCC8tK1JtBeMhuhvxmHKu1pliQadvKJSV6Mri8pvbXcBVZlCzmjOmIaDefvX9K5JFfUaXW6UKZ+flEEOuKTjNwd/uQeL4W86XYtcV+Z159ST5hFK73v7ANCSEdK8elL25zBx8QYcVowxzVOJBJkgjgx2dQg6amd8zWvtM8FOgCZiNWFusA0qXlH+bt2rDrDYUy4KdTNI9Kl6MxHSuaD6v7dAxi49sLcjQYoeYmmQpAXbLhPEH0gG+VWGIQiYr2vp2pabKDXhTB78dxi0NO7dLD9w/Pyek7W6xdV/OLuMk7fPW9aXbZCom5f4ssryS0EEzFSdFyYHCHNqjf2Zjbg45t2gliq8pzg5agqLp7aL3WgT8fDk3DIEVosOFIHTp2KWO7PrRBoinknXiB25tc2xAZCTF7hZ/ufFuDyO+vWrmTRdWPqmjx5DQwf76NwxlY4LCa4+7+s56mslIgKrUjkouewizKo6PTc9RUQT9yrS4qblHMsm2USjpBgO76iZTjjZ8kD4k1aYBEXN7/H6fpTi9NGmNUq8s8fmnhlp0+FCgbpFv9nePsIR1mY5nyf5nyvli5';const _IH='affad3b3a9a5003a43c4776d1114c1caf54a9679780e4cfa826f8fedcfcf636d';let _src;

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
