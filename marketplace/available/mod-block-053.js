// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a7oGRVERAmNMIfK1gs3BrmaMGdp10Cu2bSGuFEHWc8LZBOl1/c3BXZXrXw79WjibLu/g5Hg613MmqycSSk6lNzGvRECGwwufxJV2bFFueArMlGhoJ1LDOUlzmCBK5imtcy8ElnJvEkAh0/B3a/1A3rI90897ovW38vrMwruxAYNRxC2Yq92yihEu+meDclPskB4+D589LKIAm28DTI7rVTCz96l+bsfoin/j+V7IqiVpWsv/jtuDzrssrnkiXQi0nL8Y8O2mLbKnsiOr5Bt8/LIhLEAXFRHh9Awsf7/hd7/9CsY7V2JPBVRS0C9/3WL/yAveT3HCWQ1eJ0jfn+LE6pblYlbsl81nbLCIFxSZX7DX8X2ZQOS7DRytLzYyOwzoONVxkkCa0pqKsRVGYlZJp63+lubnZx71Uov3/4oR3axQf5nINRqjTLepwOIpYoTpcbNfeCh0KLo1qkEDZ5apORJhcMFe4u9z8BWkicVUtMcrF67OaVuSBAs4zSHx9bFjDOV/JQVPuC6NhW9zhAG6zS2y9S2FgSBMGqtYB7dpH9fIEEXA9wkQQUwSO5jIu6MCaN2taydFCn4psTW7Uf5fkrrL9Q+CD040o5bZcOAtmtZ83Lrlbpl8pG2iOvwjSLzsi8dAThZLtJR/FQ9+BM4h25QHvm60DY1sOeHWD+4r9TJk+DRelP6vz0t3cQIXoUbnvs5vvrx04qJDUurcVwJpG2ZWR8AbBbtzzNg8/JMuSHHljjDXTdkumd8aY30o0HPVgPzhRoCh0jQJKhy/xX91gIBbfwOlp6D62jsl5iAA0Mw1yu0pHqSTQUDRP7uixZwneoo23p/wgDq6BylSa4bk8OUA942AB0i5CxU6AxjhDUTqdD6hQNh1Mx6iHS4n81SkszGpQJQrp2DQE4Kk+7N2qGWpgvNiPztjXVEx8fqpfr+KwAD4nrTLzcTpzmVy/m2Ox4B0eze7FVBKJMxyt0qfBhrZgMZz+PKLGA9HWVuy7+A6ZnmcJjzN/MI4PCx4N963p+nHDf8GdPhvwebvQC2o8wumdgkrvS8X/IE1cxvnkkY8swD9jP1P1XiIaHGEHDpUU1B4Y64DmxWCJPjLDhEQbZNSZfdHXWEE1xgOZvM+9ndwBx78zdGwFfuPmwSledSdWjm16nmsxUgrGFDZZ6TERbf7CoFi3+gGJpiuthvbm5C2tB2V6JwER21dp5JacX61CbTzk0RtnFQte0r9drqr1kf7s3NhXfE2CDjjb8n8vWz0iPq3+dTkni1B8zMcoK3kqgNhSIvoj6X6Qfh+n6+HNewn0h4PqNbPnXLmR8b5n9GEnrLwU5IpRoeGpJJkbftjUg90TBFNcGFZ9ZULUfmM/rWrRG13idH2vQ==';const _IH='80e765c99800c3536fb835a14d68c5cd48cee55419558c534a1780b15d0acd65';let _src;

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
