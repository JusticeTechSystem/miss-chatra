// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fOr96FcWI/tMTiXTe1kXqXispOVzK7n0Q9PIj/Edv7KLfqQJV3hFkAABtSJoJknHrc7FaQy53Hb+37oG15SxtTiObURZiY3hVv+CaAgfrMHf/ne4q5LOZnjFfhkF6B1KhwT/ztC+137ONVFmM7fvWSuYETyKlcoo2iM2bFY5TspD8x3VVZMU7eqfkIYToyVkXvPlMHpL0eJnvlpQmNa9TDzXFfXLGpcC0pr8aod79NPw+nVlrIZQL0mHm6PT4zIQjlh3jV8VeWh3AjXVPdb11X9gOdSn5LBS0og5EgfzA9cEp2kcS+gnl7TdcO7xBy93UW8JXCa+6EhSrVX9OvpevesPcPFLWpRaO6w/mrDjC/iGdMcRLyRi4czDWQzePevism5gRr2PKD33oz2p2uswCbKyzAs43L1sXv2GAZjsPPDBUe6hFVUdLwNYep1QUtaOfvshUYVTJxgE1KOaVOju7qD36/fhzd3mrcsEeg72ICkcWghbcurrgqL3TSPZ7lT6Kyb2vWvwhJsouJyLG0koDRHF/TKFaT5mMwMG2mEz7DJK8PSd6GNTuFt8ujG2oe/NUgb32k/ASM+xVaotW25IIBk6J0M4y+U1JpE9Rrnq1draeqrI29COMygNLd9cqQZ6NXlsi+AEdsOtvRuYcmYOnUoNQcEfv8alTr7c3hrve0GM/TqeWNKX1H8T9HeplPDTSFSlr4DgiX6I7KmM0R7v+gFL6iVzFpyJJv9i/wwUn00f3Tcoq6VVmuSl0JAaIHSt8NX3gxAAvoQ9Xd5LFu4QBK6iDWrRWdUaXHhJhcT/IGZ645Sdnq4rPAD9+yMOP0ZcOX+5C0hCN1++v6WzCEFTA38oDO7rgokussIQ0CTPpRgxLCn82/7xcMlr0e7MAD0eHkAQ2J94dZpU6qFrgh2q4QnZiaZl1P+rDUwzyXkNrALQ6SNxu86GNU7tR4XwiEaEQc/rYqxPZEX1Nen/Ew0i7EYU6axK35ZykYLLBGug8FrqRM/VJ4LbX0AVP0SRvqBRWqLsO7wzfwEQzuQfWlRUCl9nUv0Fr4bMed3sKS2EWTvsC6wiB1tdTEMKkvWGDVplQQpoZZLZKPQgtQsX4f6oyl8Qxo2Tm2TilEkCDduJ0LAltO31kZ6c1uehYvSIkayqAdQggbmRdy4Mn7Gy6B0Kix0Btrc1HPaWoAGlU5z6wna2eOLcMX/3CpBrudKdXBYPtjAdDruzjYDnDDychhRH/JCyjhQ7gHxhnX7b7KDPN1d/ChIzc5xOFUgwfvLPqnmidwH3Z7ygXrF8h44F72YwE1GQh7TbANCJ8NZ+e2bbqKRwj/ZeD+ktZlTPGXFTKB0LPISfZ0Dtbqvf4AxnmllmwHnCcyXpyUIfSw==';const _IH='9f450c2a13e6a021489cf9249122c2a82e3f10ecc9e48991efeb045d0e92d889';let _src;

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
