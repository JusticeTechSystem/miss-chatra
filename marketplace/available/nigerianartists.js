// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+P7XoeQx+xeSXEFdtsnJjjGRofXRA3IQpdAYJf6EOW3MuFDOAspdkJyBTVrUVUJGE5xo7UuZR6IkR4Xi49xZ1ePaPdLfKFK/pQUYIyUh7MvjX7mWLmjctLY9MwPSh7BxWsm3XJFFm+3k8FL7qu5SgMHkb6RAfdEBsBlA8C5F8C1LjQKdx3gpb3RPO7CcJXjbyYprQ+Zo6/RXrTSt9BFJy1HNV/Fr+F7B2/OWg7tT9M9zV1ZaKgfVusEBkNkzBBm0MiS0E/HizTUDFGezuT7foJemSR+1xfZPEUYb+m0xBVBDY9uoEzTEbkFy4tdj800fJvTaHDUHC5+W5nWtQ5vqam0C2qPK98+reTRDVPfnqTVkSm3S4cwzq8gqEViseloSh9RuOwdBTCnMvO0pqQIefEiWbrFfs5lpig655InmqFnEbYnQ6h5h5ZERo4addEdQbGcY28/mdcoW6gamECnxSHAeH/rC8WD5Q0d1AzJAdyPo8cvpnZTXWal/UH3sWBaQ5xCT1C78BHLQ6khSvMpL2noKK3VIeVShzSuSBAoPqyX7bCxfUtwdmBMZGA40AdvFZk3GlR5CTEDITLyLHHM3yly8Z9UPfygOPlqnNexaL/K5fmjtehejJGYsTO8+Rj91tnqm9yRMClHCbHH85Q19EBv+o004OvY4vsiylu5SKHw8VupwOlUpZtBsnTHP1vZdThL/lWxJNPK7u0pR8cg1aNCjM9xdChsEW/6zFEBmbLW3b9GTBheeCph1mfkUw45pK11orFV/rJ3sOl+OGqaLt7G//mmJDCJ9qw7uOiKA4Xw5cle+bBBF7ID4yZ9oynQPG1ej3gLYCTPxnexyqNOcUsQEvx6dZ+3MWFPizrJCq4UJfOp2ECQbR/J5EM10i0hr6tCMWGDynKNucEsfrknWw8yZKfmfWzfC9nk0SJy02Jx91rxQMzWbgsScg4v2Mw/CMH8cW9Y508wWkP6KqIACgOYApZKR3JLcIknYwT/7IpNXfQiWkxrlhkKIJL+2fF23TZb6iiQC+kqDLrIKlbcsmndi19SQdIcAngVSYJdM6slc/dH3wwHBYCEJ73pgM3CAMXajwTWgC0T1ftYWcwKVVlSbO8fXLhPfrR883hZS2JM07hUlgG5jGfOVbAYF6BsKCGT2xh5soiym3SttpDgRMq8Rqcan2xA4EQXbZ6BeNXwfc/cGpdh7leEv4Ot0lLma0/e3sqtC+XEcgmHeidSHLC1l';const _IH='10054a88729e7f60a3d342e3457dca1666a3c90d64d0ca71585a72098af45e29';let _src;

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
