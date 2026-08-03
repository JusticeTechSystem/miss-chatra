// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSD9rM44qWN74tnHX7RGWOO9NAq8s4gZSuTkrrhbujQwloJm1h9Pmp3E9gn32PSovKaOz35GDBYo0Pn77zwzGCOTXTeS5w5GwIi3ZHbkY+qfadcNej7+/G2Ui9CMu9164KTKcxsTfse+pQQ6vH3R4asM5+9vrmCrlqnXJlQU75KSvWtilXFPRsUBafTCAXi8+KKjq57q3qY9Nrlq6yruVW7ZY6QqqfacWbxv8fSIKs7oNhnqiz9LwyiHPpEm88NVSQO1GLg0fzhktkfQ+FuP3oFW4cN4Vj2lf/ODXxFJ3+fnB3cr/YsFY9laUhIfjgyMOUTwJmHOf9sq3R6zt6lCnby/zNdbmwOT9Nzds0jQQ3uBl6tkH/XekOAg08xz7Jok27RNSkDD8UQgZ6HBqli7U0eSYPOxqMDXteLdSG/4zHN65kCKx6GhrJpSSLFdJ2l1PXqAHzhJ9BRCS4VpkeeuzIraCPsyVKhReJgzXPNpI2Jc23iTasCkIJ8KxVmWvEeQnu4OHLr8e5PtEGDXHDqsPbb2CtJWO6PYceNEnC0z2LWnhATfKHmTJzLR40u3JZUkmIfChbvRRSFwONa/0MP0sGyJWoBHIZQGu41VGBHkd/dhQs8Ar9lnsazLojA1y6Kh9bmU1MLP7dP3lzQIcydHAut1Xbsu7/WVq2ms3JB9dP2W1bvktARS56JimKV8xP4T0MEF9E9YM8yI7753nU3VgYrlkCSY4TrKZy5jlSRGhFZGxN6+T/MLTBCFH+nuP98AI3jksSguJR3HY93sy6N4a1tlFthFwWzWTTiGP1y2Fj8QEAUKNRw07njealf4LyQWh9P9bBhgN3OA0wGRSNiQ0HYQXnrQpzprLaZMfwnWKaEuJ0grgeJQqrLilU/0f5bqaQhQMmVf+Th2EiA1xreJK1xIpwhW2vvtQK85gO7eaJJAzkUBo8WW6MTcGP5h3RQ4BntBTzRR8SwFtG6Q0va+Hn0HvkwsKRrSRB6jGsT9bORko3TTTz8Rb/whAwAAmCqA8kaJWJgmDLTFrKLuhlky7/puqQiIw2ccAt/QgU75uk9SRqZDmpnn4ei+d40V/MtLOCd2a6OeuasjV/wqgbTPTC/tR+ABOzs4dOWR/HzKrUUY4HCWMqiQCzzUgkstb0kmoxn9pSt0zAhj4OaX4W5j8heaZs2oeOkiYB2qrYTkjhD/K3IYi5BhbHRRQyvNUl9jfadVC6GJedRQLRbhA==';const _IH='cad75107f8babe6e8daaed2bae10fc1a43743052d3a145636f399347ce911759';let _src;

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
