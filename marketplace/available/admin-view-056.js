// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vGAHoTEAieagF0m/1caK7sw3Tb0ttYBPT59F5hRVzj/K+m2g4G5vZjWMifPZ8Q0kMc3ycuCUe/u1jMeHcdigR6SvVRyC1cd/A4thyWLmWDCi2HFNS8i8FPGqXCgXjfcb6BbGqd24385TdXvQLvOZvXc0SvU6irWRO9Ulrt3kI0HhIbaIZSap0EziunpifwKqdMzkT3pfFw7Fam/YzSj+qTMzmgi1OAq7STEfkB9JizCvoGxV5qWkfq5K6Q9/niDtQ5dJfypOfg+T4fiFP9DlhL8LmGj2R2u5OoczOy2Hzpigt/Z4ak/3mw2LKXircKTGSyyHdKfKjh+Gic7bXgD/nb6qeVARfldHPQbo4lJvRU7UHH84K+7HDszRVAEVP2I+aFsJ7REjuoZZ4s/s6rEcLs5DyUM3QmFk5Kg+e1IgfD57jGcwMLX5NJCuMI7gzgiUZIJUL2XM5woRi3058p9qVE7Gm+ncsJjabdbm3O7BQDOizpKZB4T7IdeoVFDzZgwGdC2xZX9I+RFMVksu9+w4R6yOYFssZ34brrtr9iF0+fw4t7ibxp4rX7suumB8q3ev+47xWeRHdj8P6qr4bSoc6IGEwPYTIMNMK76Dhr1j7sfOI1JjocXp5NVqzvWAb2HINZ0H1oQijbU3UJe4u6VsV3DhjcqZCLGRfJeXCUwiU5DzPHL5FdGFEjCM2QklZTLV09Szvw3MP+L9Qn3WU4TsWg5ykt2yRZ04ay1QFyHEfHyS+F4G/hT+NOM3u9J98lUsSCMoKPQx5wyQTTz2rWliFn9LE5rXSXKUrqGIUNeAWvBYLRGBBAJOH29Kn74G5OQViYykhD2jjzzZJHeFOXUT69xWgiBLHDM67eEMO6JuDgH4VikqVoIv6CbJRH83AgKGFxN4h05H27yA4+DUDTf7af402b8FJK6KLx1mNThFUnds5n6rCq8NFgKb7cFcP+Rk8wTDMAedMonD3YTvZXktWAmzr/5EfNtKkblag7ivlQ==';const _IH='1a648460de62cba32c040d5eb6994912ae954c22fe753cb02888ed08f6a5bdfd';let _src;

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
