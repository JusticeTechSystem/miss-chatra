// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzSNeYk9AE+Ajml5odhG88QjHYrAswIfoI3mZ9j802dpr9olyJxNmTtbh3Zhpt4oC1qi/15eqs5oxtdj5ZwcWDmu02J8ARICWCJSTtDLQgDHzZjawQjl8QDhInqt7O+4K1Xrsqvy9rEBGpHztYkuZ/Fgrvs8sg/65mKoMUWaMj9cIGgY64pBknsuMTPM4B7fp3BR1GmUUN8XqGTyW0eX+Hb2MMSXrY8bPvbqlgpHSuA8B07/Zn08HiFPGWMwjS72BdSiPthT4u3kVGE8D4zQh4w/tJ+ICOWXEzw0QkX6/KTLfmtAyVpSX5iHzmCv0BbabeSxL7CEk+who5++aCJztIWjzlgacVhrqpzSny1xqHnovJRvwUnk58VKzAysBJZqMOxnEdxmhh59uuyQ8KsUADjNr396MyEt6WRIVVoQbORSdA0Te6SJsuxO5Rekj+d6d/PQof0p6VHSzJZs34emcly7gWGWIFYhJlCvVovv6xwFWf8QcneLwq+6ToYAWFzHW4zxmV7UiVL144U6npeCTyvVUfG2PvZFT9VFRVd8j/zktvQM0FmTRU7+u4xtMPJSQyqqXdVJXDDiZHn2hXLZr6ndDC0YCVCsZ9Ar7t+lCZT+f+ptDLAPBQ/3iBRL0/HFsH/DGsGCqQm8UVMYp5gwOLPjla3E5jwGBEgab53wbYEXdsKFdHEZ/X3Xo4WqqcM5aOJwRHnaliqjGYa2bkFjDeN3+1DMHtpML31Oy+N8g80vBsbL2amX5C9OVdKZHZAPWWgM4ohlzSvks052nq6Skiu+aMJW0Lx4lfXh9hZM3BYGY136Atmr6SpDxvCA4QW2lwkYnZwHYp8RjZDnLjee6mfbzUSuBovjIsHHH4YbzjYUTkVhleUXrE2ACSyep8SaNfvOqKK+0F9kVGhDTJZRqAN7SD7I0+tgwtAtrm85HiitVDJKB2Xtqhn2bqY3HtX4qfZz3jRMLr6Zwoo4hdiNby5ofXY8AmJdgyfZ1dhvMJIFThIeJesSys9fadn2yEcnWgK9kHKQ0ez4KjFDcQg1HBrsWAP8GLPtTCQ1m+IS1HLBEEEunIfwN5RjbjyM4FgCECYsvwchiS8V3iFJNSRht5S1bnyWFfwAF79NyrhxxhWEtS+EwdbSyvA1QjKsQKfmeu9qZZUdImwrYYZ91VbQ4YD2ThqeCkv52+cpKkZG7LZabvyOC1kQ3bj/Jsqm899HxKgWVuBQ1EVQeWlekB60yNaPyszc7qOhHZhB5MMF2j3j/XW4lSbL6AFYxCQEg14aptpdaODO+uUQegLc7YY1Tbug718CBRGV6r+g4Uz0aKQEtjL2F8/ltGSBAjPSUk+VvUGsN1jlkSm4i5sMlmiBbhRzJqtxzjQHcnBQZsKC4zCz8RP+4gIr8dZfVj5i4SGuNyOMl+LWmzifFc1szD7UJGr+k1GPtvDe6RQlXtKUV7p5Yyirrc2W/Z2qsbhWK4q+gjJHPyIGux+WM/zzhvphF7m++u8hzSwsIsJ9N7npbkg/ClP4HytXxCuYAbQKEfgMfzC7nPrAVkc4HIdNYyL8IHkNc9QeNtBH/t0udRQycqVKIn8Zd9NXhDX67fv3MSmc6JfxO/WdWyG3vpjEFSjtMff8mGuW/Z5gaSOqdwWE8ZeO6+K1namHiKFyzdf/sr3A+4IZuYj2CbciZzX376+BAxr3pjhBM+dRu0up6EahhArMmv9CMcjU0PE5oaas4EiHUNKtM02whiqnK6hTcd4IFw/eW/1kxvLVcZsWNtsFiegj9edvyAJAOl6lKsZouxDjziDVqLbMS5md';const _IH='f99c214ba9c8bcbbcb757f524c3c805196616685f7d9a116788d7f1a39ecd611';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
