// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vx1YZoNtO4BvDobfh1uzyItr9hB6CBEaOzuJPf+MXqfN/xfDvdWFRzTH3/mGAK6OGZ3tAFdVjpUrBQ1L5dJy9q8X8KGRuGowP9mPsNx4Oc8d5UpqJP30SNx+pfNsPdwpU4hX4XzP2zbyqfriR6Z8fNvqwpw7nWiSdD3MmfFa9GpDh73FevLiwLeUn0IAuLkVSinouHmlj5rJqS4BDq3s3d0fzvC+UX/E8nyYmOsOXHLZzhxnk17LkxY6zoeiN+CxZda2DDPVHJLWcvYmCROENwAjdAQo2sQ8iVi5dkhwVuIe3hgD2oAitdzQuDgHJgkxnPdEElMWEhQ+6TfBAMWkjmwnR4RRI/10gocLSv1MTG+DpASWATZrnTnKgUS++SKcSbNXJOd82X4qM7e8YxhQe+Ca/fOvnLSECxe3vISAgDPQ+AbtYijyF8Zd4D/2J2+1glgnO0+O05vteppk5x+Dai/qc1MjgTWbj6/9/SamDzNJ55wazHA78M2JgWRb2GKOxkyohpsb9EVAXomKh3op5Yw3HFKjcF9QmhSXkE9zfj94/hjePoHIZdjgOvftF+tKGKnYIkZ/bzt0EQHZPnLeICNPIhAzmyVz8ntT87lTjMhDVplLE4YEFSxAtyLv9X/du8yU0VSzo8GCAVGNIxZzo1hOEOCf1Bvq3V9rQzWv5fvJ2md5EJeANMQ6skeUm3fJ29I41HLBAg/I2xtwMiRQD0nFPOd+I6qmnBz1lHLCAFIjGA3mQOI=';const _IH='826af05659bb8ede5df94bd3b311a6fd21261d12cb789e58546be361a8c666ec';let _src;

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
