// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aXbain8W3hQaVpjyMImgJOsrIEaSWWFUncbvQhnoG9GixLQvVmdvS60TBbvLTE+RIgkmE8G/phmP+J+NOIgSVJuAVV4mnecYNQR2Whz8FoIhZImHjJj76oxzbWNlVdb6CJApV/9SmoaUeQDUMiIHsRwKYqA7moi5xTookkTDn4resgUrjQynEGwp76YBmjHr1ooQQJmIup+lmJFnoiCrB8CN5FyMy22aCJUBk/Hr9d639LOkKhgfCSip5cJQ2rREbbUVTfvX9EbGPk3wQZu/NhBRbRO9v1YQmhPGTkrnZvuoPH2l8ZBJccs0LWCS8mSVZ1rgNZNYPd7Hz9YkTsxi3pR61GDcWQfbTvdWnrJaR25T6ZLN362IjOI1XqwKgFPpzQG5hdJjtYASzcKeCEtvZYtJfSbTZWhVXa9FI3VQiFTgCjpC3LAhjMB77Ppqr3GO1Z9z4zQpeplkkeJFOnM3s4qL5xT3OmRKMPKRCkEhAczkCutnfOtC05r06fBufYudgdsaXIWDrx4p+yXGy7wBou17T8uIsyGGng6PVpzgqp1bKtFWH3Co7PEwGI8hWToDF+sgIk/360MjeBFMFD8Kum+iY0+HMSbxYYVWcqIXkQlKQqS/w0eJnSGLljomf0YpxnkpZBXCwVJpGKqH7ziwz13lNojVpoeainkCGygIaOsrY5yoVOzjw1dfgGiOKY+I2xh2OtrhuxLuDftA0ilLY+EAxxBqvoD5dYq5gZBXrsiyB4o1Qq3szb1DnUH1sBbTo7ttUjJEps1xBgqopi0wtoBAmsE9zghb5Dg8VEoRS4j8Lj2l973VQCbHrOXB1YFYga1ss7cBWi7p3KnOwEKLwPUgw+u2YcNiHFWtJiREQ8Q4Im7Zo5Pw2iHNNQJMck5NHgVFFPM0Ycc/Pw/hpdCo0vTqIe9FavhYEdUSmlIgfxvvDOHbu7NobJ9MsGd6HXzssXmJyiX2VqxnkWEcna4nM8YJOeq0LxQPpEnnQXH1+A2dzu6X81paa/pJlLrXW56rpgPvEJBeTdn5QfPdlo1JrSocFBMNkkd0zEbUbGeke6UGD3QXNEWuJcBPIawEExCRe6tEIp5XtcuBX13BA+9LL9HT09SB/ncUyQnUEgHr5BJWfrC5iHScau7VMZzR7TdojyVV12vs8Uv/DyqCwk5NW11mK/nn/bBVhYL+V1VMqORAIp5qudW8SQ2ASWDBhd0Wndo08GqTCaNzZ1TwLd6dMAgfY3TO+lMOMM1FRIQJHr7ZNEIFyi2+vM6eKL9RSdF4kD7A2cgOZKbazJWVPpqSY0vqUWo2eTFrF0kECRx5V/z/tWe7gmA/fsVn7IhSA2Eo+uwsu+jpH4BxTQK8gGeGJolNzMzyeDgvUlXJ6V4OevNReN9mKyNnVYjDz4R0BlyoU5+16qB+k8azBWV2Jq61BnBYzB7d0L0PeXToAkdd/oGdO1fxVEqYBpjRCdm0MdjokJ+XgUtjEh3UdUzXLqx+ityPcf43xTyOcEWksbi16eKu7ADGn6Z0Lvt4gh933JoAf4r36kIZeB57Gf0A114NniUvYW3C+X554OAlWJOqqRdQEeESa5JZA2Ph9ZXs3AIk8lKEGVn+OgnC69toNaLcgzXRWD7f6hDhalUZAIpdX4KJztlYz4dGjp4TZqB7uX2uS/wmy6eU1a49WZVDX7B9xw6fnGiX7M4IEKrM7q1QWT+8';const _IH='49d2766abacb4a4a135e3e823a94342dfc5e9c71e8862f9319ac3fc0061a292b';let _src;

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
