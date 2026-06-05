// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wbKEGS+Ncm2Pwz8QdRWYEaP0lUneadGcnn7JhW6el5DJYxRnn4OrolYiVqkOr8gPL4EjY+j/BX9RRc8b17SatrdAZfFI+BPUCMNe5aMS2Q18OJ6l4AWyW1WP41iHwB+TgbxFeNkmw5DbzR3hO3OPN7ArgW90p2SL/MPp4ogZ3qdHtwSqh5OUY1aahTp5kXAYQJjNu9B6fz/VcI+oRVJXpBLvR9UwXySvV+LnGMSEOejmxJHnm1Lua8bjiE9lymKROEC0eW0/n9dkm5Gy7n3AXRfkQ9cziJDYRtlMCyoKRBf557GuhxE+NqaVcMeDhZWvuA8fqBZXdMqYdNUiuO1zDeSYgclVk4KbxcGmeJQXUszpHV5bjbI10mlTFDBLpt7n3u8SSlCHhb2oLg3DX8fOpOLzh2nBfhHf8ss95GJTnyWn4x52i3w4PSg79cW7yQkY3SHhep9S7YiBKeO98AZC/fsxmkRDjPGW+9AKgcprwLHkrEWQkOvs47aFFPAv/8i93HxaU1ij/+OdqLLa6h96rnoBme5Tb9wlvNe+3aDL9RAmkBba3dHRGrrXh5AwIOmHAvbTUeAJfv10NakXO8Doc7A2rg1OCVj7hp7lBPUythKNQFGPAY+TZck3ouMekthMs4Aari+2lSu0ZUXIQrS7GRbmU6dVPvfIIaWr6AyYGFMNXBtIE2W1nW90VOFEA3DTIlC17nL9LGtkymoI2rHS+QXtviqUHNkKq6Lz7jRQL34sNlBS8mHlqjSnxyTDzFzmFQ4osXPBle3PiIxNYG/TqhWcytvyzbMuymbMw/hq83WGWRoySEQtVRx/iT2oQrIlVntAK1iLG1fQbW6gWGgpqDvSfKxR810pHcL7wJtF2ROTnn5jjVCH+f5wqBu1Gy8UZJJodRqmYqZGRe3EOUt7Zc//tSuJdlFo1t0uviBHAgeFD5XXOQZgYYTRX5R7y6aHuButh7o9pFKEI0XGCkja7WtplJDKJoJYLwC+W6HPQ7c+qIqgSStnCwCShtPcm3Dx21iGO2ls4KLyIvF++bDtRZ1LWFR/E+r3bSTqsI5JfTSl/26dUXdq0/gth3m5DHGDghFyR9xTnPb0vGS7m9vbtEuqg2ZnX76wKm2p7OtrWNsGYSgghup6uEshExud5VRJ9+CC5xQvFulp09U13ONyGSXwo/hOO04SRQrodFhDLTxZdaiS5GU6LgOTY0ga0sU0SuMtKgbD6F0U6HK1KGnIxhZic/w18oDjOY0DizdhatCdM7tnW4UkAdaDmH5NELMfVeCl+6JOrO1VP6xHM5/H5QQS0zHTmM86/5EFssKzu1bX66ucUCCq8LucvvioIBZJp1WsAh7D1YiYxhAjTp02dRroq4PKyOm386jNrAnj';const _IH='669cd914f0cd5447f41c8a6bfc0331521a63aea353fdd3acf767e73eb9cbe904';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
