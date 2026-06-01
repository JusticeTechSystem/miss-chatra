// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3KpVzx6V9eeDGhQ/KCoj0HT54ilYbnONSGokrIU5UPoBkCeYs7lf68fH9df8d0g8FIVYdGzI3y5gxIhJSr34OkFjqdwDJHeWtOcm2wZ4V14cxkw0XTxZTablqnska768+oOoAfqKsXFfRMkv/RlSpkoIMv2FSCT9xtnhWzhsYWtGJnEaU96r0nehcIkGfNvLywlsS41hbB6bERi8dLUWveixGy6+q7BQ1wwX2OfFejdxu+mdH+qhqDYi1WwX0wwkZ8cj4PlNvriSIrEbyIMYIi6QAnzHHL+llWXCjubEi5ISWHuGhnLKex4+F0Bg0MtXeQYTpUM7s8M25EONI3PMxvtM6+qBEZ1DN+Mm2TqvkDNPPxx+0UQtYjVH8jsQhcuHRllGKGrLzpRs0WBcYonzcK88Z5T24YSHV/jmox8LJUBT0PgH+uvel/Y5eK1UaR6yi9bWVRaJPFbmM3TWeoWt8GrXU+1gEVuyE8gDCI8ffnEdUvw5t6piit1ZtNQqr/Vtqg2/pn5JcDJWymJAGsGAFZqAszjhk4Bfrx/lSJiFRKTogSkzf43cf4HuJzoDKjWmgPlHrsYCzXEFvJdQ01Cj86dJoHPrujAvaE+Ya8M17DW2o5MxQ/eZjuyGt6PjYXQhUTV3gu5/6QgWiXzrnLFmGVOEBflKody5Ynvp6NwOR5HoJRJWvvXgJvbnMea//quOCBGB/s4AjK8VhqdRs7yc//LpNbWljCNkZBUxfqe7N4ZtZPaIJ72oedsgYRAE/92V2Alaj8faSyJws7f+1jGUOBGcaW5pyuy0XyQo4wc7TeeW5vcgax+5nLMznl+ZYXC7Z5TYswHr/Dsvc5FOwg+nnujA3vFfig5iKwE/PuSPQo+yO1LZgbveUhKKQMDXcwP3zBrYmb4R4hDZJYJX0tsGo2nej5c0JoJI+lVC53hLVvf/s6gKc2P4EwS3Gcj9uvl5m9nSfOlNxGhx5qtyI52zl3wNMumyRq+n68ABqgqj9/irj+onbfJCWC1S9U7VFm8PLpQ6VxFZw4OG2HL/BSjMO+iq8qIKfuXtgk+O1YbUmznChiEbAMWd/09Xahn+I7nW2YcPXrRDqyub6rvOyjVF/NRSX1UwrYYBiIaMGMAE1JsN6BPsTxvgjK/pH1VdkJdwvJgkSwXONJ6mIkGlVcGzUPaQp4JJuqYgPmRDJq9HrmYzjHApoL2SHArCiSxnegXtcT4U52fgLsqzv369ANNBj8u/veG4xg4Wpl1GvQratjaHyQg6QJiu3o6rFy+uQA7GI4EfrRDS/OLbBCozB8END3AmpiC0WPnYXoAxbnp3n/YuKGrUMUzrNzTnvpWYBEYAx5HlxGi2f7lAS8nzRz0o+ZDrmDSo9RHYlw=';const _IH='2469fcb31db9271d535a7234069771f3a4ed58465dab1c392c3a2d0189590eaf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
