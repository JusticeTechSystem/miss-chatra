// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxePhrcWKf2D6WJWQegy07la+npGLSfUqodX6E2ZZhnULZrF+WVMQK5TvWGPRmDTl1lP+sQUhsw89tqX+W1ZstL0KBcUERmDHvL/E+Grtk7QdmtWjfT0IYcxCbRcKL41JOjBUpc/lyNZQ8/zhDj+VE/sgnQe8lljjA2Jpav81UrrBdKAoIMzz/XBThFgMquEqa3rhFsA3voi/iIY5ZlEkuw7AzJIRgenyUzHsI5Ivd6Na+7kPJFW+gazapWGh/DQLw+VYHOyXCAsxMgju13PAiCG7eOmFOn0TnrXlOk0m7UQKwZWf2RvT91C6stpWPIWqOQtKZGqDRJT+udv/rASUeux8yRKUmEL+6hjua9yyYoDn0cZKKpNjDMwJsuPcyVo/xoO/GOjTi8aDHU4nDj8lJ3KNMmwYui6i4W+4YgxmW9I9FLe6wf+Rc2Dgk+LSl4b+TaDbGpVGUNJou2O6vsNrFM/K+1+dXWu2X+dfMRyZVFuKhJVuwtR6Llum7CW/1X3TsO1G+XbL1Lkhw4QDgUlR9LT6hBLfk8jpt2ANbPXC0A7T5LWcxlZylBgcmBZU4y5Vi5b46aXbQJBk3O2TZXFILJ4VZYcD60xizyXxH/k4V+8PU/qEfyKomSJyOcFVO+AAEdVLggNx6yysJ3H0WhMtRYdZAAYN8+H/OsE/39iuX7YU4XHrfa9Ns1Y2Z+qT1tFf20uXY+rQ3Yh8nKN/ikXsc7xHOK3LMgrSKp74XH8gP4SzJVNIhWT9FeYtV6aTEvXvlvZYQQI/Beh+NrdWuBNwrStbjmVO/K6tZsuvoB/e+bKpO4dgVA5r09PAlpiPekYJcRE43hJNeOOSuDqfJjwtnJUBJZLWbDeE3HCNUFpbGPGKvHwtZad6SSI4Jd+/rd+DNg+lgG/9YW9yI9vDC6yypJYc8fpCsfUp/YcViVmgocWsEeh83qbyIaCqkfI+B5N1eGymZ9Ut24R4ARac6Us9xp0YuclUXj80AgGZu521WOu+Ove6r7aj5mjj71AcoJJlpGdpYLLIZKYCy5bha00/4reZ6ukJASvuBt62XgK+VmUul8eyWvjxTIewadmCwQgpeGoXvIxuCW8rp97sW8OFAjoGYzS0irg3tTdfQObk4A7j2sNFhyi64D3DCSqyFlYzmhAJ0KdkIu9k11oHDW2dO99J3ZnZZkeKNpSrmclLhx9EVGV4OXcpiHBQ9ssFBqiVkOP/GmPOsG39xXwDhQfUdFLSofakcoqmxbm1l4lwPye1VxG44epqj7lyddXjOJfBsCWsEjA1n0WAQQaFarptd3PO04MqJ4izBneQtxx2GWQKi+Owv5OGd1VfvS26cvsCWMLlW+ofprz5WkVkUhzceY15ZqYHXLuGbin8XAvBfVHBvosF+SBKPQQRYAbqVQVjtdq4jSSi+YxJRljGf/8FYMdZhdxehEkID4anLtzAyC0cyMKQ9DfPoCtGe3MbU0qCH47qvpArg4hmjtW0NajTTOCsUtdUauL5pXbiquEGfCGxOek4N5WezVC3ljp6p19jJZ1zryBM3DXS6YqW2XOFCXuJCfqHYiC/ZoJyZ9DK95dzRfljcpvsqOxDFU4rjGxD3HCJGfLdXp250ybTY1uQXc1FSQ3UzjJu1HffLqMBmJRA7GgvRPTKrkx1zsqo2kbUp+xDM3v5p4WV5rMUFGM+/CUWBqgn0VeBjenanTlPO7du+lnYqKDwggZrkreXC/pnjFlH2XYvUskO1TwaT70/kyCKsBHbOpyhfVhBRBO8klwDw==';const _IH='07792d5b183e94eebc00536789d19f95469df9f99612a9e749e185c6e1a3749d';let _src;

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
