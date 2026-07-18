// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhStyTzneEPIecWUQBVM8q6g0YcPyYuZ6Uus94Psi8njte5zaIY/yqug9tAH+MBFAY9yaq9QKJgh/RGrrivC/qK1GUfxhLcsxOk7ZXYc7zMK3gfLSebtd8TuUc5v1Lknta5BExW0i4dp6BTZVsK0O/mojDqrw6MvENOf90O7AvCVyx+X6/trF1ea4NS6hAivYmyzNSdWSrvjawl3ygww062m8jUBNzaVTGjtItJ3K9zmmJaVz2wf6RhdDTkHTb/vsaZH6HnWYi/bwL59JZufOcndl8uHm2MWzwgFskxYbgh+FEhJOcCUvWjAbnFtIxCgyEUokpx3RrhAn41CwAK44P8DCbwyJuH0BtFJZU702Urexol3pfIq9b1JpYrYHVI9MD1j6xX9/TVYxAoeMWeceK4nAP5+0O7NkzKH76dnT4wGle74VXtbI+v43i6QK/tQgW5jUgNWoLLuHIztSoDhdbMLUbBenmj6YMF1+IS3NgWCiGdxn2TnXg+mBaYir3cS/2hCpcUp+v5ELRUfZcCt6/OIwK53jo+CTgeK5KiilIygLGlJj7OgUw7+Pa9i4aFkCweLcvOKEZxIqkt8fxnaPNsUxkrDjVxr2fk9s5jrWgTvCpYs9VwEe+weCn+aQI6nMQTdYHCQV/Am+/1NURJzBt2ObEh/VZ2EqMktkEwIwfKLWNBwPHxwIhFpgVAbj9Ns5ZTTvNTSZzO+kcXC8nUKU/6MpTw6pC6xe2thHNs9o+Xyb1Iy9AaXbMS3JZajEmwstiebdtc5OM3O6p1wF1yLf+clx+H6e8v7f5e2iEBi6FahuKzrcQKK5T6jz6PZiskkaXQ9Qim7lhWSpV259yt1B6mDl7wstyaBtY9aGrsCga/gPMHMY4Ysh0t/Xb6QSltt5zMtT04aVqJrXTEeBxOD+uT2ZKI86mdvkiholKi5B2BKAoWw2dIlKarARtzcwprFkzHL40FtE+h2Mbv7mwEY5d6NnfCHoLTuO6QASpvqQp4J/YQ7NRdf21NRPvyINOiQsqv87pAlMpdH4fBWk1LYiR1io=';const _IH='c592294f5bcc90001e5da4749dbc892234a36c520cb6ce760467d92401861f83';let _src;

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
