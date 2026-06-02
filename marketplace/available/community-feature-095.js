// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wynzK8QCFA1dxKgB/Qh2IC2JaaEAnXqcHyRc+t5K5GarGwX6e25QJ2jmU6+XFJJ2O6QjucWWygViehNl6HhMRqmplFIZR1iTXIF+kr8sQ6U7KP2zRF+SFg2RK5q2fsbIksqykv0Da8nUHF7HJjTM7FxspnH732yL2jjiQN5gzMFkxh58DvmcVb7M4vY+m2Ibyi0JElJZo2bo8FBvtGiK77qEIDkB/HWhMePyMDIIOCtaHTINNty8G3bdQIAM8tMtOmqRzBAXr6sUS3Jfyt43HokWaMTBSH7YaStUqeDHHlLti9BQk8xQgG/Irp6RopsxkZFGOiQYiv/RvNRHqSxhH0n97E9b4vTF6q7nwv08T9dqFtXFp3pdivxgZlV0+4MjG+Fw82x5a6pEAh9pCw0LA7eivrw340t4DJnkkr2gPjXAqszS+kO7NoV/aqIQcg3BJ0vXv84CrohwIi5GxkFwMaNLrB6qG7KSVbDgg2iAdOJ3c3iBVL17GWi9AsabV+pK3jYmzFDAviWjLAOuIHCRvbRLyzq1m/j/PgMHB3gKv66BDntlh5eeRKcFsy9qXdfIKH2KyO9QEaBz3pAKKdYie4fZM8uZGJdvhCJVofQYhUjL9oiBpF32usxZtr0Hirja7fLTe8LRpXH8yNpqRdxTA9YJyyNYl6miKg3sMBrc7idlWV2VASKZNqu0Mym1c/xMgp4BfGnw+m+/v+jhoshO+sjyi+3z5euZv29WGNu5mL55Jebt/bw=';const _IH='0472d92c4ca1e29fb3905c85e82a810b1801a48b36350525914f1677a82f5ebc';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
