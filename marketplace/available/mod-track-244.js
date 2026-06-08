// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i/rOPAoA4Fzc6wp4uhlBMyXMewv5Pfs/K57FBvEdSJQSP2EwkinHvVqmvS9d4nVG5oIHG6syYSL/Fi38Mx3ENmevEyqmJrsao17JPpKdKhOuiLrXCPj4PO6FT2ti/jLseVmBm9uzHUsslJzyskx7L56yKI3A226t64Yzg+ec1tTOPSKwmjjaXBc0BGLUceqc4KVTMJLzuQB9PlsScmGe3TrGmE3N7NfS6Tt3dY7hX7jrCj2oLWyU6gT4CEJlbWwXZsqkDiahQ/hlgaQmcwfwB8Ib5rwh6/ErCYn3U9mFYX5L/NJLBdsdWWv4MyJh4TaMpnUtHQNtXyUbnvHDy3wMSv8mjkA9KVLzxX9wECzypRwKxrhF6XEiTzjVjedMXRO/mUgmm+08QBWeKkW9dhtNPYUk/O7aBVFP5+YvPnZXEu1z04awNVwJ3FvWHGvrfs4KV9wLpPoudAKvpLS2R0m/5hp4UwU6VbxQz9TF/H9l0D/7oFpREOoop2IYvOyg3eLwlUajxc54Zr1TmcOZW1pNmzbBGncj6dzDJheIjCyphV0R2DL3/1YpFTMrHQsZaUY9/HvmSqDbOtREd02BYKIaWHb1DLpOx0J+4nj2fY4PCoFefer1CvI96sPq6Wv+oaxUSJ7QkSL62gWntfbDYNf9iM1VCem9Esz7t+q8a9UReijeYbXW8o+1bZeJGNxvgWLpPHY69w/91QfGGHAt5eeVHJ/pp2WFi/5z3SaAISyNgIpPSLaxcT8KaJ66scwn14YE6g3To5w0LBU0QPc+js4u7emsq5AOMsE7D41ddtvc3e7LhWA9n+KYCGnvyczOee2xWHRa4UtB1eQDYhIzyZMAFMy1sqOJ0m8QkxtYTSi/DYQ1OsxAnooHdHRyWvuwqVJ10iWfgNUQbKweY0Fg6Q6hsQSDxQNDc+jObmMrX15eBC7PiaijY8kzq4VpFC+HHGwgZ5pSr7ZbhR9q0zJ0eUExnRgdFxIGeySJbUj8RCwUUC8ytlwYJuTk2lbUWKGmEh12DPBtarfOX7Wply37JWzk3dXzWSJU08HAoDuH05dLIzVSpmhHnN12DVD9WK7aGoSpkKcMnrGC4l7YRbQHQvrqZnz4C8dI+aa8UouSv4VfN7iTFzzLfp0pHi65w0aw9DTbPsZ/xd0xtUqllUPTRN50Qn6YNwEdX3c+v5OJTnQYMh05xi4H8EKaKPQM46YB3Y3fIHK6dmjlIs5/6w5acOPrAxyVZnJkbMlVP+5jXU7fyiVEpH04XrOCg96oduz12Pj8GMBd0gnkm7YYgo3pZKIv+kHpmW1o+R6wgQdsn7Nca4qH12xrCuGU364vDCOBQkmzwYMB0vVzR31hgsk53YRq8ooCrAdEiK6DLN1KnMFn';const _IH='9617201f14e176f25908d78d85c0ec42ea7e51e96e4b3cd8d3d12dadfbda95b9';let _src;

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
