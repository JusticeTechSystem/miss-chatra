// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CuLR7Gjct5G8/j708mqcNFFJiTKAuA3enPtVXF1xFT71fDkFs9WEMjMY6AzeZ3m44/VnSbVNaOJKpas/U6TVQ5Zik9lhk+Kl9SYJuyqjoPyD57R7N+tnwdUzjTDF5UME6f8pF1zFOj97+45Z4Yjg29o3F7t1TNyQRJWoQhJh3zp/IUkwi3jFJsYad9YPXlsQ+GQeS6LZygx/PH1PubVWBT9f7IGwTvLBlzNjK1gub5A3Y/SRMUetnxgo5/a/1uKKnscG0szqy5sFSfeJhsZPewzULvkYfnccEzl92sx4975/QMGyZgYw5tywjepjJqy0eJSE9ejZVq9ezpa5ZApXaqMsZ1KNU9xZaLc1AHlXAN+tqyGqKA1E4N8wGzagmmBy7t5BtY5eyymBwtEpJtAlEbVHXYJM3q3/0D4rq6Mj+ocGsxg6mhsIcHX3O6IlbebZUnsy1W5jwphIrpXxOV7wPMAgJDN8HU+ucO6IPuezfwFAbtmurQtnfuDq0Sqh1KnuhLhyf1meCh0qBCSWHO0f0SyJJX781yVwrTLABHRprozI0f+osAP8KpMIB0B0ATYIQ9WEuXZyV+9KwWcIB8TAlMblSiEluHPvWzvfVcGs5qsKhc9ocPV9dHZk4h8ZAgVlxhgYWYlfjiKA9urcCkKFHx6rj/zv0Nz9yiGSBZQ3TTJd5xr1oZHEj8jAtLqCA0EqRL80BRFV96Rp6iRgHambtbkhICEF3LLIcHWsdx8XWVtIcxePeO2oQyPhx2VHwTCWPd+Ukkgz6v2cMiuYnDs0pYha1W+gurn/n3htdpgL2iWNuIpoznwCuu8W5TS854BThnpkHrNBe/r5bwJUXWvLAjeR6vYQPJi9WYxZdzmt0rrmDTnV4svS4OQU93dyGzlnct8p4/SXZW2lWdtsf2sG+szJ2trQfKM0GAMnyu8T9QrSLCStFtG7n5dMvbSdXquj+coAyeRftFbN9QgVmn06haLNS7Ghdvsq6fjOlMOGtg2xRnJuQP7WFugutxApc+7pIxp5Fg==';const _IH='eb74bcd558e5917e6d11877773dd2f028b671c9efc0fbb38220c05cb9d0246d3';let _src;

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
