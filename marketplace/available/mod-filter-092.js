// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+pJF7AgSONIrrHjoE5nAoCETa2vPJb5hXPT7Jr3QZRUziytnRQq0gsBf0QLj3Q1NJicBAxzYALZh6LeEv/QCGF+VioAkpdwHU17hKnGHst9aAUCLzO4/hB/wsMO/ZfpKVx0yr4tpSiQdt63qy+CFe++vViw9mYDtjJZVv3zg6Vu2qy7MnEbhissbGWerpDmqF4FWP9/98a6dReOv39Aui7RZA9HGnHqfLhHp7NgZDu/pISxjrP7e/oZGhtXhZQdepPIYJjQHFL5kf2jbZiyXURkXet27VQrg0sLR6CWNyHRuu6EdwRk4wZ9fN4D3/cI6KAuQ1C4LScCVdcKoB525Znf5Xo3AheqpklBN/S7nuxxykiR9dkeT1mrFEIP3i5VPhUMwCHA5q/z2SOvyD1eKZNrRzSUFTH2cmUuZc19q0gFDwhkG43QAN6+5pSlE3zwZHuWsN8YDB8barDihaxGl6wR/GZLKWJ+yFy5iid91aF74mDRkxAO3b8J18+FvTgM4vFOxuG4lsKePWGZ9q32/O96VXmWyg2gy2wgA4NAqxFpD1YrPxosypLN+kjgse1hbeks7NgIqC7f2XwJckaiu9+G3Gi+ldNqKvVS8FrZfzGWejUy+kgMRSWAMGKWmSWS2tKE2W7EgXkXu7vRGvFZew1o2kfXKj+tg35zqYzVn4xYM62UEdKzw45rFliHiU+l1GU0V8Vt0R7u3LFLwAOpnzFF/FtwwoyTNOKsKegtgYSpPIJUzPuWfuc+Yp29LhOpFqN6pwJ3vQrs3I4Q1jYc+lxWA/UZQm+MVVfIo/2BGizJvdnq7czMeN1nRoFg7QeeItbkKdQMIlPSxwDfrqgs3m1a892iELdJt41eRRCRPvAGcW3IVRp3ZStZXuFodtciopPvv8qjpAGDb3FTIjNlojRvZ5eOn6Q061biuRV1vyYcKsNMyjXTCsq/A2Cso23Xnff9GAnfmXx8ZcHpMMci3Sq7XBYc6ErqYWYYEAcM6FNcLWSfzo48TIYcmLk0F8sgoc9cEb57Z6Mvq9Tg6U8xpynin0bnQIoHVSaoxD+i326MPkwKpLRrKr4W/79DyFJiL4bVzdzDbXpuPMuh9mgRP8nayF2eqh02owr3h7nygK8eHsIZdBaFeGkwt9nNajlj328D4P27UStmZ83VBG/gbE+Ows/b7H3mlmNk9zH5ft7tMMcWNkKs48rTPYQs5LGIKvpIRadvbmej/xWc4Vpv9DQgkAW9YbfJdVWbzDatvyinIdOCDSwl4DVyJHJ9vGZ/xlyFxbIxyhCP6oHsbkIe1xdAWC4PPsH/rdNEHmt8Frq/MfNpMMGc0f6aOOey4HVgNHA0+iEXuiQlXUi6orWL+s4SMFujSwMsvTTxOHUaPevdRkZY=';const _IH='7a4a6a2d1773e172e8ff5752101023d0ee79d5d053b42e2410264465bd3424a4';let _src;

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
