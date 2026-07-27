// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjixS5vAWi40KlXHVq8Rq9dpiIgjzaac0QTY1n8+OydDSxk55ISVoKhYpQvq1xaMvfOVBCBt0lZiXIUtDxNGaLEvbQ14Sl+P1pb46TN+KdGPQ3yVZ9snLxisXfSawTQHlzlNi0M6ReZthwktZxrpCMh8+ViFG8ktx+e8tGxa8Htyk7CEPkUV0+IgbGC28bosHGMHBgsXRmWUBg/qCoSdg+hh3PamYkHSGAbrN5atxC77YTNhuoBwJbyRcV5fCLsdfsXIhsks5I9QJYW29PUvullhrhocQzeNVRVLgLX3u7U6MBsi2MYVC1k0AcS8A0/Pp0fnUH80xf6kiH7w4rjb8yFjoMSEnwDx9enxKfe8D5376Eib06tJE4tGxthB9m1wOfCemxAMoKq/nPPk/Vzc2j5ULt+nVJLRdMTrCfkFvKG/JE41xk7IGE1IfvS6Rhb5J5he2gsPFRgmBamz5WaI7kM5Km9tZpbF8jSssI5vPiPBxuaelvKp6O+6xKmdbvUMMf7SpnkJws/U8xGzD/l/HyHH24QVdtT3naIdzk80ch3NFOF1r1DjxmMUV1+LOuCgWIuAcJbm1U1p/25xbPULU7RJA4wcmv0TG/gAbDNg7rygAcvqs3A/wT8UVf/HNgdwklwcyNexV7/Klvi6+d8PrWdxuN3P/vE04Z7N8NmYcN9Q2BYB5fdybCsfEvFK2PxvlK07JAP83zSvQKY4vlMrKYvfwMrfzUJ16f';const _IH='6e5cbfe03835a6185e18b856610b68a760bb855045d4e2f1db5fd4bd9c845d6b';let _src;

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
