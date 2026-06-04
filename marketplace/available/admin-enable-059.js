// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/H+notfeTupAoNSFSbxAakp14tOP6gZj1EONHf2hvBIvzzDWUzEXbgrB9L3Hj5PttSdk1Eyjhcoqdc9O8Pg5IzWnj75XywT2aL25nUJGXTrOZWqGmizmgapst4JruaL3K40JooWCsbq+tJ35HpuznZGUxvcv+6ZY9e3CaX5EkxeMrJeZmhEQcEvTb+OWjk0HxhARpG0ygi4fBFtxeNTGBR3Lg7Anum3TvyLjr16J0gCAtUTopvw2M8A05IvcFrJU+JNMk7jLHrn/EtBzZF50O9/JgHCrfQQgobLQKrKzPMVJ3n/3oCUX45Rbpt9+oz41MV7KWphmUdEVZ0dUfUul7XA3LzF3jtjZdiY27tFlVA2qC3h54Ix4lLUzDNWRCQWXv2gQeuVGKFNsCS0MTF6nfujg10n6K9zNHynwHhEAay0qeC1K3FEmzIAeOlF2wZM+Cx/SNrewIiMSbK89aVZ9+7sJ+O5DDnxYexF4S4kvutBpaxakSeEsxTUGNueFQDhL04HWRTma+zfgSxUyTAhoIPSs3Avane5m2RxiLJFxyyZW05hRNKHsumPtmxT65kgxS2CCvDGPTktT+9IJgUCe4HjbvS3YSKzK0PmRa6HCAHr+qdSTHN0BNBygNkX3sQ2gYT1pVgt/Ptt9AIo7wn0wmHevC4YqF2McRZNcK7kY40/oJNY034tI2EIP7zSwObTZWiSRkG4whRwQAum42Tu1tkWlQJHjpApvBPfXwFwTF46LoU55xV7u4koz5fuB8+oXjytLsPZ4sAdDLolKgGgHhAuMIJs/RUMlcNvbU12xPO+LLsA5sPXezFYCMeKBRwYX8KT2xynGbXIZWhlpc+6fv+YUz9qRQEIwKiYkyQrUg9MsB6/I6DItgtU9GPQS5O7QtDbTTdju+UaTyMiiP3+ZGSeWgv0fu5bVF5ED4mqj4bagwf0t/1fN7ewWvgh94KNEFQ85HSJ5gkHOkVTK9AGs3IT1C79NsaTVOOZNQGxfbpRubYi8O2yrITFiMzV8';const _IH='5b4222a3ad2db7f2ec0905dcc45f1347e00918eea8d373566c42668b7dec730b';let _src;

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
