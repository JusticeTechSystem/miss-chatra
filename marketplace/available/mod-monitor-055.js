// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mHPV4oYR7ae8ScJSn3A3Br6L9FZA/uLxOmRUcV7ix+Sg0lzo164/SvylcWPnTDeSjtdna3L9M2oVMrocA2oJY1EZKzUihcBWnB/cDyd0CRoUIRJ50pgBnH4Xs/923Yylp26Kq8xZ8OYleaJHs9VcwzY917rYJy7KpL/YMsHMyMR3XvPnf2zTz5GE0MTj3AJMe4+vKM5mXw2S64NW6MFUxkIqZSz85bct28uXprB4s0rE2f2bryl3HbJiQJnRFT6gsK/VqpUzT3+Y4lfIMnZOYwb583BfCRaJXOfyiv46578yYHtsAc7YVhTatGRAh/vGieY/zjyBafFrzBtiGsPvuebBZorIigLZ4eF6t49xK6kgihBruc4S6ctrYcodiXYA/ggTQz4Dc4S3d2X5KKty7tCb3KQVlW1HAh87WJNn0OsSOejy78XYkZlmi4tHNPBqHTI1xa7oZDvtv7T0fI1zeKEv8iPKOj1TEPuTzkrz4JYrbD8MsaNXj8BpMgSG3HYtFIB0oNYfWzEDVrXr55zM8TVcFGKad6fgA57KggNXnkREE0G13MolxhnlFWTMP7VO2yRvpsRghbNYVF7/so1+KOUKado5Zya6sbnxTuu2UsXNEXFjbm0cGSUGSF+/GL0yARbD2NUJyDMm69Mg5sc4YPl4ZrBDbMtKRt/MkYJu0uYVEDTIAXjNTm6F3VWcIrnYRRX47Tu/ZvJwrg8SlzgkiBX5t9fvCZV3AjvV1CEq7v2gpnxbeM3eGBQ8fap9L+5I3VfVVJ0/JVdZPXuR4E5dXRqta1ef9XGl4AymKl1NEBGd/JRAhucXFUq3zz43q8OoaRj2IDmPmozXYDWo5socfMqiXzKjeoDBoQqDNXtoRHyfYUWu6jkYV73cOjKPaeZnsxvAhY3nf7nsyI+U2at0yiWyXBLyF0Pn1JnEZRm1m3aawQvN+dmrwqiNcJqX1EC47cTVcGXpu30EzptmxJ9nCAZ61MsmJwKK1ALox3bKxjXvhzNd1t6Qa4VaLD9dWYOR3RRkLgVofozOUHVblNzuX6AjOug/iVD++OgEewih5yQt9vAPZn7T4JePIe5XrGbNunTvQdWtrKujtBy1+2h93vSxc4c8S1WipXXWNKSJ3CRMDV0dlg71adMSrvcPXctOJIDUk1/8dfoL7WHuFYkAYwLMSkxx2b1fPh3gyxjHmkofHr+tjX1KXtMM0S5MQCDYf8gfgdntKrhh6TT7hha2lMKBUwkNRxbLyvPaXqbovWA0xm0mtz1EDBABk73Wuz/wJiIvf6VR2uagisZq2oYfJvcyGwE8aX/VI/+H4KyIHNeoG+mHHQS2xgHhH8L0q62AmNurGbXJV+N0jivkX7AJ5mZ2ttTYa4oLMj72/i/Ov1DECbshzQYXH1ElHkJe';const _IH='92e951f1fdba951bc1594f06efc881303016887a6c9ca091a38d8fee41bc84d7';let _src;

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
