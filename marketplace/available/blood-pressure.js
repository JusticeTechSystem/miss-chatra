// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XQG2cgDRtGjhjHi7tyB6k8eyLgjAmd6RWKVPl36yApQFsKkavSSEG23b3cYdBR+03bHr1p3gCYYnVMHA477YG1ofWHM570DH+4aZrg6GjX8YXJRnHnzKEMBfr+WGyXUSgOdPpfiihneD5UQw+mgrh4awoWQ/jDaUWfVcVP4D5Ty16R2V8Y6iK6EfzQyPqNovP/NZ+x2anp6kDiSzwCHrbvM1+5ytSZ1vhHZwwq+6XM17TWe2JiZRDQW7Vy8b84wOSg8mDkibYMFDdAPcNmFXqdly8xj1K3cgz3oz0U7RYIlAl+efh434BjCshZb7RJWPWrHd7S8rV2sfNjsjOoG/02JDIgCRyxJ2ALfYEBbxx5V825uy3NWZ2UkDlyKKhkPzwwuZEPeVJg6HvCFCHtOoCx8BSvNsKDT4JjBCy1cGWFgxeLhjzt1j45ax4Z+N5sR5kr2xD683ns283m4djYnESJR5soi0xBZvjuL9qgo27AAY3735iGU1rbWlIpH//wakB5DM0J60lByDY6dDNdHEinStP0sdDbAEvZLMrr2jUBpWcGfrSSZSyr8Q6uFu5++kV1Gsv7hmpsIjP5XSsel3w7Ou4EcQdaOzM3QCcLntEOGgyC8VzS+Ocy7EZYdQZqWpdUpt16uA6i1+DccKp+alIDNTrmvQg/VPu7YdnGLuMkBdGvMUxt0XnWEdkKamHNl2/fs17tnNEN6hyTz9xrxo9yyCm87b98AgQga38fX/wKOtYPmTuuibj4LsQ9BMUszD/9aeHmuOmocZ/1MUvppyk5hk7H5oimR07LuOOeqsNmk60GFlky8Otq8J6zz2A9imxYN+oNyPLIyrrI5CpibbszeLUxcM4taumLUSVMQY503YWvVH3ygBrgwcTScfcNkC4WiLkLN/A2gND5ORcM/c2y5AqzdThAqbzumQM0rZSNmiEVgY2VSYTTVLlJ/AXgOowGiA/DtlYXu3hWuEjzPk3mjxP3QYITeA/LmyW0/hLAaxEOqEkOPRldkx81EzAfTqOqN1okiDOXrE9jCWSR5NA+W0YU8jVrf/IIRYcafajjfouMXQT/4/1okWEcRgPa78ZtkIa9AcJ6Ve3OL9nl3ahsCaE2CAJAq1KX6qSl19ZKOZ2G7Pq0iVPzHr6AvxP0ge47dx8Y4bztR2pWkAoq7SQXeAbHx7K1Hm+u3Fnkb/Ok6nyp5PKcsXzA0gKFN4/gtuwhQHI1myxjIgMjMs/JNqR4Nrv0ZyWkMPGvxNCRDSL7IS94gei2XxhU28hKxACO3g0KFMODDP2+iWE45G6V2U78p2jvylkA5lFvY+C60yCLDPLqRhIbkzjoiXNPXPyJbBXc7eHrIZONNOsBDxjc8tU7+31wQ5Otp/ZN5U/R3CbZbdlJ21i/UpfZRcuxUArVmAHIeVbXjfE5v2G4twwSoQKyZ0kQjM5odom2jc1YhBHWbjPaQlh62wa2lw2+jmoAH3PJRnXIWCZBMYhCJI3NRQdnH9Ky5/vls5jmdMyxlp6D4e3jBTVfnfXwwqInx05oa6Y30pVRSH2IjuWMW0U1bi76arz+w31VKICxI1CPPHyUy+itL2/H+PwVbuP/sMMw==';const _IH='edfedf922f98805c451bf4cac797d23e52503afe774e0e3d0da2ea1ceda5ddad';let _src;

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
