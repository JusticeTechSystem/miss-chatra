// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NSNG+o18gR8pI/K20QRBuOcbSAKCvHhMFWAhh/PZeCRxp7zXYcb/phYS1qOdacbe00I1VidlQDAoRqGapnwjFIFBLh+LiML21v3DLdwxp7Ok62b1IVV0sjz15HlsfOA1ZJV7tTwjILkPTpZJpZMuoT/ynUay9F4S/buhGMxkut2IGwV+CQpoIdjd1ZHNh/UjQg4RHFUO5iiFjmovstb4vQwn4wp1LihGD4BJZBqmd5eyj29BUJQnBXH1XqR/6BqVWttmoM7KrQDP+hCT6maoOZgtCnbKadJc9Oae8rMV2nzYq5cyhk3WG9gIt4oZDY7+og/rTqjvKz8dPAo8vOVO0jgjXVXQ2lUo7ZGp3KAIzjoW0WPMATCf+2bTx1aWy5oqP2umrfQS0pxfV34k5eoMhCF7D9m9Eq41nnf4CZJwRm2L0pRl7AEzRgutmtiIXVN25EPOFlpiP+X57fpWmn+UhygGaO/Uu44QmF3IHCY0RuvCvpVYZwMNmIViXX8yJ+6PTxvkIxBYP0NEbmd6LwN6+fDefT2O4HoVxAZwMxvkZo5q2l2BgOU75/RNeemjaFOG5wxGh2tcK5SQKUEz2D07Tw6FlqXdotiuE0P+L7E9/vDHICBIv+q04fC2XsCyLbopZhLYZpExAQS00+D4DQG02YjWWjxU1Vt4TaefbURveSePsITlmfP+stsJkvRBZR/A09XrWcIPRQ4Apo3HgcPiKFORjkRr35Ms3wDuz1THtlq/bt1vIYEWyAjVGx2FgI71lh2QMNTWeVoMtoI2Myi/6Y8DDmT5HIDsa9/TYo03RGuixFNjrxi4iVJv22tF7e3DY2ZSq+XwahZEbDjiMm5lREqrL+MTTeBTPJRDx6C2VHEzKoc3Xud9avfxR3U7xK/4UTEyV5+klxNHme37IVqUuC/y7diSg6Zmjn9tTSUDmNbtaS0p/WkDi7qGlc4YyZ+FCWXPEnuAGH9HHL838eQ+lxUqBOsdmTbYIKpT1e3vLB2qasUN6h60hl/x6PGs0mEOduenNuAxfu204iDXIuGL6pSsgwzcbubuVlPvbOzY2MgatM76VmbDd1mo1xG9v7udTBm2BQrzvYfzFB+fBvUr3iKl8uTcCdAFZeNvcZsYWrFJ3UO7caC6/ent0ZwtMg+BZEQjK2UNIv4VbogQB8KWNk4KWcw1XezNOuizIZHehiyoB4rB1xwdQZ9ymyOIfIEqb4W4t7YkN+JqdYOnP8XQWYhLZ4om5FQZayLa0t/RFrKd/onQX7dUcFJ36qaq6p3k9dPhs695zySDHfi4yq8Tux3KQhEuQVN0sU9nxeBZQ5jKV1w4ODpVx1NdfmKsvUMIVIpxvWcXUALvZE2JguYo+h0+LgWBDyAcz7CbcZHEBWtMkGNw9nqzbchnn7TG+nKlrwoRJteI1ccCeR07NgfYTxlaFnui/nz1sCMNm3r9EViW7cXlQDsUZXKaZ9oOr+8J9xBzW6p5p0BiuZSbdLz8zge5/iNgKw98EjaaXJEl36uSNkpL2oxEjytSldLF+a20kQ29mNZIojTp1hbwTu2qCpVWnyHPaXCA5JuomUiG7PrwYxZji080yIyQB+tfOOf2qQNoOazKfHXikjKdCMXef0P1mliFY5SG3zcdRg1VPIPfvhtYomPEOulpx4dyrcJoz8l+HKgm89i+EUwa0pWm5L1znodAsFw08HDJFXWGwu/qT8HHF703CcOxAkfZDEdEdCk2gVcLM0dnA79q/6qiglYhjmBnj3AZjNxHKeL6N/+6YuSUcZOSH9niSI74/bjl8i7sY/aSmHS5WwwVpVQdEA6UNkMNjI8WcD6rthHo+dopmQHeFCzCsGL3x66jcO9kXzN4bFb2el8kwoGf81CryYWZQseJ';const _IH='edf41a9d4846e4e01ebecb2cef5f9a33f50bd61fd409f096d76bd53dfe7b29dc';let _src;

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
