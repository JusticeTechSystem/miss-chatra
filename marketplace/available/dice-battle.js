// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UnwGi70LgsZIUm9CslaRQf+cNzxpP13uvxrBsNH3bUfzHKZZLXiyrGC+s+7TIm86zvJV+dhl8gCCm4zPBwb3Y/oRt+zC4z5ePkj8oq7yBCr+fWjvLP9KEOnH3EfXOjdgBqOC+uNzLheGQGyNA9TQNg6YV4QmdeWtCptEkEhaEQWHBqE5XvL6/GE0kBcm35d0iuSnfDBk47hZOGJQqt8PcE2ATnsMBcjGJnCmwkYgfzUxnV24/Hp8slh2Xkzb9qDToHcE3d0fHqQlUsLLZ3dG1fe0SgkRV0RM1wN6xWNxZmgEPMckYQfO8pG8PAy5HihHOcBWqcwlWvW/t1AFYccCiBiJojOfaKD/0MZxheK6tjIj8A0qX/YHIbCc/PgPgDYhgZOHHzx9HvwfUNmXjbP3mFDLJXxxkuTjzD6Vyfu5a9s4UG2N5glJnOIicVWzjc6TAabO0OVwGC1uompMbkiNTvoeFbwSvWCMhIx3B6oXnrQPUpezI9VgRhvY4HopEr6zjESZI5KGKguQsJheUu5u5Xb3DcRQvV7hibgh7kqLGqdxzoUJZ0ySMAGu6lJ+CdGehmvnIbPHfLAQKH3rcejve+eDfHo4jRHpz6V87YaguhQ+f63iYmpW1fvTImDuFMYQuSp9qtUX48oIBi7j73YNCw6vMR5GMKWIv/wNG2rKFP9pw+FFI19M5mP0TP4pkB3W6b2isTJxmM3ipmVLv9ZGAx9zoLc6f4XWLG3Cd1m7ZdLsgmtNLgKXFD9Lqq3pUS9QKsoiRXypuioy/gPz4U/QZ0kpug8FNCSbklAOeLr07MGlMklLhX8mrjg1VoNlRHoR8heTtp1bd71EcUP60CZnwPLTC6xklffXaZ4oGJu1ffPYm3T7QlQd9EqTrxKIagyO8EgV8FpN9l/xYmFDHp0F8hViFyyCp69/DjC978nl70j7yRuqukPfK74MJm6ncWMGyxMdrOh0ikARY8PDf13vkSkTWobtWx2FTKdNx1vpnxvS0WSlRKCuorcwjHgq5zQShypV15iNHrUCxO5jyWhiRV+MfFLw2XBp1+RVMA0SDiJR8+jWUGwTocDgYlvkpJP4aB5trA65lU/rmadCnoM=';const _IH='842250e5789dae9766b7eb393240b8623d705089288a639422482d5d2667ceb2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
