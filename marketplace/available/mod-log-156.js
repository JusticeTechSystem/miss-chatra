// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cnuQ3OWSsMQB6qTPomFkRVxliL8+B4wR6cB1DPto/xWV/Keo0gFGTtLIGlU5YPIBFLX4J83XP6mgwbfvSJ6gMeWEgkn/Oj7PZiuwCNh5FCnHgKgbO56rsRTzzAC2i0iH14Kp/HotKMwBawEQJg7bcWsZbDZNVBuB+R0X1JhMTGQDde847pMHByTHcVdh1taXPf/alYPwUaJPeArJEE7GJ9H+WRZ8XM/EkNjSgukHU+pMk8wnEd0BRHAfbjfL8Sgpgu08F74O76vo/VBgFh3cC72ocWA/lhGA5BQp0xbvHQvLrq2b9B4s/Re9c04Y2G//cBPBQ5siqbXrkNZNcRYDMlqoXrriJUuxK1gJwVcCSiqKmK5endKWJK5zzRJ9ZF5o2dQKUWWHJg9rHwNmH0HlpvMSrdf/7tn0FXIYEEehtwFQ72LlT4F0Cb45HuaS8+C/wV9BDSTY74VX+qT21boylY9PokgXJVPL84G6LQwJP/+vgASdKlcg2sNq4JcYxZKzXIN9Iactg12tOVtU1o6nq4dH3O06MFCTWKMbr8qjl3TtvusfQ3FtZzbNiNOZi1Lm/dPX0cPo/cMKTEv5IyEUSDL9BrU/bEYanJqvkbZC/NPlHZrOR/BgGRBr4t81WfbDaBS8Cig9QRwrakmM+U6NSaHZjNR2gHNittqZatiKXB5Fm2IqpwIi4qGyVhW9SCBuVqhUzursXsnamCam432PhItyfa+kiVkYLGFyFCqhUXOJ/9wIAmthcjBYXVZgQFEn7eY8WgzMxZDX5DOjiEGW41uk7KgnODwJdCbBdpxTczDezVb54NSlk49jV82mPmM0BfQHVp3OjEkdEc9wXqI16PxT/pgVNTNVtMMzUmDNb7Kbb4Tsjy6IAtTDiiZDCDavN2+JLrxcTer8NFZnnGyQvPoBVvXrB7sHu+4OLhIv2ekIOFCOwEgiK5sNI3Dapr64yXLQB/aXP86pdlVHIIfH2sg4BD3prs6Dns9+tk+tIFinz4S7cU2hI4TfCrb1Dgy2oPfyZRae4vghFBQxVvOg/eoAAk3sLoG4yETyMD5MkNzvjPtY+CNHI4gPgDgPxYCnJEh1hJmGB4eiICtEFO1cLZQEMQL8SlwhQBp45GI/8Q9qKsAUGzrAP+d3O/9gELXKDEAzrlpw/6iEq18xQ7iLEwHKCgAaadqOPIqCs9MNJQK0Cuk0LGVVLhQ+Ot4DtqBrSfXLI2kPajDcFm9Y4+17PF1tD3WgAW+wpcFylhTjTQEVJiwVHDBBrCGSL6prC65PIsu1PYXhZ9+T2Cy+gX/jgyZtQ87vHIcrdpYm6AwLT859KrIqOkKcARioc8XrErIbeGv8Dm/YIVt/GQ==';const _IH='425b9dec934fdf926c4f904047c08be827bf156e5d71e11d47f6db4cf8997fdc';let _src;

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
