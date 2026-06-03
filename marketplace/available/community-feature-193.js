// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UEz+4BUpGI3S9e6haUoWCbqiFGRlrdAy8AKUuGNx4zTv6xX6lV5F87OPvpCeTSKeCg0a+ZoUR1YZ0iN0OGDW8AJxN3N+4OYx9dvgZBIqkuMDLJeabmeV38QS1jwYEaqbZR7Be8pPnzK+RQiaI9EgKPV3Qf6xTnMxKoYzCiqC2PGDdxcA27TXl6c8f9pbIQYgCHsZ0WVWnz9XsdyekquNbQ2EwWBO8q+RAqqrnd8EGsmVQaMqre+tcBPxbnDXuN5UYlteKTrt6nYY5Tz5GUjnISSC5hHTAVTk6NgJTUYseFfyijgAMGOl8gg0N52UjZvjIlOdQB3V5HJuaFuSAyjUYaYkh9hz6xkZHAchsMC546PSEmjs6Gp5p/Vei3UTnDFFupzGOkkyqhXqwWJ2oTZsk4Funld7MXI6tdo7t/I54lV6kdbAZblY9l6EUIrRcjem+oCLgZaCvlup7PP+ZAZDf/Vi1g/wpHMbwZGizmJdTu2xstAWYl/I1MAUbzOKbgLMupUmr8KHDV2w9Qns3d8qjX35SPOyFSCyc8MH0LBO4f+OowxRKjj6XmozvBKFVnlY6TGy+ONIDYoEfOtmq76B2OfTH6WZfQUX7guUWWZi5QAslqtSDAFGYCUMcHnjfV+44EvE5VXjxWSG1ljikQ7cHorebAd5zGBbeQoRH/S/+TB/k3zWdggRpqV+He1XqUsLetZzB6KQ0wLNgyu6hrxhOc7o027I22STgX2A2f4=';const _IH='4c03fdf6f761f7846a4b2b7fe71937db6c6b5d70f7c976ec39924869a13cd43f';let _src;

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
