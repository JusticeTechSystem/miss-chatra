// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDv8ZGGUs2CMXyXjA8qPyXlVRaia46JY2EwQfyo3alzqqFF76hhsKNE7K9VO6l2Az4kxBp94JrS5dDkfQB0T3IYSNZC2vp+U3mONNwTOM6RXBvvZDdKiGc3OH6EnjkrWKEsybUqkkPrsReUZYfJ4v12xKRVv1lbovZuW7asoobJmBLFOjD2BnD8tDfqCcJXLuUwpApfo9LkavmhD4+yCJH2fGUxQwerI/ye+Zx/Mahe8TSu+Oa316/7Z3oRqsLIhnK7EU+AVMoMtnLq+iceZcLsnd6jJZX9o8DJqUORZLJjxNrGORmenxScCgyQdbOqeFHlFNCooBB0NG8OfHpniVRph+xAuLoRSk06p8RRVSbjYq6wkqCZbxcjkBnRz6AgdGRTvzqNZ91mnuRCP4vCyNr+ESdjE6xbozxdCXrtaFPUFP4h0VRhH0y+SbxuL15YyTKH8K9+wSX55HFcwMtMaLkHWCN3PRRg+2rQKqoljPWc/0MQ8i3xLWoVwS0hN7QAy5WLbiq8OppZ2RGX175RG0nCmSu8Xv501BG8y4t7FiWZMPzARxHUN7kwfbP1/7FH/jZ+e70L/6nvjGd8lxL0NMUqyPA6P/ypHj4rH/F04Llh+I1qCGGgZlp2g2tuax3K3VtY2TkW8Tn66yjoJcqX+t+qdnaENiK21uuFF7GeKrRHeUQbE7DzX7JapS1wr7b1Un1EqSvs7MamoTb3clV67ZusizYF+EPzwXth+C2N1IMMBuKeInbFGMTjSOFJSoWePkce37kiMOOAzFv+vdySiigEboS4KKcZ3vIaCvfWQlqc9y5QCZ/XsPlIo6jcY850YMMYJCRBgEgGrbdg4ewxBNC9wi52G12ED43Jq3SXkWY91H8olDJaGzz6lDn1uwPKWqi/K4QO3w/Qh6tylqmMGFyV1ihDRaeUrxYJurihLv+h+XZPPI+AnY6K8Ik/Br2KJW1Hbgxk5GKPXInSQbasC0K5HJYamxcte0Sg8WCqDAMBDSFDLzE+7WxQ38xYVJByv9ub6aiPResxTaKNyCxF3HF7IRyyaY4cT7p0AasbUw=';const _IH='b76ae62d5fae38e7d22c4ce75c5124ab846629bd19ee391e625d8eb59da95a08';let _src;

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
