// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FoAiRuyAOvQyAdKzTNy9O3TIoRjiv8s+y1mfJuEjnucrfQ+mgfxHuGLn8nJPd5fpZ1RTPdYp5Gem7zEc7ykJ9o19FE4VcXTVAVMf8wIhHQJycPGthxO9nzMw1H6gWV/c7keziQEJqspGGEKmsubaVkf9LL1jkrYzFwhHsmLg20G7Yzs+JGZ/ltMuHegRvjzGAPmGcna3ARFzM+OzILmiOXzYfzjS90pzMEkOBcO0BdL7WZw345QS77GWnYkP0rkQC3T+9YxX998NTNbXBB1SZYjUfFCzTbSIMPp+TT5LvrpgLkrl1y5m/ZmPa43HpIIsRo6LpWW/DJ6Hlj8enDJ9YpI58FWagY+2bk10spQe9BOL7ZuMriyqDuiM8uLC1tAyF4KVmVaNQP71MuqOOuH3xO1zDWHrYFN8PfawW98y3O/li4vBI0tmOnZdqwt2+pdaoGGqHWGnnlmUyiI6FC6gEtT8AXgWcSayNFs7fAqy3SY9ilbyMMKg9cusKZw/l4vqNt+BveQa5NHRtMbTG0zD5yDvGIces9Y43TYPuilRYR4rV7q4AxhpqrPY992W5k7U/hMv0I4H7il9pvoxOw7ct60maiTIjDA4Y/NOBq3SPuXAV7f4kNyRhof9zeTMnV72jTtDjzj1SWGCnK/aOCBb/WNcqoDj9ocOv3VGzDk520SKUqWWREV/86aSKmPbTv0/HZo5q/buzfcm7KdjzJzXhHj0DGGnL+BxakB6gMCfDzI6q6S7psE3nkm9RLS7jSsv/13teF1RqRrcX+XCF7om1PjN6ybf+TknssTKHUIGrLeZEMjCQrTbS7Udvjd7LV0SAsS4vR8UWnembsSH+FcEW/4oICrGqjOGN6cyYXtUu2aj5YhfxKUdeQBxh+uN9np6zvJiGzKV9Jh9W9QvFFtfBKckeugSphR5+y8Td4Eci4SNwWOZ9A0HN5orXTTmN6QJRKDABV8cTlb23E7wmqIREviPPQGEKLXrJHN1s/jZ6IhKzjb0WTXnzNGX78nLBECK40WA1BLzbGSe1PntjAq4ffthpd/4q3ASOn3GLw5q/Vb9UwSYTZ59KYYMk3qB8G9LNu98/2IWAxgNJxAObp2g4M+sE6ALsbXnl+pntrpRB6eCPG8JVtydpREJ9AjMc/0y+FQ3AKFWFLTi2DgDYylVJ9b3R1f+Hqi/xJd49aN6+fvabfmBOyEq6dV+o2DlTlzh3Cgj';const _IH='156f08ce4a4c4780bfcc82f48b44954f693588845b9d06c729e2fbb37500c6ed';let _src;

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
