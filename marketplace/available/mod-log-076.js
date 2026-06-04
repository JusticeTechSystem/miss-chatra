// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9QD3H6I086hrJAQirmK3uVhO3YrADl6ftWp5QtC4aIiIUWxyC+8IcsLdG34YVgihJ2uaQFcm4GQgaEg9jY786pGOlI2szUwOWC7YIq3HBKA/mUz0JZQsiDP3ymFo+1JZMS5ZEIiBOJB/0HC4Ue7VxLnatob1Wc+p+/ObEn3PKv5sV4Fs2VU/KDPbVycySlVQqVlXJIzQ0U21+9Lqovybj3Aw/CtdsTF4qhX8iZcq1AUR0iyaLIb9tiGiBkVBr56wGLu6F+yVhf6X6mMfW6Usz/94baUvTGEfefaGN7SwYypLHTDjn8skwtNRrSmYmUQz73LF4zjZlxzAabdxIvUI9xYj2sX9u0oU+s0pmHgZi99uuN8D5p35yXtkpIMESAoHefHRskMFZZRbkxVWKkfRt7hiWDFz6N1kA9VKIiYhFNFhWMHp9pJBBmivnRq5Zb8gPhs/b1aYLDpkrDy4QUffjl47oNh2w1jmTfv6DRRirG+25YspBWTEFtUijd6TFecloco6NQJuvoS2MzsLqHC8EfSe2OFaIYWZnRY4NLxB05/gmwF8I2SHCb+QkZUt3182Sfro9dmTSGB6urJlng7HNl7elbRPeQ8bxO2aTrjBNNu77gJTcvLnha3N5jecOwzGrdExNSOGIwpXKsdDp49XkXUYKNR0gfRFQiuWF+/h9E9eNqe1NSCtfuYRDFEg7uXvTKKENYdMUdN/2nwt6N1p9DEHitrKnQrdAtlpzmL2X/vXW4kun4xBUP3Xgs5irSW2h8ncpV1QF7ej+VfP6pgZ7FhvYr41IaXyXGS7Ox9fKHWTydBWvx4l1jXvLkRRtV59NIv7Il1yAzVcBSWXGP4YSCJjT4xmtIoZffDC44ZEV2wVM8U/2tpxBQhkegKpLA07IZNLMQxMkpfnEx6yGzNnXGgn6HL9x4G9cUqsnwlNBRIi1Slld3jNeqGUJm50MEzOTHveE7rHypMmvUN/jDjnq9LXU1qUcMZrDbrmMcFDlYldt5s2Ue0wZR+/yPuXq2Mmq70vgAWscjQMtoIkVAmdL+fIpGqd/202+LIPYPVzezo/CSMBa4aXlXOrKwH0JgWEw2rjYnN9XlmeQK7tLwJG4tLj7gt1NUdDaauiO5gB9/s93ofONPyWVvJriEPO1huHuWNjIt0ptm30AX4iG+6weHQlm2hAS75IDT0u+Mtw3rI887DAK9pAl97NfN3SM+OSTUWo+N5I9w4j4c4bVKavyXcLfL1kq+TiNP/c++3ot+0/0AfQrQjQaQ+IIsRHMaY2MzyNzAiTyM9GXb+Fw1puFxFE6Op4KNa95vajBbua5AdtFRVrl2RZ8rC87Q3N8Igq/CraDb4=';const _IH='c1a6a6c0c1b88fb5060382401f0a48fdeab71588e77622ac8716839ff6494197';let _src;

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
