// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iO8TZ3NdJfJ9g19zqdJYmkicA8tLNTGWF3GcZC4D5hHLhLn87GDR5Thz8txi8zm6noIPPhfJ7Guu/MUzoxn2TLNzOIs8bqKsJF+5ZedIIKhgjICi8Ahx1MsZznWe9kgq6ujMPL4txkb22e7e6iyJmxGnA5GmegkjlnE3A4V9q2drvgsShYPRcPQ9qrSSDWMsHbYIMEk8UEfzOPxUBfpqp+njusWI+XWr1E3QCQ67ukL5GzhKo+tB4Llol2nEG0Lredn9/8Ya9jyPpjuVSfiJw5RrQlHsE0JM2p2+d1KPqyC8ILJQPLyZsKQC9n+RNA5fUtu45hSW1M20m8/KQV5Tl+q76H0u4irazsXBOkbRk0eo6PoAqd9i4mz4oAqx7gLNtfkGObpeqIcSh5Zv+BRy2+S8f7e2ZKZgvciDtIXrbUTLEtrB+qBRb/gD/FMb3e/MEqC9itlCS+24PGyAKpNjUPtIDb3/ZziKEv4u0dbqFOOaeQ4TBFH/UdUMsGmWkIf+tQfKxV/XVCWF3KR34OdpItyQCHNBHvE1FkpTb3rwiaDLE8tsKXa4lBYFAA4nlzAjMbHt9F9ZgCDNtv+xzfJVsiWvnf3+uyb0YIQ52d2h+U2OMgWnAR14EaDPKW4Nw5hRg52GOUWx6bwa9bLCBxB62McebQyI591Kl/MUeqRMf7y3UU/HFnA/bYmJZ+Qi8hfy5hR8sMDYksxIAgKRfNMGwZT8VCEOIzKHF8B+g7Bo5AAGccJkNkovypQ98CFRtW3mO7I0P6mvE8rsdSJUxYd21S39//mNAQvm6+LBO6E2Hbrmq6pppOXTlCp5N27ebi98OMhyd0R5iUNuK4WsYiwhOgook6UdVOyfrBpFVnxOt1KxYaBnT13NJpQevWMlvf0eAbVxsKauFXH6rZH5kR1uaAQvGIBzooqOG+yLdllnuUJXJSPPecPHIIwzmnFapAYJdZ1SzBVYpUtzqHhOZr07N6VjtGvKg3cFY849BalyXw3RjP3vbpi3H4iKmkZsWMgJTtpyDbiR0XE25i5NPLiJm3PY5WVouSVLcFjEESioQkkc9YVlKEPU+kTwjgiUdPH9xPeZsXIELZmIiutY7Fx9PfI6oB4agQwz05z60/rzEkU0u7mopupqTMitCkFnjKfZ5VEnbKIzUNrjDhYP3Dmw6zPS0MYgFOw6ZQTyki6BIS6FpIYFzBuQM93RCkd4O9k0qTRIOsDT3Q==';const _IH='c0fc0bd9cae1762e6e14264dc1892c142f93cae4482ed543373e5d0bf4fa1afb';let _src;

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
