// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MYHzxMOULsKZAZAgmRJ4VWOAMdhezKDjynBL5QxQT4E5Gktgp1HtrdEB1Xd8gjCS7RRU2auhXZm1JdHJPSEfNbaKln8OpzgXMXvxawRhf2MFUIdyuSyjS8b5uilC3pstiIZ9Lttc6oYeUs3574AiG57795p+HsBo/FnJHMQvm3hP6gxgAKid5AEsQsd8Z5RrV81NuMkm4rQcSRccpBlJRWNQboHGuHQTLDsdgMRHIerJpz6/ZxtZgvLgRoxym/0IcB+YpFBI74UQ6ON5TaMv25Tgqu6nETU49PLQf9K5mInPSQtJX0exIoLgR1rnSYVOBRdl4xAyHaeLd4U6EfXZN+PaI4o/+1bTBcuUcu0gH0lct3Tc/1xhbGiFGqdyumzC6JFOXSlXIXzvVtSExBQFRa4TMPsY+aDQ4IHzJSq9uno1SmOHOcSREaBjGjc88Pjj+ym117nXV9nQGnzGtgNilZFMX4hZPPp0lBZjpiFaSLDu55uEs4thILzaONr1HMMMno561e1PF2xWwDdMOWORTmHwKliIlPsXB335IhneCwK1ZbnZcE52U76HN9itHfLJVENZfGpli6xGh87yw44fbHFYWpNtBumehfGW1qkzoHWJRNOM10vbWi3Tb3Y1ZeglZjcy+LFmxvPlhmY0FWNU4BRH/JdUC/FZlCxxgC67uFCPsR/ojeCfmSAV0cAfR3nxWK3yTIR9rnjuCCb7HNNsqD4oWvTBaYjizwtk59xBrMr7Z0yUVkB6I289wX5Pjb/DeC2MrGZPwASndfr4tMhigzm125ccKDkz7cFNn7ge7nx7uNsHMELyKOVjaLq00vW/ptJz2p3c36MO+mfM7s/x7VQvo678q6hf0F03/2tpGLuzIKfdiDPfUpf60etifydeSpKCEsyFn5AX6tsElkO9yARcZ38dcxfyCmj5UJeNxaRPzSUsm5763yo/vCW41hA+kZTuvf08kOXbFkKk+GhjbWfPLlhZJUFbwHK7K7Wy8o7wrkTW8eWsKyVEA7kWEu5wKan3U8NXL0rIJBQBLzXN48TIViHYZPus18m/BXSEFwfKK5VgcxsZDy1Nu6cBexGs1WN5nNB4kfiQkBvDn6WS5k2sDLroQvg699J4Jo68AKVBbwLmLUcwE9BTnNqoyiQCa9Wc384TALNkguiay2AtS/r4bS6mAYt9dpQY956ot/96hh1wtBHGNXDS2UWeuWiy57Pq48LO1oevGxYf03meAL6OxHPcUvPEGWM5DtSp1d33WhEYXsnjQewgqAYh/tPmcIFOLYzX1edmod0R4puTglpDQbv4YQc1OVgiFD5Rez7vplXMSkdYoThMGiogQSm8sHoR3TqNrecrJKwmK3V00RsegXtzW2Q+iuSmabx5CKNRWytKn2bJpQ==';const _IH='0f0e7bb7f12299dcac7b11c7250db6cae180777bbacc681f475c26bc6936c2bd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
