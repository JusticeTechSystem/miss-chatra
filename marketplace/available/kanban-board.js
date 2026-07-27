// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdRt8YitXy3xc6cd9Nr1NZORSF99XIDteJzjcNlrw3sd76iinFniR1JTS2TPw+Nhb4IjwM+VYw4PiBnoa3PMnCbHfHL3U+STG3prIqqVTSoW9Q92tAC+IpkRpnEqPaHfAjq4gdNwXmsQIFW632kTRVBHcgprssi1uPnKgNdc+g72xYivdfPFG2ADGfAkCmGx4gr9jFP66lkQy8m9dFsR7tdTMscIoMlM3u5lG1EoqeHUhL6h4d+/2vl4daMEO1ZQVJQOYxR4VLkFaeqUmdW6xej1FqXH1/75zS9g1U8lph+uZUxo0A65HNSYyV9cUucHSknwUSVP1NS/A9n47mQhNDJdnwPJVyR6sTROs92+vYXw5Kewz95Hl07V4nTNWvnZI4zuPQuYMIRlq8tPsc6A0c1nCV+K4wdvbUfy6TQQYMMEj8HEm7pUJ63QsbIoq4w1Jc4QmAKTfDqJPy+94aYBFSIn4qhQ4VhiDnvDYUumonvAvXCKdNOkDIH9Ejm5Ozu3s94Q5S1aNW4daCaaGvrOwKlFB+Yu6Ny7NKo2cE3YDt6R6YYETjMF/woFr3p6+lrCY63PbMdpYKIHnnUzY=';const _IH='5999b3ce49b9ed47515d32c73d1b1cef367472d66c2c87adc4c00d0b5268fd6e';let _src;

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
