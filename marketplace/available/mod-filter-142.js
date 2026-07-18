// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSt7KTc0C6pv+IuVFsvsRzFiW05WS0Wj5Umplr2wU8OJ264Cd3OXuEJljE+qN4HCYv4iBZgfLy2yWRS3numBuqYWMh7GJKOqw8TDqsJ/F0xUHvyBSoKZPmLe8WzqGa0zqqgfuHpck3BD5lblD+tRV6eXCos4UlRVzIv02NYPh6dSwGeXw11yoMKTH0GDMYd5ozRwE7zF7iXJKdYsJGvSHxE+uFntnZ9cRWwinL1oFnC02eEIVYmvEWksZzHJiOanzHrHiMK1UQOM/bLrEIXLYJUBfteFCwPf6G1m7+BN/p/+rHmePRSpfFCp9NdZfhVa3oAlmNDad6m58X0jtUCGfC9exHefVu6uvidRQEr74CRioKnSplZ2xLwDYampXKLoP2DhyfDf2J4nRTftC1QbR8QLfw+C5oV/Dfdj9M+VKi1TGRrhbCd+j/byf40Vw/UoqD+/3XHIfwhI8CHWqWpveQUMadJ2PBcYNeTl/2TtRWNo8EbjZ9cU/TEFHC7Y33vKa2TkOIbQ0m602gGNnpjD9KTnyJwkT4vsgGNEmxJU05j9eE7SCJF4T7FvzxcixujyDyUoUpEXHburZlRySypRQzt1xinnfc4kfpDMA0SZV28oQo/h706ENJu2+k0En3nOpFLF9PH8QblZJxB0dJeTQxFbh6upN7a20GmrSBtbdffyQ66J8w2dqqFrZhBSyu+cV9UkFB1AlNmPRg0ahGQ1RB1mRVmSyX0RsopquTkgcRjuP3b7Mn2YhkNnGr9IgeCpRPceYF0mIcvD+sNhp48PNY2z3a63CrnKaf6NWCFegy8kp5tevTE7xeRFOksTw0R44g+1frUnLXV6vqO/prt0xXpmoRxSpP1K3sBJf3kNi4InZ1Uv1B9wm0HZyw090+BODDEoYfYOem1EriMt9AQFGJ9kBapiY3roy4o7r0I6wdmkoU2pfk36A/fQXLLFivY6jmbwbb73cDdrLBH9gNIBxbY016DVc9NR7OBdRL/w8K6YysMiOpZ7i0/k+P9bNfiCPJK/qCp2E2X9MBmB2ocwYoZ04lQF1dDGLnOHwhyfNUOlnu0hlGeUooY9Fkxhg0wbwmKIt5nNaJKRp2z+bBcU52egIBakWjcnjAAtfiGNZL0xba20d3cdlDJXI/IYl9+2qkDGKH69R/FMwTsvaObRPPzXAW3zEMaQT6S4ZFjdc1JQUNp10nXMRm9SI6MQ0GLJ5DGOrWdP5lCN0/m0pK4hVnD3NnG2rVbD3WQRd1FNfI9E4NFW+ZpAf3mhk7oR6FJldXkC3mV3RGZSmC6b5c4HJabP8JnILfERG76Y/rSB2osov8sZwTqGxUMxdNvmv6XVWeDr2q+qj0ddOwc96AJOPjymrRNBSMNLDZaa7hWFx01HbZjUbvy0M91';const _IH='108b9fca0b263d0ce5809e836c9dc83dd9f76f67a9c849588a77ade4c50a9fd6';let _src;

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
