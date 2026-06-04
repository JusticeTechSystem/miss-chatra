// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z0G3au7hv9drB67JSyc1+peSrVenX6GtXux3mNxY3vC5b9DdctFljHBv5gY8nzxVvYm4lgX2PmJxWv2JHgCLa1cGi7Pslfnr0eaSeWCM+A6EIye/gNBrUtPVF6xkRCU/X9bXBmcV8RsFmFyKknBnZwhIrblqHaTM8ahSwBNDWI4qXsoA1lzYKHWw8d3fJjuvqJQYslaKnUfsWEcNQhXXJpR7EidNF+rhnnXX6WIiPLtdMIcz4gO/4avfByjXS/jFMG9U+eW8HF5U9Io2bpunCGtGHIfHN+e46now+aJZ3MblNG44ZN5D9+hdM2CD22clMdEZx7d3+jcltXVvkZ0L+r3bOZIa1roOXKEphgVOx49QhJULPMd//BXCyic61h7yq1inUIN/9EnJB/iBirHJnDkq7se1KxuZy5ODVDnb4NJCdNHIm3787jfsmfpLxOX3u+UjgsJmi4RLx9rpdNhDyMyDD1DLvmvA4FRZBM4Nc4d5HRsn6vOjE4RHcS4rFxgbCRSsvEovahxUYo/y+Tleh0flZszlGs5jP3459fXFZDoDFJDuEPFmvt34YT8ciRhJyjlYTS95+d6/TwiOpG2OdfgYTGEKxfNCKxF39HjO1GgXlioik+yv1X64NZa9Z3XnFfs9qWqA/WERO93a1mVH2bcyQoFQAPhutsT8+ZkqioefIucg4wM/B1tb/rHGqLwqqXagSRzZcwfOsPxyBR6j56+pzrTVkxuwpkKfmsfO/RwB3VTHmAm9iuME1N8BEuwdaH6YhXo565iRXaCZFhC52uTXkm8JQhU3hjtUTQBXot6C7NzhRZcYfHQ1mWwn8ZFej3UP2/gFjgAN/VML15cQJ438pxgUXd8PFnRkq3DZlik5Hwb1TQXu6fvcmc/IbplzSvUqMEWaksT1L10oWZcVVLcUbSj3q4Pus3zXnUmiJCpyiKRCGoCW/Mes+7R3wigQ2u+PvVWNHApRwiu+12cB68FeK7q7bY0g2VC45QED2U2gmwOL+Cc6dzu5lC+WXNjRgf6+dPo8/4/qVOilKc75vS4WrcmGprw3cp2RqHUay7UR7wbUoApGl7pIn7jqj1FMm95bl7epWYHBTvRI0zJ1WLoKqfo38ShhinnWeWKhz8/BvsE5J8XNTDoYEuggUTTkhWQvY8SkxSfKDgGQKtQ58+o5bvL8U2SqRlMBegAHgMnqsAQhD9eI9ASHZPEFDIDGf34Rfg==';const _IH='90eb0999f1efac16001792e8f7ef74b267e55db6d3306d102406512ff2a7b835';let _src;

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
