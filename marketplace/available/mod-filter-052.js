// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dcQVWmQ0IDTLAVL2GqkradnYVcLzWHNcV2NG9d6HwRTYJGQ5/WM94+LdMn6szbnJOkfS8QlID5t9I7T/6QNY9YqjVZ5l/0/pSZFhZzEFsoYWiVlSwNZLoCZNBOuqqINcmRn0Mctq5V2zCCFlVS8CXcsEvQjFUfRyMM/Qf9Z0iJ8Qr9J+hz2ZdHAUcWYgREd4ILeNE4dplNHz4Yj1l2oumIq7Z6mjtUmFGzVu1dR4glqaTvDl1keifwYtJR+ifdjyrgtaMUxlKOQGAACrcCEkTjE1F58bTKhCLGG79mQR1hCVXxk3xESB+WfYfDly42Xa8CgTwP4z52xD0O8g4nXFvsqeUuduUlgNmA2Ul2T1Uk3vynRWbicJzmqgEcUvwjic5A1ItH31jpBBcRyLy9zNDkJ2zinX8lG8A5yiGweef51vmWWL5S6ILDTysknf8Oo5c+ZiKx+XDNA5NXmUEjyNxwrmzSUzgvcP6EVBh6NCHEbQTOd43XTY5S//cruob3WlTqvQVqnFvNcoMyazKWNy1QQre0CLZBTFLDJHHlg8PlV2FmihVMk7EeoCaCLcvYJumCmF6vfVwb9p4g4hD8RkOfAzeCb4lzub4YjXkMs/wg0iW1pkCwOx9lTw2NnnECNs9BgbcORde7tByzkVY27MmxgTL10f+NmbZF1C+VIoDYp//VaFRyZqxguxUoEPcbShPDzawtjm/eQfCDwnhBsmUXRCBFod7+9+uiwM1f0TdBcm9a2cp/of7i73hI+HtVvAi8elsZ53J6A4GQuhNa2vSt8ZMPkAyG3Xns5T8bVux6rtXgXGiYr6LCPxqJgCFA68dt5//9YavnGO2iPo+55jspS6W2TUG5xF4ExK2QZP+ITnxqIy7APTBdW2ikAl6CCvpATNH/FxO6KR1yl3UfOET2alLfTr4OaFAQ6E0ynzxdPH38omQ0ixMGzDDGoioppRKl7XV++dn/DtkWqV5CH+sJDkJSA2+k7rYKol3XNrzEhkYA5ncEKxQ18iWvPD4ac3G118TQX2dkZf60BbBvNz1y+G4T9R6kSFeIQoJzf7FdTuZvCV0ac7CNAjqHEyPx7qAKqF2PK31bG2oi4m4f2XOSXSrQBpb/mZThGJ87RfiVCRM7M35p4f/cutOgZQlqKnfPjMJlaw6casyfZC+Evum+Y99nAtFE7bkRZp+AmSjI+4l9ecbL4v1RyhDIRvxLJavLucFuCITe2KtIHpnVo1HPow4UfaUHVJl14J7eXjvot9LmAFQiZsj9Z1SMcyiAFV4+q+C3Otqr7tUlJQfAe5JhMqidMx8uONsQ+JV/fdf1b72wyCAfLmrVKDyYVaunu6qxJcW9XL/SqIxKJR2GmEsZ3GaSJVOEHZPipKh+npW43n3GI=';const _IH='c569a20c8ad2837d4df96266dd5ee9eb6aad420a338664282b77810727fe5045';let _src;

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
