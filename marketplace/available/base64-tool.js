// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMsFoSz5ApPNxuB3NgAVIZQHW0W5xCWcnAfFXwQRDS/xdQFSRzMYzC/eyEqSU6c6mj741fNIP/ncnXWS20Oy+5ykfTjIeQssu3D8NPN5iIqnc/0BtrgtLz8bPdicmtDypVNiK1M3B2PTuwuklfB/0+bMt8XFoXeWRj9z6EVGEC6HPjBCn2OnVuqXfOmpIC0DA+k9sA9l3RpjpAguiCk89knXdPUIiQW4LpK6/ZFa+o+cRjToyW9wnXhKW/8vtTLGpc75kTe5+1v+n0TNH9vd+FvaZOak0+P6f0pqnqyF8JSOICokL/stfHZA7LqVc3lK2MJofk1vjDoBL3wREGUdfNcgN/1vpZ57fcZQSoZBMvq7pqKaoVfNcOMzrftaAJfS53kx3WfpyIeqEvqdbh5q8h+CQDhpXETNY9STQ/oxNKO2L4hcxKG0dxAm/XaNUxsbZ/fb6stXPbaWmobWcD9Vi/GLvwkrNaAm3TCsgprPZpRAWCbvWv9sORdKir7hnZNJVs91pEXHryqyQKepY7f2Vm+gB1cv16zjvrCI0te40RZViKGHmQsUE6skpkadf3lwNTq8TwhIMyDugw7I6/IF7SBXcR+71f5/OndWwzA+cfH3cGmumgKw2FUEfBOT4bHTHCnA40q7hrPhzx9gp0xTwvwXPe5HzxemMAoXtYsBX51Kx2KEXmnDIKIguVWPB7ukFU98mALwdJg22vzuuf2JKRNtdMllY7yOx6nxrMmyDmK3yDdgqlAgo8yBjf3G+k59ktUEn7nCmpG5dos4OkdRLEajIg+uhwJXqzYEj027R+YG996QhTKpmzw+18mJTGXN9axSPN9gI1/0OYFeWcVT01Y0t1CZSdP5xhwiHRCH6i7dzIH/Pj1EY17vm6G0JPk5y9tFkToiRN1J+qYU4LnoNfIHWf73C/YuSAkprVq2Z/txRbquQR+3GpLqwYu8EetDOMHTIIw1V7CxAZwe4aATE36k97kZAEwx/3JsiMpAmhUgPlplkOcToni8qT7dQl4Pb2i1dSPGDRIZjY9IKh/3Q+40AOxGNMkPQJDYjEoQSgYuP7BF6XEWdeOBC1XrRqTXNUD+i/DuKKyfK2itIzfNVxlxp7jrI+LcDFa81reEfx3dhrje76z0e8rL34MhA1tMRyiHVLtYYUA3P7IgkOKbPAfQsg2LDpTWKBpOjRlWbPfDAchG5vKAQLjMHtuWUAylHQljQvMsq95H8fX7HSQVmG365UroAJ1h5Q9le/df4AI14ES9x9+zoyLygdvuYUqJBkDA18tVxU9vlxW3gE8Nw1CYHMhnlN1u0DsZcWcVO6qtY0/pnLaOBzbxZFvULIDV5uVpbYXYl048a63UqxWqZx9xXjojtyN+hpBM1tvc78IzTtdcp+ux1VtVhdy/4lzjoZUBfo/IWn2PUDK/lZajbA8uXEYMNSKho1BV2KWataVGA06e1Bs4yIh61yp8BTi72OHdJWKCZDtaOuSvGRdlkBDzQxDazNQi+4FdlNTtmlhSccN97H/546WDKEuid3SxxM5ry+yx7/pemn58hSryYTrcMxa1BprHBHNwWF';const _IH='5dd70cf9e4d7ad5df4e685a414d3b9423e301f7944a6332d05fac70a408282a4';let _src;

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
