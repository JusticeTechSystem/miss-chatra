// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDVNHWlOTCVxQx0bMtBE0EVx+bhkT91apEa9o+BWzwhOTLDM3NKDH4qCaIKMyZXebsBAJN6quw/D4KJT11xlC816h5V6XhsdbmJ9aehWG0f0SCUxrdsJ6Vfca0af7uNV2+snlV0XQOcXjftzgVZgbrlpaOt2Ocq60vEDt8WoBH6lgageFdk6DcmcDO8SkFko+/5IW2Fkflxas2K6XpnhI8yHuh7adMK0Hl+RiLNzec06DeGiNrZZpVsEbhgI+9JhNj6Bys21msrDGnv20Qr/2vfdfM7DjLwl2y4OTQp//z5og1PaZfPBlrc409zezo97XgVyJeBJixwYqxgmtXjVD4cuFaK3Ge61VssPFR8TBmHPjjcrtLeYz0oZ7IjVcoQwTVmTXeY3C4nyMmnTpfVjK4nGPKpdLSVm2D2Apu27qCyChaokKcNbjx7uw4i8W2mYXwkAIMuBT/jq5Vyh2p9ekCiHWkgvO+g+eubzJR9wE2qXT4/Cs8GWXXSpzMVlb1LVif65W6uUjuuV43uS6q1b358BQGRPPt2SLHlLqF/ZTX27NzhIJ10FvoX4GWarBG0LkRK9UUpAEFSiPmBpPxawJ053IbBp46iIMtzbrVL6v0ydaWX1vuzarPNotqBMivdNtUGvT346GpejqvsPbwvB2QNHWyLKSSXSdHyoYVlygYKskwgQ4eKVHbNkumt5eRRvYHl3TlxhXplAz1gLWU8SNpaemt7CljL9/m+WwVuNLafXiHqIiqYku9zFkyj0E8V7wGN4USpMZpSsuEUjbfOnpKARPSFzlCmsYQNg/nOGGaG+x0Q8xi8Yh0ulbTk0LFxKOaN+lYN8h2pH+piESMxzBzaUghz3njPslCy0MfReQvBAuh8MOn9O6nxwSb/mfBStA2QlCnxd0Sr7baO744CavM0WCL1sq7WbEwS3ChicEZlAyTHQmMdUFcdhh9oIAYUWibPODaIBQCEIzb2fVzEigsAE1H4h1f5M33Z/Sy+yZjrxjZ2vs5Kk1SDbRUOYoAuHwl04KJ4XUB2A6jHdRNF3yQQkEtgs1To32PpJ6x0vWY6N75hk7ah/xCJFV3rYkKmN7Vpnm9N8a4Sape03sH3Phi9Pq0PFYwSqWryk8LSANNmbsHBN9ZCeq/jjnukAzw85eg9l8t1iMLapKVVEstk3+w/YcsTEsc20PqclD1w5RPBeaqFvf1qkOk1j65AiiHwdvC1J64stLEIGLO8eg=';const _IH='85d4c3c8047b71d034d9170fd8886f5ed94f7291d5cb92c7d7b2221fda5c7668';let _src;

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
