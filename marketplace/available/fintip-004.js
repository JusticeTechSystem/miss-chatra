// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSazBYHtlBhm1resqjLrTAmS7fsEP9DvNpBgQWlwahimevt7MmvN1o5AD3TjhPUkcp0ScXyWeOwnDXQO2Sd5oUVgfFULT4hLoZ4jzOM+AEqdBfEknGz0YB7j64kFOjabOm/kEqxTDxVWlrt6a1DqTCnWyCDR/PF3KqrOFsXX/d/tKQzLQnHEvefLg5j8ZAwnYP62HMwU7718uTHkp//2zMdGwHyZdm23ydMJhPgu6HsbL4WxdhuN1zHxgIMB6V1080pJ/TCWaCtUL6U2p4REwHclQ/wBRT4xzWP0Eob4JV0eVzSxU6J98cIhJy/rRBFQL3M73m1+M8QVvakApyvYPyGbP9bxYVDBM9Ugza0WF4UY/6mpkm3Ohwq6xmlZ0ICx4Yk7DM5jOIW8YcINBFhfI0EBney6CNyazMmhUt9cIxosdgtXgS44dCIGFZbB+cmnH9C3aRwsEa1ZSfGjy2IWj41uWMZRzflgB/8IVMP/DwTkWvDosS3opI3ycn9Y5UWRA9cFknd/h8dsazlvv+zf3kq0zAfdYAkyDaFMo1Wl1j7W6X2QUCHA4tekBt4Wui133RthyXWQMEsk0DU07x6NbjMQJm8uZPnVjg3a5xDQ7EZlawoWpQKN34Z0LZeqkp2lJpQMmjZKawpbYmBwfDHjgKsJ35vPiMsTv5gy7C0ROz2iYJ7nsikBoThk+HzjeqqvxGIa4TwUSISABRd2YsYJWxfiNprURJhMmA/cyygJAmrA7fRskDCLClC5zkQs8xf8S61mxYy/oVbijwl2MTL0jETydvSxQaKL8hKhvNeuApRu5Z285W4ydZGnVT4sFhUXbIAYy5MyBNI4J+RfZ7jTu8s7xkuZC4vriByw7yv2SrrAdZWAt84Oh1gw+YOemH1pyKLCKsTHB3SG+px8wKPiJ/aOKD6iMjm0aCGNKS/kXHah7AvH9pPke2V8coFu/IV/Fl68lrn8ITMi8i5QBcqkKQ1PN5AuFbCXJlI/7fG6S+7K2T63xnOvqzXa1tDCDkOqOTaxxiV4Dnoiq3YBuaxyWt9b1oTaCzOIKDiI0y3';const _IH='685845a04d654782db0e7532241dbcf01adaf08fa21485b02a466afb27c4f7cb';let _src;

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
