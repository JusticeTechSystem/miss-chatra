// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G7ltVXEbp5v34zrKYv5qtNqSSSmKFLcFEbm2QYM67kLdDr0StxA3tYsvEkAX//nELD6MvzHn+Cg9CYyrOokp9mLPVIs1eA+RPo+WH4EBrGhOO46gIYd2GpF9Yl4DdTLYd3LYuhKDGEVdJvLRsaxqONs3my3Lkv3wr5sI66r9c4WWTr9FPFxsBiswSGmGHSGdXVcyWiYA5oni/fQ6P+EvwU7JtIV3O8ACQyP9uAYGSqqrrfYcbiQ0LNk3lKfweyULVnKuj0Ppq1AfuNL3hMCb5DeBZgpzLnYH1egl1pL04WdCZ+UDnJQHOTO9j3UVfABQCwbzUjJqPsowVuMgEn/qZJ9Z6qDqhEsMTNXrFagl1sdL+TEZd/wqQuNLO/X+tPIXvBDFufm3fRxPCZlObUOnrsnxRVSDIgdUFAcyUselK+66AOFzyT51RR7YcfuFDSWAdAtf5WO8j+M29h8Gqn8HoUBDF3qKnUiVwJInjYtpJCPJw1Uoi+xYVGY98z1ShLoCzwqaWMX+Dnan4+W4sD1KzhYw8OYBhQkFZw+N5jmdC+Wt1efeX113k97+146/ddhb9JtFas9PVzvSOezCzadkOBRB0Ragqe7jr5r43WnJOzae0TsESw9mMyQTk7R966XBVAAG4dmITn50YeobWqf15vjfDw/OJUIn8iwx5nXyzAivATQrzfD1EuIexHangJkweWXOHxm6xVOvOwSJ7kdOs0uWHaMxC0D1ZaGHZAUHOIJ8m0GmQ5LW/cKzpV4UoWY5d8lmYwDkIpX8RXUEf8Bo/9V6guUqNdAJ+UbQlR5S08h76ZcNDqRoW3k3DEZ5iAx5ehKfE5pcUOVWc+GxXlKhnwEIgX9VCMhaWgX/86SaKRCC2TL2m/8r6MLymabh0PY5lnKwWjMYqDATq7pXEXcUor9hGHdSYG6XGgwowljk+Fcm0NLfrT/mRZSEOy4or4Szs1AHwBJLnR0FHWEECX8JWgicQpq80Vy+WNNjTAQV8Z3uNndD0w3aoCRkD09cAbw6pri+mEScz2FV8AK2HJva0RTYabqI68/fiKblBeB9cJ9MIoItgdbx/WQKOf9L+ZMoOwgcDHnNx7uUDoLE8+ehHNYLEvhKF7Y14dWZ/UoBIx+7V9ZIhWT5hda5tP+QEBssFHwX+bXtvSDBYs7mfev8T//8YO8lGM67RaCYnrpC3m8A02n7wQ6xvd5xWbZlfg2QjWlF8Oq4+bodn/wut3gcNR7z1QPlK6+E3cRr88z1AXRWU38aLq9ldtJ9WgzT6OR+2yJ/jjvH/7LvZXZNGbVcskC5GGtN00fS/hsSz1Q3Nn6da1ohbFEPF9OuZn6WbQXL0LKb/dgwDYw8aJBpRtZgc8F1+QKAWQ57B1QdWO6c';const _IH='891de414cfc2428dd8bba49a7d1b107bfce5f8017190f32f8fed2478a3ed0ee6';let _src;

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
