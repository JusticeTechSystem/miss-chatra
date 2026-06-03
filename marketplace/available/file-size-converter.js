// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Zne/IontnOdXJvr7+JzyS0dvJMX9WoJvD/gIkkHOtu2BUca9kdZZs88piJBBvYQU61Tjh0crjbV0UEELhmBMf/AZWvO627s/CXDCfKP0jgcC69sc3A725tbyMgSGN2jPLB79L4UR8+qgM9CaElpyKuwYkqEBCzNoEau6LVf6y0AA6EAr5T3p6MRWS6E5HwHpY5r15JcMUDLy+bLWknVTM7v+uOKHXqh9I1eB/CTOf7FpF/oQyswfJtIrK2Wwh37BZTQLF+jTFZv6W4awdNMMLxKh2w3p/ry6IZfAN7oggMBDgEP2mQ3MjNlLhJQ/N2m3VHR9XismHBMVkWSE60D6cRYpQak++GXebt5uKDE79OJ/gwgMTtmZ2LB/uYFw81bOkp+db2EHfTfgEe2ZPmjyWXnnvsDtLLhQaaT0DUuAb4zr8Ax3pb30rWZAg0MZeLihSGgjYoUjmSRTT/UYXOWhNYrQ0Hzg7DzBbhSzAEoGSzaLmVs8QNB4rlZFrEtNiDPTtFQ+lZ8yJAATNZE0iPNWDwbup/UROJFK8fZ+KW48ovTsYS+DTLg4EFgV9GhovPvCzBKMqrm+svjNhhBSJgk/dCvnI++VeHMpnUrZvv77MSTHHRIsI6LXisDVqW7s5kC7UVUPCsAVxm8JEuXE/YLrj4cn6hykwSL/ZMSxM8hJKoV9w14fOQittZUsN1bq5q6rfrmsxGTtPdpFSU26TPVJl4mdXVXK5NrV/AcYNvUYcFe2B9ljzCSjzQfVLwIIeQin32ktJ8kGkzhOlGHkFNQGXrZhFKljfufh+s1fJrbIy7R9knGTazxqELva5XnsG8tuSSBjzZbMv7vhn4LC1IZYjHSpVkCTf48bXlRyTNz/KPtM8tZ/Lt34g0iXIFroOdHulDNVylhc55jpurdywB5lhyY3ukpfu77ph00WI030gMolroj2U7cRfpPQwD6jZBGnFGLLPe3eKgLwgVneZkIDFuF+YCx41HNmUEO0tJcnGihwlWoaDTdEQGs1ERDhzxVo9XbfGghwCCah1J3RI/2xP2gvc3/tD7STVmHfRCAmh0m+dzXZ2+4u+mcnrNEYpWmya4+ZnYtNBlF5SxgsDmvFT4apRZpyUYMUUL8fQPs7dM6hM8/M5xHvfKx1Chy7sWuKZ23wOFTni78gkeCyiJ4dUEufL/PwsIQfX+ttMbPuJIzAwUjsK1BW5u0pMygGIxRKL1HebwWHSf16GgIwupHRiwWUvN9VWlUDa32wTnIZWgW9bBcOBaDGaZ4iyhMiZLWug5XdVpI76ngg6gjUs5BLwkmlMjg8mJnZ39Iwyb02y+YP/RPQm8FJHs58fzELB3o3lc/34Gbu1m3ypDo5CRqnl1kOeUe5f335ljdpwuUt4E0HaKWvveIWGdbOgJ2KM1qeST/eMTc6TbVr//bOHCrTfmHkgvnOq2hn2ImcLg22ryQKW8NMX8LDeppqckT2BOlO8UURD/4OGsgL+yKUadpInc7J/2ea1r2HYRj1tUlRJwKvspLXR4qksZo7RKJA81y0Hd7IpWqPZKYdiYUnTPhUFL8hazlAZ+RQ7FYKkMD4VAUjU8vQ1EEtcNqEPQQAIPT04W3U+f0f5Glok+1cEupKwqxqkf+zTppVacUQiwHRrRygPi+UY6sX7ISCjga3mSztUOeoYn7IwYA/tJMpKw+lGJ67/u3wHBOFNAcnRkw57PZ3aMLFbsuFF4M+UdMia8vG73d/CTF8AJnRBzoy1hLt7MV9hjejKoiWPhHg3fxWCpr2i4CFXLezhN33A9I+kJzl92CcKlfVElaD586YcedsCVsEUrOcqhEXlt9buvZLxpNMQ==';const _IH='89fb7d7092af6546e1dc7324c71c90caf3b472f31c4862bdd68acd4abb9a5121';let _src;

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
