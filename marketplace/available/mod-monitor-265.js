// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c6sZCKMVB9yTZrI0eFnW6Ot0nKW86bhLx2nHHqt0gp0hgFPlsJC3Bm/8IyX1MzNZPCKa+AaK8tuwQpLwQSUyBvz9KNOvgYTIOWRPhoW6tDXTUxskTastSXJF9F2YV/NYde47tmN5H6Z+nzkQMlmhIJt3jiwtdNpWQQ5OdJGWw8nu2Xie5lxs8r9BhPCBz/h4AUUX8G5h4ul77BIPZigtSEWQoNrUz1eIe+1sYrid0D84XF24fmEa9P3y9NS09HWeO7HSCnKjXCaojduxqe0r39mFFj0zHBQrQf3S/oK1esvPve2fRLnArMv8vJQus8mDcP+zwE4n1q8UXtpyQq1OajopdB960R3TvLi+oL2BwnrNtziwrOIehN6B9f+lldtofign//AQGPUMBQahmbGUDJsPc74he2myHcFlnVeppfxrRvrdGthKjmGGjICV9Tv3OOhht1V/+aBeYNr/l1YM4zJ1cgefxkFyAP/W/pihfC6sV285FTCA7KtLyQ0QGkEjN860Apuw0US8B9qjztHkwvJsZzwbY+9XEP3CZLQOdjnSxfvqbI/LShQbmm/mGgYBnLWYOv6UA5fFHhUJcT2bNj1HS8ksVTtfQWB2iTp5GvRW4sQ3X7hCWgRyQTWOczkzPXmPHY3TDBlhl6rM0TcYNF6yCgvuvnQWIKfwMmeVUUqPY7Do8KzlUWJnYG6Vg+H1lXEtgxYervW+TjwUPgmvnDHm9DcDLHN5ZOS8oHI3pVaWM2OoVgMk6iZCUMztjhjQGQa8V2ceiD919eirdR+DyJYQxJy+rkO19vg8RdmWf/bK5nXnCDWDcg5UsqozvaZqtt3sKbgM4VQmQ3NgQlk1Fk1gu1qO4ywCZkblXjm0RZXCPX6fgxMgT1Y8xVNVEIGFJGWF/3CZmkng4dwgtqxdFq4z3yEJbNM4YNVVS/khd/HvUiSXumQxQwDxV10uN4T97yfTzSVDB2eqjBU0DwfcxWFD8yCsGT4K/Pw0CK4uvWqcJ9zrWJGeqwSwJe505OET75aM4z+g3b/ahwDGcu4bWEETztUMXuw6+Irl5ClVSR/40t2LZESH1t1jop9TnVVDCqjUj2JURGVwQcT2DhY3k40d5D1COykzuVZu1umenxalrQLKhwjCF5b7g8sDf9UTi5nqIquB5y6Jv/fWP4Dip5H1lMQPVqTTE/ZxWVqBzn0INaa/c7LXJvBWRfEiuoZfcfeZpkZcXVQkisq2EaHzn2hCCmXg9v7FH8OdA6cIT6ryQ86qvyfzCPX1l1eOoPjxS8WPDwHikJG6JnySv2YcaQWwhGn4YgokFjm4JFkFm0sE2aDYxXdKEn5a/HUNoRMjhvgbenlTeWAHxXSooKDYoytpt8eUqspK3SYqF0pdN9fGcqhfr4JRRygYQb/Q8pJ9VZQ=';const _IH='34c975b96bbd9c4f2f32fe9e17f08ac089b8d74294c30d7d5355a32d5f958c00';let _src;

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
