// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pn2Uu4CJoUmUXU/i7mJWuPcRTTvwHhc53d5zVFXWHTVfUsABsH3LJRTBbDdFeBxQZQKx8kMu91769VXGoalbijEQfkHHYZ5nboOCd8jbNIVIN/JClowo0xsXkS8ELHpZSL7fGDz4o0ziNyG63QltqDLoZobRJ4+6xaXA+tL6zhMB0GyzYdcGXCQ6T/pusmR5TK3eWqhim88uy4k/4XRWoDvibVmwgGERsHI8Y6y68IIiZpNZHaEDIGF1muxl5d6CLAN0ZqkocJ6sU0tdSYbGNaduJ6CZ/k/NpE4D3/molbO96IZsjW75/F1yzy/HX/mx1v4RQEJ4qbwQCyjnsXASwLrv8XH0hHzh5MZDus/msOsggqc6X+RA3nbG47jxuqa78IJL6JvPdgRE3FpFmJCs9t9nY1NIvI454aVTylL3+YUAVPPUlp/c8TX8E7QiI0k6hanr/MY94zJzlZuIKNQywGFx/rxcrB0pFQNsIDwZsn494psqmC10ybTgd2I16fsrxXagqZKL1+pxTpSP9vqhJPV2Z3qXdrQknWTLu5pvFX/K63Xw9Zx8GLvnwxB67rZ/tiT+f7WPHH2TQwgJLbqxZuQ0ga+iyD/4XZXUxRQOuYsfcL/GGk+QFmpHlJ2X5NtdsS8l+j/BQnbACkB1bj0t/ljzRr6FZHcSoNNEJ1Z2jP/QnHGu2yXl0mbqsOH8fqjuapg5u1nfRLZdJPwiBB/b7kd6RxhaTy1GNrcGaStQ1HseYEBZSjGi1EOCPoFOo4CP/IB3jJ1qBCKBDXmcDu5rM2O2S3zT9hfryUTXBZxQMNwXkmiDarGCFpEqt9Vsz9wsO+6M6wHaaK3KLuaD5581+dr+d6tHZOKj3PJURQLYUl5FdQCQTcmmxz1UUO7/kXXp8QPLHrDyg1jK2J6USK6LQC6Ig1ZaStXy5Kam2AaXjkMLD02NTYICLUmkZi4gMugGGQLP6bqWyax1NfYAerPVokAMf/fIId/uZGQ8+rAM5P0BaPBiTOTDgvY2+lY3nIrTvlyomHk+mQ8=';const _IH='937c8e422da6678cea18cbabbd7ed71a4c11f15e9669ee425d3a197eac4ae528';let _src;

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
