// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nbSDDEg6mz5SxT8ELcdyfIQX+ArPio+R0qC8PWN2AXruhMjQbtmBCyy2WPfTshzIJq1MCdNJZjBH5tIMm5iO4wimd766qy5Cml1JWoRJs5CNWR8bPYo2SCZTHvfKb+HXpNN/flFjXlh16pEYUT0fCQimCRe7jtjQdgrIri9/4VNuaDwM3T1v+KdJFXsM+AyhzqKpB/C8udwy7SU2RioJYPWI6YiOHJga5kQZsnXtV2uAVGsgolKB9JzVt45fLaGDXcNru8N9U+IewG+FaGGctX+aYj2Ap+JTPb/us+mxqEgMzCvKSWV4APDZzVJgDI3sWrjLNrkgrN1Gow3yGlqxfAtR4s5b2TK3v9C7DYocbH+oxeGRhB+K7i0qVIs2w7GbRj5c/hwcOtHWPT/pLIqbfkSgU71e4PBTS08nOnyEvGzjOT7B5L/gm8hkJESrEJ6FohrrlSv2z346EoFyQoC44QwX2Nojh6J3asaFunlI6iRDRR42NHB9B8UqQS1u3gAVwq3Z1nyj3D0yjk3OUT3eGEbV4M2iRL4YQk26OMFH4cPHDNRU48i9YpQw8m+5f08KFT5EH4tL5jZBYeRagGtKFdnZFch4Uu2ONJ0m+sYddtvapsJzarDQvmuBSsroZjtMbiXhguAnjVp+3iHcQClR+zpR3kCWyb/8KDa4O+LS1BqIjbVzSySC1lcYQTdLNwQCdoBjnYtlR9dWx+nubaa7nSe8lO7Rjna8w+lc+adFeoE+hs/0w8ZbQyihWb5zJdpKX/yZFSbIpgW5P/msKBNlsQoqmGyn7q29HMTusLt8A7SAZgZPGEKJtUivoGP6TNRzBCdAl1iGOG2YWYUr9WZSLSVEWav6UfE5brTElePeiE4nA9NM3/dYGyAyhZ9vb+Iv3cR1lkIPRX3/epVtq2H03mKcHcGAJdwKpWU006xA/PRjDKDGeAbRr3QOYkGsEGyzJsquqySFlYKe/qjG/fmz8duOMV9ShCDi2c3MGlEfJXT9mt8UgO6D2Vqz9mLh0ULp45RA5LBSrXRL3oqGLjuJaNQSG1MsP7WloDTogxzw9Z8c8OKzlKqJa3iqxoi3MHEMLhiH9/tABHINLb1PheO12ng0FgZMeAiQ8lkfRMjFNhHhclOfN9v/GT5syapKOYCgsskprWsS/n2QHqEhOG0e2ZiVuK7eFVYHxjsgZU/j7XmmShyy3Vk7nXxLunnn4jX+KSMZ1eB4OMxiwFGI6Er1atOrQKLb/Nznwme2ddzrn0P5niUHzIBNONwxfx6xDWqci6+R6/6dyXBorjBZBUsMCxzUosPvUN/HVA/HPRPpIMsDGXjd8aQ3yF+ip1IdtyjhVY8FnTilI8RTpExA0STkJgkuffC0yuOPRiP8rOd7';const _IH='85788e767cfc12b587d8321739270996c55536740400edba8484a23aa9f9489f';let _src;

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
