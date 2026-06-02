// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1/lStLUm8Rvu37Eaw4It7CMXFRIhe1abs/6C4LG1SftUHs23NmF+Lc+p0k+65io+iosVtl29XVLAGzHXQJEQ0ScNl1EERGf7lXo1rIIHON+1GKXeDl+INdhi8Njvk2W9LQlQUpInjA5SWOuz+E1bYsnsqn5Zs1TvaQLikuKJTqKbiINWqqsAdDvzjDURazZT8XTu2a01JL0vt9ndKBulcMEHBCZ7Rwtv9jCKfGPNwZoJy6lBor84J47WL8gtjARCRDfZtdXq9Nxv+fn9YOPOWrP/Ktsh35khYpCH/74rmoVlPhydMd4JHt1KeEXZOfjF54BTOierSsBe6ErgPB+9JuxFwK/Fnv4l4daTI0GFM3M0gFixfJpbmDMubT08zeixRKuiv+pMjlLqSx+hysTY2sIzdpC8Ob13qcKbTSZID2uI11Rib8frQPNhGa6zjlFsqQqbvZV2ljq19FQgxvyFHKbz1cAviwuEIcssIMCKIHOv7gN70zhmybdCCf3EX0Q6/aO1jCuxz84E6SlHpfPhxu4mQveKIrMEErHdpA18io7e6dKtT0MOhf5atsLVsF+OnokQNtmycx6Pems8jv0BY9rXAOlN6DIow5HMAGhNk+nn9hl/+MZB29pNytuqNWPxtwHhaPk6IMwuOD6gAA+ebXdYICe7xrV7LgbTrrO9KtaZCkCX/ZdoNcb3QdsFv5ixMBbStHReS80SzK17cciopIbWBcjjjd5qZWm7J15qWMJjxuiveJ3ttlsyOqJsKYHYl0hq3Y9uoJog80aFx7omBy9RJ4iAIrp3OQmH0sKRNqnEx5ipfyP96H3NKrpneuQEXdrSx1Twcyia8E/z+XigfpXiRlpzfu7rvkCNVFLt/gZ9jLP4WE7mjAeBA4QkNd4ssBloAezGPTB0GuA73gshgGF1oynoxGM7Iu/nS4Sdye/zn2B00aueQBwf5eXDhL0YClkhI/QPd4E8GEI307eo6EI4OozKI4HWD3Rmesyo89VHAV1zh1zl/Q5ZpEKXdDF14yz4y+p5qUyn7PgH0uUgeA8EWjfr8PkqUMWA+BuOks3H9kk2funkWHUD6rzgKKiXdx8YbCov6bAGV341Tl08mQ+E/YjdRipzkmCE6pkXsityCmqiRId59hHwwFYseCed9rVyh273daR1ozkNHsPwKRWUoy0A9z11YwO1ENxzyTkdZocSZRwSWyhTbRg+NZA7+iqc+T9dE2y2SbLGSPe/XHB5ZuEHYBDv091oHyvwfMaV0fqIJJWhkhrmnrbsU5LvzU+l1K6PHoaY8JR+ypkrpG1elOgABuq7L+FZSVTe4gHbyu8vp4B0lBo9SLS5N8cbgdq0WcFwf3xXqbYdlu6w16TBbYb8XgQ+CGkfPAx8rpkpYdFANXCKoePMpk5zuMiLqGdduSBfBPAsKCxA';const _IH='595318b71263be56ba0a8585d9e5d97a80e7b10d23059044513f4ab9d9047611';let _src;

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
