// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2kNHYGEaeaXO5s8znYVXTbDpHV8zKaoAWGCQ/5vnsqazdp6SipdjV11vQycK/OocfFY/ElfLyHN7n9vZ2uNLRsslunlMONboOVayQuF+W3J4QVwYRzN+ecRFEz24eXJHgURjQADCHW/7QyGYmu4zCkXrr0S7oIZvfJ0lmwk3Yn+GARV7LKe+bJDKwgnIwql/NcCklhPr9Y2fC+gMCQJ6iO3WtJ6wDE9RFLN6bjiI0MVGr72NnymzPitBLeCL4DSZ4hGtdAswB+xxGwrQ/9oeEqwul945PXrUXZf1+Pfv3TqNUHslXtZwfm0ErBc3Gz+8jW54re6tAoe9DfbA+Ws8ymvAZd+I7eEaDNE40TXhhpEqtl0lniDqLAfaWDrh+VAtSrJloACKZM7tY3Ex4yUYAi+Oi3BU572Q44aahjeJj6qV274npfnmVmshHCF6lmWIsesgb8ZuqfajzQRoV14H9OF7W7XbdRYISGMd1r1m02e9E3OAEhrDPayG1lAl2FtakrlxrmDAZzR0RVhC4Gnf6QNbbGRw/F8SpEh/R/nCboSLesI+2P8X5e2RYpl4UyE2xFKLuP5m6QjSNoJ1vrbiOADt8eGbQWR7AV5cdkNo67cY4UO5bH3kOitmh+P0kKdIcTEyzJKOcqzivKGys3Rax/Qo08rOZZzl2/YGJyXgieAyjqB4mIBGG3zbRshb1L0ioBe59hF9PXaBVYYZGQITBB01ktVPaprmQidXzhnw+vNexU7Cq0/TWjTNpx6bXgFiSfA4POLc1V8Cj81r1tVEH6rYkUlXWGqCdBON8fKOfGWxkZkHm2UHaykUlFz9tUNbYUlOunUEWaLm0A16GFaluGSATH70TqJItur0n4DbuusInflCHznV7S4EQOv9qPk44gHmtxiFBeJC5NGAUn246QK81WoAM6xIyIr+N9ocNGOWrqz2L9rc3AkebGOjerzzvgNSQj0q8VsIscp9xQMllWzqR9xoJ927x6Ka73e+hOp4vvV7KiEtKSUNVn7N+lMQvgWxEOY+95Fjzz/mTQcidvZB8G7IGsT1bcHxdKO+G0OphYFIxjnbpoAMVhQCjMDBdXs0Jopyfl9Dl0/QcIxwVLEuW3JSHnXS2TqxbltGJIcyDQ5ShpBI4P7JMuV9WmF0N7cpTJsMLxn5hCkfADJyoz8fYuEnW3A4juVeMOWJNhD2cb+ARtfdSRPVSOoe8eS5M1tHIxKkwYBRQj8pum4q0dTkufzEKBPWcX+kQsugmnyspJEYCvK+JnzBScM4q+C6/izJjEGdekyTpzOJFKhiIkeGfELXjImSj3VOEJGMCAf3b8Rbu4TVA+uQk925F+COdZ0nKIXNEhlAjcTkrEwE8RxDhZxqdO/DNaY2mOxBQPsCdbw=';const _IH='2d03310c67a567d1794a004e28f26e68c4548b3a7f3f88a8965d617f356d1186';let _src;

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
