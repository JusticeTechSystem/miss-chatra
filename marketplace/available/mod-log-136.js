// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lFEgboxmT4bvzhzR0zeM1MH8nsspgsUxghK11B3ajCfNsUjp+1O8AFgLY4op9s5aksEzYRFyo2I3w/KzuWt9SKTxAtx8HgaJRRxD1Dvvif4/5WUQ1BSq60QlzD30D0UZNFg5ftWlpxFo1lSrE8RE9BtcqI0D2LXZDw7CdhLSi7Jh9H5Vbrv7EVsAFkIIIDSovovl0cR1686i4mzEDQlwpQ/g0XEFpi1l4/843Kj00NUH2OUg/O5C5mVl9yPoQX1K5cO4/anSlhJhvd1aVH/DI5fIONjcLgoEpJ4lPB1wCcCLgS4BrtIOVnT+bKAdnGC+CCQsbHVaJSi9IE4Cb9mcRCCli78xNiELqPlNzK5F5KFBu/cyPBPXejpxIVEn3aZ3y8ssdtRrpmAR/gMCOiaOHRju1LVxKBmkptGmqbyRsnFZnf57d+cQ1ysF/zxpdqyLEVqeV4ftSqFKe2TwkMzryQX/4xbKk0hj6QQ5wwmLRLw835xdN7qycr9qjMC7wl84jBNK/f1d0aqFqGgKNh5ttcwhrY1EwBw4j/UgEiHwFCWQRH20uyJSWtfv3ChI3VMwFzRzfVlHYedOMSfkAzoYKboQlSFqEr0H6EGDGHTeQLKysdvRP89aPN4zPNKy5WW3eAU0VVuldKbMT1ZAcjGM9D6XJm8DSTXHF9Z8akkNvIu489KiGBJtxH2Iru9QKxj4vEBOZXcCjszNs5N1/O1q5IG6ajL1UtTl6MDFfKqc8tEGA26RCHMS9dOpNQs6gPnGKHOA9YZAgrh+YmJ2vRr7FGrLzv7wINq9y30VFCykIDWI3u/8KOlXzb6v41GCTFiqQjTZ7aI2htxZWUkz/7RcMCOZxzUvYklv04S61OXkNo4QFjT6VHUZ/FPUXuiSKevg7q5uaZcw9E2XJEND62gUnMj5zMOspk76Kr9phUPUDHebBqexcUHtfyzyF+3wPZ9er9ZWwVzKK8F1MHtzHLQZyyzh7Lunh7UbYrHIwUvXmMwIHXpIY42YXrlZIS60/9YyS9pij7GL2Y3J/sQ42tIYrF3drof9ktFfxe8JAz4qSWt05apoIQWVNVDKLLXMYg6kEVtPZH4m5SttamV4avYeX5qMCtSJJeeK8zHtP82fuGvA9BerndDzw7E7VMcfb8lOInB7PIxFhbhsysIipbitgbYHZ0j8ZJOQv01yX78IKuK9KoVa+exChQEkd9JHrRPaXT6pxbO69+1QwDSWBl+9cbQPMTgdt8aTupQC8yHDEd8QjR8tNPQFK8o9ovw+O5ZNR6pXkOQUG2X179mRmJb1L5ZuQ4vcVeRWO1u6T08wsHUh5qgr1gBGuP4buKmdP102fZLU6GLgbjRe6g==';const _IH='0b4211464ecb76c6770e33a5b44d02507f307431574e9f7153b044acb2b3bed0';let _src;

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
