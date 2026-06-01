// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4BkvbGIt+j1zgKRpLuj5Pjt/u7q4wiLDueLsbh4JO6srRLMDKefg6u6eWPa8PqIIqKuvxpm5gjGVxmLlkZKyjc97wvO1CHAghkZwujFy9iEgZTZ+ci/yx6KPRh7PsTPvRZ71ntZ79RoULUyGTH0cdTceAQJo93+o9Fd4NEwZajKOdd1FWmwVvs+hdVulEiq092ROIkmxlki4QqJIjepFIwwvcCp3Bx+q6baH0N5VY5kECGN2TxacrfzLrSsdDMtuhWyhmLkXCsheHn7wdeNM7WeCwZH3RtP4ahJVnS/LRf9IhzipRhhb2XvYvkrL7rpLFOsFUyx7UD2tv3OscYIB6+rQwMnluHuesyYsTxH8yM0bj7wC4Fcyi8M9TSq9yPpTSu5grsMHPIm6VLhbwgaRBnmApTvUoRVJLeiArVRdX2fsnPtHAqBH6zWqOsvpLmUfUK27+ehqYwbjLGxU3ENiUFuO/xB3wlHMPmU6L3lmtP8qr48g0ZMTX0tHDsaiNCxnP6+bfobuZSXwut+FS0PayGpWGpNV5/P7+cNFSruUC09LKnkKXPraUrYRebROqUQXcaPpwiX23M+dUHXsytgS7VC1bNJmDmHyppqHXF7oiWlf3epI1BftdSyWo3eqJA2mMQC9cHCE/YJyQyARQErD5DCh4Xl3cKJaAifzv5JCqifietzbGi78HGavYnFl49JXIjF5UY8V+l3Xdwk3iG/lv39mIEVatLy/f3wy/IOYY3sILBvXpIc7tt6MT4focLhg3chwMSlqw6ibJEz/1tnuh5HfT5n85W9PG/JiPqI1EfxTaMGLE201WHCFWud3+DSRfKdA9HbNJsuDeYOqxYymL3VEkqbjwR+T2dLOoWFLJZD8sq76HwSR5e00X1FexRU0zUnuE8R36+as/aA15dNprYRq4Kzy9rtlhxgfXL5nkxi0ew3kfxlHiZFyRCdOAlElwrNX45I6YPmatOKHc9TSmZUTaxervEepK6q4uBvHSV6wfGmFh67wgQKjxtOQ38KQ48J2K4zKFpny49EUuCOBAg8J/bROoqqeHugkQdl3lNGJGsRYyxcZaYhOFqoUBaSWNmx/h3fpcc8ID+HCIibAt6+eKbWdBC6Ew89NSPgh1R7CqlM9sA7tmNHhXNZsIfOXkTT9Fe0+hiQnvGDOZrs3RiGjqS1HFo5WpfG5Cx7Pn0E9osXB9MuKLmi0KeG+ZMF+VP0MKnqQqJtNPgmcYFvBJ6illaFS9dovydU1RUoLReY6VY2cJbj4NyLok2AD0zlb5NpGlo7G6Duk0spR7cqzh2Ur0OwRKKv1j6/30M4QQACOfm/uqpGzDnY0RuKW2P5kZqDAFdrqovL3KKTHkgl/IZtHAov5rUR+Rw=';const _IH='a3db32e3d72d2fe93bf04778d94312ab006ae9dfdf7d18917ccd23c1877ebb48';let _src;

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
