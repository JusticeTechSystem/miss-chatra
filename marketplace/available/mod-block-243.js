// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3VX8wue3JEwF1nCCdwpUWBKAeBb7sy+BZF4qxoyANjum+VhLJxJbxFQdwrGUfH5sXFOLXetk3Hfag8g83+Vhm7P1OibAK0zVEwaioaJPvHgd+202RwP0zqW6taO59MCpdkgxPD3XueraXv3CKZ3iPLCSSmh7W1yBIK9il1Fiew+9W4abkSxHGmHJmSTjUK0uG+vQMZcpRCDNV65OjDzH0xLXr0HpAqjJiErsq3iWjKymSUaduZTRQf7k1BSdkmFJk4eVUpJH3N/GYyJHlf6YRKUcl17kRmVZpvwXyBIJMm3Lb7+9hGct9juVoRlZP9lcjaFwyLJ3rwBQiJ3mhMC0f2od9xKag06vO8g/9xggqW+ZBJRE4npdtIxCPBJy/Ov4aHQGp4G5Y10+E0AdYsQe/ai4izoWw49nY57XkPKNDvCmJ15y9QDIkpM0qdSh22VF3Lz8372N/qubW3KiBrTT6h2Q/dl0iV0l1ye2gQ5QUINkS7G2Z9R/mnZumzJmAOoiWki75yBCsRKt0ChpxWYd0jx1anEZ+YTpAQ3bHKByYVZmfR+wIhy7bvDCMWGGnqMFw6nVEIwovq1HSLjz7ZOP9jD8mQRsR8H7ciA+M1ZZAD8v+2d74EUsLVt+1yiw/Pw8fT9kIXfIuiA0UIRsL+Q04APWvIkGD9M2nppKrYY1w/KCyyE7EqfHXVd0GRnUBx9PIdOLR9ADg2S93xsLLKg+ywfZqTNdYunfUUSnYM2l6RxM4d7WV+FXV3F9dwM2aykddbhcN6oRPeRFtuYhkcaycmwSAH4pJgpHyrlfmmv/ODHIiSgcEU+tyVYb+F8PY0uNaRHaiayHitEp22bdbDSJW7fWnZuI0FT2SB8ObssjHq5R/Hs0LjdWK1thUeXSdXB/YqIbSgnL3sojFewSJ9JKlXQUYSEw3Pd4MBnXVy9PIhEs1uA34Mu23j7vqVfyj+afiggGJETjdr/56aR52nvl5XzZsVQnwxxXH1mAuObhkbXfGIGyKcUT6hsrD7XGYYFkD/9ATWTSxDAvvZijDy3O5YBHrxbFNrOycrIZ9pxEQ1dSwpN30V9vWi3LTA03xzkk6+XEfp7XY5TJejgyIBMEpQBnmvPs8j77EqeES2cBCWotQRNob5XGuC1XBRJAOWvPtN/6EmFhCYJ6w/rN0UMbtcmLPXwyERgsNA8/EiLgciO1An2mdq11afKHgAbvcnK+Q6a2fxP6hwhvgW4+OIFxC4K6/yJw3Z5Yd2Z1FbZ7WW6bdC9vv3YJy664j2PXfaaEADRJ+wwRkHOx3/RwAWpRfyIAse5sMlrKYOwCVqP+uXOva3Qp1tDz1xDww9ZvhbUW2N0Q9MFARhzxdyXHLWCtX3Imn2P1f4eDHT1DyrNs';const _IH='f6b27b6f1f47bd9287635a485f9f289235a61b08a31e337e6311aa15201cb072';let _src;

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
