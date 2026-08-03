// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuWWN7CAX/CTzrZ2+REUtboKM/czZaidnoSbSCSOxwAxjH9UN+2ZFu67mOf7iEsexlJlk/EVBy3y6tY4teAoMPRNNOScvcMlAzGit25f8JUztQz04TVysO9fAc6K9q6YsU++1BlatgRZmBrM5hWMYDjl811ozS9zooCTaJzv7u6QzJZYSyhflSf6WvRrh91f7RhiuMU44v2PY83tV08nkjtMDpdaZbnUSIPW39MobCF+BXOi6qhsIzmWKYj6sGMqRqKczs3k4AJqcnjjLplY1lFHMzWI84RaTKWwBgakeQA/BB11wrNs/mjtyCGBL+NK+Syf0/A/EAGnl2rF95yci6aZ2+b6gvbnnAdTEarZeud3LFVf5kVAOlLqER6pIAOXtcOL1c4K3Jq++1A9pbc/k+DaTxIRrX8/wvbPIB6zyrCKNs7LUJ96wYAr8UqUrGDO4aHutc7FLEFSTpiKAUiS6C+znmVjwkAZmw29H5qAulISKVkXIvuCzTSOdeJYaMAJKrEqraRg81A4Go5UPhzuRo1nu/Z+XMjCoT+3Tpqd0ySbA1xSs4dsTlSL6vTEkEu3HnKQ3gV6L5nl6uRdEhZ3JedOIJvc99bHyOcV+SH6Rd4Vu0U3jTEj6is1jr8p/ZexLbmre5SW8yw/jXo6blK2My6/th0w7EYXid8dsL9dqVbWzyl1xt1EFlcudZIw+m5fSFerHxGnp31hn11eWoSsuvWv5ZRKcd7CU8zLenvGrEg+3izjmieMY41m3ZepKn+E3GtbizqRqBRrxB/s7o9E8AMleswabRB7KjUXgXX4sqYvKCRGkQmaR5nRxeUuaw8hocWzLtr7sLqysx/Us1os0cTNz7AYzPQACy+xC95VYIw5A5tKhQH0GHwFRy/AprRtGJpiGgXgcZ+DQFJkwG4tQr4Go5e7TjOZf9sY67RBXeWz2hN05z3iZTYEOSRCCFveFHtzkiAr/hiD35QJod2N0Yhh+ZTf4kZ35yVTMuKHScIqyC4ozdj2issdDxIHijbyyAhm2gu8mISRYDoPxxPV8LPNtvuuYLCmFJH41/8wTnP8r6/odSLuVQ3Q2MVUu1StzvAcXQVOWZLWXwcf4JPZFFUWWG9AehYeOLmrSQssdYceElfqvVs+xX9lCRnl9A8RFOo/mTvbMS9dxW2EwkL55F1C19o15GwOBg3rGIKZGdsY38SSIGRtHMYMuo5rtfbLD2Uu7ETQtJ0oMD1OCNWnZLnCETrg4pkxzeEVFZdVDuiuQlpWNI8/ZPvjyAEfD2K0WSlL9EQ99UODvW/eRB7InUYBXtDpuAkqOTztC6MHn8Mjtt6GS0PgGl8Uk6FwmSU5LTjR3yy108QE9cm8WurvQxNJV5ycAsu+ZLxRARG9MEysvaNsz5';const _IH='2f052765bb8cbc1d57b78127763aa96974c71ec841473a980afee016d37fe920';let _src;

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
