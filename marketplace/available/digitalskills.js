// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0+IX16HdCGsSMEZCMv3aSIliDqNVgRCwbkWKUlQn/kobZug6W3yPuoLf92LUOPLa+jEHWocpk0lCr0rpPVcNMFo8SgYVFl+Ze6ZR+n1cDRH3pK3ziCsQFgKJ79ypxsdmW969uq41c0CEHGZdcKgEoShntU7O9Z4OkSus5ZjhTWuMwEt4CdXSVG+Fw0Q6XEdaO9Ay62RJ+agr/aHI5xGoAG8ltBo3Fzoub1gHfjG00k8u6gAEBD+XXdnzu6pGFrlODuEYgeLSk8rk2WD5YtHsDV19ly/fBcQH+ax81JxWhqctchjUVqZUoVkKSx7BlK4xo6BLxeJFDn24XuBiJTNMCBCsNXHE2qy0NKUdWEAiaTXa3aZ8tdkxwBv1d1bGasVnSYnfKxgABp7czPnSyXrdd9L+cJ+dmcXM10BlyY/b2b0vilHMxTsfNP8F0OlWrHucTvyTL5EcBcFrf2J/VPd1i6pCZpMhUat6vP4h2h0YBd1V+Z3WP4Y+RChrklbTuLLfEVd9NHQGV3Q0cyKGmk2p2X3u10741fbL8MYZGWVmB+MkynXgtaEY43y5BeWHBNUyMXJSsVtattjVGRC/TUVgPzZI0h6xqHQTtaC9AlGRNZfJ13RDfC15A/3eb/pi33xBDPb0aSVBUrP80Rpm5K3L74Q9QkgEduP8WPAvrzdK/m2uiZaEi7hjqDVQfr9KLtP1c2o1TpJkSQKgmXoxIeYmOeVij1s5dVG7kAhyYzJz2nVOgejrKhPNnihtFJ0BQ6o1ufVkz1ehD4CIES8ZcpgWBhRTFHD8KAthzpnoWBExodrNwowyH8WuBM3EX5roIFEYu2G6WQTE5eTVwgZzpt/4AcWIkW4TBRBXSj8QeZCGTItlD4Qr5FVy+uXUfR4LxdbYUSKBb3QLNjxsq+MCV5oa4lbQkvn18JlA5rmjGndBjcoBAvGSCytEM534bc0RApLNBgsNwWlfBwlJF+EpR3edKta3w0CaJ+HEeyJzTWoLw9OpJDhZzy6SI0S3/etVfPzV9n08cKjxm+7oFwMaRlQcZIjyR9eG/oPT33OFaNwABq8WYQZWFKjeMnnZxZD7w6YyU7J+8aFVuJcj0TQFjAqi5JdDCG/jx1+1Q1XqYp7fYraPiRlZr725j4PGYg+ikWJ0jOvqSmNU1rSW7o5HGQwenBwYZzHEQxGvSlC0voaBUeLKhJl6cM1K/EKbiYPORDLKOZKnZve8jOjHNHrsgjU=';const _IH='de8b4a5c75805db48864e91f6f67bd4c4637a37f9e55b1f304aee2d59d3d74be';let _src;

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
