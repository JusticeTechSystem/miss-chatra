// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xW+jS3bmpcmOVkDaKkrfZ/RtQJ6DDhrpRW0WvuW1jGW9ljkQ3Pv/lfhYRHLKvnfq/UQqT9dIZdZjhFsNYl36XYrZDCzu/r2jGN92xkqHYHOYfL9rJRjW2NmHcLBrN3VxUk7WbpLpWE0QRKvq/WMsxek982PH9WgXx6+MpcpcBl8hqW8x4k4ExN4cwWi7yW2KB8mtnprJ/n3psArN8GOWBw3/H1qKxpI0aflYXdiG7l6HzSEKGtfknPn1FuRxq4xeDLO9hjrBwCNk4tKUmdxBbOQlkRcfn6iu7xY+LzwC46IWsdjlgSIg237DJI6vuuQHrGAEt10gfpVt2zaLS1estltH+Cl2GdXqNxfdphOYJifwvaM5Ofl1kB42zNYtsRFx2vrOMjgc0IurLRsGT5KouhD+cB1oNH++OLa0caf8xhTs2sAlpgsdsdJrb0rG26Ad3tnFUXqPd1Q5bBsZKUNM2lsl9ZaH0SGKW8JqZePhQAWZjxUhrE0Snb31/UePYJS3DWcY25L4Hj24PP4WSnxMtd+71xCqVcUODVok21ZiVQB+SRM+YRRzBNL9oqYaDbhPtegC8fwkpuuyJf7lEjKTJAqAq13eMLJLUN/Oe8dSTOmoQ3JQegT/0jJmOeTVgAiW4IeIYUO5in9Z9FM6mjzwdHcuUjktOP1+jcozupxNT/P1+ReFVGfYGVtl+1aKhXI4X8jqtiL6wyvfl1OsGyPqttqfpgLhiKge74VMDz9laQIZH7LuV+KHrWK35d9pVczoFxsNDzIcYsxWRW6/zYYNIUTrI4hC1vSeOuV0S9F4cM7hicXtg7rv9npEquegm7spxnlBloWLxKy+56ofVJTvJpc3sB/myy6jLgYPjukgJlbnIvxtZzmCf+r4tu68a6Erfyx/+r91DzXbVQIMTEjOtJde6tjIxlCEAfEczoAzY4YH92NPRt6Wv7nNA84MoNXpLkSsdjOmuasQuVSHRZYKTt+wGM6TuF/Z+xzL3klGQ87F68WZ1MqLo24jsVNt88x0TSGdwJqszShFroFZvyl19jBJHBrwhB3DGKxJlwN62fI8HiSXK8IlTmQ3sYJxUH16eavlfgyx8+Ik4Ol+TeMMXN/TaxUtmXtng+WBNSkrCKKzR+3CsERfad7jEv2DsD8nSii21rlcmDglbDWBH/ZxOXeyvIN9L8LgxSETP4KGCJJJSdkTiBJLeDSKEEpqDLgIJMq+TUPZMfrGt5GCelQHm/+I51Nbb/A3iwZKg7GbxhBAjEonUCyUJemftJLXtTtneo78Hqf4MuQ/b4jeXwR8yJH5+UPD38pRlHbX3oRymtCOENvV2NetmQhu5ozvXjQr7BRQdRK9TRizm1NEwFjrx7yG75F5zUEubAv8lZeqlquXuAyplHNmLQ==';const _IH='bd74f6aa90783323b78886ff5d383379664dc1be65632de7666963705e914a2b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
