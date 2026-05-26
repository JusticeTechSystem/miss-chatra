// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZXgEr35r4xqTGjUSPF95tCG0ILjDisz5iECnB+PNEXLwt89+7AQdnAfUjHPJSnxftwTHJJRBzB707YAnfWLZtfSJ9/W2eZWetSffstNtHDN5AVtYlGqpuBmCug0sok7mWAIfcLCNSxbrbCn/K1AUJ1n8Mb3cn0SG7iJdWbqxrRGDepxvFIsXXRPlHuCZAybxc9mxaNd8qBIUwgn3tWzhYBimY9tU/f+V2Qm59NmuUtvd1+5DdT4wnELDbtzMrWNWfgrFUuEYNO4/xKYyCecq60uH9xp2uFyVreccuWMCvcrt0AHw3Q5NnzKYwckUHQlmeq9QQ/ItEwCP10axNfPcv+ar4umhYG5ch7T9O1pdLkd5stRdJOwuhIUGYtcpuBqgsYPXOYp0CT7e7HCF4dW5OIYE8pCLJEpndrVI97eYiNf+Wu0GPlEEF5LHOC8B+zuPii47jR4wWPe+/0MhcDQSw0ooKmwjYMBtWehRfs9VFdGLIWo9Ss/nmQdE9ogvIfob8KoGB/B+u8n5gh/xWhVBArCqi4mRkRBKosY5gn8sul++FXXvVPA9LDWUN3wjeJ1tIaejxpVzgo2BsI8kKfzLcNIJ3Qu3L02nwpmLFCGn768VJYq2o9X+B1Eo9A209WXwXI7/3YXZqB5YMNE9Nm1a//h1nf3KpVO3aP3YyaXy7KDKsMkrjvjFqgdUtm1NZH5bjAWQ3htiaToYIZpMrqT/z1NOm2/wRu1ySw==';const _IH='97ad759aa52d44d37d7b5deae45bacec19b018df4763cca94ad000385a994e1f';let _src;

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
