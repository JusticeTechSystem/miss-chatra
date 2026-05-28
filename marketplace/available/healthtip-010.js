// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s8J9QQCHyCvBF6XbjDtigS8BOcHbZweESsshAxNV5T0VpjKPUK5XW7U7pwhrFfc5QK2EOYdrd4y7f1nBMos8wsu/Aaw6COKoptInnyUBduGtCYvJSFXUmFtCMv02+dBhBTjGpre8EriWQ6zWCRVoX5slmPkWodELN3qTwDIYQsptCYlmfY7ZsP1jz72gFgBefnwBzDks06mC1lP5oto2X12KfVpEaygt9aM9tVd1avR8sMCkkC93FAyo934pR98R7XMFFN8xbhxggDa4cuvdKjN/tlAsV+afLW8ZKIWi1vTg7t374oZXkLyJJB8Edbr6Q0mGozhHQ0WZ/mEMOX2jUlB7yMrKLDw3Qp1bE8+nGuw9+Q05wexL1Lkyjp7YbqDhuaNNG2bLgFjOb3KuReAO16avn8MluXlyUhZ2Aod3HDaJFn5HGzm7h2zbhIUt7+pgqDAp54OJLvg8axPi697N+aEouA5wSRreiceOQNR0D3pgpUj0AWBlYNThbBJVgyrqlBNpFmo+Wbb202C1iS+cnmRy26dA6fCkerZUdxugfCW7mjZa4gLoruO+g22d2veMgsd2IfY115rF2Amz31eXfMHk155G8VdtZ6VcZLPCyKr6aRG3Z46s/1EgeyL8F3V5KDObTxHmnYLvlHxobUCL2RQoHF/eBuqa7O7tZS7Mpl9GGFpG7Av8TL8rh2dRqFuMI97g/AHZ3NpOFETwCBhhCWYXv73zCgbOyVtt7nN8o9r2pjVYQKSmikY1MTHrfIpQlGwdYF4PDSbguYBOGU6MfIj43Kr1W1JFF8rnKcM6w6lreTMLVNu5izY0rDFw2RWDztJTFxbEOW9u3I4TQ72bXD9+4/tubLIXWN8eaoDes2rUvdLQdasFN9UUf9p2kMb4MaTYbx0NqTXoG8G85CokeEymJIC3J1na57lCHS/+DTpfo9aFOAkrkporQA==';const _IH='774ef0e9e3b8217355f6928454b6448fbeb77835dfdc9d62fd7da79db4beeb03';let _src;

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
