// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ytUhPa0G5/vBQtYsilvwyiWiUqs2iE3DF14boMdPDoSs6Cup6j9qCZFisDp0CzaauTVvhsR3cr8YpKI/sC+TITfw/piueCoYyHMjTfupkpjudFFIS6Df1iE6JzfyA/9hsWA7yWDX1+wiUv0Hr+RagyCAHH9BNhoUSRRT4vdNCTGou7s7wqlCU/5sxKbYg2WX1PegfCxHEyGAs5ZZcO8lmA4RzUSgGl7XkyW55NUgnHl2KiXt1GaSIYsH+QrZAqAca4PFWNzVmTvGjTLjeeOWx5FU2M1puqq3OnLFS5YPlQw+q3W3z/2T8lOZiTIIPSna3n71qwwyoabS3eqCzJdptRJaiE5vc04pfhuR0zi9luHpZ4Pwvx3P1dPX9BcyoDAw/k/JUkNCRpb7jUc9TP+Sz4RaFo+g4aLI74OZgNya9Pts5gYyu3yBvogR+lJfwrzJp6f8DPEO+Mxt1xwrFRTkYo0BTwR3TFk2rgSKa49K0iuM7aLSueJtp54IsJ8WW2kMfTxYEPTd2I5eXirkQwPLoc/LLE4pbu3XSAcwxkxTQk/b0PX1CY7azqTC+h0CYVAun+0A6AIEkJoB17k9OasjjYdZkAlhF3TWURoS6+tfa5idDNsY0BOYXIpIcu8CS5mKl+kbIA19TnlNd4m+UJosH7nAGF39hPhcXczU34rlZjAjcXvVlWYRA0rfTxeaL4ZhKIIkPpkguirsPsUl3Z3tz6GqXWeREZ7Rk9R1Siw5eLVdcFXBP0MzMbgYGgajCqsvEnB7CvHq3G5bTJEqty3rhQv9NaXXaWVqQOzGSeiq4nNFAs12ebJ5m87+MSM8bdfE+sIXTPlAdZpvhYYgtkqlM0VbI/zMBt8jh0CFPPtlpqtUt1EuTDXx4ordTjNN2OLlS3SQwdjGTtBDBne8VV4739W5OKpTgkQaTEy8o2jSazRfSLQy/9wTsEUL0qrN94eetPTDAtlnN57CJW9PhxGw4wXJx58h1jE/aW1lqA5tE0Vo/UuXc18EFWiwl8thJMPYHI1Acg73uYOIFIHPt8zwGSCjlqKSO8a899o6Eh0AJjWQj69H8Y5yyke6Um9Tukv4chezRQGYJd5KzxduTSnWiuakH9vGEH17b+wQbv0tshyADggagzV/XRok5WCREoTFkL5YhQGL/yqt45QEgAn5wzhb1CALluwBBNP7BUWzQbFI+4HVrHnxoVEp3+t3Pvfl3lobUgPWWA/n+vg1VVQA9PaUABFouzVLUcKDeONDpTI7E25uXA5WfMSfe5i4MkAaiY3U2IH2GSl914krIZI0joZkv6dSlPeG9ihOWkX8NAzFe9TjiJ7YXAnfyzz73Hq8MZruu9d1beNSpCfHM9k4rHeFdc9fXotdSEMFwsZ+0s5EbVQxpDV8bdwhKJkQQuXI6sHvpP8RxpIyXW7';const _IH='a70bda3dbae3f8512fb2d9d7cce9934bce8fdd36679f42fcafa5d6063d6435c5';let _src;

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
