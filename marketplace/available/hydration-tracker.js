// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IDsDzM6KkUCoowrxtX7AdR7jP0dl+q9WsvDpQY63jnTizyuYqOr9nl4M2y036sF2ZkpQn3odc5z0iS7JjcT/ZVk8LL9LykYb6nlzMb7Kp51VbS2sFf5cN7mhzFbFTzxtigriejYm6O7KyuvPmpRw1IgGc+uYNrp51T7LjW2CH1uXnc94FAkXGyCweWTIZUOux2edP2J6wxYgnbez1pLaXFqBjbrJTEYiesDU4WwDxujEka/ZALWiEzXtfOf32O5o0LVuI8TFLzGmOTXLHhukuCK+A1xgINQajKak2Svpxv+Jo/335V0FUCJ9tzhCeZMBdz+1J/mAJOnKQoRTU2hM2fwSNohkp5vig6A2wArefiummZBPHHHhi7/y/XaEOhA2NLvf/R3iJlLpjzJk5pjZJO+kWBflU4j4AxItKfEs4ufcPw0+ACZjafDs4Pjkd9nWyd2JxIOVIoowKd+ewWnax0lJ+S79bElVJCVdEMoZp+kUGvEaGSrQPodFUZCdPx2AOjrp4OnOaNRdSBHcIOARfFr+Te0AvW6mSDLUcLaATgrTS4D7gXwVxQCl8J9W3TBJjVu8C9rsoq7sd5jb3BWSFbTM3MviYdXwhDVTS1K2yRYnp1pPZS8HSBmpwkVaHedWsZBmDlZ81P7O2zV52xo3KZgdAmweRL5JZcCUzSTTfpIEaFVTr/VVwWoI1fHJRWvk4XG+o9u9wY1R20PMC1yLMMC75yH3DmAqK7o3Krxhvb8c6pz5hHH93Nwyj/fu5NYQ8/bAfiYvYP+0Eo7zPo8/PTfdz+9E+t1RdVCD1rKX0zo0DZl3dC9B4FtUXcyDiK/wZ5OjZrDAsaIEwFnxPaiBcGNqm4c1xfbRurqistLaM5lo7U/7WxZfEzC9olYwKVTjYMXFcnWk3+HXZ0XgE7jGNUwW+fkqrmKRY75gGeJ9RQu5s7i5rEvaE6wpK4ptA/rU6OV0FD08J4VEy3akzz5XNYmi2RQmAXHpJb+cViyR5042k1z6S0E7uyAdjqiDXSmsMHEFJVd8mYLNdlCT1JIrOwj6Kt7il4UNdQifjpdAveJ7UIRjYniO09fiAJjS+KNgbXMBTVN4xjlzvBp6ukc8bU+NgVw/QB68o3jwV/0DIC1aCNUnlh+2qDUw7h1yqxKce9RtwW52FE//XvU5MAFWGnQE8oVajXolSFA0rv+eKSrDI4Le+2fSq+ltPgKh2iHPZVML4Dd+47rWVIvqMTLYVd4FDYdubj7jw8IiIRAt2k28RN/Q+vu9dfOQ3BOUiI3lvK1wWKLSnNOvpt10kbuHmlnlck3PJnI6nkis2hugCCUzUZgfdC6vYWXqqzYOI3plKBHNnm/VLBSFClHBSthejYQ/W3IzmXFnZJc+oLThoMMzLIQPswKgbYURHjNReAas966w57Ya+VeTEt9NhCfXNa0nWsxSG7Z4aHz+0gSSxi3dJ33sjXigIzqV41GbMz24cl6BqFd/b2JFIqo/lmWIf+7Ese4blyhKo3MKRghEHJIIJJOimx/GLXoU+ZLoJX0IVv7T27MWcnqMYNjdrT4OZwjNojmeJRX/jsgQOWooXEWUc4/I4r81SyOa8ayQgCzyrP7s33llWKEviWsXErHSpNRyHbefRguGV3kWZmiM5dAZGYj9BZVHXBq8HmKkqzMl5v9NFkK6MXYuVrHeJeP4HudgD7LPRq1F7VInGwWzniAdv+M=';const _IH='70acce440d12cd928faddf1ff189a563a40537156677cbe48d8b8ea7e43a51d8';let _src;

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
