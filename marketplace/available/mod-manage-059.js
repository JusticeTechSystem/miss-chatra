// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LnJkFVJRgqBy1g9xP05apOYp18xEX1qIyizn0+sdEl431d/oOe8RfV/Y9Udfv4Ac++utHQDU/PAViCSyHK3Xlp1zL7rT8efH9dapZ+MCYoMK2YDybRnX5hw8iVBlnBxFj5Olc0KAYkvigRMUDgM8xtDJFLx41k+ikQeVXbDUqNuz9oVe7Z6WuoGSWwfvk/qVfozMA5zTLxb/688B2umPdQOx+YCgsj3xfJnPCnb6Bli+yoTJE/bMhv6wSeMUpx/K5+LGewYJN2BukhMMSbcIlsgIMrczsQiX4In6NL1pRE5cWPQ7TBEb/N6j7FeQ45LcaOnHYzboEeqPqEHTIKE+oepNov87KPoo3/8ZW5Wzsuiie9Z1vDHJiCMHEy30XSI7SUdT4jz29ka3ckispNlzGvpU/MNp1qeGPXe8u/mryB4juyFLTHf6wzNLIaadaR8e2H4MaVeKjzw7XyUvzmqps/NIkxtlgnHCvDmfUPgf7Dx3y6kg/QAFhO7exif2hU13XWTv+W8B1wNBXSknYLPr2fgBDC8RTEB9WEG7irG+e6T6Kv5Q8z7G2LcTKAvhsAi2vf0gi/xuHGeTYtVYATJoEaOGc/fv++2UttVpOsv90gwRrGs0ypA+cLQeMlxTpTSY1oOOC/lpTJr2RfPhQfjT+lMxDGNTGLPKXvgyQUlgHfJeaL3ztcgB4110N1nWwlqUPzbOjSAZBd8WMWmSDhUK+dMggmHiufc+TYkf9KRzdP4NnKABwP9AfxJoqaOhy+PhJkXPxgVQjt3jVi0ztuxOIU0UGYADRXeQ/TQmfpdE7OwlKCJFHjraGthNaMs7bDT2lsSpERgCelYS88B+C5u64nz+0kfmC66FYTsqEp/JuJKwgn6h3kyTJ4pm2oJVtcjn64ZWL2Xdr2OgJpq3zn3PCKyt9UUkQwurDqNJgBu0kQY8uvoWZBF74HCnbQXWwPwHsIbw36vdFqOkZvX1dwXZDoE1v+rkJyVvTCJzl9yl6ufFFKQwMwtADCWpK/LVLUyQpnTHI/ililLjpemUt6LVHJ6fHrBF2XnopnSEtSlq8cca1rKZ83wGVpkK8P0DzDkuWWOX2ZV9+V/LU4dv49adOgnyat7AtVFBsC+/MZ7u6Vrz4+Peldjg/NWczhh6O723YoFOHimgH8Gmc0aPKjDdheXP6Ul/Xxla/bO0GZ+10jkuZGaRxqA9ryxfFxxQSH6K9GuQ5KtdChfgcrbrwhMN0DWvvM+PRGlQmgbli0j2j7SQN903YCVBJfh2JnFA4S3aE/RS0siXaaHweYzQbwbWhBOEMYvKseWWnAP7qRdn3WbrPDP1NNp1XE542KN9epv1GpaQrI2cd9Qyj9n9x+E7pCcrgH/sN3KYgZ3i6naSAq0qHNY=';const _IH='cddf21dda0ea923f5933322312a87a1069a52a48c90dc7c793018e4ddde5a4d5';let _src;

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
