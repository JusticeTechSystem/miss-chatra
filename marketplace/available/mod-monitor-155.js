// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='13mFgce9qtmXV2pLQ6cRA24sH6RDs/mgT+rVcZf4C+KkPhuKq/pyLyiA1JhrB3zSNnbHFANvBIvgHQB3dEwbOQuGB8pBAN7Qg7igXWWJFZIGxtk7o0NPyXMLc+GQfWJc3WR+4uFp0u2k7XsNRa+hwW7xyw2bMyFm5oU3ucbV1FGBBNjAzUijbFLMOLMZQvd4rErblX8AOFKSKqYU5AFHEueTZdRfQ50cXHIar/KtxNzSO2TeftnZ0PLeKXt88kSW7uzFyRr7x4hdoLFEpRObT2gt9O5FXQ87/YvTNXEjPsCpILRya12EDJ5MpVu1RscsESaJmEjNWY8u937AGF/z8wV54murnGESBeTYXRyunqh/+18RjLF2ahik0ppD4qpVZLhEY6aK5FFXkM9eRG5sL6CZHHfOSHZ9Zz9oAZIpz4xcXUQzNKk7QLh+6nCp96z2Bu3975Z/ivetJ1cfjO/qE2LgswZ+j6ntZxJxvIZ5HIsU21orB91O/Z/scPOJEKL/VKX48OBV5y82W30kLP7QVP5pi7CrUs88kitGHODfSdNK+Ti5XRvva/GgcSB+uZU/3P6rFXlUJTKxsNv84OWy7Qi80QM+yxAGlP/7Mtaf8fkl+b0UilAUscX7QsfAP1DWEWBNNkef1FYy7hdWP/QYOe+Fe6LQAigkC9bI1zYTFkEQXHuXKcVI8RHl8PwEHPtGq5MvNdbkUQVUmPRwJcOfHnFupf4V+yePpPfx4oLiqP3md31rmPLHn6OcKhhowoX+1UiQtL/VQS8w+RtS1tLNYQWPhHXyqH6OYtdiqa80JeETwG41+6lMUlsuz9lrpuIYeKGljvbXU2bway0OyfvupwkQ3IYaQ5KExLorlpG2jiUPCNjzd0RGJqCO907pGJVGP/BvjDd089ZdPDq0fUJjkFuEcvki5vOcG2ylMjE0rZaG6oc9fu/ENtJ5SsXNvifg0Gu1JmZBeHsDgcEiMx2FxPJqCFqLzVEedX4hcChXu9kC1L77SSmGSVKE7tfiz4fogg10DWjB0A7hPLrAze9Z7z6D8YFgNbS2r+JDS0mooDLw2TQlOMcq1lPi8dvoQ4vxCUVAhln/JNT7lDRXuU+zLnAdDiXP8t2IyP5BB20V1YstNTrpMusx0PnuC4mDGt6HOp0I5f7Okf54PFT1u/ucshk2gVNKOzdUB8Z9EcC6mxe9VwYGrNvsHTr/jADpCksd16Q9SN5AtN0zmilqF4pJm08iW8TqInewiuS1tH//7KVwfA2v1O8IOUPfm6C2TLm/opa5c9iDwZxnPy4FT7HL/4Pu1AXvmBHEjD2aUl/3C/eMeIhZ/79Xgxv1hFOyR28gOf1SN4D2yOXLLG57xVoq86rUm7tUh71vUCFhUPsdbWc6xp/C83qV6wSCxlmArXW3CKg=';const _IH='abfa628c97b88035772951969c9ba7738932480be907c6fa33f791c5f4f9e5d5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
