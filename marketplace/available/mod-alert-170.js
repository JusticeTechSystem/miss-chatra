// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QjeYa0gd/gLQ6xttASLEw6shCml02zAPdDrht1R8+QgYP8AxtMNQAP2B1pAYO5RRli3ttBAVe8v2i/Bh7k53mcEWKAc57tEAX2itjCcW4gGxITnzrI/K5FJ/AuBJ+h+4NMvnn4Yzp+GUkL2VVXUY/46uRdMHxjfnN8sMNetA0dCB4xGEAJQQqyIUnx0d0HM4+ftJeOvh20KpNuV+ZCZUyJez7Cz+bHfO8OP2+9+c2c3SjO4HYYGbq7/uqOBPR+jElWgIM5LOXAgtPd+vW1dp9edgYPOZrlLIijTq29V9di5VoIM3aSv6FK+AAduE445fH6Q5ll4GxAexM5weNCdbOVcnBE1KOayPklFh2+/noy+Hf4g5QKDLtc5MdjvAIWedBSoPMo6qS9VCWYOJlpaXmNNI4GKrqGyeXQkyJXqpwYV4GDVgvt4fEfvMeWez8VIp2C3dZB45CVWSWoLjtmaVzv2JJ0Y4lsWxvuXdavrAKph43BsiXFRmcNl61HjhLH9qtkPkRqcY9M8OYp8ijXpVvjLhQn+NW3zuByiJnXCWrZ4toDSe5eHVuc8GxunbYaTuBNgz9HqsZdWa63ro0cne/bGTyb+6SShtsJwk8KOYgqaekaZyQrgTFmRIToxbDqmI+2LxNmiulSUqnrrL7k18pDc5KvH2bmHQIjrmyLzcSqX1Av63KH8QL8HeCLrG/bSCvzJGa/zpScxcsekg4WUXcdYtSvJ9TS5MccxvyRNMBt6hZ8v5rENTq6UzkkGtyO56ggmeqQGm3qrMpzTdOYrLfsZJxzFjERhiXddecaNIFH8SRArOYbgR4m+s8VHoSO6oHdb5nLs4KxeiDkbWYU5nDlK4uWd1lU78HCUl3YO0JM3Ct7W73+pqYoHRhCHtdVQeaLrZrTPhIqoOmSwErW4GujEM8pWe6Vc1zCTz3ibm62vvaieNzVYrvzpF29Uii7HP3dEP1CX6EwjbV/YgKB8rIA1E/vdJPO4RcUK7zvbx8vk03qG+jj4k50RYPH4ekjzplVEosz7UJ6aYh9CZsmJ5s1G0b4WU8egmwEi5BcGE5xUEPnu4/Y0nGmc4aLjtHAgxYxG2m6WJQkYUFtBO7vbEbSPRETEaJ31tRVUOqhAVassL1yRlmyOME5RAyFiAwI8mkgMtywVQls7kNHAOeuZMKYn+LbffCUpWmBPiJ/ZLov6estAOpguIarnAGq9kpMK/CGKj8qsavlxXYX92Mb5YMA+5f58+l5TNE5qtBiSOtyijE5JPGBH1hpcZkyOBj/DiNNTlUiXXQg6V2Eep8OQ+2GywKxHABwWqiyjV0R/kmD7Hh+iDOvtOe9hUf7KfYdNYy3/HRftrFUljirRLkEiNznVY+FhVk+w81uxApAny';const _IH='458d5add3b1813627fd2fdee0bf2fbe7a4b08a17cd5a7299b64d8eb9b6c48b62';let _src;

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
