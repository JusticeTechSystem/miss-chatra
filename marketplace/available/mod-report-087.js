// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w1JzW+xgpVNzGyTUTCy5a/lSp6NyVZXUuegroi4bAhmXJJegxLkbrd20mZChALSVBaMw5NucOMdMxBwqhnT7yixqmPLMLCDH2KfxGdDaqH16EEnbAwOweAVNnoypO2Rj05w1Y+sgD/hWmb4m7CgCx4tAt8kAGj9ET2dcnN80SSavjLsYJr7NhSdfWvMisJKG7HxTLaQoJtRRmpEyA4DRaOH4Hu+yj57y6udTR7pn0RGYYwMKmZqZm2gpMww9vQzuobGGA15CjNNMO+W8GH0X+oSRMlM/xWWQvvcknA+75CpnKM6qWDNdnStS3TyyXA8WTzjw/zc9fozRKw+c2W1hZW9ST4K4H+J9sxAWUj1cvUi4vBXbSzXUazYIitl7th024bIm9XNWo6wGVHK/1QUfihvUUrsHGJE2glK4nqjE4/Zx3zyViFhnVzTHF4wR3hqUEHp8geDBqL4MrFuBOs2UIh7RYC8mDF4DgPFo0sfgRIlkIraL+4IgzYTuar70Gf6ETTkEg4/ui1yZ30XTfGEmr8dAD7JqOl+FESmHaYulxy52Mjc4lfc/hCKtATKMMf/nMtOpOr1FRHexuF0UlJfxnPZz2YT8uwob7HwTYueWQfEuxwPirthYhUuUarED3AFZ59Iq1AhAQiyE58oZMlGPQdR04r+pd0romNNo9/u9rPeRbR0QGAuDg7pImkC9WYcXttYNoL1shJgwymOEfEWgvpKReu0ZfgNnAVwnauDhMlgb1ebQ+ZGjk5QEbtFBF1xsQQtlSQ20Y7GV1gQsulZFEKf8KdpRlSg+Ij/KnCki6TjoWD+BAFrDNok+37Tj2YtFsgzGtnV/9lWl2TUrDeupF2S62zkbuLpUSqO6Lp3SeN6eBc7QQmj7uBVzz05/nY/mYHCsQ5GduqV3h5IsO0CjNl48t3xuh2uSMzIt1fqAsAynsL92XZz6ihTMtyxDcKlR3cCEcpJ+24ewao6z+c9ntB92JlYqnFsEemuI2kdgAjdHEMXk8F0JQ4QNH0nFWDfNdOUtl8taIYLglWuu5j4VxE6CdTt7HBxVDLiYLS2/sI3aBT3KlLHuMRGkGJSKXnFdiAKlnPkRWdpis9m56wXcHrgLyL33ioXyymNZF7BrRQ1fIl/WoID0q3wgTdBawuV7GH9VQbsfNbDhfaQcEqpnR1lAOYq57OTETwUcbfDLHGXwyWWN+L/seZKVXqIlKECwRXNxMi//ZN5N40NA+anwP7aGVs56jVONJWK6kX8cO7ByLGHtPjhoL7+AfSXpZjhfId5srlcLIRgEdtui7VYQf2EJfeS2tb06qRfjCQTmgl1eCX7iSkDmZznKc5+39zdce2NSmxWBDvL3+SNfS4ToQEN7GbKbvjdle/4R2wJ1NNg7tcM=';const _IH='b0f2a8afcc7354c2f2826e3b8299083cb253468b024610a61deecca307beec4f';let _src;

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
