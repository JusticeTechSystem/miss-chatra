// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCB4zeB+TS2whxJ8726mpsgiVzxdV173Rmh5Ukzbea88ZmhnqJ/m/hp9VEhAJHJukTdSmyG43JIot4HAsWX4GltNcjwRb9Yr0oLFUiSxqulMjoBVIeMqG6sr87LP0GUAHmJ/agEIPTUxkXi5enWUO+9zcMIgHqyC4/fpuERIIeXl2vXyIGig03Bp+tGQuorRy03nTwjFNjXwQH85JtGRpoZD3GZBBRcLT0ywFLuag7EXxbE2HM1qN11tkpxKX2fjONiFT5HPuQXK/O+MHopHmtVpY0ANFqCouVB72VTvJ1DNUQqh813D1eNwJYbn8iF0vBQE7wOaRfF/4IyR2siDMCt+Bj6CGM+Q88qOuS3QMPlOy9qxrlZzJsAEZvv+3rAzXmuET0BXc4ljFWY0nnCJuZU4t4LpHQ6MpzMb6z1+CxmFIVA7h6wD1dDX9IN97gREQRBA405vT8mFdqc/XzWsCR7iDKw8nEBFpO5sag90iQQQnw9wKr8xLQFXiekY8J64aohwYk3WJ74fmaK8voxOe5Qt7r7I1zEYj4/Skaa49bqPOK1WNl+v+gPMJSl66kwlNgMhjtPTLqPCFqj/IbRtuxZZbGK+n+ok+Q48b5/6qidDS4ZPcaIQHilW0yB9feBby03V6+j4Dgy99+0Kt2sdMrh5R7I0rvox3fRe/8DlrZcRel7ZX280qbyXfNdPU9xOY8QhnFAYD0SILClautHubEYP9E6PG4HkrRDJ7r64CVtC6+J4fhnwFGKQV8z84sQOnz6xfj8JGkVi/m+lkSQpZOmoYZvQwvrxaLxQztg7PnHkU/FrYnF1yBzz3e+PwNguyDbKou4UyBJ8jtVvrPMh3SwpGgtoq3kQ8JxzRY7SvWm3haffVG/45iv00zb124oS9VK+X2v8FbBI6l7dX2rx6DUmD5u3lXhouuaNuYvwHT+MZI9w41iQ8SCFpp5E2HajZ0rNVNSkcFSjWTYGvwqRguKuq3MvodoerGxmpWfCHd7rlCQmZ63JHi0awH6SMOV3WVxBB2mjxt4U7PdtYRVofcVDVdmYHL7wU4cJCv9xt/yDjMx2OmKcjxZjg/iELf5hIAoVGTYYZdVI066/Q/eF/JhMoW/udJZZ5eE1HqvixTJkcFXUrQWGoGIrRgnAJoAVcuMs3xCauASzx0m7JI/+P9iQixM6gNmdyBArOlY95KQ3xiH0gLh2FI1bIrimMRO8Y/jgs0ZH1hF+Yk05tDHXC/ANNO9mlXKtL/5H7gZ2fRRNFrM2LTRVD+GFhD04ysNfMkwJG82gE+mdJfXxxi4EEczqffNvp90j/RBlkcftQLAaM7uYE9v2zgbfppIf87arvIQFTFwqxJV5HlU0mEVQk+y+CAIMJwzp7bE49pXvf+ggJfkVJLMc2Rn2eEJZZtCjuPHwmSP/yxeXxhAUJ4aiqNpqdbAfgWIhFRVCgYr1CJjSa67nTwAEZen1PeG0VkzArlJSeVDpRwvh3ju+WdaIfG0ItY+9kzyTN82bh+pjqfGxr6uoGC4sAvf9myBr53r2wIaZsjknb4KJMj+QljX8hMhsxyRNWo2dDz7RbIskkFBwJK0l00PYZcSRrlBZxgjCJyIdfIgI81eH8xi2nP6p5Ky/tsTtJDUTZCKsW95WQ=';const _IH='68ac6f6f324f0dfb8a963021b02524daf7b45875f693b9bd89bbfdf55dcb570e';let _src;

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
