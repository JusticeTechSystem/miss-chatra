// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGsNixibhsh9IQiST49OUDJmKMXQRF3u9G1w5+3EM4LU4G8K0r5rQTws1dnZF+PwyN0mEwkIgR0L7rQ7LUXxWyDfmleww8B/E4UpFj9QgGSG7kCsHwhy9EVfWa7kt7vUwKLPtU8iYroMWtEjh7V9UuK7evp9v+7IS2Gn+Q4Zo8Yvx5Z8pShe0EuzFGNyzKzKVy3UTrjzm7ipwdvW62wKbaEygGkr9TI/ZsJhQ45aNY8XYKPSlWybcaAHYozsD5zdlAlXHXzbRsfZwgbb0mm1HazvbASDHt2FAf+EEj1Bvia/oMQSbWjcElZErNxPtBMQ92OoXpr0MAnOhEFNaZG15hoUuFsEWsrvh/VGVY0y2JMH00WU5Dohbw8q/1NGQ4FkSQynniLuVal+ay8i3BI5WrtSPbrnqd3pduroeSw4BtVN7bQ3ECO9XUit72O4dc3kqJSDkZDMOC8Q7n8GyArn8U+2+qusPFVEpV5FAiMpFhEVfbYRVUApr5N8ERQeqRlQi9wsRQJbKMazOXvmICAQpgi7LJcsDHQI3kxvpfK8FqriChEeBKQxIdhwh0is3IV3fZQVQWmJNdMxKBq8ybPLJalJH6YCQjnDLHoAFaLMGVdfbAVeLhZ0Bify6V68BIYNLqaQelQLqQAuEwJDQJQN129S9i0ho93UgNW35GaaeP6v+C+2tRslrmgWcWrLx55uSBt0udOvRW6HHrqLUbhIS4gIBcXg==';const _IH='4a369041823111aec6e302b0686ef593326460339fc1068301faef822b07df30';let _src;

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
