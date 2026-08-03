// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5OLOSRfL44CocUiz5j/2UEZdz8+z1sWWrhmb1S8iWbxZm6F/ii9CR9Hg39Uox5XwNDbRu9p596HpGO8wNJQCOY7zdBin22zm+5FtUS3rL2q6c2bPr423loRNtw/X95bgFDSUQCupZBCCjH6eHYw/3tB3xcU08bYJkj8NQJNN1p7w4AznBctQAtqyCaPdgsunRdf73shxs/yn8ThfzGtKxf75U7RHwkwME5dj7LdkZiNOyoQb5ljSuP7DoRxVc20BKxS/Gzxhnuf0iPU/xMK8VShGrNhFrG2+xiCJ/SuOdd6cWA2Uxz7FKHo/5wxTNA2Ju11D+gN5kM38fLcJI2qpCPHQmKPBWZhbnLxk0wq5LMmwsBJ6UYfeNaDfJhj8RjwB/R2ZSLX6bJKUT6vsy0pPYBtrNX6WU6dEEQQ+DyrQU/R5OhAVrOHa1STHz4O1YJiKEYAz4WYRn38gdpl/t/7tDpVoYkLXrcPQGMvDdUhORhJP2dgEvfVSj5y266s/YrFBbbG4JFfI4l7tX77+8lmSGCrshL50eTf+Swf5KVBvjOzitkMiG993WgU4hgjETQ4JzGB/pCqDUFcXrojpqHbKMVcyYRDu2pnU5gZTyKoppis6sD77tg/7+BsDmv9bsSRcRKFzXeGMozk5A3Gu97xefGE3zrxnl6C8NlWWu6hsqGMyNgwAYjPmaCg/0UGX5iH0S2hy0gw+qncD7d9/uguCZB6zAOMvZiyrcbESWzQJW7WZZ';const _IH='1e3a70ca579cc6c5a7a3eb5aec19a9ef34febb78501fd9a17d78b6c1a551c96a';let _src;

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
