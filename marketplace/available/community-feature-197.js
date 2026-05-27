// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z9eNs5eApvoPCtDDgXqFhCF7wAxqj5UYjQi/Ri9Yd1az4mhZ4LTSUMmSPW3QFjXO9u17sIP7zDEsitqQTw8A/FCmIZ7xNkNIJVvMrwiJtWf5gxcTJzSM1R5WzqoX+lTiczN4lOEF+yx9NsxoBbRizUHMPbRLOmvDzyJEfVWsKDoCONm1Lr9Syudeh/zTTL4sDd7fxAsEubR/FAU2RvqgcptEKUCHGdWP6u9SvTfwV8HrrKY5J+8zXko2f2TsPzbEx/9GTszMo99TK9fuA1/xFMukKlJRTUZK8Kx4Da5Yez7HmgyfvN+D9Y/NlsZYP0hjDP0vahiKNP4ejLm6PsfF4Z7SjlS+SwhKeKcM+ks6JO5TC8359Otq3Cw3KiK4rTbvxtAw5cYYtlnHhq1I4IHV5oTpEAr/rl1EKa4bG1ZSzj+Zycn+u2p6DfTymOR6EeuCv68ONe+nfGsvGT01BifJcSEVya1lkLMuIHygNLmKnbYVEF4hA0eZoCVIAlM81VqXD+W5Blu8gAVUkV3srKHugY7WMBzpTQA1ylGnIjn+H0UhtqwX6f8BqR62wsIglcPBapdQe/XZpKxw8va2pWFKuOcIYKke751vi9irymZr/21857Z4SZyKrRq3On05HBruedwZRj226nGMZbKqBmyqlK03A/Tjpo6nYlS0U2Y9A5QdmP/UmVxuJ+0PQX93P1yi9PwbGGeiQ+Itc0DKtnhEP/JJMjCbFFsNOK+pD8RqdNlI6rk=';const _IH='826e5283747cd51b935517bcf6a59805eac3cf09eaa9579ea4f54ed7e030451b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
