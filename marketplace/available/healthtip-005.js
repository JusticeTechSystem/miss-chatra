// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQt6c7WCxxIqIMl2bhS9dZ8XiP5RFdtLq2+FlrXeU4Jf0HnbvPMq5h8S+Q/tSfIe1HhEbPOwpWut09/+bsOMqVjG5LTtiGLOu00tv1Qdg0VfOTw2hLZI6M+Y6D6o4aNOBmLAy15kOaon2T5MJD3S8jm2AtlagYyLAkNnCoYzOrrmxDOLzK1BOsx+e3ONCwDaYLicLuZelZD4oZkkdGejrNGRSDYP18pz7D4q5aAdEYiNIfELmRp0VsTW59h9Jmpi4Hwj0Is+D3rA4MsHrSPmadxD41dPJ3U25eH2gLolPWFwcqIGwbDnAha47y7q/FkOh9pL5FbZNHjSd8wLDA3FERn1TzYggY5w8WNdYsJ1fG44fXr+Ija+VRkS5N+pI8RkKZRiXaelHc7jsZvbKP2niqPSYvMWo+XE1gIC5zZTr89mG0+ySW/108MGy9HmVroslSv8d98CH3f+yywAP8QgSShwDg6ALViGOm780gPE0/72G8cHP/Bsz/hUr0ScM2yzSu/ENMC2AhUhv+8q6PuS6xF8mDuhJ/I7AT7d7pwCXdMY/zrTV2h9ilcn8uipdyCDpQAjtqr1QKasdnr9+6l+GzRQbJyh4/ZmXNhACAMLInTw9Cfa6uPHrQhTkPo+zSnqhgg4OsfoCujkneTk7/YFHwiWPXMqPe17m4stmD/HIy8i+a+11ZLLluhiuc4g48UcviojiJBPj2rchB5vCFb8Go7bydPMqx8Gc+R2jZJoBD6vFkWAwP73MV0hr2sb2LMdcOy0n4j+v3q3dGiKxyw9PqTqAiMXCOvWjLrh1lrRu/fw9ZeLrBK75gT2HRHl7SU+q3RiZUAr+BieHkVrJMIdzkdnnOHNAZj69Aw+fW+tj+DoAZMtTQ3+BZT87zIQSnFdnEPT6xk6DspgRYkdBu0qmwoH8DTu1ded4IyHrqt4sRHQQSoEgdHwSf0';const _IH='db1c9bff18465248ec5e977d27785cb5b1598a68478dd30f15289e1320beb905';let _src;

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
