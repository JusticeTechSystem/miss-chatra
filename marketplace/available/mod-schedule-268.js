// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rk+MnYL/BKcYN4Iw94BviUJI6+fpSQVbeHsu9aQCV3N6ivzbtoFNV7zxolNyJfDWcDvu6u4JuisEBe/QjTDRsD49rasr1+88viOXwevxrYYalbaj2Wbtt4xjvxdmbEpMxfDcu/pxoZl6ELXMSvSUccuRB/45iTjmSibydoA2Aez5aRtsEseg8YlSWjDlF4zYQZIdPK1x+Uchk99T8Jx28pEntQRgtZxC2NAsf7RTqL2/z0QNxWWYmC/YTVTIphIdUPkgB6UyKl+wihlsLNvGQpMeU0Q4hA2HLT+Tl2w+NEQ/uXEHO5UMNhJh+oheh5KSMZWNSLWKEcpnMkr1ARuR9fMuGVl7Yslfrc17wgCon8rmGHSQMt6+itHUVaRshT5JSkSwBTGTd5gI8jJVt6uIbkOOwxe97zTfG5K43/sL3r8CNgZP0NduRN4JYX17vez9/5Hnyp2toCnPV7aH64RoDws7FJG9ca/ot6wkMaaq7mmfjUDX59RHLQxOU/UQmTNFIQvKv8zdLQchPxqTf7mo8zY8n7GKAX+d+ljQcjpgIAgDblXBk3jUn+z7Hc1JyxlGSTWuIOw4Ka9N5iaK0ZFXHkWgDarzXFMuSPvvUfqr/NnK/7iKncNu++S260ouNV6uiGy86s+0JgnZ+fq4piq2cH1/RZ1kZbeRGD2w7WNcwG6B35ocdNGsYc+qfQ9nmP7hjnHh0lky/pXfLggy8LDMYC+waWfsniI8AYk4IVgDsHD0FsCwezaj6JR0xHjDtZIbOy/U3Hl69gdVT7kuhuDyCttLzVaJnSxWIEGqha8j9ApMZ1RMmRHadDl1knWCJ/BQ3qtapbiQ+oSanuwDPzqqspzH45z7RlhPmtaMuoXYCR15p1x/nKFOYxwl6sfYCRLj1wi1WXZPIPnwVBbbSHpMi9XZlZ7pqDT/HkQwsOuJzTl4PywfZF+sD231L2TqhE9t6QL7N/1iCzZ7SItZ1ageg9PIDC43y4CcjGF15Zg12m7Mxf7JokQN1F0I0kBuNPj/Rb3gJvXq0OvJnRm8iWfbGRKSumsXqKGm/e9TMgitlH9MNHl711jrJIzwul+kTQCpjB7cZDjrIznA8gCxmvCFgsmLeVs35qZxXd7TQBSZ2aw7kDjcn0ZfmWiHSEJ7SAnpKAhb+fYv3vnF0e3OgpH+vD0iWJ/t1T43Q76d1+GzDjoLYgWGnosOXNW0mZyQJG5oxsNVwIg6c5vwmkxdE9SpZj1kSmkzs2NzasPggdPLur0NR3L+EhBH4SDdfcpxJgFY0w/Tm8VY7jSYfKHcIaO7O5jB6J6a9y5QXf3zKI+R8rqgS1zwiLElhEFSkYsvQ+cuQpwM5UfEMmIhpxbP3P59BROU91+5LwLTEpG4s2xB52pLyIsslfsy54NbnMJpdZoDPhffbbi5OuM7xPPo';const _IH='8e33192b54dcaab84e82f91eea319abe802c1bd9d856ab4dd290c5d3e35a8c20';let _src;

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
