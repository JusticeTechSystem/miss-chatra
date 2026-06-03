// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HDQ1ggb+EYLg76hk/gymE0K1aCspRBjGmwV+0dsLkZtERG6YZKbaBNqDxSwBryf3wwotsiS54V/G0KdsYUis9CMTw8hTuxFCPrOU5XRu4FPt7nSrnzb1kzF60ukX9L57GgqLhzddOkft2Mc5RApbKFLmW7NBz4AgsiGmD7sYK92rVT+d5e3FbUdDebzXRY0fL0E2SYEMewy3otOPS4A08GRmUEWBszjZLIL2OsC42wOk9yFCmxZzq9XvXDo8ap1rEdp7yNv8oQfcmjv14PfYIvkTtE3+/CTr4ZDC6sIym/nta44Cl4EDefwq+yeuG4DSoQSpDy3y617nNPqlkMYJV7NkaEmHKB8wz3OXQTo9CpSKSu3EdEqlbWypwgV5Ng/JWHs4wNV4ea7geZOWQY8Lbn3eBsls4K0lcBwazthT/BW21XZDEeLzM8pDuygcakensKlGBxxZPhaLBU+xyTPCSkdDmbEIWxXl2/HN+pEZ9NZB1WIv7QmzwXXi70khvTvG6Stsdx47HufZdNozOjA5Es/bNA3Icw7OG9EoZsoWIAGkaWtmGDlpdwDmndFKaWnawE8o+HgcyCEVD6lB4G+G1idnA/W1eti59zCnakAB5yRbSsWThH9YIv7YVxwTOjMn/kexXx+EDHG+eJr6RSGsfNNyxaIFEhvqwDwrWXvbbecaovCa/YKYvRDgEmSW0f9L5NdIUuZvZe0Xo8hYC6fzasNrnUznMIqKLGB2sVbnj1sSh8ruuDv/qm6/3XEuhLRravA/DbMxNy+25r4KVjnxKM7SZB0Q0e5BLTV9G6EGFohEvrDyjMyMESlX0pnaVuCltBv1LZ9cPoy+o/BqxcMH6SVzEBgsWeaN+yzBapUzRCs3/IWLjlduHrf30tQ1Moo482x+6JwtV60oUMovN8SQLoxBer7Mz5JdWQiTZ475bNmgCznKNrbDdGJSSnjYaTw6ZxseExJXE9vP4kJG5nnQTvhlSNIkO7Sk6VtqDjCK+4zYMJTissYbIrEYHJ/ZixQCmCYw+NHKCAhgufdajf4dq2wQ5o43SR5COccVdBqQ2QIQXCsGhm8A/wQN/h/qP1ZgV8pdLde88dMcQsgIl9b7TB6jJ/+mmJ/1CKaOpHYwbz95fMWOo3ubDDm1ME9aeo+iail3TDlhKRDfjpV8QgNUwiazCC6SquWzUZ+xEJA2QmYJGt2CA6QyEc5urF8HSd/wuiJoUvBwlMtw//RSZtuJ1+HmlWMM09HUWVzpAam1gaViKLsq37t6pkQAkR667PBjK3n5qWRAwXdDnCI6TM222AEOusugr0Zwzkrxy+y/+Itt9to033Mprq/RuHww8vak4v/z07yJDhZ466gFPLdvfNQkg4tC2gftag==';const _IH='08c8e503c74a7df5b219896d3e2c278979e51f75edb553315fa1a6a1b27899d1';let _src;

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
