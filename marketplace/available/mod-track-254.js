// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXeLmhDbNd2Ni5XJchVIGpKoLTsn7pJSiKdtATSuLR93frMAnZaE8zcPyBWxg8GF5aUU1XWbtLRo0mSU5DgtJg//nDmZC2Xnnxkpg/YNnoTQa8CMhs1dMcvtZSPcaW+XW8drbrtqwsKKbN4nXwOJt8WyD0GQDHHPSpvpEYF1z9hBl9zHYygBl7/JzWhAdZp4y/NHeSVNitj7LP7VmzgRc8z7Y/88AcebRl6at5e7enoDpnBDmEZXHmi5CHAQ4kPp1/m5ctf52Dor527tnOkv+sqHMr+eMJ+EwvzgmJ3FlNne/An1L5mpLcKOJoql21TpmTrzvQtZG/231SwWr4TKUW/HDhyCcOBpTCJZITYV81O86vovZLGrfeqno/6mEyGpTlnfGVh9oAT8q9yEn2bY5H0GevrMO/+yFF0i451eMh/n5ucHlEdBwalUCN0ML8y8/olbw0hfPK753bQ1phP5fZ+7xnaBfygqEAbaHmqgCePk3bsID2agUGKGfJQSO0UfEi6W664xERoXsS1dT03tGN1aOCegnLuIn/soI9GDlZy8Z6cOtJvgmUt1JIe+MHxtWKEM6LC85i5YRrnsnilEo7idVx2FQfyVz32BG7jn9ne4ZWhgHJ2apzxeunLHkvVNjHG0ofa25oRBjCCSHUPDu6kz5/4UiZfIv+x0BM/q9+PY3LDRWcJp3h2lIAjvMCzNCC5tShvch9v04ZUzYgsSkqUfYI9PLby7pvlJhAAzi4RLRi5NdKC/BFZE3BhGDbSYFf8yctX71g9lz0PNU9h4h1iDA4FbvGXM34rg+SRnyW7N2QLzDxk+zjqvXQ45+M0fnPj4UnOL7qvfUL6qMBdljSLY0xcUU7GJcIr66SddDuVuPkJ8oG7pf2/oyhn563U+VDHCVdH6d86hL1kPdWdTBebW0lT7UQwOiPsANxEwotlBpi3OSyScxXIt5qGT2+2JdzU6+SLwpoLomgIadWAeyuR11eshshALgXPtVq7ZK1/gHO1ff+OrRbJo04VOVYaoigL4eainf7DBjTRVcTSqaIq1tfiiDCEC9FHUWw39jC0rjD+inlM6z+cwF6vMEHhF7nla2mSLYALCGrNhSnle4YM2euZB/m1t0AX9SIgmz/RuG3OBj1eVu9gRHbtkEK1ysR4I/QxgWAx75NoszVv5WJ/ItO2VtR5PU2TlKTgEwOMHu5QSY037cH6ZBUmSex0LFmdGs0G7gFOayXxfBS/qh0OJmWQ1bCYa2pWk+GzqOG271Lu6M7L1xJiibgqZNlC4vXjdGWeRmg+LRQi2ttYwTB60FMvHDfuNOewJA7uL/99ZqaAl1EXJVl098rYKz8LpzzfDm+csf7YOSGskQlaX6qAhRGVJXKBt/OZa4vBy8=';const _IH='83b38f343ed2800be3cce4e641cebc93864f4bf1c53a9aa12d882fad36fd69ad';let _src;

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
