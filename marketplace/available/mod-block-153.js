// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='83574aHoCB1EG8TFVoVIvgoeRxXzjaEc04UjXQGmNIF3yTJbi6gGrd0nojPJBwrv558gEotkJ1EukUMf3hnssuQik4obOA3ZMDoujbsrRATTOKXrJ11Biv6+8bXM4BEGE5ef2hH0XhYtTqP0SC8zcwVNCTfiIb1E0rThVdc6OTBzYgsvtpp/A7kOUavDXFErSOtCJ9cud8DzQCsoCP7MWuRN1htf7lO3kIndtMC5L9+XE4Mc2NA4lZB68SWRZQ7blUX/pHr759ASIVhD/WzQ7N0i9UsGTA7L6PGw0prr9XjAWGvZqS8Sx0aWOykl82j2hUWZgkxNp5suI2jwe0oSUo3A+k2NlCAx4l5oGqW9aKGaM+8HATfP6XKoBjTrabG9N1OjS6twp8HbZ0xOZjpRr2rC4bI9NQAaSbJwT6dcv5Lganf75oNQrpAU9BBD/N3HLa+ILaATYassv/azS9NZZ1ISCOJgaerX3kzu5BXteZMFfzYgXOzXRPYJdDnltuWE0zHY8uZjDd99W6EHSROF4xlzaxx7KWfzU3Yt4ns8VGo69+5Kp5PKpXDRyUHEGpDaWid9Y6dKj9JZVw1DsAU147zGoYgn2HvudjD0uHX15JA4mFsXdPvjJY84X0fOcg0gBZV76CcYCSVclMZqhDv212QwaM+skb7kDRk/OSpJmvHj+oIKQjLnkQPhbto9P+Mk4Rqcdcgqo2wj1X4Sj/EgDxZsHPtVuslyZslBz9Q4A9WLxrzTiqywghXpUHHap56q4S5I9rQeTnycEBtf/DfL0ttlLDo7kufSw/3LAYFVP7QHh9nTY6lhiKobJueOeWzDpPv8fHL0OAgfPJsZBv8j2MWqt+PlatDxj+nt2+09tTxOV/wSjbCi8n1Ebhsy5xr6Gu/HNvE6RDyDd2AEXo4jKLZxpJopQGwcMZ9LMyulO16nY8qsnt1t2DWzmWXkHYst53TKuZ90eeV/mgcRe6AqWf54pUAouekr5qMKwyORJV/dFWElSO4MwMM4lY66ZvZPqpab1h/tiw2K1p7zTFBNyoOoAW0kdpntRzmgZGezbMft9QFT8KXXT6o7scPkfnKjCUlOEO7ihVoHDOn7GaJVUZSTmh6hXZW0s71APXQUGyvj+VvxP07heoEUeG8LybxdKSvslzbG0cHL1TvlScW34PEhlqrbxXUccMgDE3713WVsm8fDio5flEd2cf55zPN4Gt/3nQ9emOXFcbFyj3aX9+8eA4W9CKWpbg330k3sQIe+4J6jIix3/WzUn2KKdT+xt/OmfyAYXNca2SAqg1svb4856Kxp8pakdsrLP+Owtp+Pwv/IQe3TPJynoyboo+J+RxAjumZ1MpyDNugYpLQnnLvaoKZdYE856kDyCE51';const _IH='bb4fe4b1f79b33325878847d7d2b99313be08b5937cd321c041c5a34c48b8958';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
