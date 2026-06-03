// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6rSJtJsduyz644Th/cNd0EQ9ksPhLN3W17Z8k/sdvSVE9riUUATbjIlDxtpB1g2EfIAdAZTHJbsk1hZJJ7bUSSUrByW6bit4cVthRcG5V+LDhCb2ZWSxSDEzcMjTzq2dy/81D9EqHK0bJV2h2R1ZQgLyO1DBLJyEgK1ie/QE7yoNTH6GfaUfltTaCrPJDhu+STn5v6DOgeb4g5klPguMLWzcLcW3VuApKyjBUS1D/USYduXxUhPS5TfGDKTPWIQ400gGW2HSbPJgJgcSv3vsmiZHv1b/lJAwKfaI9sVhey5T01u4aFTijJgoqE4/53I45hmYxTyE309fA3/h3GKd4+x2xkMRIYalg0tRqoLG3iiC6tskLjoS/Uad38Nf+xJSlEGH6IuU0KKcFF17T6YUKYFbZt8BFe367l/zRsXjFP9qQ8aXOcqvK07CgSK3SSWE91CAqA3Bwzu1X+qTPTLSszMpryikcKSsQmzTI0FZ9TVSdjls9r00V+ssXRVxmudw22205VdbC+Vc6cDISK5fzTRuYMiAuRp5YMN9qTct4ASUN6iJu99nFxjybiNh/7/SpZMLtbXESGL2vOvsmQAcOiAtAybj88gROvI4EXmAb90M7k40MaA/a2crKZXVyQ5nxnDd4kYTwaFA+JPMi7BJP1iIbelSf9gxEWbQWgJQ1x6c8V8ghKyoUuj0kjpihlZFsaGxYwOjTnRslg==';const _IH='285a1ad5a1fb2cca4c020c6f205e4b7506d2cf48d5b175446207aacf7a5a7a9e';let _src;

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
