// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NOk5tCsgvjLEhK+tVlp48mRhfndvvUdIiXLe2Si4igGeR5/RGAz+yp4hM8vk1enfQuswWVydc7Rz5hCK27Q+oWIYR8W77PhWzMaULMXu54F5ILWKDDyy5fhtUWzargx8HgOjZQi9BHA79BuEponGujZ87qX1QwSrZejwB2Cy5QyLGXVliM/egHQpZzdv0l8cn4SmQjS8ldnrKVlcM+9Rl7JWv/LjQ7OePj67TDvzHFWq0mpTvI4EwlL7SQY8vf+xJn9y10BsoLlQUgUNXonF+q6d0bhmpeux7ft8Rg6es1E6VpGQCdzLLCKjzvF2Jm1V+eXU+AK6dBYH1jEFnEdbiY7nlrUpV1Uy/Q/KmSdj270tE4688BwJCqBeKmN2oYoDs2eNTBvIJv5q+9ZC+9arofYOFTW6C7mNLR0KOyfApP9llfBetwcbJVe2bjASrF6UBfYNX/2N2Clsm6qjfuZuaxF9omJ5EGIC6rNGvjM1A7yjI4EKGuF1Npx/WPGN/yob7InvrcXF92bGNMXY9+jrEyYOO+BlLfTEh2vSKzUZFsCVoEjeofulPt1q2bKbnSFdltAc7Tt149Jjj8Zdx2FxekCQGPIehdFstAEYy9bZUl1Wo5tnwfdokgrxzroMJP2S9uOZItN6ZaNoY419mVyTmKSzWinzDrMb19AZ2tAIUEFaDBRHtVpM+nLBRcceVmMm2Pqmo8C7FascYZBk5vO6W32FxDf78F4e+gJv74E0Pd6vSIOcgwJ8yUrNWkuScspmEbhEpcG3E96vPvM0Hf0g4tIkyzNsEdR1qbhmkayksuMhK6VXXFZw7QfIO6RHqmzDlSpEaVcITtDYfkSwdjdacr6Z8N2/u6klFKMs2nmYor/zRH6VT7uZyvrtO9BxGHpB2xhlsB6BkjNgSVXBdlnQVkvCv/5sMXq6wUUJM1K3nAV0Zmcpx+GyaWAdNMkn9jS4nu7bg9K021n7/TFtkZYG39SSLs5TyRIuZyCzKdY/O3NHdg/74Pc6ZamiCOTQoPMjJvgRRXDVPt0dEo4IskG2oDkgKgPc1nYUTatraeaR375f/Cz5GPKL974r0BNywuuP2B0JjeMJZVn0UIoXvQmcawN+SwjEGMURFVr0ZnZe1LmzSbTX4hpGLi+vPQ9CEQsbuYIUHZ+DHQEcIWpUIXziRsEuahCqJ2QkVE5wUmmj5SGi85Wn4XfME46zEcXYac1wQoAFBBa1tGY5YmXQ2hPTQRfDPj0r4W7FZ5hqxJg5S97DFp3yw0AS5q8fX5KmaGvbRkKdw4HkDg9V7rXCCDtBCoyvhqvN0pH49GbAeRZLAu0bXICLrSkEJIr2ifEx+i7VvY2i8SvfBLmRI4mpujAPSUfHjYoBbtJRsQ==';const _IH='be4e61e4c2b2e97d5b6c9c10d4a80e06cd1755d88be4d5af239a8cf445206961';let _src;

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
