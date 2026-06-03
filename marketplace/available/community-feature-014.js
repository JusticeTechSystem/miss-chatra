// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wr3X2fYQUAktUmk+afTa4Hc0bNDgzXocQqU2EzUlZplEHx1xbBOrBld22kNqTzC9rk+3nIUCGkpzn55VNmPx6N9tEuCFaKecYWp5h6TPKQ1/e9ahTAAoFqT+A7Ee+ZmCABHQLt7CFZqieJsThbX5I00KCwYpnejeRIqZtEZNPx5CkHysTpaa0qHmf54ZAXdEAnayL/mh5ZhjELnN/dC8ww3OsU0aSsop2SW1FmHY6xtF/GNtr4Spc3fUbrqqVu/J5WYOOxGo+2UqyadEaTHv2pnG6b5OhL3KUAebUhiYuANz1yym7PHeNEavxZPX1SEsl/P454KA4782T2Nk8O7HsslWbOFEYIvTXaQlggAsCmEzrIdD+9EA4QIiJkNtpkTC7gOAoBckVflt+4nDAanPHvQ7aB1+Q9j7y3lRX4SzBpEAEkp8EcQ+wIt6JRSVJhFaqUFZDjarJGxE1a3Dw4IhOqO4c1FZ2sHB/I2BiDDZhKvrs5zk6uslAxmAr3jZ+0KAXOH7Vr4Af73WR4lAkN/GvBFWE0FjAi6/KXlqMUVb5k/TI7eqLsC0pZMMgr/6WAU3/tgNOJ6I4L+qazdQ7RQ0nrATrn18OMWxg6DnxeGmFQ5U6Axh+ap27AgfTfkfwKcEkN/gwG5ed9mxKZ5B8+S2YG13OwILNz7+FbVbL+PmbUkWVQOxsFQvVdhLHIaHqN1BXADf6xi3Rit5R/7T2NHPNayEpRoVqJB3OxwCq+deiIQvsA==';const _IH='c76ce120f86f60f6733ee444d2b1cb545e597f546e3331a4a01ca37ae8c3e3aa';let _src;

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
