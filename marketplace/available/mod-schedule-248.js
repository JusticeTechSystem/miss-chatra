// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzt9K7TizPgfGf4/DOq1mzBQdMsCoa2qtdW3U2XeZ3PizkKHU5VFr937XhQZ6IbxMoyEUzfgmxkSoAyJpF3tPUjynMAHE48Qw5RAhCj7qbXWnN88sTZJxTtOUvoTpTz6C0Jkr5MLDgv8ZoVq1d3fHbTyiXuwMmiuF2Zlmn60t/0ZLpf9+Lfrj0GNxhNxnXHGsY7FKh+WjERQBlpZV3lV1YDFFHB/nWWdrcyYgQE/fQrZeq7jw3ayWWxXvf38teGDzdr518kY2RBL3YGB7RO6rUNjgQ5fkaGEZVqu2d+ARxccxk/73SGFEaRmRQXMU6pG2BUFds24IfQ5xKoaPiPvcehT/cEU/TcTDLfpAUlQqAEAFgAf5XfdWJV5r1uecHd0bOnlPfFiLE5HKdx+UaJChiM69YX+WGY5ngHmSN3ClEy0NFX1qMe7/+jjjP58ozRjkeEnBIP4e0JcoXKpaN5VKdRxRaEJ3CvtgLh1kp4KQa7y6I/yfHPjP0tlST4eynlN9DY7SXHnf0RbHmU77t/NLRvvByMeLeht7psGt8o6/m/6x8jdwxWRtPZLqU/mj9Ny5z8CVko3iwq3WCvVAtcAmYa9QbxKJp+lOGebdSnXDDS4m2GINLf/udWzg59AuU4h0U3oDCziGC205YhRELH5xmIdIFySPRhP9g4YEPslPrFwRhqTZlGDjmQ1QvwaYVqwGjSzUlkVg+UHaNf9QpDbiyAWFq3lxyEzS/8t6rHAVrEJWX/jblltzlXHHdiHM7AL69OkWo+j29iJmj3gSNrzLt4fOyIu4girg2xJHff5WV1wVyKo0bYIhZlbROknShWKMP2xDs96hVHwa9BAB0xbpRNmzpP8q5ahWZffYlLom+6Uzb6ncg2SvjO1GxkckQv9U3YendzCKN5btO5eOzFHwNNa5FS7hRwzc+cwR2Npkka2CJJmgq7R+5Fhmky/kG/9Kmf4THgh8wSZft9eFmlpw3TaknMR2Mj7QmrRepbjGCGHOmQ8jcnRjd6t3Y2Hn7kF20SEsnp0nOik4dD3IBBaWaYOcDwEvHbZHn/OZJs05tJo+RhQYIcadMIneFt5KDXUNXVbn7kJZuiJl8wNqQl3hzVakJJLjK0uvsqXCkx0a9fFmg9p+TkxluF9t/Qy86HBO4asdR4xF6Zg2IIvhsgvGuZP73IV5pnMILjRso/P498XOnrCFgQhiDURoStnw+NWrftroUStIgjtNOIRiy1bNp9JquILYmjz4M73UQWPf6BYuzj1sUNaHkfQ1wQlp3plYeENU6t8BzePnZvr2nUaLjusU4acTjU9t9c5zbZoVYQo09gdyi2lqjUNhyXRMxp5Rhf6RTG3W8MpNtpZkqlcbXpSwgCL0GM9szzKv129ECaRjru30S646hNeR1qXFxhvzVEl7zptCVCbResJk=';const _IH='5fd3bef112e9b56bf0e87dab9ddd302dc41eea4e2b994325d0b53fee793f20bb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
