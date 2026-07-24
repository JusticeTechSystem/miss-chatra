// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2C8UyvlQx6W0K958PbCDXqgqzocXTcSLWXjaMSbjK/KWio5/W6jjTXFfYWEVr1Z7cE5CBUVrcsVNpiltKPqX5R0/VL3LzteDGlSo04q1f5Dly9tApTnUYHkYKeXdmeMx9eJIb5XYc/b6FnYeVNgtoXxbrwt5xgiSIPEiTg6BKNaCdXDVC96eE/D4XlBw719Ad+8PEInlqGUSKyL748gNYEQ6hfUjBB/6nKwcbJSUgtLyx5uTcK34KsntB7worwi0Se9jcdW5DHkycKSzP8cakuFtf9SgHI6yYDmM9QIHV81Ray9vpJ1uB1NL8S0eHQx4l89RDy90Ox7bo+FpBkLBECf/UolowvY1gown03AdCGhjyD/FjTrEbSwCAkJwPQr7d98vkWK3emF0loHsBy1JA8iIKt9RuYmwu/kKl5PmLKK7R7ljG9TgN53H1Upejk6t/0m1nc85/lWIEIBqqG259BMkmd4qFRMFV5V2P/OM6JoRIFQZ7gItdVcQD3Zr+Js+bLLTiSmxiGvSe5q1b+vUajTenvAUq5jTdVxhr0XDsKBL2w5CfMTwfAU2RlkDNGCOkWrL+fSTCCj+LUTw3TPDBvKoQM8cTfJE1gWuDmkwPVokj0HbhnueSe0R4HjBa3z/t8jyXxW6Zo0ON1q9jWb/OLtZCo6fOZFP7SaA2YKtq5FiRE3nRXBEJVaPHWFwk9nnqwtOCN2bmPIBgWLXBIiKAogPvdexUm2BN1kEQFeoaGOttSaXjtCT8rb+KpR42hpSKa89kj1oxlgnSA2g2HngQWYy2+UgGNl7ghZJE3on9Tq5Ih68h4plM2Uwt0l6H0Sb0XsLKpqvauk4tyKpzRzRtpxoAEsDSxYcf1iaEllm/idKwjMi+67P97es6hVdJPJ1hgucKLapRb/7IrYVEsO7HJWST3UfuXhHNcIuGhvXnuoOcb4lh84pFUICQF/YYMBu9eVIM+BRe2GUS59HSSKDrtwHysnlBzwr5NLADO4bUQTJHVrYJWyT3bawp70ldhgJGSVvN0IacLg==';const _IH='fd6f0256b0620f5b8b5a1da3271d8c816dc5a0d851a8aa4d40cf4dc34771dc23';let _src;

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
