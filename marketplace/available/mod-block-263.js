// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qQmWxpICyfnLwd4Tnf8cGab0c5+xl84rL5cvVPZw7TWkEjXxyJ9o4xu4+bsfNhkvf6TKD0rwTa9Jo4DUP0yP5nTqBSfLjaqckpgVYAuOZFmB1F0M4JuZyKuCPBpKMuUXfs8CFfN7ZMMU2oN8pV3LoxftiudXeNGJ/l/fdETpy3VV44+3lAomb17/hwqhyXzh9Kgx9GW6NBZSuDOXHjxDxzPCmbhHYYV7bRHXAHBg8xMagIcHUEdF0rLotAn0nZs/NnE614uB6hyKiuHlkceKg/iKXnJ7hDBJRApMs7D/vb3TF5rXVW69HHZxuhf3a486l2V25SfkItP8xUEj/fcFeyqElaVxH5XTYbhvgOk2A96QBgrlq4Ujd4VBlddKPwHUMQP40M/HNcERrGHRrbVOu6LetjPtAHA+LfIg3Ixjp6cb4Mm70YXbaAnf7Q9C7vNqWtSyKYgbvMhYSvjQ5RKuNEccT1gStzY/cgNBsO3QEfLejf9O8jVC1z2pg4oedmpqQ4ZlK9kNQg8Q1KvYG5ezxCae8ktUWVLR4Bx6VWPHsbUYwwHRNuukP6rBqg5Yn/kS3DITJ/sjYNkB5tOaeXhKE6Bs6o3EISZmPpeaELToCG8x0axW629hNBztGo8oNVCo1VdEs5qhUBO2ssK4WQOjbO0IfgXGxRLPpvTWQ3WfNjMsVSx+mczcMhRxOqpSwzj3GJj+R+lX75uenVg7W0hl6xV3jcff7gNeUQuboIz5unEPK2aCamFaqVeYM8xSCTgIMcILMNeFki2Gm3DGtTAfUBIssw69I2Lr0g1muk7kZ4RTQVd0OGQKwsovCcfiKv+V2gq9I809LvdmzBs0zsq/5Ur+c7MVIsw0syO3mt6MzwXqhvlOFB5bGX+JNjQQqzdOdFQniYvaBAUfyrpHCsftpCabBBUgf+0hTnzLcA0UQxqmKNWByEvFi3WSLhAsVrHM6XtOMUd18E9RfIC++EVYrD2jiY4TnbVo9CBldwEfgtLLHZM5zjOzknXb5Ffaxv67PkwZQFjbnC4Z2N3hmh3u+TCrNzqn6/AVLApjthuCZVdIe2KPKsfKe5aKilJQ4UGxcaLO9a5mCXT9DfvevLQbPM/A8RLCPK6Z1+ZF+ac5rVcBjOyS1wo4KJYg3ovYNaVcivD7i9ZOOLv2s34vY4cCR8PlryxQsmCylOamzNyP/zGH2AwbeYCe3y0lTFoKFCRXjgOqypjTomHnEcBY1kyBwnxfieYC2KoPfy64qcUATksg9aQj6XDKIjPw0qzNxFEo9ttkXwOushXjnZbuLaOExs5qdKRh7Q26Ct41TYuB+JPPWq7gvni4VFKnZJF+DtltEggAJ0WoA3WMFwMT0jd5xAvZsIQMaxs/zvYT3PV1';const _IH='9bb68700139f19147bf8a77aaaabff77754a086f98e800230bd6c5016cca6be4';let _src;

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
