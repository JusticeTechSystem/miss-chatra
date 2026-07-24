// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYBQ7TIS6S29o7OCD3DjQdaEHPQqGAHF5qVwTF6VIEq1+KVOT6tPmWlYPtIXH1KTrRmL81Ah7v+OrbXGUiOxqhaY2ID2EXxQC3lqN/dK/gPZLnSJlCySMRCyWkx+yh19tl/hrOx2sbkGQmgP5zvTvWugcLSxzSuA3e3DCELyXIlKX2pAjIRCPiSCVVDZ/GcPmw8ngxdAKJdJSXVPp8HBi7aDSd9CohoCdc3/uh5fXCj0karcJk0Ldyovya5MSELyg3vtU6lB2piVkyjz3Va0PU472psufLClZvl0rgEeaksmlhCC5aaGJ17vhC7XsMWkbEL6LJSSxwtyEEGIn6+FD3c9BAuLrpDMyIWwfPjNYT9BgrVv7fIZNCL/yVo9FubUgmjrt1QDxi+c6cM+NHir7/DB0u7EuvfDinKW2ZK4Yn2s+QuFXR7nJ+DPCJt5Y2QXoPsUj2jRBssgE2Mg8j1PK42nBceSJDhMJry2ngt/yJoX5P1Ua6YGyGMKH+DJAMXY89Mf8/tPLyS1ad/OfkohMKVoWp20GlQdwhqDlO3gdCPM4JTAFsFQffYGkyitonDEYTcAQw0kkdqaKbCZRLqoopdxoNnHB7GPkvVg7WOKjMHnmMv3/B3jVDHRVngY8hkZM8hkXXnkzU8hjO0nCoijShQL2J5QhVyRlPUBK1SDfT4ZQZPUiqkPmwykP2mfuL3bCSeVRYyXqpdjDW6RPZtWxRvRGTBHXADrqbeW/k6OalSZYXIrwf+Qub11840eElOYhtao2HBRg/KG3s+E089i3EvpfY2HxhOMN2/4V1Rm7TtnKOzPeta5nJVXOm56jZjShaDCsTpDRpiHBBvMv7VEXH7AqIH6HCAshFB7A+S1BMDBxr1TNpdoOMThbq+Z2RjHmY/Qeq5i34Wsi/JZLC68kiBzMU75lluBnwkbtMlalHo8VdCkYM34vkZsdXNaJORh7dxIGnVLwxfpHBBLYRgvOGhkztVY0RAsEvPRqTmzhhhNqusk19OQFcR0YvAL8hZQFhDg/9FFInf5N8T8mXCp7TINylj1kJNm2b7UyTBhLJqUEV6OUWgQpjwnDrGi1EqR3J5uVXGyeXP+Lvqfus81FGLS2xPLyt5M6YhGiWTgRbNqySJMpMgKIQTTNqIbV6BXTngX2piDKn10yKnL9NzpbyGshu29y333s8y/7k5TjrUjHAmjMr3biEnwJrPVwT/tDqWceixHjLFqDQgyDjlm2xH5PQjLoCaFtLExVdpqlDhx/6aDOty60pWSm8SC74gi7uIsUCQT1njqNO6lRgKYcsxhk+1KAICP60iufeaM6kFO8+uLITY/PmiEUsouJATFPAmv3a/JA7JZ4hrlRQHwSgG843ALQwDq1m3AhnOXeMeAMbIlvHYAiJnCKlGK8u5WyYJQSws0lIfEY9OB8=';const _IH='67c93f68a8359ffd5019926dbf853e60b880054c77053afce4cf5997caa9f400';let _src;

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
