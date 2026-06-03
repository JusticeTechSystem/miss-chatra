// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wGxs3bdTkZ5kxgy7ohKNliaZLxagUHRAYBoFcO36kv/o261kvhZu5LNUC+KabaR7SL0Q+AglvfcsKPlNwpgf2jr4cC3ATsqShhxoHjtYPJTuLQTFEI5IJhCnjd4nAA2OAedzNk3aWtfAKxu86b7+udM0C0lnccHzic7Ase0QfQc91TWMkIUS78UOlcKD9U3X3Nnq0nii83qr110f/0wxYjaN7qlu4TUtPT1OG1XEOpJYMJ/ULJg2I4fdterh3cDObn11XzjLE7532PE2DmPao0wsCU+7YJFCKhybP2Kp2Mh85RnU8KMTk/QAZNT33xpcyBLAisI2Pf5xVcRwSn+nEblmrjVMcGs27xTm15rdEFKvY5p0cMDkcSUSBsxqX5f3MPh0X71MvcF1dywuPn+AjAcKDAJCg/ph96cZvgvipbZ1ZDOMN6lCME6GupxZD53XopKW0yGbXyxbNOabKZR5+SLMhOgUt5wRZVO2MQ3oQYvhGMhz8Iu9nEj+0th4JJb8/xgi+3M5MA29ZzblnuDoLdsbl/WIdTlyH0TOOgcGvUEw3X3yIrf/Sjoc1Y0+hrpuDYpn+qAlvR72R44gfC4IfLSPeTtiOyjnu1jX0hal4lHujM+tmL3a8bTQ0Jil5XEifEQapkiyP95XMC3aAP/s1u4r1/EyfepM1wgsFFuUa96xqGCf5ivNnNlvR+L+SCyFWLJJKZqpXPUjo0yL94Co1Vt8zn+jvXwiIqu9GiwzOGM+s3Xppk6T0Yp4FTTNS0brdoXQpbgbmwVOhwf/o4Jdw4DQkOqBW+Qn/lLA0FtrQlC1LHBuqwOf/9tGf5rPoyhGRRIruWWcBVjQQ6P91RZh9CXe3MdMltO7Yn108yBDpVQCyeeERMmd1OL8XfukEKQuFr7PBTBW0geElhHR4ZH+bL+5Ic9n+H/QpAVZMlbTTPBaZYPvp/V5DX8k2WwGow5BrHdWJ+JCtmp11NGsflkpC3jiELKu+mrGnDhB8iYVhGT0rUBSEbn21kLfFEChwLBMA4z7HjtvdRtpJ5q1cvcj2AJUdw5eNgZv7//SK866bnMEYCb5EacWCd478z+Bvksrr1O6UaYPDW5lZpalaN939AXOArI6ZSababmjC5coyztnORrOPxTPtbm455hX8enjDmUwmA3tQax98eOj6c7sY6KzBVjTzsJcSrJBMLgHpAcvYMfJg3dM8BN1mkYb4IvRn0JccnjE1Bq5Mv1UKr9R8kJdkySTbI0Ms9ScUL+Bsy7Lll64I0TP+2E+5nTtt9sp2WI6PxNOAzveBlt9sT/ClgBEzT15+25wTLzP+03FBPAGlsU3VygxPnIS9L5wHEdFAjgb/mVyuh/+EF6I7nq7pA48ZDhPWg3EH4hh0q2JHutCwTaCiE0GiHqT87hKzm9D773XA0QZNSHbogUEHEn1ZxqMrG0xtsbR+p0AdpP3FMIV+/y+E9MrURHljNrBZibsuNfGauqNCtAc/3Ldl6EtZqjrPZYK3b3xF/207/G6B1OfragupnzF6Cg3IX0vynffe5ziNvuYzRwvqE3XOp03p9cGOHZDUYI8pngdKSMAQwDEAnAJaSLszhHhMe7D07pEOJ3k/0GtDoeDixZM7lUUYGVwyTvSVUTWZcMFYL9/K2rzi7p9mTsdSU98bA2pGH6nyygLqIOtARNNwEA6DtUkp3dSDYOxxNCbq2OPlRGLXxj/daRrZda0wD00CS0ICIxQtXhDqi+UHNcck9BPS2sWviPpbwEroznTnvADUvbSjihAorDxjqzABQ==';const _IH='e606fac594a9d8cfae1bf0cdaee6c14488ffb5e5b649426204d612babebcf8e6';let _src;

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
