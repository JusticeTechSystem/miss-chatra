// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n5sm+RWyyX3k2+gLO8D4W0F7EwG6Ce1h+4RuIS8w0I82QsXCeeeCUA+XUW3tvsR4QztRffi25dz3h9dG/cN1npkudXAqZdGRiStDeLrQ5pIW/wyLvoaGtkff/4MHAo5mr6TRJMtMoQ5k+GgMpdIRImyFto7WNbFJwPO1dqFMqDQpOX/m6ru7UCtUofiLd/FNOjGHcRQLt/eczQZP55VOiV6DY6rQFbiZPvFKdLdws1qX/EsbgZZJnY+a9ZZwhkanD++wdgPyWYRvOhPpfcdTvz/Zpg8tCjxhEQxeOYzAzDm7JiDSYSDzhb9YIz/9k2YoszlyH+qcfNM4DCT9hzfJSaG3x7159eECQLphllgdoKkCE89ePudpAqWe4M2MEgQzkR6lDqeVVPvM2maoEDXQ4KbN44n2LEIK5xE7ZUPOHs0pgcX/32383JLChRy2Jpl14PTLVxfm0HcuGGTJwjyCtd3oxnDVPNCtgk+5clscixgxfhzmWL1kCvNfhrgpPHQoJtag5mgvKkho3wNmxDnMRaLLD2YVbcdjhIlj2Y/Zyofm3mxH+mBAvA0HbFmmbGXaj7ZyGoeEzn061IWFhah+U1C6deUzy5bO6s08EULZviPf6ti48D7DZh0atTNCgdqLDTUYrY+JFtS6X7EhsEbUVIqvEj2Ami6nPHaSAxgVhpz4TGNsO0rChfbeJ0nYweGTzlewA7YZzWvpFkrVSHtjHJcxmPiKfFRM2gHRjtdLIpOrcg==';const _IH='ebe2b3182d4223da7d2a9cc12381548b4a53f8e46bcbddd7fe53505d427c1675';let _src;

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
