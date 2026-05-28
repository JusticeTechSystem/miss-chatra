// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZIWq6br0aHKNIg+8T50aDDVvp9pVrmf73bhxupuavAzIetYl61CpwH9Pic9iSA3s/DNL3gy8V/2Kqg61DHYhx2qytL70cDt3THXvr7S1A6X6LaXqIYtBguofy4WFQZ+a4m4kQEu57nrKyvwKZX+Ze2SLVX0s3BENyRHYqx6CmP2D74nDvj0akE23oExoMGUxNqmhKA929IZ9kVVewoWpHz8lsk9jxGDkbM7PQH+0xi/ca/o8hvP5kkc/jdeVI93QNSnlS36KpU5gTpnlfUf8xnVKOU4WM3B6Z9pMMUHN77CvO4dB8wMMASX0vXU0V2GYoxH8y9qjDq7+1l/hbqc67QkwXljxv+LX455W7oUahLvm+rIqMDXkhBJVRbgpikXOp2WU/oh0k3ycjJ5mNEvrgURNor6SEaV8VDAL3O4TEqpK+W3NYoQSP98jNr10MlTUr8CCm9EzCrsF9Km6Zy5B05ewlO2Tq/EN1m4DrGGQPMXM5QszNFsW5rM7RJzZlcwHeMRcgVq9j2ZW2UqHP73bwyPdqoxs6uy5dgcE6ZMKc8CCfSwj3WVuIzotk6VhyGNH8aireto+q2JC4hR/pHxJJhudz7hAy3y8kIk6dHopgkNyTIx4OMiJ78f8ZgzKimiCbP6Q5jXBU7O6/mWcb2rLqgxhblT6h2X4CfyeV/8/ZToHszuINvfj5obKEPruZLeka21csKcze5DzfS5WJVb5A5HWeCvnsAGsBDFu3rcifINbixq0dnyghhR4M9ZDlaDHnHTJrvS/H0SkCiQDVfNvtMtTZa0l9P1oSezNh13gm1F9UG3UWGDTCrLaDF1uxiv3Z1bsiognIaW6Y0fdH+F49zdf70bkLTkO5tRV3r95y1j+JEIlzAig3eZAW8NTsEzSNtlSjL20Cd65VEwCE84ledqmtYaUyPwxBcELVhIwpp3YaKiRdF7PGFatRmx6ka//gozKJl8EdF5Xy30P5IPpkT/NnsPEpOwJi4fveJXOjcMA7xOhiaZkX+PCUMgcxgGWYX6H0KX1CT8BgpOy0pr/sosAS9y0rTJY/+Q7rdRbCmljxS+F0t1H3uzERlVN3o+t2DXEDyy96lgtz5FD5xuJI/cn3malW76GtwiT9PE+8BFXhopS8tVjS04GC9WUh/XJ8XSM4Kfja7PZYbwwlWuN61Yj5ZS7TbpOUSKsrA+Y/dGcPfWJ8Eb8PlT78fcrhNYQnGQcfYoT8h4F9UVmav7mjDbeglVIBgdfgjAjaW8UmQThFvYYo0Wqxj/Wx4eXYcYTuXx0yy2u1vWjssQMLVbA1pVQY/I2VH6h2rc261mxtkKJPj6mYSzYFLMhObw005YfYvqIdk7p90/WBg==';const _IH='257cbbca7b7debb84ad113766d1cc6dd088d5d62b06423fdc15624954914f816';let _src;

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
