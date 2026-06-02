// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qvo7ZPQFCSDniVxjfPeBNU9mX7MysIXInYHG1n0uMQq9rabt3gYGeGDZnuxy/1vPKhk9F37+eqZliYgiuQD56Af9whYulQ5lp6YXYrFmF5VF4DCCA287FafcIfqbRX88yp/v6EGcSRiMeCH0hLTQICrd1Y4QWNStWMLZGcO3yZgij7k3Flk/N8Rp+ppC9CwGeTawhFbn/d/hdiEkY98mPMkB2MV0tD6j87TEkKkVZLAm0+Fcmkpqxg4hFJgXkp93YbDhsn+9wOzcqF9ByCeG1uGreWHRxPuBO3tKJE1FX2ivwv44G64npu+vyaK+hUczC0RxFR4/tGksmlLznsDOJRcf6jyAm3NqvOqRRdyszU4fMzxZcS4VUvSQ+m4ojRZDjyyh2QyBV8hMY7WG7NMcwtBqXfNEo3tT6y7yDJXbs2PPZBWPY+T8WKzFQTBlS5rehWNguDxImq3QF8uKZcLT7h+xlS7kg1UH8htWkYOs0maKKXbCgLvM8lbHLEfA5vR/YL9NwN2SmNPJ2AcX/ALohGIvSLtfOpRbYX6yZPAhIs94/WVGjuEJbC9JhATwefJ70zO61i0zzL9+Th+SkcZPVarjnKYkcdQ5x8/aeRpY2a2HfyUmeylLIGkhwdXzFgi2XFzaSv2ygKzn8YYD47m8F1ia2QppUaxEYbKZ3D3V7eRA5mqmqhPfQgVxbsMT/Rwd84iRdIIez2U+26cYxQqr43ZBSkgat+1LUTYcmVX00l2Jp9M=';const _IH='565f43454da528f0e8f50e9e1ef436f97f26fd357c59b0ab683d186d69852ade';let _src;

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
