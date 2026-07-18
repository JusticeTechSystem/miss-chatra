// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVMPOIoxn6vMWMK9sCFwyLZWjR0cosXVbd9PP43m3+/2Ep9GEVIEnvyvWIc0BwfRKDjSTS2q8CUR8eHhQpZX8geFfi2t/ENWBEW1lLsdzZNvreSOFNmFpmlhnWqrW+uj6DUjhfU1I9OQFB00lXOwZKZ7V+4jbL2Y+Do271hrCvDCezbgBKEEyffvAmGzFYbz85WEexZtFccMbwpWFlYJj9Wj1UrMvfHPgEvg7tZ+GxhPrM8xfPaUh5EhoFH08/oCp58wELVwTSPq0PNJXXGKTJiHDDKRObWhCRjzwiJlV/O1RDMbl4wv5xxglpm+xHlErlrpnPAVIO19soa2/bsZJ+iMym3dG8IN9gUBREEaw6s/2I6aeWJp0iVnAEvW6okGEn5Bx1iQxczSEP5GSsoh99v9Rlz4LuhMwz4mIalNaX2iuF6w1Uv9LV5HwL+AIsX6nDbLO+otOX3+3HlAoD7UuDNqHedxYJwxcsAP13qdl4ZvVMSCR8sVp4oOywzEwTODiCVuLvP/NbC7FqfQSfhFZpACsMpadk9HnOS3SZFzDin5+mR7iyvCghb5lGX+eJ1FrUvc0hzPNqiJBiiZv45zNGn9jTq6w/Kh1d+rydvpQ3ENhhoyHrRn1cI4agMBbz5a9LYYY8OvVDD8zEJaKP4PVK+0sRT+e2YeRPvLnAjV34sGQlJ+ptewZvD3lHQ1jdjIvr3kUcQXxLeDYEV4/bhWSJoBbHmKlAroY3xxHnQg6s3FwhvQ==';const _IH='e58b4303d06032bdb5e7914d3747cb6a509d54f68c1ee171c7843d87eb9e3f87';let _src;

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
