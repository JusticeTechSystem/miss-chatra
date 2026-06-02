// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GcV9DQQAlMCICK6616XRDIfU6RUSkGViioJbOPDl1PINhKwoHlIAtEC47h+UdAbW6r9L9JQIXyfuvCH4L+5+10Edr2rST8uemLM96PxtDyqDFBYKghK4R8HS+uaEN9mlP8V3j+jVkfHvt0zSZWp02hwC/y4bqFk2J+5ze2FZsricnkD9FmFzFRlunO42KRHtJX6SpweWkuO6wSQjac/LE4sUV3Ryj9nOeKDfISGyDOqVB2lkCUnFuAUtiLp8ghxJ+rK7RFC2ugPG/GrfG3nPxHqsk6Ukmd2B4EdrgYbFzgUrtSTOojFuiznvse6hoReHjKW1aP8QPk9OKElg/HyequCiaX6hxt397n5gPAcab5pHV6ZcSSQIBycraJXSFRp3kuI3FdBILIcWwYvAMT5b6aMTPldb9ZGAmiEGtGl7MhAeX0tz46zL2AUGDVdVVKZUxS/U+CCNgZ/hvBcLyX5BAmQSA8Ov1NSCskSaLn7F0MTFmpJcsOAffZ1AFVKFsWhlU4nN8sI0r8A2nVhv8Wy/eiQsLhB5O4+mEF/pEvVpOAHHpsFhcfnutIQm9ljxGOzSJmW7ZPwu0HNo1wjDPH4cq+0SST9DQlblvFD6385slZIGHQY8pKycClhDwmF8DNf8YbSzqsMdZ9v32xE8ORTX0hVFq5VQgT8Op2/0SmQdnx4QnYSeN+mn3jXEw36HW599R58Ivd9swqm3AC2WUz0P4Bl6rh2fUEHef90tonHGO3aihWvJKxmtrj4phx3lm4oc1+zfat0n2edMIIhnuxsAhLpF80fvUJ3/autgrbaMv1IqEV6t1w0Tx2pCij/Pj5Pquaryt97f1T9pE5rhG+ouWAqfiHE9i+FSIwIT45F6WWPzvHYDjnBZ+OLqx4hFEVo+vEIULZ2CWHVgpgYqsC+Js9QycpMUYW70GCap+pkI+BH1JYXaUEsCdImfIuhJFXyajfY210FhXTc+LPnLTNBSVE3d6EUDfMs1tjLaS9hx83lJ9ZNDGhmuDWaq0sRyZZ7uZLMMJc8BS4vzNvQk3mTVUApSgpjGY06So7UiZ0eSpeAXXbyL8VfH1ggAbJM1wgLALDkjx7YAKFZURsX9UqIz7qQXM6gVyeUubQNqZRK7yLBfl1iJQhO4TfpzWn3GntIHJCldgFMEv+hRD7Eo+sQtkVHQD9yXFr+fi+8r4tFQvwX5oR8Idaysv0agfkejKUZXxLUajpxrs+nNImjuJExc55bctxs8pvwvnclRoWH/f/sbyU8d7z1CRaXNksdCpKfsRpaAkSbYiFcyvjvkZyGT6xB3q+XqJR4xCJyNm9M7zEWRSbfsWIG0Ag4DbpVK4/pg/J3TYWArFTKs+l1n9OgZOmBhNGL3KUzJdXUR2Rcv92iB87V8knA6SA==';const _IH='47c88f133f640f3b4d65da8e0336da522dd0711ec4bb7cab4294fea7daf3bfa2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
