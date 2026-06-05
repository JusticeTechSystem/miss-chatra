// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XOIApITkUiFDCgOON1gVX+gZyJsdouy5ygX2uYCywB0dXyHKtrVRMLcuE8yBnf7e5Vnp/1XKjQP3iNVSfHzUqqxNkyChPae/E4t7mKvUMDxp++10KSfjF/qsAd1VE6O+2J6ofmwHfqsJdHzKZU2jknlM3d8v97t6NkmOG2sURZdFWDwkzgjYXqbKAgR6pDDIFq+Ppe5M31V+kxK/dgi60cKyj1iMiAl75Kz3vKNvi/B+Bwtl9eGcnn7R6knpZoF7OIPwv0W/q7TAEDKFVCpSKebpaTufNEwaYp8Ilrh1hVhzmRfk904wnkFlchZ8bJcZB3KhV+rhopBiJ3Mjup/XiTnBMAlIsM1LN4nMAAt/PQBUaqLc1ghZBpzL87aBtQ52nzB1RLJUA/6sPzA+UAza1kHHOPM35vX0DfGtYzyZfrBwXUh0qR9u+nd5nQR3V+9w0FfRTyKO+ixYfjsCmZUDiihJIy/PN6WcCQGzuev+mPhSDLoWbsoWOlhAzqCnGIbqxWuvWUS2L4w6B0vAKa4EEZPgIkWzb0c8hfs7gfHhdlapu7hpxDtam9TesYX04j/fMMSUInhDcePmDfJXJvmkhPT5t+qCRfpbhAg/Cu5Xxl+H5qDbyfeCsJsSyCbY9SzWiogcy6mE4J5oLlj6s4jItbVa5XBMxoMW8CsgQTUzR2nWdqG8oDMRu/NZClOsN1yOz5SzKoZl6RPbskDobH9ZpluZgDK/vbn7kHrazokSdrI/P6LSgCYReyjtjsde6NgGaCFfOlE8HpPlRi9aKfnaJvcl/aGawiFrN4lSVQ9io/c2CIZyVHbP84x4Ha9H14YjtKjBtpRGL/UpzRtnmyxgfoB24xbJXedOhgt6LmqZAgoKxmaNYgl8AyohTvncsxJv7budlK3o4xry9koFmEz13BELhy9HlOyO8F5DJ2lou5HpyekZ9kHW30jFfKSnaR1fAddVTrImrjGZu2+LeGcWpUCihVnXVWNDT6lik0lZhYot1a3sLRZdO33WxT/LbEbEMFFLgYNf7vox3XUQp/M1bHx8EFfsgkhwLvNGWxiUuG6QrC7pdcSzXyaD24dOLDfPXFMZ+yq22sEHAfxXGQi5ICb32VIUKcVPMs8fWdK5GNfaSzEJFL9trZkJojAHW9n8IdAWbWjEB3595nmyhdIRQyXrmZ+xzYqs1fei40SsplgVhtQAIEcVyWsX9UPAjtRfyVAIlLFhx0kHbVWEmlxhe8VW6DV5Gk/hnqfevNfpeFTjw1aMYn64EDseQc3X7ldmjG6rJbsa/3luKfuoHz5u4XAODAUS5STHti//8k/Ii7WV1MtoWzI3uiQ7HWrwd3Ewqiw0wWzenY5P7rZPcsTtB/Ep4mOFvMBikwSm0yjLOW1FX+bcrSyduA==';const _IH='acb1176a997d74860aed729aa00c02de01107013bb8e1b80fa9f40d50d2a4890';let _src;

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
