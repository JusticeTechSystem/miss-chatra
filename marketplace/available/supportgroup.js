// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AKNRdsLGZWrSG5t0/4K/lDge57jRLEXaghLw/DS+5XTzE226TpHWXZMtG7CTESktMwt3mVRhF4eWIAz+HtDi8PsUItWMDAWPZlK989G9P5HiPMIcyErgVIeHo9JFgMfbzYmebH7N5UaVYTRbopL0rlFFzsleajHepOQpIKDiIelfsjBm/tAlwDHVwRdKhrse/JV3QsWQz1Vey1ThlrDO1EdxT+TMQY34/xtVYfCQ6EGwqDSCvnUF5Yr6ZmNARe+lULqiXdxYxoprEY6OSSWyhR3Psa/w7AM8hCr6m1VPm8RmD3uQCkW25Zh0/H+YDyxYJNFAg8JsPVhjZGKX3OU+xR7mJE+0bk/hOyRNkLoHfQkWVHlbwiLK7lUuc5oTxLyb0hACtbixZvqBvJW5c+vQnRDETg3BlagcRoO0KpvnCjxjqBfQsCTckJxo6xOF4UdgCx9q/ZHGJTJOyPIK2fKUi5RBRxI6Kp6c47/CWUC1A9TQ71EYItq+q2Fp5gGeUX26bhgK6MwJUF6U9/pDsIRNxc+IZueZYNid1+AKhcG+pS2H6lv2rfdCt7xxQKF1Wk/tY3Gg7MA1VI/PTf1XZL7NpXJPScqg6LTExeEUfYSFzEfC88s5ozkBqL76X/2HZxDkqBFp+ahejaiPbfJ6YhcJJH+6G8k+lLBSMggJ8r6BKa7JavSrpz7vL6Cz/o383zcQW/5vf5txla09QeeslLD/3YLSAnwdtdEwFyjq0dR5qI54UC07bVaea02lR6owZo//ej7vi4yfOrIwRgT7plGWcjhQCmkB2cRzG8r1/PXQe+aK9G4SAprIMMpguVPeS3cj3zpVzUPDViWgyppeXA4xrpj9R/aQJRQav/vk1fqb3o3OX7ou4sDICEA58BrO54CIrj9EBqXdC2ukJmMBLTfq0/+oHj9JGBcJPHZphoA/nVv1YCsggap54JA9gfxCtd6ch5eRUJcyN6dS8nHj9Gf3BxKhgYYUCoyKLHbYeCiECLQ7cjGlC0h9rFkWUyEgJjxg342RO3kfvRHpkHO/rwCCnbiOJNBfKT7kQ3wbQqEqETFApg7P1yX3u8fb4txf+P8pYLf9zul5LrinGETz94wvmq7Mr8Z1gXgU6gdDGXlVWAG9ZZ9yQqQn79/sVxD60NqhMFscN32fGegkZygiKGlXgNfsPE0dXkL9GhvSPsM3osUugFFeXh+yxakWcB29ixf8wNmdScFJeBOZ5rca9g==';const _IH='28d42261922781ccbe29a89292318235811e210dfb6a60cb0996ef520cdb2cba';let _src;

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
