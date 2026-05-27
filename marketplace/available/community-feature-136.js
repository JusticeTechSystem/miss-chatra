// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AGIqopXZmA6XL76+hNc0jzu7d93fY6KlI+1S9HbTVPb8vEQCtYHVfu2GrcJwQx/Iii/rQiTn+ajaT+aUyZurBRbbE8fci969B7MPOGwwSyO93qjwSVxvOdEYFalQBaki9CJqDg4wUqPcgCw1sT18AxwKMPjo8XA4+2oavZQJIJCIDM8G0jImc4MyQuA5zTNYbJk+A5+AjqT4ZezmT3zSRHemPxyHidfW6zwrDAnOS2SPdXsZYW9D4hmPLLHx64EiyQDm5Qvm54J6tPp06i684Qh/lymLHfaYJs8x+CUdbp7aqf9IIZiSKWDAtXBJBjJhZ1ZdN5CGOry4iHvQfgrtF/7QAgRCfRtBmoRz+6+ABaHG30zxRLTkRvl+rZCkQTcqeyUJwaREIiOGPScxv/gY/pl10BAtFlSHGajp3LEtYg/6tfyEqPuRyCHK6713ZJn2ppRtAbgepaTMzIm+OYlV7vPZzubUXVBV9pnjRjmM8eJWG3hocOT79ckRHnZz93Cn8VzdRhVV3ekXIsDXkbMqEQ2gPbT8uCkh7nWqm7wnZ3ypYMAz7sbjr4SSo6O/sKamASMeo5Kn48nkoiz+U+7iRl8BuwHh86iA3LgRGAUYqQ6ptGBiTu+QU4i5+1Fn4pn41/59hmBt23qkOWaBwrbnF9/Ofc2/wTqotADbglF7vTcQ9gm/JoYx7C4i5gdj91EsL6uxWxSav7CZu0wDDMPtuFeWwJ4C7At2';const _IH='10df8a2b0ec84284fae4123837f7ac17cff5a2ebd752180839645b2d83f221b9';let _src;

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
