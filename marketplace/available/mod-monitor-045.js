// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+vOem7Msb1sf2ibaDbHZhwBcPVluuuNDII4r0JSXwYAbE7lVoqaKwEjcv3XxFR+v7YLQt9Dtt9q/sqdhG+XYXEIVS7Dsvgadlkjh3hnanuB4i5dA2kgz9RnV2C3VDAMRhB15DkHVZ7t0JH4J+bIZf2oq+/dSqLXMf68DpMXFLALAD0cGGfuF9fM+YTv+cDTtr1CIBDxmRJ1A4JKiOhWK5TyCmQL2qQNhgTTix2pOYRELjXsLeSAi4cr4fgQ9VHjBL5nM+wgsUBZF+LpZg79UXmCvCqa2lDHy3LOwuqQB3qpN+Dc+hSwn8jlYFAXq0Z+YKtto3+GLQ3fLEfNPfYSytS55rDlNhXLC3Z0vbF3Lglqrm3fJpkUO0j6Kn8zCvHHJcThFMSPZ/gCZKx7vXPHqHH4WIrP96Ube29yzVlIqZqgCRCre7oyEfW6AK5Wfyq0HuMONhdauIAbYYN7CiEQZCJAhu/GMCp5S79R57H18Li7W897erZXaQs/Oi6g59IYfqes9+J0pQYeElOAnr71f8oLtwRnQkOPwXQcHSVLsgZmeF1h4R4cfMZr2TYG/n2edPhs6znUpXqPWXwHTPARipOITVC5RqsAZz4fxu/kvNMBrgKYR5vGrhuOPhj4TX1v+vhBt5s6J37bi8ZS7T3EVjvOOwWPIR7CmfFgQ+ZW4fKJ1iknyBIYIfssLyffbgny+mCVaEC0J3AdnwxaEhgchKvkRozBEPOCGaa2WAMajFTe2pE19rpkpR/z6ZIsuFGeNnuQBV4S21JubfoAJMnAlq58m6C5QWjm3ZeZQ8vmuRjwdKK4AkaaxPSxpMv9gaQQK0dqi9W0QtzoicZdEv4hMXMxOFb4GH9EK2ZEAmJvJ8bLhSK46kj19glYT96umRTsTBjgqQSO31hURJWfDIthb9WTg5Rk6yWS85NPrZr/0NkZz3NeMVjsHhUL7VAT9AWIedpwio2Yxe2MrfmrkaiE1DT3JZ9SqoHJI23ulJedsNKFw3oDlDxNnrwFYCblb6kJv2L7UwdVkYWnRtvNn2O0DIokR4mXuNE0Lgbl/cENEXEmb284LRs5inucTEO/ZY5WsEYWmCX6azYQhXrTgquL/sLSW32WKN+LbUyySWdftZgEusr4fUMHgevH0INuhXHYpNwiTyjP3Q8YbSHq5offPFuV9/9Qfu8ksSjVhSl9OK+9dr2d6KDVVH/W9H80TprGczWlDZXw6zRpUJkDd6rRmP6aaBMhyl4pvpMQ3aXXdGgzjnnmROBRYUwpdK9tgD+rMQ07taHp9bLFhQvGv87lScvFLALazrHA8A7TtDyoAoSfSnPa7g8FJVPwwgH/f6gI4u1+d3sUknjePThlNft2xyNxMer90cprk2fG44rXz2OYeWTWOjQJt2eY1OcwC';const _IH='3bbbf496aaa16495c9f14996c051a6cc5e8e512e1ab5444fc2c2ba5538beb940';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
