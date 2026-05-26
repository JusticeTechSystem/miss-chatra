// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+ZtrVSh4wyhMtO75NcA4LCHMAyydtzqSjqV6Mu79XQHiGCgdEFyecJmGx7CffHbmVCAIcURTaurtOEnQ8CJtVmamRRNhORMrnACrmEe+uhU4MBc9AOipIBtOP59rXTVe5SBn6a58dQyAISD/qwsoBVN4JC4SsyNuT1dlqmfq8qbR9MSzGmnFeanAfWc6mS8os4UanQq3G6X0BdO85sV4XEW10XSehq1r0Rx0S6s11AEpHyO1sz2GJMU78GHJajv9fSx5sWGMj2wdPxUxLPla+QGxbBHztiq9wLZ0rkE7BJZitkHRb9hSm1ObINa2zSVjcrdhzvppUQwwOewCmNPx/y40KwiTXEx6YhY1z+8UX6Bh9Lg1pGiDSvRFchZaGqQwPSD2rEn6NgdUW2j8dE/pNsYFsbNp0Em+cXeMrSYsYcyZMapP3USC8MwZd8PP+8AYlcKrEFwhvHZX0pRdXgYXprkBxWdaROjWuDo35ScLK6jhY1VxfsIkcdLJ+CqsSq4cyVvcZIQOBrS/ymHJ633IkxRDvl2LnJey8XDNZV+GW2njudTlCDiskZwCJzD4YzFZ3Wpr5hqh4QAVXYKzHLONyXZPZpqOLunermW2Smczl4yjDbcdP9puNJSowSBm6D7lnlACuf3GENpmK8a6roOgHvyWl1RM56z16GQ5tY9zlKIbDXtU0RSugfOni7HtMbly6wBbORDSx/7d5iVOdpdclnxDiqJcyRhaaxyGlsRedNRzFojHE4o/vQe5u1ADjM1WjA0U8zowMbs2do6axPXXZzwb9V+6t+E7A1Ek9GApFYQDNElYFpk0GLOPVvJmjPL6UefEkSpT7ot94zaB3nAmpLytQ8ysvVHSbi+mxBHZtkmJDaCbjhwoHGyE12Dmv4YxyYs7SyXs2bU1LMxUDsPSEw70FZYx0PVKe2i3UxbYgr2I1UY00K/FQOtYQq6lac9N7/lRigxy/mmNYq3Y4O3J7mfwZBliZta8NdehB3wH4HqL4a2Dv5zJVElWb8aISS1q8gDR0Fgf3estiCUdWe81nxPx/6aETFL/OvaWg6vaTigQ9SeXsC1QB2+8YnqeGdZ4sgc/P0H8736J0yP3Co00r0Yj45Xokd6jkMl6oEPdAFi+artZSGlZ6M/ngs8Ut87OLq+xmSm356qH6e9GFNa3utSD5Mt2peS9lvzzxXVhpjxMiciznGCaK6l3PKQ72yxE/q1cpfR0dNJR7+Tp5Ts=';const _IH='fb218bb06811881208fb4d0a769a0db6fb93b686b569ed5c88e97b589c8db4c4';let _src;

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
