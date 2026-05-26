// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k75fIekiyuf8oZ7iZKG5WaIgrX3nYfrYecNVxAr6YN0FRcgRym50d7Nwb5oQ6Cy3xqUPguM3LhgLlp/PX7Af/w38GhXl7NlFqMUzbQa8ACTEb/cRKwiTC+o9mSeT8yGinU9curAUQM/bSkTE7XxHvfSASKGCVQjEXOwnN8HUsCFHRNERAodMbMt+fICqi49cFe/8wjzGktiW9bs2vY7yeJGgEh+4UUM+KVlnbPq6RKZwjLaj0ybjDvLk6CsdwEpp6jGDQRUQMbFw6uC72ajBJhoEpYl3MRCiU2GwFj5Lx3Xiu3JFSFuzB9ZRuXCkDNBN2mfJKKugYfpYTJwIIpckj4XBmboDf+Hxnzi8RtQeNiNqictK10nMkttTQ3b3eGSKuAB5Byr601Z4xsZvUb4o9QcJzGr42ECwR0meKlSZ23t7DibG0H4xB/FcYegt1+BTwZbExUhxILsjJHNUNrbWiHwu0xtFDQyq4OJNjpoeHA4BGgSjvW2SUeFowNSAtgzBaydPeQF6DwTvwknBoA7G67xkGSNV5DIfrsizDmOWkYRvoieMC4V4OQsFn8h2d1w1vPnyUq+nfHG4bjKbnXhEtNid/4QVtfUC5G7GxbCCRqvIBeFpB04u0Gk9ODKxciL2FD3Ygc2OpJkGhA9ZLa1td2Vu88Vq0H1ILGF6uSvQtD3VOatvqN4eFyNBXke8eF5PGCKaOrMa2r8WRPkgcrV2/5C+Oom+fRMVsJmrxcLlGoI4M6ym8oPCXemC0NbF08vsNitclbN8mvy2DN418XtKWEPq4wGHk8CrqfcxfNvh78cH5ouUteEt1Ubp2fi3pDP/3DX2c2wG8LG5zaD0h2dYHOhtyEmdsCsGdhFo3XDe54bqOg6Mf2R8bVniV/90RqcotgkGdvrQJc/h8LKktF785a0iZqA1WK8744clRMTaesMNtzWdmZhMjT8EKcfH+Qbqxq5nQtAhslMtd0w+a9BVslNcUBHiSMqzrAQdhCg0c97H4O9eoWbmiULm9tU075fQAlIHexABY1Uv4eXpg+QugLGA3y5WkVihYHU+ngz+9PNGBRuXn7RhbYppoMhnVWLCii30JGiOfiFn5rGB5Hf/4ixHeMCjdk20qT5vP0OI4+J8oUpDzuJwipKazUZ37VaeSChVz4kQ0dGIUzf8Iq6TE8aAoqu0ARjuJdse1v3W+Ki2CXZv5MVVaxg4H42deUQJCMPYhfAmENiXOpNafBglRoFWT/elMW+XxJpLmMDQrNokSJOsSXgfJhn6ghUFEUJVcFIFZzF7WLJUpigf5bptO9+TffobnXMA2dTK1mHATXqcN+LE77RctjGvaQdchuXkMvRSH6TUuE5QENJwispLayeTRUesXwQGweNAm9TFhcyu/jl6zxOFIw==';const _IH='a0b3b6d56a3a0557648bda6a84a23e51dfd6f24b699f29474280b0e219223147';let _src;

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
