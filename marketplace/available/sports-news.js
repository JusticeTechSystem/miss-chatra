// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDjUFyWe2jl6WTM9xMB0L6gFTwxSnksrilGqN/Yr197i0NbzjMlj1z0PC3p8GOSef8U04gPdQAzY5KwUAdA6LLsPGbOCKsPaRQBxkrFs/rYJ/IZS0Q7KJnTS9gEiJm6KO3vfh8wLVqmY+4IfBYJaQDRndkK9P/uW13EGqmL3/VKa9kd1iA0n6XxFKeOHbVWnb/lY65AZyU/Kw48x1K8Sxud1Z9Cs4BM+3jJzG2X/wQ01XHR0hRnHW4xH6m3V3voaa1W9lgYugLssulHBoV9W4TsS03+i86lnPIb538djvxTd0WHU1duA14/fa7Me/izljW0ObomniC7iVv1OgOBQZV3gZhtkZgNKXK84AIWQTYkyAq4oXAUCvTm3w06cW/xALDs0/k7E0B+lTtMXrIQJKcev5uky7wc8cCGRtV4E7t1XHacGVnOPiCfGoJ8P/K4mo+Ky2S7rkS2gnoynGqw8R/3pOYq7XA5qZduSODfNN78/mb9t/KWmliBu5gsWNs84b3YjSCd8se4TR1hfK/CJAlxzkuvbWlyKPBiQ0bWpuR0ZvCxn9BcGQ85BFlteJVqulYxikjnhzD1QIkY1x0grKoCjWzBpDaETKl4Jag/owNyuvfJxe0xuLJ6mAOegpbmDNaoYDsFcONXWwHF8VWppRUhgGSXqlyllkRYk4ynwsikqJzyDNtrv0i8rupnrfgzGdgJi5Ia+ZpoKGMspsmf3VzBfRCGaR58iRTL2K9phPhuHDWdBbiaPEftNHQSRG/rzPexEkE/g3b03JenfCik4BpPe+vAkTpouuAhrcNToP8PEX5rUuySlxFeVNkXvHZidDORVMpQFS312jx22D82NHZpC7hVdRdaLzjBB/qwJtaArGCOP1l+Yd1kWK0eg4sQIL6U8fYSMsmtB0xACaXIeEOU59xo2Raq5bjLzM9NUzLah3HkB4xqDa+XPF4me8UL+wognXP0WcxzfWhpYwHFu+ZQrZ0cJyKlviG8Kj0DZYQciaLIQZ1hTMD0mPXgacl3qvodhbe7ireUDXmzRy35+p5dF4ksA4QeBzOIXVQVATqIP1kOUIxIGcLRVmzel+WcOI9yEKyCauNhqey/iZYeXlhWWVrhIEZAc6VhDqVQ11rH9k/9YYioHQrOwPxwcDLewhMgx7URXQ5mJW7i33dTm41LNzVqIQpGorPQABK0JC8OrC8kmjMRimLyUvkMYOpGbEUBteNRooR7p/3oPCqRFRlszLrOU5wPQ0lHh36P30CsVhhMazXXO3EirqrO4HG5Fak09tc2K0MTjcyOyMjjZLds9UuORK44BIL/dfKy/8QJjqw8m6FnVRpM2ROckkrf7kDtlNjH4VPTlp1O6JN+aYgw5fkzntrLdoe16D092dEqA2GijPybgos52FfATcvYNuSpK6GXVFQBQgKYCpotHb3nQ5YkQ0bIAcQfNGZaYgmMX2HeW9+i2spSEqidGDb5iSKi+M0yilfMqUQst6MH840C5HaKyjtKs8CYJ1JnSgXf/C4JiZmbqW20iZwQAJaesYSVnJX';const _IH='de922d35a00b220022706007ad893e28f16e25d5bcfe2a694f7de3b44e673433';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
