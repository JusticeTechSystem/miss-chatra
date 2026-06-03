// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1r84tbVTOkvzo8fR5jmHfkQ5N0P3Pa5eWtRu4RISLI4ZyOHAK/tfq5cPKxtFE8NXDOiNad8V6Rpem0GSmFxKz6AB81ngG9lTOXoebDTpfchiX6PJbrsKDQR83sC2Lli+gxqf5+RRW+sBKaJMRuLWzT1zaXfQ9oIzWrXPSTF4k6xLa63ahAOHCyZ0QyUZw4C2+dGIbX5fBkphKaQLuBJm8wcr9DKDXF+cKz8vLMKDmSm90u9F/Vvlh63jjFlKMyWkX5zkNwY2G/S9Nm2JlJQtVDdzZ7n5BbhvlV4A9cvPQwlbj7z3w9fNjE66KsYW6aDM3RMIaBLGTO4XBVa0fuQA0oWVFB7Fq7tKBwBAOKmR5xbpKbOfieSMZ0K6SmDTbbKigdHa0BKAMMDlAdmA3yhxEzAsG1IZNl3YI4zONe4JXdaXlXg9Y71KWf11h1nmB1cFIEOuYDUX8lVz0wCvi8N6oAA2zg+Bjj6rDAaKtAsyREQV9w30ln79lq+ZipU/h+n6IwEntemwPM647eBlnaLHqeULnb+Clcr5Roaq8m6vTriZzf+0/VtScHpKe9e2nIX7FqzbeAzcS+mv26q4O532ZKtNfC0s1vq+Ml8+CqYnQJSShTZXWqu2RlOTADGramcN6DsrXDXA6zBtR66HqMZE7RgKD8Dn+BKgY9aJ7U/PBnra9ZXr4W/cNLQLvjsVsBcd0Dwf4Pbgpfk7hcC6IkXvZvm2p6vQRQ0T1DhXA9yip1FSLIk9pLH2YaRAX5V1oLP1K/oCZtbBqU6LnZIHXCftBusMCBYgQqKmxN+SIgjTy79RE0qW61K7E8CVPI7U+X+/P4xHfOI7hEWpBLvXRyrFNUklEouWmD4c7hfwNpCFobO0VjkzGhMK6ispIpwsyth308hy7ia8rDDcICFhph4Nty4ru/pP2R89H6Sf6rIomUglrQpWUdyWOo2/lTzS63XDay3f3Kyw5DBZq/VrXNdKVv9sxSV2q+U9kk6VzsHOPoIcm/IS3baPehn6CT4RqtV/GGfkItjmYeROmvNPV0AJfXkiyNKMW60iRPuwPX5Iie6arzyi4euhCT1CvaF47ZVAL5ALHQbKUZDBu4gbe8ZRkiRk6MubZflxMdiJb6P+x1w8BaAJNj1mFRSkx/XZgTZjf4BUWomNXMRnuqjB2sA/zJv4wWmlzWwzh/X6kQrVrNAYz3K0rBU2IKcw6pBSsYjq3kSoLYapxOWkAf6fvENmi6SKjM2udBIZjZYi2CKPnkkpY8JSm8Y8sa0rtCGw5DEGyh7+itX3Qk4JD66vkFe3Rt+8kjr6GjNbKgw7qvVs0wXxD/e85J1sBtCIo2jJ6hzbuNI9DDL0tKbudqcR9RlRB8LdLyPrydCdqoEupP9TfUlQ9ob5jxOC241qvqE5zoLLiCAi+YDBoaR+krqO';const _IH='eee243967fa0709b6bfcf09e6edd0c242f0c269270b32d2a1d17c76b370b5b00';let _src;

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
