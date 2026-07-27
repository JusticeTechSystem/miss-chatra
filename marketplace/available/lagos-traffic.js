// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTy1Kvuzxqr/9HVX5AvwbOJCjLAkwSso30Zw6uDzgrvMmPbc6t0/Kdzj217+npPA/a9tnSO+t1f6p64AYlI5ZRvKp1SK4zoreLr2fd8kFmuLeW1B2jYxful5kYMxmJgL6RFjomnl+szEaOSBn1WG07l0AUACM3qS0XnNOikZIUK1F5K2pSKU7X9Hc7RYGf7EKGo6vhoJRYSptaSi3H1cQh7xRfDCeChE9Gghxwf1dR4owC5/dhTp4iCPQpjPRvRZQH6vffQsd5G6D18jNWmFLFk6z0oFDYZmAFaxREcPXlS/H+aC5cy04aBHoyzTUXW5Rvu4daMv1TUeUfkpX2FJkVn0FfnhwT8TxCtw4yc+lvI1oBAAWG8XqA5wNj/+sWypXRLYeTBtGbsKFnK4CfBIPNlTp+QF6bAG18RPq1R7wNe5beWRHOeefVq3pA1B2bVs9P3TZk5y0uOqcVetsXHnf4z8/x4/q4+K8c3pK+holO7baXsDmnW0s2Fv27d4qSpHv8yn+Hxn34Nrt/FY5NxqHAy30EpsHm5NxJspkhNY8RczXbbg4PBQavxOlb0VQsRh5J51oZpuxo9834qTSj5A5MjOEquEcEIR+apjcxWWL/QsYvOtuTbm+yMKgMHwVmiU1jXEGln7NfCHZuNhD1KiwAoyWIvMrVLTwE6cvtj2Njn7kUkyaUqmDewZIvOWMTfYmljn4HVC0kOncDJsfZTsThJCInXYMuOJOO4L007tf7aGQRkeW/EA2WfyVALWvPxyffU7SgYK6eM0AevMPpfFnh+NvyIcY/F1EjeC00AkICOfi7j8gmb/xUuDghVgFWSUNf2rRD1RBOY3Ds6fzKR99D2nntndYfniVgOzrXJ23j0WephCzV47tinD9fqEF8cTxHH26KOq3G/HUek1RZSREVNn4bESH61XltBpQyyP1/p69eUnnUmonZ8iF+7VXAZainrVqIyYDHcWqYaiV18Z2MF7ezP621xDq6o9aHgaqy2BiIWUo00CdCusV8op/UPwpe6tj53Hu1P2vSr2GZWABFZRHkJ1ST/KLWTUGRlmUHJy/e+M/hA1Gz11iIuo+S291yoPAOIzStOo8FoYw2oejVPAh21+ubb65YxPNGW1lYAyipJFbvSUmjXdWol7kMWIxlxMY0n2XtWPMD5XULJWGMmCR21gmrwpJb4aZaO21Ily5TNaRxkPtAsciUQj08DCURe9o9cZFkBO7QOGHhppqABIJwbC1ypRrZedBZZGD+P2dDR6UknuKceeSSmGsTVMY8KNMZn4PTwvG7Wq/2msfUD86bZVBfpvYYdZYq6aUELNb+eXkrPSzy4cKVyiJ8PGb+lZxiGRcRs74RY8QyuwqY+7m8NQTMsT8/PA2ciaCUYZ2MBkBSgj6PEqNkRXEfC3tDcFym6aUfVmbwTZ9nA4HnxRzbRJ/dvIQBz/lbQnf+2ME628DMW27qXhEwfgOxj4HQ2lFChkVaI4VZ8yZWe/utor8zdActfufc0ZHE0MdLa8kNGvtseb66wgxr899nhEzdG730nSelF+Tdlx3u/hhxmOc5C+2oR9CGLexbmx7DpJ8yT+I4avOd6M37/DqJ6738mPfcCiG2SlwgbmQL3vT/G3t1w82KVp/yIPMvYpq68MdDV5maMxPDyng/gO1pECK+AwYb2uS/i1R8y5qjg1EKrq5g8oheFv9EhJZ5ktigxvOkhyF9L';const _IH='da0d245f8398a002dfa1fefe2c4e0e9fd1c45944624b97f104f319a321655e07';let _src;

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
