// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GXmoZVOe60xBDLDU6t3KB/7amh2S3+wN1nLr7VTrYgxuuUry3HIOaIPTHROYNHRqmFDwm43snU3WQ4ogyZWi5Qrkrkr8RZpVedDI/74mSzK9oMwVaL5b7yqohvJwslsAGWbZdoapoc+5iSHf7bW08yiNMM6b6L+ewkI54PsfA7NLVNL5rX73aon/AiI9zBgFU9GtEwAa+VwWWoomLskN4RLXLNW0a19e2Zmov8dVDKvfhvJgyn/pLW36vJbCS+f0nfL28tIOdzddG63kWhL2kS5GgFltPrUzkdnTCCbwjoMGQc6IosnyvVdyvhTUHOFkDqd4F8ZtdmMDUPag21JonoRL8W+z2crle77Ow40OyPWgWhlt88ciKUGxYiUX6aQnefVGnw0dbh/CR8KxiMwRDGR1i72slPVlHf0SaclKWe4oGuztjesr7z4AkYXb489Z1es663XP97etdpEkbu6bUssr353oEYs26qU6xyzA3QvefhqIGiN1cCewKPfbLRLPZGVF8zvJjMfTqIfPb8V4wCYlEgrbDYKAj99h0Gj/oMk53xIaSZ4JyIgOClAqG8TJ2NvMlY3s3tT0yJ1L9ig+RcVLKNCh+taZhOQSbA6WRbE+ED+Ke4LKYbv7doYCP5jkBOYyhHXU3eT4tcXpZ37D/gQdrfZYPgzeUhtUUB0m04pqQODgDgrAiL+kiiFGWSE4K/g1f/Wo8YK0Z9vQ54Ful+43VKTbr6Zs5g==';const _IH='1fa15d60b9e82d091aed978f736670bca7543e1b3b74c42848956ace931be7d0';let _src;

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
