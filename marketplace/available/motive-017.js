// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvYGLezPDGVWjM+RsiTemItMn/lMZF2a4R0puzbwwYHTQRZK9Hn9W2lgsv3It/WQ+mukZfgIAQ4Wuy0iMW9il9umy8zzSJUzb3XpxiVffgu2x1KFvVOQcu7altj48GJTuXtBrLWoc89qGm8mR19TEW3RCimBh9I9L4Fs0nxlob/yuHyM3SzuI0OhEq+VFpkDwn0l1Pq4XzAtaHK78oAy5daxt1KERJgfmJGKlRo3nALuuBhtEJDrDnC4VZ7eKw/bXPoFhf4Ys39ehxLOe2p8/Jp3FQd8R8IzjOKmCw3eXIRfqXj9AJdHY/v3SucXKLhQjmebvrwR6cXjQlkqLbPqgJZFfFdeaxRfGrdBwsp6HmHQBa1bk1KaEhGSFlHnL/BkVF6oTKwprYY3RQfM5SQt0kQumjJg1j9CbKcMh6pcAhfJl9m9xd+d6AIAESSwDrZq6OoQ0O1Bba0jPIaw5iFNugr26XX6BgQXQK45gVxw3zsRRN9taUDwf9ijx2iPUcQqoqjowcn7fcYyVZZHS5A68i41/tC+v1b5EeAVwXvSCy1XWPvnPtjLCEo8rar00fgzBLtCEVsru2lNK7DCpb1HFSh3GsFvt0c0LKRXQaSw4myBb+vDOl+/fHogGiHQsFwNzPdUks6vkoveG83DYVWkIQr2be6FFDDymUZ/jloWMT5Qb101aRcDL6D8TByYyMXewLBKncHtWA8CgBv3RYyMa7DZPA/HprPz+d8c86uKqEcdTsr13g8OwnNrzPa6iwF6GHz+ZcJteWKMbMmq1OBNRNQoFUyzuphbgtxVWa2ySOZHrZfgYjXvUzs3BMFR1sLS57ClDZ5+6dS72cRnvtTODhBzcVToYlEgIC8SZqCUjvuUmk0b4XPtJjIZeYz0YccmKxrV3GxFYxyJHCo/frviqAlI3Duml7QPFlpzinHSriF38MYwGznILctjULRolA8DNoh/gyuZ+0WaD3v/Z5OLfxVkxUx7NRJTLLxg1wLZnzpMq3PNksl/PZobnU7pUq2S1PcKB9rfQTDXWAYJZ5yKRium0=';const _IH='f7c06fff36ebaecf339081ae35859fc2be645f433b75d13d320505a5ee22799c';let _src;

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
