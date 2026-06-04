// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sW/W1bMLFHHTj5Q18FS/F5ACl3jqE14+zzjsjsTVDNptl9TZUBTg0zK6TXweIul4L5htBgbNcxNwyIsewE8HVFLuOQT8+xyRPQbGNizywJVWlncoW/1etfn9O4ErhaO6wU1E3CIoZJcFkTSjIL8srNeiundy/ZI55OBqYIkfjMRSWTsBvpY3pYDT8E4TFfurNPdIh82Ks6vArkE8zT1zB6V6rTVLNf1E6LI/0VIh5IhF0UZMadvtKe8RyU6TnLQ5lTj685ouI2KA9Luz++wpFvuHd+5mcsRdgs6xeBjgNR1P2+DECiwx7MIe0rpkwW4Zdl25iSoj9cGX5b9UPnW27Xu2gwaG5WajzhRU3CppJzEpAnkXuLmcxxzNNum65aW8lmKvaq+RcH0AKvRiyugx3qPnaWIDfohXCs+UxAEhyRIDlQLoqT2yhsPy3/lgMa2IzvglVZs0Mo/1kRw10XxkAfnujsyA42vERXWl00QN/MN8UbdhDT3EWHRQrc204h/LVYy/KwdxNYIJs6mzYJpSR6L/Bgkb54r0+aj6GWnBoOXrsTWLhoywUbNwv/5wR7fwdRPUcQUMteWW+HF+HjjuaRo6wRVig/YTEzwrORcXzYHfVTOH7Ozv/U6Fk7NQQib8yv26B+JxJegKQd3+XtYe4pZ8iMZu20cOEOMeWwP9yIZvXybLO9ROo0ga4ml2/e9lt1V9AMPFgIbEED4hI0R+gAV0pLWSigJ+gDSz2woAI9f/jQswTCF0QKS0s9oM2B9Gn/cqNEsFrhY3cuHVgr5obkDGMetpXi5PUqSBXl/PnrdHeL6snrUeGR4+ROkV9jIr/Z1kFULdAwncVxdSgZrOVib9ck+O2vT2D5vflfx9loidnVNreHY/UeIVZ0sA+ZBZ/nPaI6Iom8D8OzceHRjLAbMK3o4haUIvrNEgwMKMkCYxfyLlmHw7BTn+7kbV3PJ6sx3mQFOKsIcJgoNzga6y2wTqdsu/xlZyoUJqmuvlwzq9Vn5a18reKZWUG9D5rgOY8OXf0s0GOKJd/KsbRbKpAi57IKQDeghUXe88Bv0HYUX8VoD8KlG2ImCgwkcdvLpqxiqygDrtyBglkseCpjvu6uyXC+2rn2OdWN71y5OGcrMkuc4llBrmbh2vtDYAIP8TmikkbC+2HS4u58p8UT3z1nk6IRF06UmpaujQPImikHPyTbB8k0DVbwW2p8gzC2BbXvcAr87RKWkRSwvxXho3r3mJdSVKsho0+BeQ2cINNilPj3YcKRuo7Dj8TtdaOR92y9RJlM2TBwlb3Oa93+hVL9PkH/GBW3WWHx2YM93wZjKZveTN9URP5V0AFLAezbC05znE7EvfGhZealq/Vil2E22pMfkbldJL+/aXHC9B';const _IH='0d2a5efa24d3fe1c62a261dd57fae7932a8a870678752d0dcba2f800d211c54b';let _src;

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
