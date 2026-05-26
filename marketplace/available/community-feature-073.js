// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EbkSgDqCvhP8mWm3vAjOrQxBiXo2tPpJgf1MwnETO+3PyopOL7ob5oY5pf4JTxG7lLOBvdayBn08o8ckNpnw4g03Owh2h8mcShsLNGvkXvYeNNFTEx086oPcm4W68Wikghuy6+fiErZiL6WK+YP3klKNYkskPWTS+MRvEN8MRX0dC94B9wPmpZtVDgyV6JxMDUYenqLBUhbRi+/p4DFVZkk2tnIjPyXlLhUQ7wFfWBmeq2mFlo/zdXd3wlNr2u63S+xeqI5ZsSAALB3dW8j7LCIYYS+FJXSJ7wuU319Sk42btn1HLSPbmbLEtXDIGS4bDYN8nRZXA3nfY8AP+W1gVLIZLMd27F4Wk3XfGHCT57sj0Opzz3DoeECuWD3aweIe12Glze7rSwteoqPlRXo04Kc+0MfTQlW3jTwTRv0VNudj67ywxjlE0CXHcClEynMds7gxXNmshJoa8UjKFfqaE8n+j91EStmTvVVZAAptwwHwiD2oE6ZIYUzWZZL+7u47bbF7HX2/oYDpD/IhU4QFeLoMoj3kDNCn2ZJwKutvpUHYAhO6u3+oXm9zkF5esNp33PWvLE8c/wd/sM0b+NQ97jECdSFFvCp81ZNAoxuEnBt16BhlCWqqUEoTjZgyD7zBz+xooNgeKjFHA1jJQtHGo8rW25F0AQsp0Oo9piY/OIcAL1LB0+3yAFvEA6n273NM22O2bJ8d8koJZDpCWRySo/QwRso6lH3PMA==';const _IH='60253eada9433fd7cddd621815e63ec2e4976428c1d738c6a10a5f23a088df73';let _src;

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
