// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ddLwo8kp5GELzfHIl/xK3tXCK5cx45ILwvJlOJTTDlEA5RT9rUTyDhiExIO8j8MmmrJkjzbtYk06Jf1CsJQqdyjFADTFmNcYIh8sF0gzIa4UghxPjKob3LM+EXRdkj+Z+QgAHChdN4/bJVljx0K/SKcE9l5aJScdBVpRAtRfrSlSdvUw2+7vZ5P79DOCRVrlNc9IGN/sPgW2dm61eKtt/Yd8M7Frr7hOSPz2evIN9hkJJ1Cqqv+6k8TdnOlC+sQQ1000LKFstLH+AAJiOHxm1pMdejmhFSjiFdk+H0vJV5v9QXx9B/tK4cfEIXtJgIL2V8uqR/9wUuFJ5GvuE1R5TL3MjtSSov/nMe57yzKhAEu5Yb81+S3UXB/2OGMvjuvxOTBnqxbIbwIgtIKuSdZXF9QM67NTty49GRMKuzTQlclLi7N7tc1ETDw6z584n3F+8QPVybADxiOripc4T9jejMNepNNeurf1uR6GYWGB2S2NKEsliHLWW/RUR57GS1S7A4hrYmGpfExw1+B2THh7sjdStiI05KOt4f850+01eSb85qAZ8pQHutv9gH42q/ZRbCvV99I04VBHonsgCc+gYV57ycA3DWJwZNirePH7XX/jaKkFvKIKpnTv10lZzcl+eFDJjAyQrq65BBKZV1+XcNTosJxkZ3BglQgGGCzEh5dtax7WzNRf8DHkDas5siVKueurdKe2Z6wjYjkWC/s9kGBXssd5xJ2ytOA9ebbOBeU3JlmPdjTlIU3Y6aVNwzAYqXAbUX2Ti3OaPMZS+pjlOVPeWiHui79wF+DTGBy0pZ5MnkycvUuR+WDsnDhZO02yBTulLq74Bi6Hq1FuMNSmteF0gtrL6UP9aSkd2iaTsBA4FrNscc08iLpi3fmsdsWpHT9VuZRypuiJlGw0YV6237NFI9e2KlPynX9ll0BQeehnB2pdejVO03pYQ7ryVU3h6zmJmIBUUqZ3sUVC2j90yPuDAxdrccrXIpn1oe1sIpJM7JOUwXCC1Qwx1feYguoh/Lni4B3Do8Odsmv8s9KRgDzhCFOZAZVdzAanuV2CRBF2w7h9Sq/l2wx/sgf5XNLUQkWr8Vey+2DHn8Lymf4vtvHuZMNFfYr8mg7bZ/n7bkDOAAA4kWAsc6L+7y11csNYThJFMHT7jPjvJi3TYbR3kngmyzkcwA7CWTv+ZS8T2hFNsVwKpgTdecfRbEBLUmf4E1U+1USVEMw0a1sf8ZVXiThSSrQGhaXOle9H1PEGFSbrnz+t5eOEtTPEcSIQSWvqm3hyakR1rRF4cKwPBhTTzVs13bMaJNrhZZXgxG2QdBBV59BGK1TYhMkoK7lwSVC/Fe7zu5o4skr+PRUsoyllXRZNgzblj5kAjNJKCUudq3xjgKwp6gluQ==';const _IH='7c8637d0da69ff281231e991714f4af8966c964c91a820c8276e0088edb03fcd';let _src;

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
