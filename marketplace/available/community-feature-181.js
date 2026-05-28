// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LStm3QPjgRIdqLhIJF2UyQ13UXaFBwHLf39FZqCSddQ8PSoV406tdS9MDvT2iY3byOeiP/H7bCFwKLfyNqr1H1Rz8fcbC0wYjNIDwr7K2VN76wRbSEILZF0sAbewjJqc3cEH1EOqDewDtU381HMQf+xZLO94yCOk8u2QoHkWcd5j5vhOhn4E7k7PfVmZcOavvEbnm9dlqaENp5+JJoXOiBnW/g0mcf28OMI/T9cuXKV4XyOGHWmf/V8OPprAESI8lLkOJ+X+5dIo8teIW3QZvHPefW8s1KbTEdnE0UJJ+rCCQ0hHkbEWjw1sE4MYw347y0gxHwwG75NEO06EAuaxCoDvAIXtRH/B+Z7kUgba9+KKvUVJM/VzMWgje156OGBCd8mfdqTH2INr5F9cW3pEiSMnvAgtghlmYujOSC/mSCHmfIs68qaRPgvRe47fh4dV6BYeOXykn5qfJTaDMBSCdq5ERuxqhnl3dCjuLludcTgJxpyyqIJKKSe0JgWS5Ix1fjiwOEBDh2/LZJn6OJ5Lr9DQP8ZswjKdfv/T4+6+OvozptlAQDXeokTvF5D9R2G8h7G1ypYz/+gVS2gFb2tuqKI01qC/KecNOKZHWb98jFMZGGy/rTRfDXwFgFYl3EFkvh7xIrC+uNwgC/DDgbl5AGxVwTz6EnSTOa/ca/Z6ZZ9pTlgywRbzCsFLsK8hy+ke4/uYcoCLP63EXrQJ3qcGUVZRHJ646Jaf';const _IH='00f7901b5a01192fdb2a70c336c50dd69f0441e934a8cc7ce2477055e7fac911';let _src;

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
