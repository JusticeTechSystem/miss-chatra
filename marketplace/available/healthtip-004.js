// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnP6h8kmDq3J6gGGSWpv2nWz0n84VGM85gwfr0DZu6Nkj5kC8Vl8cmNasa3K6YBnfVVg8ljkxpTqNlg1sKkEOGTfjQziDflGP/abB3WxQNe97L6lmfEsMn4NjVAcBwLf5OFkkJkTB/r8LuzY0h2In6/BwjK48+LkzreAo1Vh4AI15lSYTGjEmzxhi9bE+YWOvdwxF7/PrDjjVugHlBO5yVD8QVB9PkKZJoi5g9XKeqUHCuRaokz2xwuZRZBCuIqI35x71InReyQew3R15qM07OojJsVnp4va+4O6kix5HL628+BSLtdCLsfcRuwpHZRVDPKuLcfIQLywXKAy9BS3uq/rF+fGwNQXKy3twlHeTBORapLPC9wDwuoITVpFaxJ/L2lCNSQC+uZZnC7jTdjWrev6K41I7B6x61GuLTvvQFT1Dgcy87A9PwV+Qrq/QgKB3dV5Ux48W6rhE0Z0VnoYGb9DzAulm8e1F/kayxIjCYqz3czzNtmrbaVM0RtnE+DeWF3uinSfEAD0QxNt8r46JheVcTCpAuQ3+JSuMv/6KzXpG00Okwg2hPozatNApuKFoxhDVLyvfdE5uqoXEH04MTGZMr1j2ptuDCi31wlsNLaxcXgZx2324Xz7t1KfGKiTSSEiw08Xa2i7cToXaL74ScDYTg3yNPkaHigD8EJl9tmHbKN0+fqGoaal50BWj8Xtzwckpqg1TzvXazaG3fot8iTY9B+uSTtrow56a+D7PVttn9MXgQsZv9D/a6fA8/Q4JGbWdFdzyUZ8wuIjHmef6oy4Ruib256VudCTYWe3S6imTQNv+Bc/+h1e7HRKuAHm2hGk0aY9pAUxpIC/J68i4hhlkrsp5boW2D7V0TjdZinSKpWyqa+R43jXE8ZyaFoyMtYzD6BmhB5nkaC+Oj5PDtN1s2odJEw9RsDRgbqprhgvMDo5aWlbgr';const _IH='7b0fb5a32a890ee94799f4db5f64ceb54727795764a30d8ed1658891d6a6780f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
