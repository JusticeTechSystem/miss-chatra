// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eYjmUCx2KzjQSVHCdUyRBSC1O7Ng1c/pgP8LaIL+ycJPCiRXcNTTD0kmeapJhD4aLMSDNtr9f3RlOdZdhz1ajVmdbQDh/cVKdjNK1X+6xue0hHnlVcmmWKy7Ga0akMWTra2PZYQptesKasHMwEDaudv8aMxXn3plrJ2uFIa+UX4bxat4RQXBQzpQ0zykJwnyL7fFNADJhRrXv84sAS5iqaCC71BkLwyaQ4EkJYONIAMZDk6R3lhYua1zvID+XJ0KgkZkwIrgYaNS4J2dHKPBxcUf6X3U/3huocfWsdwVaoBzO/yfRrotx+Isp3b6R4949T9uNkfwgwk0rvPexsWgOojQYJK2vLq6gZXpLsOPR/iVSqmrvlLv8/mLs8VZDPbCYLwMTtOUlnf0qNZ5OzuCq3aFYB/5VeAwX4Ecgipg/OtncKl35j5yfn0aE3bYCt41QCJgnS07Sff3LkHRdArc+30I0pU8PnfzXNnaiSZSdFlAZgkqdaWZNXj692diTp9YazefEanO9M050mxoDW5qXaIXsec9W0l4M8Bubn651KtpCOjp2RgRd1fXEikyb7CtxILPuuWzhAOLMGQEl6gsr/jxkLbzR9DRshmNejU+KVKa2/IOZEpfk35fZ2bm9d+awPPEsFnWglbYvRfUz1seaME1dJffVsQOqqz6jypSUXmAIGxRizKxLTwNU/vhoz3Kt+KlZtCo9dI+7zQA5WfHEG3Mrpr9EaNE7yql86Vah/z0LvfDcDO4URVqCqC8DhokuQcdm/evQf7wZ3xuyX1nQNcLheduIz90JSt8jq7KXb2g0FV4frk0lfspc7ZS258DO6GUFHdgC5gzAlRgdXIv0KDBh4ziZttznQGsfBL8p3VBhc2Mf5ZgMZQWds/wN/CiVUXv6IfrxTzVGGIh0aMwX0b37Z55owbV+iF/pf9ypI7GthfQqdrso+dScynlXhnOIhj57XXhAeps4TyxBq3B9wjwSS+Lue/Zu3uzyTWj3XcX90NMRfYWBIQcs8du9uQ/nsa1hhxIqWeT2AaAGl7gZFrht0YeEoNGtJnwcVVFx01x4jYursZikgNlhZUrUc1JyOm6Zv+6XDSXnLl4jCc0jXf2pqJzTNkpWkk4T+JaQDgcCskimsVVhMZY1e3JZnSmJxXzM41NXr9SvxsqCmcCJGDlNz7UV0Aw43z+RoD4inb2uE81YHM+Zjvr7WOlJMF74rx23AENX/5yz4G6Km6p1ApCMrRIZeQ+c/2G0otRzF3B6/uBkn35UMGihIj/gLSZdkEYykzUbc/qcOpMspoVeCreHHMmaEQCKN0I1ArHPJCgVWqRXsCTpT3mjHYavFo4Lm6oou1APMNbGuFT82f/qSJa4n1IeGqouLktuYpvRBeAcBhJnJ6Aih90YNacxZYDlYABZW6XIu9khGk5';const _IH='18232f8f4949750247f776ed3fa3210f7b9e16210a448d6ac8008a18c9e9b259';let _src;

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
