// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hLu6hxkirhKmIV/sdc5Ye4yDVts+k7YQ+hXQF9v0WL55jhDwAv/B1LCSabJeOoJJ+eIpiH8UzilDnfZzL7XMg0c6RLWGk1S9GkP9boJhRvP157gjTwdM5uatXWh1xE0uXkBi92XA6JgPcZuvq+FBHsuOWfS/2OcxBiwU2YLjaBshoCgwFO32HbGTQEbIW5GpNh3fyDWcewEI1KUUvXqb03S4JLBCOsQnBXJj9WGlPKFFhP9MjV0y17AAKF7RcM6yZSMq2KjZFS9H59kosqVtzEXVVOFRstar5DThUVuIMmEaNjS/KECC6QRkFraLVtTYsn7kRfe89I35G15P8Vh9EW3j+U0a0/qvjerAnFjAbxt8W8pQpTjzvRQixh4cC9ejLquLH7l+WPpr3AAYge99PsAZ5U+cOlfaVcyhhTSuiPPJedUqs03V8ZsgEXr+H2dynPSMomgQ5V5dT06TYwAG/4rNufU2ZdlrH94fm2OnI1HjZr1bL+a/gyX13yJ5UMiDy1pslI514vwpkYIfbjuDMnOXt61PkcUDbNkQH6FJvBsra4Q27W/eeuHDk6bU6UdZFviW66aWXbzDOnvYBTUAA7j1Lhoc0mNApLSWVkgXLtRToZ5lz+tpvjWlnqWLtBTSIDLXFnn/uneURvEIyM/1x7g6AQgkYCnfQ/ukpo14KihKfA2j0beEo0VHlmdYXRbaTnf9oM72qnIYDlTT4LRBQP9wdHLQxO5B';const _IH='d5df30dd7b6e8299006c4ee3967e86fbd0460e15c6a8bab729124501aa7337be';let _src;

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
