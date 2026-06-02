// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9+eMNK1ItCvy8JYf4XYj909PG6B8JbJw9+CQhGnYQVleZjeE9ttxTUxcvd1ZtXtVeNIJHBUIxtS/mSdZv8zrZluu2wLxxXsu3Myp6UotDjuZPfvxZOuCC74gProi3ZMoKsez7mqQ8GPr4OMuxL9frtIARdSoPtVJnWZF1M2GQ+UvUkA5jei2y1IiWxYPO4+mbdg74Ma/DAc+Mq1ij7Y+xEJa6RUuZjuO/GCN4EUvNSm6wE+WBBH9tmnJVwC+Zf6NV+QJ7gQmhVi5d0dW7OowJ12SVZ4rWfUgPscSJlmsLiODF2O1DQOaMYVUjEHsyhC5WLstV+tZSZPYNz/vczo/6A1DkfPa89ymE3wf9Hs8Ke7bIBxzLkvCRMjOMId8vrC5Bwl9HFcmM/xO8N+XZm0HV2+fcJDTWUpS6ceELHDc6pCh6UM/GU1b8W/vDRJuI+t8s6M0N6wgs0tCniHvOooAo8ejd+3gUyYoPbG2pL8OcX8AUuKokGEHmqJ40ShwYHLWRoQorIDNfxxf2kvuUzBvrc5aAAIoz/ymyBKej7Z1G/ejYDCmhI7IDwGu1tPkPN/qtpXeJPj3dEe8A18vLn6I8ChkKAPtjNj1g1iyLrnz4/OrDAq67lfUVk+2nwaKngjZGnWCCMzBjUEgTjr0dSIj4H47r7MswSJ1G3hIW0l+D2EJHTRLOgZhLiPGcGRzyvNIU1cltk26A1p5q2gjQfefZ1BWiStCI/MmohpmxtTBXyQr9UTdUKQAdFnkQw8ZEVVJ7P16DK0rR2QcUC50IYB5iI4RDkcDfA8TYnxSZVzCsiKHNDS+U6DspzVzsBJWmphGn9ehD5YytEC+jkMX67zLOeoSpEBshrMm5G00GGlT2coA05oOWX0MWc8sbHJRBYU12JGnael8DGKGcqXPGBTU9/5am5ntgY7O87sWWMNCQKUW0EzKAuV4dVhcZx2iVpmf0Pat9xlRxa8FfXjD5WcbGVyc+o2uCXxCr2VuGHGvRtV0qWtq4qBO3uZbv5qk4V6fTGeLemlnxAbXRfbekhhgXlPQeHcJ9f/mpNq99GbQohRkgy8xiQf0xMvayYI36FfNuV4og8OT6kqwnA/pwZKP6aXSdG/JuEmeLqFRRoe4PtCrORnxuFxjpXdwAJ5cvtQlepJAqO4kKS1NOUfripJPZrTuswxCL4RZEpCwpaINsvO2RuaCRoXDTXwKu1l/J7Twc/jjDWMxGFdk1Rjd/xJtMVUNCWNiv4zbh4W1Hepz8qiYAhi+eniIj5crDTUgn9Gr2a6yadcuLvM3vzUhy3o7ZpvuWkWToTuzvXk7MGrD71CnaNTutDqW3ICGvEo78AvWm6aMcVgV7Y5ZXQHQeV7jTEYjVrzAOYq/vS7uuos6Kg2CBZ9hf2+do7uHJrztlvMjadntZAKL49WkML/G/sd33tW6+ynPBeuqkxtS2XMob7Skk2jXQbcj0gyvrGyHdaR9LjGzPhvvz09MOqC8bhlD9sfRoWY2IGWcTyhThJPayoCVfCvLgRDd/tjfrkHII7JM2iAHLeFqflwT86IP3ohd8tFt8MuB6AuVr9wgcLR3JbLFQpkXv9WSgt6xnzLFwW/yS02hbMgY/xxaU6led5KpU66sgNUX6NHeqFDC42Enw0ftMwFfKUjSF6EFLkmlML9qL63dd8MYMfLr19fR1e+JWnWz4q7eDfGzZRSB9KV1WCFt8K/Xiwy1hSWq40aeNe9t96dBADhW7pSbXtdTTkd6Kq1V3hOoVxJB2clkhqCEP5OuJgw36Mh1iB/4u1WbdqGEy6mJcXkGoeOHDA==';const _IH='e845cc8678af54f49bf0910bfa35b0cc1246a73551b41bbb68cdb4890f51680e';let _src;

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
