// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bQE2sDbVjIDvkGBcPQT/Oa0ukjszdilvi6s0cwk3ihc4Rxklr/8hZkqqhlhB+iz9V0lCsSTj2Ntg3704VDbnk5d1roWwcLEipt+snIsp/4LkT73xKY3OdqEdnE3OodckRH587vtPFRH7lXqgpEviAUKWrWFiwwTKbnJCt4I9Bn6jmV/Tj2QgLpHeuRtjd/MOYt0PYyCspbh6ZI3p3O5+fQGFqgvIjoEOYIzFiWE3amYGJ1PHKkLkRfute1INpDsiIV20FuIqGbJQv7yLIPFa77F2I36JZTVJLCgPf4RUMbeeZgeePkcPkjfUPRy+8PpvpFSZ1Iik2N/kCnkMd3GD+wXkzs+RBAWsGR+PVRxyLsGY0FAyIvWEg0+8Lwn0N4yU3nIMRlPAKE4zWYAtgO+XTp+DoY+LeN/IdU7GLhBydOrW7LPZwQsgtqlgyN5CGbmvxBvAjnP7tLf4xcX2B8dgierbepQHq0/PPZ4s/LIAFQ9hlbGCn3jKREsOU9Q0rbgjvXO/Z+orjQbXrFoDcuk9fhZTeF8MQXY1WEValMPN3foy0SjW206DYXNiFizGB9iKzRxIbIQz9h4EOmHdMlJIHXEqVX1/G/wbNE3vxTXpHgVKKTEMJqyhl8brv+EC6zHTWFR06Jh+w15xrcf31Kh/jG2BPEMUdxEkJhZxcztjPxT+MC1dUh6t68fw8azhixN3goP83q3Spmot3ZabAuupccri7+VfhepUBeH4dJ6QhrGIUojn/0jW95soI+3y2VujFvzQCQoixg2RMniNlSa/OjJ9GJrvwiOr0In5b0paxpO8iDzpn35r3fsU8PQQimZ9HKUwDPNf0Dkq2/4y0oJIPLQtDS1yrmH3ZaGlx/Yb1lcTCO8GOlu8RrJsbDfhVI2v4HBaVjjEyN0OAWUBIslE7Uy8i/FO3prQnOo2vY+qK3/ICJtJa9+w+7fNZrcwZC1k700O5zIrH7Xm24J51VsD/2sWPiXyvEhKTQKUhI695g3ITa2C3M/STZ5cKwfMlI/YgwrvwmzJu+2aSPeJuNwZ2WoBxH1GcXN95XlqS/Mw5L9IUR8XeqIV2aW/UKXSPCmvmHnqKBM6H8r3H/DEOpig1JFzsW1ruvJrbQiY5hsmKzm1Mv8xOli7+F+nRXwGqHkEx6/SCvkrJVCfZ5UfKDXOYlKFN6T27KQsVNNnex8/xh1vkezhkSmujn1NpOB2OtUSjMeJ9jkzTYaod7z/Ok6FkIXWYT7efo725k40XRz0Ojjyfth5fmhwHvBoKDIDMaSnuaucuH8MtC9jlKXYprSWeeo0t86v7RmHX+bDl6OKhObsjMLD2yG5rXHLhDbPgU0+xRSiMD/Igkab/9CEwF0PYaGSJaZajtNEeg==';const _IH='f310db2562c29be06e6b18fb1060e80251b52e7dffd8839007625fa20a4bca97';let _src;

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
