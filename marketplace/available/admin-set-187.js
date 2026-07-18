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
  const _b64='T0JGdjTYaGFZPxUXQ9/2YNZrSSh1JPuYzDFIK8EzOF1A/dvgbmDkGxMcYUqIE2sV9qAyDy+o+UI6aA+dPJkKqCI/RgARcWDWtWgJ5c36rOJWbp0Qif8dx7w+LENXDPb9xmLkiUm7l15681CmR4WhdUFCp26oEz7CTROUCvSspS337av+RjkM8qTvobEllH0GEQYQveQgUjzMxvIaxhQIeXmzfV+pITmPHlT5W8n1dYxv/o49k9vq1pWh/msBFOZJif5gRhpEEMYjjonubJXn2UiyFddMJRVAKfZV3mkCwijy8C/yQaxk+6kbjeX8KMjO42/t7/yZsz2qSmarLIepGlf8RbXQe4EHDR4xp8SOae89zbbmk37KtI23E/P4XdJ1erlc5hx3hVVzu+LoIeRfFF+NqTPEHl2kyVEnZGyi0jb+xn5mkuGVJVlP/aXMl0eEWxHZAYjiiN7Hn4hHQEuf4c+NlxPu4pcQnrMsozk/FzuRTlpJfv39DoGaIk1PjKMODlLUBSiLq9vgz9vc/5gfWPu3rDp/SpFkOoIQhJ08nkvNLzmef8Hj7Jqp7mQsTFOBZQSNleCBTQEA7VTYvGR3jFzfWBkCM39OGPiid836LIxUISln3pl9yqNbpRtpPT+DD/WTANWjyInjLw7xNThpbz6RqCcvorh9SPXoLWsti0OISB8yAYbXNNgplBBxYmB6twDvuEmAb3gxblp0R76RzQoVl+T8oJz7IzHboV1eQ9iGi4WxwpyxSzU38jgdTt7JmF2KjOw6lxOVBw3M/dsI1jcs+NaimBZ0CvJlOv3SD6JYJf6YeI7f3Q9I6SmY+9V4GwCyxtSjoZM6x0OrBk9NHUcVsx0z4MaC6bCCvOumOa07gF/nj61yoli83+u6JjhCahruB2K/WirXmd8L2v1b3RPNKxZ9dnf1lBnl9adnIrQZstj5LRo1SBqz4MDUpR5FkUfQQAWWORZblZ6PG+swotdyT4zLa9IST0rWUxCj2bVn';const _IH='7507c0ba00f6c2ed1c311c002f8ccd6fa926db4f1a4f2be83cf6e3d63df4d933';let _src;

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
