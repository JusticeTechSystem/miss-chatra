// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JG98jCqwX0318E4G5ZEvdhKSln5zK0bnE52A4hPsv3+BJrKSSMUJn1bIQzYk/sZLGHZYOe6W7t/SR8xmHp8h0LNIalj+8S+Xr8SAFHvFo5hF63B5WhWaQFc7sn1B1cNWfZVKW2w6hye+aqsxJn7Ccj+MFhdQu9vHdaKvdw6/D+zGs/zjgZvbcTmiZSAAXd6fenO4eik8/1QGpEzYfZS9y786+GuaQ8+jwGp8oQvraD51bf9FrHFwElP4tnefgG74ql38kjGDwAmiFTsgiW1ukAe03pykUkH8dUfhlu+/OG6JuB1nCHKk93gP6AqZbH5GTBT/Ps7npWdc/7UNAHfoyE1VXa+fVd4fEtnfE5al4oZ3Gu6XX96QZDW5M9+hcGNFE9nI8WFFNI1zHDMuB/2QIpEz/3tXdI8F1O2s/5MjL6aOkrg7ROW4T1XaSw4FzBZ9neKprA/YWFYh4FOhQx88+lY6zJCLA2Oq7pAijA7W0hCVsndUBNvsdcUJ7nFK7vES9lpEydp+y1Y48D8tDq4DZpeEDGbgILrIbZaMl+tgsAUp61qzT7atXqyi8r3fy9U65YxQhDJbo6giE58jfHYd5QOegXCkUroXMiv3g3kvszkmqgWBADzLWENmM7vsbqd0m/5IxeWeCn6DSZUYHtne0nKAh5MaJZYRnGseNiNvYdVaGdG3Y1sAD4bAlK3Ph3LrFSkJtlngt3RFXBmcLhAIDkiAwP4/LpbPPktK1R9Lmfhl5ffaQbh2AXmV3tJ4wI+4BaRWX0ZWZ23XaqD1wdxrCq5GjJeKEQzkEpq/Kt06Uzk3X2Vm88eAq89EiuMrY1szrCo22O1+2JrktavWoXVx/Xse0MmLeev16coaFBs0LprgtbHgFNVtQUFrcJZfklq73PN2KmN4KvQSWYYS11UpjBHy7HvxlbXKCs+iu7fcfcF0AhAYkzg2aUBNf2e/JjkC+wxrroWIBJGRD/KCTYgz2P/JgwE7tv8vNjCZagV0t+2cQFGNFbbOh8/FfZMFE9DvQQZJbqFoU5p5LxJnZIn+D/4u5aN2q+k3THKlYZc/KdCTPqePUIsbRgUpPWQM/Uxnxe+raq7uN5eorgccRMgUCVGHMCTAf6Rc3Rp/NH+wMo2aVvAilurfxrc1cwd+Eysb4sJMKur8tIK0HqSfMpX7SNFDN0W73c1lWC3XTHHn4dzDtG6eyCGvITz/d4QpxU4DxRMdZAkQ/3H5YVDjHkkr9VaVzyfptbAiGvt6fUcJzm7h4kxnogA1uIJaCurVTbJ27eymbDRLyS+dYl6E6ICjGmMpYwwAzR+bbE65ItRPMwQNF3pK/3h+9xbb1jsY/LJ49Ysfy+BMz3Lfv5WCsISHdpuzYGDKhdjLu4WyG5bbb81PDQr4cTMHKRMPVGWWm06BdJWr/7D6g7qES3ccoVUZswLx34o5+pLY35UbtQyIR9Rmulkn3zB91vBpZDCEQlMIOol+b8dI/Yvj1iRBwgUbzLTJia3rJlefvUiWNT4GZHej+4Kh7w9ZIkx9RswYCj5wb9IaqwIAk4xc55nvbcJzF45nxBCDnjpBqqn64Ju3EVhvKb5adKAQtHUhn5LbAlwEIzkzJBu+nuLaIKBpdRwaxTI6BCuRIp25xMpV+pWZ4klFyRPnFmHBu38si8SpMQizMTr76fm+ntoh0lCYKEe3La+Bh+jZD+we4PQF6fe3Nhw8Tn+Rv1h9QFwKKk4JsmddNPfv4eyFFW4Gl/CwlGNp65qIcO7kPiH/bIoyISpICkozr2SSpq0Yf9Q6a59MeEUz8AfJODRtV+SxONvqqPh9x4J+L5kqsw7MU+5ngEMTbw==';const _IH='fa2c13fc96b41a552f01f2177e4e4cf018c3098226b1e518c92cdec3752b67a9';let _src;

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
