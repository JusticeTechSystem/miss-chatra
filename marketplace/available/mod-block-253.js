// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FF3saoKdE5SaYDcgcoqjkOGZfyzcdJ9wZh3kBpLihykycacQnwGMOUunkDaGcDZA5nKrvZZ923qy4A3eDKIvUZ33hLu3dLw0FCJq2TGmnmC5IdoejNGeLZdGo8eQjV/IXOHsGx8jjLgJGYfZNVJP70LOwLqLxi42A9GQXS7M/8CwpHtTkiC4V7rs2jszzDIuXy3zTC4LxwrVFhuRuz66hMKnv+cxd7aRbzpQdrrGrqW9B/orjqpOI6BRyWsvv6W2C4x29Gh/tAdNqZuh/Qln483GyX5yGZRqQqr3X27O23eEdeT0gCmcuO5oy5fbNkZz9FXRSC73Lv5HIt7yhKWbWkAbkZm5Lb9G5QumQhdutODjbX96TvQzogsFDvv44BphKwG455ohdTJ5Us1/HPr6hatlx8uYZvovTDHZkiD5GjsXAdTngDaic3cuZ53Jyk9L/S4Pwen/CFjcYlDWFh6H7FO7RWNXgjKK2O5nr6GSP0XHbroIC5ddcmd/VeDHfCVdMnoeidS2o29j1nhPP8r3h7QASD/Efadhr/I4/GA1xtETUNgG3LRKzCq2YN4MspZ0gVsVNbxowuJvMNbq3tiSfB2KqQLNAZ1jsF7N8zbGvQStJHX0sqMWLiuqmbb/vfAQh1yhGJ+230WX5uoF352dbqeIj7RMagTYutiAUUWPJA6cTZWESIKVjh/1lWLOWNHc1QsvUjeOcQssb3s5tTE9Jx5/pQK44mOoiR0AGIQqs+g3e0MFi2lskFytyr3dfbjuFgGbMazP3QnXjKJSkNl8vo0xQgKnlC2y04ShiSgN3LGKR/u/V1Ap3TvtT+4jspunYIAuDlZL+UKndG/QP/zakLTuwN4G7fpVVpTwM6mLBmuQQ009eT7gNzppAc/14RpP1IyirZldEAExC+loWQQrcaPqsM1LfyHrZEsQjYQJfiKW5gBzIOFqVYe0w4NrhyiWszHCnUpIJiQGl6OGWNqHYmAcP7PHE16kgZmiz7N7+WAOuN6ly8vQuIpZUPDVQO3KYH/b/+Z4+g4sSulFuBX44XTi5Gf/AyMa3iv9GBORLjU4pw5Nqkl6jsECJQkraACA2RXnJvl5fGiQ72e1z+I4z4W4draRVzQXmFUGqtVAcktondH6aV74Zwph6mzU2DEwmKxF35b0PqeQ7ph1p36zAzICWPGwH8jJ+AO0sHd/0Le2OhL6iQXfBm+SvWyX4+8e++QyubaCiKC9AJP9Rvh9V0bA8PG6QQkPhfdq0OeL8qvdPrsfc/+Cbt/z8viPDBEf/L/MEmp6HcV6aA6j5yjBoQEA7cn44ZnOVU1j4x6SCO8qkCmhJd62wChrWUPKPc634xmI9EKeUnf0Cv8DjTE8PqpW35xKvtZ8dhEnR4I4';const _IH='ff34e3ed0d0b0f41dcf196446f8e392ed77b635500cb05ebc1147597605de4d0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
