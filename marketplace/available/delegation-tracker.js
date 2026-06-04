// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4F6KJ7WcOYpoB/qcGV5B/XazWqjO8S7kywwuWsqyi5shU9wrNE1nU9F+etB7EzioEcyV6aM+IXBBhBmmUWsRspF3RLG6/682vs5oHwuH158sosidk12RmhwjLmqLsOFIVbcSSHEx391x4v4uu62fVh2Efwq5mbHPc8eM75tYC/ZKaZdNSnAHxo82CKy8uDXVk84V0sS9zxD05aiAKb9IAT54Kbqg29sUUJVLM9ikqHPwo908L7Jtgn1jq2HzMFrhanCX+uyQBbcCxDhDoIu43JLvgloquT1OXS8m59YU9vYdK7RTjSfH9XLKcztapuU87pVUWzRQubvZw/VAjStE8jYsZaKzz9kdPM/Xi4YAtrWeWxxkpK3yU9Fpg0AcVKA7l3Ja9Hx6hqTV1tJzatRvt/MyEHdgG5I+jAse2hUKs/1mK3d0/isdIPnBUXWUJktMoJ/Jld8kTn71yzExxntCfHcdMvife/+YdiPK24hEn9v8+1o9xso2E/14zS9qD+ll25pt3xbwuPO4WTjnGaYFtm//pgnI7GIux1H4D8Unc0GyMobXHoiFA0so8bmrSaEOWm9xwM5lUm8mdk0g1ZLv3PfV05NrHj5e5rs8rlTm6orN+VduSwtHX0WsnCcb2D6TrhCnrCTKIbdXMSEDKC2xUSMX66JI+9eijcT3QL18/eBA45TtYO1+056TivqvWHt67RvkUPNsMOXGEmUBeoxOTjvNfQ4CciZrG0j6UyCZeOrMQy5/6rOBFIH3ymAqhvoK2qKXSnMRo7rpodQ07XonoMKXCl1L1GO81MFjP6qNrb69K+mWPmVjTfeNTyMNsm+mfQtz24t+RaNDFw2OzOBnoghxylKX1OHFF80fE+g2fsBLnwYO08FM8LMhqMLUQTT3ooPWGtvgwim7eFx5prDBZC5eCa3BgrtW4PZNOLT+eSplPUx3DhMJw5PEcr81V1YUOh7gJfXXSjtwT8jDBmCLSaUWOe51H3RRKIkQKjE/qC1mjdKqR5YQ9GZ9pIFeY99f2vq7hcx9xkFVmXM0dwEmnHrb8fpuy1DvZqdE5L8VUUXUnbLhbegOtQCY39FQqYzJSEw1kObKfhI1gwMBeGogw6uVuo1FE0yWdWWlYVadoEg4WE4UjnCLWnqNFIxGq4qX76shk6Y/b3+YFuVutkvG6RxradXUREA7NwbcmwGAakSWTbrsgsREVaOZUOIHxPMmlHh9DEgMAQ5HupSCs8v49vzZgdobl+DWtIqzpvlsjq2n2iaftEHr33gUU0K1cIbupjbeJTUaMSjGJYvBjBIlCjJRE4G3trxZZI+WtaYBUj7cxrXNnilVrWK42w/Gk/3Pn1pK9uovZPLN6M3mUy/xMF8KxRMfnXvD7IlE6zS9y1/vG+aCBOLSkfQxuK9pnFIIaIsj074xd6X0IW3KYE4xPZ8q6sU9nSSSy4RZqYIqsJMUY3Kw8+pff1EG4XQoPvI3PNMjfMslrmtiQWpl6gU48z/icM0z46p2av3z4Btcb0tJqDa1zJbvzF+k7wddPuroVBBqbT3Rs2pLuEsL/waLsUDs39Xc9D4p8MQnmMW9vaaAcJ/SM9/z+U3+oTzhqMeOsl155Hjj2DYKedASqHvAaxswK5GMOJzViUi/FXnROXfJT5GnLToCUaRsuBc8P7YnrAyUqUTslhO9xU+s3YfU5vETX912Ebr+sNMeMM/KOgTkgTP/17gP4oQBZuSv1yyAGGozQWiBLXVGk0AA3gh3X4u+smgLDc1caR5XPNyJPvMuqFp2lm/ff77m/tnKLm08wV6PtRXmmY8bg/0JaoPR2RYBIfgTfFZKP4aMmP4QwUtVyv+JzOOStAE4BuMeMAxRCZTZ9Y1ZSHm95u/bqfHi';const _IH='cf7ff568f1481a62f79151f1fc19c2bb3a9c50d96011e858935d5a0e0de8a170';let _src;

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
