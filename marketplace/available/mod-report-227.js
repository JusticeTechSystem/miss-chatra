// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4MCcnk97Ry5iY1VKsITYpX1c5FgDp3POtFg5h1hkLC6bqmdx1YWbiXe3FCy4L+ntuIu1wYFEtWmGcBF4UFEPUgmCnPgQ0S3vm2k1boqJIENJzJw9K2pkGR4QxWEIdWCndTpNrl5tAFrG/yjE8f//iSqRTP8ttj4fs/LvaoqkkH3x/TDTEJeOG47vsC5o3rTNBQliXnH+fvly0aEX9S5Wme3FkCQG2k3i8Fq1fS40sNocLf+WOC8j9bdQqhaGHKP6dhUn2B2xt9PKEqHvrNs1hwhRPDmeAU2wxbvDlCPyYER2ePws0jOC3L1NN1OmiZh4GvQEhJ+y0Ckz9TI5WwPWCQL3nGoZ8WHBqDw2b5g3FSGAtEGpsgDPmJ0yt+/5lfeCeG3yEyKGshFDV+sWn81CTTWJo/iWbG/HL8n49fPYvDCvkYj9E4Z7KaQXZ51H5qSV484lqL0TmaFFCGgoN2El8YCUbNFVPbIVW19RWoLIKzG4FO6/BeZ0Yj7AxNmqahrd4GS93A80wp/aDGOiVFS5pjn+y7OgVC0+iYaVZJBi3y/Gvnp58ydFx5ADlRSueM8lpH/CXbED1wDasQNmdM0plqGFD99Cw+vlywz5cOyRgv59fh/+/BMH3WxovD1BBbzNqjkBxhLPZTZ2DXx/660cl03XwmhKQrMhdm4q+grbgl+Wao4dRHXEUfVVKR8IIJP5Lp2DRUrZjuh2Qz6O8oacSW0EaZw3wX1yw5ewfZxySGpQW9AdmJbweTOOT5iqLNoJwLQ6JhRFPjJjygnYvouh6SVWJ84wKjASqBMzA/7zs2WN5bdH8q7kPEZs5hrGSZJWWbRkK5ehmlOrFQKmeRYZMxO8V/WP4I82AssDmCx2nJy+Ek0sfpBb7MiAaSKFmWMxIcz7nWmdYfOkCmWamSQX+rXeOW7Qviwa6QWCn5Tq4cD+q79nHUJrqjhMDcoc7KiBXmlTGME1cuzFMAqoEIQzU2yGJ4hzFyAOSRvci0Cs5M2/dDzkSm0LwAU0m3mnAUxrXzseNvIa+8Qgdz2XW1Hn6wXz/0d9gICFLNb5rhhJIQ4G5YaHyFutz97NA4xRCKPwjx0F/ZD7rDcWwxhzLcKpsN3bAS1QPhHyKW9Ekvjwrm3gOLGF8Gt6hg6/vu+bHM0LaVhHjfkFA39/PYrHdMwLKWOWLSBSf4OFweI05UfIN/9jPJ7YM/754qBKmT6ICEHLG3VKZSxPYZFBTdngpjRbqe+sykIYU2MUu6jdc5Cs/mnN2w/mFfcwwq7IbIOLSrC+/eNukHV1eF7uIkpC1jabEeHvIO8vLvhHMb2LlGaF/lMz0tLxG8n8mYE0fbTf40cUV0BRqfaMVIgEMBqQcH07+WKsSmyqF0ItXTs26P3M4cgLDMETwsIk7Q==';const _IH='0c4a09b2da31a126ac29f3f5368cf86d6e5deccb1e8389812de74092ad8bea34';let _src;

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
