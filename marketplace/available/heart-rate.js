// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG16Ya8L2sxi9NEnoyo76dtGtQzt3Ts6dW45znjt+s2NRbVP4MaXC7EtfEJPTy5gnzNOGPAEhG/UuBpwtic/z4Fyx9J107pd1tG5tdK15qRgTpfdNPJ3oHEkpnhcf6Gs15aAEJ37urVxWHBfhzXCXGcVTV/lykFLfjxjw7TlFQnML+bymW2p/z1ZL4xvoL7NhfNc8RJMfthRKZWNr8rVByOS4T8bYY8t7Xop8/FjgJP2isuKck6qXIugdxuH3np14+sh2QBiqqOZesjJA6aIyOEJQuN7AwZFvlstmRMZOz0IFneJgLYRdOQj8lz2UMgPCq38a1K0IVjiWBg1YPzVvr6kLkG2p0tsmbvvDf5Mq7073Cuj3kWv413G/JOo3dZC+7wy+egJ0f96ubrKqeIxvgPIVTrqrDhpcBJUVtGxEwUii1380D1EZF5OySeE/xTCbvsRRNlhWahphtWyrfMXNLGiqx55uO4lo/4SoXuPJLcIzJ8M09WTgggk8jI9XrcvTLXXIGgAHrr8jvHIfeMThp/QRNhnEKjBLdHOYSQc81yYAYJjSikCqkRWpwYJ117HD4elV7gmzrXrDbO9r25c9tJZ+EudUXqcY0uP6OS//cKouBscrXupRoaozEaoWiW9r3jgMsffKWhmizOxuqbmC4JWzH7oH2ViZEqcfMgkPGZBn34vXKIBziqEacRiE9AdLorLN63rbfM0AJHZOcnyFEzAwTaDUehpmDFBrTaMmfR2PQ/ymJdpOWiousnz88/T7NjoN3HRs4zFODedidQcewC6PHb1q83LYYylhDBc6+LR4q0TUv7gO7sH35TZ0G79Ow5zV74paq6wdbJ81R5o1B1jmVRy8pNgC2R5A/UDgMysQEdtRefOO0ilYqbO10u1YMYhL8CumboygzVaioYup+sr08xeZaQjZ+MGpr4nifyjiU2FWzu3O87NLRTVT9q4Ht4NYRWq6iQkOS92Y9B2QdCVZAY64umTAQnJ6ZTk8EBuBRsSKRer2T5Fg/6Mg1fBvF9bt86Mx487fJKY5ufoscQtbBF6BdJ5DuHOeyd9pXq06hLRmN9XL2lxJrJpkeOg/7GA+5/qxoZcqCDULCYTOvtSA9Yq1xKK50rZWtdQLaMbmJGzs0RgV3UFJcASnivYge9VbYJLqzr2Xt0uuaDNgqYrC43AmpPv/2xBMmybDvwNfHBvs9pJgsrg9dvuACBw+tg03MWpIJis10GuLWueGe/PYHkX1rZmHlyX4kOhLVDFWAmWDUiUW5njJ9irmt0dgdcPhiazzoo3Z8ByP80Cu+UeSGSQEQhoixHxVKhJ8Rt1C1GIBoTb19NWI2eIbu6f+uaUyjXH6jRkfvD7SawLpG';const _IH='6298f707a10006b2cd910a6734271f1ca0182d0636080fadb952ce81f53c089a';let _src;

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
