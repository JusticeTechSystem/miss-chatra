// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6jLcaw0ihGYjhQhCAO5HkB6PEKttMGg8DCGb9bBw2xO6AwBHHYbmlxG/rZEubp9ReUtdc4c0ZZsYtQtoqshNVebR90n9IztuHwOe63P19u/6jE6M58pW1WLU7IMwVcyNJvJk4C/WC1p5TJH1J4lwaz/3frn/TYSWSJg3Tt9IBTptbL/maj6HnlOvlyQhhA6jzXNMdyj5xGtF7ay9Jj04ogFAgAJEKS9oN/XaEmSHoelTVA5k/dI4RcVv1n29l/kXBl3lpWg9xiwuXnhd4ay4mP32wygPvPaOu2FT5gGmiIxjzIQdOmRWjspBjr28hBDyk0S6O9j3Jn5cdjC6xGO08WFnBFH6QsyBFbAf2qiCybpZ0vGO+Tk9BuiZUXzK3r3Rh8FQMkE8RArnw19y71mxa1RxA99aMxvv2+/zLd2tyL32UuX0xBonkkMZBtAT5CBgCISwffwfo8r04/UemeDW4aGJkcKHe1quCiRVaU4JhV2PDZO96VgSwVNCbTjrwNrsKaNovkYeaQ8IKgpMlfYUDLw3mILN8+NKF9AajWg93jNJwneLjA2z4KMJz1wKmoVPIKiY57vz6EWSSUZFqKBLOQ1keMFiikm+h+UdeR9XzGfkDDKMVuOmra/v8y/wjG0ub5z3G42Bs4oxxLcvVClz7vFO67dgMfcROAPxrgLgRkeqsLJHu8fW1gITS+6as3TPayQfEKikS8NrMR9rWgbm9K4uZ4iMh/fLwCZc=';const _IH='1e810f16564fbc17cb3a7520edcc5cea3f9fc08fa580a3b79994bb570b640405';let _src;

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
