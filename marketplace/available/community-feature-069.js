// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT15y3Nqah8mPHFRcBgES4J4k7hr5n/poOsSyGvnCD6wdu0DuzTi5Jc7ktGLbyA7K0YVxZJI7dYyqRn2FCEtFKKqT4NUgnMk/DxnNbnjR5EglBb1abJ4tD6K/hHzSb3/t2u0GvSas5y5bWviu+avxDYqL0uBA/ihZA00qcOOsecYLrfTSr2FDnTo2Im0XoPqXUSp55exs8zjWlkn+tu/Lody4mWaAZDPN5+j5819MXXImm9Rt+jZyXGekC/3/dHve5G5aNpsa8yGL2zhahLRs8+RymkJvsdeB4CjnviiJDuKjgQ/dvzahKnGT3FBTongdiRk7rnZQMrssZOh3tatA5fbaxZX2lDy/+4QQ2T12LoiQWAncQM29+E7XidUjxKxYA7pfAS7cu+0A8Y+iX0UQwddEwN4pIJUSkmZYg7pr9/WJ5DVpNO8ZVZTOVHnBh1cW742MCv/1tAwAD+exsZuOyG/anr224hrbFoV5e7ujcxwBriMS2MeVSBzfWg7qisrukmiNZu6ljZS8R+zXuJhVJharcmHo6/fPA0UbjY728VkFaioX0pkj2MEXSzL91HLcaLT0nHIqR+V0x5Y5OAI3AEHWNr09Gzzt2Gxs/wtOqqFLQhRmad6jD513rjYj7kxRNmaLzIB3gW2ol4tJ3GWGI2IjsDoDsu7P6ZoVggco+eTPaA8aseYsC5/34jx7gyxt1ORV5zNeZmkG1eNHwbwd/WAF8KsDrnqtKeM1Qb8Xk=';const _IH='19fb07820a8e133b52e10d116fcde93c36b454db06ad7506c532fbf0d7308102';let _src;

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
