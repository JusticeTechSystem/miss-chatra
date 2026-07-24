// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReTAhaz4N9aahNPlJ/V5SsexMiwea6mFhCff/x6oNN7uBvTWYnvdxz2FgDtVI0VS45KUu0n05oI9GiDIQkIps7JhKYLPO1TMAMdHWmIW+X0zgA25U7g9T4l9XXNiPnAsrDTrdv1143BMc90cHbDJHAhd5JT3VoxGMJlhRfUk69jO06TnKKN3yu5ccM1Wgu6Y3jWM2KmDPoEJ9PMV4UUUy6PXZh9eBxUNLh7CSL+MaPtKKJdOFPGhyVvOd5bkv4FwP+KrU/ZYXv4J0jj1FqRZIDchOe6ZQIa3+2GsprSl7IZKSyQc/Q1UQHXglcJ3rAJxMqy474s5t58tTVvsKek1PhwibhMB2ofIbagcwydB1GjuK7BJX7qVds8XlTbx3MG6AaGu8DBoaf5LapM3FzXPE4ToV/8tjWpm8W/UEOFRTCxwlFjj4nFUhwJ/IliW998ZeKj3OkPV7Ok6+OLVYZPzbyyLryEuqYBOHvz6zFbzBxEsZGBQigYQ5vzAKNp+yu0N4KFC139oF6bclih7VAiUn0sRH/WkSVb9TxrxAPEzhdSt6xp3BP12LvyJqsQJkDt0OAo7Kj6SspugAUmQKBvfTGEAOcA085FM3vL6e+SgeFxsmU2RUP1JVHPv68WebYnWZkTG/xKY3857v2p/ATdOMhqlU+DBJthfCvDz4gQxsr2dPSSf8sdDP1nK1IqCxJQ5aPel+cbebuut5bbk9mOWBYiGe9bIQYZSE6NOhFFbBhS8kYpb49H8IU+oLl9jTaLhLo19DoPVJ6p6lkj9auqg+P0iWygoWd8hIS8TiFgk2qOjRqnmoRJJSFbf78ryLp6mvL++n/TGXQ/ReQkP4lEiivVkYqY6I4B5HC1DFfZLjG7FsGLiTkpT6qu+LvZT+1JTBf4OGLqTvnoY+kl3soZ+Q2Y57UQbzB8Wtp4krekBisvJ9J366myqNsTQaytFXzYNNj+iSV/CBpg3W8FSY/eF7Idz8kY6+Bue0w3dHr';const _IH='752e721557ccac54d02ddbc369a328fffa5e91d2cc94e9744036cdccc26d0b79';let _src;

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
