// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTV24du1Z3oigJXRCreJcugWlC4VYBJzaKWBS5REtfuzRtkwVjPi3CsnReDTCryertr2eklJ1Qu0EApGfYmwvo9IEG3HtcltD0HLDaq9/KclO4fODfT2yxZr1tnVjUvxaItpBDI3cfB/CEqRiDiH8bwjlcLrdcllnWKiBHECpnY2uLU6vKOpLXTW3ZtR/HZ/j+BUjXsv+3WdIbcteaBKjISLl0lfH6bq760oP8WyEdJap5olkqEbG9sSeBuEW7h6rJm2ec4aVHeMSeALwIKS14tTSRpeUDyXrcHl3s2MHkqlmGF2UPsbrYfUnRE15uXJhvC4IjTGSdafauf4DNqzMllXzKMPpedVof60OlrrnXvdGnys8MDIq3Pt3fBRFVqiULkgl9zQFpEqFHys8lh0/PlyCPEWJoK86dBMpVskAEPsFYa8Liq985i5vrNgCZLw0cKdD60+AzGqf6Q8HJeFfWERUnUnOdmPl+bdgm/YDJ6FyzVki31tC+xjjj7U5JBbZBNYaULMNhO0UWEvdVBxeloYPpScPM1rF8JOl1dTako5zyayPevBxggKuxeiRemNN9QGpZYL5b3WWWqcFu6MxHCznFLhARUkri3Fc10HC5qeHkMwPiNcYfkwPcb/1v3xL7L/bs3ga97aHTHwEbFaxgNnRmtFNYolmWOCIRp2j9A1D4NNegUol2AeGv4egs8bjRCU1MurYhxAQN3CSDa7baN0WwgEt7bpjCtzo78xF8Rdboj32RKaTp+/r3+XAfoY441SN1Mg5dPNTIOEdniMPYOUG8qn0xAK5cgKjeg1SNucBhKMEX9S3p9AoS2iw+DiYaczJTKJZz86GhrdiVy8A1ktu83XcBP3XQNJNIKdExd7nx837HeGJNyTYCQmz5q+RbJcigcS9webFzln98xt9RX2UeXTseR2ITAl01qF5E03Q9giK8gtjU44Q+Tf5GWAvYpTejbpcM7DZ8jdqPYHKRadLBJxrzyiFLIZWZnlADOvR6wjSDAbW9+WMv+HskO2uWgdffDMbKnzbxduuvD8EJFDAaeBqiqXxYbqgtXtbBd7kq95rDDdRVCjLFEsYnvxpO9rB4x4WCYUdOLDmG2x/ll3kCs4HCkaakh+sKvQqvOGNQ1rLPw/owcFl8kbUrtw613mkv/0xPV1bktRMVuIES/LKMaP/zIfGkU3ADvJPGDt3s8qPahByqDTjz88lDDiO0DHs4LIMg7xZVqRTWhQXsCJY9fnR3EIEnTx+RIlFIfDeE+cJRrq49bxxZC1tXMWU73XgMD2xrgc/VOTWxJOiZOSy2m27SbKybTYWardagq/uwR7OMxFDTssgkbYJDlxQdK3gLmnY0IDWDZbHt+fTzEvDi5mUnJ/y9FMo3q+u4=';const _IH='0956ae5984e3e5d6f2969c007bfcdb4b77af768e4b83b3433a1ee8ac809505f0';let _src;

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
