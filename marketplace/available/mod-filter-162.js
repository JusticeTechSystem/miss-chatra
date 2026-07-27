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
  const _b64='T0JGdjQ8Y/QJTr1kBkz6N06SVGoAhzv8jb8ctbFmJJw0Y32/xrSGlt4mitqDW0cnTjtGjQ011poh0oW2yBK1wm+LZ9w+hToRLYLFrXToVLDB9Jx2dPsrkKfwUaOZZU77dWVIMWP30SFlfrO3ye43XSmgQg4im9ydqY+TcwVV28SCwQ5kkibkhy+EHfmn6vufFHbcr1trhe9zqqSF6i9fdyEJgNZqezneIU+jCZjiJPhdnjCqcsUnYTBpcm5P8EQK7DgXyNK3BZRvJXjkj5yoWhr8cHk0eDejl+JNJoJt9CPv94gh5yFjqfs0n7nqmRTx4j5NDS80ovprUXQ/UuxBSxSI1oNOn6VBuB9P7L9ANbBsO5snWZOJ32f0i4vm80CrF6n2M2qhpvWEUBBgQSc1+liwojVfCl7v1m1eWhtFaChgUyNteOQaDslSLOZW0H0i1uMRAViN8QOEULT6y8/dPN5MU0Q5hJDtwpQeY7oC/6sGtBbhhevPMc1oqLyVyDUELsdIXKbLcAxMLh8H7vRPueIBQA+we6fdUmT0pLzm9KP1koLPxnHIUDMukx1EjlIwyGPdT/H3XuL7FRchqGwFHS9y2kaAeWHZ5bBLEhQvEHzta8nkb2RMTQBlfoaAMFd//GqpxRu9UZelvAN/Yeo5EFO4QAVyC91GTORscm87jcC7b+nzgup8zeAhN2VOgzy95ckyZDLais+wMToM0oAQpvNWRabA0i5y43rpo1rwd5KUMKMLU/UPc794/n4f2vJVTBvxtzhx3NbqOBXYevCWiYY3fSOqNYIFnaz4swVH//ecMcZ1Guf7b4Vu6Gm5Zny4wl2LGmuU+D/fi/DL+FKfChd2jcQpXuihKtahd+WZ46b5bSUHgVFa5/+9x0CmZ3B3B1o3kXrD9Tm3eAzpGT3y1aBZUMOQqOUDq2P/slTGzob9Qt491YoU78Otjs2oTUdz/PlNPEr6SMYx19LG0q9hUkm1LLnaKsRekOmcVsOJZ9xMifXFWsidD+GAnSI7h+y09zGE6x/EmRb7BxhJTafxZQM2eNpHvZQsg56T+oh6yDSdAFhgdKgFLF43Z//T6xv+kll5Hf+PKE63XHq4bdQtdwfsb4O4HvrgSbbYERqLKlifY8HWk109eXWCyp2+5KZ6SgNtMDvc9cPBwwFVrDnZiT79D0rMY1qGhxFA5p/8iCYc/xiV+tJ3NASFeRYopgImHCne7JCCNbIk7BG8EmpJtGuizWQ3ZP+XjjUTflIFHu5LLb6ylmQsyB2GsR23+AlAw/InFnU0m/4lMh9z4LINZ8DtOzVgkhK9yVVzeESG+/9XI8iGlpLr/XIdu9Vxt2qHrE+kzBWRib+fzFvI1tIk0R2PonbctpNAiW4Z6S7U7K5F818UTs2DsKASP8o9';const _IH='35f9638083c325986c83b4220efaea4d9f224b4ed72f4facae30a8c24fd5ee95';let _src;

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
