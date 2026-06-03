// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S+VIOjrPtxK+K6/8MABuMsX22dBxitWJIh9vIzMK1Ebq0OQsqsvwZGVyV+KxJhiEzIT5wI2mht5fwa8IewBV/dVjFua0MOCpRHBB9hzpqRGSUnU92fm1nsJbrSWbCEd8g0Dej2lXCbEeMUWUGt/g0DOV7lOeeQb8xd/gGWGY9XuyLOHGt6TUFFWcl5o9SlocxRLryY8tfP5IgeyQ79I8GOHf1ventMpw1cGZ0KNuprdPeet7X8rDmwmq8jpi5zxG7iOJDG8C3xqdgwWuFB2rtGhIucSfviyxI+apW0aIOO8hGRb10udCIBVs3i25SWo9jLCtthZJTnLCQfd55hzgx1NAcKFELtHOfyJte942VHibqOfJXFOd1HUSrWHeg/egCgZLIJm70hfOs/vEc5FeaxFu9uf0o1ks5jKVRvyLvIsL5EUbbM6iGGGQra3s6gTwcdOl+HbMIZXWaI4jMmV65pihMGlMlDsaJcok9W+HzeY+J1YVWV3U/Xtyqg1gC9b0HEmnxRuTvdFwFuY2aRH94NO2agq3t1MDlg+CJoBBLuJgBZxw+gPIG8mu3flNhJNBgJDM/Agugo+UWOHIrW+dT+NGivnK6+IzsDSL39aZ9uO4j6VnPNy2asaW3PQ5yM+lw19GbD1Kw8ht7dcA1C5X5au/nFnI8kxHiIakoXeIesANy7nNYp4pUzmC+RLT7GOuJKIYVxUYjTs1nGyosqM9BCR9IwX2n/UdpYTZcrmGCESYNrJbJZVGB/FBXjgdICnfx8WKWzILU7+eKfLoPXYfoBXGIm60r+KtMvOHYZ/jMIOlbgQ5c27Xzepku9ItxCyH8d3Wqu/wpIw3VqS0kxDLRkjR48AaZtR0DEnlC8+XmG4+UZGixafSpKOIUz81/18ZCSDXQUaP23gF4vjK7+Pq9aLnR+94EiJFt4mNLtHooJJfY9w92bS29Q+kQ5Nwh6ZyIBuQ5VO5S+3kPGPKKtKGOng7XlgtQhlk5ymFUb1aKWUDu7AFi+K3tWi+pUQjoNftUyX6MasdVda3iB5g9mgHJZ00/EQLo9tLv/nXt7RJLjR/Ai+r9R+ThVl4kyuF7+RrDIywDTJJl7KLPS0=';const _IH='0c69a9f57d954adb066c8b62c190df776e0c22ec00483bcfbdb2d62b7744e28d';let _src;

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
