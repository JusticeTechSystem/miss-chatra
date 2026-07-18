// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNjH35KJoLSk3+Kvw1fgcoTpHbrHgTY0ZqjCC2ispE0NwvWuLnwpYCOi9N/Qbn1a9bPrMWb8kbVusAPi5N47EWfKSZzIed0KuhnGc5mexQd8cPgQPMtfWJJS13+Zttdq93sreRe5Bm+VoxkDd1DzbEWG+r+44njOXjHUIE2WJLeIv6zV+xdchIji4tZVmqnyE0zS903EVyzq7mJv6TY+elHYuufjYxTg/kx/Jb5EvwkmzLEsukYJ6hDp97GfzPZpJUERLEG/9OKOc0lsD/EY5zujYgxbZYV6e73dJZsVYXQ2DTMEPWmijTFQ6XT+iTMd+vgIi72PgGwa5V2RN9803Kd2zpC933t3o4s4Pk8haZvB7xEMODMokhFv+roR6jnEewPBjHBz8p5U5d82oxe7ipl2M1XLUK9pkC4K1iYrxZbFZZHVpqwW8RQ6Cov50B4unDqAZ8qF4yicDg6n+RrKFdyLZH+X4lmgaKiTdDTXJCM/gEOQtzJYUq7axcp1GIjIP0GgKcfLzIE3J+25764cQiJb1ww4IqOqRj9jjzqOV+aNdrwO31CuGV/WCqc35wpiEPCyv+Ig5yPu54518Cclkcg/1yW5O8Z4pV3MxxxwDjjCazQxokms65ogP+mTT7yMAMWgdawwwY0QYO81nt/7IIrZF/bCFzD3Cgy2cmxD3Ik8SsAVfCTK/zvm81nirVZNpBTxXTgHXbmdrzaYLceDr+cYmqJh65DwHjVI9wR5N9whVTZp1lRPfN8yClFx6J0mfv23yNSObLgi/VdYEdJa4R8UoeWH6r8NDDW4yXTbVpwrnnvVOhK6QOnhGFyHq0FoWj9HrtXz23FxGpLGVQ6TL74xGSWEsn+5TSUtwrRN/3CPaKpYe4gwvrUJ/eAnGHbNiTt6eo9UtmHC/SG6qhYb+HH0X1dLH3CI7jtklID0uj8coM2/NLpqITfh5xExadkkyHxeamKatu09f2PlvaXUnlXdsIkYx0F2lnBsJM0jlpNzvS5QDUSBCgQzeC+dhrO2jnTSnQLmARKM+O6fKWn0rGB4adEKmgEm4WXDMSBXNjUGFuWMuNaWg69IfzKUC1T5wr59RO3m7CaJRkqE5RQG9i1DfC7YjZzzVIBPfiLK/Akuv5MofNunvTm2Ws8mjEjFqQTWVIy4eIOauIgMC7J3eC1FXkJJEXB40l7YxZBWtwW8k2fI/PB2vKKUbWkbr14JsuLzZwZN0Klxhg';const _IH='9cb7a045efb6857f063fd9d4c6e5840308ac6a3b0b23f1e78c7a0d3b4c241590';let _src;

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
