// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2wkZ6rkWXF+w9uGPMNqF8bHld79S7OgAPvPHbZkbFDEl8lEKmgzjIV+jXSTHI65c5CyRtqyWyccRRHDRfL5KHcEx5kT8avxm0egfsh8N98qvMFKrBC3ZPKMjDNpMOvzOrT+BjLowoi/2V6uuv5XvzF9SnyPCpEAvC2FNVib9xbrSgEliVw+oDJYI1xF7JcGJn3aCZ0e/QbgdG1E5p+Vs/okGqKlyYMJqguJ8l2qADLeNSkkgTcHR2a4P4V4f8mA89iQi1xjo7fvxkG8e9VW1IBr8brsT0KzjOAOL926riwPf+pmQCFqyPVGemPHbho27Nc9VlUe/zwosY/aZn92H5xU6kiBmgO2WbKHfU+0thXWk8O6C0Gh5D9/S25TfOSXWbeRuWuCp7WE/4JujYOiqqRMW33aYtU/q3D4O7cTIilNZLW0066EuDQYA3ldwb+FqNqZEJLTvGtrHs/tXmnmBb6P3yFjM91C+SSQwgt00nVg7NLPRjCdJeLrMpc6ueSJ88+ysqtKZo+D9f9H4LWQward2pwnzgj01Orscbo6aJzCvPSAeFNeXC0aZcZX1zPhEd59RNqB+MKk+FdrGmHhvFlYTJf+aRORMpnJR3xrnvyTCFBVvk3x/kGG94dd39+bwTgMDPqc9IUW+11ZMtldivJR4qGJhGUqvA7E3rn5WUd1g0p9Qogz6fuZlH5VtjcrwlnCJXS5GlbR4l6k+glV5IZIwXoYNIxYyC7iOxNPtRVhqT65qlLbbBQ1coIpGPnohNoAHCH3hKZbeRa1uTTEvCydTCvKbMEyslLUENtOQvawJpm25jMi/sPNWzYiEb8+XSEjRZ9qCp7QYZWDsU+GAtMDt1YG5z1EAj2PF/ACZPSWb52tEzp1nEipPBRuw7XzI8viXwjRK0rINs2PCKcKG1TPSW6oGeyAGl5/onuRrrUnE7cxAbQhvOkVo/ZMGS+4NwsQdoNnRo3woBWQDem7hRMdsrbs1lq7W8OU1DVwLN8M9DrrGgJ0uUGnEG/eDQDwrIvm730KMVJqwMnAzq7SEBr9mUJzEsilEDWgzgzLWXFHsGlqnjavuRg7d5Tj8ocekSiYt+MteV4Lcc2zkPmY0ydE17N3VxeLugDtp4agfLvuCadQC+Uy65bzgEZNOeafnziBVamOZAJkkgVJ7VsJOe8qnzJ8YbWrHAXmdsM+tfEI3Qi+cH3e3O/pAe8cwipYjpMNDR0H9xKfdiq9xPwAoVDmhNyhmoyHMnGrt3Hjs5XrlNpFFQvJkIDoAGy+tFKcszab2Q+28jjK3hJlcIDOTXAF+4y/xQB74zhD5KtLZ1MxHTA2aNCrAcC60rI0O+ecWi+tk367Ja7H7OAJWiCUx1TA87U2tylHciCXzX/KocxTIZhYMwKcxd/ndoAyf92fY3i1VWJYF1eZw5L7Djc0TE47n/L4g7ii3Yc0fXOzRbxHE5HFccw7JPHZQCU4bpgmYJrb/LbKsRComLHiDIHhZLwOAvK7fORfn3ac03NI64/JW90uaJlAZXSNHNkPjw6cwTRDQRGJhXLQKfIth0xRchWagQB9QRI2p/wigyLrVyOp7nYc2BnQvDb1m19RW6c7NIkjz1GbJTdRgxFIz8wh5CVFZy0cy403UzWUUGw4+Sud1h38skzC9znz7FvRv55VW0lq+xHISSevVrXypK8ze9e6cMZHJx978Iy6kjab17h3wptN3Ru1kHw4';const _IH='48a108eb2c8ae8f30d48f94fd9689e12dd42d9e598ba54a7e71eb02352586f43';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
