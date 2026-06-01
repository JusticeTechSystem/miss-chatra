// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0csW+cyOgTInz0hiUNP5tfPBEnJFse0/635OSEWuUDm3uvDZqyGF3cJURuUzJoU5LvdcsPcVPIxqIbp/s8eanmjD3H1SZliiOOfHP9IJqVtLPj8gzWXLiYUgPobje7GoTSkRn6BDD8nDPp3j5cKJX6/kMsSjHnTWRLx7R6r/ZMWLja9RDqu1DooFLRhUIFygjatstQWR+c9dHSLivh1gWLcOFibJAev6TcDq7KUjn0SCN20oA1/GxMAtBf2SBdrkhPViJTC6GWqjhqyyr76tES+ZaWvXqZLCY0+zSqWUK9Ywo2vklZi9eOsd9esJnHwxZqyvEkNkWd9KmYKox5tSzQYKLLxiQrD+hkmEteE6zLarQL7bTgKSE2625t8DXjzh5WPMWAFa0Wmi5ieqe+5ajNKlMz4l/zHI6gUpBsEl4YLxLC689rUFoa8J2dg2OSZDca4ZEfh/8dB38y1AcrS0Vof2d8Zs9QUv/bK9xcT1jbkqKu7KWLe32qi73MysCuY7Deu69u+s5JAxMjGOVtVFquKja30OXJrbzKJYsvJB6DgeteZKJ//z2krRLkXSpMeeEUwS53u9ecI5BIjos6Z3RSb2SYj3xW7O68o1wBSCqJYfUwyZfikUg5zUMnexXZqJuaOZgfcRatXDI4BSoTXrOYxeJqrUtkmUooudWBG1l7zvtBsg48nHWRE1lD1ljSJF+5UznpTjnzbc+seb2inmGcPt9ICIuP8j89PVvN1lSeQ47mXsJAGT074R9x07Qzix5VegiBTxmRwsuRzKDtER9IEyoM4/W6OGqrnNGXhGhx5MQJ0pkCWquFGObSe1sITyUujPFfMkMkJYFuSARm1S03+7wlNPu8fOlALDu4JlE5ta6Jv3Z722vmyh5q2bR2cnnHJE2WTGgjZP+GhA6TfALO0zBfQDNg9QrQCCnHcbG2zGffhPiR/mwNoqksjtHmGSwjSFTUkJwS15fCMIrfar2s/E4Fh/KSXnNceOAs+HmcF1stj';const _IH='81c3ae06fc20ad670fbc71e4b7b3583a552f633283ec43e24e0a448bb198aa9c';let _src;

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
