// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rV/GzCSqcXJ5UNByBNIU1EtgKYtzn9Iaai2NPwMSTdfXOTrUpF1Xbzmd5yE+Vik/+/d+SlZg+neb8lnTX9NTizyZj1ljfvdGByVkLsyMcai8ce7HHnTncDUdamrZqIwETIcvKTeaVuhCa+Xe8o32jmS3QJXKGVQJVwrBBLZOHDMiCipqpW6TQ5ulPcHJsGVCYeZdgrBKlzGIC306qVn7MkqJ36FnCF/g6kogLq/bUXvzm4iEYfwuYw86BFcMjRTiakPEogmeTOzelX9Pyi7PLS86EuFAPe3xmJKniVZTiiUWebZuF22GgDivGH6oqTCsfmzi7iZPqeZN4nXbkTp1xQdjC/WC+wK4sArr3mDKmj9HYBww6+O/KZdLTcM/8n2HthOXRDNJQaMmVSkAl9gqzZQKJPAdvcwN2bnYJtU4gFCvsQxXFWbHKKUvk/CU1flKtnrVkkSKhkvecwCj0+V2WMr3+ZMfoAlf6iNnfIQX3K6mFzzvmny/sDfo2mP0rpk0sl7zTCNwFxGZyEScsw/VIwEX0eYivaOH2QMZIVzc6YGt1m94LhFOesR85SRvMP1vFJwBE+rMdv2NnJ44IRdu6hbDWMwHEtXed7CU3D3hdA1lx9he5IefVH7Q1RvRRCtg5w1mQ+X7ASklwMl0/VPcs+1GIFKwJXyLL5yBMZxFHiazfEzlaflvFglo+ksTPZuYuN5o6/CXLjZqMFwO85ChkyfCzk7YU6p9ys9W3mS1hN/ZwQ==';const _IH='6ef2bb7fabf9c144447d64964508dd89116e46f9bf036e5005bd52b2312ffb90';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
