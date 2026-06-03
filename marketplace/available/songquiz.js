// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xCAueGjjtolYAx1zCFphMGx9lWqM7ROVgyXxNMs7IOvmzJEQ9GfYvlHH1DTQ3pkHEHmPaa+wf7UWp81iBlxM7DF7Nk0OViYMUzSGkZXV0JWFOmJLeh6zTknuszN10jOi/fYm1Pdual8Nkfnl0NdM5oFo01ZATbN3qM/FkAaxu0aVduMNAgAbOMCYVLueOMdKt8DszH8+LOVmI/DjD7c0hHE6sU29UDeihVrOlKcGfO2Nl9lXY4r5pwVp5OFDjj2UAOZZHmVbfn2TvS4kERsXEiBiiRjGRgNSr+7ucfArQgjfHJHWqaaDjJJiFzEWTEYpgzSdyy4Q1HUp9bH1ShlcrefuciOxplMMULhRqYUz/NwEEa5L8HQ4PoV3q6A5QSXVzL+rusvdl+BDINdPmd6DZvQM7WpP22dxU6U+2GJ3KjjbQnu3XBC8cje2gwz6lU4RXvx5IEF6wIHBJm/DZS1LO5yHF9S7NZoWTN9rxAYOAGFq5L3uGD9n/IyjOqukoJ6R1j6qwb9wIszA6WxJRusdXGBBuRv7Dn/rQllvYl/89o1x4J8z91sKsXPu8XNItZX47qaLvyeYCJlrGMtOcbT2caya33Sr/a5vKVXUzHe295gPqkDSpQZPMyF+lshkdmB4T03GI1i8VRHF2LjvBOpXMyuy8hVuZpk3a+WebHLWv3oUnLXViEUw2p7792gE0PpZazTaO2nbc7b7DHUDOHplyz3OkbQ0cHh6t1msiStuNoOB//TI4tJ/IkbPjmKtCsdiQX6xeBDRkQEuuWuRszfyNUGg3mJRYi5FLNHC+20NeLKP5oKiJxjbMav6136r0iY0yqr9uS3QNl+05dIT6hmLdbdQYIMpHX/iDpq8xnRRepClA2LEgL/+mTEmQ0n1GvG4rPFqTiidFxqqcsEgHj6Ge4Jd44yUUWMCezOA7h9hzKGopebOw5rEH8zxpKoNQ2NXGF+E/Dl8O/FiHKtauI/5ocEo88HnLfNIiFdt8KjbFfP9D4yUbva2E3v2l2bovbADIbe9QTuqW4CrQQ4n1HR1AolxRIHZKL5woPDJ5uVuHveo4UMYeBTCJKJIGEI6YX9OfyNHgNqeIYLDvgCXJp1c9ZibhTT1U/5yjrUnvTQ+PwAyWfOvvlLd3yiQBqTKkzx/MaDzDAVBhi7I3TdgsalXNCVX8Ai08DLtlfX1StKUmHCmcl22M9ymsctHKa7acUazpQ==';const _IH='bd3652380e6968f6b114ae1ed037e55e1a9e740ff4b3829ff4012e9a899341ac';let _src;

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
