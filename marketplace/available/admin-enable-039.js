// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn+Za+MHZywltGQdRS6iKxHQEcti22OhxoOiNIeYyrsmzr6/yfqTCBqSC4bx/ASPc44PORveYH9FyJPkbjU4ygxNb5siH0OI/PldHrQsdB/6epJrYQsQRZGcN+B0xjJ7YrNyRnqi4QcN9gvslqtbOj2M/oFBx5c+qK+VbegD0orvBXM/nM7K+rIzLFu5DEFX1MhPmtVY82lxw/CUvSMFcdIUxv1u/pRic1cM9JScdg3eU9lQS/Nv3pu3i9cH1KG+qtFIvxryXKTqeDnSK+3bjVztHDbzWoXA0tB2GVufcaZEYjEPuS7/6qZasEmSWR7Z+9S4moyN70Coi421z1GxSt21XlKNIjxD9aMDTUK+VuvaPySMMrp3GH0T4guZO5dIbRZm99uqZLmXld8Neg944+H6GN/QCoSbavSZp+g80sTsFaxarEOqhwnGQPv/ftA82Hv+jF7pxS+rwnIfqU2GkFsWzZDdr/2UXmtGzo+ZSqcS1mAuiDDR8L4TumjmwpQOiQgrBN3L6ZVjSigUvpGgRUAAFD7A119A1ibya13taPox5Gex3nVl6xOiqXnpL9IUEZnbQRNCavcyPgeT+o0bhl9pLwcUodDxjANV4BvMTze7VH+U5vsb1MwzMHliyGB4mGuSJHuJ2fShMEbU3rZ2sBTeKdryCm9WIrH654CJg88Sd94nesvXjy9yA2OofCCgC9S2CQMopr+kDvTpegZ/8dg6dnZdvG9UVmvuCfm47SXOzaZ8D4MfSatDCeGmDwsCxA0KTnuV9dgEj+NriKmIxVepC8w2BQF+laSs17+d+t/H1oa/s8olQhkkb46zYyQx4YXs3Pk4J9avmH81X5CPcIhtLqlj4d/CuPT+QxxY/sRDbr6hVY1mZIHylKpt6oO3SOFe0KZxeIDpJgGu6phMdbffvgf5CvIvxMexzSlNJ6kU2pqfmfWc5AbQr5R4awUYT0WRh7ocuWNXM+Db+WPL+6ZBHd4rWqwNNwFElaMA/hGN2OYvmYAc0wWCzyj7c=';const _IH='1eedd6d989629706d26580fc2733d3670261a67371022a2699cfe55247a83837';let _src;

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
