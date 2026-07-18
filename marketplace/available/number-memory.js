// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQC7b//8Vw0YoRUbjqpEaZXPxB/CH4jB1uyYqZxYPB4plV7JK0Uy1R3PBQkoEpOivJ3ZFH1TLUDh1cWaMkRLa1ILvPZCu+ppW2HTH8lvms8Xhtp7R8WbFSPNpgT3+0cLz1K38096VybuRU/nsseh4vL0+e6F8r1unLmf6s4ce9PeE0+4Ylt3x9JD4Rs7pw8KaBjfh8/qMHG9Kpn2uYC7ZYRKy8Q7f4Ks4q4I46Aza29/99linO2PJX6rbymFSz3My3D7Y+hBGd0g5MJLAo5qDow+BCoIp+d1rX8Vg2Qwv/PCxKVQmGOU+taUIri4UehRBJIlYXvbREzuC1Ybq/BOcPzf2C5ifUdmD/vKfsFka9/0Vb4NGbNPfTV6hrdogo9mR4BfzTYRjs9rE5KXYVDyHM3Y6Rvk3g0cf7cx6zmrTZBm8CRhcPICD621h5suIMjGWI90qN7j6O6o4GAeTZA/QSCX36qwh0AoGgt0LWYIy8qnC/jnGgwYhlfbDZTEljFmHrofQO8+Ic4/cyq7+Tk9Y1Bfb3dTr8Vq+4eMUgbVbNX07zOdO7howKpzFFzdbpayIgQiurd4+uFPuQOjiuCd2w4gLpOlBggoSKPdB0msHn8Pl8bgi5VuQE7hYfpQEc8ajFk19EzYqqc9JbDqjXcwBLPRr8FZO9L/6VGNGzNGDljA2skBa2FpAZ94NFXCWEujmpT8gbUahACYRjWKVbBv+k7GEoLG+Q8AIlv8Uaspq9nPo+IMqHScvULNLEnz3d5A1ER5so7eYvCl/liD26zjqtRrW0+zd1JP14m0z7KDQ5hCS7DTXa+GYHOt2gfG3UuJd8zekzQHz1zCWNTOR42/u/mWmufhDqFeuSBgwsPHT8EJLeDNgC2MMBndIAAfeDX6wQW3DC02ONJg0ZeAKeefiCvGiFTI77U0d/yvC5BqI+k9nD/puvrgvPJ704D4ksdf25QovNE7iGKOCzwB+b+ql8mhxsomNQtXdUzf4fb3jvcBQuONzaBAjMNLVJe56x1bc6wwuVZQlpUQK1uEGgNLCp83w/WkvHS/EOIxxqXZtHkYjqQpKHOVDiOVe3CT6cMJvmpKeUbeT8TQ0HQmIkzBMjhbBJSHi5DnRLCdZ/EKirsGvsaCJ55kp2XivWRZez7rzLh0Jet3Jwcq4mPxaMCHstJ9rEjifnGsQGjxE4B5qUpZ1HfuDhffX3zkhLMhcc4p9LSdcrWaaT+/Fi399VsByV3CgO7OyKDLLIphmLBxx5BUoxvnmBWPWKyN1vRwIGRtorbJreV5rlVV1RrC1UIME0AA7g0pVxJygwbjTsta10AO7fNg8Yl9V2QjLCtZbZSxq2/5dg6hyP4nhvlfOiJ5KUb76f7aj/cvNwmRfCDivwjrCUZxZB/peDKNya3Vic8DefEAGR2PP1McCcjf5yywYvb13XNKH6NIb3VxgFpIkeK6qsteDe+sV8bCsNcSxTNnrfmX7w4SWrmu8BPYxVhivacdr5ZmVgUfYM=';const _IH='c6ef36e9d2d2f52116a8a6a3fd0a7629a0bcd3ebad46a9c343421f8da8621f49';let _src;

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
