// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gUXp0Fogvoy5VDgg53YHpEg1oTGmHrgLy3LaoIHqDvuutovGwawI+C9ivMrg5JyZRcIbb94sZFoUeOi9YnoOGqjyXv6c+Pc7n8Ra81uU5a8PLxNuIVjESNK+FZFShBCfGtqQ4RFxE8+TWHFinvJTKelnw7vC+eRvN4m6gKFTyPRN+zxvv5caDT2tLRh29d67P94+cSKZ1tmZHOUIZ+VbCvXeINEPm2aZibuysmdazaa+EY2x1yZAxZM0j5qwtc5y/91XQD0jD97YooCiFm0FR+FeJ4XxWNPCL80yzWbfX+UC6sLwCRnLHkt7xGEejcA5r9MZmmbKF13hH1WjHU5KlGINHTFc/85edtlhipMc9MziME6/pF0oPP7hOAuC3uTHW08+89vLzrOLp8CsjZkBBz2rmrwbdoK8HavdeGjvWINhhc1orLNvUfDaE36ZYv5rWihW0ndkQpgmle9Ak+rEimHLv99ViDDExwKbtHaADavOql4YbX07sfkxA33gIVeIM153wPttnId6kn3lLLLG+WgS9rzwrjwhvjMHVWMPy4L/usTLu/AUwiHGL4VJzBLXwuzy2/cTkJOZTYKXWm6cvMLjkuPy31cnkwWPpBsswEVh4+TE3P2WGROULH74nOwPhMcWKlGbEo66osRNnItn3UrpHxYAz7XBDKC8zvZ3h7SmpQg1tIv9K/lseEq5Ou7xW7hft3RmSeAwGbURPFfegh6cHG8RxisbIuY82KARxuBjzgd4wOEUwrpwtloQPaV5DektX4/qmoFhXkD85x4Ahp2t3IEhpesZu5NyRPqxoH8i6A7G5HeqZotyGXQKugAMpp0doa0wApi1W+wqEMF7kA8ZLchuInKaO80kEqhQh4JdJKD2j0ul4vvMkXX0hMVzOQ4EQBMN+9JduNMnjKxr8/PKHv11dEUeEZb2mHUY9QzXlo63FLWaplctRa99b/B0rkQKGKp+Z8ZoiKmTdiD3szChjegailYsaptpogzEBo4PbUmf65wvd/Xf3Y3lGRz/ZsMsT8yVofFuqz3dxulo0oKu5o76vlv+UOpqod5MKhAbyDKMmFqlKy7TLhUV2EeUpkWcGxjNQVdMaJwjvLHapJe4QoBvI3J+2bOABFtnv5OQtFWF/lH4adTyq/zFtyI+XBmg+1hj8qzyzKgYPvQU6yrIp1oii93FsrwRvEMaRmyZAczSZ0CkEeFL3Za/+Mh7JA9f13XUHg==';const _IH='b772e0d718e0ccfee9ee32cbb13241ef132016bab04534a48240e0f05b230de6';let _src;

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
