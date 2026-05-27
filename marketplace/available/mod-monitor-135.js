// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A1ZeQjwdtsXlrrOxOkaiE9wPAG82g96/cMk9jx0HhTq239WBQn5aDM3Qerxjm1Bn22RDR6wnbBbx3Ifi7VTfubA+g9MEeWl3RM6HU2oQ2Jmw4V1EOKyb3Xgt2Ie8IQO6l5OWaPa6aPRxo/yadjH+oKLrdNpg7sOGQAmrx+PxZVDJDlVX5134rPteJFius/apyFEsFhvHCh7UQIGXoVBXoGzmz6gRbgosHHTnJML8H2itFhKsjAmxarFkyW4yXb/9aBHn25HmjrbppqqeoNzq+u1S4pBopM/1+sCP0WOP8ywAD4Dif5Bdvq7nZHb0H0iulanHY8y/JdMJhuqSgxAqLRdV9Y2s7cNfS7Qk0GvIuYnVWO29Mf0/DTVPp+GphPqk0+sZa3/7AhNpj7yna9fdcaqCoOGIy8lM9/7oRX8xNdhus+Sz7OpvH+EDcrzD05n/EeBSZUegBDEEQ/XAoRw0N2InnzWBSiUHRRzjxgP3KAkhqHpDlTlcVu1iCLNrlkZcI7A9HXPBRKfuoAiNDDOjNQwons9EiaE4XzOS4afnM1ncxUlIwsEJcAIUjEKb9cQ9N20nkiVS8QRLL8tv66m2QXTyxfQ5swdbkyC6bKqv2zwOlj5oJzSXB1cqZPnBRmCZdZG/zcbm/6T/WhnqBJ/lGuH7g4LGnbpUugDJltQ5Jw3Aou9FsesI1n3fhtEJuo/AxkKLuuIjvbIilZG1Yq5+BXvd/+Tx+wJbYWpt2c+FnS9yYhtkXXy8kD7MgxEu40zKtOfH7+Oqh5PobFlMGrJjOEQKRRLh7bsSN+WRuPl5/LUADEMCO1B0I7oe+jxrwZMyBpW+ChB+1IowNhZ/L8lkHfpcOQCwUcZAzcwJOXaKdBdsh7RfL/3WsAtFjRr44l/e3S72+ciUCQRIaWqCweARl/1dWsWWwrK0a/cT/rLHUE1f//i89HNSWEyd96KvFUyGhHPqXMhLEec5ifW9FaT89J542rTCKWKEQCLj0ULmUn3V7Mq146M+RLY7stut4bOlSoW4nUsnWN8UOvbW1+1Rk/YiSPvm7zQ+OOGmFHXzo8Wn/WGpmWBrjuXaBKsY3oC2vnIhxmNM89BmuxDw6l418bDReyOK9JRp1+iqceZw7gRiTOIQ2DmqZ4MnK6t9N6f3dCPpxwJWQxPtGfzRH0QE5LvputVpK74oGk3JLFUbZlxlMJiEjqVYTeo8gM68/GsO0UWbeIYRKVjjLF++CNNfBnlqXq7h5qOY7uCsZf+glmsA65lbUCQE7EY4J9q6Ude8GJXMs2uE3a/VL28jsduDddpF9P1r3/rlgzH2yB7ulVtVDhCQ45kQrW7cIuzhzqCOXyCEZRIq45B89Pwn1DWXf9EM1sGl8kbcKTGmcRhMHSHDSvU83iWeFaWqlpIcLpanSO8=';const _IH='90ad7b80b4f09f4b1a7779aa0ab01c0d0a0fefb2080b8bb46c43be666360486c';let _src;

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
