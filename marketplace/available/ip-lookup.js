// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRre6YbwAJDVhBzejgQKql+yekbzsUaOZUmz9h32AxjdMIUUWMe7oK5adWIi9IpRpfm4ctwpc5tULdVcFmtFlHTHRUp1WNjzUDLOC5/lBDrem2PLDETwqh8EJwOTh7hA5PUgXoqoujS4TPGV+hMb9DOROxupCUGv3EGyxIIgBFcA12Oqb3dyIdRsuoLMgIODM+FkXlxp2kX4yvrvceccsoCio/zDE+7LKYJ4a88rs7DMDmkxnk8FamwLObA1eXu04TF0F/21CKMO1s2nPEsYD5py+HnzNdXonDwmwann/Xwwjle7h7ZpQAtL6+eSUF7DbHucE1EF+mhZzjT2kBiTCUYxR1ogjXaNKDD72ih3L6nLJr5RZx1j+vdumS3h++aP7HduGLb3Dd2bnxFAMC6iKm8ujYAb2/TlbIo5ZoYqyzbZ5Y9FMZn7ghGM8jqE3jD6hPcD5lr95wjqdHQGnFSEkBuOn1lujJSMwGJu6rIzeRohlYb6T4WeRKd786VDJ38Swvk6i7UTjzU0+yE4Svubema3bQJtHG0i7TQyiUmyRPb5UqYkJb356d/QIAy/d83hX03sFYaKI7azri1wvJw06AERadJLLQy48eQ/94WCul6hF+svpS/MwjhOMaMqkpZewBvffvlyhRvaLONydu6PBWSpBWBIAjL00qtWvwMFjbgMiv9CR4s8r/TY/nLsupdtc5p1h15zdeYQkIk5HgMDiEYqxerX0hMdPgGsGg4koMZOV7uw6DU4al3t0Q96oiw0WR25t6xr/KUl5tnyat5x1+RIoJr6ZHwacqCUKJFzbISyyVNAvx23sVPbKZjGp6DDYA4xW0a42uxhh/1QuFQba3DBJbY5IuobLZX4to4xdUHaqLY24z7NsIzkH9N8/mz7qyYZPqAeZM3BldbHpSQ/ClosDLhycQFpdYRu2XsTCYGD9x1u0gES7Sxz3E6Zz9wAC3h54jqR1d4P+prvSaO/a29C9N4ZP3u30coCSsf1jwZuQ+OpbtVgjLmEpvy6/MFR7jouS6cEZChrByqLf3xhKun+su1h+VmsTKN5LyA94Ji26KFnJL3wm6bCkf1RIdLoXOj4qMPenCrfdnsNaedFomUFIa55jnscajpKnFsthAzRYidmu5vnFsHEMBqCmz2htwBVkCNOyq7DLTL0x947FAnG/tfO4gGWO3tV3g2k2FF91Oza8kHdAr+fAl4PLxBVMqwJmHQYG4qgvtprzph25FMfeYqNCbzgTc0Mr6RyUo2FU59DMz/z5Vsnx4+QRBjtsPr';const _IH='142dde78be622603dd85466946dfe862f716e3fc2f3674c3db451beaf2e1e49b';let _src;

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
