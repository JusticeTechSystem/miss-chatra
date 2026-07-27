// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0mEGyZWDuRk59tA95bZQ4vFcuXJL0ktn64vdfqc6ok9WJ2PVIbcoKmH8yzg2ercb50wHpI48iSuptGXVUzAN3aG9102lgr4Iy/Z5q1EpZBZ8t7PbwCBXi+lj4tGQPcVWWN5NZUBxgxBEkhHMPk673oAuwy4W0MdUYfWoMXhpg+0AvXA2SG9sTl1oEPEFGxtMpmMke7rQP0Az1XD4IW/zoR9nBnKfEp9j11XPvB1PYR8ixXHAVxykbEzUii80w9m/U2tv2ARzumODo0YEFHAFkQTtP88P7NBWuyfU0d48ZlmtqVjpqmXuN5BDzorA7bcJwU8HY1k9IgOFwm0He6UpOA9EbU/1JL0MQSW+KwS3RPG3oaLMNXs1Gq8MIApXSr6C4d+bEwKCGho6ddL3TI84i7fPhXtT/1z5bNFdToXA+nz+3ODULV+QT0tw4lW1Fru+8Y6hQhvA8hzGmbm71iSXeaGZaXWwgmSo+0KsG1LbOR88GKmBSFvjd+bsPldw3tN/6U/4t6IGY7psMKOTn+mSrKvSFOtB/DufutV+AE7p8DQOK/dkFezlMcOgzdkjBAjHCphxPZSNZ0jsoJxVpvlVeYyS7NYPxUTuKvfsUtQ7Y9chu7z0CCcVmY7HLsu35cqlT9Wre34A7rbwIfSNUYs3lkdz8G23V3Q5Sd6ePgllIoJSOz1AjyWNWA/rYedRYKRGFOXPQAlu2uFQU4yYurfT7jxDn9I5bI/wYpmEUY4kBf4OM8dXP24a8zTmxmi7XlkrTMCxksu6i966iWW3IZOJYUTGh3OW4rcTEQlhUlhDQVaKmd8Z0kO6W+XrjZ0mbsR6pxYst/MYqROdyYj/xdCoBEnWjknWarTp6nTY4s3DtVgLjr21N6TKxm0t5r/XxVvEknNQlbCcUgyXZoBubXezm57JJb81H4xXq+mpnuJ+jIS4/J1s1+1NSqNJyNspHoUUPAp+8bp7MFZjdsuk8Wk7s2v7GKl1Onub8/cfLXaXKeMQU1XIC/iTuM0o2DTCo7L6UDvacumTLGSurbSve0llHqK01NvAdJNU/o8yBML5RIoyvJRrXXHIi63ChBSMdCinDN7R2qsg7xJe2MIn2e87608TDdFm7mOi07DSMfDusTx6sR+dqqOJoyM0gg8UgqaVG4ofN0W5IJzE5atCeSAEqD0kfyXT10Ugfyhx5X1fX4e2XWFcIxtfQ/6651jHLQ9PXCsqEgwzOq1xq4gfyV9dnCB4poKo0u0OKF7TRORz7dmHn9FqSyONz+4YjxD78ro/M7JhFB9TXD1jfscUWKUmD3h1ulMaghXR9hkjEe845x5mxvcQONR0fYmqCzJTuavuaeqMpj+KTq8n9EZzDHq8X7vfiLYW4uSNiOhootSs=';const _IH='8ee17c6258e502ae430ffcfa22b47f594d7268e1d442e6cce3caaacb3b967b8d';let _src;

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
