// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8jL1fSyi7Z1Okte+oQjeHbr+BtOnDyFvnqgol6s5ZoWkixfuZUGPq0gxOfnGrd5Tz9Tx8EA4ex0AtYflUpHDOnnAqAMrHlod2TcrLG/jguuDLfC23NHjh+oTFowUmx8NU4SpPCBXr4nYO5TrV27juXxg3L+lS7NIWdfQTBfg0GsUeDFCuxEl3AGcUIRx8MIqVqs4N0Zhkdozk7ij/e+oN2pjqN3IJ6E41YBaIj6Z6zVIFF3DES8Mb2PouEZyZMdbRTcVWQ+dTGqhpi0sf6iQsW3BTTr8NaVH/iFRGY6MaLs9zadRWjQFn+xMNbv54NiZITOse+aRJc7vylYbC5Ox4NGBprB0srKj1q8ux2zEtOyY4XYirVIOozFep+6ySHtiRH6lKl4hU/OvqkMB/yunn9HI7HbhsD1SitPTuyjFta2z6Ad7iWg+jmu3Ny2U7Uonsxu22Ja2qL3o7oqQTJ67sCPVlW97smKCMQ895wgQmneJNio7pDj0Biu/1B2K713ZdbtIsKOKu0tclKJ8qUk6lfV2R/411gAyMOiTjSQ3nE7IBJ0GL2zh3BrBkMAe9g1QxhjP1GWej2nlLxje2qI05O4nNVrzQjpefMm7IUsjWR0KgKmrMZIYfXDf68o49hiCnTh9cBB94Xsy7tGn1jctAbzzuDgBe6ILNKfmKaLvNBkeTa02yMqmgUC3ENvKvzoN/eaq6fOIE4C4wbm5QO1tXzHT/yBYJZbYbQI5fMqm/ctA0frBb458KBnTeCBYbYJwshCwr7EEgdT58AJKgCA8TtEcPfXTPB8speKpur1HuKIKPkCkfbd7l9GTc3iovR4gImarZLyW8AL0qq2KFfDqBzoEX11z3CwuxVo+wiYk+vP0sAMonDUFjLC8jjpBcrZg8BM5aAMhdNEaLCdwHqZL6R7IlxSX/LbLH2gDfw65u+SRthvYn7W543Yk3uZmqshvfPdJCqhXCUAdhNmKp/EBnCzTMIFi3LPefqNNsyNrRJsmbbJO7RDNfjhAUyiKVLYW2jH9gQg9CQ5wMUVhIJZjmWbVDJ0klORBXoUYBdXxy4JLxLrOqAl4O0qUNCj+tayMX9pYhdlco26jCuVyyYhNCs8Wr13M8wp6gdIOWK7vfoDUtM6+jPVIjQcDxns6BrEjA1nXUJRCftcH1KV8UNDxd87qyzPVd32Fxxf+vxd7DsYRuQYxVrHuiDNBJcj4cW334olLh/lkoeAVFAtQYLUQ=';const _IH='35ac3c51fa4ad25da76c51ac39be49ac9707ff969ecee72a865bfc2f87577abf';let _src;

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
