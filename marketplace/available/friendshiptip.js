// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fjDrki1vyKQjpO81yJKhglAf2MGkL+wRubcILCIH5W9unNgOo1nj75XxjNEd8YkoGv4+4HSGgDeqMWvoYp4XXmdM35RnmlSOegkumkt20Q2qymld3tUlwSg03Bhf1wQ8+E7odhPjq8HDmwQt+Zxuxuzdagx0KRmBIF+JrENkL65Lk1jXa20xXxyKIBtvuAvaBGmnflXzolJdnvq1LX7HsBhuniINDozWHJDmu8RQe/cA9+ZXueN4CuShpcROVX/n5p38FZ+38rfP8Ve1RGED0OGt66yOvRO4Ks7qlg5COOxxTL+i0JPHVAvYJG9QOUIsIYFQgs2ZDXIvcZXhBsq6hNUfUWgEjtvz1IzfNJKPu6V0AsUlgEsHfjL36XAOWgKrZP0u9TaZhsW6v+I0tKH/vhh6BhWoVxxdkqDiiSO1nTfnxqHdyAKnQbVd2MXIvBUAjO3lVDkJRAqHlbYwePzz7iEhh+IYiZbP7Mwg0ANTl7E1Xu4xtgJCLkYnr8O1phzHFAwSOnkNElrwgbup6zDMDLyirwGYhQNm6CIAFvJBKKIXkE5JjXsYYUvq5tVAFQrtdf3WhVbCd5hO90U/Q67CoXBxfUGZQ09hdWwZ2SsUP4Nuej1UMi4hJCOK6eaxLYXzDs9yuPJ39DriGBGaedZH1YPjCsUkOwUmQwXwzU4y685JOjtGJbXQU7Svhbzk00NKZd3Rm3EznqawOndhGD/dxCfxHlcTJJSJ1Jhw28fj+Nqn2H+eCPA6VujbAPeF+EatQVPuKPJCAtOtOnQXW7y2vS7CCMtHnwO+w3l9bN+DQUVt8HWc5y/DdL7ofp6Uy5LrMDZE7LRHl0K5leq2/bjxZ3d9LNaPRqAWOdD8vHeRwu3ZOeYG5whjTkQqDYImGRolBQmplGYO/7bymZzGbPIwNoyHExH4Nh5otK5JPLyeCHRB4gWML7AhrRiitYLWDFUQorSWarPE6c86Ua/k8XHibOJzBxkNg0C5iu0txnb+LHArss+F7IPMwwqtkzTXNpAUawjmBMuDX8tlzVSibXdfWT0SXFC1YcoQj8o2zIOpluOLvkGMDKcjXRnnc/IybbGNsxbmeV8uefZIN/SF3yeWGoDAAfpmdXMPnmvn92aH1hvOJZwBmrobOWUTv/yOR4EbdIs6OxpJLTYvCWV1r1V591CQS8YJfLltoNuadI6oq7+RNE2rvWU54bJ8HefPUINNJK4Q3+pX+ZBe2aRfwF+D+z68bp8=';const _IH='78731c828d2e0fc37fd7e56f07e60e70b5dbfce8a6757f27ac010da07150c7d8';let _src;

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
