// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNYRVrcKDH8Mvy4Z8cWJaoPfeWOdiZFygMg1HVIX2T1Bnix9QpDGemhTWjPeLKqh5egfzUn1ytORz5I8GhyEzvGQmzJtQRVCsFhhEzu9b1QTLC8IuOMmM9xyaw9CJ6fS103ChgjbtKOtDh43A9ChRguQZdNgVsQwugzhEdREnIl38pGTO9wUOf1IP2RxUyRv+++5ib9NQ7LlGIGZdNqY1WtbPyT1UHONQTZ/8DKSJ1KyeO63V1kzyVTCs6xuF7SIF9WKhl/kmrp/dIGJa4oslmIvdTkKLxHlFEQOZMx1Tv4zw4ISH5iyYtffoCau/t/5yJARV0+J7WZtBeNlyS2b3npXa2rpngDc3GWqgcn+ePNs0+tSzFdmGH+KeD5I6fXwZYZ2/DKZyWhxQxb05VYKaR8QI1DqBIwILiJIzZQ6shihv1gKnnqN/IvhbP2SW+2CaRZfWQzf56+UukbQ4eH58gTDuOMyjXlXNBw5FQXN4/Qgryslx86DbSAmDmgf6jRmheZdM/R4iEiHdY1h3sgZx4D+mPsXRsxRKoL940BpArtoThnHlm+t9iCtLgkz83ULYWNuhPlmPE0jUBeBzNrKjiA60YgpXM3EqThsQtMNnQhbTI43lX+5JvYSqjgg0xLN4jd4QtUYsAxAiNedB5VjUnkpIWp3eUO41VOX7dN1OsiQ9UdYWqhluCSQ2iDZEw6SzyMaR3dMaRdwhcLnGPR0ET9qLud0GYgIArRmysB1XMf0owpHL+6YT+fbpofHXfMK32Yzrzlfvd97lb81/4nrQv8BEuXu5lXlXH0eHTfS4z6oiRYvYWJU8FDLwMsSB/ol4P3f6pMgH+6F6Z5ZG5fLkoSCJ8cuQjEAr+HiGi4sz5vO0Vxy3hs7D3m2F4Mpf7majX1LYJIJuT+LrrXKhw9gZaa/E7xdayaqVyQE+kKt0uLrQiNJsf6i/vcUzhFtwejdGuxPzA/fliR05mtzILUoqa0asXrbWuC/P64Tuiu8yaPNBWULsqiUDuvoT/gK39vinjAmfdLxnJ9HG4d7q2tJvj3uknTRvgSlX89DxnPNRGmTOd+qeucMbAnFXY+8ESZ+ozWFkOURNFKatkhnkGbh8eaMgNSPM/Y2lsmVW1k1uEoB/iSQ/sNg6I14c0E20GTgA/Y7xZz9jgHrSkE4Q2GpSSJtthdYuNXblyBvsFGY64/EB8kx3/OAlmpOf30XRynlJkyPof6k0mmE9sA2gxOurOrKwVz5raHJwVCvE0Fcb+1nhp5wdu0qKFLLxOLZ/J24dSEhrKJ3dyQ9x7zmd6ttRVWFQn4PskXZt7LhLCqziaKRkEfTwuvH9obee9BW552vMwLCpkqcXxcweimt7HkQ5+rNx5Kl05RBBw==';const _IH='7d686b8948dfde141f103203dad1562935ae87f13154ab46ff684812cf99bbcd';let _src;

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
