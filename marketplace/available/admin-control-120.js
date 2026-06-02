// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xA63tdtepk3iguTMUlZI2Wb64ZUgj2HRjDhfalcLfiApIjmZw7Nwio7dl6pqrFwhtUaCX6dw6eYSiMVX0L6Fg8miiaYTk3ntOisrqyKnPG30aBCwvnR138rJaFu8LtVkX0MD05EwwZVYVaIaa94IvFKgDsj23j8yDJMyesHtVb4hcyhfVpnhFBdC8TUn+VpENN01M/zOYLwsZg35udWbpAuCjOHHTpf5VM45K2ucKEUP9yPOUkHkRIdo/9jH47BpX9OjrH6VHlmZIAr7ocYvOX+62yQnciJhG4CHc0emYfMmyf747mqG6xSE9pPeHbW0h3IsV9os38sN27SVR+Dwv5KAGBEGu3eXa0zYticc7524XNZl0IsHyohWNKUaphSwt0rmzgWPinzxGvA78x9gKAvazdlYr9HAMHLqkP6+KcgApfzxOkue2N/j54dP2uZ5BHrFU6VL5wtPZpVvcI574eYfyFmtQNiXGuoEADUxDXbSeAlbt8NtjPv9c18elTR/IuwUAKAAE/k3FeQkpzdQlvelzbWLkM+QTO1Qbd3P708gryYxF9HNmbVI8XxZrhIpU4VtBN76/TzNU37jrFAIh62NID9rrTTnpKfiwEvhbWREdE6IMgzrUEyufjRKAaqDz5NzNE2soYD5okNscaoAhXdRgalam2lfova9pyjEXYdqa+/4GrpGzQsWgM9NUYLtdsHJpW1EnKkT6Wh7q8J50109rBjhVlx/14BvEl6lKYMuJbmt48+2BZSA0w7SE0S9ONN43U27VfNWLRXHNaroAtP1gEbnTw3/CUmzbQHt1a6cxvVj2krze7yaIvAYVkuieKvjtha1d/I8djzrX4LGxmVdKXZ0HB7pJVrkdAMJNN9lhp0cjBOwFV8a+u+m1BJ0boqzH24CdQQQAmPUY/La17/xj7dNMzM1GSxrNGzTcZ0BlGCSnrcH7Y866AEw0isjSNQvxKnDp32lAjfE9J6JIz/LPY5eR1Cy5GuQEHoMogFV7Rq5UPIfvoe4hQzw6U+2EqlbUs1rzX8=';const _IH='bf714f8c3593f0071fe47986d74f7fdea9558f10748258ee1fb9e27b9aeadf86';let _src;

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
