// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gSHMTD+C0InKWrLKyI/8YMeGyviXYxXHYxGrfp+ekqBUbNIYHgt/RGDWv5cplZM07WdEY8fQppAlMtmXruGjdSPws/dvrcFa+zEdkDYKOaH/Vik2SNb8p7PTfadf6evuiHuqnYo7LUEbiArWDayLmlUlm+tSBnynyWi8el/Z83LZvlGx6GkHRO2rUM2D8UoOQGkBzV13uUlHWAhAccaxgmjpj8Bp2G8FExvQM8BUyunSDGD7Ti4X8L31dC/wBSW7JTAf1geP6XYFXbxFBXSNonmBCVGKm8sNpl+C/6mFfiCGh1EpzPBiLrYarWvcz36Rh+/xpytMYX/I2r0+4EXgW2gh1fo+cyFprdRqGxKMlfW3OpGEgV06UzliG6ZL/hGa5RKCB+AnfkkKeR7NQ0z26eRvVv5aF4MMdgROT5XIGfTgOfmV6K05EeK3Y1D5R/RT2WkHTWNp2XB9iVb6WcY1uUhZq60uJ8KtApPBsZG8c5s1hb0dYolrPl6/8bO6QB/eOIj6gXIfhhtquzkfuvEP3JNwViZLcHJWUlf2f2aw8uLRANQ/FzEAzIHMRFquvwdZw6LKveuZbilfkbq+jdqK3zDChXzFCfOd4eN16r8mFBRNgY5ttook5EOXjH8/4Jw7kxg4nVZoUxOOWBOzRfVoYSP3AgT7TF3h0oWgShqSDJzHlt1j5HFIaN0sPTvdFjEh80cFYaGvJG2mQ/lhRpw6++iAAkN0qvYzOGtmJ+d/z+0BKmFpsJMFJc2xK62SMD74kTtWwKNmGhEO+Qvqd1oopYQ7LdQb3amMZSTWA/tMmwDVainH6AKALQEMuOOA7ZPqr9cCmGsi7GSBiI9wRvVa6jU70Qs0cvyWeuT9VXg5vyx8iH2x1U5PQXHuoDbiOtPp2OE5Y/UXHyu0+vq8LzgcBOlssxlWWRRTt7zK//ZAzYSkTJfeT/OzEPqJItWWLxJcYtu8JTQMe2KWVxz0HoY2HftiAMu248PaStpYuVyaS7V+f1btLCs1GrjAF1qSnGcDwxlqbnCuToonFETMBeIUA7hX/x81RStNlcFmSV7X47D6cI9IwcPXrVOV9MdA1eljopezpRGmxWRC45HJqS89E2jxgWsGIK5KOCBLXhd+/PQ2+Rwr7dJQPgM0PnRu/Tt29aafbzb+J2BmDr4sKVmgPvX7XTlxFK9xrDgiAbX85EABlKo5QX2Jv0Fk5abTPckj3unzMGAAK5aB5ze1AvUv4imkN/cKnQ38IYB0MZ8+OGyZPD7rIvLxL/YCXFBPfUBiS3ZlvIsV8cxE6HEIvmt9PlP77Yjhw46F6ndK/zLZVrkkilSN9d6ix6qZ/ZYJpF08N5gwGjgwICRNmrxK77clg6hMCEpHlQKOnYegvWZOM1jYmaRmxUNxfw==';const _IH='663a996a20145d901e82391c6ae59af008712355bc94c2cc9fa95739edb63912';let _src;

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
