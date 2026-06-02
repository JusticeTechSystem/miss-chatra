// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P4ia7ozyUJvMOxS7WwHrGhdWUzesN/ou1ymcDgpm7onIUBlKSzUN1Va6ol699h1dBV9fuV0dh+enZvGtKVDzcBlrKWD1OgPFpASPaINwQ21TWOi0N5796PZkMWJVlKuUQYVkEMi8aXEPc6HNaR2ibzKBBtPF1ejA4KGxhrCdYq36zOQYq4v6nTZSeypTzT8KDXin1azM7AyZ3aMELbElc7+D+C2Em1gzGAiRYFmJYXB/y64xqP1LQb/6F7RxCOa20CliozEiiBGE28i+j2fmfSOlpznjvhf7QEmanHGxyNubJQ0w5bQjjJl87dJPakPAqRtc9oxet407BF5cB3GApHuQsjmf4omiBCN48reQE0HOgzPq86S/eb7+Nkmbw7wNuj/AUDTCrsF13unlJr645Bi5oL7A9l9ylBaFLf6becsNWcylkP2fKgqeTlSYzUlx+oQ3OKKbALPqlN4Rt7WlGsi/o5I2+vmnou0m6B/rtg8KD7AZGrskXTLcnlkuC8xcdiTFrf4ye7z64pNRM2pZ98PGxY1g6cYMaItXOj8DOlkioN2vnta4v2qneh9Tk561iesBRHQ/lGGGC6fKrXixtop3/9n8Cj6CXS8bbv1lLCQa9o1FPA+iT38GhhktCu1qrJaBilBhkYWX3L/OTiI8MI3wqmUGthqScCeSUmEjS8KWJHzsqsyiPW69zDzsBNMasU1W8Wr2nUVhjVXxueG/qsmqsWFJIKnPqEdSyN6CyLi4qg==';const _IH='1bb0c5e35f182a94004b5e56cd1a235d1edbd960a777c81d4dd52bdac1337b4e';let _src;

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
