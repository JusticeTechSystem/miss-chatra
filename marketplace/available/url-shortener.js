// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kp9mXEjnWauALczawOAyi/4XGgM9KnYE4QriDK6tim3VxI7PdEwwkt6aLgGswxSGp6PG20+6fDifljrvrZ9rHMG64Jy0LvrwPRmJyWSp1ros7WP2Hu2J+1pNo+1EJ6Vifwiz6ryfGTpnN+XU6Nu7aiHhs5DHtTdPMV7Ov3e1qUKM9QLk8JCR8nQgAnQ8EhDHo9iRa4+wQ/uNhR6QyIaJq1DIkKopIrew9ao2yhsxG38Sshy2wSPpZ8uftPlt/2hQk+XIwYBGLEPSYpGkFTGXSQz394fPnv5wv0/zD2N3iROg2bKFc8IrVHEeoCW4o6YnlHZklQl3wUXDU4y12b7c6hqVBEww7ONlTyJXEgF5Gvo0FNQ7ezOw7YZ3bXHgJ3gh+WX/30xZfvqja9YSRQdt1roH++09Ug+QvtAfer37f3kGwCrmIXw95opbBRbpOGiTt/WWf9LVNJx2BwV0XoN682rtiBviqy7ATaI2RPur0CZ6zN0a5SHSTsqSQK7J9LU4PYukQIJCSOqDvRNG++5Lged9IFbAdLBE8282xGzDpZ385wn/RhcNeFmKlvnLmYXTr71O/pYflRjrju70/AR/A1ms5wPmjLG+ESqZN0fCf9UqbKI5wABzjtZUtZpS4TyUSHVQxeuZySnT70jDa/MmJ0BKQj00OPGaqJbuDv4mCHa4T+Hc+nN70iGhyNhnqf9W+bfogLhKBfPeO8WAyUDT9c6AJorfjBMBEduHjJZK+x0rlLpBE9qh6xdWfLCPQ0Zoeu+7U0A9G3CW+PNl9Xd6nnBpl5Emkg3Dm0fmx5vy7OZu5D3XLqG04HGJNR05dFi1WHzizsFzJxQn3y/zKtFowFIAvoaeqH7jm6farNRJXFryaHQnOhidTTRO8FESbXTVXuxJP9Rwh19S1AlPxBOFHJeY5L7u0rqbdKH88UgxqTb9106MoiLTtz5ucRjGGY8PRShZuGutC5czurL+hSiFx1GkXClBqiDPbqddb6BKqG7GLYl83V+ToWNqB67ZKqtvVCNQblLg9cOyATyXlFat6TwlqcO3R3kyRJK0q5tRmB8WMlgmjmzZJP6m7QD7NE8BpBK9vh9gUGIcIzziAErrwk8MCID1V7aOkF3NFguCjJC5xyo/IPL5GOdlW5nhpZd0zxiHtLofoMdnyhmyuj2/vifjYF4+W3NO4R1kzhWZ1zZku3VutfSpX94I6mISzz0cL+aPmEKMosCLdfGdcWeZ+uegJkGtyvahDA==';const _IH='01c36b83a939ef93d1779e07b22342341443c21a084d40e4721ee422f5cc523e';let _src;

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
