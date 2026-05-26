// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AzawSluYSl62WImydtjI64VlQU/4H1NLp7B430qEUcryOK41Cuw2G5ZCB3hZyD7wYhuPhvxKsAnQDj6c4unwUc1U+cLYSEubVudfHP3RqXYLea9Sl04i2460h1Q2TFQdURrJutGPSubFRcJeW001GHKqlDLEz5KQr99VFxzRkqoV5gzj6JVGjqD0sr+bhy6UNyaYinnOaoMSE0C1MQWCiUAufse3SvAzkc3WN6MPkemmJ/glMsG1SDmN0Bdt8o7dI/RUs7ymu4/dyOuzDBujusS/fApBIZU1lfc5KlfDTeCnmH6O6im98tNWxH5Dn1Ti9hcJfTfi7r2jCXxuqiMVniyixbr8qQiRWGzOJ7NIExCrEwOyD0Kd2hSxRGxfhhiEa3YVf4tgWAKCz43AQPUSbIEQ2j4Ywglz+aBsGlHVODRGmPhd+6A6cPlCqGNI3+o1v733Fw/OYopmrEnq/MOzKGDTlNbKeXVMnBzOCxONX8rZTYaQ9ZasI3IdOsyWoMNGx10zq5PbxIO+UnLAW+QIfNBQmEFKLk4cg91TTY+xUeJ1l9aJ0PHp7mWon4PrQA+IGa4kOXUN3/NCM5+huAgB2vk9OTzhC2q2DClXnF0hSvgb2rSDj08Tcb1Pn0HVuxvu7M+XJ2Zbd9RJqsZblMkg3iw4/aiTRqEkQACaeWeGe4uDq9Dvum1ojnCgT02i8ywcWRK3POkVUfJe4m3FIycCLu65eH3Y6XCc1P/0hstN3Iinrd9g0Pyzuga6FV39GqC67oND88HjYJSRnXp6bXYiTr/fGyDOZICcCSqBKZajVI+1ycQA/Eai7X7IdKvikbN8Dlv7jY8PG4MVo/hjPs73SgIWpfU345aw+4/kOCxlwxRQKA8n8Kqppj8g/2D36ySqQyUlAthZVlPt8mkNqVsLspVPfcig4bS1jLDnOXWN1KLSkaHC/oTEU/xd24A0k3+6oAR2oP4KkFqrmugmiTOeQfBlyyTHluzalyWZFF2wUEC95WFpMygR0cjfCFMMDpRjc6LHQdS8r4nGqbdLFSZROCYSoFqlTZnnrOHyVQQ1CCmNUZZB3b0SMr9r6nqzSf7ircX8lmELWWVouBCvfzOXmIt3yOKlB3hlDc+pxC1/WvGTENtrcgTAxl8LCvmuQmdbFVWANWvBhYgtAmgMtWJ0dI0tGacUvks9m+OSnak3XT/oDOwtJGpP/uoRgd8iAP93Q2fqJ/XL4VQCmSAxS2ygrwQ4';const _IH='99c08d0ee710dc49e655f55ab719e129619fd8e74019ab47412127e722ccbf50';let _src;

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
