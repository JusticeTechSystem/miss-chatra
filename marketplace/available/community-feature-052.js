// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RPZvP3qd7kaHFvRtMQ6pLAhtzNkdlAxiPR/p4YI4CG/M3P+up+p7YFCGcQREqw/pPpAOYmwfwv0LFOgnGvOasertl4iyI0va2IizESGAd8uiymqUMFgykpQ9KVW35eAwXY21yCFjs4t1Ca4Ot0mBS+Ludq8SN9A7V6CS2vKXrnMrSQDL1nYBnY5mU5K96RpJTBnxewXskun4+ShvkSXqf4xh0uEbyr4/Gn3P2KgxgEw+WKlMYU+qiUt6pHZJqCs5sVNxNeZCNZH4ZVp9VBUYj+3p8poG8Yzz98qg4OGG8t6LItzHU6DoXIMZtvNHBD1lYMc+lwdnyFYj2c1B6MDko0VZ08o6YxdbxYfh6vx1y+NpTZkXXuKZL7Qvr1f0VhgjrPXFS59SU3y2FNEcOdP6d1nsPD4lPrhJIUC4gA9wyZGzrmW3VydQZLZGip1eJG/vD94IL3Kli+C3mZPkuZ/wQRP+EbMT4e3caSYv4HImKm1Mne0D3493ibne6b9j/FEdHnCCUWaRblmFThSXJS27UvZTOXFLMUq0uLnxpBblTrmZBjMfzFPQuT4aSw5MQnDaJagkKqTJEgvnikcfaQ8tj9D4aITq47ztWinXHjY0QR/jLICa9ZAs2fXATpihXWc20H4hLa/MufRv+85z5Or/CDmOzpJOcBEImqRURa5VOtqGcv5LnvaFY76QvB5NJVWPda61uBlpAyK1SZtM8DVgOUk3ss6KkCAPH1W2rEoi6Q==';const _IH='4a8576e692ee1e8b2338a65ae99f8bb1336e38acc05d9e08bbf537c3e909ee12';let _src;

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
