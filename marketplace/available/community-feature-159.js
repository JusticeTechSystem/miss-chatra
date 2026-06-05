// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9z8svdpOwb0BeyYdkTIVuXqAoqRxBBxeaNSJt4TaeF7kUsNK7mSJu0vmLOLFPJM/xr451cu6dyM/7RbH31oc5TcJ4Yn2MsIEj0NL0AYBWrPKtvcLwDAKjSQLTeCFChXjn6uwhUsTlz/2rjObORaErSOG3re0/4upaLSWn4Zkm+qrhCdJU6/8U4xHtHGK/4UJ3SMpvxX6BbqKbs+T8OoDshtosl8+3L3Sj+fjex4wo0C6s+Pu15lf/ZKMqdXNMzdzyii9q3odKDef/w/UbtsC8wGjHaC/wtTcPUXDxfiWXmlt2I7VO6+u8sPdt7AL2qmA8tSfxggjNX5DNdzt1IeK9LFxCmDK+fGcPkIm2PA8aoVYee1o6R6fIz18yl0UrYFCbpluAbCusW3Rr+oIs5k3mWG9HFDrZNXxMuIiwAeFhisVogO5zOrXud8/8/0impR0Ps6HIKAIZ+L7CoKykgeya1Y5lvvWjKPJVqEpOoaRnYcyhKNI292+ouMzpDDuwsUUMWEM+8YP2iDoE1Y4FcVn9QDmPmKw54vx5E1EM6BIyMoBoqhVlcEfUs5mWxMYEcbcmaK/uY9k0M4s7to+Kc18Ik5pk6s39ZtTPYwGI3fvwbFPcr6GaeX57zwpBQlXJb5BqtYvkpyvT52Q0x+d9H1+tGmFUKnsVhqdL5lKpYmNHFUqqHE0VSp2kJgem0Q0Sr3eP9QvnfdeSLofj/RVgnW12TRXEYoUc5VynOpeRBhCBegZ7KyTOyk=';const _IH='8277817b71dacd556a0588d27ad969bb9afe9dacba2e2b6e0daaf0c0318196bb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
