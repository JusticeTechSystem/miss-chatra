// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fAncXKJoMgjQ5hC21qgyROUOdOBYjVAl+EiXDk0HPKnN1P87KwMIX4CJGDjNKoPBfT993kb2LdQwoZW8SOnD408cqnAYqH6hXk22QLfc4rJB1wH41IrM2qN28hmtiHuygh8zDDzxPRTvsi5JEBaMiDYO6HJ5ABEEUcpPtyLXL0MR7y7rUFR3VOOIS9fnPl6Z9PA/X+O84od0zoDKbSNA1C6fxXc13s7UuH0ietE5ijsWVuxLz87mclbkgDVApGc+TLGK8M6FpNSbioisFvQwkOvisaPzr8oN+CDXkDnbyBv4QYaY/yfG9OwiPniTor25lRXDuNaCwdPqd9hqqdilqauxCtCen+cGtEQjV1jye693dB+auyC8wdnddbXG4Z95fgJBGDrUOiQb74StNBelQtPIDofKrgWfUHsXoCwgIWi3lVE7mv0BYmscXAyPv6ctEBWqlfKNcdNeiBtAWPbwPyFP5TMfnwUrOyLxZV9XIyGmLf3x4rmWKCm9tXF0Q8/xhN/nhUCjB9vf4ZS1t0zolP7RvK1vlt16/yKRqsy9YHvhwvidJ1H4oweHU7czEp+I77+tXqsTh4a/5JQ+w2xFvhnNUc7bXVu0O9MvmQJbmYe4phs2uZtzhDpSMjpfQ4UH30jcroqLRl22Gc6gb7FbI3EptOSiR4YcfJzESuvZ7ZikmF+65xKtTRTRGsS2s8AlX0Few18pmNg3tVh+pvXkVtB66N0xU8zdu2l7a4lXI39wZW/WX/qPt7fCB047i1ee2WN+MgBqfrTonY/pnystl5aomG3i66ATqxEL6FHUZoOISsaGOkdZubCc4LhwKVaDbZxzYf5y8cG7M1XSa6MomB4pq0qCQjGPHhT1gAnOfMthymODTGjUSlapTjAMeKGnzpCXWF6mAciQki3dVSqYN9O3dbpo8k7jXY3v997n2I00/6zQYexFfqjut/9Ghi6dshiGjIwUyJy0sax9iOo404iKdLORl87SV8dj2v1pthxnILpxTR4=';const _IH='bbf47a3c00bacd39efa53fc9afd98775df27f7bfbcb9d45283cf09075640637d';let _src;

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
