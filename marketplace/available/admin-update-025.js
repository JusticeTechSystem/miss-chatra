// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSW9ljzQLaoOTqtGOpvMPUzkVu3PUYMfe3nkhiZ87EKrs3oW9qEjWcc8OHdkA28kdKeG06fewv+9SmsgwacrTDS2qny/d5EB5bJxd5a9+cfI16bMeb5rDUbincgM9oG8VtqDv/CXAfo4lG7jfPFUaBrDYQg28FV7hXtJZ27WFwtUohmUQKKyy9WnPw5wS+g2g2LjXEldFUje14xdyrX4SL+sj50hrX7cY6v4rSXhS5QkhlhfzSX7+ucc6o0gPrEnpcl3/dfNOJF3gi+79F+zAQ91GjMkDInvTxx+xMlaMAymXR6qfOWpG+lCvrKGUllv2Zd6gy+6NgcGH+7EeXd2fxOe9+36rcB4+kQJws19TkK8WmveKGpU4AbOvrrQu2khPwWpqILbEe67OIg8OebFT5Fg9xd/+eyO24UVzAeXS3OjKiQBrQocgMpYCRZBmb1fLkBewU6iUMW4WBcsDzwCLCqtU0evGDSg44lEJAawqTVLifTWcKTluWiDnCeYj3I9/gNMFBhiNHtt5NsPryl+1XOqqhpYkGbWbxlxVhT2oqcnSeFPYxJKXpOIRKBYDJBWmi2dMC/zM/+Amghyr4wtp6oNvf6+FqqMNyPVPVYp05nGjW2hDxO643PLTn0g8P2IT3/zGkaYvGZ/R6yYNxcxvdhW5CoN9XTCENz9enRI5Z7BfsJ4fGJZcXF7/KISZmtDJlf/KqUWM9RvDV7KF1bDPlg19rbxLmOKG6y+Uu71zyyerIkG5Gg2VGbV4OdjlFj4CtujecZ4BIRvjRaMUBB9oRNIuxp72RTswqPxwzC7jwxddVq2CFs/h2cIj3cv8wmRQ+ETIdDPTfbjWBvwjFrbdtyeaKVjzSEjFZHRIHN9+mUn0TWZ5AkPPk6cCanVgOmUDqZqP6yQhNcEdHRzaqibYzlDhx5yCYvJO6vM2QOBv4/A6fqzRNTbhzIQRT0isB1GcCRSAQO+HKDHplTSyb1cHqTr/PSXaqSMC/O/ksZe9N19fiaAsxSFsKDTzvewuM=';const _IH='f9af151ed0d906a6ce2da26bbc7a6343f41d6a95b6fab66e4a9a554796656fe5';let _src;

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
