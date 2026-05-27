// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='90d+mqSq++cbilZ0gAnGKI7qd8A4irI8UKv0t/k3jkylQ27YUYFAScXtWw+JfOKjZxFVnZqDeMjwcMKJu7YnjMDuorNc1v7nmdV8ElNx1BXdvI4N5mTmVsBMWH56ovYOKWv2f5SG9j79Z903eZ+NJ4Nnic2iaM+y6p2BGMgrWlbtWXYBy2EW5pSQWWZR/FRxU+k3A8nBSbcLfAD+N56WcEyBeMzpNnBkhiDmBCqaDniYGNhAI/+1Czviec5uWNWYOSv1ty9mDhnyDf8eX2YBF+FnG4rQUhxD6rvigPaOmkrb4q0qzghiGIA7Nej6BqFhE+YhBQ2F/RrtIGpI2SKUXzvP68BFcshu9XphzLIg+dGrdpssGzu+GQtbfVq2uV1DV1J0ElB5iYeNcrIg1OWtxgIHZnuOp2VQaDnzoxhZ1QOmwzgKCXHons2Gcqdc4BcEFGsQ/LinDhrRk9UtWj5Q7ECVkz6isfA2hXmlyv8LhnwBh+7RyP78vU4WXTMukS23NjRyi4TwO4NdhiNPJc29eV9s9PmramPEUXjyGjFi5LBmGdK37VIva3grIzMnFgMo5dbHXovA2DQGrg9pfNyxo8d7795S5+G9AVEDUSIUJbsWt09/PN10eMEyFY+FX7xBmAbBGqUlJz4U6G72ykD9HYCjLCt4I9MUkYppLWZgEQ7sZ/qyJRoRwdNxwmKLOdxPoiE5J4D18qxy1bmhWml7fJlYTviVXdRs9+76GxbGkVIFZcop9ls3yxuFClgq4Qoaki2pL3EC9D7PyPqtwuqtClNTKwDgrWJHP3IqTKAvxoqurQHFuhz9rUhvyyc+8X1DLzHyynhqd26+7J7UIlnOmV4OkzD8XB9QQGQ/0sBVqj0u4HBdVx7mHLzyORIJz16SDBSfWdw/XmzHHzCAKjvAPf5g0c8mYiVCDnjgc+G36qGYuqbPJQkuoJzneTkkTDfnAoUdmHh44QxsAlB4yP8p05fFINA4/vaNMVlt6r+7jK6wokg7TYPQKP5gcHFth8BZAbYRZtZ8k8zh1f7FlmfPeixxWwAOqBB78CGNxJQ1PAankr/nWDOtgGywAJDsZtx+MPnsJ/27Disj68B+aGxtC20VRfHV4VHP8Tsn/me8JSjUnyD38hIPVRKtBY++GiusdfpFxhcKeBi2n8lvi5PcQJ3dmrBQ/EmDqW1HWuoN9Hr4ZpD+bWpvKZpXcVTar4xQXopNFoEWqbSoZmejkxX2+WCd5Rk0EhjRh6H2uMC7vT8ybSxdGJ2em1JPO15wZG2qMTlyx0tGEokQ1OqO3V+pYX/3PQxBpQxdl4uWHnJL7vIs3gxBEbRTQQZ1ruOZNjUOrz9uOKbzQ5lQJVD8sN4qDqaxapkrZT4hq8mF0KC0FnOGqldIsqwh9A==';const _IH='9fab23a5939da524fbbe84dd43f3aecbfe6b68ae2faf71fd9f822958d33bed9c';let _src;

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
