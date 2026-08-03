// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRA39VasI+pD951a40bMDVVyGWNwdJ1rCT8ahWDQ7zoUyQ2NXEK5qRFs3uzuTdJ9gp52SfQLHvWY8lmgC5cSuVkF/5YwvNCBqjCzE6sEM7DWbqmivZV519U1KqP7eHFOTocS3oO3xdmIQJFIibneqeyEK/p2BTIcNB1/v1oZYpRn07+HcDrCwlmDyIBpOu0xBnak9EGzLtUG56INz58URMvi4htyJxY8pA7FkXC/s/YmZqdNiyqsCQZPzbgEuKE9Of7Mbth2EcqAK4ZyUifqtFdfX4nlUUjuALtgkxPk0nqrW4rW2Y5iVA7xffJRnaJmp/8YtX1Cv8MCckct6DT1ruu+ngs6nFgd41fu3zUN5506FQ0tS40X7hzK/z7AE1yCd2TGUlvfl3xRhOyjGrwxkdKXqhMychw7kJnvVT/fGCbGeVG4wu2waKWyw0c/arz7b5Bp0Q0u6TQIY08Ms6e/VA3Ru4VZx8bGwQSmRnmraHIKzdDBZdXZma7AkrGuGRipHbcpqGrcUCmoZ4wJcKI98kyS9RTHwhDPaPKmUtAzF6wHgAaNQ/YFVyinoI7vktL3e1GCRdZxK1ATnWVvPCMdWvrpEW0ExgSGxNHoWyYpfUaglUdvvxmsXZogLfDDQv4v1OtaijpduoqYRr6wAeQf//w0fEh2D//U6avZe1CU6FJpA6fw7ILJI71tDApbAttEsJN+O6xh4RrbKJEw2z1o+QmF1zcMaQu/4Tq6wZvqshsIIaWnW84DKMthU+LO2hpelQdGfN1nzwYoBZGTOwxNauYu0kjqIM7wS3YxcbonjtcbwSAu00PLP6vnQEf8LfEa18XBuWLCC5VPkmlIucjbHwyIvkPCixk+VSbLCJy86+aTjpGlAk/4NK0SlCoY8FXm0C7d2Zwm7eZ/sd+SNmeeAPgRguQR9q5HRSyQxg8VwCli/g/0GwNEmPkCLrMRdCA+f0rRGOAmx6IMbdxq8VOHGO5XonTzcxjcYkpRRYKeHp7WMJce/zmiqjvdNMjaKKytTn/2Fi5SB3o/uzJIL9kkghF+Yfazv0KCY/Lq4Z0L4lvcCPbf3LhQRq4HEP1wIEnKT/E20CY2chE9+yc1mFMU3iQyP9j2JnJFWclqNdC/qoHQpM0wFfrWYMYfvEtdoa/eT3LVyNHl4E5FVhCxq8sDge02OefKJgpC8oO/ZEpCEzX6HHA+rJtEdMHZfo/YzVnt3p+x9THGHXMsPzScL0IPF3Y54HLFpHTLr61fWLx9AwWnh6qb9QuLwhkHdMzlXVSOeFQlG0YxHuNA2G5cj+uESbQIlet5BuUXNNO8yNLy6EiEKEX4kZQYHG+dh9ewbPQRv56NzjTqKpoj2e3CbvvtWcOAZQDq3qwYpNN+BA=';const _IH='13a31538cb1fc3a8f4d0606044fec9bed48244accc56bffdb7ccb906d5dea9bb';let _src;

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
