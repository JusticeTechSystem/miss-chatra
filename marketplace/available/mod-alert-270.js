// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRo/jcApjRgmLAYr8MJ1AAHWMc4PTv+2/xry969uHFtiKY/pDkUYXWVn0GKvSXFYqcxqy3uUuAxOO07vQmgyaiNnvzpg69W9teDElp+RxZC95AWr5zB1X+u7m6QoGecRp2yDPX364Hj2UOe9RWLecxr6bricBR2tDgH+AC/V2l2YkvP9MomLl1/vu9SE+U4jMrN6kdGNAjRJwPW94B6YyrS5+PccEm3tr4jjDTRiAqDg301cviFX47FH3dQQhd6APhRr+ayeU3Fs403n7WCelKoGoDmEgHphhqmJNl2YtisBMNmG2ZJ0YQ4XaY2aRKfd3j/GDa7nn163DnYGTplMLMbBlRo//m0lhoYnvYqYCD1C7n1A7V65Soa4wHj9lU4emMG5o0EK0Lgu+DcMhO3anIFR3UZJkePqJJPdp495DS6JcBNZZKxWQ7krItO0ktVYXHDoCT7PL0n3OFSW+FwrYfnH63SH2KNfbB0ZK8EpCOHSSehywQ71xxDxiqnbyLOXp+BTS4qtP5PlXfJF4I4YXWyjgpzj/EPQcO+6SjXpaIVSRYSFMbHlCG9YStBsbtv4FczBdbYOkWjpq8iculsJIDRdQfOLzDan0tFoRQ+q251r54tJqaNqkytVYIHCExpmqx1K2iWKm+PJfsgz/J1BQ3v2WRy57aIBI+DOOkgUF65Zo/Dj4Cep0hEl0nQK4UtHcDjjhmd0Gzuz8WDTffAPbbyfEiFsYRTJilwQ2hYs9x5fy7+ha5Gwz/VAYV2SFhblWVFFKs9LWj3OAFw0SvPA7S+9v1APxV8Osn+QrgJvnXFYeDvQedGSB1k0zDgTCoqoCwFIgpH8y3MqA2Rqxmx1vOs8jsGmOgJNiIpfqt9tFzGjLtYbIbA0hGCHKWmDXOf1S89/AIeOHMKlg/J3N9xcZW8W3lEVQ06xPXghn8CsBYUDC2pzhzNpFqAmOChtcNj69PSSuNeK9tGii4i86EIfHsc0UPglDdhfaTkyKiQ4GpHOBdHEf3XGXjRWLj0SJnsGk0ZMrN/jCgF0cR0YlEOZkrxLeqDdr6hX+GvEgGz2omoZtEK31iU7WNSpOiQsgrcVIVngo9T7WMbgVzzXxW5VxKMvf5IDaXbZBSk/x1+AUah2GmMYJfpEHn0svG79FkRv1Ri72bmEjJ8/c6i3pAAxKhtSlSHuFbgrkkC3U+hxkEABcknRYNK/4D7QRb6CG0TzJCfzZbHUBVrJzbJ3tcKmObTAl1Q4bU3ViUXXsLoF56vp2RXcO59MrICvAAgVNaJc1iUV/iXoWrDE6VMByc/jcSU93XCqv9FF92Q9Oq4Pc1q6Mwetx8aRsLLWyAo2qUqGoequBhluqSRWFSJWMV8lrcbgbc74SqGo/886CaYdVo=';const _IH='57e29edf7d9b1461855b7826d687588812b9f32113e0009237a4043aebf59f69';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
