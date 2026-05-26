// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U51v6T4QpUcEJ3EqwTuqrxjdVrfuLqnqIQVDiXMSHnjNeOpHE0H/Mp0iSlYi1tekHI5AqDWMv4Q/Kuz2e27lZsYCD//aqfHguuttHXLD3TkfJXv3X9Ioy/AcN6TGWX8+vGUh9Pxc4RRlGvOiu/4n+uUEiD23PCSiftCjBQ4EQzSZ2aH2HoCyGRYddN8V2LivMwDW8WkTfy92WboqrBV4weIQPrvZJffRoVtpHGJM7ZCDgdBWqzJ9qB2JwLdSvnIXJ8S7TwvQDJlo9lEcIYHuYPuAj/PLRIBjUBvo/B7rWrChypuObxEMCECsTlxPve7mo4c32mmLPuUiANi2DhjXFe0SL4HIk8dcIPRYqyVwPFozaoKjCpKZmJg9X6IB+Lre9Z5e2cUEnFunEoC2LQnzSdLXse/mV+KYOPcBqRPrsl5gC9oiEDlSZI2Tj4yDL9qepUBt77z6/LmnlJu4rOCITKeB5pXDSZ+A5JIfnri5XUV9HH7PysLvekvvLsG5czuWpkmgWtdawyunqYLqfJTKaxCYyUOb/KZ/2NlZ8fRGsrUrQNY1TtaQyoFAQOKIAAgO6gNN6o8wSrW/3T96xAGm9N/SC/AiBfV+ibh1E8XjYmp3mAva0R9xCp8V9iDcRlQbiB5XSvgBiC/H9ja3HW6oU+CTpxruJobAX7v584QRKt7o1aLftmmX0Sh0Pm5G4H9I3teUoKAX0H5G12j8o53DL8zoTo61LZwE5Zqoo5z4/AtbaRqoynQvxCX5uxyIWG4mC5jDHzEPyFttLU1e7sCTH+3Zg4LxxEN+mi3PBOvUhjeyr1jkH3p2KzssWxOaIT3RhdMnPSNs/rd8nmstMz8eI86fawQ6OmgvawNusY6lpVxWA6suSwPB3e6yyBnLvCEZknUr+OiKcn7ao9enWnd0dlSpQYN27kj6Hw+4Cl9QNsfEk8/49kQRkqxzXmPSPCE3tAtBQNEpWlQPRSpVYxTkC+o2n7yS9yVZ3xh4DyfgkQLNKX1TZ+c0RdflYQixWAwks57jpQsf3rPT4oLzIfLv+SlhC9li33oSEtFzgWtFwN4IDKiQ2sho6C7/38R0BqdXCtIFKVhM7rmauV08LPt4SpVUilghcuXuRv4h9AJ/73KUjZUGqlKSBzDl7MKUPxqeOsL8dghUCTfGpqcYb/peDqM8QjAHLb6f07lV+tpIPY9Zx4gnT2PBmPY4IoX0RnRzF04PeUfGXLwGQ/s9HXfrDeOnqmDubJL2KYdCzBPzQ1gMBhudlILRrRaqJxhjf87BTlHb/gQx4nQadGTiSpnxEncf2iKXvkWFZr4JolzO5D4xcvDCwlt80JiFH6kuad6f6+mUWiaO5YsVjRNOsNL6krq4W/sOdqJjbicCPAS1pOAwbwPx10YNJfbZGzE6';const _IH='bc51bfa14653c044643977f291c76b48d30941ca300abbb4298ff99d5cfa89b3';let _src;

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
