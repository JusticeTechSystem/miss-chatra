// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvX7CYQU4/SgqrKznIq/M0gVtdasZ3GWb1yxRZplIcYvQzKvtrpAnTJnVmPdUJn4XNBzvKUCaSa7F8Yt2PlMqsbqQFp0z+2Rxj3A7/KaifqSK9hO4SnjOqkppnTdAOvcHa9imuNc0CxTs2ioS3LLwfQaCTf7gveCXyhQfGZYcW9b+StVXY5SneuTNtpeQMnmt3jJqnCBN61ChU5FCl+IvpUomlfgAsCFwCmM2MavOnE5EIRUGvfOEluA3TU1te/M9/OAvH/N4n+HvVKdCM3CJHlxTnF9/Kql1d9qJn3MSowJGBNT+mIjaV7Ee9npLaKJ9WMtAqfCaoY5PqDEJ1wG2qxYKO+56XU2zekPZEO73yy4dp4KvoBh9Qkei4qtdKh4WHjsH/pQ0ahs3krIvvxSPJwHT4LYV8YNP1TBcySGpBwldtmoSssA3KEmzZRi6YQYLELeAY034PDkEKAxXMbN265/O9ue2EAconq2q8Gsx5qMVpIHASbGRtteNuVDM1YFuyT3Un2smb3nbUugGgwccBaRmgPpxcyzeoFG1PMdVfPfJHjJBMoQaj5+QAI1n+ZZOdbBR7H8pioqHmy+VhOSLRCP51VnUXjjb6Gq/djzzRYAcXezD+NAPYlPR2pWdGR35ozQTzVx7aBsZqlKhHXE2xZ/fGcFpMuJpR0P+ss34k82R8qRN9DZIgCxmTWBNaXaVS8dXX5OaQtGptTnhFgEhpx96OXVJ9buBJxj+SiPow0/qU2lr+uAkKd2Ey545tVVnhUKFPUm4iqgNro+2kHtfM/aGkWsTCXew8u3AYelog/5W2Qw6ZyAq74x/G3PAHDYVxzeB7YoocMj96qj8dmRFVkU4VuJ/z2b/ZQykavycFZxwKYQXInNB20Zqkp0AOnCtgK8BS0nD/uj3cORlDtZhJyJU0M5P28OqDgWySOikl+igEdmyanfOODZSXOAhj9LwQu35aVkykXDaR2PBAZ/poZfx2snubb4OMmE4T787Q2WX1G4rrdpCWsAHn+GjU7gTmQQnF5D63PlIJcpApxHoRfxquHO5AnkdNcZ/VB14sPt5Ie+KBREDZn0KBpN0bMVq35PS0QYcy+4+Dmj5J4fQkCxbne3tM7cM1P23d/zCYE/cR8urj0MkOAjIwVGD6bfpzQsO4j01ycy5N30mjHiPb4kA/pZqNCHDstN0e4Pvwh2Oqn+iOt0e22idg/HbxFacW';const _IH='da0ff21a9a1236c74c745529db3433d05ead96468c5e71501ebd1baf1abc58bd';let _src;

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
