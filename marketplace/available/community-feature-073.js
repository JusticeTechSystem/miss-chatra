// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTm0BRLwU1ZGC7zglPvTQQkLDSrxIhQ6MJ+DuXWpqe2xVBvddtf3XV71LVBvCgf5ou0KU68xPWj+598ZbGj8jHZ+hRQUkVBmVcCGU/S8EjHYUlP9AfI3doGdCO1Wwpz6uQKu1N4lKiDU8si0duYLPD14jOvOhi1V2cPbAumLK7sU74B3wB1cumOqI7wjW8cZ9XwF2eOAHU0aaDI95ZBs/HJxBs++mnmejJpmz3rhoALGzNT20nr4iWzRU6HghTZ1Z77mmbVu0AngMnldnIF8QU8XN871Qd1hoU/wKzoOmn2pKe9agKx8Vnpv+krFSJXILDxKyE3eGqVz+7n9Pgf20xrJfBSJngUcx9DtzYK/CfKVpA3YQPXOJrrNDiRPq++uhn8dNJM+4gZAgWQTFG8G4/yMjaU22rufxgRPLW6CAyIPRHfDNbw1VLZwSda7Z7racb16xCa+sMN62bK0NHmDySt7lx9rK4zmLOS9JEk0cIEX8h/di/Y+/gAlhj576XlOPlIpr+5NObC6zzfmNqAaOOBp/7+aiJtiMyZPsXqe6cCRqWl9QQl1WIXZ05Y4to2lhLb/1LuxtOLh7nI3HNJUtRVL4Vj2EK+yigh7Y3WyPFJLru4j39Q1ZmYb2VGGj45jivaJtPn3rMmhTr4oHPFi/vNJRPPbrqmiqnQ5IQg5jiR1xAQ76jjkeXLBjL85r/gEVd+WR424+PHm1m2H1gexIOUWoBP7FxoVa1/';const _IH='4cfdae6c6da408a1d29a0941ff73992bbe5ac82936dc840e6c7ea05ec2d31d12';let _src;

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
