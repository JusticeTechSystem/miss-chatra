// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9AS2UeXflbYL31MjHvtTpxhKJP8fakZyGCtdEo2fFM68scqhYsdw3XU8V+IYPt/vma89FOzLD0GKTkn91w2WVy7B1NAaHd2XkW/W8qibWCTZY1se60cIkq+4Ajkj+A+jh7iBDKIbY8A/BlIVwTB5+0N8UhWeY7KLwCORg6ocWvNlt2QlKeJ96IorqYuTMjgJAP40bn5AnrlqiHE6H2ivxOqFPzUHLEJnaVI8dasN9WhmZv3JqqQzLHTOZe1Rdvl4YbMftC+iSfImpGSHp4pW3JckwdFs4WZy1Q2olHGgLX98Wu6Vuc27araIejCmTj1mtKWzd49COVVaTXtgETtXJ3aSpw20Im69Tr3JVFoSyJarOQYtg9VQ9Om5jsdUJYXGZxIlYVf/XRcBSnZhj52GyPZo/reC71Ghq1SEYgfOIYbLiotsStNLxhAI1RUvPPByIcncgcnbryQEdbkyySBriy7gXvgFdeiCay3UNGmTbYMYriT0mpTWurI1nYUm+K5IMycuYOiLhjp2TZw+s/LHh/eEr3uy4VTUBFO/eeI73rrEyhyIKNqtZAKpwyGbqUT2vzuq9MxGgxQkuLNHXlWmtcmPs4h0SqsQsGdzY6PkH2T3pq3TG1CHltCxDQbWAla5AMr0Rbsn1w2ezrnTdo3pu2vn3ws4iNRbLfB6HnFv1aaNMgt/rToTi/CScAntk76FNiP4D/6GOjtmBTgkZI4WcffLXZH9cChfnGu0gIxXYNZ5OFK9l0f8IFVxxk3f2vfmOHS4W39ZBNLG0VfOGEu4fyHLS43G/enVVomJCX8bWQfc7eSbefzvJaB/xdJ/sb7MDLvxTXeROsoofjWmbPTgGGtVs8V+DPVfqHj5LawzxUC5CooC+jvR/kFWsY3YTu3NqrGi0etOnzXDtSNkzfoVvz8MyFjJkizaPMk4jmZ7nBjXCQ7ISF+n7jILeh4vy68vbDcpuCTuI6TosBuNswpFzXbpsogBSshArv3Qi66E6eMLJ66gKLUchEksfv1STGfnnbgchZuJV7dK/YqEsuS7mow9Rjomlbi20EgVp5TrJzmpeDd4xElY9KOhMSzygvmCD+jmDz9XzoBmRTCyBTb7UGKMJFvvyupn9iXLBz4IHM6JsQRsvWAd/A9hR3zHB4i3OazwOw9DKs9mYdSXr5XckNKoaXzoOFvvXKnqZbaOiMG8Wl64cNrKaFH48WYiJ9pspyW/ACindv/lscMsGMmwBAUPBZd1Mmh1yBprsGkypn6lOgFjFbSUVwb8EguxsVjVXYd2vLtSgtq94Ppk4+DsGXNX7aVALe76/pcTgfiWuo484HCAymQX+H1cKBW603bhSR9+rQw=';const _IH='1e6ef92ebe575ba63f2d8ad70a5b44c181cffe5326b6341f5531557d3ef3cac2';let _src;

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
