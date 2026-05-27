// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t4jiiD9Rv7pR+pZiuhGWz24U/1BtODPP1eN3RpfPdV/kzCw8U498J8BpK2bz03jZIYRCs9BC8xuypHAD9rdq2GoRlfUqB5I9X+gFVwtHYYjcc9M531kGA639d2j9XBoKhd5iOPexuezKeCil8TQWqSF1P8yRugo7p2bY1KyTrkwcgGtFrVXi/YX7bj1ut/8zL3bAuLzzf24T+3/kdE6oyE1Ap2/b1wTpV/8/CEoBzxoHDPYZpPJfwwZcO+yDWJGVpJs+jhbhGHbXSiNyH00tAxQCJrc0NLN9Q8Q8oiNmn7O+U3Szq8LovZPbgb2YtwSCo9q1w2J467qEFPIDjGCv4iC8j1uaMgcvzxrjtMqvHnJk3LMYA8GRl6YZM0tRT2Ic90UZ9K40u1njOpia6jrqDwqTEBpWwsay5H0rP4jtDRT68loa0TG1Bp+Zp2qiVHFwi4TxjnTBXF0kmDuu6K0LMMUJBxdf/NTg0mENj4nxvgFKyDgMCHjp6UK+35i8Cgip8QY8RSE6r2AHYcXunTk7jw7vBM4hxMagcOv6yjREhlgiO9ctE/QDo48WUBS8KS8Y32nyeGVFP+ZBX2MWPrqRe3KwkjM5XYKrmwsEgCB4FnbHrGYZL2EaS+zxi+HXTorGHRjbo3p6RIdrpjyJiW4Qv/PlIdNbBmtnT9d3bmnKvndvQYa3jLfutsv6U8JFtSvsUChzDnEzQzgT6Zo2WSt4rCJNjB2qK+7Ls9C0/ROkLvc6BiZ0i0CkOoVQr6dUuSnraCbrIaY9jhyEiYwjVP3RSIwnGccdtsHtUG5vhwWR1cR9nHePvMf2gyEw4APlsTTMxA0OnhUgPhpPzIc2fI9x793JOX4Ecpnp7U1YrTSFQGLT48LIdZemSpGq8h6ndrKuBYqvywjr7eAT7wGs4xvTKdMdN+zk0wgMljTq7srFN8tZt7FzIqxZa7qIOPXGKMx5GC3EfDIwWl0dBafeTinqXVn3jsqMKEFgeaQAurZof1URBPkYTR5siJhQNbRocRnP630hfnm29UpNvmew2mLyCx0I9S27u5JkXhmpBLGDb0NYGrWqVb5+c4b/IJHkVMJHYufvvmiq+gvc/kbxgmzeHJ/P9Ih5GCsbLdOHacjnr5+gX2Drit6i2a71ATAT4AhJrwKzjU+qm/P29Guo5O6Rgz5YD205QiL4NIOm+l51jISVB5Odjib0+dPMqqXeqOynuKLxO2nDAUY6iNLCpirbMql+JJtkGVY=';const _IH='5f1131bd7a7a1d131770aa58de0f4a5309590ba91007692a6ca3c173f6f91966';let _src;

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
